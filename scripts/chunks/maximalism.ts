  {
    id: 'baroque-punk',
    name: 'Baroque Punk',
    category: 'Maximalism',
    tags: ['ornate', 'dark', 'gold', 'dramatic', 'goth-romance'],
    description: 'Baroque drama punked with studs, gold leaf, and cathedral shadows.',
    designPhilosophy:
      'Maximalism with a chain on. Sculpted ornament — flourishes, filigree, gold leaf — crashes into studs, boot-black leather, and cathedral shadow. The page behaves like an illuminated manuscript printed in a mosh pit: reverent structure, riotous surface. Every scroll should feel like turning a heavy page.',
    designDetails:
      'Deep oxblood and ink surfaces carry hand-drawn flourish borders; gold is applied like highlighter — thick, unapologetic, on the single most important element per view. Fraunces black-italic display over Be Vietnam Pro body. Shadows are theatrical: long, warm, directional. Motion arrives like an organ chord — one big fade, no stutters.',
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
    spacing: {
      baseUnit: '10px',
      marginScale: '10 / 20 / 40 / 80 / 120',
      paddingScale: '20 / 30 / 50',
      grid: '12-col 1180px, 32px gutter, ruled columns optional',
    },
    motion: {
      pageLoad: 'Full-stage fade 600ms; gold elements glint once (brightness 1.3→1)',
      hoverStates: 'Gold sheen + 200ms ease transforms',
      transitions: 'Slow and theatrical — nothing under 250ms',
      scroll: 'Ornaments parallax 4% — barely, like candle flicker',
    },
    accessibility:
      'Parchment on ink 13.8:1; gold reserved for large display and borders (AA Large). Focus is a 3px gold offset outline. Motion honors reduced-preference with a plain crossfade.',
    responsive:
      'Ornament scales down first, content last. Display clamps 2.6rem→5.25rem. The double-rule nav collapses to a hamburger at 760px; frames keep their 8px inset at every size.',
    codeExample:
      '<section class="altar">\n  <h1 class="gilt">Ornament is <em>ammunition.</em></h1>\n  <p class="creed">Drape the grid in velvet. Then bolt it to steel.</p>\n  <button class="btn-gilt">Enter the nave</button>\n</section>',
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
    designDetails:
      'Bubblegum (#ff5da2, #ffd23f, #7c6ff0) and asphalt (#2b2140, #3d3d3d) share the page in alternating collision bands. Display flips between Bungee stickers and Archivo Black slabs. Borders are 3px and always visible; shadows alternate hard and soft — deliberately inconsistent, consistently intentional.',
    colors: {
      primary: '#ff5da2',
      secondary: '#2b2140',
      accent: '#ffd23f',
      neutral: '#f2e9ff',
      background: '#fff6ec',
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
        'Bubblegum #ff5da2, ink text, 2px border, hard shadow 5px 5px 0 #2b2140, radius 12px, weight 800',
      secondary: 'Asphalt slab #2b2140, candy text, shadow 5px 5px 0 #ff5da2 — sides swap on hover',
      tertiary: 'Sticker-chip text link with a rotated 1.5deg chip background',
      radius: '14px cards, 12px buttons, 999px stickers',
      hover: 'Collision — blocks shift 3px toward each other and shadows swap colors, 180ms',
      cards:
        'Candy or asphalt face (alternating), 3px ink border, radius 14px, padding 26px, shadow 6px 6px 0',
      forms: 'Inputs with 3px ink borders on candy tint; focus inverts to asphalt bg; labels as sticker chips',
      navigation: 'Split bar — left half candy, right half asphalt, wordmark dead center bridging both',
      modals: 'Hazard-striped header band, 3px border, shadow 8px 8px 0, backdrop 55% ink',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 32 / 64 / 104',
      paddingScale: '18 / 28 / 48',
      grid: '12-col 1240px, 24px gutter; collision bands full-bleed',
    },
    motion: {
      pageLoad: 'Blocks slide in from opposite edges 500ms and land with a 4px overshoot',
      hoverStates: 'Swap-and-shift 180ms cubic-bezier(.3,1.4,.5,1)',
      transitions: 'Fast collisions, slow recoveries — 180ms in, 400ms out',
      scroll: 'Bands counter-scroll 6% — candy drifts left, asphalt right',
    },
    accessibility:
      'Ink on candy 8.9:1, candy on asphalt 7.8:1. The two palettes never carry meaning alone — always paired with text. Focus is 3px #2b2140 outline on candy and #ffd23f on asphalt.',
    responsive:
      'Collision bands stack under 768px — candy first, asphalt second, never blended. Bungee drops a weight if it overflows; clamps hold 2.4rem→5.5rem.',
    codeExample:
      '<section class="crash">\n  <div class="candy-half"><h1>Everything,</h1></div>\n  <div class="asphalt-half"><h1>at once.</h1></div>\n  <button class="btn-collide">Pick a side</button>\n</section>',
    accent: '#ff5da2',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Events', 'Music', 'Gaming'],
    signatureCss: `
.dv-card:nth-child(odd) { background: #ff5da2; color: #2b2140; }
.dv-card:nth-child(even) { background: #2b2140; color: #ffd23f; }
.dv-hero h1 { text-shadow: 0.05em 0.05em 0 #ffd23f; }
.dv-nav { background: linear-gradient(90deg, #ff5da2 50%, #2b2140 50%); }
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
    designDetails:
      'Die-cut sticker chips with 2px white kiss-cut borders, rotated -3° to +3°, layered with real z-index overlaps. Frog green, tangerine, and sky blue on cream. Permanent Marker for sticker labels, Be Vietnam Pro for running text. Shadows are tight (2px) like vinyl thickness; one glossy highlight streak per hero sticker.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '10 / 20 / 36 / 60 / 96',
      paddingScale: '16 / 26 / 44',
      grid: '12-col 1200px, 26px gutter; sticker layer absolutely positioned over the grid',
    },
    motion: {
      pageLoad: 'Stickers slap in sequentially, 350ms each, 1.1→1 scale with a rotate settle',
      hoverStates: 'Lift-and-straighten 220ms',
      transitions: 'Bouncy but brief; overshoot capped at 6%',
      scroll: 'The hero peel corner peels 10px further as you scroll past',
    },
    accessibility:
      'Ink on cream 12.9:1; frog-green chips carry ink text at 7.4:1. Rotation never exceeds 3° so nothing reads as broken. Focus is a 3px ink outline; stickers are always labeled with text, not visuals alone.',
    responsive:
      'Overlapping stickers un-overlap under 640px — the storm quiets to single file. Display clamps 2.4rem→5rem. Washi corners hide on mobile to save space.',
    codeExample:
      '<section class="sheet">\n  <span class="sticker st-1">NEW!</span>\n  <h1>Peel. Stick. <em>Repeat.</em></h1>\n  <p>An album of components, each one die-cut to order.</p>\n  <button class="btn-sticker">Start collecting</button>\n</section>',
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
    designDetails:
      'Wine-to-oxblood gradients with soft inner glows; buttons and cards inflate to 24-28px radii with double borders (velvet trim). Playfair Display italic over IBM Plex Sans. A radial spotlight follows the hero object; section headers arrive pre-lit. Shadows are long, warm-tinted, and soft — the room is dark, the design never flat.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '12 / 24 / 48 / 96 / 140',
      paddingScale: '22 / 34 / 56',
      grid: '12-col 1220px, 30px gutter; the hero is a full stage',
    },
    motion: {
      pageLoad: 'Curtain fade 700ms; the spotlight sweeps from the left exactly once',
      hoverStates: '300ms glow and trim brighten; nothing bounces — velvet doesn’t bounce',
      transitions: 'Slow, plush, weighted ease-out curves',
      scroll: 'Sections arrive pre-lit with a 6% brightness ramp',
    },
    accessibility:
      'Blush on wine 8.1:1; gold on oxblood 7.2:1 for large text. Glow is additive color, never the sole indicator. Focus is a 3px gold outline offset 3px; reduced-motion replaces the sweep with a static light.',
    responsive:
      'The stage stays centered at every width; the spotlight radius shrinks on mobile. Display clamps 2.6rem→5.1rem. Pills keep 999px radius at all sizes — inflation is identity.',
    codeExample:
      '<section class="stage">\n  <div class="plush-object" />\n  <h1>Whisper? <em>Never met her.</em></h1>\n  <p>Loud, but make it velvet.</p>\n  <button class="btn-plush">Take the mic</button>\n</section>',
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
    designDetails:
      'Tangerine, cobalt, olive-gold, and cream tiles with 2px grout borders; corner radii vary ±1px so the surface feels hand-set. Bricolage Grotesque display over Space Grotesk body. Section headers sit inside a “feature tile” — a larger asymmetric tessera. Hover lifts individual tiles 2px like a loose piece being pressed back.',
    colors: {
      primary: '#e07a3f',
      secondary: '#274690',
      accent: '#f2c14e',
      neutral: '#eadfc8',
      background: '#faf4e6',
      text: '#33261d',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Space Grotesk',
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
    spacing: {
      baseUnit: '6px',
      marginScale: '6 / 18 / 36 / 72 / 108',
      paddingScale: '18 / 30 / 48',
      grid: '24-col micro-grid 1240px with 2px grout lines throughout',
    },
    motion: {
      pageLoad: 'Tiles fade in per-column with a 30ms stagger — the facade assembles',
      hoverStates: '150ms lift and settle',
      transitions: 'Snappy and tactile; masonry-safe transforms only',
      scroll: 'Mosaic fields parallax as single sheets — the tiles stay locked together',
    },
    accessibility:
      'Ink on cream 12.4:1; cream on cobalt 8.8:1. The color rotation is decorative — no meaning rides on tile color. Focus is a 3px ink outline; keyboard order follows the bedding grid.',
    responsive:
      'The 24-col bedding drops to 12 then 6; tiles re-flow but keep their grout. Display clamps 2.5rem→5.4rem. Feature tiles stack their asymmetric split vertically under 700px.',
    codeExample:
      '<section class="field">\n  <div class="tile feature"><h1>A thousand <em>right answers.</em></h1></div>\n  <div class="tile" />\n  <div class="tile" />\n  <div class="tile" />\n</section>',
    accent: '#e07a3f',
    motif: 'pixel-grid',
    layout: 'magazine',
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
    designDetails:
      'Ink hedges (#0d1f12) with parterre borders; acid green (#b6ff2e) and hot magenta bloom over them in gradients and oversized glyphs. Fraunces black-italic display over Archivo body. Full-bleed bands let the overgrowth run edge to edge while content columns keep order. Motion is growth — things scale up from 0.96 like fast blooms.',
    colors: {
      primary: '#b6ff2e',
      secondary: '#0d1f12',
      accent: '#ff2fb3',
      neutral: '#16281b',
      background: '#0a140d',
      text: '#eef7e6',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Archivo',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96 / 144',
      paddingScale: '20 / 32 / 52',
      grid: '12-col 1280px with full-bleed bands; content capped at 68em',
    },
    motion: {
      pageLoad: 'Bloom cascade 450ms — headers scale 0.96→1 like time-lapse petals',
      hoverStates: 'Spring scale 200ms cubic-bezier(.3,1.5,.5,1)',
      transitions: 'Organic springs; nothing linear',
      scroll: 'Overgrowth bands grow 4% as they enter — vines reaching',
    },
    accessibility:
      'Ink on acid 13.5:1; cream text on ink 14.9:1. Acid appears as background-with-ink or large glow — never thin text. Focus is a 3px acid outline; reduced-motion freezes all growth at full size.',
    responsive:
      'Full-bleed bands keep their bleed at every width. Display clamps 2.6rem→5.6rem. The formal axis collapses to left-aligned under 700px; blooms scale down 30%.',
    codeExample:
      '<section class="parterre">\n  <h1>Grow <em>wild.</em> Trim never.</h1>\n  <p>The hedge was the plan. The vine had other ideas.</p>\n  <button class="btn-acid">Let it grow</button>\n</section>',
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
    designDetails:
      'Riso blue and fluorescent pink inks multiply over warm paper; a 6% grain reads as soy ink on recycled stock. Fraunces black display over Karla body. Buttons print as ink stamps with visible paper margin, and the misregistration is a consistent 3px offset between fill and outline. No pure black anywhere — text is ink blue at heavy weight.',
    colors: {
      primary: '#2b44ff',
      secondary: '#ff48b0',
      accent: '#ffa300',
      neutral: '#efe7da',
      background: '#f6efe3',
      text: '#1d2cc7',
    },
    typography: {
      displayFont: 'Fraunces',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '10 / 24 / 44 / 88 / 132',
      paddingScale: '20 / 32 / 50',
      grid: 'Asymmetric: 7-col text + 5-col flood field, 1260px',
    },
    motion: {
      pageLoad: 'The inks flood in: blue sweeps from the left, pink from the right, the multiply overlap resolves last (600ms)',
      hoverStates: 'Register-correct 250ms',
      transitions: 'Print-press timing — firm starts, soft landings',
      scroll: 'Flood shapes translate 8% against scroll — the ink never fully settles',
    },
    accessibility:
      'Ink blue on paper 8.9:1; paper text on the blue stamp 8.9:1. Pink is decorative flood only — never text. Focus is a 3px blue outline; the grain overlay always sits under text.',
    responsive:
      'The flood field drops below the text under 800px and shrinks to a corner bloom. Stamps keep their offsets at every size — misregistration scales with the stamp.',
    codeExample:
      '<section class="press">\n  <h1>Ink over <em>everything.</em></h1>\n  <p>Two inks walked into a drum. The overlap kept the receipt.</p>\n  <button class="btn-stamp">Pull a print</button>\n</section>',
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
