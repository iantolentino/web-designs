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
    colors: {
      primary: '#e8590c',
      secondary: '#343a40',
      accent: '#e8590c',
      neutral: '#dee2e6',
      background: '#f8f9fa',
      text: '#212529',
    },
    typography: {
      displayFont: 'Archivo Black',
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
    accent: '#e8590c',
    motif: M('corner-brackets'),
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
  {
    id: 'concrete-slab',
    name: 'Concrete Slab',
    category: 'Brutalism',
    tags: ['concrete', 'stencil', 'massive', 'raw'],
    description: 'Poured-concrete pages with stencil type and zero finish.',
    designPhilosophy:
      'Structure exposed. The page is a slab: board-formed gray, rebar grid lines, stencil caps for signage. Nothing decorative survives the pour. If it does not hold weight, it does not ship.',
    colors: {
      primary: '#2e2c28',
      secondary: '#6b675e',
      accent: '#a04d16',
      neutral: '#efeadf',
      background: '#d8d3c9',
      text: '#1d1b18',
    },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Archivo',
      scale: '14 / 16 / 18 / 22 / 30 / 44 / 80',
      lineHeights: 'Display 1.05, body 1.5',
      letterSpacing: 'Display 0.06em uppercase, body 0',
    },
    components: {
      primary:
        'Ink #2e2c28 stencil plate, 0px radius, concrete text, weight 600, 0.08em tracking; press sinks 3px and loses its shadow',
      secondary: 'Concrete plate with 1px ink border; hover inverts to ink',
      tertiary: 'Oxide stamp link — uppercase, boxed 1px, caulked onto the page',
      radius: '0px. Slabs do not curve.',
      hover: '3px press with hard-shadow loss, 90ms; stencil fills oxide on active',
      cards: 'Form-work panels: #e3ded4, 1px #b8b2a6 seams per row, hard shadow 0 6px 0 rgba(29,27,24,.9)',
      forms: 'Inset concrete fields with 2px ink borders; focus paints the border oxide',
      navigation: 'Top stencil bar with boxed uppercase links; the active link carries an oxide stamp corner',
      modals: 'Slab overlay with 2px ink frame and concrete scrim rgba(29,27,24,.55)',
    },
    accent: '#a04d16',
    motif: 'hard-shadows',
    layout: 'manifesto',
    useCases: ['Events', 'Fitness', 'Gaming'],
    signatureCss: `
.dv-btn { border-radius: 0; text-transform: uppercase; letter-spacing: .08em; box-shadow: 0 6px 0 rgba(29,27,24,.9); }
.dv-btn:hover { transform: translateY(3px); box-shadow: 0 3px 0 rgba(29,27,24,.9); }
.dv-card { border-radius: 0; box-shadow: 0 6px 0 rgba(29,27,24,.9); }
.dv-hero h1 { text-transform: uppercase; letter-spacing: .06em; }`,
    author: 'Rutger Bault',
    createdAt: '2026-08-27',
    popularity: 84,
    trending: true,
  },
  {
    id: 'riot-xerox',
    name: 'Riot Xerox',
    category: 'Brutalism',
    tags: ['xerox', 'punk', 'photocopy', 'zine'],
    description: 'Photocopy punk: black, white, one red, and the toner stays visible.',
    designPhilosophy:
      'Run the design through a Xerox until it screams. Black ink, photocopy paper, one crimson for the parts that matter. Nothing is centered by accident and nothing is smoothed — misregistration is the style.',
    colors: {
      primary: '#d92b2b',
      secondary: '#1a1a1a',
      accent: '#6e6a60',
      neutral: '#dcd8cc',
      background: '#f0ede4',
      text: '#161616',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Space Mono',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 76',
      lineHeights: 'Display 0.98, body 1.55',
      letterSpacing: 'Display -0.01em, body 0',
    },
    components: {
      primary:
        'Crimson #d92b2b block, 0px radius, 2px ink border offset 3px like a misprint; hover shifts the offset 1px more',
      secondary: 'Toner-black button on paper; hover fills crimson',
      tertiary: 'Underlined mono link with a redacted-bar hover (black bar wipes in)',
      radius: '0px; edges are cut, not rounded',
      hover: 'Misregistration: shadows shift 2px on 100ms; redaction bars wipe',
      cards: 'Xerox sheets: paper panels, 2px ink border, alternating 2deg rotation, halftone corner grain, hard shadow 4px 4px 0 ink',
      forms: 'Typewriter fields: 2px ink underline, mono input, crimson caret',
      navigation: 'Torn-strip nav: rotated boxed links that overlap 4px',
      modals: 'Full-bleed xerox sheet with a crimson masthead and ink scrim rgba(22,22,22,.6)',
    },
    accent: '#d92b2b',
    motif: 'grain-overlay',
    layout: 'hero-cards',
    useCases: ['Music', 'News', 'Events'],
    signatureCss: `
.dv-card { border: 2px solid #161616; box-shadow: 4px 4px 0 #161616; transform: rotate(-1.2deg); }
.dv-card:nth-child(even) { transform: rotate(1.2deg); }
.dv-btn { border-radius: 0; box-shadow: 3px 3px 0 #161616; }
.dv-hero h1 { text-shadow: 2px 2px 0 #d92b2b; }`,
    author: 'Pilar Nuez',
    createdAt: '2026-08-30',
    popularity: 82,
    trending: true,
  },
  {
    id: 'steel-plant',
    name: 'Steel Plant',
    category: 'Brutalism',
    tags: ['industrial', 'hmi', 'orange', 'control-room'],
    description: 'Control-room HMI for software that runs actual machines.',
    designPhilosophy:
      'A SCADA screen you can love. Dark steel chassis, safety-orange actuators, gauge-blue readouts, and labels a night shift can read at arm’s length. Every panel is an instrument; every button a physical switch.',
    colors: {
      primary: '#ff7a1a',
      secondary: '#20262c',
      accent: '#4f9bc4',
      neutral: '#2c343b',
      background: '#15181c',
      text: '#e6e9ec',
    },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 13 / 15 / 18 / 24 / 32 / 52',
      lineHeights: 'Display 1.1, body 1.5',
      letterSpacing: 'Display 0.08em uppercase, values 0.02em',
    },
    components: {
      primary:
        'Safety-orange guarded switch: 4px radius, 2px border, chassis text, weight 700; press inverts to dark with an orange ring',
      secondary: 'Panel-gray switch with 1px weld seam; hover lights a gauge-blue border',
      tertiary: 'Mono readout link with an orange blinking caret on hover (1.2s steps)',
      radius: '4px switches, 0px panels with 6px 45° corner cuts on alarm cards',
      hover: 'Switch LED lights 80ms; gauges needle-sweep 300ms ease-out',
      cards: 'Instrument panels: #20262c, 1px #2c343b seam, 18px padding, mono value row with orange unit labels',
      forms: 'Dark inset fields with mono input, orange focus border, and physical tick marks under sliders',
      navigation: 'Left 200px chassis rail with instrument groups; the active group carries an orange LED dot',
      modals: 'Alarm modal: chassis panel with 45°-cut corners and a 2px orange border, steel scrim rgba(21,24,28,.7)',
    },
    accent: '#ff7a1a',
    motif: 'corner-brackets',
    layout: 'dashboard',
    useCases: ['SaaS', 'Productivity', 'Gaming'],
    signatureCss: `
.dv-card { background: #20262c; border: 1px solid #2c343b; }
.dv-btn { border-radius: 4px; text-transform: uppercase; letter-spacing: .08em; }
.dv-kicker { color: #ff7a1a; font-family: "IBM Plex Mono", monospace; text-transform: uppercase; letter-spacing: .08em; }`,
    author: 'Halvard Ness',
    createdAt: '2026-08-11',
    popularity: 78,
  },
  {
    id: 'brut-sunbelt',
    name: 'Brut Sunbelt',
    category: 'Brutalism',
    tags: ['sunbelt', 'stucco', 'modernist', 'heat'],
    description: 'Palm Springs brutalism: baked stucco, deep shade, one oasis teal.',
    designPhilosophy:
      'Brutalism that grew up in the desert. Baked-stucco warmth instead of gray gloom, deep-shade masses for structure, and one oasis teal that reads like water. Sun-hard shadows do the ornament so nothing else has to.',
    colors: {
      primary: '#b4552d',
      secondary: '#4a4640',
      accent: '#2e6e5e',
      neutral: '#ddd3c2',
      background: '#efe6d8',
      text: '#262019',
    },
    typography: {
      displayFont: 'Bebas Neue',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 72',
      lineHeights: 'Display 1.08, body 1.55',
      letterSpacing: 'Display 0.1em uppercase, body 0',
    },
    components: {
      primary:
        'Baked-clay #b4552d plate, 0px radius, stucco text, weight 600, 0.1em tracking; hover casts a 6px sun shadow',
      secondary: 'Shade panel button (#4a4640) with stucco text; hover warms the border to clay',
      tertiary: 'Teal wayfinding link — uppercase, arrow-prefixed, underlines in 2px clay',
      radius: '0px; desert light hates curves',
      hover: 'Shadows grow like afternoon sun, 160ms — no lift, only lengthening',
      cards: 'Shade blocks: #4a4640 panels with stucco text and a 4px clay top rule; alternate stucco cards carry a 1px shade border',
      forms: 'Stucco fields with 2px shade borders; focus paints teal with a sun-shadow tick',
      navigation: 'Full-width clay bar with boxed stucco links; the active link casts an inner shadow',
      modals: 'Stucco slab with a 2px clay frame and shade scrim rgba(38,32,25,.55)',
    },
    accent: '#b4552d',
    motif: 'hard-shadows',
    layout: 'split-hero',
    useCases: ['Real Estate', 'Travel', 'Restaurant'],
    signatureCss: `
.dv-btn { border-radius: 0; text-transform: uppercase; letter-spacing: .1em; }
.dv-card { border-radius: 0; }
.dv-hero h1 { text-transform: uppercase; letter-spacing: .1em; }
.dv-card.dv-shade { background: #4a4640; color: #efe6d8; border-top: 4px solid #b4552d; }`,
    author: 'Sunny Marchetti',
    createdAt: '2026-08-05',
    popularity: 77,
  },
  {
    id: 'monolith-black',
    name: 'Monolith Black',
    category: 'Brutalism',
    tags: ['black', 'monolith', 'signal-blue', 'severe'],
    description: 'One black slab, white type, a single signal of electric blue.',
    designPhilosophy:
      'Reduction until it hurts. A black monolith, white type, and exactly one electric-blue signal per view — the color of a single LED on a dark machine. If the page needs a second accent, the page needs editing.',
    colors: {
      primary: '#ffffff',
      secondary: '#141414',
      accent: '#2f6bff',
      neutral: '#262626',
      background: '#070707',
      text: '#f0f0f0',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 84',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display -0.015em, labels 0.14em uppercase',
    },
    components: {
      primary:
        'White slab button, black text, 0px radius, weight 700; hover reveals a 4px signal-blue under-edge',
      secondary: 'Void button with 1px #3a3a3a border; the border turns signal blue on hover',
      tertiary: 'White uppercase link with a blue caret ▸ that advances on hover',
      radius: '0px. The monolith has no radius.',
      hover: 'The blue signal slides in as a 4px under-edge, 140ms; text never moves',
      cards: 'Deep panels: #141414, 1px #262626 edge, flush corners, 32px padding, optional blue left rule for the active card',
      forms: 'Underline fields on void; focus re-inks the rule signal blue at 2px',
      navigation: 'Flush top bar with uppercase white links; the active link carries the blue signal dot',
      modals: 'Full-bleed void with a single white rule frame and rgba(0,0,0,.7) scrim',
    },
    accent: '#2f6bff',
    motif: 'mono-labels',
    layout: 'full-bleed',
    useCases: ['Portfolio', 'Fashion', 'AI/ML'],
    signatureCss: `
.dv-card { background: #141414; border: 1px solid #262626; }
.dv-card:hover { box-shadow: inset 0 -4px 0 #2f6bff; }
.dv-btn { border-radius: 0; }
.dv-btn-primary { box-shadow: inset 0 -4px 0 #2f6bff; }`,
    author: 'Marek Czerny',
    createdAt: '2026-08-19',
    popularity: 85,
  },
  {
    id: 'ledger-raw',
    name: 'Ledger Raw',
    category: 'Brutalism',
    tags: ['ledger', 'ruled', 'accounting', 'ink'],
    description: 'Brutalist bookkeeping: ruled paper, stamped totals, green ink.',
    designPhilosophy:
      'The design is an audit trail. Ledger-ruled paper, banker’s green stamps, dashed cut lines, and totals that refuse to be rounded. Every section is a numbered entry; nothing is unaccounted for.',
    colors: {
      primary: '#1d5c3f',
      secondary: '#23281f',
      accent: '#d95d2b',
      neutral: '#e4e0cf',
      background: '#f5f2e6',
      text: '#1f231d',
    },
    typography: {
      displayFont: 'IBM Plex Mono',
      bodyFont: 'Karla',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 56',
      lineHeights: 'Display 1.2, body 1.62',
      letterSpacing: 'Display 0, totals 0.04em',
    },
    components: {
      primary:
        'Banker’s green stamp-plate, 0px radius, 2px ink border, paper text, weight 700; press re-inks the border darker',
      secondary: 'Paper button with 1px ruling border; hover fills the neutral row tint',
      tertiary: 'Mono footnote link with a green superscript index that fills on hover',
      radius: '0px — columns and rows are cut, never curved',
      hover: 'Row highlights wipe in like a highlighter, 120ms; stamps rotate to −1°',
      cards: 'Ledger entries: paper panels with a 1px #d8d3bd top rule, dashed #c4bfa8 cut line below, mono index numbers at left',
      forms: 'Ruled entry fields: mono input on the line, green focus rule, right-aligned numeric columns',
      navigation: 'Ruled header strip with mono entry numbers; the active section gets a green margin stamp',
      modals: 'Paper entry sheet with a double rule top, stamp masthead, ink scrim rgba(31,35,29,.5)',
    },
    accent: '#1d5c3f',
    motif: 'dashed-borders',
    layout: 'magazine',
    useCases: ['Fintech', 'News', 'Productivity'],
    signatureCss: `
.dv-card { border-top: 1px solid #d8d3bd; border-bottom: 1px dashed #c4bfa8; background: #faf8ee; }
.dv-btn { border-radius: 0; border: 2px solid #1f231d; }
.dv-hero h1 { font-family: "IBM Plex Mono", monospace; }`,
    author: 'Tabitha Onken',
    createdAt: '2026-07-29',
    popularity: 74,
  },
  {
    id: 'scaffold',
    name: 'Scaffold',
    category: 'Brutalism',
    tags: ['construction', 'hazard', 'grid', 'under-construction'],
    description: 'Scaffold poles, hazard tape, and a grid honest enough to climb.',
    designPhilosophy:
      'The site is always under construction — and proud of it. Scaffold poles frame a visible grid, hazard yellow marks every work zone, and planks carry the content. Honesty over polish: you can see exactly how it stands.',
    colors: {
      primary: '#222222',
      secondary: '#f2c230',
      accent: '#8a877e',
      neutral: '#d8d5cd',
      background: '#ebe9e4',
      text: '#1c1c1c',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'IBM Plex Mono',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 68',
      lineHeights: 'Display 1.05, body 1.55',
      letterSpacing: 'Display 0.02em, tags 0.1em uppercase',
    },
    components: {
      primary:
        'Charcoal plate with a hazard-tape left edge (6px striped), 0px radius, plank text, weight 800; press drops 2px',
      secondary: 'Plank board button with 3px double pole border; hover tapes the top edge hazard',
      tertiary: 'Mono tag link in [brackets] that fills hazard on hover',
      radius: '0px; scaffolding is squared',
      hover: 'Tape stripes slide 12px, 200ms steps(4); presses drop 2px',
      cards: 'Plank boards: #f2f0ea with 3px double charcoal side rules and an end-grain top bar (#d8d5cd); hazard corner tag on featured',
      forms: 'Inspection fields: mono input with 2px charcoal border, hazard focus stripe on the left edge',
      navigation: 'Pole frame: double-ruled top bar with bracketed mono links; the active link tapes hazard',
      modals: 'Work-zone sheet with a hazard tape header and charcoal 3px frame, plank scrim rgba(28,28,28,.5)',
    },
    accent: '#f2c230',
    motif: 'pixel-grid',
    layout: 'centered',
    useCases: ['Events', 'SaaS', 'Education'],
    signatureCss: `
.dv-card { border-left: 3px double #1c1c1c; border-right: 3px double #1c1c1c; background: #f2f0ea; }
.dv-btn { border-radius: 0; }
.dv-btn-primary { border-left: 6px solid; border-image: repeating-linear-gradient(45deg,#f2c230 0 6px,#1c1c1c 6px 12px) 1; }`,
    author: 'Greta Stålhammar',
    createdAt: '2026-07-24',
    popularity: 72,
  },
]