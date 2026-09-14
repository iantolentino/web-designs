import type { DesignSystem } from '../types'

export const urbanDesigns: DesignSystem[] = [
  {
    id: 'blueprint-tech',
    name: 'Blueprint Tech',
    category: 'Professional',
    tags: ['blueprint', 'drafting', 'technical-drawing', 'cyanotype', 'engineering'],
    description: 'Cyanotype drafting table: grids, dimensions, annotations.',
    designPhilosophy:
      'Every interface is a drawing that has not been built yet. Cyanotype paper, drafting grids, dimension lines with arrowheads, and annotation labels in drafting caps. Engineering romance — the beauty of the plan. For architecture tools, engineering software, and B2B products that sell precision.',
    designDetails:
      'Cyanotype #123a5c-family canvas with white drafting lines (grid + dimension marks), IBM Plex Mono for annotations, IBM Plex Sans body. Dimension lines (|←→|) annotate components themselves. Dashed cut-lines, section markers (A, B, C in circles), and a title block in the footer like real drawings. White-on-blue throughout.',
    colors: {
      primary: '#4a9fd8',
      secondary: '#9db8cc',
      accent: '#ffd166',
      neutral: '#1b4a70',
      background: '#123a5c',
      text: '#eaf3fa',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '11 / 13 / 15 / 18 / 24 / 32 / 48',
      lineHeights: 'Display 1.15, body 1.6, annotations 1.4',
      letterSpacing: 'Annotations 0.08em uppercase, display -0.01em',
    },
    components: {
      primary: 'Solid #ffd166, blueprint text, radius 2px, padding 12px 28px, 600, uppercase 0.08em, 1px white border',
      secondary: '1px #eaf3fa border, transparent, white text',
      tertiary: 'White mono link with [SEE DETAIL] bracket label',
      radius: '2px — drafting is square',
      hover: 'Border thickens to 2px + dimension line draws above, 200ms',
      cards: 'Panels with corner registration marks ⊕ and dashed cut borders',
      forms: 'Mono inputs with white 1px borders, yellow focus',
      navigation: 'Title-block bar: project name, sheet number, revision date',
      modals: 'Detail-callout panel with leader line to origin',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 48',
      grid: 'Visible 24px drafting grid underlies all sections',
    },
    motion: {
      pageLoad: 'Lines draw (scaleX/scaleY) 400ms like a plotter printing',
      hoverStates: '200ms border/dimension shifts',
      transitions: 'Mechanical, 200ms',
      scroll: 'Grid stays fixed; sections align to it precisely',
    },
    accessibility:
      '#eaf3fa on #123a5c 10.8:1; blueprint text on yellow 9.4:1. Focus 2px yellow outline. Dimension lines aria-hidden (decorative annotations). Grid is background, never content.',
    responsive:
      'Drafting grid opacity reduces under 768px. Title block condenses to sheet number only. Annotations hide under 640px (content stays). Display clamps 1.875rem→3rem.',
    codeExample:
      '<div class="sheet">\n  <div class="tblock">DWG-042 · REV C · 2026-07-28</div>\n  <h1>PLAN 07 — <em>STRUCTURE</em></h1>\n  <span class="dim">|◄— 1200px —►|</span>\n  <button class="btn-approve">APPROVE</button>\n</div>',
    accent: '#4a9fd8',
    motif: 'swiss-grid',
    layout: 'dashboard',
    useCases: ['AI/ML', 'SaaS', 'Education'],
    signatureCss: `
.dv-stage { background-image: linear-gradient(rgba(234,243,250,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,243,250,.06) 1px, transparent 1px); background-size: 24px 24px; }
.dv-card { border: 1px dashed rgba(234,243,250,.35); background: rgba(18,58,92,.6); }
.dv-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #9db8cc; }
.dv-btn { text-transform: uppercase; letter-spacing: .08em; }`,
    author: 'Greta Hansen',
    createdAt: '2026-07-28',
    popularity: 77,
  },
  {
    id: 'graffiti-street',
    name: 'Graffiti Street',
    category: 'Creative',
    tags: ['street-art', 'urban', 'spray', 'sticker', 'rebellious'],
    description: 'Spray paint, stickers, and concrete energy.',
    designPhilosophy:
      'The wall at 2am. Layered tags, paste-up posters, spray textures, and stickers half-peeled. Rebellious but composed — the chaos has rhythm. For streetwear, music venues, skate brands, and anyone whose audience flinches at corporate gloss.',
    designDetails:
      'Concrete #2a2a2a canvas with spray-tag gradients (Permanent Marker font for accent words), sticker cards (white border + drop shadow + slight rotation), and torn-paper edges via clip-path polygons. Neon spray accents (#f5f5f5, lime, hot pink). Be Vietnam Pro body; Permanent Marker display moments.',
    colors: {
      primary: '#e6e6e6',
      secondary: '#c6ff4e',
      accent: '#ff3e8a',
      neutral: '#3d3d3d',
      background: '#2a2a2a',
      text: '#f5f5f5',
    },
    typography: {
      displayFont: 'Permanent Marker',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 58',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display 0.02em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid lime #c6ff4e, concrete text, radius 4px, padding 14px 30px, 800, shadow 4px 4px 0 rgba(0,0,0,.5), slight -1deg rotation',
      secondary: 'White 2px border sticker style, transparent bg',
      tertiary: 'Marker-font link with spray underline on hover',
      radius: '4px buttons, 6px sticker cards',
      hover: 'Sticker peels: rotate increases + shadow grows, 200ms',
      cards: 'Sticker cards: white 3px border, rotation ±2°, hard shadow, torn tape corners',
      forms: 'Dark inputs with white 2px borders, lime focus',
      navigation: 'Paste-up bar with tag-style logo, sticker links',
      modals: 'Poster panel with torn edges and wheat-paste texture',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 104',
      paddingScale: '20 / 32 / 48',
      grid: 'Deliberately collaged; clusters align on load',
    },
    motion: {
      pageLoad: 'Stickers slap in with rotation and scale, staggered 80ms',
      hoverStates: 'Peel physics 200ms; spray underlines draw',
      transitions: 'Fast, physical, 200ms',
      scroll: 'Posters parallax at different speeds (0.9x–1.05x)',
    },
    accessibility:
      '#f5f5f5 on #2a2a2a 12.9:1; concrete on lime 12.1:1. Focus 3px lime outline. Marker font ≥24px only. Rotations stay ≤3° — hit areas remain usable. Springs off under reduced-motion.',
    responsive:
      'Collage stacks under 720px; rotations reduce to ±1°. Marker display clamps 2rem→3.25rem. Torn edges simplify under 640px.',
    codeExample:
      '<section class="wall">\n  <h1><span class="tag">FRESH</span> PAINT</h1>\n  <p>Drops every friday. No restocks.</p>\n  <button class="btn-spray">Cop the drop</button>\n</section>',
    accent: '#c6ff4e',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['E-commerce', 'Music', 'Events'],
    signatureCss: `
.dv-hero .tag { color: #c6ff4e; text-shadow: 2px 2px 0 #ff3e8a; }
.dv-card { transform: rotate(-1.5deg); border: 3px solid #fff; box-shadow: 5px 5px 0 rgba(0,0,0,.5); transition: transform .2s; }
.dv-card:nth-child(even) { transform: rotate(1.5deg); }
.dv-card:hover { transform: rotate(0deg) scale(1.02); }
.dv-logo { font-family: 'Permanent Marker', cursive; }`,
    author: 'Bea Solano',
    createdAt: '2026-08-03',
    popularity: 85,
  },
  {
    id: 'pop-comics',
    name: 'Pop Comics',
    category: 'Playful',
    tags: ['comics', 'halftone', 'onomatopoeia', 'panels', 'pop-art'],
    description: 'KA-POW panels: halftone dots, word balloons, action.',
    designPhilosophy:
      'The comic panel as interface. Halftone dot shading, bold ink outlines, word balloons for testimonials, and onomatopoeia bursting from corners. Lichtenstein primary palette. Every section is a panel; every CTA is a POW. For kids’ media, event promos, and brands with effervescent energy.',
    designDetails:
      'Paper white with primary red/yellow/blue (Lichtenstein triad) and heavy 3px ink outlines. Bangers display font; Nunito body. Halftone dot fills (radial-gradient repeating), word balloons (rounded boxes with CSS triangle tails), action bursts (clip-path star polygons). Panel gutters are thick black bars.',
    colors: {
      primary: '#e63946',
      secondary: '#f1c40f',
      accent: '#3557a7',
      neutral: '#f0f0e8',
      background: '#fdfdf8',
      text: '#141414',
    },
    typography: {
      displayFont: 'Bangers',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 22 / 28 / 40 / 64',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0.04em, balloons 0.02em',
    },
    components: {
      primary: 'Solid #e63946, white text, radius 8px, padding 14px 30px, 800, 3px #141414 border, shadow 5px 5px 0 #141414',
      secondary: 'Solid #f1c40f, ink text, same border and shadow',
      tertiary: 'Ink 800 link with wavy underline on hover',
      radius: '8px panels, 999px balloons',
      hover: 'Shadow grows + element rotates -2deg (action!), 180ms',
      cards: 'Comic panels: white, 3px ink border, halftone corner shading, gutter margins',
      forms: 'White inputs with 3px ink borders, red focus ring',
      navigation: 'Panel-gutter bar: black bar with white links, red active',
      modals: 'Word balloon with pointer tail and burst background',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 104',
      paddingScale: '20 / 32 / 48',
      grid: 'Comic page: 2–3 panel rows with 10px black gutters',
    },
    motion: {
      pageLoad: 'Panels slide in from alternating sides, 300ms staggered',
      hoverStates: 'Action-burst: rotate + shadow grow 180ms',
      transitions: 'Snap like page turns, 180–250ms',
      scroll: 'Bursts explode (scale in) at 20% visibility',
    },
    accessibility:
      'Ink on white 18.0:1; white on red 4.2:1 at 800 weight. Focus 3px ink outline. Halftones/bursts aria-hidden. Onomatopoeia have aria-labels ("Success!"). Rotations small and slow.',
    responsive:
      'Panels stack under 720px (gutters persist as horizontal bars). Bangers clamps 2.25rem→4rem (it is narrow). Shadows shrink to 3px mobile.',
    codeExample:
      '<div class="panel">\n  <h1>KA-POW!</h1>\n  <p class="balloon">Your ideas, but louder.</p>\n  <button class="btn-pow">ZOOM IN →</button>\n</div>',
    accent: '#e63946',
    motif: 'hard-shadows',
    layout: 'magazine',
    useCases: ['Kids', 'Events', 'Gaming'],
    signatureCss: `
.dv-card { border: 3px solid #141414; box-shadow: 5px 5px 0 #141414; background-image: radial-gradient(rgba(20,20,20,.12) 1.5px, transparent 1.5px); background-size: 10px 10px; }
.dv-btn { border: 3px solid #141414 !important; box-shadow: 5px 5px 0 #141414 !important; transition: transform .18s, box-shadow .18s; }
.dv-btn:hover { transform: rotate(-2deg); box-shadow: 7px 7px 0 #141414 !important; }
.dv-logo { font-family: 'Bangers', cursive; letter-spacing: .04em; }
.dv-hero h1 { text-shadow: 4px 4px 0 #f1c40f; }`,
    author: 'Bea Solano',
    createdAt: '2026-08-10',
    popularity: 87,
  },
  {
    id: 'festival-vivid',
    name: 'Festival Vivid',
    category: 'Maximalism',
    tags: ['festival', 'concert', 'neon-dayglo', 'poster', 'loud'],
    description: 'Dayglo poster wall: clashing neon, big type, wristbands.',
    designPhilosophy:
      'The poster wall outside the venue: layers of dayglo flyers, each screaming, together singing. Clashing brights that somehow harmonize, type so big it blocks the sun, and energy you can hear. For festivals, club nights, tour merch, and event platforms of every decibel.',
    designDetails:
      'Near-black stage #121212 with dayglo layers: hot pink, acid green, electric yellow, cyan — each section block gets one. Archivo Black display at enormous sizes; Be Vietnam Pro body. Wristband stripes (repeating gradients) as dividers, ticket-stub perforated edges (dashed borders + circle notches), and lineup-style stacked typography.',
    colors: {
      primary: '#ff2fb3',
      secondary: '#a4ff2f',
      accent: '#ffe927',
      neutral: '#232323',
      background: '#121212',
      text: '#f6f6f2',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 21 / 28 / 42 / 72',
      lineHeights: 'Display 0.95, body 1.55',
      letterSpacing: 'Display -0.01em, labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #ff2fb3, black text, radius 999px, padding 15px 34px, 800, uppercase, shadow 0 0 24px rgba(255,47,179,.5)',
      secondary: '1px #a4ff2f border, transparent, lime text, uppercase 800',
      tertiary: 'White 800 link with ticket-slash decoration on hover',
      radius: 'Pills for buttons, 0 for poster blocks',
      hover: 'Glow + invert to section color, 200ms; ticket notches widen',
      cards: 'Poster blocks (solid dayglo bg, black text) with perforated stub edges',
      forms: 'Dark inputs, 2px dayglo borders, glow focus ring',
      navigation: 'Wristband stripe bar (4-color repeating gradient) with black logo plate',
      modals: 'Ticket-stub panel with perforation line and barcode footer',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 120',
      paddingScale: '24 / 40 / 64',
      grid: 'Lineup stacked full-width; 12-col for info blocks',
    },
    motion: {
      pageLoad: 'Posters slam up (scale 1.15→1 + fade) staggered 70ms',
      hoverStates: 'Glow/invert 200ms, impatient like a crowd',
      transitions: 'Fast 150–250ms',
      scroll: 'Lineup rows reveal with slight y-offset; wristbands scroll horizontally',
    },
    accessibility:
      '#f6f6f2 on #121212 17.3:1; black on dayglo pink 8.1:1, on lime 12.9:1. Focus 3px cyan outline. Never two dayglos on adjacent text. Flashes none; glows static under reduced-motion.',
    responsive:
      'Poster blocks stack full-width under 720px. Archivo Black clamps 2.5rem→4.5rem. Wristband bar condenses. Ticket notches stay (identity).',
    codeExample:
      '<section class="mainstage">\n  <p class="act">SATURDAY // MAIN STAGE</p>\n  <h1>NEON<br/>DUST</h1>\n  <button class="btn-wrist">Get wristband</button>\n</section>',
    accent: '#ff2fb3',
    motif: 'gradient-hero',
    layout: 'hero-cards',
    useCases: ['Events', 'Music', 'Gaming'],
    signatureCss: `
.dv-nav { background: repeating-linear-gradient(90deg, #ff2fb3 0 40px, #a4ff2f 40px 80px, #ffe927 80px 120px, #01cdfe 120px 160px); padding: 4px; }
.dv-nav .dv-logo { background: #121212; padding: 6px 12px; border-radius: 4px; }
.dv-stats-band { background: repeating-linear-gradient(-45deg, rgba(255,47,179,.15) 0 20px, rgba(164,255,47,.15) 20px 40px, rgba(255,233,39,.15) 40px 60px); }
.dv-btn-primary { text-transform: uppercase; }
.dv-hero h1 { text-shadow: 5px 5px 0 rgba(164,255,47,.7); }`,
    author: 'Riko Tanaka',
    createdAt: '2026-08-17',
    popularity: 86,
    trending: true,
  },
]
