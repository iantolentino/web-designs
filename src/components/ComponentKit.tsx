import { createContext, useContext, useId, useMemo, useState } from 'react'
import type { DesignSystem } from '../types'
import { themeOf, withAlpha, type Theme } from '../designs/theme'

/**
 * ComponentKit — the shared production component vocabulary.
 *
 * Every design in the vault renders the *same* kit, but entirely from that
 * design's own tokens (colors, type pairing, radius, border weight, motion).
 * That is what makes a design system a system: one kit, many identities.
 *
 * The kit is the answer to "20+ components for every design" — it ships 53
 * distinct, interactive components grouped in six families, and each design
 * re-skins every one of them by changing nothing but its token block.
 */

interface Kit {
  d: DesignSystem
  t: Theme
  /** Button/card corner radius derived from the design's component spec. */
  r: string
}

const KitCtx = createContext<Kit | null>(null)

export function useKit(): Kit {
  const k = useContext(KitCtx)
  if (!k) throw new Error('ComponentKit must be rendered inside a kit provider')
  return k
}

/** Pull a pixel radius out of a free-text component spec like "12px, 999px for pills". */
export function radiusOf(d: DesignSystem): string {
  const spec = d.components.radius ?? ''
  if (/999|pill/i.test(spec)) return '999px'
  const m = spec.match(/(\d+)px/)
  return m ? `${m[1]}px` : '8px'
}

/** A hairline / filled surface derived from the design's text color. */
function line(t: Theme, a = 0.16) {
  return withAlpha(t.text, a)
}

function soft(t: Theme, a = 0.05) {
  return withAlpha(t.text, a)
}

/* ======================= INPUTS & ACTIONS ======================= */

function BtnPrimary() {
  const { t, r } = useKit()
  const [loading, setLoading] = useState(false)
  return (
    <div className="kit-row">
      <button className="kit-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>
        Primary action
      </button>
      <button className="kit-btn kit-btn-hover" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>
        Hover
      </button>
      <button
        className="kit-btn"
        style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}
        onClick={() => {
          setLoading(true)
          window.setTimeout(() => setLoading(false), 1400)
        }}
      >
        {loading ? 'Working…' : 'Click to load'}
      </button>
      <button className="kit-btn kit-btn-disabled" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} disabled>
        Disabled
      </button>
    </div>
  )
}

function BtnSecondary() {
  const { t, r } = useKit()
  return (
    <div className="kit-row">
      <button className="kit-btn" style={{ background: 'transparent', color: t.text, border: `1.5px solid ${line(t, 0.4)}`, borderRadius: r }}>
        Secondary
      </button>
      <button className="kit-btn" style={{ background: withAlpha(t.primary, 0.12), color: t.primary, borderRadius: r }}>
        Soft tonal
      </button>
      <button className="kit-btn kit-text-btn" style={{ color: t.primary, borderRadius: r }}>
        Tertiary link →
      </button>
    </div>
  )
}

function BtnDanger() {
  const { t, r } = useKit()
  return (
    <div className="kit-row">
      <button className="kit-btn" style={{ background: '#c0392b', color: '#fff', borderRadius: r }}>
        Delete project
      </button>
      <button className="kit-btn" style={{ background: withAlpha('#c0392b', 0.12), color: '#c0392b', borderRadius: r }}>
        Reverse
      </button>
      <button className="kit-btn" style={{ background: 'transparent', color: t.muted, border: `1px dashed ${line(t, 0.3)}`, borderRadius: r }}>
        Neutral
      </button>
    </div>
  )
}

function BtnSplit() {
  const { t, r } = useKit()
  const [open, setOpen] = useState(false)
  return (
    <div className="kit-row">
      <div className="kit-split" style={{ borderRadius: r, overflow: 'hidden', border: `1px solid ${t.primary}` }}>
        <button className="kit-btn kit-btn-flat" style={{ background: t.primary, color: t.onPrimary }}>
          Deploy to production
        </button>
        <button
          className="kit-btn kit-btn-flat kit-split-caret"
          style={{ background: t.primary, color: t.onPrimary }}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="More deploy options"
        >
          ▾
        </button>
      </div>
      {open && (
        <ul className="kit-menu" style={{ background: t.surface, borderColor: line(t), borderRadius: r }}>
          {['Deploy to staging', 'Deploy with rollback', 'Schedule for tonight'].map((x) => (
            <li key={x} className="kit-menu-item">
              {x}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function BtnIcons() {
  const { t, r } = useKit()
  return (
    <div className="kit-row">
      {['＋', '⟳', '✎', '⧉', '⌫', '⋯'].map((g, i) => (
        <button
          key={g}
          className="kit-icon-btn"
          style={{ borderRadius: r, border: `1px solid ${line(t, 0.22)}`, background: i === 1 ? withAlpha(t.primary, 0.12) : 'transparent', color: i === 1 ? t.primary : t.text }}
          aria-label={`Icon action ${i + 1}`}
        >
          {g}
        </button>
      ))}
    </div>
  )
}

function FieldText() {
  const { t, r } = useKit()
  const id = useId()
  return (
    <div className="kit-stack">
      <label className="kit-label" htmlFor={id}>
        Workspace name
      </label>
      <input id={id} className="kit-input" style={{ borderRadius: r, borderColor: line(t), background: t.bg, color: t.text }} defaultValue="Northwind Studio" />
      <span className="kit-help">Shown on invoices and share links.</span>
      <label className="kit-label" htmlFor={`${id}-err`}>
        API key
      </label>
      <input
        id={`${id}-err`}
        className="kit-input"
        style={{ borderRadius: r, borderColor: '#c0392b', background: withAlpha('#c0392b', 0.06), color: t.text }}
        defaultValue="sk_live_…"
        aria-invalid
      />
      <span className="kit-error">That key is expired — rotate it in settings.</span>
    </div>
  )
}

function FieldTextarea() {
  const { t, r } = useKit()
  const [v, setV] = useState('Ship the release notes before Friday.')
  return (
    <div className="kit-stack">
      <label className="kit-label">Release notes</label>
      <textarea
        className="kit-input kit-textarea"
        style={{ borderRadius: r, borderColor: line(t), background: t.bg, color: t.text }}
        value={v}
        maxLength={160}
        onChange={(e) => setV(e.target.value)}
      />
      <div className="kit-between">
        <span className="kit-help">Markdown supported.</span>
        <span className="kit-counter" style={{ color: v.length > 140 ? '#c0392b' : t.muted }}>
          {v.length}/160
        </span>
      </div>
    </div>
  )
}

function FieldSelect() {
  const { t, r } = useKit()
  const [v, setV] = useState('Public')
  return (
    <div className="kit-stack">
      <label className="kit-label">Visibility</label>
      <div className="kit-select-wrap" style={{ borderRadius: r, borderColor: line(t), background: t.bg }}>
        <select className="kit-select" style={{ color: t.text }} value={v} onChange={(e) => setV(e.target.value)}>
          {['Public', 'Private', 'Invite only', 'Password protected'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span className="kit-select-caret" style={{ color: t.muted }}>▾</span>
      </div>
      <span className="kit-help">Currently: {v}</span>
    </div>
  )
}

function FieldSearch() {
  const { t, r } = useKit()
  const [q, setQ] = useState('')
  return (
    <div className="kit-stack">
      <div className="kit-search" style={{ borderRadius: r, borderColor: line(t), background: t.bg }}>
        <span className="kit-search-ic" style={{ color: t.muted }}>⌕</span>
        <input
          className="kit-search-input"
          style={{ color: t.text }}
          placeholder="Search designs, tokens, components…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {q ? (
          <button className="kit-search-clear" style={{ color: t.muted }} onClick={() => setQ('')} aria-label="Clear">
            ✕
          </button>
        ) : (
          <kbd className="kit-kbd" style={{ color: t.muted, borderColor: line(t, 0.3) }}>/</kbd>
        )}
      </div>
      <span className="kit-help">{q ? `${Math.max(0, q.length * 3)} results (demo)` : 'Try “grid”, “luxury”, “retro”'}</span>
    </div>
  )
}

function FieldStepper() {
  const { t, r } = useKit()
  const [n, setN] = useState(2)
  return (
    <div className="kit-row">
      <div className="kit-stepper" style={{ borderRadius: r, borderColor: line(t) }}>
        <button className="kit-step" style={{ color: t.text }} onClick={() => setN((x) => Math.max(0, x - 1))} aria-label="Decrease">
          −
        </button>
        <span className="kit-step-val" style={{ color: t.text }}>
          {n}
        </span>
        <button className="kit-step" style={{ color: t.text }} onClick={() => setN((x) => Math.min(20, x + 1))} aria-label="Increase">
          +
        </button>
      </div>
      <span className="kit-help">seats × $12 = ${n * 12}/mo</span>
    </div>
  )
}

function FieldSlider() {
  const { t } = useKit()
  const [v, setV] = useState(64)
  return (
    <div className="kit-stack">
      <div className="kit-between">
        <span className="kit-label">Monthly budget</span>
        <span className="kit-badge" style={{ background: withAlpha(t.accent, 0.16), color: t.accent, borderRadius: '999px' }}>
          ${v * 100}
        </span>
      </div>
      <input
        className="kit-range"
        type="range"
        min={0}
        max={100}
        value={v}
        style={{ accentColor: t.primary }}
        onChange={(e) => setV(Number(e.target.value))}
      />
      <div className="kit-between">
        <span className="kit-help">$0</span>
        <span className="kit-help">$10,000</span>
      </div>
    </div>
  )
}

function Segmented() {
  const { t, r } = useKit()
  const [i, setI] = useState(1)
  const opts = ['Day', 'Week', 'Month', 'Year']
  return (
    <div className="kit-segmented" style={{ borderRadius: r, borderColor: line(t), background: soft(t, 0.04) }}>
      {opts.map((o, n) => (
        <button
          key={o}
          className="kit-seg"
          style={n === i ? { background: t.primary, color: t.onPrimary, borderRadius: `calc(${r === '999px' ? '999px' : r} - 2px)` } : { color: t.muted }}
          onClick={() => setI(n)}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

/* ======================= SELECTION & TOGGLES ======================= */

function Checkboxes() {
  const { t, r } = useKit()
  const [on, setOn] = useState<string[]>(['Email'])
  const opts = ['Email', 'Push', 'SMS', 'Weekly digest']
  return (
    <div className="kit-stack">
      {opts.map((o) => {
        const checked = on.includes(o)
        return (
          <label key={o} className="kit-choose">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setOn((s) => (checked ? s.filter((x) => x !== o) : [...s, o]))}
              style={{ accentColor: t.primary }}
            />
            <span style={{ color: checked ? t.text : t.muted }}>{o}</span>
            {checked && <span className="kit-badge" style={{ background: withAlpha(t.primary, 0.14), color: t.primary, borderRadius: r }}>on</span>}
          </label>
        )
      })}
    </div>
  )
}

function Radios() {
  const { t, r } = useKit()
  const [v, setV] = useState('Standard')
  return (
    <div className="kit-stack">
      {[
        ['Standard', '1 revision round'],
        ['Priority', '3 revision rounds'],
        ['White glove', 'Unlimited, named designer'],
      ].map(([k, sub]) => (
        <label
          key={k}
          className="kit-radio-card"
          style={{ borderColor: v === k ? t.primary : line(t), background: v === k ? withAlpha(t.primary, 0.06) : 'transparent', borderRadius: r }}
        >
          <input type="radio" name="kit-plan" checked={v === k} onChange={() => setV(k)} style={{ accentColor: t.primary }} />
          <span>
            <strong style={{ color: t.text }}>{k}</strong>
            <em className="kit-help">{sub}</em>
          </span>
        </label>
      ))}
    </div>
  )
}

function Switches() {
  const { t } = useKit()
  const [s, setS] = useState<Record<string, boolean>>({ 'Two-factor auth': true, 'Usage alerts': true, 'Beta features': false })
  return (
    <div className="kit-stack">
      {Object.entries(s).map(([k, v]) => (
        <div key={k} className="kit-between kit-switch-row">
          <span style={{ color: t.text }}>{k}</span>
          <button
            className={`kit-switch ${v ? 'on' : ''}`}
            style={{ background: v ? t.primary : line(t, 0.3) }}
            onClick={() => setS((p) => ({ ...p, [k]: !v }))}
            aria-pressed={v}
            aria-label={k}
          >
            <span className="kit-switch-knob" />
          </button>
        </div>
      ))}
    </div>
  )
}

function Rating() {
  const { t } = useKit()
  const [n, setN] = useState(4)
  return (
    <div className="kit-between">
      <span className="kit-stars" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className="kit-star"
            style={{ color: i <= n ? t.accent : line(t, 0.3) }}
            onClick={() => setN(i)}
            aria-label={`${i} star${i > 1 ? 's' : ''}`}
            role="radio"
            aria-checked={i === n}
          >
            ★
          </button>
        ))}
      </span>
      <span className="kit-help">{n} of 5 · 1,204 reviews</span>
    </div>
  )
}

function ChipsInput() {
  const { t, r } = useKit()
  const [tags, setTags] = useState(['editorial', 'serif'])
  const add = (v: string) => setTags((s) => (s.includes(v) || !v ? s : [...s, v]))
  return (
    <div className="kit-stack">
      <div className="kit-chipbox" style={{ borderColor: line(t), borderRadius: r, background: t.bg }}>
        {tags.map((x) => (
          <span key={x} className="kit-chip" style={{ background: withAlpha(t.primary, 0.12), color: t.primary, borderRadius: r }}>
            {x}
            <button className="kit-chip-x" onClick={() => setTags((s) => s.filter((y) => y !== x))} aria-label={`Remove ${x}`}>
              ✕
            </button>
          </span>
        ))}
        <input
          className="kit-chip-input"
          style={{ color: t.text }}
          placeholder="Add tag…"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              add((e.target as HTMLInputElement).value.trim().toLowerCase())
              ;(e.target as HTMLInputElement).value = ''
            }
          }}
        />
      </div>
      <div className="kit-row">
        {['brutalist', 'pastel', 'grid', 'retro'].map((s) => (
          <button key={s} className="kit-suggest" style={{ color: t.muted, borderColor: line(t, 0.3), borderRadius: r }} onClick={() => add(s)}>
            + {s}
          </button>
        ))}
      </div>
    </div>
  )
}

function ToggleGroup() {
  const { t, r } = useKit()
  const [on, setOn] = useState<string[]>(['Grid'])
  const opts = [['▦', 'Grid'], ['☰', 'List'], ['▤', 'Table'], ['◫', 'Cards']]
  return (
    <div className="kit-row">
      <div className="kit-segmented" style={{ borderRadius: r, borderColor: line(t) }}>
        {opts.map(([ic, label]) => {
          const active = on.includes(label)
          return (
            <button
              key={label}
              className="kit-seg kit-seg-ic"
              style={active ? { background: withAlpha(t.primary, 0.14), color: t.primary, borderRadius: r } : { color: t.muted }}
              onClick={() => setOn([label])}
              aria-pressed={active}
            >
              {ic} {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ======================= FEEDBACK & STATUS ======================= */

const ALERTS: [string, string, string][] = [
  ['ℹ', 'Neutral', '#3b82f6'],
  ['✓', 'Success', '#1a9a5c'],
  ['!', 'Warning', '#d68910'],
  ['✕', 'Error', '#c0392b'],
]

function Alerts() {
  const { t, r } = useKit()
  return (
    <div className="kit-stack">
      {ALERTS.map(([ic, label, c]) => (
        <div
          key={label}
          className="kit-alert"
          style={{ borderColor: withAlpha(c, 0.4), background: withAlpha(c, 0.08), borderRadius: r }}
          role="status"
        >
          <span className="kit-alert-ic" style={{ color: c }}>{ic}</span>
          <div>
            <strong style={{ color: t.text }}>{label} — heads up</strong>
            <span className="kit-help">Inline messaging inherits this system's radius, weight, and spacing.</span>
          </div>
          <button className="kit-alert-x" style={{ color: t.muted }} aria-label="Dismiss">
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

function Toasts() {
  const { t, r } = useKit()
  const [seen, setSeen] = useState(true)
  return (
    <div className="kit-stack">
      <button className="kit-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} onClick={() => setSeen((s) => !s)}>
        {seen ? 'Hide toast stack' : 'Show toast stack'}
      </button>
      {seen && (
        <div className="kit-toasts">
          <div className="kit-toast" style={{ background: t.text, color: t.bg, borderRadius: r }}>
            <span>✓</span> Prompt copied to clipboard
          </div>
          <div className="kit-toast" style={{ background: t.surface, color: t.text, border: `1px solid ${line(t)}`, borderRadius: r }}>
            <span style={{ color: '#1a9a5c' }}>✓</span> 3 files uploaded
          </div>
          <div className="kit-toast" style={{ background: t.surface, color: t.text, border: `1px solid ${withAlpha('#c0392b', 0.5)}`, borderRadius: r }}>
            <span style={{ color: '#c0392b' }}>✕</span> Sync failed — retrying
            <button className="kit-toast-btn" style={{ color: t.primary }}>Retry</button>
          </div>
        </div>
      )}
    </div>
  )
}

function ProgressBars() {
  const { t, r } = useKit()
  const rows: [string, number, string][] = [
    ['Storage', 68, t.primary],
    ['Seats', 92, t.accent],
    ['API calls', 34, t.secondary],
  ]
  return (
    <div className="kit-stack">
      {rows.map(([label, pct, c]) => (
        <div key={label} className="kit-stack kit-stack-tight">
          <div className="kit-between">
            <span className="kit-help" style={{ color: t.text }}>{label}</span>
            <span className="kit-help">{pct}%</span>
          </div>
          <div className="kit-bar" style={{ background: soft(t, 0.1), borderRadius: r }}>
            <div className="kit-bar-fill" style={{ width: `${pct}%`, background: c, borderRadius: r }} />
          </div>
        </div>
      ))}
      <div className="kit-bar kit-bar-striped" style={{ background: soft(t, 0.1), borderRadius: r }}>
        <div className="kit-bar-fill" style={{ width: '45%', background: t.primary, borderRadius: r }} />
      </div>
    </div>
  )
}

function ProgressRing() {
  const { t } = useKit()
  const pct = 72
  return (
    <div className="kit-row">
      <div
        className="kit-ring"
        style={{ background: `conic-gradient(${t.primary} ${pct * 3.6}deg, ${soft(t, 0.12)} 0)` }}
      >
        <span className="kit-ring-hole" style={{ background: t.bg, color: t.text }}>
          {pct}%
        </span>
      </div>
      <div className="kit-stack kit-stack-tight">
        <strong style={{ color: t.text }}>Quarterly goal</strong>
        <span className="kit-help">72 of 100 design tokens documented.</span>
        <span className="kit-badge" style={{ background: withAlpha(t.accent, 0.16), color: t.accent, borderRadius: '999px' }}>
          On track
        </span>
      </div>
    </div>
  )
}

function Skeleton() {
  const { t, r } = useKit()
  return (
    <div className="kit-stack">
      <div className="kit-skel-row">
        <div className="kit-skel kit-skel-circle" style={{ background: soft(t, 0.12) }} />
        <div className="kit-stack kit-stack-tight" style={{ flex: 1 }}>
          <div className="kit-skel" style={{ width: '45%', background: soft(t, 0.12), borderRadius: r }} />
          <div className="kit-skel" style={{ width: '70%', background: soft(t, 0.08), borderRadius: r }} />
        </div>
      </div>
      <div className="kit-skel" style={{ height: 84, background: soft(t, 0.07), borderRadius: r }} />
      <div className="kit-skel kit-skel-shimmer" style={{ height: 14, width: '80%', borderRadius: r }} />
    </div>
  )
}

function EmptyState() {
  const { t, r } = useKit()
  return (
    <div className="kit-empty" style={{ borderColor: line(t, 0.28), borderRadius: r }}>
      <div className="kit-empty-art" style={{ background: `radial-gradient(circle at 50% 40%, ${withAlpha(t.primary, 0.35)}, transparent 70%)` }} aria-hidden />
      <strong style={{ color: t.text }}>No designs here yet</strong>
      <p className="kit-help">Start from a template or import tokens from an existing brand.</p>
      <div className="kit-row">
        <button className="kit-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>New design</button>
        <button className="kit-btn" style={{ border: `1px solid ${line(t, 0.35)}`, borderRadius: r, color: t.text }}>Import</button>
      </div>
    </div>
  )
}

function Spinners() {
  const { t } = useKit()
  return (
    <div className="kit-row">
      <span className="kit-spin" style={{ borderColor: soft(t, 0.2), borderTopColor: t.primary }} />
      <span className="kit-spin kit-spin-lg" style={{ borderColor: soft(t, 0.2), borderTopColor: t.accent }} />
      <span className="kit-dots" style={{ color: t.primary }}>
        <i /><i /><i />
      </span>
      <span className="kit-help">Loading, in three weights</span>
    </div>
  )
}

function Banner() {
  const { t, r } = useKit()
  const [hidden, setHidden] = useState(false)
  if (hidden)
    return (
      <button className="kit-btn" style={{ border: `1px solid ${line(t, 0.3)}`, color: t.text, borderRadius: r }} onClick={() => setHidden(false)}>
        Restore banner
      </button>
    )
  return (
    <div className="kit-banner" style={{ background: t.text, color: t.bg, borderRadius: r }}>
      <span>We use two cookies. Both keep the preview alive.</span>
      <div className="kit-row">
        <button className="kit-btn" style={{ background: t.bg, color: t.text, borderRadius: r }}>Accept</button>
        <button className="kit-text-btn" style={{ color: t.bg }} onClick={() => setHidden(true)}>
          Only essential
        </button>
      </div>
    </div>
  )
}

/* ======================= DATA DISPLAY ======================= */

function StatCards() {
  const { t, r } = useKit()
  const cards: [string, string, string, number[]][] = [
    ['MRR', '$48.2k', '+8.4%', [30, 42, 38, 55, 60, 74, 82]],
    ['Active users', '12,043', '+3.1%', [50, 48, 55, 52, 61, 58, 66]],
    ['Churn', '1.9%', '−0.4%', [70, 64, 60, 58, 52, 48, 44]],
  ]
  return (
    <div className="kit-grid-3">
      {cards.map(([k, v, d, spark]) => (
        <div key={k} className="kit-card" style={{ borderColor: line(t), background: t.surface, borderRadius: r }}>
          <span className="kit-help">{k}</span>
          <strong className="kit-stat-v" style={{ color: t.text }}>{v}</strong>
          <div className="kit-between">
            <span className="kit-badge" style={{ background: d.startsWith('−') ? withAlpha('#1a9a5c', 0.15) : withAlpha(t.accent, 0.16), color: d.startsWith('−') ? '#1a9a5c' : t.accent, borderRadius: r }}>
              {d}
            </span>
            <span className="kit-spark" aria-hidden>
              {spark.map((h, i) => (
                <i key={i} style={{ height: `${h}%`, background: i === spark.length - 1 ? t.primary : withAlpha(t.primary, 0.35) }} />
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function TableToolbar() {
  const { t, r } = useKit()
  const rows: [string, string, string, string][] = [
    ['Aurora redesign', 'M. Chen', 'Live', '2h ago'],
    ['Borealis tokens', 'K. Ito', 'In review', '1d ago'],
    ['Cinder docs', 'A. Duval', 'Draft', '3d ago'],
    ['Delta audit', 'R. Osei', 'Live', '5d ago'],
  ]
  const tone = (s: string) => (s === 'Live' ? '#1a9a5c' : s === 'In review' ? '#d68910' : t.muted)
  return (
    <div className="kit-stack">
      <div className="kit-toolbar">
        <div className="kit-search kit-search-sm" style={{ borderColor: line(t), borderRadius: r, background: t.bg }}>
          <span className="kit-search-ic" style={{ color: t.muted }}>⌕</span>
          <input className="kit-search-input" placeholder="Filter projects…" style={{ color: t.text }} />
        </div>
        <button className="kit-suggest" style={{ color: t.text, borderColor: line(t, 0.3), borderRadius: r }}>Status ▾</button>
        <button className="kit-suggest" style={{ color: t.text, borderColor: line(t, 0.3), borderRadius: r }}>Owner ▾</button>
        <button className="kit-btn kit-btn-sm" style={{ background: t.primary, color: t.onPrimary, borderRadius: r, marginLeft: 'auto' }}>
          ＋ New
        </button>
      </div>
      <div className="kit-table-wrap" style={{ borderColor: line(t), borderRadius: r }}>
        <table className="kit-table">
          <thead>
            <tr style={{ background: soft(t, 0.05) }}>
              {['Project ↑', 'Owner', 'Status', 'Updated', ''].map((h) => (
                <th key={h} style={{ color: t.muted, borderColor: line(t, 0.12) }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r0, i) => (
              <tr key={r0[0]} style={{ background: i % 2 ? soft(t, 0.02) : 'transparent' }}>
                <td style={{ color: t.text, borderColor: line(t, 0.1) }}>{r0[0]}</td>
                <td style={{ color: t.muted, borderColor: line(t, 0.1) }}>{r0[1]}</td>
                <td style={{ borderColor: line(t, 0.1) }}>
                  <span className="kit-badge" style={{ background: withAlpha(tone(r0[2]), 0.14), color: tone(r0[2]), borderRadius: r }}>{r0[2]}</span>
                </td>
                <td style={{ color: t.muted, borderColor: line(t, 0.1) }}>{r0[3]}</td>
                <td style={{ borderColor: line(t, 0.1), color: t.muted }}>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DataList() {
  const { t, r } = useKit()
  const items: [string, string, string][] = [
    ['Nimbus Labs', 'Workspace · 24 members', '$299/mo'],
    ['Ferro & Co', 'Workspace · 8 members', '$99/mo'],
    ['Halcyon', 'Trial · 3 members', '$0'],
  ]
  return (
    <div className="kit-stack">
      {items.map(([name, meta, price], i) => (
        <div key={name} className="kit-list-row" style={{ borderColor: line(t, 0.12), borderRadius: r }}>
          <span className="kit-avatar" style={{ background: i === 1 ? t.accent : t.primary, color: i === 1 ? '#111' : t.onPrimary }}>
            {name[0]}
          </span>
          <span className="kit-stack kit-stack-tight" style={{ flex: 1 }}>
            <strong style={{ color: t.text }}>{name}</strong>
            <span className="kit-help">{meta}</span>
          </span>
          <span className="kit-help" style={{ color: t.text, fontVariantNumeric: 'tabular-nums' }}>{price}</span>
          <button className="kit-suggest" style={{ color: t.text, borderColor: line(t, 0.3), borderRadius: r }}>Open</button>
        </div>
      ))}
    </div>
  )
}

function Timeline() {
  const { t } = useKit()
  const events: [string, string, string][] = [
    ['12:04', 'Deploy 0417 finished', t.primary],
    ['11:20', 'Threshold warning cleared', t.accent],
    ['09:48', 'New member joined Northwind', t.secondary],
    ['08:02', 'Nightly backup verified', t.primary],
  ]
  return (
    <ol className="kit-timeline">
      {events.map(([time, label, c], i) => (
        <li key={label} className="kit-tl-item" style={{ borderColor: line(t, 0.14) }}>
          <span className="kit-tl-dot" style={{ background: c, boxShadow: `0 0 0 3px ${withAlpha(c, 0.18)}` }} />
          <span className="kit-help" style={{ minWidth: 44 }}>{time}</span>
          <span style={{ color: t.text, flex: 1 }}>{label}</span>
          {i === 0 && <span className="kit-badge" style={{ background: withAlpha(t.primary, 0.14), color: t.primary, borderRadius: '999px' }}>now</span>}
        </li>
      ))}
    </ol>
  )
}

function Badges() {
  const { t, r } = useKit()
  const set: [string, string][] = [
    ['Live', '#1a9a5c'],
    ['Draft', t.muted],
    ['Beta', '#3b82f6'],
    ['Deprecated', '#c0392b'],
    ['New', t.accent],
  ]
  return (
    <div className="kit-row">
      {set.map(([label, c]) => (
        <span key={label} className="kit-badge" style={{ background: withAlpha(c, 0.15), color: c, borderRadius: r }}>
          ● {label}
        </span>
      ))}
      <span className="kit-badge kit-badge-solid" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>
        12 unread
      </span>
      <span className="kit-badge" style={{ border: `1px solid ${line(t, 0.3)}`, color: t.muted, borderRadius: r }}>
        outline
      </span>
    </div>
  )
}

function Avatars() {
  const { t } = useKit()
  const people = ['MC', 'KI', 'AD', 'RO']
  return (
    <div className="kit-row">
      <span className="kit-avstack">
        {people.map((p, i) => (
          <span
            key={p}
            className="kit-avatar kit-avatar-lg"
            style={{ background: [t.primary, t.secondary, t.accent, soft(t, 0.35)][i], color: i === 3 ? t.text : t.onPrimary, borderColor: t.bg }}
          >
            {p}
          </span>
        ))}
        <span className="kit-avatar kit-avatar-lg" style={{ background: 'transparent', borderColor: line(t, 0.35), color: t.muted }}>
          +9
        </span>
      </span>
      <span className="kit-presence">
        <span className="kit-avatar" style={{ background: t.primary, color: t.onPrimary }}>
          KI
          <i className="kit-dot-live" style={{ background: '#1a9a5c', borderColor: t.bg }} />
        </span>
        <span className="kit-help">online</span>
      </span>
      <span className="kit-presence">
        <span className="kit-avatar" style={{ background: soft(t, 0.3), color: t.text }}>
          RO
          <i className="kit-dot-live" style={{ background: '#d68910', borderColor: t.bg }} />
        </span>
        <span className="kit-help">away</span>
      </span>
    </div>
  )
}

function CodeBlock() {
  const { t, r } = useKit()
  const [copied, setCopied] = useState(false)
  return (
    <div className="kit-code" style={{ background: t.text, color: t.bg, borderRadius: r }}>
      <div className="kit-code-head">
        <span style={{ opacity: 0.7 }}>terminal</span>
        <button
          className="kit-code-copy"
          style={{ color: t.bg }}
          onClick={() => {
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1200)
          }}
        >
          {copied ? '✓ copied' : '⧉ copy'}
        </button>
      </div>
      <pre>
        <code>
          {`$ npx design-vault add ${useKitName()}\n`}
          <span style={{ color: t.accent }}>{'→ tokens written to src/tokens.css'}</span>
          {'\n'}{`$ npm run dev\n`}
          <span style={{ color: t.accent }}>{'→ ready on localhost:5180'}</span>
        </code>
      </pre>
    </div>
  )
}

function useKitName() {
  return useKit().d.id
}

function Shortcuts() {
  const { t } = useKit()
  const keys: [string[], string][] = [
    [['/', 'F'], 'Focus search'],
    [['←', '→'], 'Previous / next design'],
    [['⌃', '⇧', 'C'], 'Copy design prompt'],
    [['Esc'], 'Close or clear'],
  ]
  return (
    <div className="kit-stack">
      {keys.map(([ks, label]) => (
        <div key={label} className="kit-between">
          <span className="kit-help" style={{ color: t.text }}>{label}</span>
          <span className="kit-row kit-row-tight">
            {ks.map((k) => (
              <kbd key={k} className="kit-kbd" style={{ color: t.text, borderColor: line(t, 0.35), borderRadius: t ? '5px' : undefined }}>
                {k}
              </kbd>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

function Meters() {
  const { t, r } = useKit()
  const rows: [string, string, number, string][] = [
    ['Tokens documented', '148 / 160', 92, t.primary],
    ['Components covered', '46 / 46', 100, '#1a9a5c'],
    ['Contrast checks', '51 / 60', 85, '#d68910'],
  ]
  return (
    <div className="kit-stack">
      {rows.map(([label, val, pct, c]) => (
        <div key={label} className="kit-meter" style={{ borderColor: line(t, 0.12), borderRadius: r }}>
          <span className="kit-help" style={{ color: t.text, minWidth: 150 }}>{label}</span>
          <div className="kit-bar" style={{ background: soft(t, 0.1), borderRadius: r, flex: 1 }}>
            <div className="kit-bar-fill" style={{ width: `${pct}%`, background: c, borderRadius: r }} />
          </div>
          <span className="kit-help" style={{ minWidth: 72, textAlign: 'right' }}>{val}</span>
        </div>
      ))}
    </div>
  )
}

/* ======================= NAVIGATION ======================= */

function Breadcrumb() {
  const { t } = useKit()
  const crumbs = ['Vault', 'Minimalism', 'Minimalist Tech']
  return (
    <nav className="kit-crumbs" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={c} className="kit-crumb">
          <a href="#/" onClick={(e) => e.preventDefault()} style={{ color: i === crumbs.length - 1 ? t.text : t.muted }}>
            {c}
          </a>
          {i < crumbs.length - 1 && <span className="kit-crumb-sep" style={{ color: line(t, 0.5) }}>/</span>}
        </span>
      ))}
    </nav>
  )
}

function Tabs() {
  const { t, r } = useKit()
  const [i, setI] = useState(0)
  const tabs = ['Overview', 'Tokens', 'Components', 'Changelog']
  return (
    <div className="kit-stack">
      <div className="kit-tabs" style={{ borderColor: line(t, 0.16) }}>
        {tabs.map((x, n) => (
          <button
            key={x}
            className="kit-tab"
            style={n === i ? { color: t.primary, borderColor: t.primary } : { color: t.muted }}
            onClick={() => setI(n)}
          >
            {x}
            {n === 2 && <span className="kit-tab-n" style={{ background: withAlpha(t.accent, 0.18), color: t.accent, borderRadius: r }}>46</span>}
          </button>
        ))}
      </div>
      <p className="kit-help">{tabs[i]} panel — panel content is themed by the same tokens as the tab strip.</p>
    </div>
  )
}

function Pagination() {
  const { t, r } = useKit()
  const [p, setP] = useState(3)
  return (
    <div className="kit-row">
      <button className="kit-page" style={{ color: t.text, borderColor: line(t, 0.3), borderRadius: r }} onClick={() => setP((x) => Math.max(1, x - 1))}>
        ‹ Prev
      </button>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className="kit-page"
          style={n === p ? { background: t.primary, color: t.onPrimary, borderColor: t.primary, borderRadius: r } : { color: t.muted, borderColor: line(t, 0.3), borderRadius: r }}
          onClick={() => setP(n)}
          aria-current={n === p}
        >
          {n}
        </button>
      ))}
      <span className="kit-help">… 42</span>
      <button className="kit-page" style={{ color: t.text, borderColor: line(t, 0.3), borderRadius: r }} onClick={() => setP((x) => Math.min(42, x + 1))}>
        Next ›
      </button>
    </div>
  )
}

function SideNav() {
  const { t, r } = useKit()
  const [i, setI] = useState(1)
  const items: [string, string][] = [
    ['◫', 'Overview'],
    ['▤', 'Analytics'],
    ['◍', 'Projects'],
    ['☰', 'Docs'],
    ['⚙', 'Settings'],
  ]
  return (
    <div className="kit-sidenav" style={{ borderColor: line(t, 0.16), borderRadius: r, background: soft(t, 0.03) }}>
      {items.map(([ic, label], n) => (
        <button
          key={label}
          className="kit-sidenav-item"
          style={n === i ? { background: withAlpha(t.primary, 0.14), color: t.primary, borderRadius: r } : { color: t.muted }}
          onClick={() => setI(n)}
        >
          <span className="kit-sidenav-ic">{ic}</span>
          {label}
          {n === 2 && <span className="kit-badge" style={{ background: withAlpha(t.accent, 0.18), color: t.accent, borderRadius: r }}>3</span>}
        </button>
      ))}
    </div>
  )
}

function Wizard() {
  const { t, r } = useKit()
  const [step, setStep] = useState(2)
  const steps = ['Brand', 'Tokens', 'Components', 'Publish']
  return (
    <div className="kit-stack">
      <div className="kit-wizard">
        {steps.map((s, n) => (
          <div key={s} className="kit-wiz-step">
            <span
              className="kit-wiz-dot"
              style={
                n <= step
                  ? { background: t.primary, color: t.onPrimary, borderRadius: r }
                  : { background: 'transparent', borderColor: line(t, 0.35), color: t.muted }
              }
            >
              {n < step ? '✓' : n + 1}
            </span>
            <span className="kit-help" style={{ color: n === step ? t.text : t.muted }}>{s}</span>
            {n < steps.length - 1 && <span className="kit-wiz-line" style={{ background: n < step ? t.primary : line(t, 0.2) }} />}
          </div>
        ))}
      </div>
      <div className="kit-row">
        <button className="kit-btn kit-btn-sm" style={{ border: `1px solid ${line(t, 0.35)}`, color: t.text, borderRadius: r }} onClick={() => setStep((s) => Math.max(0, s - 1))}>
          Back
        </button>
        <button className="kit-btn kit-btn-sm" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} onClick={() => setStep((s) => Math.min(3, s + 1))}>
          Continue
        </button>
        <span className="kit-help">Step {step + 1} of {steps.length}</span>
      </div>
    </div>
  )
}

function CommandPalette() {
  const { t, r } = useKit()
  const cmds: [string, string][] = [
    ['⧉ Copy design prompt', '⌃⇧C'],
    ['◫ Toggle layout', 'L'],
    ['♥ Save to favorites', 'F'],
    ['⤓ Export CSS variables', 'E'],
  ]
  return (
    <div className="kit-palette" style={{ background: t.surface, borderColor: line(t), borderRadius: r }}>
      <div className="kit-search kit-search-flat" style={{ borderColor: line(t, 0.16) }}>
        <span className="kit-search-ic" style={{ color: t.muted }}>⌘</span>
        <input className="kit-search-input" placeholder="Type a command or search…" style={{ color: t.text }} />
      </div>
      <div className="kit-palette-group" style={{ color: t.muted }}>Actions</div>
      {cmds.map(([label, kbd], i) => (
        <div key={label} className="kit-palette-row" style={i === 0 ? { background: withAlpha(t.primary, 0.12), color: t.primary } : { color: t.text }}>
          <span>{label}</span>
          <kbd className="kit-kbd" style={{ color: t.muted, borderColor: line(t, 0.3) }}>{kbd}</kbd>
        </div>
      ))}
    </div>
  )
}

function DropdownMenu() {
  const { t, r } = useKit()
  const [open, setOpen] = useState(false)
  return (
    <div className="kit-stack">
      <button className="kit-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        Project actions ▾
      </button>
      {open && (
        <ul className="kit-menu kit-menu-wide" style={{ background: t.surface, borderColor: line(t), borderRadius: r }}>
          {['Duplicate', 'Move to…', 'Export tokens'].map((x) => (
            <li key={x} className="kit-menu-item" style={{ color: t.text }}>{x}</li>
          ))}
          <li className="kit-menu-sep" style={{ background: line(t, 0.16) }} />
          <li className="kit-menu-item kit-menu-danger" style={{ color: '#c0392b' }}>Delete project</li>
        </ul>
      )}
    </div>
  )
}

/* ======================= OVERLAYS & MEDIA ======================= */

function Accordion() {
  const { t } = useKit()
  const [open, setOpen] = useState<number | null>(0)
  const items: [string, string][] = [
    ['How do tokens get themed?', 'Each design system exposes one token block. The kit reads it — nothing is hard-coded per design.'],
    ['Is the kit accessible?', 'Every control is a real button, input, or select with a label and focus ring.'],
    ['Can I use one component only?', 'Yes. Copy the JSX and keep the CSS variables; the rest of the kit is independent.'],
  ]
  return (
    <div className="kit-stack">
      {items.map(([q, a], i) => (
        <div key={q} className="kit-acc" style={{ borderColor: line(t, 0.16) }}>
          <button className="kit-acc-q" style={{ color: t.text }} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{q}</span>
            <span style={{ color: t.primary }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p className="kit-acc-a kit-help">{a}</p>}
        </div>
      ))}
    </div>
  )
}

function Tooltip() {
  const { t, r } = useKit()
  return (
    <div className="kit-row">
      <span className="kit-tip-host">
        <button className="kit-suggest" style={{ color: t.text, borderColor: line(t, 0.35), borderRadius: r }}>Hover me</button>
        <span className="kit-tip" style={{ background: t.text, color: t.bg, borderRadius: r }}>
          Tokens stay in sync
        </span>
      </span>
      <span className="kit-tip-host">
        <span className="kit-help" style={{ borderBottom: `1px dashed ${line(t, 0.4)}` }}>Definition</span>
        <span className="kit-tip" style={{ background: t.text, color: t.bg, borderRadius: r }}>
          A reusable value, named once.
        </span>
      </span>
    </div>
  )
}

function Popover() {
  const { t, r } = useKit()
  const [open, setOpen] = useState(true)
  return (
    <div className="kit-stack">
      <button className="kit-btn kit-btn-sm" style={{ border: `1px solid ${line(t, 0.35)}`, color: t.text, borderRadius: r }} onClick={() => setOpen((o) => !o)}>
        {open ? 'Hide' : 'Show'} popover
      </button>
      {open && (
        <div className="kit-popover" style={{ background: t.surface, borderColor: line(t), borderRadius: r }}>
          <span className="kit-popover-arrow" style={{ background: t.surface, borderColor: line(t) }} />
          <strong style={{ color: t.text }}>Share this design</strong>
          <p className="kit-help">Anyone with the link sees the live preview and can copy the prompt.</p>
          <div className="kit-row">
            <button className="kit-btn kit-btn-sm" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>Copy link</button>
            <button className="kit-text-btn kit-btn-sm" style={{ color: t.muted }}>Manage access</button>
          </div>
        </div>
      )}
    </div>
  )
}

function ModalDemo() {
  const { t, r } = useKit()
  const [open, setOpen] = useState(false)
  return (
    <div className="kit-stack">
      <button className="kit-btn" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} onClick={() => setOpen(true)}>
        Open modal
      </button>
      {open && (
        <div className="kit-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="kit-modal" style={{ background: t.bg, borderColor: line(t), borderRadius: r }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="kit-between">
              <strong style={{ color: t.text }}>Publish this design system?</strong>
              <button className="kit-alert-x" style={{ color: t.muted }} onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <p className="kit-help">Publishing writes tokens to the registry and notifies 24 members.</p>
            <div className="kit-row">
              <button className="kit-btn kit-btn-sm" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }} onClick={() => setOpen(false)}>
                Publish
              </button>
              <button className="kit-btn kit-btn-sm" style={{ border: `1px solid ${line(t, 0.35)}`, color: t.text, borderRadius: r }} onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DrawerDemo() {
  const { t, r } = useKit()
  const [open, setOpen] = useState(false)
  return (
    <div className="kit-stack">
      <button className="kit-btn" style={{ border: `1px solid ${line(t, 0.35)}`, color: t.text, borderRadius: r }} onClick={() => setOpen((o) => !o)}>
        {open ? 'Close' : 'Open'} side sheet
      </button>
      <div className="kit-drawer" style={{ background: t.surface, borderColor: line(t), borderRadius: r, transform: open ? 'translateX(0)' : 'translateX(12px)', opacity: open ? 1 : 0.35 }}>
        <div className="kit-between">
          <strong style={{ color: t.text }}>Package details</strong>
          <span className="kit-help">v2.4.0</span>
        </div>
        {['tokens.css — 148 vars', 'kit.jsx — 46 components', 'prompt.md — copyable spec'].map((x) => (
          <div key={x} className="kit-list-row" style={{ borderColor: line(t, 0.12), borderRadius: r }}>
            <span className="kit-help" style={{ color: t.text, flex: 1 }}>{x}</span>
            <span className="kit-help">⤓</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Dropzone() {
  const { t, r } = useKit()
  const [files, setFiles] = useState<string[]>(['brand-guide.pdf'])
  return (
    <div className="kit-stack">
      <div className="kit-drop" style={{ borderColor: line(t, 0.35), borderRadius: r, background: soft(t, 0.03) }} onClick={() => setFiles((f) => [...f, `asset-${f.length + 1}.svg`])}>
        <span style={{ color: t.primary, fontSize: 20 }}>⤒</span>
        <strong style={{ color: t.text }}>Drop files to upload</strong>
        <span className="kit-help">SVG, PNG, PDF up to 20 MB · click to simulate</span>
      </div>
      {files.map((f, i) => (
        <div key={f} className="kit-list-row" style={{ borderColor: line(t, 0.12), borderRadius: r }}>
          <span className="kit-help" style={{ color: t.text, flex: 1 }}>◫ {f}</span>
          <div className="kit-bar" style={{ width: 90, background: soft(t, 0.1), borderRadius: r }}>
            <div className="kit-bar-fill" style={{ width: `${90 - i * 20}%`, background: t.primary, borderRadius: r }} />
          </div>
          <button className="kit-alert-x" style={{ color: t.muted }} onClick={() => setFiles((s) => s.filter((x) => x !== f))} aria-label={`Remove ${f}`}>
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

function MiniCalendar() {
  const { t, r } = useKit()
  const [sel, setSel] = useState(17)
  const days = Array.from({ length: 35 }, (_, i) => i - 2)
  return (
    <div className="kit-cal" style={{ borderColor: line(t), borderRadius: r }}>
      <div className="kit-between">
        <strong style={{ color: t.text }}>September 2026</strong>
        <span className="kit-help">‹ ›</span>
      </div>
      <div className="kit-cal-grid">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i} className="kit-help kit-cal-dow">{d}</span>
        ))}
        {days.map((n) => {
          const inMonth = n >= 1 && n <= 30
          return (
            <button
              key={n}
              className="kit-cal-day"
              style={
                n === sel
                  ? { background: t.primary, color: t.onPrimary, borderRadius: r }
                  : { color: inMonth ? t.text : line(t, 0.35), borderRadius: r }
              }
              onClick={() => inMonth && setSel(n)}
              disabled={!inMonth}
            >
              {inMonth ? n : n <= 0 ? 31 + n : n - 30}
              {n === 8 && <i className="kit-cal-event" style={{ background: t.accent }} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Notifications() {
  const { t, r } = useKit()
  const items: [string, string, string][] = [
    ['K. Ito requested access', '2m', t.primary],
    ['Build #482 passed', '18m', '#1a9a5c'],
    ['Token lint found 3 issues', '1h', '#d68910'],
  ]
  return (
    <div className="kit-stack">
      {items.map(([msg, when, c], i) => (
        <div key={msg} className="kit-note" style={{ borderColor: line(t, 0.12), borderRadius: r, background: i === 0 ? withAlpha(t.primary, 0.05) : 'transparent' }}>
          <span className="kit-note-dot" style={{ background: c }} />
          <span style={{ color: t.text, flex: 1 }}>{msg}</span>
          <span className="kit-help">{when}</span>
          {i === 0 && <span className="kit-dot-unread" style={{ background: t.accent }} />}
        </div>
      ))}
    </div>
  )
}

function ChatThread() {
  const { t, r } = useKit()
  return (
    <div className="kit-chat">
      <div className="kit-bubble kit-bubble-in" style={{ background: soft(t, 0.08), color: t.text, borderRadius: r }}>
        Can we make the hero type a step larger?
      </div>
      <div className="kit-bubble kit-bubble-out" style={{ background: t.primary, color: t.onPrimary, borderRadius: r }}>
        Done — 72px, tracking tightened by 0.02em.
      </div>
      <div className="kit-bubble kit-bubble-in kit-typing" style={{ background: soft(t, 0.08), color: t.muted, borderRadius: r }}>
        <i /><i /><i />
      </div>
    </div>
  )
}

function MediaCard() {
  const { t, r } = useKit()
  return (
    <div className="kit-media-card" style={{ borderColor: line(t), borderRadius: r, background: t.surface }}>
      <div className="kit-media" style={{ background: `linear-gradient(150deg, ${t.primary}, ${t.secondary})` }}>
        <span className="kit-media-tag" style={{ background: withAlpha('#000', 0.45), color: '#fff', borderRadius: r }}>6 min read</span>
      </div>
      <div className="kit-stack kit-stack-tight kit-media-body">
        <strong style={{ color: t.text }}>The quiet case for one spacing scale</strong>
        <span className="kit-help">Most systems fail on the fifth spacing value. Here is how to stop at four.</span>
        <div className="kit-between">
          <span className="kit-help">Design Notes</span>
          <span className="kit-help" style={{ color: t.primary }}>Read →</span>
        </div>
      </div>
    </div>
  )
}

function ColorSwatches() {
  const { t, r } = useKit()
  const hexes = [t.primary, t.secondary, t.accent, soft(t, 0.4), t.text]
  const [on, setOn] = useState(0)
  return (
    <div className="kit-stack">
      <div className="kit-row">
        {hexes.map((h, i) => (
          <button
            key={h + i}
            className="kit-swatch"
            style={{ background: h, borderRadius: r, outline: i === on ? `2px solid ${t.text}` : 'none', outlineOffset: 2 }}
            onClick={() => setOn(i)}
            aria-label={`Color ${i + 1}`}
          />
        ))}
      </div>
      <span className="kit-help">Selected: {hexes[on]}</span>
    </div>
  )
}

/* ======================= REGISTRY ======================= */

export type KitGroupId = 'actions' | 'selection' | 'feedback' | 'data' | 'nav' | 'overlays'

export const KIT_GROUPS: { id: KitGroupId; label: string; blurb: string }[] = [
  { id: 'actions', label: 'Inputs & actions', blurb: 'Buttons, fields, and every entry point a page needs.' },
  { id: 'selection', label: 'Selection & toggles', blurb: 'Choices, preferences, and rating controls.' },
  { id: 'feedback', label: 'Feedback & status', blurb: 'Progress, alerts, loading, and empty states.' },
  { id: 'data', label: 'Data display', blurb: 'Tables, lists, metrics, and code surfaces.' },
  { id: 'nav', label: 'Navigation', blurb: 'Wayfinding from breadcrumb to command palette.' },
  { id: 'overlays', label: 'Overlays & media', blurb: 'Modals, sheets, popovers, uploads, and chat.' },
]

export interface KitItem {
  id: string
  name: string
  group: KitGroupId
  Comp: () => React.ReactElement
}

export const KIT_ITEMS: KitItem[] = [
  { id: 'btn-primary', name: 'Primary button · states', group: 'actions', Comp: BtnPrimary },
  { id: 'btn-secondary', name: 'Secondary & tertiary', group: 'actions', Comp: BtnSecondary },
  { id: 'btn-danger', name: 'Destructive actions', group: 'actions', Comp: BtnDanger },
  { id: 'btn-split', name: 'Split button', group: 'actions', Comp: BtnSplit },
  { id: 'btn-icons', name: 'Icon buttons', group: 'actions', Comp: BtnIcons },
  { id: 'field-text', name: 'Text field · help + error', group: 'actions', Comp: FieldText },
  { id: 'field-textarea', name: 'Textarea · counter', group: 'actions', Comp: FieldTextarea },
  { id: 'field-select', name: 'Select', group: 'actions', Comp: FieldSelect },
  { id: 'field-search', name: 'Search field', group: 'actions', Comp: FieldSearch },
  { id: 'field-stepper', name: 'Quantity stepper', group: 'actions', Comp: FieldStepper },
  { id: 'field-slider', name: 'Slider', group: 'actions', Comp: FieldSlider },
  { id: 'segmented', name: 'Segmented control', group: 'actions', Comp: Segmented },
  { id: 'checkboxes', name: 'Checkbox group', group: 'selection', Comp: Checkboxes },
  { id: 'radios', name: 'Radio cards', group: 'selection', Comp: Radios },
  { id: 'switches', name: 'Switch list', group: 'selection', Comp: Switches },
  { id: 'rating', name: 'Star rating', group: 'selection', Comp: Rating },
  { id: 'chips-input', name: 'Tag input', group: 'selection', Comp: ChipsInput },
  { id: 'toggle-group', name: 'View toggle group', group: 'selection', Comp: ToggleGroup },
  { id: 'alerts', name: 'Inline alerts', group: 'feedback', Comp: Alerts },
  { id: 'toasts', name: 'Toast stack', group: 'feedback', Comp: Toasts },
  { id: 'progress-bars', name: 'Progress bars', group: 'feedback', Comp: ProgressBars },
  { id: 'progress-ring', name: 'Progress ring', group: 'feedback', Comp: ProgressRing },
  { id: 'skeleton', name: 'Skeleton loader', group: 'feedback', Comp: Skeleton },
  { id: 'spinners', name: 'Loading indicators', group: 'feedback', Comp: Spinners },
  { id: 'empty-state', name: 'Empty state', group: 'feedback', Comp: EmptyState },
  { id: 'banner', name: 'Notice banner', group: 'feedback', Comp: Banner },
  { id: 'stat-cards', name: 'Metric cards + sparkline', group: 'data', Comp: StatCards },
  { id: 'table-toolbar', name: 'Data table + toolbar', group: 'data', Comp: TableToolbar },
  { id: 'data-list', name: 'Record list', group: 'data', Comp: DataList },
  { id: 'timeline', name: 'Activity timeline', group: 'data', Comp: Timeline },
  { id: 'badges', name: 'Badges & status', group: 'data', Comp: Badges },
  { id: 'avatars', name: 'Avatars & presence', group: 'data', Comp: Avatars },
  { id: 'code-block', name: 'Code block', group: 'data', Comp: CodeBlock },
  { id: 'shortcuts', name: 'Keyboard shortcuts', group: 'data', Comp: Shortcuts },
  { id: 'meters', name: 'Usage meters', group: 'data', Comp: Meters },
  { id: 'breadcrumb', name: 'Breadcrumb', group: 'nav', Comp: Breadcrumb },
  { id: 'tabs', name: 'Tabs', group: 'nav', Comp: Tabs },
  { id: 'pagination', name: 'Pagination', group: 'nav', Comp: Pagination },
  { id: 'sidenav', name: 'Side navigation', group: 'nav', Comp: SideNav },
  { id: 'wizard', name: 'Step wizard', group: 'nav', Comp: Wizard },
  { id: 'command-palette', name: 'Command palette', group: 'nav', Comp: CommandPalette },
  { id: 'dropdown', name: 'Dropdown menu', group: 'nav', Comp: DropdownMenu },
  { id: 'accordion', name: 'Accordion', group: 'overlays', Comp: Accordion },
  { id: 'tooltip', name: 'Tooltip', group: 'overlays', Comp: Tooltip },
  { id: 'popover', name: 'Popover', group: 'overlays', Comp: Popover },
  { id: 'modal', name: 'Modal dialog', group: 'overlays', Comp: ModalDemo },
  { id: 'drawer', name: 'Side sheet', group: 'overlays', Comp: DrawerDemo },
  { id: 'dropzone', name: 'File dropzone', group: 'overlays', Comp: Dropzone },
  { id: 'calendar', name: 'Mini calendar', group: 'overlays', Comp: MiniCalendar },
  { id: 'notifications', name: 'Notification list', group: 'overlays', Comp: Notifications },
  { id: 'chat', name: 'Chat thread', group: 'overlays', Comp: ChatThread },
  { id: 'media-card', name: 'Media card', group: 'overlays', Comp: MediaCard },
  { id: 'swatches', name: 'Color swatch picker', group: 'overlays', Comp: ColorSwatches },
]

/** How many components every design ships with. */
export const KIT_SIZE = KIT_ITEMS.length

/**
 * The kit board. `group` filters to one family; `search` filters by name.
 * Rendered inside the live preview and in the preview's dedicated
 * "Components" tab, always themed from the design's own tokens.
 */
export function ComponentKit({ d, group, search }: { d: DesignSystem; group?: KitGroupId | null; search?: string }) {
  const t = useMemo(() => themeOf(d), [d])
  const r = useMemo(() => radiusOf(d), [d])
  const ctx = useMemo<Kit>(() => ({ d, t, r }), [d, t, r])

  const q = (search ?? '').trim().toLowerCase()
  const shown = KIT_ITEMS.filter((i) => (!group || i.group === group) && (!q || i.name.toLowerCase().includes(q) || i.id.includes(q)))
  const groups = KIT_GROUPS.filter((g) => shown.some((i) => i.group === g.id))

  return (
    <KitCtx.Provider value={ctx}>
      <div className="kit-root" style={{ background: t.bg, color: t.text }}>
        <header className="kit-head">
          <span className="kit-badge" style={{ background: withAlpha(t.primary, 0.14), color: t.primary, borderRadius: r }}>
            {KIT_SIZE} components
          </span>
          <h2 className="kit-h2" style={{ fontFamily: `'${t.display}', sans-serif`, color: t.text }}>
            Component kit
          </h2>
          <p className="kit-sub">
            Every component below is rendered from {d.name}'s own tokens — colors, type pairing, radius, and border weight.
            Nothing is hard-coded, so the same kit reads as a different system in every design.
          </p>
        </header>

        {groups.map((g) => (
          <section key={g.id} className="kit-section">
            <div className="kit-section-head">
              <h3 className="kit-h3" style={{ fontFamily: `'${t.display}', sans-serif`, color: t.text }}>
                {g.label}
              </h3>
              <span className="kit-help">{g.blurb}</span>
            </div>
            <div className="kit-specimen-grid">
              {shown
                .filter((i) => i.group === g.id)
                .map(({ id, name, Comp }) => (
                  <div key={id} className="kit-specimen" style={{ borderColor: line(t, 0.14), borderRadius: r, background: t.surface }}>
                    <span className="kit-specimen-name" style={{ color: t.muted }}>{name}</span>
                    <div className="kit-specimen-body">
                      <Comp />
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {shown.length === 0 && (
          <p className="kit-help" style={{ padding: 20 }}>
            No components match “{search}”.
          </p>
        )}
      </div>
    </KitCtx.Provider>
  )
}
