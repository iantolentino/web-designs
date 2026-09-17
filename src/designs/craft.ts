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
    designDetails:
      'Fog #eef1f4 canvas, graphite #1d252c, sky #3a7ca5 accent, moss #4c7a5d for "improving" states. Rubik display in tight 700; Manrope body. Numbers set in tabular figures at 3rem+. Hairline 1px rules organize whole sections — no cards, just columns separated by lines. Chart fills use 12%-alpha accent washes.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 88 / 160',
      paddingScale: '24 / 40 / 64',
      grid: '12-col 1200px; KPI row of 4 above a full-width chart band',
    },
    motion: {
      pageLoad: 'Numbers count up once, 900ms; everything else fades 300ms',
      hoverStates: 'Left rule slides, borders deepen, 200ms',
      transitions: 'Even, unhurried, 200–300ms',
      scroll: 'Section rules extend as they enter, 500ms',
    },
    accessibility:
      'Graphite on fog 13.9:1; white on sky 4.7:1. Focus 2px sky ring. Charts carry text alternatives. Count-up respects reduced-motion by rendering final values.',
    responsive:
      'KPI row 4→2→1. Chart bands keep full width. Display clamps 2.25rem→3.75rem. Hairlines persist (identity).',
    codeExample:
      '<section class="reading">\n  <p class="label">Global mean · September</p>\n  <h1>13.61<span>°C</span></h1>\n  <button class="btn-data">Download the dataset</button>\n</section>',
    accent: '#3a7ca5',
    motif: 'big-stat-row',
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
    designDetails:
      'Blueprint paper #f4f6f8, ink #14181d, arc-orange #e8590c used once per screen. Oxanium display for headings; IBM Plex Sans body with Plex Mono numerals. A visible dotted grid texture sits at 6% opacity behind the canvas. Panels are corner-notched: a small 45° cut on the top-right corner marks interactive containers.',
    colors: {
      primary: '#e8590c',
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
      primary: 'Solid #e8590c, white text, radius 2px, padding 11px 24px, 700, mono uppercase label',
      secondary: '1.5px ink border, transparent, ink text',
      tertiary: 'Ink link with ⌁ caret and dotted underline',
      radius: '2px inputs/buttons; top-right corner notch 10px on cards',
      hover: 'Notch grows to 16px and border goes solid ink, 180ms',
      cards: 'White, 1px #ccd3d9, corner notch, internal 8px-grid alignment',
      forms: 'Square inputs, mono labels above, orange caret color',
      navigation: 'Grid-ruled bar; sections numbered 01, 02, 03 in mono',
      modals: 'Panel with notch and mono title, backdrop 40% ink',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '16 / 32 / 48',
      grid: 'Visible 8px grid; 12-col with 8px gutters — gutters equal base unit',
    },
    motion: {
      pageLoad: 'Panels draw borders clockwise, 400ms, staggered 40ms',
      hoverStates: 'Notch resize + border snap, 180ms',
      transitions: 'Linear or ease-out, never bouncy — this is a tool',
      scroll: 'Grid dots stay fixed; content moves over them',
    },
    accessibility:
      'Ink on paper 16.1:1; white on arc-orange 3.9:1 at 700 only. Focus 2px ink outline offset 2px. Notches are decorative. Border-draw animation disabled under reduced-motion.',
    responsive:
      '12-col collapses to 6 under 900px, 2 under 600px. Notches shrink to 6px. Mono labels stay uppercase at all sizes.',
    codeExample:
      '<section class="sheet">\n  <p class="ref">GRID 01 / STATUS</p>\n  <h1>All systems nominal.</h1>\n  <button class="btn-arc">Open runbook</button>\n</section>',
    accent: '#e8590c',
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
    designDetails:
      'Buff clay #f3ede3, celadon #9db5a2, iron-oxide #a44a3f, kiln-smoke #57504a text. DM Serif Display headings; Karla body. Sections end in a wheel-arc divider (radial curve), buttons are thumb-dented pills, and product cards carry a rotated handwritten tag ("thrown 4 Sep"). Photos live in round-arched frames.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 72 / 136',
      paddingScale: '24 / 40 / 56',
      grid: 'Shelving layout: alternating 2/3–1/3 rows like plates on risers',
    },
    motion: {
      pageLoad: 'Pots rise off the shelf (translateY 14px + tip 1.5°), 450ms',
      hoverStates: 'Lift-and-tip 300ms; tags swing on a string',
      transitions: 'Wheel-eased — slow start, gentle stop, 300–400ms',
      scroll: 'Arc dividers rotate 2° as they cross the fold',
    },
    accessibility:
      'Smoke on buff 7.6:1; #2e2a26 on celadon 6.9:1. Focus 3px oxide ring. Handwritten tags duplicated in alt text. Tipping disabled under reduced-motion.',
    responsive:
      'Shelving rows stack under 760px; arches become soft rects. Display clamps 2.25rem→3.25rem. Tags shrink but stay rotated.',
    codeExample:
      '<section class="shelf">\n  <h1>Fired in small<br/>batches, <em>always.</em></h1>\n  <p>Each piece keeps its maker\u2019s marks.</p>\n  <button class="btn-throw">Visit the kiln room</button>\n</section>',
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
    designDetails:
      'Velvet black #14110f, candle #e8b563, merlot #6d2233, champagne text #f0e6d2. Abril Fatface display with high-contrast strokes; Spectral body. Sections open with a brass hairline and a small moon-phase glyph. Buttons are brass-edged black; hover lights the candle (a radial glow bloom). Photography gets a vignette.',
    colors: {
      primary: '#e8b563',
      secondary: '#6d2233',
      accent: '#3d5a4c',
      neutral: '#241f1b',
      background: '#14110f',
      text: '#f0e6d2',
    },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Spectral',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 58',
      lineHeights: 'Display 1.08, body 1.75',
      letterSpacing: 'Display 0.01em, menu 0.2em uppercase',
    },
    components: {
      primary: 'Black panel, 1px #e8b563 border, brass text, radius 0, padding 13px 32px, 500, letterspaced',
      secondary: 'Transparent, champagne hairline border',
      tertiary: 'Brass italic link with candle-glow underline on hover',
      radius: '0 — the room has corners; 2px inputs',
      hover: 'Candle bloom: soft radial brass glow grows behind the control, 350ms',
      cards: 'Velvet panels with brass top hairline and moon-phase glyph ❨ ❩',
      forms: 'Underline inputs on black, brass focus, small-caps labels',
      navigation: 'Centered wordmark, brass hairlines above and below, small-caps links',
      modals: 'Menu-card panel: double brass rule header, merlot seal',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 88 / 168',
      paddingScale: '28 / 48 / 72',
      grid: 'Single course: centered 720px measure; menu = two aligned columns',
    },
    motion: {
      pageLoad: 'Lights dim up: bg brightens 4% while content fades, 700ms',
      hoverStates: 'Candle bloom 350ms; text never moves',
      transitions: 'Slow pours, 350–500ms',
      scroll: 'Vignette deepens slightly toward the footer',
    },
    accessibility:
      'Champagne on velvet 13.2:1; brass on velvet 9.8:1. Focus 2px brass outline offset 3px. Glow blooms are additive light, never the only affordance. Dim-up disabled under reduced-motion.',
    responsive:
      'Menu columns stack under 700px; vignette halves. Abril clamps 2.25rem→3.5rem. Brass hairlines persist at every size.',
    codeExample:
      '<section class="table">\n  <p class="seating">TONIGHT · ONE SEATING</p>\n  <h1>The <em>midnight</em> menu</h1>\n  <button class="btn-reserve">Request a seat</button>\n</section>',
    accent: '#e8b563',
    motif: 'serif-italic-hero',
    layout: 'full-bleed',
    useCases: ['Restaurant', 'Events'],
    signatureCss: `
.dv-hero h1 em { color: #e8b563; font-style: italic; }
.dv-card { background: #1c1713; border-top: 1px solid #e8b563; }
.dv-btn-primary { background: #14110f; border: 1px solid #e8b563; color: #e8b563; }
.dv-kicker { letter-spacing: .2em; text-transform: uppercase; color: #e8b563; }`,
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
    designDetails:
      'Paper white #f7f8fa, navy #173a5e, chart blue #2f6fb0, sand #d9b98c highlight. Livvic 900 display; Source Sans 3 body. Tables are the hero: sticky headers, zebra rows only every third row (quieter than zebra-everything), and delta arrows ▲▼ in semantic green/red. Section numbers run in a navy square chip.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 72 / 136',
      paddingScale: '20 / 36 / 56',
      grid: '12-col 1180px; sidebar notes column at 280px',
    },
    motion: {
      pageLoad: 'Tables fade, then rows cascade 20ms apart',
      hoverStates: '160ms fills and deepens — brisk, boardroom-quick',
      transitions: 'Short and even, 160–240ms',
      scroll: 'Sticky table headers shadow as content passes under',
    },
    accessibility:
      'Ink on paper 14.2:1; white on chart blue 4.9:1. Focus 2px navy ring. Deltas pair arrows with signed numbers for color-blind readers. Sand highlight is decoration, never meaning.',
    responsive:
      'Tables scroll horizontally with sticky first column. Sidebar folds above the table. Display clamps 2rem→3.25rem.',
    codeExample:
      '<section class="brief">\n  <p class="no">02 · METHODS</p>\n  <h1>The index, explained.</h1>\n  <button class="btn-brief">Read the methodology</button>\n</section>',
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
    designDetails:
      'Alarm paper #fffbe8, ink #17130f, beacon yellow #ffd400, stamp red #d7263d. Rubik Doodle Shadow display (hand-marker with built-in shadow); Nunito body, bold where it counts. Stamps ("SIGNED", "URGENT") sit rotated on hero corners. Progress is a thermometer bar with tick marks every 10k. Torn-paper edges via jagged clip-paths.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 120',
      paddingScale: '20 / 36 / 56',
      grid: 'Single urgent column at 640px; stats band full-bleed yellow',
    },
    motion: {
      pageLoad: 'Stamps slam in (scale 1.6→1 + rotate), 300ms, ink flashes',
      hoverStates: 'Press-flat physics 130ms',
      transitions: 'Fast — urgency is the brand, 130–200ms',
      scroll: 'Thermometer fills as the section crosses center',
    },
    accessibility:
      'Ink on alarm paper 17.8:1; ink on beacon 14.9:1. Focus 3px red outline. Stamps aria-hidden with text duplicates. Stamp-slam disabled under reduced-motion.',
    responsive:
      'Single column by design; stamps shrink to 60%. Display clamps 2.5rem→4.125rem. Thermometer stays full-width.',
    codeExample:
      '<section class="placard">\n  <p class="stamp">14,203 SIGNED</p>\n  <h1>Sign before <em>Friday.</em></h1>\n  <button class="btn-sign">Add your name</button>\n</section>',
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
    designDetails:
      'Paper stock #f6ead2, press ink #23303f, poster red #c73e2e, brass #c9973f. Alfa Slab One display; Source Sans 3 body. Ink-bite texture on headlines (tiny edge roughness), registration-mark crosses ✚ in corners, and numbered poster frames ("No. 04") on every card. Rules are 3px; shadows are offset ink, never blur.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 120',
      paddingScale: '20 / 36 / 56',
      grid: 'Poster wall: 2-col masonry feel on a 12-col base',
    },
    motion: {
      pageLoad: 'Posters pin up: drop 12px + rotate settle, 320ms',
      hoverStates: 'Press-flat 140ms',
      transitions: 'Mechanical press timing — quick, firm, 140–200ms',
      scroll: 'Static scroll; ink does not wobble',
    },
    accessibility:
      'Ink on stock 11.8:1; stock on red 4.6:1 at 800. Focus 3px red outline. Registration marks aria-hidden. Alfa carries display only; body is Source Sans.',
    responsive:
      'Poster wall stacks under 720px; shadows shrink 4px→2px. Alfa clamps 2.25rem→4rem. Number plates persist.',
    codeExample:
      '<section class="plate">\n  <p class="no">№ 04 · SEASON PASS</p>\n  <h1>INK WELL<br/>SPENT.</h1>\n  <button class="btn-press">Grab the pass</button>\n</section>',
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
    designDetails:
      'Xerox white #f2f0eb, toner black #111, riso blue #2b44ff, riso pink #ff48b0. Courier Prime display (typewriter) with mono labels; IBM Plex Mono body. Overprint effect: headlines get a 2px pink offset duplicate. Highlighter bars behind key lines. Images get halftone-dot treatment. Marginalia rotate -3°.',
    colors: {
      primary: '#2b44ff',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 112',
      paddingScale: '18 / 32 / 48',
      grid: '8-col with one deliberate rule-breaker per page (span 3, offset 1)',
    },
    motion: {
      pageLoad: 'Everything appears at once — it was photocopied, not staged',
      hoverStates: 'Overprint shift 120ms',
      transitions: 'Instant to snappish, 100–150ms',
      scroll: 'Marginalia scroll 0.92x, lagging like a loose page',
    },
    accessibility:
      'Toner on xerox 15.5:1; xerox on riso blue 6.3:1. Focus 2px pink outline. Riso pink/blue pairs never carry text together. Marginalia duplicated visually adjacent.',
    responsive:
      'The rule-breaker straightens under 640px. Courier clamps 2rem→3.375rem. Staple marks hide on mobile.',
    codeExample:
      '<article class="page">\n  <p class="masthead">ISSUE №12 — FREE</p>\n  <h1>OVERPRINT &<br/>UNDERDOGS</h1>\n  <button class="btn-riso">Read the issue</button>\n</article>',
    accent: '#2b44ff',
    motif: 'dashed-borders',
    layout: 'asymmetric',
    useCases: ['Publishing', 'News', 'Music'],
    signatureCss: `
.dv-hero h1 { font-family: 'Courier Prime', monospace; text-shadow: 3px 3px 0 #ff48b0; }
.dv-kicker { background: #2b44ff; color: #f2f0eb; padding: 2px 8px; transform: rotate(-1deg); display: inline-block; }
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
    designDetails:
      'Stone #26221d, amber #d99a2b, wine-deep #5c2333, parchment #ece2cc. UnifrakturMaguntia display; EB Garamond body. Chapter-drop initials, ruled manuscript lines behind section titles, and hop-vine ✳ ornaments. Amber pour-behind hero media. Buttons look like wax seals on parchment tags.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 152',
      paddingScale: '24 / 40 / 64',
      grid: 'Scriptorium: centered 700px measure; cells of two for the range',
    },
    motion: {
      pageLoad: 'Candle-and-parchment: warm fade with a slow amber sweep, 600ms',
      hoverStates: 'Wax soften 250ms',
      transitions: 'Processional, 300–450ms',
      scroll: 'Ruled lines draw left-to-right on entry, 500ms',
    },
    accessibility:
      'Parchment on stone 11.4:1; amber on stone 7.7:1. Focus 2px amber outline. Blackletter confined to ≥28px. Ornament glyphs aria-hidden.',
    responsive:
      'Range cells stack under 720px. Blackletter clamps 2.25rem→3.75rem and never shrinks below 1.75rem.',
    codeExample:
      '<section class="cellar">\n  <p class="verse">BREWED UNDER RULE ✳ SINCE THE FLOOD</p>\n  <h1>The Scriptorium pours.</h1>\n  <button class="btn-seal">Taste the batch</button>\n</section>',
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
    designDetails:
      'Sketchbook #f7f4ec, pencil #3c3a35, red pencil #c0392b, tape #e8d9a0. Amatic SC display (tall hand caps); Karla body. Pencil-rule underlines (wobbly SVG path look via border-image or dashed), taped photo corners (4 rotated tape strips), and margin notes rotated ±2–3°. Frames-per-second dotted dividers.',
    colors: {
      primary: '#c0392b',
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
      primary: 'Red pencil: #c0392b bg, sketch text, radius 10px 4px 12px 5px (hand-drawn), padding 12px 26px, 700',
      secondary: 'Pencil outline sketch, transparent bg, wobbly border',
      tertiary: 'Pencil link with margin-arrow → and red underline scribble',
      radius: 'Hand-drawn: each corner slightly different (10/4/12/5)',
      hover: 'Sketch shakes once (1° wiggle) and underline re-scribbles, 200ms',
      cards: 'Taped-in frames: photo with 4 tape corners, caption in margin',
      forms: 'Ruled-paper inputs, red pencil focus',
      navigation: 'Margin tabs on the right edge like a physical notebook',
      modals: 'Torn notebook page with red-pen header',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 36 / 64 / 120',
      paddingScale: '20 / 36 / 52',
      grid: 'Notebook: wide left margin (180px) for notes, content 640px',
    },
    motion: {
      pageLoad: 'Pages flip in with a 1° settle; tape presses last, 400ms',
      hoverStates: 'Single wiggle 200ms — pencil physics',
      transitions: 'Quick sketch strokes, 180–260ms',
      scroll: 'Margin notes parallax 0.9x like loose inserts',
    },
    accessibility:
      'Pencil on sketchbook 10.9:1; red pencil 5.2:1 at 700. Focus 2px red outline. Hand-drawn wiggle disabled under reduced-motion. Margin notes always have inline duplicates.',
    responsive:
      'Margin folds away under 900px; notes become inline. Amatic clamps 2.5rem→4.5rem (it runs small). Tape corners persist.',
    codeExample:
      '<article class="spread">\n  <p class="note">saw this twice →</p>\n  <h1>NOTES ON<br/>SLOW LIGHT</h1>\n  <button class="btn-sketch">Read the notebook</button>\n</article>',
    accent: '#c0392b',
    motif: 'grain-overlay',
    layout: 'magazine',
    useCases: ['Film & TV', 'Photography', 'Publishing'],
    signatureCss: `
.dv-hero h1 { font-family: 'Amatic SC', cursive; letter-spacing: .08em; }
.dv-kicker { color: #c0392b; transform: rotate(-2deg); display: inline-block; }
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
    designDetails:
      'Milk #fff8ee, berry punch #e5527a, banana #f7c948, mint #7fd8be, sky #7cc5f7. Gaegu display (tall friendly handwriting); Quicksand body. Sprinkle dividers (repeating-linear-gradient dashes rotated), squishy 24px-radius cards with one flat bottom edge, and a sticker sheet of rotating badges. Hover = squash to 0.96 then overshoot.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 36 / 68 / 128',
      paddingScale: '22 / 36 / 56',
      grid: 'Playroom: 2-col with a wide activity row; nothing too tidy',
    },
    motion: {
      pageLoad: 'Stickers peel on (rotate + settle), sprinkles fall 8px, 400ms',
      hoverStates: 'Squash-stretch spring 220ms',
      transitions: 'Bouncy but brief, 200–280ms',
      scroll: 'Bunting waves gently; sprinkles stay put (performance)',
    },
    accessibility:
      'Cocoa on milk 10.2:1; milk on berry 4.6:1 at 700. Focus 3px berry ring with 2px offset. All bounce disabled under reduced-motion (fade only). Prices always in Quicksand 700.',
    responsive:
      'Playroom stacks under 720px; bunting thins to 6 flags. Gaegu clamps 2.5rem→4rem. Hit areas never drop below 48px.',
    codeExample:
      '<section class="menu-kids">\n  <p class="today">today! ✿</p>\n  <h1>Pancakes &<br/>playdough.</h1>\n  <button class="btn-squish">See the menu</button>\n</section>',
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
    designDetails:
      'Cabinet black #0d0b10, neon pink #ff2d78, tube cyan #22e0e6, score amber #ffc247. Bungee Shade display; Space Grotesk body. Scanlines (repeating-linear-gradient at 4% opacity), tube-glow text-shadows, and a marquee ticker for announcements. Buttons are arcade buttons: glossy dome with ring light. High-score rows get blink on entry.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '20 / 36 / 56',
      grid: 'Cabinet row: 3-col leaderboard grid over a wide banner',
    },
    motion: {
      pageLoad: 'Power-on: CRT flash (white 8% overlay), tubes flicker alive, 500ms',
      hoverStates: 'Tube flicker 220ms',
      transitions: 'Fast and electric, 150–220ms',
      scroll: 'Marquee scrolls continuously; cards tilt 1° on hover',
    },
    accessibility:
      'Lilac on cabinet 12.9:1; amber on cabinet 11.2:1. Focus 2px amber glow ring. Flicker frequency kept under 3Hz (seizure-safe) and disabled under reduced-motion. Scanlines decorative at 4%.',
    responsive:
      'Leaderboard 3→1 under 760px. Bungee clamps 2rem→3.75rem. Marquee pauses on tap. Tube glow halves on mobile GPUs.',
    codeExample:
      '<section class="cabinet">\n  <p class="coin">INSERT COIN ▮</p>\n  <h1>HIGH SCORE<br/>NIGHTS</h1>\n  <button class="btn-start">Press start</button>\n</section>',
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
