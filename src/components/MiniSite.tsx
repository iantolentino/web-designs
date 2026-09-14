import { useMemo, useState } from 'react'
import type { DesignSystem } from '../types'
import { themeOf, withAlpha, onColor } from '../designs/theme'

/**
 * MiniSite renders a complete sample page — hero, features, components, form,
 * footer — entirely themed from a DesignSystem. Used in gallery thumbnails
 * (scaled) and in the preview panel (full size).
 */
let dvScopeCounter = 0
export function MiniSite({ d, compact = false }: { d: DesignSystem; compact?: boolean }) {
  const t = useMemo(() => themeOf(d), [d])
  const [modalOpen, setModalOpen] = useState(false)
  const [formMsg, setFormMsg] = useState<string | null>(null)
  const R = d.components.radius
  const radiusBtn = extractRadius(R)
  const scope = useMemo(() => `dv-s${++dvScopeCounter}`, [])
  const scopedCss = useMemo(() => scopeSignatureCss(d.signatureCss, scope), [d.signatureCss, scope])

  const cssVars = {
    '--dv-bg': t.bg,
    '--dv-surface': t.surface,
    '--dv-text': t.text,
    '--dv-muted': t.muted,
    '--dv-primary': t.primary,
    '--dv-secondary': t.secondary,
    '--dv-accent': t.accent,
    '--dv-on-primary': t.onPrimary,
    '--dv-display': `'${t.display}', sans-serif`,
    '--dv-body': `'${t.body}', sans-serif`,
    '--dv-r': radiusBtn,
  } as React.CSSProperties

  return (
    <div className={`dv-site ${scope} dv-m-${d.motif} ${compact ? 'dv-compact' : ''}`} style={cssVars}>
      <style>{scopedCss}</style>
      <div className="dv-stage">
        {/* NAV */}
        <nav className="dv-nav">
          <span className="dv-logo">◈ {d.name}</span>
          <div className="dv-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Features</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Pricing</a>
            <a href="#" onClick={(e) => e.preventDefault()}>About</a>
          </div>
          <button className="dv-btn dv-btn-nav" style={btnStyle(t, d)}>Sign up</button>
        </nav>

        {/* HERO */}
        <header className="dv-hero">
          <p className="dv-kicker">{d.category} system · est. {d.createdAt.slice(0, 4)}</p>
          <h1>{heroTitle(d)}</h1>
          <p className="dv-sub">{d.description}</p>
          <div className="dv-cta-row">
            <button className="dv-btn dv-btn-primary" style={btnStyle(t, d)}>
              Get started
            </button>
            <button className="dv-btn dv-btn-secondary" style={btnStyle(t, d)}>
              Learn more
            </button>
          </div>
          {d.motif === 'ticker-marquee' && (
            <div className="dv-marquee"><span>✦ {d.name.toUpperCase()} ✦ MOTION ✦ COLOR ✦ CRAFT ✦&nbsp;</span></div>
          )}
        </header>

        {/* FEATURE CARDS */}
        <section className="dv-section">
          <h2 className="dv-h2">Why teams pick {d.name}</h2>
          <div className="dv-cards">
            {features(d).map((f, i) => (
              <article key={i} className="dv-card">
                <span className="dv-card-icon" aria-hidden>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY SPECIMEN */}
        <section className="dv-section">
          <h2 className="dv-h2">Type in context</h2>
          <div className="dv-type">
            <div className="dv-type-display">{t.display}</div>
            <div className="dv-type-body">
              <p>
                Body copy set in {t.body} — 17px, 1.6 line-height. Good typography is
                invisible until it isn't; then it's unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="dv-stats-band">
          <div className="dv-stat"><strong>98%</strong><span>ship faster</span></div>
          <div className="dv-stat"><strong>4.9★</strong><span>avg. rating</span></div>
          <div className="dv-stat"><strong>12k+</strong><span>teams</span></div>
        </section>

        {/* FORM + BUTTONS */}
        <section className="dv-section dv-section-forms">
          <div className="dv-form-wrap">
            <h2 className="dv-h2">Join the list</h2>
            <form
              className="dv-form"
              onSubmit={(e) => {
                e.preventDefault()
                setFormMsg('Welcome aboard — check your inbox.')
              }}
            >
              <label className="dv-label" htmlFor={`dv-email-${d.id}`}>Email</label>
              <input
                id={`dv-email-${d.id}`}
                className="dv-input"
                type="email"
                required
                placeholder="you@studio.com"
              />
              <div className="dv-btn-row">
                <button className="dv-btn dv-btn-primary" style={btnStyle(t, d)} type="submit">
                  Request access
                </button>
                <button
                  className="dv-btn dv-btn-tertiary"
                  style={{ background: 'transparent', color: t.primary, border: 'none', cursor: 'pointer' }}
                  type="button"
                >
                  Just browsing →
                </button>
              </div>
              {formMsg && <p className="dv-form-ok" role="status">{formMsg}</p>}
            </form>
          </div>
          <div className="dv-comp-wrap">
            <h2 className="dv-h2">Components</h2>
            <div className="dv-comp-grid">
              <button
                className="dv-btn dv-btn-primary"
                style={btnStyle(t, d)}
                onClick={() => setModalOpen(true)}
              >
                Open modal
              </button>
              <div className="dv-chip" style={{ borderColor: withAlpha(t.text, 0.25) }}>card ↗</div>
              <div className="dv-chip" style={{ borderColor: withAlpha(t.text, 0.25) }}>form ▤</div>
              <div className="dv-chip" style={{ borderColor: withAlpha(t.text, 0.25) }}>nav ▤▤</div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="dv-footer">
          <span>◈ {d.name}</span>
          <span>Designed by {d.author}</span>
          <span>© 2026</span>
        </footer>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="dv-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div
            className="dv-modal"
            style={{ background: t.bg, color: t.text, borderRadius: radiusBtn }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dv-modal-head">
              <strong>{d.name}</strong>
              <button className="dv-modal-x" onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            </div>
            <p>This modal is styled entirely with the {d.name} system — borders, motion, and all.</p>
            <div className="dv-btn-row">
              <button className="dv-btn dv-btn-primary" style={btnStyle(t, d)} onClick={() => setModalOpen(false)}>
                Looks right
              </button>
              <button
                className="dv-btn dv-btn-secondary"
                style={btnStyle(t, d)}
                onClick={() => setModalOpen(false)}
              >
                Keep browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function btnStyle(t: { primary: string; onPrimary: string }, d: DesignSystem): React.CSSProperties {
  void d
  return { background: t.primary, color: t.onPrimary }
}

function features(d: DesignSystem): { icon: string; title: string; body: string }[] {
  const n = d.name
  return [
    { icon: '◆', title: 'Intentional by default', body: `Every token in ${n} exists for a reason — nothing is decorative filler.` },
    { icon: '◇', title: 'Ships production-ready', body: 'Spacing rhythm, shadows, and states are all specified. Copy, paste, publish.' },
    { icon: '◈', title: 'Documented to the px', body: 'Typography, color, motion, and a11y notes travel with the system.' },
  ]
}

function heroTitle(d: DesignSystem): React.ReactNode {
  switch (d.id) {
    case 'minimalist-tech': return <>Ship <em>calm</em> software.</>
    case 'zen-minimal': return <>Begin <em>quietly.</em></>
    case 'swiss-editorial': return <>01 — Grid &amp; <em>order.</em></>
    case 'soft-mono': return <>$ docs --read <em>quickstart</em></>
    case 'neon-maximalist': return <>FEEL EVERY <em>VOLT</em></>
    case 'editorial-maximalist': return <>THE LOUD <em>ISSUE</em></>
    case 'playful-maximalist': return <>More is <em>more.</em> Obviously.</>
    case 'raw-brutalism': return <>NO FRILLS. <em>ALL STRUCTURE.</em></>
    case 'refined-brutalism': return <>02 — Load-bearing <em>typography.</em></>
    case 'web1-brutalism': return <>Welcome to my <em>homepage!!</em></>
    case 'dark-luxury': return <>Quiet objects, <em>loud heritage.</em></>
    case 'minimalist-luxury': return <>Considered objects, <em>considered rooms.</em></>
    case 'bold-luxury': return <>MAISON <em>ROUGE</em></>
    case 'pastel-playful': return <>Soft tools for <em>soft mornings.</em></>
    case 'rainbow-playful': return <>🎉 LET&rsquo;S MAKE <em>STUFF!</em></>
    case 'toybox-round': return <>Squeeze the <em>interface.</em></>
    case 'y2k-retro': return <>✦ the future is <em>glossy</em> ✦</>
    case 'vintage-print': return <>The Careful Craft of <em>Slowness</em></>
    case 'cyberpunk-retro': return <>Jack into the grid_</>
    case 'memphis-pop': return <>DON&rsquo;T BE A <em>SQUARE.</em></>
    case 'nature-inspired': return <>Built for the long way <em>round.</em></>
    case 'biophilic': return <>Breathe in. <em>Begin.</em></>
    case 'botanical': return <>Gardens, <em>carefully</em> kept.</>
    case 'corporate-blue': return <>Compliance, minus the <em>headache.</em></>
    case 'startup-serious': return <>Money, <em>measured.</em></>
    case 'tech-corporate': return <>Infrastructure for the <em>ambitious.</em></>
    case 'abstract-art': return <>Form follows <em>feeling.</em></>
    case 'geometric-art': return <>PATTERN ≠ <em>DECORATION.</em></>
    case 'illustration-heavy': return <>big ideas, drawn <em>first</em> ✏️</>
    case 'ink-house': return <>Warm drinks, warm <em>pixels.</em></>
    default: return <>{d.name}</>
  }
}

function extractRadius(R: string): string {
  if (!R) return '8px'
  const m = R.match(/(\d+)px/)
  if (m) return `${m[1]}px`
  if (R.includes('999px') || R.includes('pill')) return '999px'
  if (R.includes('0')) return '0'
  return '8px'
}

/**
 * Naive CSS scoper: prefixes every selector in a signature block with a
 * per-instance class so designs never bleed into each other. Signature CSS
 * is authored one rule per line, which keeps this simple and reliable.
 */
function scopeSignatureCss(css: string, scope: string): string {
  const keyframeRenames = new Map<string, string>()
  const kf = /@keyframes\s+([\w-]+)/g
  let m: RegExpExecArray | null
  while ((m = kf.exec(css))) {
    if (!keyframeRenames.has(m[1])) keyframeRenames.set(m[1], `${m[1]}-${scope}`)
  }
  let out = css.replace(/@keyframes\s+([\w-]+)/g, (_s, name: string) => `@keyframes ${keyframeRenames.get(name) ?? name}`)
  out = out.replace(/animation:\s*([^;{}]+)/g, (_s, body: string) => {
    let nb = body
    for (const [from, to] of keyframeRenames) nb = nb.replace(new RegExp(`\\b${from}\\b`, 'g'), to)
    return `animation: ${nb}`
  })
  return out
    .split('\n')
    .map((line) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('@')) return line
      const braceIdx = line.indexOf('{')
      if (braceIdx === -1) return line
      const selPart = line.slice(0, braceIdx)
      const rest = line.slice(braceIdx)
      const selectors = selPart
        .split(',')
        .map((s) => (s.trim() ? `.${scope} ${s.trim()}` : s))
      return selectors.join(', ') + rest
    })
    .join('\n')
}
