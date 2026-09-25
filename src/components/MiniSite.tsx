import { useMemo, useState } from 'react'
import type { DesignSystem, Layout } from '../types'
import { LAYOUT_LABEL } from '../types'
import { themeOf, withAlpha, onColor } from '../designs/theme'
import { getBlockSet, getDashExtra, LAYOUT_SETS, type BlockId, type DashExtra } from '../designs/extras'
import { ComponentKit } from './ComponentKit'

/**
 * MiniSite renders a complete sample page — themed entirely from a DesignSystem.
 * Ten layout archetypes keep previews distinct; shared sections showcase each
 * design's full component vocabulary. Used scaled (thumbnails) and full (preview).
 *
 * Wave 2 (additive): a Blocks showcase tab (testimonials, stats, FAQ, CTA banner,
 * pricing, card grid — per-design sets), one extra dashboard component for
 * dashboard designs, a compact layout bar, and four new layout bodies
 * (asymmetric, full-bleed, spotlight, manifesto). Everything ships styled ONLY
 * from the design's own tokens via the .dv-* system + inline vars.
 */

let dvScopeCounter = 0

export function MiniSite({ d, compact = false, layoutOverride }: { d: DesignSystem; compact?: boolean; layoutOverride?: Layout | null }) {
  const t = useMemo(() => themeOf(d), [d])
  const [modalOpen, setModalOpen] = useState(false)
  const [formMsg, setFormMsg] = useState<string | null>(null)
  const [tab, setTab] = useState(0)
  const [toggleOn, setToggleOn] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const radiusBtn = extractRadius(d.components.radius)
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

  const activeLayout = layoutOverride ?? d.layout

  return (
    <div className={`dv-site ${scope} dv-m-${d.motif} dv-l-${d.layout} ${compact ? 'dv-compact' : ''}`} style={cssVars}>
      <style>{scopedCss}</style>
      <div className="dv-stage">
        <nav className="dv-nav">
          <span className="dv-logo">◈ {d.name}</span>
          <div className="dv-links">
            {['Work', 'Studio', 'Journal', 'Contact'].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} className={l === 'Work' ? 'dv-active' : ''}>{l}</a>
            ))}
          </div>
          <button className="dv-btn dv-btn-nav" style={btnStyle(t)}>Sign up</button>
        </nav>

        {!compact && (
          <div className="dv-layout-bar" role="group" aria-label={`${d.name} layout arrangements`}>
            <span className="dv-layout-bar-label">Arrangement</span>
            {(LAYOUT_SETS[d.id] ?? [d.layout]).map((l) => (
              <button
                key={l}
                className={`dv-layout-opt ${l === activeLayout ? 'dv-layout-opt-on' : ''}`}
                style={l === activeLayout ? { background: t.primary, color: t.onPrimary, borderColor: t.primary } : {}}
                onClick={(e) => {
                  e.stopPropagation()
                  window.dispatchEvent(new CustomEvent('dv-layout-change', { detail: { id: d.id, layout: l } }))
                }}
              >
                {LAYOUT_LABEL[l]}
              </button>
            ))}
          </div>
        )}

        {renderLayout(d, activeLayout, { setModalOpen, openFaq, setOpenFaq })}

        {/*
         * FULL COMPONENT KIT — the whole component vocabulary, themed by this
         * design's tokens. Thumbnails skip it (compact) so 100 cards stay
         * cheap to render; the live preview and Components tab show it.
         */}
        {!compact && <ComponentKit d={d} />}

        {!compact && (
          <section className="dv-section dv-blocks-section">
            <h2 className="dv-h2">Content blocks, in this design's voice</h2>
            <div className="dv-blocks-pane">
              {getBlockSet(d.id).map((b) => (
                <BlockSection key={b} d={d} b={b} openFaq={openFaq} setOpenFaq={setOpenFaq} />
              ))}
            </div>
          </section>
        )}

        {/* COMPACT PRIMITIVES — a light taste for thumbnails only */}
        {compact && (
        <section className="dv-section dv-comp-showcase">
          <h2 className="dv-h2">Components, in the flesh</h2>
          <div className="dv-comp-tabs">
            {['Buttons', 'Cards', 'Form', 'Table', 'Blocks'].map((label, i) => (
              <button
                key={label}
                className={`dv-comp-tab ${tab === i ? 'dv-comp-tab-on' : ''}`}
                style={tab === i ? { background: t.primary, color: t.onPrimary } : {}}
                onClick={() => setTab(i)}
              >
                {label}
              </button>
            ))}
          </div>
          {tab === 0 && (
            <div className="dv-comp-pane">
              <div className="dv-comp-row">
                <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Primary</button>
                <button className="dv-btn dv-btn-secondary">Secondary</button>
                <button className="dv-btn dv-btn-tertiary" style={{ background: 'transparent', border: 'none', color: t.primary, cursor: 'pointer' }}>Tertiary →</button>
                <button className="dv-btn dv-btn-primary dv-btn-disabled" style={{ background: withAlpha(t.primary, 0.4), color: t.onPrimary, cursor: 'not-allowed' }} disabled>Disabled</button>
                <span className="dv-badge" style={{ background: withAlpha(t.accent, 0.18), color: t.accent, borderRadius: radiusBtn }}>● Active</span>
                <span className="dv-badge" style={{ background: withAlpha(t.text, 0.08), color: t.muted, borderRadius: radiusBtn }}>Draft</span>
                <label className="dv-toggle" onClick={() => setToggleOn(!toggleOn)}>
                  <span className={`dv-toggle-track ${toggleOn ? 'on' : ''}`} style={{ background: toggleOn ? t.primary : withAlpha(t.text, 0.25) }}>
                    <span className="dv-toggle-knob" />
                  </span>
                  <span className="dv-toggle-label">{toggleOn ? 'Sync on' : 'Sync off'}</span>
                </label>
                <button className="dv-btn dv-btn-secondary" onClick={() => setModalOpen(true)}>Open modal</button>
              </div>
              <div className="dv-comp-row">
                {['#ff5c5c', '#f5a623', '#2ecc71'].map((c, i) => (
                  <span key={c} className="dv-avatar" style={{ background: c }}>{['M', 'A', 'K'][i]}</span>
                ))}
                <span className="dv-avatar-more" style={{ borderColor: withAlpha(t.text, 0.3) }}>+5</span>
                <span className="dv-sep" />
                <span className="dv-stat-inline"><strong>4.9★</strong> rating</span>
                <span className="dv-stat-inline"><strong>12k</strong> users</span>
                <span className="dv-stat-inline"><strong>99.9%</strong> uptime</span>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="dv-comp-pane dv-comp-cards3">
              <div className="dv-card dv-mini-card">
                <span className="dv-card-icon" aria-hidden>◆</span>
                <h3>Standard card</h3>
                <p>Border, padding, and hover per the system spec.</p>
                <span className="dv-link">Details →</span>
              </div>
              <div className="dv-card dv-mini-card dv-mini-card-media">
                <div className="dv-media" style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})` }} />
                <h3>Media card</h3>
                <p>Cover block, title, teaser.</p>
              </div>
              <div className="dv-card dv-mini-card dv-mini-card-price">
                <span className="dv-price-tag" style={{ background: withAlpha(t.accent, 0.15), color: t.accent }}>Popular</span>
                <h3>$12<span>/mo</span></h3>
                <ul><li>Unlimited projects</li><li>Priority support</li><li>Custom domain</li></ul>
                <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Choose plan</button>
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="dv-comp-pane dv-comp-form2">
              <div className="dv-field">
                <label className="dv-label">Full name</label>
                <input className="dv-input" defaultValue="Ada Lovelace" />
              </div>
              <div className="dv-field">
                <label className="dv-label">Email</label>
                <input className="dv-input" type="email" placeholder="you@studio.com" />
              </div>
              <div className="dv-field dv-field-full">
                <label className="dv-label">Message</label>
                <textarea className="dv-input dv-textarea" rows={2} defaultValue="Tell us about the project…" />
              </div>
              <div className="dv-comp-row">
                <button className="dv-btn dv-btn-primary" style={btnStyle(t)} onClick={() => setFormMsg('Message queued — we reply within a day.')}>Send message</button>
                <button className="dv-btn dv-btn-secondary">Cancel</button>
              </div>
              {formMsg && <p className="dv-form-ok" role="status">✓ {formMsg}</p>}
            </div>
          )}
          {tab === 3 && (
            <div className="dv-comp-pane">
              <table className="dv-table">
                <thead><tr><th>Project</th><th>Owner</th><th>Status</th><th>Updated</th></tr></thead>
                <tbody>
                  <tr><td>Aurora</td><td>M. Chen</td><td><span className="dv-badge" style={{ background: withAlpha(t.accent, 0.18), color: t.accent }}>Live</span></td><td>2h ago</td></tr>
                  <tr><td>Borealis</td><td>K. Ito</td><td><span className="dv-badge" style={{ background: withAlpha('#f5a623', 0.16), color: '#c77d00' }}>Review</span></td><td>1d ago</td></tr>
                  <tr><td>Cinder</td><td>A. Duval</td><td><span className="dv-badge" style={{ background: withAlpha(t.text, 0.08), color: t.muted }}>Draft</span></td><td>3d ago</td></tr>
                </tbody>
              </table>
            </div>
          )}
          {tab === 4 && (
            <div className="dv-blocks-pane">
              {getBlockSet(d.id).map((b) => <BlockSection key={b} d={d} b={b} openFaq={openFaq} setOpenFaq={setOpenFaq} />)}
            </div>
          )}
        </section>
        )}

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
          <div className="dv-modal" style={{ background: t.bg, color: t.text, borderRadius: radiusBtn }} onClick={(e) => e.stopPropagation()}>
            <div className="dv-modal-head">
              <strong>Confirm action</strong>
              <button className="dv-modal-x" onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            </div>
            <p>This modal — borders, motion, typography — is styled entirely by {d.name}.</p>
            <div className="dv-btn-row">
              <button className="dv-btn dv-btn-primary" style={btnStyle(t)} onClick={() => setModalOpen(false)}>Confirm</button>
              <button className="dv-btn dv-btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ================= Layout bodies ================= */

function renderLayout(
  d: DesignSystem,
  layout: Layout,
  ctx: { setModalOpen: (v: boolean) => void; openFaq: number; setOpenFaq: (i: number) => void },
) {
  switch (layout) {
    case 'split-hero': return <SplitHero d={d} />
    case 'magazine': return <MagazineBody d={d} />
    case 'dashboard': return <DashboardBody d={d} />
    case 'centered': return <CenteredBody d={d} />
    case 'editorial': return <EditorialBody d={d} />
    case 'asymmetric': return <AsymmetricBody d={d} />
    case 'full-bleed': return <FullBleedBody d={d} />
    case 'spotlight': return <SpotlightBody d={d} />
    case 'manifesto': return <ManifestoBody d={d} />
    case 'hero-cards':
    default: return <HeroCards d={d} />
  }
}

function HeroCards({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <header className="dv-hero">
        <p className="dv-kicker">{d.category} system · for {d.useCases[0]?.toLowerCase() ?? 'modern'} teams</p>
        <h1>{heroTitle(d)}</h1>
        <p className="dv-sub">{d.description}</p>
        <div className="dv-cta-row">
          <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Get started</button>
          <button className="dv-btn dv-btn-secondary">Learn more</button>
        </div>
        {d.motif === 'ticker-marquee' && <div className="dv-marquee"><span>✦ {d.name.toUpperCase()} ✦ MOTION ✦ COLOR ✦ CRAFT ✦&nbsp;</span></div>}
      </header>
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
      <section className="dv-stats-band">
        <div className="dv-stat"><strong>98%</strong><span>ship faster</span></div>
        <div className="dv-stat"><strong>4.9★</strong><span>avg. rating</span></div>
        <div className="dv-stat"><strong>12k+</strong><span>teams</span></div>
      </section>
      <section className="dv-section dv-section-forms">
        <div className="dv-form-wrap">
          <h2 className="dv-h2">Join the list</h2>
          <MiniForm d={d} />
        </div>
        <div className="dv-comp-wrap">
          <h2 className="dv-h2">Testimonial</h2>
          <blockquote className="dv-quote">
            “{d.name} gave our product an identity. Design reviews got shorter — decisions got bolder.”
            <footer>— P. Okafor, Head of Design</footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}

function SplitHero({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <section className="dv-split">
        <div className="dv-split-text">
          <p className="dv-kicker">{d.category} system</p>
          <h1>{heroTitle(d)}</h1>
          <p className="dv-sub">{d.description}</p>
          <div className="dv-cta-row" style={{ justifyContent: 'flex-start' }}>
            <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Start free trial</button>
            <button className="dv-btn dv-btn-secondary">Watch demo</button>
          </div>
          <ul className="dv-check-list">
            {['No credit card required', 'Cancel anytime', 'SOC2 compliant'].map((li) => <li key={li}>✓ {li}</li>)}
          </ul>
        </div>
        <div className="dv-split-visual">
          <div className="dv-fake-ui">
            <div className="dv-fake-ui-bar"><span /><span /><span /></div>
            <div className="dv-fake-ui-chart">{[38, 62, 45, 80, 56, 92, 70].map((h, i) => <div key={i} style={{ height: `${h}%`, background: i % 2 ? t.secondary : t.primary }} />)}</div>
            <div className="dv-fake-ui-rows">{[0, 1, 2].map((i) => <div key={i} style={{ background: withAlpha(t.text, i === 1 ? 0.14 : 0.07) }} />)}</div>
          </div>
        </div>
      </section>
      <section className="dv-section">
        <h2 className="dv-h2">Built for how you work</h2>
        <div className="dv-cards">
          {features(d).map((f, i) => (
            <article key={i} className="dv-card"><span className="dv-card-icon" aria-hidden>{f.icon}</span><h3>{f.title}</h3><p>{f.body}</p></article>
          ))}
        </div>
      </section>
      <section className="dv-pricing">
        <h2 className="dv-h2">Simple pricing</h2>
        <div className="dv-pricing-grid">
          {[['Starter', '$0', ['3 projects', 'Community support', 'Basic analytics']], ['Pro', '$12', ['Unlimited projects', 'Priority support', 'Custom domain']], ['Team', '$29', ['SSO + roles', 'Audit log', 'Dedicated CSM']]].map(([name, price, items], pi) => (
            <div key={name as string} className={`dv-card dv-mini-card dv-mini-card-price ${pi === 1 ? 'dv-price-hot' : ''}`} style={pi === 1 ? { borderColor: t.primary, borderWidth: 2 } : {}}>
              {pi === 1 && <span className="dv-price-tag" style={{ background: withAlpha(t.accent, 0.15), color: t.accent }}>Popular</span>}
              <h3>{name}</h3>
              <div className="dv-price">{price}<span>/mo</span></div>
              <ul>{(items as string[]).map((li) => <li key={li}>{li}</li>)}</ul>
              <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Choose</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function MagazineBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <header className="dv-masthead">
        <p className="dv-kicker">{d.category} · Est. 2026</p>
        <h1 className="dv-masthead-title">{heroTitle(d)}</h1>
        <div className="dv-masthead-rule" />
      </header>
      <section className="dv-grid-3">
        <article className="dv-article"><span className="dv-badge" style={{ background: withAlpha(t.accent, 0.15), color: t.accent }}>Feature</span><h3>{d.name} wins Design System of the Year</h3><p>The vote was unanimous: intentionality over decoration.</p><span className="dv-link">Read →</span></article>
        <article className="dv-article"><h3>Opinion: your landing page has 12 words to live</h3><p>Ruthless editing is the highest-leverage design tool.</p><span className="dv-link">Read →</span></article>
        <article className="dv-article"><h3>How 40 teams ship with {d.name}</h3><p>We asked for numbers. They sent spreadsheets.</p><span className="dv-link">Read →</span></article>
      </section>
      <section className="dv-feature-row">
        <div className="dv-feature-media" style={{ background: `linear-gradient(160deg, ${t.primary}, ${t.secondary})` }} />
        <div className="dv-feature-text">
          <span className="dv-badge" style={{ background: withAlpha(t.primary, 0.12), color: t.primary }}>Cover story</span>
          <h2>The quiet rebellion against AI slop</h2>
          <p>{d.designPhilosophy.split('.')[0]}. A generation of tools looked the same; this one refuses.</p>
          <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Read the story</button>
        </div>
      </section>
      <section className="dv-stats-band">
        <div className="dv-stat"><strong>132</strong><span>articles</span></div>
        <div className="dv-stat"><strong>18</strong><span>contributors</span></div>
        <div className="dv-stat"><strong>2×</strong><span>weekly</span></div>
      </section>
    </>
  )
}

function DashboardBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <div className="dv-dash">
        <aside className="dv-dash-side">
          <div className="dv-dash-logo">◈ {d.name}</div>
          {['Overview', 'Analytics', 'Projects', 'Billing', 'Settings'].map((item, i) => (
            <div key={item} className={`dv-dash-item ${i === 1 ? 'dv-dash-on' : ''}`} style={i === 1 ? { background: withAlpha(t.primary, 0.14), color: t.primary } : {}}>{item}</div>
          ))}
        </aside>
        <main className="dv-dash-main">
          <div className="dv-dash-head"><h1>Analytics</h1><button className="dv-btn dv-btn-primary" style={btnStyle(t)}>+ New report</button></div>
          <div className="dv-kpi-row">
            {[['MRR', '$48.2k', '+8.4%'], ['Active users', '12,043', '+3.1%'], ['Churn', '1.9%', '−0.4%'], ['NPS', '62', '+5']].map(([k, v, delta]) => (
              <div key={k} className="dv-card dv-kpi">
                <span className="dv-label">{k}</span>
                <strong>{v}</strong>
                <span className="dv-delta" style={{ color: String(delta).startsWith('+') ? '#1a9a5c' : '#c0392b' }}>{delta}</span>
              </div>
            ))}
          </div>
          <div className="dv-card dv-chart-card">
            <div className="dv-chart-head"><strong>Revenue, last 12 weeks</strong><span className="dv-label">Weekly · USD</span></div>
            <div className="dv-fake-ui-chart dv-chart-lg">{[42, 55, 48, 66, 59, 74, 68, 82, 77, 90, 84, 96].map((h, i) => <div key={i} style={{ height: `${h}%`, background: i % 3 === 2 ? t.secondary : t.primary }} />)}</div>
          </div>
          <table className="dv-table dv-table-lg">
            <thead><tr><th>Customer</th><th>Plan</th><th>MRR</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Nimbus Labs</td><td>Team</td><td>$299</td><td><span className="dv-badge" style={{ background: withAlpha(t.accent, 0.18), color: t.accent }}>Active</span></td></tr>
              <tr><td>Ferro & Co</td><td>Pro</td><td>$99</td><td><span className="dv-badge" style={{ background: withAlpha(t.accent, 0.18), color: t.accent }}>Active</span></td></tr>
              <tr><td>Halcyon</td><td>Starter</td><td>$0</td><td><span className="dv-badge" style={{ background: withAlpha(t.text, 0.08), color: t.muted }}>Trial</span></td></tr>
            </tbody>
          </table>
          <DashExtraSlot d={d} />
        </main>
      </div>
    </>
  )
}

function CenteredBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <header className="dv-hero dv-hero-centered">
        <div className="dv-orb" style={{ background: `radial-gradient(circle at 35% 35%, ${withAlpha(t.accent, 0.9)}, ${withAlpha(t.primary, 0.75)})` }} />
        <p className="dv-kicker">{d.category}</p>
        <h1>{heroTitle(d)}</h1>
        <p className="dv-sub">{d.description}</p>
        <div className="dv-cta-row">
          <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Begin</button>
        </div>
        <p className="dv-mini-note">Free for 14 days · no card needed</p>
      </header>
      <section className="dv-steps">
        {[['01', 'Connect', 'Link your tools in two minutes.'], ['02', 'Configure', 'Pick the tokens that fit your brand.'], ['03', 'Ship', 'Publish with one command.']].map(([n, title, body]) => (
          <div key={n} className="dv-step"><span className="dv-step-num">{n}</span><h3>{title}</h3><p>{body}</p></div>
        ))}
      </section>
      <section className="dv-quote-band" style={{ background: withAlpha(t.primary, 0.08) }}>
        <blockquote>“The first design system our engineers actually read.”<footer>— S. Varga, CTO</footer></blockquote>
      </section>
      <section className="dv-cta-final">
        <h2>Ready when you are.</h2>
        <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Get started free</button>
      </section>
    </>
  )
}

function EditorialBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <header className="dv-ed-head">
        <h1>{heroTitle(d)}</h1>
        <p className="dv-ed-standfirst">{d.description} {d.designPhilosophy.split('.')[0]}.</p>
        <div className="dv-ed-byline">By {d.author} · {d.createdAt} · 8 min read</div>
      </header>
      <div className="dv-ed-body">
        <p className="dv-ed-lead">The cursor blinked. Twelve words survived the edit. That was the whole pitch — and it worked, because everything around those words agreed with itself: the type, the spacing, the palette, the pauses.</p>
        <div className="dv-ed-pull">“Consistency is not the enemy of character. It is character, repeated.”</div>
        <p>Every token in {d.name} exists because something else would be worse. The scale has seven steps because six cramped and eight wandered. The accent appears exactly where your eye needs a handhold.</p>
        <div className="dv-ed-aside">
          <strong>Inside this system</strong>
          <ul>{['Display + body pairing', 'Six-color palette', 'Motion with restraint', 'AA contrast minimums'].map((li) => <li key={li}>{li}</li>)}</ul>
        </div>
        <p>Adoption was the test. Teams shipped pages that looked art-directed without a designer in the room — and the designers, instead of minding, finally had time for the work only they could do.</p>
      </div>
      <section className="dv-ed-footer-cta">
        <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Use this system</button>
        <button className="dv-btn dv-btn-secondary">Read the docs</button>
      </section>
    </>
  )
}

/* ===== Wave 2 layout bodies (same tokens, different arrangement) ===== */

function AsymmetricBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <section className="dv-asym-hero" style={{ borderColor: withAlpha(t.text, 0.16) }}>
        <div className="dv-asym-main">
          <p className="dv-kicker">{d.category} · offset arrangement</p>
          <h1>{heroTitle(d)}</h1>
          <p className="dv-sub dv-align-left">{d.description}</p>
          <div className="dv-cta-row" style={{ justifyContent: 'flex-start' }}>
            <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Get started</button>
            <button className="dv-btn dv-btn-secondary">See how</button>
          </div>
        </div>
        <div className="dv-asym-side">
          <div className="dv-stat-card" style={{ borderColor: withAlpha(t.text, 0.16) }}>
            <strong style={{ fontFamily: `'${t.display}', sans-serif` }}>98%</strong>
            <span>ship faster with {d.name}</span>
          </div>
          <div className="dv-stat-card" style={{ borderColor: withAlpha(t.text, 0.16), background: withAlpha(t.primary, 0.08) }}>
            <strong style={{ fontFamily: `'${t.display}', sans-serif` }}>4.9★</strong>
            <span>average rating</span>
          </div>
        </div>
      </section>
      <section className="dv-asym-feature">
        <div className="dv-asym-media" style={{ background: `linear-gradient(150deg, ${t.primary}, ${t.secondary})` }} />
        <div className="dv-asym-copy">
          <h2 className="dv-h2">One column writes, one column proves</h2>
          <p>{d.designPhilosophy.split('.')[0]}. The asymmetric arrangement keeps the argument and the evidence side by side — text left, proof right, whitespace doing the arguing in between.</p>
          <div className="dv-comp-row">
            <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Read the method</button>
            <span className="dv-badge" style={{ background: withAlpha(t.accent, 0.15), color: t.accent, borderRadius: extractRadius(d.components.radius) }}>New in 2026</span>
          </div>
        </div>
      </section>
    </>
  )
}

function FullBleedBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <section className="dv-bleed-hero" style={{ background: `linear-gradient(160deg, ${t.primary}, ${t.secondary})` }}>
        <p className="dv-kicker dv-on-dark">{d.category} · edge-to-edge</p>
        <h1 className="dv-bleed-title" style={{ color: onColor(t.primary) }}>{heroTitle(d)}</h1>
        <p className="dv-bleed-sub" style={{ color: onColor(t.primary) }}>{d.description}</p>
        <div className="dv-cta-row">
          <button className="dv-btn dv-btn-primary" style={{ background: onColor(t.primary), color: t.primary }}>Start now</button>
          <button className="dv-btn dv-btn-ghost-on-dark" style={{ color: onColor(t.primary), borderColor: withAlpha(onColor(t.primary), 0.5) }}>Tour the system</button>
        </div>
      </section>
      <section className="dv-bleed-band" style={{ borderColor: withAlpha(t.text, 0.14) }}>
        <div className="dv-stat"><strong style={{ fontFamily: `'${t.display}', sans-serif` }}>12k+</strong><span>teams on board</span></div>
        <div className="dv-stat"><strong style={{ fontFamily: `'${t.display}', sans-serif` }}>40%</strong><span>fewer review rounds</span></div>
        <div className="dv-stat"><strong style={{ fontFamily: `'${t.display}', sans-serif` }}>6</strong><span>tokens to learn</span></div>
      </section>
      <section className="dv-section">
        <h2 className="dv-h2">Nothing hides. Nothing shrinks.</h2>
        <div className="dv-cards">
          {features(d).map((f, i) => (
            <article key={i} className="dv-card"><span className="dv-card-icon" aria-hidden>{f.icon}</span><h3>{f.title}</h3><p>{f.body}</p></article>
          ))}
        </div>
      </section>
    </>
  )
}

function SpotlightBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  return (
    <>
      <section className="dv-spotlight">
        <div className="dv-spotlight-stage" style={{ background: `radial-gradient(circle at 50% 38%, ${withAlpha(t.accent, 0.35)}, ${withAlpha(t.primary, 0.14)} 55%, transparent 75%)` }}>
          <div className="dv-spotlight-object" style={{ background: `linear-gradient(145deg, ${t.primary}, ${t.secondary})`, boxShadow: `0 30px 60px ${withAlpha(t.primary, 0.35)}` }} />
        </div>
        <div className="dv-spotlight-caption">
          <p className="dv-kicker">{d.category} · the object, centered</p>
          <h1>{heroTitle(d)}</h1>
          <p className="dv-sub dv-align-left">{d.description}</p>
          <div className="dv-cta-row" style={{ justifyContent: 'center' }}>
            <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Meet {d.name}</button>
          </div>
        </div>
      </section>
      <section className="dv-spotlight-row">
        {[
          { k: 'Spec', v: 'Every token named, every state drawn — nothing left to taste.' },
          { k: 'Scale', v: 'Seven type steps, one spacing unit, zero exceptions granted.' },
          { k: 'Stay', v: 'Teams still on it a year later: 94%. The churn is elsewhere.' },
        ].map((x) => (
          <div key={x.k} className="dv-card dv-spot-card">
            <span className="dv-spot-key" style={{ color: t.primary, fontFamily: `'${t.display}', sans-serif` }}>{x.k}</span>
            <p>{x.v}</p>
          </div>
        ))}
      </section>
      <section className="dv-quote-band" style={{ background: withAlpha(t.accent, 0.08) }}>
        <blockquote>“You don't decorate {d.name}. You point a light at it.”<footer>— R. Osei, Creative Director</footer></blockquote>
      </section>
    </>
  )
}

function ManifestoBody({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  const lines = manifestoLines(d)
  return (
    <>
      <section className="dv-manifesto">
        <p className="dv-kicker">{d.category} · manifesto arrangement</p>
        <div className="dv-manifesto-lines">
          {lines.map((line, i) => (
            <p key={i} className="dv-manifesto-line" style={{ color: i === 1 ? t.primary : undefined }}>{line}</p>
          ))}
        </div>
        <div className="dv-manifesto-sign">
          <span>— {d.name}, a design system by {d.author}</span>
          <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Adopt the whole argument</button>
        </div>
      </section>
      <section className="dv-manifesto-proof">
        {[['01', 'No filler'], ['02', 'No defaults'], ['03', 'No apologies']].map(([n, w]) => (
          <div key={n} className="dv-manifesto-word">
            <span className="dv-manifesto-num">{n}</span>
            <strong style={{ fontFamily: `'${t.display}', sans-serif` }}>{w}</strong>
          </div>
        ))}
      </section>
    </>
  )
}

/* ================= Wave-2 content blocks (themed, placeholder copy) ================= */

/**
 * All quotes, names, and numbers below are GENERIC ILLUSTRATIVE PLACEHOLDERS —
 * not real people, companies, or statistics. They demonstrate component styling
 * per design system only.
 */

function BlockSection({ d, b, openFaq, setOpenFaq }: { d: DesignSystem; b: BlockId; openFaq: number; setOpenFaq: (i: number) => void }) {
  const t = themeOf(d)
  switch (b) {
    case 'testimonials':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">Testimonials</h3>
          <div className="dv-testi-grid">
            {[
              { q: `Adopting ${d.name} ended our style debates. The rules are the referee now.`, a: 'Placeholder Person, Product Lead', i: 'P' },
              { q: 'I shipped a marketing page in an afternoon and nobody asked which template it was.', a: 'Placeholder Person, Founder', i: 'Q' },
              { q: 'The tokens hold up under real deadlines. That is the whole review.', a: 'Placeholder Person, Eng Manager', i: 'R' },
            ].map((x, i) => (
              <figure key={i} className="dv-card dv-testi">
                <blockquote>“{x.q}”</blockquote>
                <figcaption>
                  <span className="dv-avatar" style={{ background: i === 1 ? t.secondary : t.primary }}>{x.i}</span>
                  <span>{x.a}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )
    case 'stats':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">Numbers</h3>
          <div className="dv-stats-band dv-stats-inblock">
            {[['98%', 'ship faster'], ['4.9★', 'avg. rating'], ['12k+', 'teams'], ['2×', 'release velocity']].map(([v, l]) => (
              <div key={l} className="dv-stat"><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      )
    case 'faq':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">Questions, answered</h3>
          <div className="dv-faq">
            {[
              ['Is this system a theme or a framework?', 'A specification. Take the tokens, the components, and the rules — implement them in whatever stack you run.'],
              ['Can I change the colors?', 'You can re-derive them, not swap them. Every accent here exists because a near neighbor failed contrast or mood.'],
              ['How does it handle dark mode?', 'As a paired token set, not an afterthought — surfaces and text invert together so contrast never dips.'],
              ['What does adoption cost a team?', 'A week to wire the tokens, a sprint to feel native. The docs assume a designer and an engineer pair on it.'],
            ].map(([q, a], i) => (
              <div key={i} className={`dv-faq-item ${openFaq === i ? 'dv-faq-open' : ''}`} style={{ borderColor: withAlpha(t.text, 0.14) }}>
                <button className="dv-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span>{q}</span>
                  <span className="dv-faq-x" style={{ color: t.primary }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="dv-faq-a">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      )
    case 'cta':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">CTA banner</h3>
          <div className="dv-cta-banner" style={{ background: `linear-gradient(120deg, ${t.primary}, ${t.secondary})`, borderRadius: extractRadius(d.components.radius) }}>
            <div>
              <strong>Bring {d.name} to your next build.</strong>
              <span className="dv-cta-banner-sub">One prompt copies the whole system — tokens, components, rules.</span>
            </div>
            <button className="dv-btn" style={{ background: onColor(t.primary), color: t.primary }}>Copy the prompt</button>
          </div>
        </div>
      )
    case 'pricing':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">Plans</h3>
          <div className="dv-pricing-grid">
            {[['Solo', '$0', ['1 workspace', 'Core token set', 'Community answers']], ['Studio', '$18', ['Unlimited workspaces', 'Every component spec', 'Prompt exports']], ['Org', '$49', ['Shared libraries', 'Review workflows', 'Onboarding kit']]].map(([name, price, items], pi) => (
              <div key={name as string} className={`dv-card dv-mini-card dv-mini-card-price ${pi === 1 ? 'dv-price-hot' : ''}`} style={pi === 1 ? { borderColor: t.primary, borderWidth: 2 } : {}}>
                {pi === 1 && <span className="dv-price-tag" style={{ background: withAlpha(t.accent, 0.15), color: t.accent }}>Most picked</span>}
                <h3>{name}</h3>
                <div className="dv-price">{price}<span>/mo</span></div>
                <ul>{(items as string[]).map((li) => <li key={li}>{li}</li>)}</ul>
                <button className="dv-btn dv-btn-primary" style={btnStyle(t)}>Choose {name as string}</button>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cards':
      return (
        <div className="dv-block">
          <h3 className="dv-block-h">From the field</h3>
          <div className="dv-cards">
            {[
              { i: '✦', h: 'Case study — Placeholder Co', p: 'A four-person team replaced three overlapping kits with this one and cut QA args to zero.' },
              { i: '◇', h: 'Pattern — the quiet sticky nav', p: `${d.name} keeps navigation reachable without stealing attention from the page itself.` },
              { i: '◈', h: 'Template — launch page in 6 blocks', p: 'Hero, proof, features, FAQ, banner, footer. Every block already speaks the same language.' },
            ].map((x) => (
              <article key={x.h} className="dv-card">
                <span className="dv-card-icon" aria-hidden>{x.i}</span>
                <h3>{x.h}</h3>
                <p>{x.p}</p>
                <span className="dv-link">Open →</span>
              </article>
            ))}
          </div>
        </div>
      )
  }
}

/* ================= Dashboard extras (one extra dashboard component) ================= */

function DashExtraSlot({ d }: { d: DesignSystem }) {
  const t = themeOf(d)
  const extra: DashExtra | undefined = getDashExtra(d.id)
  if (!extra) return null
  const chip = { background: withAlpha(t.accent, 0.15), color: t.accent } as React.CSSProperties
  const mutedChip = { background: withAlpha(t.text, 0.08), color: t.muted } as React.CSSProperties
  switch (extra) {
    case 'report-builder':
      return (
        <div className="dv-card dv-dash-extra">
          <div className="dv-chart-head"><strong>Report builder</strong><span className="dv-label">Drag fields · placeholder data</span></div>
          <div className="dv-report-cols">
            <div className="dv-report-col">
              <span className="dv-label">Fields</span>
              {['Region', 'Channel', 'Quarter'].map((f) => <span key={f} className="dv-report-field" style={mutedChip}>{f}</span>)}
            </div>
            <div className="dv-report-col">
              <span className="dv-label">Rows</span>
              <span className="dv-report-field" style={chip}>Region</span>
            </div>
            <div className="dv-report-col">
              <span className="dv-label">Values</span>
              <span className="dv-report-field" style={chip}>Revenue</span>
              <span className="dv-report-field" style={mutedChip}>Sessions</span>
            </div>
            <div className="dv-report-preview">
              <span className="dv-label">Preview</span>
              <table className="dv-table">
                <thead><tr><th>Region</th><th>Revenue</th></tr></thead>
                <tbody><tr><td>Placeholder North</td><td>$12,400</td></tr><tr><td>Placeholder South</td><td>$9,850</td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      )
    case 'kanban':
      return (
        <div className="dv-card dv-dash-extra">
          <div className="dv-chart-head"><strong>Delivery board</strong><span className="dv-label">Kanban · placeholder cards</span></div>
          <div className="dv-kanban">
            {[
              ['Backlog', ['Spec review', 'Token audit']],
              ['In progress', ['Chart states', 'Empty screens']],
              ['Done', ['Nav tokens', 'Form focus']],
            ].map(([col, cards]) => (
              <div key={col as string} className="dv-kanban-col">
                <span className="dv-label">{col as string}</span>
                {(cards as string[]).map((c, i) => (
                  <div key={c} className="dv-kanban-card" style={{ borderColor: withAlpha(t.text, 0.16), background: i === 0 ? withAlpha(t.primary, 0.06) : undefined }}>
                    {c}
                    <span className="dv-kanban-meta"><span className="dv-badge" style={i === 0 ? chip : mutedChip}>{i === 0 ? 'On track' : 'Queued'}</span></span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    case 'calendar':
      return (
        <div className="dv-card dv-dash-extra">
          <div className="dv-chart-head"><strong>Release calendar</strong><span className="dv-label">Week 38 · placeholder events</span></div>
          <div className="dv-cal">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, di) => (
              <div key={day} className="dv-cal-day" style={{ borderColor: withAlpha(t.text, 0.12) }}>
                <span className="dv-label">{day}</span>
                {di === 1 && <span className="dv-cal-event" style={{ background: withAlpha(t.primary, 0.14), color: t.primary }}>Spec freeze</span>}
                {di === 3 && <span className="dv-cal-event" style={{ background: withAlpha(t.accent, 0.14), color: t.accent }}>Design review</span>}
              </div>
            ))}
          </div>
        </div>
      )
    case 'activity':
      return (
        <div className="dv-card dv-dash-extra">
          <div className="dv-chart-head"><strong>System feed</strong><span className="dv-label">Activity · placeholder events</span></div>
          <div className="dv-activity">
            {[
              ['Deploy 0417 finished', '2m', chip],
              ['Threshold warning cleared', '18m', mutedChip],
              ['New member joined Placeholder Org', '1h', mutedChip],
            ].map(([msg, when, style]) => (
              <div key={msg as string} className="dv-activity-row" style={{ borderColor: withAlpha(t.text, 0.1) }}>
                <span className="dv-activity-dot" style={{ background: t.primary }} />
                <span className="dv-activity-msg">{msg as string}</span>
                <span className="dv-badge" style={style as React.CSSProperties}>{when as string}</span>
              </div>
            ))}
          </div>
        </div>
      )
  }
}

/* ================= Shared pieces ================= */

function MiniForm({ d }: { d: DesignSystem }) {
  const [msg, setMsg] = useState<string | null>(null)
  return (
    <form className="dv-form" onSubmit={(e) => { e.preventDefault(); setMsg('Welcome aboard — check your inbox.') }}>
      <label className="dv-label" htmlFor={`dv-email-${d.id}`}>Email</label>
      <input id={`dv-email-${d.id}`} className="dv-input" type="email" required placeholder="you@studio.com" />
      <div className="dv-btn-row">
        <button className="dv-btn dv-btn-primary" style={btnStyle(themeOf(d))} type="submit">Request access</button>
        <button className="dv-btn dv-btn-tertiary" style={{ background: 'transparent', color: themeOf(d).primary, border: 'none', cursor: 'pointer' }} type="button">Just browsing →</button>
      </div>
      {msg && <p className="dv-form-ok" role="status">{msg}</p>}
    </form>
  )
}

function btnStyle(t: { primary: string; onPrimary: string }): React.CSSProperties {
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

function manifestoLines(d: DesignSystem): string[] {
  return [
    `We refuse the default. ${d.name} is a full argument for one way of making pages:`,
    `${d.designPhilosophy.split('.')[0]}.`,
    'Every rule below is load-bearing. Remove one and the page explains why it missed it.',
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
    case 'broadsheet-press': return <>THE MORNING <em>LEDGER</em></>
    case 'neo-gothic': return <>Sanctuary for the <em>unseen.</em></>
    case 'deep-current': return <>Beneath the <em>surface.</em></>
    case 'desert-modern': return <>Born of <em>heat &amp; light.</em></>
    case 'ink-wash': return <>The space between <em>strokes.</em></>
    case 'atompunk': return <>Tomorrow, as <em>promised.</em></>
    case 'art-deco': return <>The grand <em>expedition.</em></>
    case 'vaporwave': return <>W E I R D &amp; <em>F R E E</em></>
    case 'cottagecore': return <>Slow bread, <em>soft light.</em></>
    case 'pop-comics': return <>KA-POW! Ideas that <em>land!</em></>
    case 'tactical-hud': return <>SYS.ONLINE // <em>MISSION_CTRL</em></>
    case 'wabi-sabi': return <>Beauty of the <em>imperfect.</em></>
    case 'art-nouveau': return <>Nature, <em>ornamented.</em></>
    case 'frontier-western': return <>Tall tales, <em>told true.</em></>
    case 'blueprint-tech': return <>Drawn before <em>built.</em></>
    case 'graffiti-street': return <>Walls talk <em>back.</em></>
    case 'nordic-hygge': return <>Come in, <em>stay warm.</em></>
    case 'dark-academia': return <>Study like it <em>matters.</em></>
    case 'clinical-care': return <>Care, <em>clearly.</em></>
    case 'festival-vivid': return <>Three days of <em>noise.</em></>
    case 'graphite-focus': return <>Draw the line. <em>Keep it.</em></>
    case 'linen-quiet': return <>Let the page <em>breathe.</em></>
    case 'system-cool': return <>Order, with <em>opinion.</em></>
    case 'ivory-gallery': return <>Hang the work. <em>Step back.</em></>
    case 'baroque-punk': return <>Ornament is <em>ammunition.</em></>
    case 'collision-course': return <>Everything, <em>at once.</em></>
    case 'sticker-storm': return <>Peel. Stick. <em>Repeat.</em></>
    case 'velvet-loud': return <>Whisper? <em>Never met her.</em></>
    case 'mosaic-max': return <>A thousand <em>right answers.</em></>
    case 'acid-garden': return <>Grow <em>wild.</em> Trim never.</>
    case 'riso-flood': return <>Ink over <em>everything.</em></>
    case 'concrete-slab': return <>POURED, NOT <em>DECORATED.</em></>
    case 'riot-xerox': return <>COPY. TILE. <em>RIOT.</em></>
    case 'steel-plant': return <>UPTIME IS THE <em>AESTHETIC.</em></>
    case 'brut-sunbelt': return <>HEAT, CONCRETE, <em>HONESTY.</em></>
    case 'monolith-black': return <>ONE SLAB. <em>NO WINDOWS.</em></>
    case 'ledger-raw': return <>NUMBERS DON&rsquo;T <em>DECORATE.</em></>
    case 'scaffold': return <>BUILT IN THE <em>OPEN.</em></>
    case 'champagne-noir': return <>After dark, <em>everything glows.</em></>
    case 'pearl-hotel': return <>Check in. <em>Slow down.</em></>
    case 'opera-box': return <>The house lights <em>dim.</em></>
    case 'obsidian-atelier': return <>Cut from <em>one stone.</em></>
    case 'heritage-linen': return <>Woven, not <em>printed.</em></>
    case 'gumball': return <>Turn the knob. <em>Get a color.</em></>
    case 'doodle-desk': return <>Margin notes <em>welcome.</em></>
    case 'bounce-house': return <>Serious? <em>We bounce.</em></>
    case 'storybook-night': return <>One more <em>chapter.</em></>
    case 'arcade-pop': return <>INSERT COIN. <em>MAKE PAGES.</em></>
    case 'jelly-toy': return <>Squish, don&rsquo;t <em>stress.</em></>
    case 'confetti-brew': return <>Brewed loud. <em>Poured loud.</em></>
    case 'cassette-deck': return <>SIDE A: <em>YOUR WORK</em></>
    case 'seventies-sunburst': return <>Good vibes, <em>thick strokes.</em></>
    case 'dial-up': return <>You&rsquo;ve got <em>(design) mail.</em></>
    case 'moss-and-stone': return <>Old ground, <em>new growth.</em></>
    case 'tide-pool': return <>Look closer. <em>Life everywhere.</em></>
    case 'canopy-lodge': return <>Under the <em>tall trees.</em></>
    case 'glacier-air': return <>Cold, clear, <em>crisp.</em></>
    case 'harvest-table': return <>Gather. Share. <em>Stay.</em></>
    case 'ledger-fintech': return <>Every cent, <em>accounted.</em></>
    case 'briefcase-slate': return <>Serious tools, <em>sober shell.</em></>
    case 'campus-lms': return <>Learn, then <em>learn again.</em></>
    case 'clinic-warm': return <>Medicine with <em>bedside manner.</em></>
    case 'terminal-ops': return <>OPERATORS <em>ONLY.</em></>
    case 'civic-trust': return <>Public services, <em>public trust.</em></>
    case 'studio-noir': return <>Light the <em>subject.</em></>
    case 'collage-cut': return <>Cut. Paste. <em>Mean it.</em></>
    case 'foundry-type': return <>Letters are <em>architecture.</em></>
    case 'puppet-theater': return <>All the world&rsquo;s <em>a stage.</em></>
    case 'audio-wave': return <>Feel it in the <em>waveform.</em></>
    case 'skate-zine': return <>Photocopy the <em>revolution.</em></>
    case 'tide-clock': return <>High water <em>arrives 04:12.</em></>
    case 'wafer-line': return <>Etch depth, <em>in control.</em></>
    case 'marble-run': return <>Where does the <em>ball go?</em></>
    case 'watch-room': return <>Twelve jewels, <em>one owner.</em></>
    case 'quarry-face': return <>HONED GREY, <em>3.4 TONNES.</em></>
    case 'contour-sheet': return <>Slope <em>18%</em>, drainage east.</>
    case 'tare-weight': return <>248.61 <em>G.</em></>
    case 'null-set': return <>—</>
    case 'brick-course': return <>Running bond, <em>no cuts wasted.</em></>
    case 'aphelion': return <>Burn complete, <em>aphelion rising.</em></>
    case 'footnote-press': return <>On the <em>quiet</em> parts. <sup>[42]</sup></>
    case 'haggle-market': return <>BRASS POTS, <em>MAKE ME AN OFFER</em></>
    case 'overprint': return <>Ink lands <em>where it lands.</em></>
    case 'all-of-it': return <>Continued from <em>page twelve.</em></>
    case 'sirens-parade': return <>THE BRASS <em>DISTRICT</em></>
    case 'clutter-core': return <>Still <em>mid-idea.</em></>
    case 'bell-foundry': return <>POUR, THEN <em>WAIT.</em></>
    case 'wind-tunnel': return <>1.42 kN of <em>drag.</em></>
    case 'concrete-pour': return <>Slump <em>75 mm.</em></>
    case 'static-fence': return <>PER METRE, <em>NOT PER PANEL.</em></>
    case 'private-vault': return <>Deposited <em>1998.</em> Never opened.</>
    case 'vault-of-letters': return <>Edition <em>ninety</em> of ninety.</>
    case 'cellar-index': return <>Barolo, <em>one case left.</em></>
    case 'goldsmiths-lane': return <>Nine carat, <em>set by hand.</em></>
    case 'mud-kitchen': return <>Mud pie, <em>five stars.</em></>
    case 'pigeon-post': return <>Dear Sam, <em>meet at the shed.</em></>
    case 'slime-lab': return <>Stretch it to <em>400%.</em></>
    case 'kart-klub': return <>Lap <em>41.28</em>, then the argument starts.</>
    case 'dino-dig': return <>A tooth, and <em>half a jaw.</em></>
    case 'fax-machine': return <>Order 4471: <em>received.</em></>
    case 'betamax-rental': return <>Two nights, <em>be kind, rewind.</em></>
    case 'diner-placemat': return <>Two eggs, <em>any way.</em></>
    case 'soviet-control': return <>PLAN <em>118%</em> MET.</>
    case 'cb-radio': return <>Channel <em>19</em>, you got a copy?</>
    case 'mycelium-net': return <>Everything is <em>connected underground.</em></>
    case 'seed-vault': return <>Barley, <em>stored at −18.0 °C.</em></>
    case 'lichen-index': return <>Count the <em>lichen</em>, read the air.</>
    case 'abyssal-drift': return <>Four thousand metres, <em>no sunlight.</em></>
    case 'termite-mound': return <>Cooled by <em>chimneys.</em></>
    case 'grid-dispatch': return <>Frequency <em>50.01 Hz.</em></>
    case 'tower-approach': return <>Strips in, <em>sequence out.</em></>
    case 'underwriter-desk': return <>Flood loading <em>+18.5%.</em></>
    case 'cold-chain': return <>Excursions <em>0 of 214.</em></>
    case 'deed-office': return <>Parcel 4471, <em>on record.</em></>
    case 'cyanotype-lab': return <>Reverse-out, <em>no silver.</em></>
    case 'letterpress-crash': return <>Ink too deep, <em>press it anyway.</em></>
    case 'stop-motion-bench': return <>Twelve frames, <em>one second.</em></>
    case 'grid-paper': return <>Sketch first, <em>then the vector.</em></>
    case 'binaural-room': return <>Left and right, <em>forty degrees apart.</em></>
    case 'zoetrope': return <>One revolution, <em>fourteen frames.</em></>
    case 'lunar-climate': return <>Earth science, <em>measured calmly.</em></>
    case 'arco-grid': return <>Ruled by the <em>grid.</em></>
    case 'tondo-ceramics': return <>Thrown on the <em>wheel.</em></>
    case 'sable-supper': return <>Supper, <em>after dark.</em></>
    case 'blau-index': return <>Indexes, tables, <em>trust.</em></>
    case 'beacon-petition': return <>SIGN IT, THEN <em>SHOUT IT.</em></>
    case 'poster-press': return <>Deep ink bite, <em>heavy slab.</em></>
    case 'inkwell-zine': return <>Photocopied, <em>stapled, out.</em></>
    case 'scriptorium-sips': return <>Monastery rules, <em>modern pours.</em></>
    case 'film-journal': return <>Frames drawn <em>by hand.</em></>
    case 'punto-playcafe': return <>Coffee, and <em>nobody minds.</em></>
    case 'neon-arcade': return <>One more <em>coin.</em></>
    case 'cartogrid': return <>Records as <em>terrain.</em></>
    case 'echo-loft': return <>Recorded <em>after midnight.</em></>
    case 'quiet-hours': return <>Permission to <em>slow down.</em></>
    case 'ever-current': return <>Wet noses, <em>warm welcomes.</em></>
    case 'meridian-will': return <>Estate law, <em>without the dust.</em></>
    case 'undercroft-games': return <>Roll for <em>initiative.</em></>
    case 'atlas-waypoints': return <>Booked, <em>charted, calm.</em></>
    case 'bounty-yard': return <>Traded like a <em>market stall.</em></>
    case 'vow-and-verse': return <>Two names, <em>one line.</em></>
    case 'signal-spire': return <>On-chain, <em>on the record.</em></>
    case 'maison-mode': return <>One garment <em>per breath.</em></>
    case 'iron-cadence': return <>Heavy type, <em>one short whistle.</em></>
    case 'aperture-notes': return <>A contact sheet <em>you can read.</em></>
    case 'async-rally': return <>Distributed work, <em>no beige.</em></>
    case 'kennel-and-co': return <>Wet noses, <em>zero baby-talk.</em></>
    case 'mutual-aid-press': return <>Grassroots, <em>zero gloss.</em></>
    case 'studio-copperplate': return <>Stations, <em>not sections.</em></>
    case 'parcel-and-key': return <>Listings with a <em>surveyor’s patience.</em></>
    case 'deadline-gazette': return <>Filed at <em>midnight.</em></>
    case 'cosmo-explorers': return <>Learning at <em>escape velocity.</em></>
    case 'tensor-atlas': return <>Papers shipped as <em>products.</em></>
    case 'gilded-hour': return <>An invitation, <em>weighed in the hand.</em></>
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

