import { useEffect, useMemo, useState } from 'react'
import type { DesignSystem } from '../types'
import { useStore } from '../store'
import {
  COLOR_KEYS,
  COLOR_LABEL,
  type ColorKey,
  applyPalette,
  contrastRatio,
  harmonizeFrom,
  isDark as isDarkColor,
  normalizeHex,
  paletteToCss,
  presetsFor,
  randomPalette,
  readableOn,
} from '../designs/palette'
import { withAlpha } from '../designs/theme'
import { copyText } from '../hooks'

/**
 * Color Studio — keep the design, change the ink.
 *
 * A design system's structure, type, and rhythm are the hard part; the palette
 * is the part a team wants to make their own. This panel edits a *copy* of the
 * design's colors (persisted per design), so the live preview and component kit
 * instantly re-skin without touching the shipped data.
 */
export function PaletteStudio({ d }: { d: DesignSystem }) {
  const override = useStore((s) => s.paletteOverrides[d.id])
  const setPaletteToken = useStore((s) => s.setPaletteToken)
  const mergePalette = useStore((s) => s.mergePalette)
  const resetPalette = useStore((s) => s.resetPalette)
  const showToast = useStore((s) => s.showToast)

  const effective = useMemo(() => applyPalette(d, override), [d, override])
  const colors = effective.colors
  const dark = isDarkColor(colors.background)
  const dirty = !!override && Object.keys(override).length > 0

  const [source, setSource] = useState<string>(d.colors.primary)
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  useEffect(() => {
    setSource(d.colors.primary)
    setDrafts({})
  }, [d.id, d.colors.primary])

  const presets = useMemo(() => presetsFor(dark), [dark])

  const textOnBg = contrastRatio(colors.text, colors.background)
  const primaryInk = readableOn(colors.primary)

  const commitHex = (key: ColorKey, raw: string) => {
    const hex = normalizeHex(raw)
    if (hex) setPaletteToken(d.id, key, hex)
  }

  return (
    <div className="ps-root">
      <header className="ps-head">
        <div>
          <h3 className="ps-title">Color Studio</h3>
          <p className="ps-sub">
            Structure, type, and rhythm stay {d.name}&rsquo;s. Recolor the ink freely — overrides save
            per design and apply to the live preview and component kit.
          </p>
        </div>
        <div className="ps-head-actions">
          <button
            className="ps-btn ps-btn-ghost"
            onClick={() => {
              mergePalette(d.id, randomPalette(dark))
              showToast('✓ Shuffled a fresh palette')
            }}
          >
            ⟳ Shuffle
          </button>
          <button
            className="ps-btn ps-btn-ghost"
            disabled={!dirty}
            onClick={() => {
              resetPalette(d.id)
              showToast('✓ Restored the original palette')
            }}
          >
            Reset
          </button>
        </div>
      </header>

      {/* ---- harmonize from any color ---- */}
      <section className="ps-section">
        <h4 className="ps-h">Start from any color</h4>
        <p className="ps-note">
          Pick one color and we derive the other five so they stay coherent — secondary hue-rotated,
          accent complementary, surfaces tinted to match.
        </p>
        <div className="ps-source">
          <input
            type="color"
            className="ps-color"
            value={normalizeHex(source) ?? '#888888'}
            onChange={(e) => setSource(e.target.value)}
            aria-label="Source color"
          />
          <input
            type="text"
            className="ps-hex"
            value={source}
            spellCheck={false}
            onChange={(e) => setSource(e.target.value)}
            aria-label="Source color hex"
          />
          <button
            className="ps-btn"
            onClick={() => {
              const hex = normalizeHex(source)
              if (!hex) {
                showToast('✗ Enter a valid hex like #3b82f6')
                return
              }
              mergePalette(d.id, harmonizeFrom(hex, dark))
              showToast('✓ Harmonized a full palette')
            }}
          >
            Harmonize palette
          </button>
        </div>
      </section>

      {/* ---- presets ---- */}
      <section className="ps-section">
        <h4 className="ps-h">Curated palettes</h4>
        <div className="ps-presets">
          {presets.map((p) => {
            const active =
              dirty &&
              (Object.keys(p.colors) as ColorKey[]).every((k) => colors[k] === p.colors[k])
            return (
              <button
                key={p.id}
                className={`ps-preset ${active ? 'on' : ''}`}
                title={`${p.name} — ${p.mode}`}
                onClick={() => {
                  mergePalette(d.id, p.colors)
                  showToast(`✓ Applied ${p.name}`)
                }}
              >
                <span className="ps-preset-dots">
                  {(['primary', 'secondary', 'accent', 'background'] as ColorKey[]).map((k) => (
                    <i key={k} style={{ background: p.colors[k] }} />
                  ))}
                </span>
                <span className="ps-preset-name">{p.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ---- per-token editor ---- */}
      <section className="ps-section">
        <h4 className="ps-h">Every token</h4>
        <div className="ps-tokens">
          {COLOR_KEYS.map((key) => (
            <div className="ps-token" key={key}>
              <span className="ps-token-label">{COLOR_LABEL[key]}</span>
              <input
                type="color"
                className="ps-color"
                value={normalizeHex(colors[key]) ?? '#000000'}
                onChange={(e) => setPaletteToken(d.id, key, e.target.value)}
                aria-label={`${COLOR_LABEL[key]} color`}
              />
              <input
                type="text"
                className="ps-hex"
                spellCheck={false}
                value={drafts[key] ?? colors[key]}
                onChange={(e) => {
                  setDrafts((s) => ({ ...s, [key]: e.target.value }))
                  commitHex(key, e.target.value)
                }}
                onBlur={(e) => {
                  const hex = normalizeHex(e.target.value)
                  setDrafts((s) => {
                    const next = { ...s }
                    delete next[key]
                    return next
                  })
                  if (!hex) showToast('✗ Not a valid hex color')
                }}
                aria-label={`${COLOR_LABEL[key]} hex`}
              />
              <span
                className="ps-token-chip"
                style={{ background: colors[key], color: readableOn(colors[key]) }}
              >
                Aa
              </span>
            </div>
          ))}
        </div>

        <div className="ps-contrast">
          <span className={textOnBg >= 4.5 ? 'ps-pass' : 'ps-fail'}>
            {textOnBg >= 4.5 ? '✓' : '✗'} Text on background · {textOnBg.toFixed(2)}:1
            {textOnBg >= 7 ? ' (AAA)' : textOnBg >= 4.5 ? ' (AA)' : ' — below AA'}
          </span>
          <span className="ps-contrast-hint" style={{ background: colors.primary, color: primaryInk }}>
            Button label
          </span>
        </div>
      </section>

      {/* ---- live sample ---- */}
      <section className="ps-section">
        <h4 className="ps-h">Live sample</h4>
        <div
          className="ps-sample"
          style={{ background: colors.background, color: colors.text, borderColor: withAlpha(colors.text, 0.14) }}
        >
          <div className="ps-sample-main">
            <span className="ps-sample-kicker" style={{ color: colors.primary }}>Preview</span>
            <strong style={{ fontFamily: 'inherit' }}>Your palette, applied to {d.name}</strong>
            <p style={{ color: withAlpha(colors.text, 0.68) }}>
              Structure and type are untouched — only the ink changed.
            </p>
          </div>
          <div className="ps-sample-side">
            <span className="ps-sample-btn" style={{ background: colors.primary, color: primaryInk }}>
              Primary
            </span>
            <span
              className="ps-sample-btn ps-sample-btn-ghost"
              style={{ borderColor: withAlpha(colors.text, 0.3), color: colors.text }}
            >
              Secondary
            </span>
            <span
              className="ps-sample-badge"
              style={{ background: withAlpha(colors.accent, 0.18), color: colors.accent }}
            >
              ● Accent
            </span>
          </div>
        </div>
      </section>

      <section className="ps-section ps-section-foot">
        <button
          className="ps-btn"
          onClick={async () => {
            const ok = await copyText(paletteToCss(colors))
            showToast(ok ? '✓ Palette CSS copied' : '✗ Copy failed')
          }}
        >
          ⧉ Copy palette CSS
        </button>
        <span className="ps-foot-note">
          {dirty ? 'Custom palette active — previews use it everywhere.' : 'Showing the original palette.'}
        </span>
      </section>
    </div>
  )
}
