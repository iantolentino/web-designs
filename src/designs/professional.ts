import type { DesignSystem } from '../types'

export const professionalDesigns: DesignSystem[] = [
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    category: 'Professional',
    tags: ['enterprise', 'trust', 'navy', 'b2b', 'saas'],
    description: 'Enterprise trust: navy, steel, and quiet confidence.',
    designPhilosophy:
      'The bank vault of design systems. Deep navy, steel greys, and a disciplined cobalt accent. Nothing surprises, nothing breaks, everything aligns. Built for enterprises whose customers equate boring with safe — and mean it as a compliment.',
    designDetails:
      'Navy #12284c for headers and footer, white canvas, steel greys for structure, cobalt #2563eb-family for actions. Source Sans 3 humanist sans throughout — friendly but serious. Cards carry 1px borders and 4px left accent bars in section colors. Buttons are sturdy 4px-radius rectangles. Density is moderate: enterprise users scan, they don’t browse.',
    colors: {
      primary: '#1d4ed8',
      secondary: '#12284c',
      accent: '#0e7490',
      neutral: '#e2e8f0',
      background: '#ffffff',
      text: '#1e293b',
    },
    typography: {
      displayFont: 'Source Sans 3',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 48',
      lineHeights: 'Display 1.15, body 1.6',
      letterSpacing: 'Labels 0.06em uppercase, display -0.01em',
    },
    components: {
      primary: 'Solid #1d4ed8, white text, radius 4px, padding 12px 24px, 600',
      secondary: '1px #cbd5e1 border, white bg, navy text, same metrics',
      tertiary: 'Cobalt text link, underline on hover, external-link icons on new tabs',
      radius: '4px buttons/inputs, 8px cards',
      hover: '150ms darken; card borders → cobalt',
      cards: 'White, 1px #e2e8f0 border, 4px left accent bar, radius 8px, padding 24px',
      forms: 'Inputs 42px, 1px borders, labels above, cobalt focus ring 0 0 0 3px rgba(29,78,216,.25)',
      navigation: '72px navy top bar, white links, cobalt CTA button right',
      modals: 'Radius 8px, navy header band with white title, steel backdrop',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 48',
      grid: '12-col 1200px, 24px gutters',
    },
    motion: {
      pageLoad: 'Content fades 250ms; nothing dramatic',
      hoverStates: '150ms color/border shifts only',
      transitions: 'Short, functional, 150ms ease',
      scroll: 'Sticky section nav highlights on scroll',
    },
    accessibility:
      '#1e293b on white 13.9:1; white on cobalt 4.6:1 (buttons bold). Focus 3px cobalt ring. Navy bar text 15.7:1. All tables have proper th scope; forms have visible labels.',
    responsive:
      'Grid stacks under 768px; navy bar condenses to hamburger + logo. Tables become stacked definition lists under 640px. Type scale compresses two steps.',
    codeExample:
      '<header class="corporate">\n  <h1>Compliance, minus the headache.</h1>\n  <p>Audit-ready workflows for regulated teams.</p>\n  <div class="cta-row">\n    <button class="btn-primary">Request a demo</button>\n    <a class="text-link" href="#">Read the whitepaper</a>\n  </div>\n</header>',
    accent: '#1d4ed8',
    motif: 'big-stat-row',
    layout: 'split-hero',
    useCases: ['SaaS', 'Fintech', 'Real Estate'],
signatureCss: `
.dv-card { border-left: 4px solid #1d4ed8; }
.dv-stat { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; color: #12284c; }
.dv-nav { background: #12284c; }
.dv-nav a { color: #e2e8f0; }`,
    author: 'Jonas Keller',
    createdAt: '2026-01-18',
    popularity: 78,
  },
  {
    id: 'startup-serious',
    name: 'Startup Serious',
    category: 'Professional',
    tags: ['fintech', 'modern', 'crisp', 'growth', 'dark-accent'],
    description: 'Fintech crisp: near-black, electric blue, data-forward.',
    designPhilosophy:
      'Serious money, modern interface. Near-black surfaces, electric blue actions, and tabular numerals everywhere data appears. Stripe-style polish without Stripe-style ubiquity — dense, crisp, and fast.',
    designDetails:
      'White and #0f172a paired with electric blue #2563eb-family and mint data-positive accents. Manrope for UI, Space Grotesk for display. Numbers always tabular-nums. Cards are borderless with soft shadows; stat blocks are huge. Buttons are 6px-radius with precise 1px borders. Hover states are border-color shifts, no lifts.',
    colors: {
      primary: '#2563eb',
      secondary: '#0f172a',
      accent: '#10b981',
      neutral: '#eef2f6',
      background: '#ffffff',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 16 / 18 / 24 / 32 / 48',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display -0.02em, labels 0.04em',
    },
    components: {
      primary: 'Solid #2563eb, white text, radius 6px, padding 12px 24px, 600, border 1px #1d4ed8',
      secondary: 'White bg, 1px #cbd5e1 border, #0f172a text, same metrics',
      tertiary: 'Cobalt text link with subtle arrow-slide on hover',
      radius: '6px buttons, 12px cards',
      hover: '150ms border-color → #2563eb; no lifts, no shadows grow',
      cards: 'White, no border, shadow 0 1px 3px rgba(15,23,42,.08), radius 12px, padding 24px',
      forms: '1px border inputs with mono numerals where numeric, cobalt focus ring',
      navigation: '60px white bar, bottom 1px border, logo left, links right, cobalt CTA',
      modals: 'Radius 12px, 1px border + soft shadow, header 16px padding',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 32 / 64 / 120',
      paddingScale: '16 / 24 / 40',
      grid: '12-col 1240px; dashboard layouts 240px sidebar + fluid',
    },
    motion: {
      pageLoad: 'Content fades 200ms — speed is the aesthetic',
      hoverStates: '150ms border/color; data rows tint #eef2f6',
      transitions: 'Fast 150–200ms; nothing over 300ms',
      scroll: 'Dashboard sidebar scrollspy; tables sticky-header',
    },
    accessibility:
      '#0f172a on white 17.9:1; white on cobalt 4.6:1. Focus 3px cobalt ring. Mint used only for positive deltas with ▲ glyph (not color alone). Tabular numerals prevent layout shift.',
    responsive:
      'Dashboard grid collapses under 1024px; stat cards 2-up under 640px. Display clamps 2rem→3rem. Tables scroll horizontally with sticky first column.',
    codeExample:
      '<section class="metrics">\n  <h1>Money, measured.</h1>\n  <div class="stats">\n    <div class="stat"><span class="value">$4.2M</span><span class="delta">▲ 18% MoM</span></div>\n  </div>\n  <button class="btn-primary">Open dashboard</button>\n</section>',
    accent: '#2563eb',
    motif: 'big-stat-row',
    layout: 'dashboard',
    useCases: ['Fintech', 'SaaS', 'AI/ML'],
signatureCss: `
.dv-stat .value { font-variant-numeric: tabular-nums; font-weight: 700; }
.dv-stat .delta { color: #10b981; font-weight: 600; }
.dv-card { box-shadow: 0 1px 3px rgba(15,23,42,.08); }
.dv-btn { border: 1px solid #1d4ed8; }`,
    author: 'Priya Nair',
    createdAt: '2026-02-28',
    popularity: 82,
    trending: true,
  },
  {
    id: 'tech-corporate',
    name: 'Tech Corporate',
    category: 'Professional',
    tags: ['infrastructure', 'cloud', 'technical', 'grid', 'devops'],
    description: 'Infrastructure-grade: slate, cyan, engineering precision.',
    designPhilosophy:
      'For companies whose product is a datacenter. Slate greys, cloud cyan, IBM Plex Sans engineering sobriety, and grid-paper section backgrounds. Dense tables, precise diagrams, and copy that respects the reader’s IQ.',
    designDetails:
      'White/slate palette with cyan #0891b2-family accents and deep slate #1e293b anchors. IBM Plex Sans + IBM Plex Mono for anything technical. Sections separated by 1px slate rules with grid-paper backgrounds (24px CSS grid lines at 3% opacity). Cards are flat with 1px borders; stat chips are mono. Buttons are square-ish 3px radius.',
    colors: {
      primary: '#0891b2',
      secondary: '#1e293b',
      accent: '#7c3aed',
      neutral: '#e2e8f0',
      background: '#f8fafc',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 24 / 32 / 46',
      lineHeights: 'Display 1.15, body 1.6, mono 1.5',
      letterSpacing: 'Mono labels 0.08em uppercase, display -0.01em',
    },
    components: {
      primary: 'Solid #0891b2, white text, radius 3px, padding 12px 24px, 600',
      secondary: '1px #94a3b8 border, white bg, slate text',
      tertiary: 'Cyan text link with ↗ external arrow',
      radius: '3px buttons/inputs, 6px cards — engineering precision',
      hover: '150ms border→cyan; diagram nodes highlight',
      cards: 'White, 1px #e2e8f0, radius 6px, mono spec header row, padding 24px',
      forms: 'Mono-labeled inputs, 1px borders, cyan focus',
      navigation: '56px bar, bottom 1px border, mono breadcrumb, cyan active underline',
      modals: 'Radius 6px, slate header band, mono close [×]',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 48',
      grid: '12-col 1280px; 240px doc sidebar; 24px grid-paper rhythm',
    },
    motion: {
      pageLoad: 'Fast fade 200ms; diagrams draw after content',
      hoverStates: '150ms; diagram nodes glow subtly',
      transitions: 'Functional 150–200ms',
      scroll: 'Grid-paper sections align to a persistent background grid',
    },
    accessibility:
      '#0f172a on white 17.9:1; white on cyan 3.9:1 (large/bold only; buttons pair with icons). Focus 3px cyan ring. Mono labels never below 11px. All diagrams have text alternatives.',
    responsive:
      'Doc sidebar becomes top drawer under 1024px. Spec tables scroll horizontally. Display clamps 2rem→2.875rem. Grid-paper persists at reduced opacity.',
    codeExample:
      '<section class="infra">\n  <p class="spec">SLA 99.99% · 34 regions · 12ms p50</p>\n  <h1>Infrastructure for the ambitious.</h1>\n  <button class="btn-cyan">Start building</button>\n</section>',
    accent: '#0891b2',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['AI/ML', 'SaaS', 'Crypto'],
signatureCss: `
.dv-spec { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #0891b2; }
.dv-stage { background-image: linear-gradient(rgba(30,41,59,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,.04) 1px, transparent 1px); background-size: 24px 24px; }
.dv-card .spechead { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px; }`,
    author: 'Jonas Keller',
    createdAt: '2026-03-28',
    popularity: 75,
  },
]
