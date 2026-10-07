import type { DesignSystem } from '../types'

export const maximalismDesigns: DesignSystem[] = [
  {
    id: 'neon-maximalist',
    name: 'Neon Maximalist',
    category: 'Maximalism',
    tags: ['neon', 'night', 'gaming', 'energy', 'dark'],
    description: 'Midnight canvas, neon voltage, zero restraint.',
    designPhilosophy:
      'The page is an arcade at 2am. Deep space-black absorbs everything while neon magenta, cyan, and lime punch through with electric glow. More is the strategy: layered gradients, glowing borders, animated marquee strips. If it feels like too much, add one more layer — then stop exactly there.',
    colors: {
      primary: '#ff2e88',
      secondary: '#00e5ff',
      accent: '#a3ff12',
      neutral: '#1a1a2e',
      background: '#0a0a14',
      text: '#f2f2ff',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64 / 88',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display -0.03em, neon labels 0.14em uppercase',
    },
    components: {
      primary:
        'Linear gradient 90deg #ff2e88→#7b2eff, white text, radius 999px, padding 14px 32px, 700, halo shadow 0 0 24px rgba(255,46,136,.55)',
      secondary: 'Transparent, 2px #00e5ff border, cyan text, glow shadow on hover',
      tertiary: 'Uppercase neon text link, letter-spaced, glow pulses under it',
      radius: 'Pills for buttons, 16px cards, 20px modals',
      hover: 'Glow intensifies 30%, card borders brighten, slight scale 1.02 with 220ms bounce',
      cards: '#12121f with 1px rgba(0,229,255,.25) border, radius 16px, inner glow top edge, hover lifts 4px with stronger glow',
      forms: 'Dark inputs #16162a, 1px rgba(255,255,255,.15) border, neon focus ring, placeholder #8a8ab0',
      navigation: 'Floating pill nav, blur backdrop, neon border, gradient logo text',
      modals: 'Dark glass panel rgba(18,18,31,.9) blur 20px, neon gradient border, scale-in',
    },
    accent: '#ff2e88',
    motif: 'gradient-hero',
    layout: 'hero-cards',
    useCases: ['Gaming', 'Music', 'Events'],
signatureCss: `
.dv-hero h1 { background: linear-gradient(90deg, #ff2e88, #00e5ff, #a3ff12); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-marquee { overflow: hidden; white-space: nowrap; border-block: 1px solid rgba(0,229,255,.3); }
.dv-marquee span { display: inline-block; animation: dv-marq 18s linear infinite; }
@keyframes dv-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.dv-hero { background: radial-gradient(600px 300px at 70% 10%, rgba(123,46,255,.35), transparent 70%); }`,
    author: 'Riko Tanaka',
    createdAt: '2026-02-14',
    popularity: 96,
    trending: true,
  },
  {
    id: 'editorial-maximalist',
    name: 'Editorial Maximalist',
    category: 'Maximalism',
    tags: ['magazine', 'art-direction', 'typographic', 'contrast'],
    description: 'A fashion-magazine spread as a website.',
    designPhilosophy:
      'Print energy, web-native. Oversized display serif set at dramatic scale, columns that break the grid deliberately, giant quotation bands, and a strict-but-broken magazine rhythm. Every scroll is a page turn; every element demands to be read.',
    colors: {
      primary: '#e63946',
      secondary: '#ffd166',
      accent: '#111111',
      neutral: '#f0ebe2',
      background: '#faf6ef',
      text: '#111111',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 60 / 144',
      lineHeights: 'Display 0.95, body 1.5, quotes 1.1',
      letterSpacing: 'Display -0.02em, captions 0.08em uppercase',
    },
    components: {
      primary: 'Solid #111, paper text, radius 0, padding 16px 36px, 800 weight, uppercase',
      secondary: 'Solid #ffd166, #111 text, square, same metrics',
      tertiary: 'Underlined Archivo 700 with thick 3px underline on hover',
      radius: '0 — sharp print edges',
      hover: 'Full color inversion on cards and buttons, instant, print-like',
      cards: 'Paper cards with 2px #111 border and hard shadow 6px 6px 0 #111',
      forms: 'Square inputs, 2px bottom borders, bold Archivo labels above',
      navigation: 'Masthead-style: oversized logo center, thin rule, issue number + links row',
      modals: 'Full-width magazine panel sliding down with 4px border',
    },
    accent: '#e63946',
    motif: 'quote-band',
    layout: 'magazine',
    useCases: ['News', 'Fashion', 'Agency'],
signatureCss: `
.dv-band { background: #111; color: #faf6ef; font-family: 'Fraunces', serif; font-size: clamp(2rem, 6vw, 4.5rem); line-height: 1.05; padding: 48px 24px; text-align: center; font-style: italic; }
.dv-card:hover { background: #111; color: #faf6ef; }
.dv-card:hover .dv-price { color: #ffd166; }`,
    author: 'Camille Roth',
    createdAt: '2026-03-05',
    popularity: 82,
  },
  {
    id: 'playful-maximalist',
    name: 'Playful Maximalist',
    category: 'Maximalism',
    tags: ['candy', 'stickers', 'colorful', 'wacky', 'fun'],
    description: 'A candy shop exploded and we kept every piece.',
    designPhilosophy:
      'Joy is a feature. Sticker-style cards at jaunty angles, a rainbow of buttons, squishy hover physics, and confetti emoji accents. The layout wobbles on purpose — but every interactive element still lands exactly where your cursor expects.',
    colors: {
      primary: '#ff5da2',
      secondary: '#ffd23f',
      accent: '#2ec4b6',
      neutral: '#fff6ec',
      background: '#fff6ec',
      text: '#2b2140',
    },
    typography: {
      displayFont: 'Be Vietnam Pro',
      bodyFont: 'Be Vietnam Pro',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 60 / 84',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display -0.01em; stickers 0.06em uppercase',
    },
    components: {
      primary: 'Solid #ff5da2, white text, radius 999px, padding 14px 30px, 800, shadow 0 4px 0 #c22e74',
      secondary: 'Solid #ffd23f, #2b2140 text, shadow 0 4px 0 #d9a616',
      tertiary: 'Rounded text button with emoji prefix, underline squiggle on hover',
      radius: 'Everything pill-shaped or 20px',
      hover: 'Squish: scale(0.97) press then overshoot 1.03, 280ms spring',
      cards: 'White, radius 20px, 3px #2b2140 border, rotated ±2°, shadow 6px 6px 0 rgba(43,33,64,.9); hover straightens to 0°',
      forms: 'Pill inputs with 3px borders, focus rainbow ring (box-shadow spread)',
      navigation: 'Rainbow underline row; logo has a wobble animation on hover',
      modals: 'White rounded sheet with tape-strip decoration at top',
    },
    accent: '#ff5da2',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Kids', 'Events', 'E-commerce'],
signatureCss: `
.dv-card { --rot: 2deg; transform: rotate(var(--rot)); transition: transform .28s cubic-bezier(.34,1.56,.64,1); }
.dv-card:hover { transform: rotate(0deg) scale(1.02); }
.dv-card:nth-child(even) { --rot: -2deg; }
.dv-hero h1 span { display: inline-block; animation: dv-wobble 2.4s ease-in-out infinite; }
.dv-hero h1 span:nth-child(2) { animation-delay: .2s; }
@keyframes dv-wobble { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }`,
    author: 'Bea Solano',
    createdAt: '2026-01-28',
    popularity: 90,
    trending: true,
  },
  {
    id: 'baroque-punk',
    name: 'Baroque Punk',
    category: 'Maximalism',
    tags: ['ornate', 'dark', 'gold', 'dramatic', 'goth-romance'],
    description: 'Baroque drama punked with studs, gold leaf, and cathedral shadows.',
    designPhilosophy:
      'Maximalism with a chain on. Sculpted ornament — flourishes, filigree, gold leaf — crashes into studs, boot-black leather, and cathedral shadow. The page behaves like an illuminated manuscript printed in a mosh pit: reverent structure, riotous surface. Every scroll should feel like turning a heavy page.',
    colors: {
      primary: '#7a1f2b',
      secondary: '#14100c',
      accent: '#d4af37',
      neutral: '#2a211a',
      background: '#1a1512',
      text: '#f3e9d7',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 20 / 26 / 38 / 84',
      lineHeights: 'Display 1.02, body 1.65',
      letterSpacing: 'Display -0.01em, flourish labels 0.2em uppercase',
    },
    components: {
      primary:
        'Gold #d4af37 gradient bar, ink text, radius 2px, padding 14px 34px, weight 800, flourish corner marks',
      secondary: '1px #d4af37 border on transparent, parchment text, hover fills gold 15%',
      tertiary: 'Underlined parchment link with ✦ prefix, gold on hover',
      radius: '2px surfaces, 4px cards — near-square, carved',
      hover: 'Gold sheen sweeps across 400ms; cards tilt 0.6deg toward cursor',
      cards:
        '#2a211a, 1px rgba(212,175,55,.4) border, radius 4px, inner 12px double-rule frame, padding 26px, shadow 0 18px 40px rgba(0,0,0,.5)',
      forms:
        'Inputs on ink, 1px dim-gold borders, parchment text, focus border full gold + label flips to small-caps gold',
      navigation: '96px bar with bottom double rule (3px gold over 1px ink gap), centered wordmark, small-caps links',
      modals: 'Cathedral panel: 2px gold frame inset 6px, oxblood backdrop 70%, slow 300ms rise',
    },
    accent: '#d4af37',
    stage: '#0e0b09',
    motif: 'gradient-hero',
    layout: 'hero-cards',
    useCases: ['Fashion', 'Music', 'Events'],
    signatureCss: `
.dv-hero h1 { background: linear-gradient(100deg, #d4af37, #f3e9d7 45%, #d4af37 70%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-card { position: relative; }
.dv-card::before { content: ''; position: absolute; inset: 6px; border: 1px solid rgba(212,175,55,.4); pointer-events: none; border-radius: 2px; }
.dv-kicker { color: #d4af37; }`,
    author: 'Rhiannon Vale',
    createdAt: '2026-08-18',
    popularity: 81,
    trending: true,
  },
  {
    id: 'collision-course',
    name: 'Collision Course',
    category: 'Maximalism',
    tags: ['clash', 'collage', 'loud', 'energetic'],
    description: 'Two palettes, one page — they collide mid-scroll and neither wins.',
    designPhilosophy:
      'Half this system believes in bubblegum; half believes in asphalt. The page is the collision: candy panels slam into concrete slabs, sticker type overlays hazard tape, and the reader picks a side. The discipline is in the crash — every colliding block aligns to the same 12-column grid, so the chaos stays load-bearing.',
    colors: {
      primary: '#f72585',
      secondary: '#2b2140',
      accent: '#7c6ff0',
      neutral: '#f2e9ff',
      background: '#fff3e6',
      text: '#2b2140',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 18 / 22 / 30 / 46 / 88',
      lineHeights: 'Display 0.98, body 1.6',
      letterSpacing: 'Display 0.01em, labels 0.14em uppercase',
    },
    components: {
      primary:
        'Bubblegum #f72585, ink text, 2px border, hard shadow 5px 5px 0 #2b2140, radius 12px, weight 800',
      secondary: 'Asphalt slab #2b2140, candy text, shadow 5px 5px 0 #f72585 — sides swap on hover',
      tertiary: 'Sticker-chip text link with a rotated 1.5deg chip background',
      radius: '14px cards, 12px buttons, 999px stickers',
      hover: 'Collision — blocks shift 3px toward each other and shadows swap colors, 180ms',
      cards:
        'Candy or asphalt face (alternating), 3px ink border, radius 14px, padding 26px, shadow 6px 6px 0',
      forms: 'Inputs with 3px ink borders on candy tint; focus inverts to asphalt bg; labels as sticker chips',
      navigation: 'Split bar — left half candy, right half asphalt, wordmark dead center bridging both',
      modals: 'Hazard-striped header band, 3px border, shadow 8px 8px 0, backdrop 55% ink',
    },
    accent: '#f72585',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Events', 'Music', 'Gaming'],
    signatureCss: `
.dv-card:nth-child(odd) { background: #f72585; color: #2b2140; }
.dv-card:nth-child(even) { background: #2b2140; color: #ffd23f; }
.dv-hero h1 { text-shadow: 0.05em 0.05em 0 #ffd23f; }
.dv-nav { background: linear-gradient(90deg, #f72585 50%, #2b2140 50%); }
.dv-nav .dv-links a, .dv-nav .dv-logo { color: #fff6ec; }`,
    author: 'Mika Oda',
    createdAt: '2026-08-20',
    popularity: 74,
  },
  {
    id: 'sticker-storm',
    name: 'Sticker Storm',
    category: 'Maximalism',
    tags: ['stickers', 'zine', 'craft', 'die-cut'],
    description: 'A page that looks raided from a sticker album — every element peels.',
    designPhilosophy:
      'Everything on this page behaves like it was stuck on by hand: stickers overlap, edges peel, one label is always crooked. The craft is in the placement — a sticker storm, not sticker noise. Under the vinyl, a strict zine grid decides where each piece lands and which one wins the overlap.',
    colors: {
      primary: '#58b368',
      secondary: '#22333b',
      accent: '#ff8c42',
      neutral: '#efe9dc',
      background: '#fdf8ee',
      text: '#22333b',
    },
    typography: {
      displayFont: 'Permanent Marker',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 18 / 22 / 30 / 44 / 80',
      lineHeights: 'Display 1.05, body 1.62',
      letterSpacing: 'Sticker labels 0.05em, body 0',
    },
    components: {
      primary:
        'Frog-green die-cut chip, white 2px kiss-cut border, radius 10px, rotate -1.5deg, weight 800, shadow 2px 3px 0 rgba(34,51,59,.35)',
      secondary: 'White sticker chip, ink text, 2px border; straightens to 0deg on hover',
      tertiary: 'Hand-underline link — 3px marker-stroke underline that redraws on hover',
      radius: '10px chips, 16px cards — peels stay round',
      hover: 'Sticker lifts: rotate to 0, translate -2px, shadow grows — like being picked off the sheet, 220ms',
      cards: 'Cream panels with taped corners (washi strips in accent colors), radius 16px, padding 24px, subtle 3px drop',
      forms: 'Label stickers above bordered fields; focus adds a highlighter swash behind the label',
      navigation: 'Top row of nav “sticker tabs”; the active one sits rotated -2deg, overlapping the bar edge',
      modals: 'Giant sticker-sheet panel with peel corner, ink 30% backdrop, pop-in 250ms',
    },
    accent: '#58b368',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Kids', 'Events', 'Portfolio'],
    signatureCss: `
.dv-card { transform: rotate(-0.8deg); border: 2px solid rgba(255,255,255,.9); box-shadow: 2px 3px 0 rgba(34,51,59,.25); }
.dv-card:nth-child(even) { transform: rotate(1.1deg); }
.dv-kicker { background: #ffd23f; display: inline-block; padding: .2em .7em; transform: rotate(-2deg); border-radius: 6px; font-family: 'Permanent Marker', cursive; }
.dv-btn { transform: rotate(-1.5deg); }`,
    author: 'Kit Marlow',
    createdAt: '2026-08-22',
    popularity: 72,
  },
  {
    id: 'velvet-loud',
    name: 'Velvet Loud',
    category: 'Maximalism',
    tags: ['plush', 'velvet', 'spotlight', 'noir-max'],
    description: 'Spotlit plush shapes on oxblood velvet — maximalism with the lights low.',
    designPhilosophy:
      'Loud doesn’t mean bright. This is maximalism at midnight: plush inflated shapes, deep oxblood and wine surfaces, and a single spotlight that makes every object feel like a museum piece in a blues bar. The restraint is real — one object, one light — but the textures, trims, and pillowy radii are pure excess.',
    colors: {
      primary: '#8e2436',
      secondary: '#2a0d14',
      accent: '#e8b04b',
      neutral: '#3d1b24',
      background: '#200a10',
      text: '#f5e3e0',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'IBM Plex Sans',
      scale: '13 / 15 / 17 / 21 / 27 / 40 / 82',
      lineHeights: 'Display 1.05, body 1.68',
      letterSpacing: 'Display -0.005em, kicker 0.22em uppercase',
    },
    components: {
      primary:
        'Wine #8e2436 pill, radius 999px, 1px gold trim inset, blush text, weight 700, glow 0 10px 30px rgba(142,36,54,.5)',
      secondary: 'Transparent pill with 1px rgba(232,176,75,.31) border; hover fills wine 30%',
      tertiary: 'Underlined italic serif link with gold underline, 5px offset',
      radius: '999px buttons, 26px cards — everything inflated',
      hover: 'The spotlight leans: background radial shifts toward cursor, glow intensifies, 300ms',
      cards:
        'Velvet cards #3d1b24, 26px radius, outer 1px rgba(232,176,75,.2) + inner 1px rgba(255,255,255,.06) trim, padding 30px, shadow 0 22px 50px rgba(0,0,0,.55)',
      forms: 'Pill inputs on wine tint; focus ring gold 3px at 30%; labels small-caps letterspaced',
      navigation: 'Floating velvet pill bar with gold stitch border; wordmark in italic serif',
      modals: 'Booth panel: oxblood, gold double trim, backdrop #200a10 at 78%, 320ms curtain rise',
    },
    accent: '#e8b04b',
    stage: '#150409',
    motif: 'quote-band',
    layout: 'spotlight',
    useCases: ['Fashion', 'Music', 'Events'],
    signatureCss: `
.dv-site { background: radial-gradient(120% 90% at 50% 0%, #3d1b24, #200a10 70%); }
.dv-btn { border-radius: 999px !important; }
.dv-card { border-radius: 26px !important; }
.dv-hero h1 em { color: #e8b04b; }
.dv-logo { font-style: italic; }`,
    author: 'Carmen Itri',
    createdAt: '2026-08-24',
    popularity: 78,
    trending: true,
  },
  {
    id: 'mosaic-max',
    name: 'Mosaic Max',
    category: 'Maximalism',
    tags: ['mosaic', 'tiles', 'pattern', 'hand-set'],
    description: 'A thousand small tiles vote; the grid counts them into one picture.',
    designPhilosophy:
      'One tile is decoration; a thousand are a facade. This system builds pages the way Gaudí built parks: small saturated tiles, strict bedding, and a picture that only resolves at distance. Every card is a tessera, every section a mosaic field — the eye travels the grout lines and arrives exactly where the composition wants.',
    colors: {
      primary: '#e07a3f',
      secondary: '#274690',
      accent: '#f2c14e',
      neutral: '#eadfc8',
      background: '#faf4e6',
      text: '#33261d',
    },
    typography: {
      displayFont: 'Syne',
      bodyFont: 'Work Sans',
      scale: '13 / 15 / 18 / 22 / 30 / 46 / 86',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display -0.02em, tile labels 0.1em uppercase',
    },
    components: {
      primary:
        'Cobalt tile button, cream text, radius 3px, 3px grout border #33261d, weight 800; pressed state sinks 1px',
      secondary: 'Cream tile with cobalt text and grout border; hover swaps fill with primary',
      tertiary: 'Tangerine text link with mosaic-dash underline (3px dashed)',
      radius: '3px ± 1px tiles — irregular on purpose',
      hover: 'Tiles lift 2px with a 0 4px 0 grout shadow, then settle — like re-bedding, 150ms',
      cards: 'Tiles in a 4-color rotation, grout borders, radius 3px, padding 24px; card grids read as mosaic fields',
      forms: 'Inputs are mortar: flat cream fields with 3px grout borders; focus turns the border cobalt',
      navigation: 'Top mosaic strip — nav items are small tiles; the active tile doubles as the feature tile',
      modals: 'A feature tile: asymmetric 8/5 split panel, 3px grout border, 60% ink backdrop',
    },
    accent: '#e07a3f',
    motif: 'pixel-grid',
    layout: 'bento',
    useCases: ['E-commerce', 'Events', 'Agency'],
    signatureCss: `
.dv-cards { gap: 2px; background: #33261d; padding: 2px; }
.dv-card { border-radius: 3px !important; }
.dv-card:nth-child(4n+1) { background: #e07a3f; color: #faf4e6; }
.dv-card:nth-child(4n+2) { background: #274690; color: #faf4e6; }
.dv-card:nth-child(4n+3) { background: #f2c14e; color: #33261d; }
.dv-card:hover { transform: translateY(-2px); }`,
    author: 'Pau Ribalta',
    createdAt: '2026-08-26',
    popularity: 70,
  },
  {
    id: 'acid-garden',
    name: 'Acid Garden',
    category: 'Maximalism',
    tags: ['acid', 'neon-green', 'overgrowth', 'festival'],
    description: 'Day-glo overgrowth swallowing a formal garden — beautiful, invasive.',
    designPhilosophy:
      'A baroque garden left unsupervised with a neon sign. The hedges are trimmed — then the acid green takes the wall, the banner, the buttons. The composition is classical: axis, allée, a fountain centerpiece. The palette is an infestation. Structure is the host; acid color is the vine that eats it, visibly.',
    colors: {
      primary: '#b6ff2e',
      secondary: '#0d1f12',
      accent: '#ff2fb3',
      neutral: '#16281b',
      background: '#0a140d',
      text: '#eef7e6',
    },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 18 / 22 / 30 / 46 / 90',
      lineHeights: 'Display 0.98, body 1.58',
      letterSpacing: 'Display -0.015em, kicker 0.18em uppercase',
    },
    components: {
      primary:
        'Acid #b6ff2e slab, ink text, radius 0 (hedges are squared), weight 900, glow 0 0 26px rgba(182,255,46,.45)',
      secondary: '1px rgba(182,255,46,.38) outline on ink, acid text; hover fills 12%',
      tertiary: 'Magenta vine-underline link — animated wavy underline on hover',
      radius: '0 for structure, 999px for bloom pills — the argument in two shapes',
      hover: 'Growth spurts: elements scale 1.04 with a 200ms spring; vine underlines extend',
      cards: 'Ink panels #16281b with 1px rgba(182,255,46,.25) border, padding 28px; accent cards wear acid→magenta gradient borders',
      forms: 'Squared inputs on ink, 2px acid focus border + glow, labels as botanical tags (small-caps, leaf glyph)',
      navigation: 'Formal axis: centered wordmark on a hedge strip; the active link carries a 3px acid underline',
      modals: 'Greenhouse panel — ink glass with acid border glow, 70% ink backdrop, 260ms bloom-in',
    },
    accent: '#b6ff2e',
    stage: '#071009',
    motif: 'gradient-hero',
    layout: 'full-bleed',
    useCases: ['Music', 'Events', 'Gaming'],
    signatureCss: `
.dv-hero { background: radial-gradient(60% 50% at 70% 10%, rgba(182,255,46,.18), transparent 60%), radial-gradient(50% 40% at 20% 90%, rgba(255,47,179,.14), transparent 65%); }
.dv-hero h1 { color: #eef7e6; }
.dv-btn { border-radius: 0 !important; font-weight: 900; }
.dv-link { color: #ff2fb3; }`,
    author: 'Vesna Grahovac',
    createdAt: '2026-08-28',
    popularity: 69,
  },
  {
    id: 'riso-flood',
    name: 'Riso Flood',
    category: 'Maximalism',
    tags: ['risograph', 'print', 'overprint', 'paper'],
    description: 'Overprinted soy inks flooding off the paper — a misprint worth framing.',
    designPhilosophy:
      'Risograph printing is beautiful when it misregisters, so this system misregisters on purpose. Two inks flood the page in oversized shapes; where they overlap, a third color is born. The asymmetric arrangement keeps the flood off the reading line — ink covers sixty percent of the canvas and none of the sentence you came for.',
    colors: {
      primary: '#2b44ff',
      secondary: '#ff48b0',
      accent: '#ffa300',
      neutral: '#efe7da',
      background: '#f6efe3',
      text: '#1d2cc7',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 27 / 40 / 78',
      lineHeights: 'Display 1.02, body 1.66',
      letterSpacing: 'Display -0.01em, stamp labels 0.12em uppercase',
    },
    components: {
      primary:
        'Riso-blue stamp, paper text, radius 6px, weight 800, with a 3px pink offset outline — deliberate misregistration',
      secondary: 'Paper stamp with 2px blue outline + 3px pink ghost; blue text',
      tertiary: 'Underlined blue link whose underline is a pink duplicate offset 2px',
      radius: '6px stamps; large flood shapes use 40% blob radii',
      hover: 'The misregistration corrects — the offset ghost slides to 0 in 250ms and the print snaps into register',
      cards: 'Paper cards with one flood shape bleeding off a corner, 1px rgba(29,44,199,.2) border, grain overlay',
      forms: 'Inputs as printed fields: 2px blue bottom rule; focus adds a pink rule offset 3px that slides into place',
      navigation: 'Left-margin ink-stamp logo, paper-chip links; the active link carries the pink ghost',
      modals: 'Flood panel — a pink flood fills 40% of the backdrop, blue stamp content box on paper',
    },
    accent: '#2b44ff',
    motif: 'gradient-hero',
    layout: 'asymmetric',
    useCases: ['Agency', 'Portfolio', 'Events'],
    signatureCss: `
.dv-hero h1 { background: linear-gradient(100deg, #2b44ff 60%, #ff48b0 60.5%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-btn-primary { box-shadow: 3px 3px 0 #ff48b0; }
.dv-site { background-image: radial-gradient(rgba(29,44,199,.05) 1px, transparent 1px); background-size: 3px 3px; }
.dv-kicker { color: #ff48b0; }`,
    author: 'Ondine Marchal',
    createdAt: '2026-08-30',
    popularity: 73,
    trending: true,
  },
]