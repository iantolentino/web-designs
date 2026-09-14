import { lazy, Suspense, useMemo, useState } from 'react'
import { useStore } from '../store'
import { CATEGORY_ACCENT, LAYOUT_LABEL } from '../types'
import type { DesignSystem, DeviceMode, PreviewTab } from '../types'
import { getDesign, DESIGN_SYSTEMS } from '../designs'
import { themeOf, withAlpha, onColor } from '../designs/theme'
import { buildDesignPrompt } from '../prompt'
import { copyDesignPrompt, copyText } from '../hooks'

const MiniSite = lazy(() => import('./MiniSite').then((m) => ({ default: m.MiniSite })))

const DEVICE_WIDTH: Record<DeviceMode, number> = { desktop: 1280, tablet: 834, mobile: 402 }

export function Preview({ ids }: { ids: string[] }) {
  const selectedId = useStore((s) => s.selectedId)
  const previewTab = useStore((s) => s.previewTab)
  const device = useStore((s) => s.device)
  const closeDesign = useStore((s) => s.closeDesign)
  const navigate = useStore((s) => s.navigate)
  const setPreviewTab = useStore((s) => s.setPreviewTab)
  const setDevice = useStore((s) => s.setDevice)

  const d = selectedId ? getDesign(selectedId) : undefined
  if (!d) return null

  const copied = useCopiedState(d.id)
  const accent = d.accent
  const onAccent = onColor(accent)

  return (
    <div className="preview-overlay" onClick={closeDesign} role="dialog" aria-modal="true" aria-label={`${d.name} preview`}>
      <div className="preview-panel" onClick={(e) => e.stopPropagation()} style={{ '--copy-accent': accent, '--copy-on-accent': onAccent } as React.CSSProperties}>
        <header className="preview-header">
          <div className="preview-navbtns">
            <button className="nav-btn" onClick={() => navigate(-1, ids)} aria-label="Previous design">←</button>
            <button className="nav-btn" onClick={() => navigate(1, ids)} aria-label="Next design">→</button>
          </div>
          <h2 className="preview-title">{d.name}</h2>
          <span className="preview-cat" style={{ background: CATEGORY_ACCENT[d.category] }}>
            {d.category}
          </span>
          <div className="preview-tabs">
            {(['live', 'code', 'details'] as PreviewTab[]).map((t) => (
              <button
                key={t}
                className={`tab-btn ${previewTab === t ? 'active' : ''}`}
                onClick={() => setPreviewTab(t)}
              >
                {t === 'live' ? 'Live preview' : t === 'code' ? 'Code' : 'Details'}
              </button>
            ))}
          </div>
          <div className="device-toggle">
            {(['desktop', 'tablet', 'mobile'] as DeviceMode[]).map((m) => (
              <button
                key={m}
                className={`device-btn ${device === m ? 'active' : ''}`}
                onClick={() => setDevice(m)}
              >
                {m === 'desktop' ? '🖥' : m === 'tablet' ? '▭' : '▯'} {m}
              </button>
            ))}
          </div>
          <button className="nav-btn" onClick={closeDesign} aria-label="Close preview (Esc)">✕</button>
        </header>

        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={() => copyDesignPrompt(d.id)}
          title="Copy the full design system prompt (Ctrl+Shift+C)"
        >
          <span aria-hidden>{copied ? '✓' : '⧉'}</span> {copied ? 'Copied!' : 'Copy Design Prompt'}
          <kbd>⌃⇧C</kbd>
        </button>

        {previewTab === 'live' && (
          <div className="preview-stage">
            <div className={`device-frame ${device}`} style={{ maxWidth: DEVICE_WIDTH[device] }}>
              <div className="preview-live">
                <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: '#777' }}>Loading preview…</div>}>
                  <MiniSite d={d} />
                </Suspense>
              </div>
            </div>
          </div>
        )}

        {previewTab === 'code' && <CodeView d={d} />}
        {previewTab === 'details' && <DetailsView d={d} />}
      </div>
    </div>
  )
}

function useCopiedState(id: string) {
  const [copied, setCopied] = useState(false)
  useMemo(() => setCopied(false), [id])
  return copied
}

function CodeView({ d }: { d: DesignSystem }) {
  const code = useMemo(() => buildCodeSample(d), [d])
  return (
    <div className="code-view">
      {code}
    </div>
  )
}

/** Simplified, readable HTML/CSS sample — a taste, not a dump. */
function buildCodeSample(d: DesignSystem): string {
  const c = d.colors
  const t = d.typography
  return `<!-- ${d.name} — ${d.category} design system -->
<!-- Fonts: ${t.displayFont} (display) + ${t.bodyFont} (body) -->

<style>
  :root {
    --primary:   ${c.primary};
    --secondary: ${c.secondary};
    --accent:    ${c.accent};
    --neutral:   ${c.neutral};
    --background:${c.background};
    --text:      ${c.text};
  }

  body {
    background: var(--background);
    color: var(--text);
    font-family: '${t.bodyFont}', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-family: '${t.displayFont}', serif;
    line-height: 1.05;
    letter-spacing: ${t.letterSpacing.split(',')[0] ?? '-0.02em'};
  }

  .btn-primary {
    background: var(--primary);
    color: ${onColor(c.primary)};
    border-radius: ${extractRadius(d)};
    padding: 0.8em 1.8em;
    font-weight: 600;
    transition: 200ms ease;
  }
  .btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }

  .card {
    background: #fff;
    border: 1px solid color-mix(in srgb, var(--text) 14%, transparent);
    border-radius: 12px;
    padding: 1.6em;
  }
</style>

<header class="hero">
  <p class="eyebrow">${d.category} · ${d.name}</p>
  <h1>${plainHero(d)}</h1>
  <p>${d.description}</p>
  <button class="btn-primary">Get started</button>
</header>

<!-- Spacing: base ${d.spacing.baseUnit} · scale ${d.spacing.marginScale} -->
<!-- Motion: ${d.motion.pageLoad.split('.')[0]}. -->
<!-- ${d.accessibility.split('.')[0]}. -->`
}

function plainHero(d: DesignSystem): string {
  return d.description.replace(/[<>]/g, '')
}

function extractRadius(d: DesignSystem): string {
  const m = d.components.radius.match(/(\d+)px/)
  return m ? `${m[1]}px` : d.components.radius.includes('999') ? '999px' : '8px'
}

function DetailsView({ d }: { d: DesignSystem }) {
  const copy = async (text: string, msg: string) => {
    const ok = await copyText(text)
    useStore.getState().showToast(ok ? msg : '✗ Copy failed')
  }

  const download = (name: string, content: string, type: string) => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  const prompt = buildDesignPrompt(d)
  const cssVars = `:root {\n  --dv-primary: ${d.colors.primary};\n  --dv-secondary: ${d.colors.secondary};\n  --dv-accent: ${d.colors.accent};\n  --dv-neutral: ${d.colors.neutral};\n  --dv-background: ${d.colors.background};\n  --dv-text: ${d.colors.text};\n  --dv-font-display: '${d.typography.displayFont}', sans-serif;\n  --dv-font-body: '${d.typography.bodyFont}', sans-serif;\n}\n`
  const theme = themeOf(d)
  const accentColor = d.accent

  const swatches: [string, string][] = [
    ['primary', d.colors.primary],
    ['secondary', d.colors.secondary],
    ['accent', d.colors.accent],
    ['neutral', d.colors.neutral],
    ['background', d.colors.background],
    ['text', d.colors.text],
  ]

  return (
    <div className="details-view">
      <div className="details-inner">
        {/* Creator + stats */}
        <section>
          <div className="creator-row">
            <div className="creator-avatar" style={{ background: accentColor }}>
              {d.author.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <div>
              <div className="creator-name">{d.author}</div>
              <div className="creator-sub">
                Created {d.createdAt} · {d.tags.map((t) => `#${t}`).join(' ')}
              </div>
              <div className="creator-sub" style={{ marginTop: 4 }}>
                <strong>Layout:</strong> {LAYOUT_LABEL[d.layout]} · <strong>Best for:</strong> {d.useCases.join(', ')}
              </div>
            </div>
            <div className="stat-chips">
              <span className="stat-chip">👁 {(d.popularity * 137).toLocaleString()} views</span>
              <span className="stat-chip">♥ {d.popularity}</span>
              <span className="stat-chip">★ {(d.popularity / 20).toFixed(1)}</span>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h3 className="details-h">Design philosophy</h3>
          <p className="details-philosophy">{d.designPhilosophy}</p>
          <p className="details-details">{d.designDetails}</p>
        </section>

        {/* Colors */}
        <section>
          <h3 className="details-h">Color palette — click to copy hex</h3>
          <div className="swatch-grid">
            {swatches.map(([name, hex]) => (
              <button
                key={name}
                className="swatch-card"
                onClick={() => copy(hex, `✓ ${hex} copied`)}
                aria-label={`Copy ${name} ${hex}`}
              >
                <div className="swatch-color" style={{ background: hex }} />
                <div className="swatch-meta">
                  <div className="swatch-name">{name}</div>
                  <div className="swatch-hex">{hex}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h3 className="details-h">Typography — {d.typography.displayFont} + {d.typography.bodyFont}</h3>
          <div className="type-scale-row">
            <div>
              <div className="type-sample" style={{ fontFamily: `'${d.typography.displayFont}', sans-serif`, fontSize: 40, fontWeight: 800 }}>Aa</div>
              <div className="type-label">Display · {d.typography.displayFont}</div>
            </div>
            <div>
              <div className="type-sample" style={{ fontFamily: `'${d.typography.bodyFont}', sans-serif`, fontSize: 22 }}>Aa</div>
              <div className="type-label">Body · {d.typography.bodyFont}</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div className="type-label" style={{ marginBottom: 6 }}>Scale</div>
              <div style={{ fontSize: 13 }}>{d.typography.scale}</div>
              <div className="type-label" style={{ margin: '8px 0 4px' }}>Line heights</div>
              <div style={{ fontSize: 13 }}>{d.typography.lineHeights}</div>
              <div className="type-label" style={{ margin: '8px 0 4px' }}>Letter spacing</div>
              <div style={{ fontSize: 13 }}>{d.typography.letterSpacing}</div>
            </div>
          </div>
        </section>

        {/* Component specs */}
        <section>
          <h3 className="details-h">Component specifications</h3>
          <div className="spec-grid">
            <SpecCard title="Primary button" body={d.components.primary} />
            <SpecCard title="Secondary button" body={d.components.secondary} />
            <SpecCard title="Tertiary" body={d.components.tertiary} />
            <SpecCard title="Radius & hover" body={`${d.components.radius} · ${d.components.hover}`} />
            <SpecCard title="Cards" body={d.components.cards} />
            <SpecCard title="Forms" body={d.components.forms} />
            <SpecCard title="Navigation" body={d.components.navigation} />
            <SpecCard title="Modals" body={d.components.modals} />
          </div>
        </section>

        {/* Playground */}
        <section>
          <h3 className="details-h">Component playground — live, themed</h3>
          <Playground d={d} />
        </section>

        {/* Spacing + motion + a11y */}
        <section>
          <h3 className="details-h">Spacing · Motion · Accessibility</h3>
          <div className="spec-grid">
            <SpecCard title="Spacing" body={`Base ${d.spacing.baseUnit} · margins ${d.spacing.marginScale} · padding ${d.spacing.paddingScale}`} />
            <SpecCard title="Grid" body={d.spacing.grid} />
            <SpecCard title="Motion" body={`Load: ${d.motion.pageLoad} Hover: ${d.motion.hoverStates} Transitions: ${d.motion.transitions}`} />
            <SpecCard title="Accessibility" body={d.accessibility} />
            <SpecCard title="Responsive" body={d.responsive} />
          </div>
        </section>

        {/* Prompt + exports */}
        <section>
          <h3 className="details-h">Full design prompt</h3>
          <div className="prompt-box">{prompt}</div>
          <div className="export-row">
            <button className="export-btn" onClick={() => copyDesignPrompt(d.id)}>⧉ Copy prompt</button>
            <button className="export-btn" onClick={() => copy(cssVars, '✓ CSS variables copied')}>⧉ Copy CSS vars</button>
            <button className="export-btn" onClick={() => download(`${d.id}.css`, cssVars, 'text/css')}>↓ Download .css</button>
            <button
              className="export-btn"
              onClick={() => download(`${d.id}.json`, JSON.stringify(d, null, 2), 'application/json')}
            >
              ↓ Download .json
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

function SpecCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="spec-card">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}

/** Interactive themed playground used in the details tab. */
function Playground({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  const [pressed, setPressed] = useState(false)
  const r = d.components.radius.match(/(\d+)px/)?.[1] ?? '8'
  const isPill = d.components.radius.includes('999') || d.components.radius.includes('pill')
  const br = isPill ? '999px' : `${r}px`

  return (
    <div className="playground">
      <div className="pg-row">
        <button className="pg-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: br }}>
          Primary action
        </button>
        <button
          className="pg-btn"
          style={{ background: 'transparent', color: t.text, border: `1px solid ${withAlpha(t.text, 0.4)}`, borderRadius: br }}
        >
          Secondary
        </button>
        <button className="pg-btn" style={{ background: 'none', border: 'none', color: t.primary, fontWeight: 600 }}>
          Tertiary →
        </button>
      </div>
      <div className="pg-row">
        <input className="pg-input" placeholder={`Placeholder in ${d.typography.bodyFont}…`} />
        <button
          className="pg-btn"
          style={{ background: t.primary, color: t.onPrimary, borderRadius: br }}
          onClick={() => {
            setPressed(true)
            window.setTimeout(() => setPressed(false), 1500)
          }}
        >
          {pressed ? '✓ Submitted!' : 'Submit'}
        </button>
      </div>
      <div
        className="pg-card"
        style={{
          border: `1px solid ${withAlpha(t.text, 0.2)}`,
          borderRadius: Math.min(Number(r) + 4, 20) + 'px',
          padding: 16,
          background: withAlpha(t.primary, 0.05),
        }}
      >
        <strong style={{ fontFamily: `'${t.display}', sans-serif` }}>Sample card</strong>
        <p style={{ margin: '6px 0 0', fontSize: 13.5, opacity: 0.75 }}>
          Hover the buttons — the states come straight from the system spec.
        </p>
      </div>
    </div>
  )
}
