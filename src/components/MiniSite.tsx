import { useMemo, useState } from 'react'
import type { DesignSystem } from '../types'
import { themeOf, withAlpha, onColor } from '../designs/theme'

/**
 * MiniSite renders a complete sample page — themed entirely from a DesignSystem.
 * Six layout archetypes keep previews distinct; shared sections showcase each
 * design's full component vocabulary. Used scaled (thumbnails) and full (preview).
 */

let dvScopeCounter = 0

export function MiniSite({ d, compact = false }: { d: DesignSystem; compact?: boolean }) {
  const t = useMemo(() => themeOf(d), [d])
  const [modalOpen, setModalOpen] = useState(false)
  const [formMsg, setFormMsg] = useState<string | null>(null)
  const [tab, setTab] = useState(0)
  const [toggleOn, setToggleOn] = useState(true)
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

        {renderLayout(d, { setModalOpen })}

        {/* COMPONENT SHOWCASE */}
        <section className="dv-section dv-comp-showcase">
          <h2 className="dv-h2">Components, in the flesh</h2>
          <div className="dv-comp-tabs">
            {['Buttons', 'Cards', 'Form', 'Table'].map((label, i) => (
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

function renderLayout(d: DesignSystem, ctx: { setModalOpen: (v: boolean) => void }) {
  switch (d.layout) {
    case 'split-hero': return <SplitHero d={d} />
    case 'magazine': return <MagazineBody d={d} />
    case 'dashboard': return <DashboardBody d={d} />
    case 'centered': return <CenteredBody d={d} />
    case 'editorial': return <EditorialBody d={d} />
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
