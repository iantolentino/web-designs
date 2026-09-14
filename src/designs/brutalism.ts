import type { DesignSystem, Motif } from '../types'
const M = (m: Motif) => m

export const brutalismDesigns: DesignSystem[] = [
  {
    id: 'raw-brutalism',
    name: 'Raw Brutalism',
    category: 'Brutalism',
    tags: ['raw', 'harsh', 'mono', 'industrial', 'square'],
    description: 'Concrete, mono type, hard shadows, zero polish.',
    designPhilosophy:
      'Structure exposed on purpose. Visible grid, default-feeling controls, monospace everywhere, hard offset shadows, and a single acid yellow used like highlighter on industrial drawings. It refuses to charm — and that refusal is the style.',
    designDetails:
      'Everything is squared: buttons, inputs, cards, even the wordmark. 2px black borders and hard offset shadows everywhere. Space Mono carries labels AND headings (weight 700). Acid yellow marks interactive states. Blue links remain classic underlined blue — a deliberate nod to the web before branding.',
    colors: {
      primary: '#f5e617',
      secondary: '#111111',
      accent: '#f5e617',
      neutral: '#e6e6e6',
      background: '#ffffff',
      text: '#111111',
    },
    typography: {
      displayFont: 'Space Mono',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 20 / 28 / 40 / 72',
      lineHeights: 'Display 0.95, body 1.6, mono 1.4',
      letterSpacing: '0 across the board — mono wants none',
    },
    components: {
      primary: 'Acid yellow bg, 2px #111 border, shadow 4px 4px 0 #111, padding 12px 24px, 700 mono',
      secondary: 'White bg, 2px #111 border, same shadow, inverts on hover',
      tertiary: 'Classic blue underlined link (#0000ee)',
      radius: '0. Nothing is rounded. Nothing.',
      hover: 'Translate(-2px,-2px) with shadow growing to 6px 6px — physical press-and-lift',
      cards: 'White, 2px border, 6px 6px 0 #111 shadow, square, padding 24px',
      forms: 'Square inputs, 2px borders, focus inverts to yellow bg, mono labels above',
      navigation: '2px bottom border, mono uppercase links with [bracket] hover states',
      modals: 'Square panel, 4px border, 10px 10px 0 #111 shadow, no backdrop blur',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 48',
      grid: '12-col with 2px visible borders, 1200px max',
    },
    motion: {
      pageLoad: 'None. Content appears. Instantly.',
      hoverStates: 'Physical translate + shadow growth, instant (0ms)',
      transitions: 'Zero transitions by default; 100ms only for focus states',
      scroll: 'Static. The scrollbar is the only animation.',
    },
    accessibility:
      'Black on white 18.7:1; yellow highlight on black borders readable. Focus = 3px solid #111 outline offset 2px. Interactive targets ≥44px despite the hard edges. Semantics preserved — rawness is visual only.',
    responsive:
      'Grid collapses 12→6→1 with borders intact. Mono type reduces two steps under 640px. Hard shadows shrink from 6px to 3px on mobile to protect layout.',
    codeExample:
      '<section class="block">\n  <h1>NO FRILLS. ALL STRUCTURE.</h1>\n  <p>Built like a warehouse. Loads like one too.</p>\n  <button class="btn-acid">USE IT →</button>\n</section>',
    accent: '#f5e617',
    motif: M('hard-shadows'),
    layout: 'hero-cards',
    useCases: ['Agency', 'Music', 'Portfolio'],
signatureCss: `
.dv-card, .dv-btn { box-shadow: 4px 4px 0 #111 !important; border: 2px solid #111 !important; }
.dv-card:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #111 !important; }
.dv-nav a::before { content: '['; opacity: 0; }
.dv-nav a::after { content: ']'; opacity: 0; }
.dv-nav a:hover::before, .dv-nav a:hover::after { opacity: 1; }`,
    author: 'Dmitri Volkov',
    createdAt: '2026-01-20',
    popularity: 87,
  },
  {
    id: 'refined-brutalism',
    name: 'Refined Brutalism',
    category: 'Brutalism',
    tags: ['architectural', 'grey', 'structured', 'technical'],
    description: 'Brutalism with architectural manners and grey discipline.',
    designPhilosophy:
      'Concrete, but poured by a careful crew. The raw vocabulary — mono labels, squared edges, visible structure — is tempered by a sophisticated grey palette, generous padding, and measured motion. Feels like an architecture firm built a website.',
    designDetails:
      'Six-step greyscale with one restrained orange for interactive emphasis. IBM Plex Mono for all labels and numbers, IBM Plex Sans for prose. Structure is visible: thin rules divide cells; section numbers run down the left margin. Shadows are almost never used — depth comes from greys.',
    colors: {
      primary: '#e8590c',
      secondary: '#343a40',
      accent: '#e8590c',
      neutral: '#dee2e6',
      background: '#f8f9fa',
      text: '#212529',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 56',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Labels 0.08em uppercase mono, display -0.015em',
    },
    components: {
      primary: 'Solid #212529, white text, radius 0, padding 14px 28px, 600, orange left-bar 4px',
      secondary: '1px #212529 border, #f8f9fa bg, 600',
      tertiary: 'Mono uppercase text link with orange → prefix',
      radius: '0 everywhere',
      hover: 'Orange left-bar expands from 4px to 8px width, 250ms; text stays put',
      cards: '#ffffff with 1px #dee2e6 border, square, mono index top-right, padding 28px',
      forms: 'Square inputs, 1px borders, focus 2px orange border',
      navigation: 'Thin top rule, mono section index left (00–04), links right',
      modals: 'Square, 1px border, header row with mono index and close ×',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '24 / 32 / 48',
      grid: '12-col, 1320px max, 1px #dee2e6 column rules visible',
    },
    motion: {
      pageLoad: 'Section numbers slide in from left 300ms, content fades',
      hoverStates: '250ms on structural accents (bars, rules) only',
      transitions: 'Measured, structural — motion belongs to rules and bars, not text',
      scroll: 'Margin index tracks scroll position (highlights current section)',
    },
    accessibility:
      'Text 14.9:1; orange reserved for large/bold and non-text accents. Focus is 3px orange outline. The visible grid is decorative — content order is semantic.',
    responsive:
      'Column rules hide under 768px; margin index becomes a top progress bar. Display clamps 2.5rem→3.5rem. Padding steps down one level per breakpoint.',
    codeExample:
      '<section class="cell">\n  <span class="idx">02</span>\n  <h2>Load-bearing typography</h2>\n  <p>Every rule has a reason.</p>\n</section>',
    accent: '#e8590c',
    motif: M('swiss-grid'),
    layout: 'magazine',
    useCases: ['Agency', 'Portfolio', 'News'],
signatureCss: `
.dv-idx { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #e8590c; }
.dv-btn { border-left: 4px solid #e8590c; transition: border-left-width .25s; }
.dv-btn:hover { border-left-width: 8px; }
.dv-section { border-top: 1px solid #dee2e6; }`,
    author: 'Greta Hansen',
    createdAt: '2026-03-22',
    popularity: 74,
  },
  {
    id: 'web1-brutalism',
    name: 'Web1 Brutalism',
    category: 'Brutalism',
    tags: ['retro-web', 'y2k-web', 'nostalgic', 'lo-fi'],
    description: '1998 called. Bevels, starfields, hit counters, guestbooks.',
    designPhilosophy:
      'The early web, lovingly reconstructed. Beveled panels, classic blue links, a hit counter, and VT323 marquee moments — a fan shrine from 1999, except every component is deliberate, accessible, and modern under the hood.',
    designDetails:
      'Navy starfield generated in pure CSS, #c0c0c0 Windows-95-style beveled panels, underlined #0000ee links, and VT323 for marquee and title bars. Deliberate anachronisms: a hit counter, "best viewed in Netscape" badge, blinking text used exactly once. Under the nostalgia, everything is semantic HTML.',
    colors: {
      primary: '#0000ee',
      secondary: '#00c4c4',
      accent: '#ffcc00',
      neutral: '#c0c0c0',
      background: '#0f1035',
      text: '#e8e8f8',
    },
    typography: {
      displayFont: 'VT323',
      bodyFont: 'Times New Roman',
      scale: '12 / 14 / 16 / 20 / 28 / 40 / 64 (VT323 renders large)',
      lineHeights: 'Display 1.0, body 1.5',
      letterSpacing: '0; VT323 handles the charm',
    },
    components: {
      primary: '#c0c0c0 beveled button (3px outset), navy text, pressed state inset',
      secondary: 'Same bevel, label in #000080, hover lightens',
      tertiary: 'Classic #0000ee underlined link, #551a8b visited',
      radius: '0 — bevels do the work',
      hover: 'Bevel inverts to inset instantly; marquee pauses on hover',
      cards: '#c0c0c0 panels with 3px outset bevel, navy title bars (#000080→#1084d0 gradient)',
      forms: 'Win95 sunken inputs (2px inset), #ffffff bg, mono font',
      navigation: 'Title-bar nav with [Home] [Files] [Links] bracket links',
      modals: 'True Win95 dialog: title bar, bevel, OK/Cancel buttons',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 24 / 48',
      paddingScale: '8 / 16 / 24',
      grid: 'Table-like rows: 25% / 50% / 25% panels',
    },
    motion: {
      pageLoad: 'Marquee scrolls in immediately — that IS the load animation',
      hoverStates: 'Bevel inverts instantly',
      transitions: 'None except the marquee and one deliberate blink',
      scroll: 'The page is short. Scrolls are rare. As nature intended.',
    },
    accessibility:
      '#e8e8f8 on #0f1035 is 14.2:1; links stay underlined for a11y. Focus is the browser default (never removed). One blink ≤5s per minute per WCAG. All nostalgia is CSS, not images, so it scales.',
    responsive:
      'Panels stack vertically under 640px. VT323 sizes bump for readability. The hit counter stays. It always stays.',
    codeExample:
      '<div class="panel">\n  <div class="titlebar">welcome.htm</div>\n  <marquee>★ thanks for visiting ★ sign the guestbook ★</marquee>\n  <p>You are visitor #0001337</p>\n</div>',
    accent: '#ffcc00',
    motif: M('pixel-grid'),
    layout: 'hero-cards',
    useCases: ['Gaming', 'Music', 'Events'],
signatureCss: `
.dv-stage { background-image: radial-gradient(1px 1px at 20% 30%, #fff 50%, transparent 50%), radial-gradient(1px 1px at 60% 70%, #fff 50%, transparent 50%), radial-gradient(1px 1px at 80% 20%, #fff 50%, transparent 50%), radial-gradient(1px 1px at 40% 80%, #fff 50%, transparent 50%); background-size: 180px 180px; }
.dv-panel { background: #c0c0c0; border: 3px outset #dfdfdf; color: #111; }
.dv-panel .titlebar { background: linear-gradient(90deg, #000080, #1084d0); color: #fff; font-family: 'VT323', monospace; padding: 2px 8px; }
.dv-panel a { color: #0000ee; }
.dv-marquee { overflow: hidden; white-space: nowrap; color: #ffcc00; }
.dv-marquee span { display: inline-block; animation: dv-marq 14s linear infinite; }
@keyframes dv-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }`,
    author: 'Nostalgia Engine',
    createdAt: '2026-04-01',
    popularity: 85,
  },
]
