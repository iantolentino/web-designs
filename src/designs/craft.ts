import type { DesignSystem } from '../types'

/**
 * Wave 3 — twelve new systems, one or two per category, each with a display
 * face the vault has never used before. Same contract as every other file:
 * tokens, rules, and honest opinions.
 */
export const craftDesigns: DesignSystem[] = [
  {
    id: 'lunar-climate',
    name: 'Lunar Climate',
    category: 'Minimalism',
    tags: ['climate', 'science', 'air', 'cool-grey', 'report'],
    description: 'Data-forward calm for climate and earth science.',
    designPhilosophy:
      'The atmosphere rendered as an interface: cool grey-blue, enormous numerals, and nothing between the reader and the measurement. Confidence comes from restraint — one accent the color of a clear sky, one typeface doing the work of ten. For climate tech, environmental reports, and any product whose credibility is measured in decimals.',
    colors: {
      primary: '#3a7ca5',
      secondary: '#4c7a5d',
      accent: '#e8c46b',
      neutral: '#dfe5ea',
      background: '#eef1f4',
      text: '#1d252c',
    },
    typography: {
      displayFont: 'Rubik',
      bodyFont: 'Manrope',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 60',
      lineHeights: 'Display 1.05, body 1.65',
      letterSpacing: 'Display -0.015em, labels 0.12em uppercase',
    },
    components: {
      primary: 'Solid #3a7ca5, white text, radius 6px, padding 12px 26px, 600',
      secondary: '1px #c6ced6 border, transparent, graphite text',
      tertiary: 'Sky-blue link with underline that thickens on hover',
      radius: '6px inputs/buttons, 10px cards',
      hover: 'Border darkens and a 4px left rule slides in, 200ms',
      cards: 'No shadows — white panels separated by 1px #d5dce2 rules only',
      forms: 'White inputs, 1px steel borders, sky focus ring',
      navigation: 'Hairline-ruled header, uppercase micro-labels, sky active rule',
      modals: 'White sheet, hairline border, no blur — clarity over drama',
    },
    accent: '#3a7ca5',
    motif: 'isometric-lattice',
    layout: 'dashboard',
    useCases: ['SaaS', 'AI/ML', 'Data & Analytics'],
    signatureCss: `
.dv-stat-v { font-variant-numeric: tabular-nums; }
.dv-card { box-shadow: none; border-left: 3px solid transparent; }
.dv-card:hover { border-left-color: #3a7ca5; }
.dv-kicker { letter-spacing: .12em; text-transform: uppercase; color: #3a7ca5; }
.dv-btn-primary { border-radius: 6px; }`,
    author: 'Ines Valo',
    createdAt: '2026-09-12',
    popularity: 78,
  },
  {
    id: 'arco-grid',
    name: 'Arco Grid',
    category: 'Minimalism',
    tags: ['grid', 'engineering', 'terminal', 'precise', 'monospace'],
    description: 'Engineering minimalism ruled by the grid and the mono digit.',
    designPhilosophy:
      'A drafting table, digitized. Every element snaps to an 8px grid, every label is set in monospace, and the only ornament is precision. Where Lunar Climate is calm, Arco Grid is exact — built for infrastructure dashboards, status pages, and tools engineers trust because nothing wobbles.',
    colors: {
      primary: '#3730a3',
      secondary: '#2b6cb0',
      accent: '#38a169',
      neutral: '#e2e6ea',
      background: '#f4f6f8',
      text: '#14181d',
    },
    typography: {
      displayFont: 'Oxanium',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 52',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display 0, labels 0.16em mono uppercase',
    },
    components: {
      primary: 'Solid #3730a3, white text, radius 2px, padding 11px 24px, 700, mono uppercase label',
      secondary: '1.5px ink border, transparent, ink text',
      tertiary: 'Ink link with ⌁ caret and dotted underline',
      radius: '2px inputs/buttons; top-right corner notch 10px on cards',
      hover: 'Notch grows to 16px and border goes solid ink, 180ms',
      cards: 'White, 1px #ccd3d9, corner notch, internal 8px-grid alignment',
      forms: 'Square inputs, mono labels above, orange caret color',
      navigation: 'Grid-ruled bar; sections numbered 01, 02, 03 in mono',
      modals: 'Panel with notch and mono title, backdrop 40% ink',
    },
    accent: '#3730a3',
    motif: 'pixel-grid',
    layout: 'dashboard',
    useCases: ['Developer Tools', 'Data & Analytics', 'DevOps & Cloud'],
    signatureCss: `
.dv-card { border-radius: 2px; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%); }
.dv-kicker { font-family: 'IBM Plex Mono', monospace; letter-spacing: .16em; text-transform: uppercase; }
.dv-btn-primary { border-radius: 2px; text-transform: uppercase; letter-spacing: .08em; }`,
    author: 'Ruth Adeyemi',
    createdAt: '2026-09-08',
    popularity: 74,
  },
  {
    id: 'tondo-ceramics',
    name: 'Tondo Ceramics',
    category: 'Organic',
    tags: ['ceramics', 'clay', 'kiln', 'earthen', 'studio'],
    description: 'Wheel-thrown warmth: clay, kiln smoke, thumb marks.',
    designPhilosophy:
      'A shop built like a shelf of pots. Glaze colors sampled from real kilns — celadon, iron red, unglazed buff — and forms that curve where a machine would cut. Product pages feel like lifting a bowl off the shelf: weight, texture, and a maker\u2019s marks left visible. For studios, small-batch goods, and craft marketplaces.',
    colors: {
      primary: '#9db5a2',
      secondary: '#a44a3f',
      accent: '#d9b26a',
      neutral: '#e7ddcc',
      background: '#f3ede3',
      text: '#57504a',
    },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display 0, labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #9db5a2, #2e2a26 text, radius 999px 999px 999px 6px, padding 13px 30px, 700',
      secondary: '1.5px #a44a3f border, transparent, oxide text',
      tertiary: 'Smoke text link, oxide on hover, with a handwritten ❝ lift',
      radius: 'Pill with one squared corner (the thumb rest); 20px cards',
      hover: 'Card tips 2° like it was picked up, 300ms; tag swings',
      cards: 'Glaze-white #faf6ee, 1px #ded2bd, arched media frame, kiln-tag sticker',
      forms: 'Rounded inputs, celadon borders, oxide focus ring',
      navigation: 'Clay band with wheel-arc underline for the active item',
      modals: 'Glaze sheet with rope-tie header and oxide seal',
    },
    accent: '#9db5a2',
    motif: 'leaf-divider',
    layout: 'hero-cards',
    useCases: ['E-commerce', 'Art Gallery'],
    signatureCss: `
.dv-media, .dv-feature-media { border-radius: 999px 999px 0 0; }
.dv-btn-primary { border-radius: 999px 999px 999px 6px; }
.dv-card { background: #faf6ee; }
.dv-logo::after { content: ' ◖'; color: #a44a3f; }`,
    author: 'Marta Kiln',
    createdAt: '2026-09-03',
    popularity: 79,
  },
  {
    id: 'sable-supper',
    name: 'Sable Supper Club',
    category: 'Luxury',
    tags: ['supper-club', 'candlelight', 'velvet', 'night', 'exclusive'],
    description: 'Midnight velvet, candle glow, and a table that whispers.',
    designPhilosophy:
      'The hour after midnight in a members\u2019 dining room. Near-black velvet, brass candlelight, and typography set like a private menu — italic, unhurried, never shouting. Reserve flows feel like being slipped a note. For supper clubs, boutique hotels, and brands whose product is the evening itself.',
    colors: {
      primary: '#d99a6c',
      secondary: '#3a2d3f',
      accent: '#c4704d',
      neutral: '#241f1f',
      background: '#120f14',
      text: '#f0e6d6',
    },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Spectral',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 58',
      lineHeights: 'Display 1.08, body 1.75',
      letterSpacing: 'Display 0.01em, menu 0.2em uppercase',
    },
    components: {
      primary: 'Black panel, 1px #d99a6c border, brass text, radius 0, padding 13px 32px, 500, letterspaced',
      secondary: 'Transparent, champagne hairline border',
      tertiary: 'Brass italic link with candle-glow underline on hover',
      radius: '0 — the room has corners; 2px inputs',
      hover: 'Candle bloom: soft radial brass glow grows behind the control, 350ms',
      cards: 'Velvet panels with brass top hairline and moon-phase glyph ❨ ❩',
      forms: 'Underline inputs on black, brass focus, small-caps labels',
      navigation: 'Centered wordmark, brass hairlines above and below, small-caps links',
      modals: 'Menu-card panel: double brass rule header, merlot seal',
    },
    accent: '#d99a6c',
    motif: 'serif-italic-hero',
    layout: 'full-bleed',
    useCases: ['Restaurant', 'Events'],
    signatureCss: `
.dv-hero h1 em { color: #d99a6c; font-style: italic; }
.dv-card { background: #1c1713; border-top: 1px solid #d99a6c; }
.dv-btn-primary { background: #120f14; border: 1px solid #d99a6c; color: #d99a6c; }
.dv-kicker { letter-spacing: .2em; text-transform: uppercase; color: #d99a6c; }`,
    author: 'Étienne Marchand',
    createdAt: '2026-08-30',
    popularity: 83,
    trending: true,
  },
  {
    id: 'blau-index',
    name: 'Blau Index',
    category: 'Professional',
    tags: ['index', 'consultancy', 'benchmark', 'trust-blue', 'tables'],
    description: 'The benchmark firm\u2019s blue: indexes, tables, and trust.',
    designPhilosophy:
      'Named for the blue of an index fund chart on a good day. This is consulting-firm design where the data is the pitch: dense tables, confident numerals, and a palette that never distracts from the argument. Navy dominates; a single warm sand accent marks the row you should look at. For research firms, benchmarks, and annual reports.',
    colors: {
      primary: '#2f6fb0',
      secondary: '#173a5e',
      accent: '#d9b98c',
      neutral: '#e4e8ee',
      background: '#f7f8fa',
      text: '#1a2430',
    },
    typography: {
      displayFont: 'Livvic',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 26 / 36 / 52',
      lineHeights: 'Display 1.12, body 1.6',
      letterSpacing: 'Display -0.01em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #2f6fb0, white text, radius 4px, padding 11px 26px, 650',
      secondary: '1.5px navy border, white bg, navy text',
      tertiary: 'Blue link, navy on hover, with method-footnote superscript',
      radius: '4px controls, 6px cards — sober, not sharp',
      hover: 'Row highlights to sand 18%; buttons deepen 6%, 160ms',
      cards: 'White, 1px #dde3ea, navy 4px left rule on the featured card',
      forms: 'White inputs, steel borders, blue focus, grid-aligned labels',
      navigation: 'Navy bar, white links, sand underline for active section',
      modals: 'White sheet, navy header band, sand footnote area',
    },
    accent: '#2f6fb0',
    motif: 'mono-labels',
    layout: 'editorial',
    useCases: ['Consulting', 'Fintech', 'Startup'],
    signatureCss: `
.dv-table tbody tr:nth-child(3n) { background: rgba(23,58,94,.03); }
.dv-kicker { background: #173a5e; color: #fff; padding: 2px 8px; }
.dv-card { border-left: 4px solid #2f6fb0; }
.dv-btn-primary { border-radius: 4px; }`,
    author: 'Willem Brandt',
    createdAt: '2026-08-24',
    popularity: 71,
  },
  {
    id: 'beacon-petition',
    name: 'Beacon Petition',
    category: 'Maximalism',
    tags: ['activism', 'petition', 'protest', 'marker', 'urgent'],
    description: 'Marker-pen urgency for campaigns that cannot wait.',
    designPhilosophy:
      'A petition page that behaves like a placard. Hand-marker headlines, countdown pressure, and a signature counter that climbs while you watch. Maximal here means emotional — layered torn-paper textures, stamp overlays, and a yellow-black alarm palette — but the form itself stays two fields and a button, because friction kills movements.',
    colors: {
      primary: '#ffd400',
      secondary: '#d7263d',
      accent: '#17130f',
      neutral: '#f1e9c8',
      background: '#fffbe8',
      text: '#17130f',
    },
    typography: {
      displayFont: 'Rubik Doodle Shadow',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 23 / 30 / 42 / 66',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0.02em, stamps 0.22em uppercase',
    },
    components: {
      primary: 'Solid #ffd400, ink text, radius 8px, padding 14px 32px, 900, 3px ink border, shadow 5px 5px 0 ink',
      secondary: 'Stamp-red bg, paper text, same hard shadow',
      tertiary: 'Ink link with marker-highlight sweep on hover',
      radius: '8px buttons, 4px cards — hand-cut, not round',
      hover: 'Shadow press 5px→2px with 2px translate, 130ms',
      cards: 'Torn-paper panels (clip-path), stamp corner overlays, tape strips',
      forms: 'Paper inputs, 3px ink borders, red focus, big 18px text',
      navigation: 'Tape-fixed banner with marker logo and stamp badge',
      modals: 'Clip-board panel with red stamp header and torn edge',
    },
    accent: '#ffd400',
    motif: 'hard-shadows',
    layout: 'manifesto',
    useCases: ['Nonprofit', 'Government', 'Community'],
    signatureCss: `
.dv-hero h1 { font-family: 'Rubik Doodle Shadow', cursive; }
.dv-card { clip-path: polygon(0 2%, 3% 0, 97% 1%, 100% 3%, 99% 97%, 96% 100%, 4% 99%, 0 97%); }
.dv-btn { box-shadow: 5px 5px 0 #17130f; }
.dv-btn:hover { transform: translate(2px,2px); box-shadow: 2px 2px 0 #17130f; }
.dv-kicker { background: #ffd400; letter-spacing: .22em; text-transform: uppercase; padding: 2px 10px; transform: rotate(-2deg); display: inline-block; }`,
    author: 'Priya Chauhan',
    createdAt: '2026-09-15',
    popularity: 88,
    trending: true,
  },
  {
    id: 'poster-press',
    name: 'Poster Press Works',
    category: 'Retro',
    tags: ['letterpress', 'poster', 'slab', 'ink', 'workshop'],
    description: 'Letterpress shop posters: heavy slab, deep ink bite.',
    designPhilosophy:
      'Alfa Slab One at 96px, ink pressed hard enough to bite the paper. Every section is a poster that happens to scroll: numbered, bordered, and set with the confidence of a shop that has been printing since 1911. Modern under the ink — real grids, real contrast, real buttons. For print shops, gigs, fairs, and craft brands.',
    colors: {
      primary: '#c73e2e',
      secondary: '#23303f',
      accent: '#c9973f',
      neutral: '#e8d9b8',
      background: '#f6ead2',
      text: '#23303f',
    },
    typography: {
      displayFont: 'Alfa Slab One',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 28 / 42 / 68',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.03em, labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #c73e2e, stock text, radius 3px, padding 13px 30px, 800, 3px ink border, shadow 4px 4px 0 #23303f',
      secondary: 'Ink bg, stock text, same shadow',
      tertiary: 'Ink link, brass on hover, with ✚ prefix',
      radius: '3px — press plates have edges',
      hover: 'Press-flat: translate 2px, shadow 4px→1px, 140ms',
      cards: 'Poster frames: 3px double border, corner registration marks, No. plate',
      forms: 'Stock inputs, 3px ink borders, red focus',
      navigation: 'Ink band, stock slab logo, brass star separators',
      modals: 'Poster sheet with "EXTRA" banner header',
    },
    accent: '#c73e2e',
    motif: 'hard-shadows',
    layout: 'hero-cards',
    useCases: ['Events', 'Music', 'E-commerce'],
    signatureCss: `
.dv-hero h1, .dv-logo { font-family: 'Alfa Slab One', serif; }
.dv-card { border: 3px double #23303f; }
.dv-btn { box-shadow: 4px 4px 0 #23303f; }
.dv-btn:hover { transform: translate(2px,2px); box-shadow: 1px 1px 0 #23303f; }
.dv-kicker { letter-spacing: .18em; text-transform: uppercase; color: #c73e2e; }`,
    author: 'Gus Letterman',
    createdAt: '2026-08-19',
    popularity: 80,
  },
  {
    id: 'inkwell-zine',
    name: 'Inkwell Zine',
    category: 'Brutalism',
    tags: ['zine', 'photocopy', 'riso', 'punk', 'diy'],
    description: 'Photocopied zine energy: riso overlays, xerox grain.',
    designPhilosophy:
      'Made on a copier that is low on toner, on purpose. Riso-style two-color overlays (blue + fluorescent pink), photocopied grain, marginalia scrawled in the gutters, and layouts that break their own grid once per page — exactly once. Brutalism with a sense of humor. For zines, independent labels, and music journalism.',
    colors: {
      primary: '#5333d6',
      secondary: '#ff48b0',
      accent: '#111111',
      neutral: '#e3e0d8',
      background: '#f2f0eb',
      text: '#111111',
    },
    typography: {
      displayFont: 'Courier Prime',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 14 / 16 / 19 / 24 / 34 / 54',
      lineHeights: 'Display 1.05, body 1.7',
      letterSpacing: 'Display -0.03em, marginalia 0',
    },
    components: {
      primary: 'Riso blue bg, xerox text, radius 0, padding 12px 24px, 700, 2px ink border, overprint pink offset on hover',
      secondary: 'Pink bg, ink text, same border',
      tertiary: 'Typewriter link with ▚ caret and highlight sweep',
      radius: '0 everywhere — copiers do not round corners',
      hover: 'Overprint: pink duplicate shifts 3px, 120ms',
      cards: 'Paper with stapled edge (two staple marks), halftone images',
      forms: 'Typewriter-line inputs (bottom border only), blue caret',
      navigation: 'Masthead band: ISSUE № + date + price, typewriter',
      modals: 'Torn paper with "CORRECTION" scrawled header',
    },
    accent: '#5333d6',
    motif: 'dashed-borders',
    layout: 'asymmetric',
    useCases: ['Publishing', 'News', 'Music'],
    signatureCss: `
.dv-hero h1 { font-family: 'Courier Prime', monospace; text-shadow: 3px 3px 0 #ff48b0; }
.dv-kicker { background: #5333d6; color: #f2f0eb; padding: 2px 8px; transform: rotate(-1deg); display: inline-block; }
.dv-card { border: 2px solid #111; box-shadow: none; }
.dv-card::after { content: ''; position: absolute; inset: 0; background: radial-gradient(#111 1px, transparent 1px); background-size: 4px 4px; opacity: .06; pointer-events: none; }`,
    author: 'Nina Kopp',
    createdAt: '2026-08-27',
    popularity: 76,
  },
  {
    id: 'scriptorium-sips',
    name: 'Scriptorium Sips',
    category: 'Luxury',
    tags: ['blackletter', 'brewery', 'monastery', 'gothic', 'ale'],
    description: 'Blackletter brewery: monastery rules, modern pours.',
    designPhilosophy:
      'A monastery brewhouse with a website. Blackletter for the name and the oaths, Garamond for everything readable, and stone-wall neutrals holding the glow of amber ale. Heritage is the pitch, but legibility is the rule: blackletter appears at display sizes only, never in body copy. For breweries, meaderies, and heritage spirits.',
    colors: {
      primary: '#d99a2b',
      secondary: '#5c2333',
      accent: '#7a8450',
      neutral: '#3a342c',
      background: '#26221d',
      text: '#ece2cc',
    },
    typography: {
      displayFont: 'UnifrakturMaguntia',
      bodyFont: 'EB Garamond',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 56',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.02em, labels 0.18em small-caps',
    },
    components: {
      primary: 'Amber wax-seal: amber bg, stone text, radius 999px 4px 999px 4px, padding 12px 28px, 600',
      secondary: 'Parchment tag with stone border and small-caps label',
      tertiary: 'Amber Garamond link with ✳ and manuscript underline',
      radius: 'Seal buttons; 2px elsewhere — stone has edges',
      hover: 'Wax softens: amber lightens 6% and seal tilts 2°, 250ms',
      cards: 'Manuscript panels: ruled top line, drop-cap initial, ✳ finial',
      forms: 'Parchment inputs with ruled underlines, amber focus',
      navigation: 'Stone lintel with centered blackletter wordmark',
      modals: 'Illuminated panel: wine header band, amber drop cap',
    },
    accent: '#d99a2b',
    motif: 'quote-band',
    layout: 'editorial',
    useCases: ['Restaurant', 'Hotel', 'Wedding'],
    signatureCss: `
.dv-hero h1, .dv-logo { font-family: 'UnifrakturMaguntia', serif; }
.dv-card { background: #2e2822; }
.dv-kicker { font-variant: small-caps; letter-spacing: .18em; color: #d99a2b; }
.dv-btn-primary { border-radius: 999px 4px 999px 4px; }`,
    author: 'Brödér Amsel',
    createdAt: '2026-08-21',
    popularity: 73,
  },
  {
    id: 'film-journal',
    name: 'Handmade Film Journal',
    category: 'Creative',
    tags: ['film', 'journal', 'hand-drawn', 'sketch', 'analog'],
    description: 'A sketchbook of cinema: hand-drawn frames, margins alive.',
    designPhilosophy:
      'A critic\u2019s notebook scanned and put online. Tall Amatic caps for titles, real margins with pencil annotations, frames taped in slightly crooked, and a red pencil for emphasis. It should feel like you are reading over someone\u2019s shoulder — someone who watches everything and draws fast. For film journals, festivals, and personal criticism.',
    colors: {
      primary: '#8a5a3b',
      secondary: '#3c3a35',
      accent: '#4a6b8a',
      neutral: '#eae5d8',
      background: '#f7f4ec',
      text: '#3c3a35',
    },
    typography: {
      displayFont: 'Amatic SC',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 30 / 44 / 72',
      lineHeights: 'Display 0.95, body 1.7',
      letterSpacing: 'Display 0.08em, notes 0',
    },
    components: {
      primary: 'Red pencil: #8a5a3b bg, sketch text, radius 10px 4px 12px 5px (hand-drawn), padding 12px 26px, 700',
      secondary: 'Pencil outline sketch, transparent bg, wobbly border',
      tertiary: 'Pencil link with margin-arrow → and red underline scribble',
      radius: 'Hand-drawn: each corner slightly different (10/4/12/5)',
      hover: 'Sketch shakes once (1° wiggle) and underline re-scribbles, 200ms',
      cards: 'Taped-in frames: photo with 4 tape corners, caption in margin',
      forms: 'Ruled-paper inputs, red pencil focus',
      navigation: 'Margin tabs on the right edge like a physical notebook',
      modals: 'Torn notebook page with red-pen header',
    },
    accent: '#8a5a3b',
    motif: 'tape-labels',
    layout: 'magazine',
    useCases: ['Film & TV', 'Photography', 'Publishing'],
    signatureCss: `
.dv-hero h1 { font-family: 'Amatic SC', cursive; letter-spacing: .08em; }
.dv-kicker { color: #8a5a3b; transform: rotate(-2deg); display: inline-block; }
.dv-card { background: #fffdf6; }
.dv-media { border-radius: 2px; box-shadow: 0 1px 0 #d8d2c2, 0 0 0 6px #fffdf6, 0 0 0 7px #e0d8c4; }`,
    author: 'Lucia Ferrer',
    createdAt: '2026-09-01',
    popularity: 77,
  },
  {
    id: 'punto-playcafe',
    name: 'Punto Play Café',
    category: 'Playful',
    tags: ['family-cafe', 'playroom', 'crayon', 'bouncy', 'weekend'],
    description: 'A family café where the menu bounces and nobody minds.',
    designPhilosophy:
      'Weekend morning with kids in the play corner: chunky rounded everything, Gaegu\u2019s tall bouncy letters, confetti sprinkles on section breaks, and buttons with actual squash-and-stretch. The rule of the house — playful never means illegible; prices and the allergy list are set plain. For family cafés, play centers, and kids\u2019 brands.',
    colors: {
      primary: '#e5527a',
      secondary: '#f7c948',
      accent: '#7fd8be',
      neutral: '#f3e6d0',
      background: '#fff8ee',
      text: '#4a3f35',
    },
    typography: {
      displayFont: 'Gaegu',
      bodyFont: 'Quicksand',
      scale: '14 / 16 / 18 / 23 / 30 / 42 / 60',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.02em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid berry, milk text, radius 22px 22px 8px 22px, padding 13px 30px, 700, sprinkle shadow',
      secondary: 'Mint bg, pine text, same radius',
      tertiary: 'Berry link with banana highlighter swipe on hover',
      radius: 'Squishy 22px with one flat corner (the saucer)',
      hover: 'Squash-stretch: scale(0.96, 1.04) then settle, 220ms spring',
      cards: 'Milk cards, 2.5px cocoa border, sprinkle strip along the top',
      forms: 'Rounded inputs, cocoa borders, berry focus, big hit areas (52px)',
      navigation: 'Bunting flags (triangles) along the top edge, sticker logo',
      modals: 'Lunch-tray panel: compartment header, crayon title',
    },
    accent: '#e5527a',
    motif: 'rotated-stickers',
    layout: 'split-hero',
    useCases: ['Kids', 'Coffee Shop', 'Events'],
    signatureCss: `
.dv-hero h1, .dv-logo { font-family: 'Gaegu', cursive; }
.dv-card { border-radius: 22px 22px 8px 22px; border: 2.5px solid #4a3f35; }
.dv-btn-primary { border-radius: 22px 22px 8px 22px; transition: transform .22s cubic-bezier(.34,1.56,.64,1); }
.dv-btn-primary:hover { transform: scale(.96,1.04); }
.dv-kicker { background: #f7c948; padding: 2px 10px; transform: rotate(-2deg); display: inline-block; }`,
    author: 'Rosie Tan',
    createdAt: '2026-09-10',
    popularity: 81,
  },
  {
    id: 'neon-arcade',
    name: 'Neon Arcade',
    category: 'Retro',
    tags: ['arcade', 'neon', 'crt', 'high-score', 'night'],
    description: 'CRT nights: neon tubes, scanlines, high scores.',
    designPhilosophy:
      'The arcade at 11pm — you can hear it from the street. Neon tube type (Bungee Shade does the work), scanline texture over everything, and a high-score table that treats data like a leaderboard. Dark room, bright glass. For gaming lounges, streaming brands, and event promotions that want the quarter-drop feeling.',
    colors: {
      primary: '#ff2d78',
      secondary: '#22e0e6',
      accent: '#ffc247',
      neutral: '#1c1720',
      background: '#0d0b10',
      text: '#f2eaf4',
    },
    typography: {
      displayFont: 'Bungee Shade',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.06em, scores 0.12em mono-feel',
    },
    components: {
      primary: 'Dome button: neon pink, ink text, radius 999px, padding 12px 30px, 800, ring glow 0 0 18px',
      secondary: 'Cyan tube outline, cyan text, transparent bg',
      tertiary: 'Amber link with ► prefix and flicker-on-hover',
      radius: 'Pill buttons (domes), 6px cards',
      hover: 'Tube flicker: 2 quick opacity dips then full glow, 220ms',
      cards: 'Cabinet panels: #16121c, 1px #2a2433, scanline overlay, corner screws',
      forms: 'Dark inputs, tube borders, pink glow focus',
      navigation: 'Marquee bar with scrolling announcements + tube logo',
      modals: 'INSERT COIN panel with amber ticker header',
    },
    accent: '#ff2d78',
    motif: 'glow-pulse',
    layout: 'spotlight',
    useCases: ['Gaming', 'Streaming', 'Music'],
    signatureCss: `
.dv-hero h1, .dv-logo { font-family: 'Bungee Shade', cursive; color: #ff2d78; text-shadow: 0 0 18px rgba(255,45,120,.55); }
.dv-card { background: #16121c; position: relative; }
.dv-card::after { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0 1px, transparent 1px 3px); pointer-events: none; }
.dv-btn-primary { border-radius: 999px; box-shadow: 0 0 18px rgba(255,45,120,.5); }
.dv-kicker { color: #ffc247; letter-spacing: .12em; }`,
    author: 'Mara Volt',
    createdAt: '2026-08-15',
    popularity: 85,
  },
]
