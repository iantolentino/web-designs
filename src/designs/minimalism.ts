import type { DesignSystem } from '../types'

export const minimalismDesigns: DesignSystem[] = [
  {
    id: 'minimalist-tech',
    name: 'Minimalist Tech',
    category: 'Minimalism',
    tags: ['saas', 'clean', 'product', 'modern', 'light'],
    description: 'Clean, refined tech aesthetic for modern SaaS products.',
    designPhilosophy:
      'Restraint is the feature. Every element earns its place: one accent color carries the entire brand, whitespace does the heavy lifting, and typography — not decoration — creates hierarchy. The page should feel like a well-lit studio: calm, precise, and quietly confident.',
    colors: {
      primary: '#0d9488',
      secondary: '#0f172a',
      accent: '#5eead4',
      neutral: '#f1f5f9',
      background: '#ffffff',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 24 / 32 / 48 / 72 (fluid between breakpoints)',
      lineHeights: 'Headings 1.1, body 1.6, labels 1.2',
      letterSpacing: 'Display -0.02em, body 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Solid #0d9488, white text, radius 8px, padding 12px 24px, weight 600, subtle inner top highlight',
      secondary: '1px #cbd5e1 border, transparent bg, #0f172a text, same metrics',
      tertiary: 'Text-only link in #0d9488 with animated underline on hover',
      radius: '8px (buttons/inputs), 12px (cards), 999px (pills)',
      hover: 'Primary darkens 8% and lifts 1px; secondary border turns #0d9488',
      cards: 'White, 1px #e2e8f0 border, radius 12px, padding 24px, shadow 0 1px 2px rgba(15,23,42,.06), hover raises to 0 8px 24px rgba(15,23,42,.08)',
      forms:
        'Inputs 44px tall, 1px #cbd5e1 border, radius 8px, focus ring 3px rgba(13,148,136,.25), labels 13px/600 above the field',
      navigation:
        '72px sticky top bar, blurred white background, wordmark left, 4 text links center, primary button right',
      modals: 'Radius 16px, dimmed backdrop rgba(15,23,42,.5), scale-in 0.98→1 over 200ms',
    },
    accent: '#0d9488',
    motif: 'underline-accent',
    layout: 'split-hero',
    useCases: ['SaaS', 'AI/ML', 'Fintech', 'Productivity'],
signatureCss: `
.dv-hero h1 { position: relative; display: inline-block; }
.dv-hero h1::after { content: ''; position: absolute; left: 2px; right: 2px; bottom: 6px; height: 10px; background: rgba(94,234,212,.45); z-index: -1; transform: skewX(-8deg); }
.dv-nav { backdrop-filter: blur(8px); }
.dv-card:hover { transform: translateY(-2px); }`,
    author: 'Mara Lin',
    createdAt: '2026-01-15',
    popularity: 98,
    trending: true,
  },
  {
    id: 'zen-minimal',
    name: 'Zen Minimal',
    category: 'Minimalism',
    tags: ['calm', 'wellness', 'spacious', 'warm-minimal'],
    description: 'Breathing-room minimalism with warm paper tones.',
    designPhilosophy:
      'A digital garden path. Warm off-white paper, ink-soft text, and enormous negative space let the reader slow down. The interface almost disappears — content sits on the page the way stones sit in sand, each with room to be seen.',
    colors: {
      primary: '#5a7263',
      secondary: '#8a9a8e',
      accent: '#c4703f',
      neutral: '#ece7dd',
      background: '#faf7f0',
      text: '#2b2b27',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 28 / 40 / 56',
      lineHeights: 'Display 1.15, body 1.75',
      letterSpacing: 'Display -0.01em, labels 0.12em uppercase 11px',
    },
    components: {
      primary: 'Solid #5a7263, #faf7f0 text, radius 2px, padding 14px 32px, weight 500, no shadow',
      secondary: 'Hairline 1px #2b2b27 border, transparent bg, quiet hover fill',
      tertiary: 'Underlined text link, underline offset 6px, moss on hover',
      radius: '2px everywhere — nearly square, softly resolved',
      hover: 'Fill crossfades 300ms; links shift color, never underline-thicken',
      cards: 'Borderless — 1px top rule #d8d2c4, generous 32px padding, no shadow',
      forms: 'Bottom-border-only inputs on paper bg, moss focus border 2px',
      navigation: 'Single row, 24px padding, tiny uppercase letter-spaced links, active link moss',
      modals: 'Full-bleed paper sheet sliding up 16px, hairline top rule',
    },
    accent: '#5a7263',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Health', 'Education', 'Portfolio'],
signatureCss: `
.dv-hero h1 em { font-style: italic; font-weight: 400; color: #5a7263; }
.dv-section + .dv-section { border-top: 1px solid rgba(43,43,39,.12); }
.dv-nav a { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }`,
    author: 'Ana Reyes',
    createdAt: '2026-02-02',
    popularity: 84,
  },
  {
    id: 'swiss-editorial',
    name: 'Swiss Editorial',
    category: 'Minimalism',
    tags: ['grid', 'typographic', 'international-style', 'magazine'],
    description: 'International-style grid, oversized numerals, red accents.',
    designPhilosophy:
      'The grid is the design. Strict 12-column order, flush-left ragged-right type, and one loud vermilion accent against near-black and paper. Content is numbered, aligned, and unapologetically typographic — ornament is a failure of structure.',
    colors: {
      primary: '#e63317',
      secondary: '#111111',
      accent: '#e63317',
      neutral: '#e8e6e1',
      background: '#f4f2ee',
      text: '#111111',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'Archivo',
      scale: '12 / 14 / 16 / 20 / 28 / 44 / 96 (numerals up to 160)',
      lineHeights: 'Display 0.95, body 1.5',
      letterSpacing: 'Display -0.03em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #111111, paper text, radius 0, padding 14px 28px, 700 weight, arrow suffix',
      secondary: '1px #111 border, transparent, 700, square corners',
      tertiary: 'Uppercase letter-spaced text link with vermilion index numeral',
      radius: '0 — everything square',
      hover: 'Background inverts instantly (no transition) — bold Swiss honesty',
      cards: '1px #111 border, square, internal 1px grid lines dividing content',
      forms: 'Square inputs with 2px #111 borders, labels as uppercase micro-type',
      navigation: 'Top rule 2px, wordmark left, numbered links (01 Work, 02 Studio)',
      modals: 'Square panel with 4px #111 border and hard offset shadow 8px 8px 0 #111',
    },
    accent: '#e63317',
    motif: 'swiss-grid',
    layout: 'magazine',
    useCases: ['News', 'Agency', 'Education'],
signatureCss: `
.dv-index { font-weight: 900; font-size: clamp(4rem, 12vw, 9rem); line-height: .85; color: #e63317; }
.dv-card { display: grid; grid-template-columns: 1fr 1px 1fr; }
.dv-card > .rule { background: #111; }
.dv-nav a:hover { background: #111; color: #f4f2ee; }`,
    author: 'Jonas Keller',
    createdAt: '2026-03-11',
    popularity: 88,
  },
  {
    id: 'soft-mono',
    name: 'Soft Mono',
    category: 'Minimalism',
    tags: ['monochrome', 'developer', 'quiet', 'greyscale'],
    description: 'Greyscale developer tooling calm with one amber spark.',
    designPhilosophy:
      'A terminal that learned manners. Greyscale surfaces, mono details, and hairline structure — then a single amber spark for the one action that matters. Built for developer tools whose users distrust color but respect clarity.',
    colors: {
      primary: '#b45309',
      secondary: '#27272a',
      accent: '#f59e0b',
      neutral: '#e4e4e7',
      background: '#fafafa',
      text: '#18181b',
    },
    typography: {
      displayFont: 'IBM Plex Mono',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 13 / 15 / 17 / 22 / 30 / 44',
      lineHeights: 'Display 1.15, body 1.65, mono 1.5',
      letterSpacing: 'Mono labels 0.06em, display -0.01em',
    },
    components: {
      primary: 'Solid #b45309, white text, radius 6px, padding 10px 20px, 600, mono uppercase 13px',
      secondary: '1px #d4d4d8 border on #fafafa, mono 13px uppercase',
      tertiary: 'Mono text link with `>` prefix that shifts 2px right on hover',
      radius: '6px components, 10px cards, 4px code blocks',
      hover: '150ms border-color darken; primary warms one step (#d97706)',
      cards: '#ffffff, 1px #e4e4e7, radius 10px, mono header row with grey divider',
      forms: 'Inputs with mono placeholder text, 1px borders, focus border #b45309 + glow 0 0 0 3px rgba(245,158,11,.2)',
      navigation: '52px bar, bottom 1px border, mono breadcrumb, active item amber underline 2px',
      modals: 'Radius 10px, header row mono uppercase, backdrop rgba(24,24,27,.55)',
    },
    accent: '#b45309',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['AI/ML', 'SaaS', 'Productivity'],
signatureCss: `
.dv-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: #71717a; }
.dv-tertiary:hover::before { transform: translateX(2px); }
.dv-card h4 { border-bottom: 1px solid #e4e4e7; padding-bottom: 8px; }`,
    author: 'Priya Nair',
    createdAt: '2026-04-08',
    popularity: 76,
  },
  {
    id: 'graphite-focus',
    name: 'Graphite Focus',
    category: 'Minimalism',
    tags: ['focus', 'graphite', 'docs', 'contrast'],
    description: 'One accent, zero noise — graphite discipline for deep-work interfaces.',
    designPhilosophy:
      'Minimalism in service of attention. A graphite paper field, hairline rules, and a single iris accent that appears only where the eye should land. Everything else earns its pixels or leaves.',
    colors: {
      primary: '#4f46e5',
      secondary: '#1c1917',
      accent: '#a8a29e',
      neutral: '#e7e5e4',
      background: '#f5f5f4',
      text: '#1c1917',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 56',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display -0.01em, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Iris #4f46e5 fill, 2px radius, paper text, weight 600; hover deepens to #4338ca with no movement',
      secondary: 'Transparent panel button with 1px #d6d3d1 border; hover fills stone 8%',
      tertiary: 'Ink underline link with a leading → arrow that nudges 2px',
      radius: '2px controls, 0px cards — pure slab geometry',
      hover: 'Color-only changes, 120ms ease; nothing moves, nothing bounces',
      cards:
        'Flat #fbfaf9 panels with 1px #e0ddd8 rules and 24px padding; a 3px iris left edge marks the active card',
      forms: 'Hairline-bottom inputs on paper; focus paints the rule iris and shows a 2px caret bar',
      navigation: 'Left rail 220px with mono section labels; the active item carries the iris tick',
      modals: 'Paper sheet with 1px ink border and stone scrim rgba(28,25,23,.4)',
    },
    accent: '#4f46e5',
    motif: 'mono-labels',
    layout: 'asymmetric',
    useCases: ['Productivity', 'SaaS', 'AI/ML'],
    signatureCss: `
.dv-btn { border-radius: 2px; transition: background .12s ease; }
.dv-card { border-left: 3px solid transparent; transition: border-color .12s ease; }
.dv-card:hover { border-left-color: #4f46e5; }
.dv-kicker { font-family: "IBM Plex Mono", monospace; letter-spacing: .08em; text-transform: uppercase; font-size: 11px; }`,
    author: 'Ines Kolar',
    createdAt: '2026-08-14',
    popularity: 81,
  },
  {
    id: 'linen-quiet',
    name: 'Linen Quiet',
    category: 'Minimalism',
    tags: ['linen', 'warm', 'editorial', 'calm'],
    description: 'Undyed-linen calm for words that prefer to whisper.',
    designPhilosophy:
      'Quiet as a material, not a mood. Ecru linen fields, espresso ink, and a single sage thread — the palette of an unbleached bookmark. Type sets the pace: a roman display, generous measure, and margins that refuse to hurry.',
    colors: {
      primary: '#b08968',
      secondary: '#4a3f35',
      accent: '#6f7d6a',
      neutral: '#e4dccb',
      background: '#f2ede4',
      text: '#3c342b',
    },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 54',
      lineHeights: 'Display 1.2, body 1.7',
      letterSpacing: 'Display 0.01em, small caps 0.14em',
    },
    components: {
      primary:
        'Clay #b08968 fill, 2px radius, cream text, weight 600, letterspaced 0.04em; hover darkens to #9a7454',
      secondary: 'Linen button with 1px flax border and espresso text; hover fills cream',
      tertiary: 'Espresso small-caps link with clay thread underline',
      radius: '2px buttons, 3px cards — pressed-paper edges',
      hover: 'Tone steps only, 160ms ease; the page never jumps',
      cards: 'Cream #faf6ec panels with 1px #e0d8c4 rules, 3px radius, 28px padding; corner thread-stitch dots at 4px',
      forms: 'Bottom-rule inputs in flax; focus re-inks the rule espresso and floats a small-caps label',
      navigation: 'Centered masthead with small-caps links; the active link carries a clay thread underline',
      modals: 'Cream sheet with double 1px flax frame, 6px inset, espresso scrim rgba(60,52,43,.35)',
    },
    accent: '#b08968',
    motif: 'underline-accent',
    layout: 'centered',
    useCases: ['Travel', 'Photography', 'Nonprofit'],
    signatureCss: `
.dv-btn { border-radius: 2px; letter-spacing: .04em; }
.dv-card { border-radius: 3px; border: 1px solid #e0d8c4; background: #faf6ec; }
.dv-hero h1 { font-variant: small-caps; letter-spacing: .02em; }`,
    author: 'Marguerite Oyelaran',
    createdAt: '2026-08-02',
    popularity: 76,
  },
  {
    id: 'system-cool',
    name: 'System Cool',
    category: 'Minimalism',
    tags: ['os', 'workspace', 'cobalt', 'chrome'],
    description: 'The quiet OS chrome your apps always wished they had.',
    designPhilosophy:
      'An operating system for the browser tab. Every component borrows desktop OS grammar — window dots, menu bars, tool palettes — then calms it down with ice-blue surfaces and one cobalt action color. Familiar structure, zero grit.',
    colors: {
      primary: '#3b82f6',
      secondary: '#132437',
      accent: '#94a3b8',
      neutral: '#dbe4ec',
      background: '#f1f5f9',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 22 / 30 / 48',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Display 0, UI labels 0.02em',
    },
    components: {
      primary:
        'Cobalt #3b82f6 6px-radius button, white text, weight 600; active presses to inset shadow rgba(15,23,42,.18)',
      secondary: 'White window button with 1px #cbd5e1 border; hover tints cobalt 6%',
      tertiary: 'Slate text link with dotted underline that solidifies on hover',
      radius: '6px controls, 8px windows, 999px status dots',
      hover: 'Window buttons tint 120ms; menus open 160ms with a 4px drop',
      cards: 'Window panels: white, 8px radius, 1px #dbe4ec frame, 24px title bar with traffic dots and a mono filename',
      forms: 'Inset inputs: white on #eef3f7 field, 1px #cbd5e1, focus ring 2px cobalt at 25%',
      navigation: 'Top menu bar 40px with a mono app name, centered tabs, and a right clock chip',
      modals: 'Centered window with 1px frame, 12px header bar, steel scrim rgba(15,23,42,.45)',
    },
    accent: '#3b82f6',
    motif: 'pill-nav',
    layout: 'dashboard',
    useCases: ['Productivity', 'SaaS', 'Fintech'],
    signatureCss: `
.dv-card { border-radius: 8px; border: 1px solid #dbe4ec; }
.dv-card::before { content: ""; display: block; height: 22px; margin: -1px -1px 12px; border-radius: 8px 8px 0 0; background: linear-gradient(#f8fafc,#eef2f6); border-bottom: 1px solid #e2e8f0; }
.dv-btn { border-radius: 6px; }`,
    author: 'Danil Vetrov',
    createdAt: '2026-08-21',
    popularity: 83,
    trending: true,
  },
  {
    id: 'ivory-gallery',
    name: 'Ivory Gallery',
    category: 'Minimalism',
    tags: ['gallery', 'white-cube', 'art', 'brass'],
    description: 'A white cube for work that deserves wall labels.',
    designPhilosophy:
      'The portfolio as gallery hang. Ivory walls, generous void, brass label plates, and nothing between the viewer and the work. Every section behaves like a room: one piece, one wall label, one considered walk.',
    colors: {
      primary: '#b0895a',
      secondary: '#1b1a17',
      accent: '#7d786c',
      neutral: '#ece9e0',
      background: '#fdfcf9',
      text: '#1b1a17',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Karla',
      scale: '12 / 14 / 17 / 21 / 28 / 40 / 72',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display 0, labels 0.16em uppercase',
    },
    components: {
      primary:
        'Brass #b0895a plate button, ink text, 0px radius, weight 600, letterspaced 0.12em uppercase; hover warms to #c49b6c',
      secondary: 'Ivory button with 1px ink border; hover inverts to ink with ivory text',
      tertiary: 'Wall-label link: small-caps caption with a brass underline that brightens',
      radius: '0px everywhere — the cube has no corners to soften',
      hover: 'Plate warms 200ms; frames gain a 1px brass mat on hover',
      cards: 'Framed works: 1px ink frame, 16px ivory mat, wall label beneath in italic serif',
      forms: 'Bottom-ruled ivory fields with a brass focus plate; labels sit outside as small caps',
      navigation: 'Thin top rule with small-caps room names; the current room is brass',
      modals: 'Full-wall overlay in ivory with a single centered frame and ink scrim rgba(27,26,23,.5)',
    },
    accent: '#b0895a',
    motif: 'soft-shadows',
    layout: 'editorial',
    useCases: ['Photography', 'Portfolio', 'Fashion'],
    signatureCss: `
.dv-card { border: 1px solid #1b1a17; padding: 16px; background: #fffefb; }
.dv-card:hover { outline: 1px solid #b0895a; outline-offset: 4px; }
.dv-btn { border-radius: 0; text-transform: uppercase; letter-spacing: .12em; font-size: 12px; }`,
    author: 'Vera Lindqvist',
    createdAt: '2026-07-19',
    popularity: 79,
  },
]