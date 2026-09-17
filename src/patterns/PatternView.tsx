import { useEffect, useMemo, useRef, useState } from 'react'
import {
  PATTERNS,
  PATTERN_FAMILIES,
  buildPatternCss,
  type PatternDef,
  type PatternFamily,
  type PtBlock,
} from './patterns'

/**
 * Renders the pattern library. Every block is a real, self-contained slice of
 * interface — the same primitives you would hand to an engineer — composed by
 * the pattern's canvas arrangement. All 110 stylesheets ship as one sheet.
 */

const PATTERN_BASE_CSS = buildPatternCss()

/* ---------------- deterministic placeholder copy ---------------- */

const PEOPLE = ['M. Chen', 'K. Ito', 'A. Duval', 'R. Osei', 'S. Varga', 'N. Okafor', 'L. Moreau', 'J. Park']
const WORDS = [
  'Aurora', 'Borealis', 'Cinder', 'Delta', 'Ember', 'Fathom', 'Granite', 'Halcyon',
  'Ivory', 'Juniper', 'Kestrel', 'Lantern', 'Meridian', 'Nimbus', 'Onyx', 'Perigee',
]
const pick = <T,>(arr: T[], i: number): T => arr[i % arr.length]

let seedCache: Record<string, number> | null = null
function seedOf(s: string): number {
  if (!seedCache) seedCache = {}
  if (seedCache[s] === undefined) {
    let h = 0
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000
    seedCache[s] = h
  }
  return seedCache[s]
}

function toneColor(tone: PtBlock['tone'] | undefined, fallback = ''): string {
  switch (tone) {
    case 'ok': return 'pt-badge-ok'
    case 'warn': return 'pt-badge-warn'
    case 'bad': return 'pt-badge-bad'
    case 'brand': return 'pt-badge-brand'
    default: return fallback
  }
}

function toneVar(tone: PtBlock['tone'] | undefined): string {
  switch (tone) {
    case 'ok': return 'var(--p-ok)'
    case 'warn': return 'var(--p-accent)'
    case 'bad': return 'var(--p-bad)'
    default: return 'var(--p-brand)'
  }
}

/* ================= block renderers ================= */

function renderBlock(b: PtBlock, i: number, p: PatternDef): React.ReactElement {
  const C = (extra: string) => `pt-b pt-i${i} ${extra}`
  const cols = b.cols ?? 3
  const n = b.n ?? 3
  const seed = seedOf(p.id + i)

  const heading = b.title || b.sub
    ? (
      <div className={`pt-col pt-col-tight${b.v === 'center' ? ' pt-center' : ''}`}>
        {b.title && <h3 className="pt-h3">{b.title}</h3>}
        {b.sub && <p className="pt-sub">{b.sub}</p>}
      </div>
    )
    : null

  switch (b.k) {
    case 'nav':
      return (
        <nav className={C(`pt-nav${b.v === 'flat' ? ' pt-nav-flat' : b.v === 'compact' ? ' pt-nav-sq' : ''}`)}>
          <span className="pt-logo"><i />{pick(WORDS, seed)}</span>
          <span className="pt-nav-links">
            {['Product', 'Patterns', 'Pricing', 'Docs'].map((l, n2) => (
              <span key={l} className={n2 === 0 ? 'on' : ''}>{l}</span>
            ))}
          </span>
          <span className="pt-nav-end">
            <span className="pt-btn pt-btn-ghost pt-btn-sm">Sign in</span>
            <span className="pt-btn pt-btn-sm">Get started</span>
          </span>
        </nav>
      )

    case 'sidebar':
      return (
        <aside className={C('pt-side')}>
          <span className="pt-logo" style={{ marginBottom: 6 }}><i />{pick(WORDS, seed + 3)}</span>
          {(b.items ?? ['Overview', 'Projects', 'Reports']).map((x, n2) => (
            <span key={x} className={`pt-side-item${n2 === 1 ? ' on' : ''}`}>
              <span aria-hidden>{['◫', '▤', '◍', '☰', '⚙'][n2 % 5]}</span>
              <span>{x}</span>
              {n2 === 1 && <span className="pt-badge pt-badge-soft">4</span>}
            </span>
          ))}
        </aside>
      )

    case 'breadcrumb':
      return (
        <nav className={C('pt-crumb')}>
          {(b.items ?? ['Home', 'Section', 'Page']).map((x, n2, arr) => (
            <span key={x} className="pt-crumb">
              {n2 === arr.length - 1 ? <b>{x}</b> : <span>{x}</span>}
              {n2 < arr.length - 1 && <span aria-hidden>/</span>}
            </span>
          ))}
        </nav>
      )

    case 'tabs':
      return (
        <div className={C('pt-tabs')}>
          {(b.items ?? ['Overview', 'Details', 'Activity']).map((x, n2) => (
            <span key={x} className={`pt-tab${n2 === 0 ? ' on' : ''}`}>{x}</span>
          ))}
        </div>
      )

    case 'toolbar':
      return (
        <div className={C('pt-toolbar')}>
          <span className="pt-search"><span aria-hidden>⌕</span>{b.title ?? 'Search'}</span>
          <span className="pt-chip">Filters</span>
          <span className="pt-chip">Sort: newest</span>
          <span className="pt-btn pt-btn-sm" style={{ marginLeft: 'auto' }}>＋ New</span>
        </div>
      )

    case 'filters':
      return (
        <div className={C(`pt-filters${b.v === 'aside' ? ' pt-aside' : ''}`)}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {(b.items ?? ['All', 'Active', 'Archived']).map((x, n2) => (
            <span key={x} className={`pt-chip${n2 === 0 ? ' on' : ''}`}>{x}</span>
          ))}
          {b.v === 'aside' && (
            <span className="pt-check on" style={{ marginTop: 6 }}><i>✓</i>Only mine</span>
          )}
        </div>
      )

    case 'pager':
      return (
        <div className={C('pt-pager')}>
          <span className="pt-btn pt-btn-ghost pt-btn-sm">‹ Prev</span>
          <b>{b.title ?? '1 2 3'}</b>
          <span className="pt-btn pt-btn-ghost pt-btn-sm">Next ›</span>
        </div>
      )

    case 'steps':
      return (
        <div className={C(`pt-steps${b.v === 'wide' ? ' pt-wide' : ''}`)}>
          {(b.items ?? ['One', 'Two', 'Three']).map((x, n2) => (
            <span key={x} className={`pt-step${n2 === 0 ? ' done' : n2 === 1 ? ' on' : ''}`}>
              <span className="pt-step-dot">{n2 === 0 ? '✓' : n2 + 1}</span>
              <span>{x}</span>
              {n2 < (b.items ?? ['', '', '']).length - 1 && <span className="pt-step-line" />}
            </span>
          ))}
        </div>
      )

    case 'head':
      return (
        <header className={C(`pt-head${b.v === 'center' ? ' pt-center' : ''}`)}>
          {b.k === 'head' && <p className="pt-kicker">{p.family} pattern</p>}
          <h2 className="pt-h1">{b.title ?? p.name}</h2>
          {b.sub && <p className="pt-sub">{b.sub}</p>}
        </header>
      )

    case 'hero':
      return (
        <section className={C('pt-hero')}>
          <h2 className="pt-h1">{b.title ?? p.name}</h2>
          {b.sub && <p className="pt-sub">{b.sub}</p>}
          <span className="pt-row" style={{ marginTop: 4 }}>
            <span className="pt-btn" style={{ background: '#fff', color: '#111' }}>Get started</span>
            <span className="pt-btn pt-btn-ghost" style={{ borderColor: 'rgba(255,255,255,.45)', color: '#fff' }}>See the docs</span>
          </span>
        </section>
      )

    case 'split':
      return (
        <section className={C(`pt-card pt-card-pad pt-split${b.v === 'media-text' ? ' pt-media-first' : ''}`)}>
          <div className="pt-col">
            <h3 className="pt-h2">{b.title ?? p.name}</h3>
            {b.sub && <p className="pt-sub">{b.sub}</p>}
            {b.items && (
              <div className="pt-col pt-col-tight" style={{ marginTop: 2 }}>
                {b.items.map((x) => (
                  <span key={x} className="pt-check on"><i>✓</i>{x}</span>
                ))}
              </div>
            )}
            <span className="pt-row" style={{ marginTop: 4 }}>
              <span className="pt-btn">{b.v === 'media-text' ? 'Read more' : 'Start free'}</span>
              <span className="pt-btn pt-btn-ghost">Learn more</span>
            </span>
          </div>
          <div className="pt-media pt-media-tall" />
        </section>
      )

    case 'stats':
      return (
        <div className={C('pt-stats')} style={{ ['--pt-cols' as string]: cols }}>
          {(b.items ?? ['98% faster', '4.9★ rating', '12k teams', '6 tokens']).map((x, n2) => {
            const [v, ...rest] = x.split(' ')
            return (
              <div key={x} className="pt-card">
                <strong>{v}</strong>
                <span className="pt-cap">{rest.join(' ') || 'metric'}</span>
                {b.v === 'wide' && <span className="pt-bar"><i style={{ width: `${60 + ((n2 * 13) % 40)}%` }} /></span>}
              </div>
            )
          })}
        </div>
      )

    case 'kpis':
      return (
        <div className={C('pt-kpis')} style={{ ['--pt-cols' as string]: cols }}>
          {(b.items ?? ['MRR $48.2k', 'Users 12,043', 'Churn 1.9%', 'NPS 62']).map((x, n2) => {
            const [label, value] = x.split(' ')
            return (
              <div key={x} className="pt-card">
                <span className="pt-cap">{label}</span>
                <strong>{value ?? '—'}</strong>
                <span className="pt-row" style={{ justifyContent: 'space-between' }}>
                  <span className={`pt-badge ${toneColor(n2 === 2 ? 'warn' : 'ok', 'pt-badge-brand')}`}>
                    {n2 === 2 ? '−0.4%' : '+8.4%'}
                  </span>
                  <span className="pt-spark" aria-hidden>
                    {[40, 62, 48, 74, 58, 86, 70].map((h, k) => (
                      <i key={k} style={{ height: `${(h + n2 * 7) % 100}%` }} />
                    ))}
                  </span>
                </span>
              </div>
            )
          })}
        </div>
      )

    case 'cards':
      return (
        <div className={C('pt-cards')} style={{ ['--pt-cols' as string]: cols }}>
          {Array.from({ length: n }, (_, k) => (
            <article key={k} className={`pt-card${b.v === 'tall' ? ' pt-card-flat' : ''}`}>
              {b.v === 'tall' && <div className="pt-media" />}
              <span className="pt-badge pt-badge-brand">{['Pattern', 'Recipe', 'Guide', 'System', 'Note', 'Tool'][k % 6]}</span>
              <h3 className="pt-h3">{`${pick(WORDS, seed + k)} ${['workflow', 'checklist', 'reference', 'blueprint', 'playbook', 'kit'][k % 6]}`}</h3>
              <p className="pt-sub">A short, practical description of what this tile does and when to reach for it.</p>
              <span className="pt-row" style={{ marginTop: 'auto', justifyContent: 'space-between' }}>
                <span className="pt-tiny">{4 + ((seed + k) % 9)} min read</span>
                <span className="pt-tiny" style={{ color: 'var(--p-brand)', fontWeight: 700 }}>Open →</span>
              </span>
            </article>
          ))}
        </div>
      )

    case 'list':
      return (
        <section className={C(`pt-list${b.v === 'grid' ? ' pt-grid' : b.v === 'inline' ? ' pt-inline' : ''}`)} style={{ ['--pt-cols' as string]: cols }}>
          {heading}
          {(b.items ?? Array.from({ length: n }, (_, k) => `${pick(WORDS, seed + k)} item`)).map((x, k) => {
            if (b.v === 'inline') return <span key={x + k} className="pt-chip">{x}</span>
            return (
              <div key={x + k} className={b.v === 'grid' || b.v === 'aside' || b.v === 'compact' ? 'pt-card' : 'pt-list-row'}>
                {(b.v === 'grid' || b.v === 'aside') && <span className="pt-avatar pt-avatar-soft">{x[0]}</span>}
                <span className="pt-col pt-col-tight pt-grow">
                  <b style={{ fontWeight: 680 }}>{x}</b>
                  {(b.v === 'wide' || b.v === 'grid') && (
                    <span className="pt-tiny">Supporting detail that makes the row feel like a real record.</span>
                  )}
                </span>
                {b.v === 'wide' && <span className="pt-badge pt-badge-ok">Ready</span>}
              </div>
            )
          })}
        </section>
      )

    case 'media':
      return <div className={C(`pt-media${b.v === 'tall' ? ' pt-media-tall' : b.v === 'wide' ? ' pt-media-wide' : ''}`)} />

    case 'gallery':
      return (
        <div className={C('pt-gallery')} style={{ ['--pt-cols' as string]: b.cols ?? 6 }}>
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-col pt-col-tight">
              <div className="pt-media" style={{ minHeight: 96, aspectRatio: '1' }} />
              <span className="pt-cap">{`Plate ${String(k + 1).padStart(2, '0')}`}</span>
            </div>
          ))}
        </div>
      )

    case 'quote':
      return (
        <blockquote className={C('pt-quote')}>
          “{b.title ?? 'Consistency is character, repeated.'}”
        </blockquote>
      )

    case 'logos':
      return (
        <div className={C('pt-logos')}>
          {b.sub && <span className="pt-cap">{b.sub}</span>}
          {Array.from({ length: 6 }, (_, k) => (
            <b key={k}>{pick(WORDS, seed + k)}</b>
          ))}
        </div>
      )

    case 'cta':
      return (
        <section className={C('pt-cta')}>
          <span className="pt-col pt-col-tight">
            <b style={{ fontSize: 14, fontWeight: 760 }}>{b.title ?? 'Ready when you are.'}</b>
            {b.sub && <span className="pt-sub">{b.sub}</span>}
          </span>
          <span className="pt-btn">Get started</span>
          <span className="pt-btn pt-btn-ghost">Talk to us</span>
        </section>
      )

    case 'footer':
      return (
        <footer className={C('pt-footer')}>
          <span className="pt-logo"><i />{pick(WORDS, seed)}</span>
          <span>© 2026 · A production pattern from the library</span>
          <span style={{ marginLeft: 'auto' }} className="pt-row">
            {['Privacy', 'Terms', 'Status'].map((x) => <span key={x}>{x}</span>)}
          </span>
        </footer>
      )

    case 'table': {
      const head = b.items ?? ['Name', 'Status', 'Updated']
      const rows = b.rows ?? Array.from({ length: n }, (_, k) => [pick(WORDS, seed + k), 'Active', `${k + 1}h ago`])
      return (
        <section className={C('pt-card pt-card-flat')} style={{ padding: 0, gap: 0, overflow: 'hidden' }}>
          {b.title && <div style={{ padding: '12px 14px' }}><span className="pt-cap">{b.title}</span></div>}
          <div style={{ overflowX: 'auto' }}>
            <table className="pt-table">
              <thead>
                <tr>{head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ fontWeight: ci === 0 ? 700 : 400 }}>
                        {ci === row.length - 1 && /Paid|Active|Live|Open|Ready/.test(cell)
                          ? <span className="pt-badge pt-badge-ok">{cell}</span>
                          : ci === row.length - 1 && /Overdue|Suspended|Trial|Invited|Draft/.test(cell)
                            ? <span className="pt-badge pt-badge-warn">{cell}</span>
                            : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )
    }

    case 'chart':
      return (
        <section className={C('pt-card')}>
          <span className="pt-between">
            <b style={{ fontSize: 12.5, fontWeight: 740 }}>{b.title ?? 'Trend'}</b>
            <span className="pt-cap">Last 12 weeks</span>
          </span>
          <div className="pt-chart">
            {[42, 55, 48, 66, 59, 74, 68, 82, 77, 90, 84, 96].map((h, k) => (
              <i key={k} className={k % 3 === 2 ? 'alt' : ''} style={{ height: `${h}%` }} />
            ))}
          </div>
        </section>
      )

    case 'kanban':
      return (
        <div className={C('pt-kanban')} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: 12 }}>
          {['Backlog', 'In progress', 'Review', 'Done'].slice(0, cols).map((col, ci) => (
            <div key={col} className="pt-kanban-col">
              <span className="pt-between">
                <span className="pt-cap">{col}</span>
                <span className="pt-tiny">{ci + 2}</span>
              </span>
              {Array.from({ length: Math.max(2, Math.ceil(n / cols)) }, (_, k) => (
                <div key={k} className="pt-kanban-card">
                  <b style={{ fontWeight: 660 }}>{`${pick(WORDS, seed + ci * 3 + k)} ${['spec', 'audit', 'build', 'review'][k % 4]}`}</b>
                  <span className="pt-row" style={{ justifyContent: 'space-between' }}>
                    <span className={`pt-badge ${toneColor(k === 0 ? 'brand' : 'ok')}`}>{k === 0 ? 'On track' : 'Queued'}</span>
                    <span className="pt-avatar pt-avatar-soft" style={{ width: 20, height: 20, fontSize: 9 }}>
                      {pick(PEOPLE, seed + k)[0]}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )

    case 'calendar':
      return (
        <section className={C('pt-card')}>
          <span className="pt-between">
            <b style={{ fontSize: 12.5, fontWeight: 740 }}>{b.title ?? 'Month'}</b>
            <span className="pt-tiny">‹ ›</span>
          </span>
          <div className="pt-cal">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, k) => <span key={k} className="pt-cal-dow">{d}</span>)}
            {Array.from({ length: 35 }, (_, k) => {
              const day = k - 2
              const inMonth = day >= 1 && day <= 30
              return (
                <span
                  key={k}
                  className={`pt-cal-day${day === 17 ? ' on' : ''}${inMonth && day % 5 === 0 ? ' ev' : ''}${!inMonth ? ' mut' : ''}`}
                >
                  {inMonth ? day : ''}
                </span>
              )
            })}
          </div>
        </section>
      )

    case 'timeline':
      return (
        <section className={C(`pt-timeline${b.title ? ' pt-list' : ''}`)}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {(b.items ?? ['Event one', 'Event two', 'Event three']).map((x, k) => (
            <div key={x + k} className="pt-tl-row">
              <span className="pt-dot" style={{ background: k === 0 ? 'var(--p-brand)' : 'var(--p-line)' }} />
              <span className="pt-tiny" style={{ minWidth: 46 }}>{`${9 + k}:${k % 2 ? '12' : '48'}`}</span>
              <span className="pt-grow">{x}</span>
              {k === 0 && <span className="pt-badge pt-badge-brand">now</span>}
            </div>
          ))}
        </section>
      )

    case 'activity':
      return (
        <section className={C('pt-activity')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-feed-item">
              <span className="pt-avatar pt-avatar-soft">{pick(PEOPLE, seed + k)[0]}</span>
              <span className="pt-col pt-col-tight pt-grow">
                <b style={{ fontSize: 11.5, fontWeight: 660 }}>{pick(PEOPLE, seed + k)} {['published', 'reviewed', 'exported', 'commented on', 'archived'][k % 5]} a design</b>
                <span className="pt-tiny">{[2, 18, 60, 240, 1440][k % 5] > 59 ? `${Math.round([2, 18, 60, 240, 1440][k % 5] / 60)}h ago` : `${[2, 18, 60, 240, 1440][k % 5]}m ago`}</span>
              </span>
            </div>
          ))}
        </section>
      )

    case 'profile':
      return (
        <section className={C(`pt-card pt-card-pad pt-profile${b.v === 'tall' ? ' pt-tall' : ''}`)}>
          <span className="pt-avatar">{b.title ? b.title[0] : 'A'}</span>
          <span className="pt-col pt-col-tight">
            <b style={{ fontSize: 14, fontWeight: 760 }}>{b.title ?? 'Ada Duval'}</b>
            <span className="pt-sub">{b.sub ?? 'Design systems lead'}</span>
            {b.v === 'wide' && (
              <span className="pt-row" style={{ marginTop: 4 }}>
                <span className="pt-btn pt-btn-sm">Follow</span>
                <span className="pt-btn pt-btn-ghost pt-btn-sm">Message</span>
              </span>
            )}
          </span>
          {b.v === 'wide' && (
            <span className="pt-row" style={{ marginLeft: 'auto' }}>
              <span className="pt-badge pt-badge-brand">148 tokens</span>
              <span className="pt-badge">12 systems</span>
            </span>
          )}
        </section>
      )

    case 'settings':
      return (
        <section className={C('pt-card pt-card-pad pt-settings')}>
          {b.title && <span className="pt-h3">{b.title}</span>}
          {(b.items ?? ['Product updates', 'Security alerts', 'Weekly digest']).map((x, k) => (
            <div key={x} className="pt-setting-row">
              <span className="pt-col pt-col-tight">
                <b style={{ fontWeight: 650 }}>{x}</b>
                <span className="pt-tiny">Delivered to your inbox and the in-app bell.</span>
              </span>
              <span className={`pt-check${k !== 1 ? ' on' : ''}`}><i>✓</i></span>
            </div>
          ))}
        </section>
      )

    case 'inbox':
      return (
        <section className={C('pt-inbox')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className={`pt-inbox-row${k === 0 ? ' on' : ''}`}>
              <span className="pt-avatar pt-avatar-soft" style={{ width: 24, height: 24, fontSize: 9 }}>
                {pick(PEOPLE, seed + k)[0]}
              </span>
              <span className="pt-col pt-col-tight pt-grow">
                <b style={{ fontWeight: 660 }}>{pick(PEOPLE, seed + k)}</b>
                <span className="pt-tiny" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Re: {pick(WORDS, seed + k)} token naming
                </span>
              </span>
              <span className="pt-tiny">{`${k + 1}h`}</span>
            </div>
          ))}
        </section>
      )

    case 'members':
      return (
        <div className={C('pt-members')} style={{ ['--pt-cols' as string]: cols }}>
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-card pt-member">
              <span className="pt-avatar">{pick(PEOPLE, seed + k).split(' ').map((w) => w[0]).join('')}</span>
              <b style={{ fontSize: 11.5, fontWeight: 680 }}>{pick(PEOPLE, seed + k)}</b>
              <span className="pt-tiny">{['Designer', 'Engineer', 'PM', 'Founder', 'Writer', 'Ops'][k % 6]}</span>
            </div>
          ))}
        </div>
      )

    case 'feed':
      return (
        <section className={C('pt-feed')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-feed-item">
              <span className="pt-avatar">{pick(PEOPLE, seed + k).split(' ').map((w) => w[0]).join('')}</span>
              <span className="pt-col pt-col-tight pt-grow">
                <span><b style={{ fontWeight: 700 }}>{pick(PEOPLE, seed + k)}</b> shared a {['pattern', 'palette', 'component', 'article'][k % 4]}</span>
                <span className="pt-sub">{`${pick(WORDS, seed + k)} — a practical note on making this hold up in production.`}</span>
                <span className="pt-row" style={{ marginTop: 2 }}>
                  <span className="pt-chip">♥ {12 + ((seed + k) % 90)}</span>
                  <span className="pt-chip">💬 {2 + ((seed + k) % 18)}</span>
                </span>
              </span>
            </div>
          ))}
        </section>
      )

    case 'products':
      return (
        <section className={C('pt-col')}>
          {b.title && <span className="pt-h3">{b.title}</span>}
          <div className="pt-products" style={{ ['--pt-cols' as string]: cols }}>
            {Array.from({ length: n }, (_, k) => (
              <article key={k} className="pt-card pt-product">
                <div className="pt-media" style={{ minHeight: b.v === 'tall' ? 150 : 104 }} />
                <div className="pt-product-body">
                  <span className="pt-between">
                    <b style={{ fontSize: 11.5, fontWeight: 700 }}>{pick(WORDS, seed + k)} {['Jacket', 'Scarf', 'Belt', 'Tee', 'Bag', 'Cap'][k % 6]}</b>
                    <span className="pt-tiny">{`$${48 + ((seed + k) % 240)}`}</span>
                  </span>
                  <span className="pt-row" style={{ justifyContent: 'space-between' }}>
                    <span className="pt-tiny">{'★★★★☆'.slice(0, 4 + (k % 2))}</span>
                    <span className="pt-badge pt-badge-ok">In stock</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )

    case 'pricing':
      return (
        <section className={C('pt-pricing')} style={{ ['--pt-cols' as string]: cols }}>
          {['Solo', 'Studio', 'Agency'].slice(0, n).map((plan, k) => (
            <div key={plan} className={`pt-card pt-card-pad${k === 1 ? ' pt-card-brand' : ''}`}>
              <span className="pt-between">
                <b style={{ fontSize: 12.5, fontWeight: 740 }}>{plan}</b>
                {k === 1 && <span className="pt-badge pt-badge-brand">Most picked</span>}
              </span>
              <strong style={{ fontSize: 24, letterSpacing: '-0.03em' }}>
                {['$0', '$18', '$49'][k]}<span className="pt-tiny">/mo</span>
              </strong>
              <span className="pt-col pt-col-tight">
                {['1 workspace', 'Unlimited workspaces', 'Shared libraries'].map((f) => (
                  <span key={f} className="pt-check on"><i>✓</i>{f}</span>
                ))}
              </span>
              <span className={`pt-btn${k === 1 ? '' : ' pt-btn-ghost'}`} style={{ justifyContent: 'center' }}>Choose {plan}</span>
            </div>
          ))}
        </section>
      )

    case 'reviews':
      return (
        <div className={C('pt-reviews')} style={{ ['--pt-cols' as string]: cols }}>
          {Array.from({ length: n }, (_, k) => (
            <figure key={k} className="pt-card" style={{ margin: 0 }}>
              <span className="pt-tiny" style={{ color: 'var(--p-accent)' }}>★★★★★</span>
              <blockquote style={{ margin: 0, fontSize: 11.5, lineHeight: 1.6 }}>
                “{pick(WORDS, seed + k)} cut our review rounds in half and nobody missed the old kit.”
              </blockquote>
              <figcaption className="pt-row" style={{ marginTop: 'auto' }}>
                <span className="pt-avatar pt-avatar-soft">{pick(PEOPLE, seed + k)[0]}</span>
                <span className="pt-tiny">{pick(PEOPLE, seed + k)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )

    case 'form':
      return (
        <section className={C('pt-card pt-card-pad pt-form')}>
          {heading}
          {b.v === 'inline' ? (
            <span className="pt-row">
              <span className="pt-input pt-grow">you@studio.com</span>
              <span className="pt-btn">Subscribe</span>
            </span>
          ) : (
            <>
              <div className="pt-grid-2">
                <label className="pt-field">
                  <span className="pt-label">Full name</span>
                  <span className="pt-input">Ada Duval</span>
                </label>
                <label className="pt-field">
                  <span className="pt-label">Email</span>
                  <span className="pt-input" style={b.tone === 'bad' ? { borderColor: 'var(--p-bad)' } : undefined}>
                    ada@studio.com
                  </span>
                </label>
              </div>
              {b.items ? (
                <div className="pt-choices">
                  {b.items.map((x, k) => (
                    <span key={x} className={`pt-chip${k === 1 ? ' on' : ''}`}>{x}</span>
                  ))}
                </div>
              ) : (
                <label className="pt-field">
                  <span className="pt-label">Message</span>
                  <span className="pt-input pt-input-area">Tell us about the project…</span>
                </label>
              )}
              {b.tone === 'bad' && <span className="pt-tiny" style={{ color: 'var(--p-bad)' }}>Please check the highlighted field.</span>}
              <span className="pt-row">
                <span className="pt-btn">Submit</span>
                <span className="pt-btn pt-btn-ghost">Cancel</span>
              </span>
            </>
          )}
        </section>
      )

    case 'auth':
      return (
        <section className={C('pt-card pt-card-pad')}>
          {heading}
          <label className="pt-field">
            <span className="pt-label">Work email</span>
            <span className="pt-input">you@company.com</span>
          </label>
          <label className="pt-field">
            <span className="pt-label">Password</span>
            <span className="pt-input">••••••••••</span>
          </label>
          <span className="pt-row" style={{ justifyContent: 'space-between' }}>
            <span className="pt-check on"><i>✓</i>Remember me</span>
            <span className="pt-tiny" style={{ color: 'var(--p-brand)' }}>Forgot?</span>
          </span>
          <span className="pt-btn" style={{ justifyContent: 'center' }}>Sign in</span>
          <span className="pt-tiny" style={{ textAlign: 'center' }}>Or continue with SSO</span>
        </section>
      )

    case 'booking':
      return (
        <section className={C('pt-card pt-card-pad')}>
          {heading}
          <div className="pt-grid-2">
            {['Party size', 'Date', 'Time', 'Occasion'].map((l, k) => (
              <label key={l} className="pt-field">
                <span className="pt-label">{l}</span>
                <span className="pt-input">{['2 guests', '17 Sep', '19:30', 'Birthday'][k]}</span>
              </label>
            ))}
          </div>
          <span className="pt-btn" style={{ justifyContent: 'center' }}>Confirm booking</span>
        </section>
      )

    case 'player':
      return (
        <section className={C('pt-card')}>
          <span className="pt-row">
            <span className="pt-play-btn">▶</span>
            <span className="pt-col pt-col-tight pt-grow">
              <b style={{ fontSize: 12, fontWeight: 720 }}>{b.title ?? 'Episode 42'}</b>
              <span className="pt-tiny">02:14 / 48:12</span>
            </span>
            <span className="pt-tiny">1.0×</span>
          </span>
          <div className="pt-wave" aria-hidden>
            {Array.from({ length: 48 }, (_, k) => (
              <i key={k} style={{ height: `${18 + ((seed + k * 7) % 80)}%` }} />
            ))}
          </div>
          <span className="pt-bar"><i style={{ width: '28%' }} /></span>
        </section>
      )

    case 'tracklist':
      return (
        <section className={C('pt-card pt-tracklist')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {(b.items ?? ['Track one', 'Track two', 'Track three']).map((x, k) => (
            <span key={x} className={`pt-track${k === 0 ? ' on' : ''}`}>
              <span className="pt-tiny" style={{ minWidth: 20 }}>{k + 1}</span>
              <span className="pt-grow">{x}</span>
              <span className="pt-tiny">{`3:${String(12 + k * 7).padStart(2, '0')}`}</span>
            </span>
          ))}
        </section>
      )

    case 'comments':
      return (
        <section className={C('pt-card pt-card-pad pt-comments')}>
          {b.title && <span className="pt-h3">{b.title}</span>}
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-comment">
              <span className="pt-avatar pt-avatar-soft">{pick(PEOPLE, seed + k)[0]}</span>
              <span className="pt-col pt-col-tight pt-grow">
                <span className="pt-row">
                  <b style={{ fontSize: 11.5, fontWeight: 700 }}>{pick(PEOPLE, seed + k)}</b>
                  <span className="pt-tiny">{`${k + 1}h ago`}</span>
                </span>
                <span className="pt-sub">
                  Agreed — the naming convention matters more than the palette here. We settled on four values and stopped.
                </span>
                <span className="pt-row">
                  <span className="pt-tiny" style={{ color: 'var(--p-brand)', fontWeight: 700 }}>Reply</span>
                  <span className="pt-tiny">♥ {3 + ((seed + k) % 20)}</span>
                </span>
              </span>
            </div>
          ))}
        </section>
      )

    case 'chat':
      return (
        <section className={C('pt-card pt-card-pad pt-chat')}>
          {b.title && <span className="pt-between"><b style={{ fontSize: 12.5, fontWeight: 740 }}>{b.title}</b><span className="pt-tiny">online</span></span>}
          <span className="pt-bubble pt-bubble-in">Can we make the hero a step larger?</span>
          <span className="pt-bubble pt-bubble-out">Done — 72px, tracking tightened.</span>
          <span className="pt-bubble pt-bubble-in">Perfect. Shipping it.</span>
          <span className="pt-input">Write a reply…</span>
        </section>
      )

    case 'faq':
      return (
        <section className={C('pt-faq')}>
          {heading}
          {(b.items ?? ['Is this a theme or a specification?', 'Can we change the colors?', 'How does dark mode work?']).map((q, k) => (
            <div key={q} className="pt-faq-item">
              <span className="pt-faq-q">
                <span>{q}</span>
                <span style={{ color: 'var(--p-brand)' }}>{k === 0 ? '−' : '+'}</span>
              </span>
              {k === 0 && (
                <p className="pt-faq-a">
                  A specification. Take the tokens, the components, and the rules — implement them in whatever stack you run.
                </p>
              )}
            </div>
          ))}
        </section>
      )

    case 'code':
      return (
        <section className={C('pt-code-wrap')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          <pre className="pt-code">
            <code>
              <span className="pt-k">$</span> npx design-vault add {p.id}{'\n'}
              <span className="pt-s">→ tokens written to src/tokens.css</span>{'\n'}
              <span className="pt-k">$</span> npm run dev{'\n'}
              <span className="pt-s">→ ready on localhost:5180</span>
            </code>
          </pre>
        </section>
      )

    case 'empty':
      return (
        <div className={C('pt-empty')}>
          <div
            className="pt-media pt-media-round"
            style={{ width: 54, minHeight: 54, background: 'color-mix(in srgb, var(--p-brand) 18%, var(--p-surface-2))' }}
          />
          <b style={{ fontSize: 12.5, fontWeight: 740 }}>{b.title ?? 'Nothing here yet'}</b>
          <span className="pt-tiny">{b.sub ?? 'Start from a template or import tokens from an existing brand.'}</span>
          <span className="pt-row" style={{ marginTop: 4 }}>
            <span className="pt-btn pt-btn-sm">Create</span>
            <span className="pt-btn pt-btn-ghost pt-btn-sm">Import</span>
          </span>
        </div>
      )

    case 'map':
      return (
        <div className={C('pt-map')}>
          {[[18, 30], [42, 62], [68, 24], [80, 70]].map(([l, t], k) => (
            <span key={k} className="pt-map-pin" style={{ left: `${l}%`, top: `${t}%` }} />
          ))}
          <span className="pt-toast" style={{ position: 'absolute', left: 12, bottom: 12 }}>
            <span className="pt-dot" />4 stores nearby
          </span>
        </div>
      )

    case 'status':
      return (
        <section className={C('pt-status')}>
          {b.title && <span className="pt-cap">{b.title}</span>}
          {(b.items ?? ['API', 'Dashboard', 'Exports']).map((x, k) => (
            <div key={x} className="pt-status-row">
              <span className="pt-dot" style={{ background: toneVar(k === 2 ? 'warn' : 'ok') }} />
              <span>{x}</span>
              <span className="pt-row">
                <span className="pt-bar" style={{ width: 90 }}><i style={{ width: `${88 + k * 4}%`, background: toneVar(k === 2 ? 'warn' : 'ok') }} /></span>
                <span className="pt-tiny">{['99.99%', '99.97%', '98.9%'][k % 3]}</span>
              </span>
            </div>
          ))}
        </section>
      )

    case 'changelog':
      return (
        <section className={C('pt-changelog')}>
          {(b.items ?? ['3.4.0 — Component kit grows to 46', '3.3.2 — Contrast fixes']).map((x, k) => (
            <div key={x} className="pt-cl-item">
              <span className="pt-col pt-col-tight">
                <b style={{ fontSize: 11.5, fontWeight: 740 }}>{x.split(' — ')[0]}</b>
                <span className="pt-tiny">{['Sep 14', 'Sep 02', 'Aug 21'][k % 3]}</span>
              </span>
              <span className="pt-col pt-col-tight">
                <span className="pt-row">
                  <span className={`pt-badge ${toneColor(k === 0 ? 'brand' : 'ok')}`}>{k === 0 ? 'New' : 'Improved'}</span>
                  {k === 0 && <span className="pt-badge pt-badge-warn">Breaking</span>}
                </span>
                <span className="pt-sub">{x.split(' — ')[1] ?? 'Refinements across the library.'}</span>
                <span className="pt-tiny" style={{ color: 'var(--p-brand)', fontWeight: 700 }}>Read the notes →</span>
              </span>
            </div>
          ))}
        </section>
      )

    case 'banner':
      return (
        <div className={C('pt-banner')} style={b.tone ? { background: toneVar(b.tone), color: b.tone === 'warn' ? '#1a1200' : '#fff' } : undefined}>
          <span>{b.title ?? 'Important notice'}</span>
          <span className="pt-btn pt-btn-sm" style={{ background: '#fff', color: '#111' }}>Action</span>
        </div>
      )

    case 'toast':
      return (
        <div className={C('pt-toast')} style={b.tone === 'bad' ? { borderColor: 'var(--p-bad)' } : undefined}>
          <span className="pt-dot" style={{ background: toneVar(b.tone) }} />
          <span>{b.title ?? 'Saved to favorites'}</span>
          <span className="pt-tiny" style={{ marginLeft: 'auto' }}>Undo</span>
        </div>
      )

    case 'heatmap':
      return (
        <section className={C('pt-card')}>
          <span className="pt-between">
            <b style={{ fontSize: 12.5, fontWeight: 740 }}>Contribution activity</b>
            <span className="pt-tiny">Less ▢▣ More</span>
          </span>
          <div className="pt-heat">
            {Array.from({ length: 14 * 5 }, (_, k) => {
              const v = (seed + k * 13) % 5
              return <i key={k} style={v ? { background: `color-mix(in srgb, var(--p-brand) ${v * 22}%, var(--p-surface-2))` } : undefined} />
            })}
          </div>
        </section>
      )

    case 'skeleton':
      return (
        <section className={C(b.v === 'wide' ? 'pt-col' : 'pt-skeleton')}>
          {Array.from({ length: n }, (_, k) => (
            <div key={k} className="pt-card">
              <span className="pt-skel pt-skel-line-lg" style={{ width: '42%' }} />
              <span className="pt-skel pt-skel-line" style={{ width: '78%' }} />
              <span className="pt-skel pt-skel-block" />
            </div>
          ))}
        </section>
      )

    default:
      return <div className={C('pt-card')}>{b.title ?? b.k}</div>
  }
}

/** A single pattern, rendered from its blocks and its canvas arrangement. */
export function PatternView({ p }: { p: PatternDef }) {
  return (
    <div className={`pt-shell pt-${p.id}`}>
      <div className="pt-canvas">
        {p.blocks.map((b, i) => (
          <BlockWrapper key={`${b.k}-${i}`}>{renderBlock(b, i, p)}</BlockWrapper>
        ))}
      </div>
    </div>
  )
}

/**
 * Blocks render their own root element so a canvas arrangement can hand grid
 * areas straight to it — this only injects the stable per-index class.
 */
function BlockWrapper({ children }: { children: React.ReactElement }) {
  return children
}

/* ================= board ================= */

const FAMILY_ACCENT: Record<PatternFamily, string> = {
  marketing: '#6366f1',
  commerce: '#0ea5e9',
  app: '#14b8a6',
  content: '#f59e0b',
  forms: '#8b5cf6',
  data: '#ef4444',
  social: '#ec4899',
  system: '#64748b',
}

export function PatternBoard({ search, family }: { search: string; family: PatternFamily | null }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [limit, setLimit] = useState(24)
  const sentinel = useRef<HTMLDivElement>(null)

  const list = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PATTERNS.filter((p) => {
      if (family && p.family !== family) return false
      if (!q) return true
      return [p.name, p.blurb, p.family, ...p.tags, ...p.blocks.map((b) => b.k)].join(' ').toLowerCase().includes(q)
    })
  }, [search, family])

  useEffect(() => setLimit(24), [search, family])

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setLimit((l) => Math.min(l + 24, list.length))
      },
      { rootMargin: '800px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [list.length])

  const open = openId ? PATTERNS.find((p) => p.id === openId) : undefined

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <style>{PATTERN_BASE_CSS}</style>

      {list.length === 0 && (
        <div className="empty-state" style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 20px' }}>
          <h3>No patterns match</h3>
          <p>Try a different keyword or pick another family.</p>
        </div>
      )}

      <div className="pattern-grid">
        {list.slice(0, limit).map((p, i) => (
          <div
            key={p.id}
            className="pt-card-shell"
            role="button"
            tabIndex={0}
            onClick={() => setOpenId(p.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setOpenId(p.id)
              }
            }}
            aria-label={`Open ${p.name} pattern`}
            style={{ ['--accent' as string]: FAMILY_ACCENT[p.family] }}
          >
            <div className="pt-thumb">
              <div className="pt-thumb-inner">
                <PatternView p={p} />
              </div>
              <div className="pt-thumb-fade" />
              <span className="pt-thumb-hint">View full →</span>
            </div>
            <div className="pt-card-body">
              <div className="pt-card-top">
                <span className="pt-card-fam">{PATTERN_FAMILIES.find((f) => f.id === p.family)?.label ?? p.family}</span>
                <span className="pt-card-num">#{String(i + 1).padStart(3, '0')}</span>
              </div>
              <h3 className="pt-card-name">{p.name}</h3>
              <p className="pt-card-blurb">{p.blurb}</p>
              <div className="pt-card-tags">
                {p.tags.map((t) => (
                  <span key={t} className="pt-card-tag">{t}</span>
                ))}
                <span className="pt-card-tag">{p.blocks.length} blocks</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={sentinel} />
      </div>

      {open && (
        <div className="pattern-overlay" onClick={() => setOpenId(null)} role="dialog" aria-modal="true" aria-label={`${open.name} pattern`}>
          <div className="pattern-modal" onClick={(e) => e.stopPropagation()}>
            <header className="pattern-modal-head">
              <span className="pt-badge" style={{ background: FAMILY_ACCENT[open.family], color: '#fff' }}>
                {PATTERN_FAMILIES.find((f) => f.id === open.family)?.label}
              </span>
              <h2>{open.name}</h2>
              <span className="pattern-modal-blurb">{open.blurb}</span>
              <button className="nav-btn" onClick={() => setOpenId(null)} aria-label="Close pattern (Esc)">✕</button>
            </header>
            <div className="pattern-modal-stage">
              <div className="pattern-modal-frame">
                <PatternView p={open} />
              </div>
            </div>
            <footer className="pattern-modal-foot">
              <span>Blocks: {open.blocks.map((b) => b.k).join(' · ')}</span>
              <span>Tags: {open.tags.join(', ')}</span>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
