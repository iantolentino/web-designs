  {
    id: 'gumball',
    name: 'Gumball Machine',
    category: 'Playful',
    tags: ['candy', 'round', 'surprise', 'chunky'],
    description: 'Chunky glass-dome fun — turn the knob, get a color, smile anyway.',
    designPhilosophy:
      'The whole system is a gumball machine: a serious chrome base (solid layout, honest hierarchy) with a glass dome of color on top. Every interaction should dispense something — a hue, a confetti burst, a stamp. Utility stays chewy: nothing is so playful it stops working, nothing so useful it stops being fun.',
    designDetails:
      'Candy red, lemon, and blueberry over cream, all at full saturation with 2px ink outlines and jawbreaker highlights. Fredoka carries display at 700; Nunito keeps body friendly. Buttons are knobs — circular push states with a mechanical 2px press. Cards look like gumballs in a tray: circles, domes, and rounded squares mixed in one strict grid.',
    colors: {
      primary: '#ef476f',
      secondary: '#118ab2',
      accent: '#ffd166',
      neutral: '#f4f1f7',
      background: '#fffdf6',
      text: '#241d33',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 68',
      lineHeights: 'Display 1.05, body 1.62',
      letterSpacing: 'Display 0, labels 0.1em uppercase',
    },
    components: {
      primary:
        'Candy #ef476f knob, ink 2px border, radius 999px, cream text, weight 700, highlight dot top-left, press = translate 2px + shadow shrink',
      secondary: 'Cream knob with 2px ink border and blueberry text; hover fills blueberry 12%',
      tertiary: 'Blueberry underlined link with a tiny ● dispenser dot before it',
      radius: '999px buttons, 22px cards, 16px inputs — jawbreaker geometry',
      hover: 'Dispense: 150ms press-in with a one-bounce settle; badges wobble 4deg once',
      cards: 'Cream tray cards, 2px ink border, 22px radius, one candy-corner dot, padding 26px, shadow 0 4px 0 ink',
      forms: 'Pill inputs with 2px ink borders; focus ring lemon 3px; labels bubble-rounded chips',
      navigation: 'Dome nav — links sit in half-circle glass chips; active chip fills candy red',
      modals: 'Dispenser tray: rounded 28px panel sliding up like the flap opening, 60% ink backdrop',
    },
    spacing: {
      baseUnit: '10px',
      marginScale: '10 / 20 / 40 / 70 / 110',
      paddingScale: '16 / 26 / 42',
      grid: '12-col 1200px, 26px gutter; card trays keep equal domes',
    },
    motion: {
      pageLoad: 'Gumballs drop: hero chips fall 12px with staggered 60ms bounce-settles',
      hoverStates: '150ms mechanical press; wobble 4deg on badges only',
      transitions: 'Springy with hard clamps — fun never breaks layout',
      scroll: 'Tray rows reveal with a 1.02→1 settle, like refilling',
    },
    accessibility:
      'Ink on cream 14.6:1; cream on candy red 4.6:1 (buttons are large/bold). Color never carries meaning alone — every candy state also has a glyph. Focus is a 3px ink outline offset 2px; reduced-motion removes the bounces.',
    responsive:
      'The dome grid goes 4→2→1 columns; knobs stay 48px minimum. Display clamps 2.4rem→4.25rem. The dome nav collapses to a candy-red circle menu at 700px.',
    codeExample:
      '<section class="machine">\n  <h1>Turn the knob. <em>Get a color.</em></h1>\n  <p>A design system with a glass dome and a chrome base.</p>\n  <button class="btn-knob">Dispense</button>\n</section>',
    accent: '#ef476f',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Kids', 'E-commerce', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; box-shadow: 0 4px 0 rgba(36,29,51,.9); }
.dv-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 rgba(36,29,51,.9); }
.dv-card { border: 2px solid rgba(36,29,51,.9); border-radius: 22px !important; box-shadow: 0 4px 0 rgba(36,29,51,.9); }
.dv-hero h1 em { color: #118ab2; }`,
    author: 'Beatrix Kolb',
    createdAt: '2026-08-19',
    popularity: 90,
    trending: true,
  },
  {
    id: 'doodle-desk',
    name: 'Doodle Desk',
    category: 'Playful',
    tags: ['sketchy', 'notebook', 'hand-drawn', 'margin-notes'],
    description: 'A notebook that came alive — graph paper, marker heads, margin notes.',
    designPhilosophy:
      'Work looks better with a doodle in the margin. This system frames every component as notebook paper: graph grids, spiral bindings, tape, and marker annotations that talk back to the content. The hand-drawn layer comments on the typed layer — and the two always agree, because the doodle is the highlight, not the point.',
    designDetails:
      'Graph-paper background (8px cells), ink-navy marker strokes at 2.5px, highlighter sweeps in yellow behind key phrases. Caveat for annotations, Be Vietnam Pro for content. Borders wobble via SVG-style irregular radii; cards are taped photos and index cards. The active nav item gets a circled scribble.',
    colors: {
      primary: '#2563eb',
      secondary: '#1e293b',
      accent: '#fde047',
      neutral: '#f8fafc',
      background: '#fefce8',
      text: '#1e293b',
    },
    typography: {
      displayFont: 'Be Vietnam Pro',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 66',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display -0.01em, annotations 0',
    },
    components: {
      primary:
        'Marker-blue rounded rect, radius 12px with one irregular corner (16px), white text, 2.5px ink border, highlighter sweep on hover',
      secondary: 'Index-card button: cream, ruled lines, 2px ink border, slight 0.8deg tilt',
      tertiary: 'Caveat-annotated link with a hand-drawn arrow pointing at it',
      radius: '12px with ±4px irregularities — nothing machine-perfect',
      hover: 'Highlighter swipe: yellow sweep behind text 200ms; tape corners lift 2px',
      cards: 'Index cards and taped polaroids: cream, ruled or graph lines, 2px ink border, tape strip top, 0.5-1.5deg tilts',
      forms: 'Fill-in-the-blank inputs: dotted bottom borders on paper; focus draws a marker box around the blank',
      navigation: 'Top spiral binding with tab links; the active tab is a bigger tab with a circled scribble',
      modals: 'A pulled-out notebook page: larger, spiral left edge, ink 25% backdrop, 240ms flip-in',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 18 / 32 / 64 / 100',
      paddingScale: '14 / 24 / 40',
      grid: '8px graph cells visible; 12-col 1220px composition grid on top',
    },
    motion: {
      pageLoad: 'Tape strips stick 200ms after their cards land; annotations draw in last',
      hoverStates: 'Highlighter sweeps 200ms; tilts straighten',
      transitions: 'Hand-timed — slightly uneven, never sloppy',
      scroll: 'Margin doodles parallax 5% opposite the content column',
    },
    accessibility:
      'Ink on paper 13.9:1; marker blue on cream 5.4:1 for text links. Highlighter never sits under body copy — only display phrases. Focus is a 2.5px ink marker outline; annotations are aria-hidden so screen readers get clean text.',
    responsive:
      'The graph grid fades under 700px to save ink on small screens; cards un-tilt to 0.2deg. Display clamps 2.2rem→4.1rem. Spiral tabs scroll horizontally on mobile.',
    codeExample:
      '<section class="page">\n  <h1>Margin notes <em>welcome.</em></h1>\n  <p class="note-caveat">this is the good part →</p>\n  <button class="btn-marker">Highlight this</button>\n</section>',
    accent: '#2563eb',
    motif: 'dashed-borders',
    layout: 'asymmetric',
    useCases: ['Education', 'Productivity', 'Portfolio'],
    signatureCss: `
.dv-site { background-image: linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.06) 1px, transparent 1px); background-size: 8px 8px; }
.dv-card { background: #fffef5; border: 2px solid rgba(30,41,59,.85); transform: rotate(-0.6deg); }
.dv-card:nth-child(even) { transform: rotate(0.7deg); }
.dv-hero h1 em { background: linear-gradient(transparent 55%, #fde047 55%); }
.dv-kicker { font-family: 'Caveat', cursive; font-size: 1.2em; text-transform: none; letter-spacing: 0; }`,
    author: 'Sana Qureshi',
    createdAt: '2026-08-21',
    popularity: 86,
  },
  {
    id: 'bounce-house',
    name: 'Bounce House',
    category: 'Playful',
    tags: ['inflatable', 'springy', 'oversized', 'bright'],
    description: 'Inflated UI you want to jump in — everything squishes, nothing breaks.',
    designPhilosophy:
      'Physics is the brand: everything has mass, and mass is delightful. Buttons compress, cards wobble, sections land with a squash-and-stretch. The palette is inflatable-vivid, the type is balloon-rounded, and the whole page behaves like a castle you are legally allowed to jump in. Beneath it, sober spacing keeps the bounce readable.',
    designDetails:
      'Hot magenta, pool blue, and sunshine on white, all with balloon gradients (light top-left, deep bottom-right). Baloo 2 display over Nunito body. The squash-and-stretch is codified: press = scaleY(0.94) scaleX(1.04), release overshoots 6%. Shadows sit tight under objects like they are resting on the floor of the castle.',
    colors: {
      primary: '#e0479e',
      secondary: '#0e7fc0',
      accent: '#ffb703',
      neutral: '#eef6fb',
      background: '#ffffff',
      text: '#24243a',
    },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 72',
      lineHeights: 'Display 1.08, body 1.64',
      letterSpacing: 'Display 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Magenta balloon pill, radius 999px, white text, weight 800, gradient highlight, press squashes scaleY(0.94)',
      secondary: 'Pool-blue outline pill, 2.5px border, white fill; hover inflates 1.03',
      tertiary: 'Magenta link with a bouncing underline dot that hops on hover',
      radius: '999px buttons, 28px cards — everything inflated to max safe pressure',
      hover: 'Inflate 1.03 + 200ms squash on release; nothing translates, things change shape',
      cards: 'Balloon cards: 28px radius, white→tint gradient, 2px tint border, padding 28px, shadow 0 6px 0 tint',
      forms: 'Balloon inputs 999px radius; focus inflates the ring to 4px pool blue',
      navigation: 'Inflated raft bar: pill segments that squish when the active one lands',
      modals: 'Bounce castle panel: 32px radius, drops in with 2 bounces, 55% ink backdrop',
    },
    spacing: {
      baseUnit: '10px',
      marginScale: '10 / 22 / 40 / 72 / 116',
      paddingScale: '18 / 30 / 48',
      grid: '12-col 1220px, 28px gutter; rafts and trays share baselines',
    },
    motion: {
      pageLoad: 'Sections drop in and squash-land 400ms each, 70ms stagger',
      hoverStates: 'Inflate 160ms, squash on release 220ms with 6% overshoot',
      transitions: 'All spring curves; duration capped at 400ms',
      scroll: 'Card trays land with a group squash — one squash per viewport, never per element',
    },
    accessibility:
      'Ink on white 13.2:1; white on magenta 4.7:1 at bold weights. Squash-and-stretch never exceeds 6% so text stays legible mid-motion. Focus is a 4px pool-blue ring; reduced-motion replaces bounces with fades.',
    responsive:
      'Inflation scales down on mobile: radii drop to 20px cards. Display clamps 2.5rem→4.5rem. The raft nav deflates into a single pill menu under 700px.',
    codeExample:
      '<section class="castle">\n  <h1>Serious? <em>We bounce.</em></h1>\n  <p>Press anything. Everything has air in it.</p>\n  <button class="btn-balloon">Jump in</button>\n</section>',
    accent: '#e0479e',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Kids', 'Fitness', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.35), transparent 40%); }
.dv-btn:active { transform: scaleY(0.94) scaleX(1.04); }
.dv-card { border-radius: 28px !important; box-shadow: 0 6px 0 rgba(224,71,158,.25); }
.dv-hero h1 { text-shadow: 0.03em 0.03em 0 rgba(224,71,158,.3); }`,
    author: 'Poppy Lang',
    createdAt: '2026-08-23',
    popularity: 82,
  },
  {
    id: 'storybook-night',
    name: 'Storybook Night',
    category: 'Playful',
    tags: ['bedtime', 'moonlit', 'cozy-tale', 'illustrated'],
    description: 'A bedtime story at screen brightness — moonlit blues, soft whimsy.',
    designPhilosophy:
      'Playful, but for the hour when the lights go down. This system tells a story: dusk-navy paper, moon-cream type, one lantern-gold accent that walks the reader through the page like a night-light. Whimsy comes from illustration-like borders and star-scatter details — never from noise, because the reader is getting sleepy.',
    designDetails:
      'Dusk navy (#1b2440) with cream type and lantern gold accents; constellation dots and a CSS moon arc decorate section breaks. Quicksand display at 600 over Nunito body keeps it soft but readable at night brightness. Cards are book pages with rounded fore-edges; the modal is a pop-up book spread. Motion is a slow blink — everything at sleep tempo.',
    colors: {
      primary: '#f2c14e',
      secondary: '#2c3a5c',
      accent: '#9bb1d4',
      neutral: '#232f4e',
      background: '#1b2440',
      text: '#f5ecd7',
    },
    typography: {
      displayFont: 'Quicksand',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 64',
      lineHeights: 'Display 1.12, body 1.72',
      letterSpacing: 'Display 0.005em, kicker 0.18em uppercase',
    },
    components: {
      primary:
        'Lantern-gold pill, dusk text, radius 999px, weight 700, warm glow 0 0 24px rgba(242,193,78,.35)',
      secondary: '1px rgba(245,236,215,.35) outline pill, cream text; hover glows faint gold',
      tertiary: 'Cream link with gold dotted underline (storybook footpath)',
      radius: '999px buttons, 20px cards with 8px fore-edge shading',
      hover: 'Night-light: elements brighten 8% with a soft gold glow, 300ms',
      cards:
        'Book pages #232f4e, 20px radius, 1px rgba(245,236,215,.16) border, padding 28px, subtle fore-edge gradient on the left',
      forms: 'Rounded inputs on navy with cream dotted focus underlines; labels in small-caps cream',
      navigation: 'Night-cap bar with moon-phase bullets between links; active link glows gold',
      modals: 'Pop-up book spread: center-creased panel that unfolds 320ms, backdrop dusk 70%',
    },
    spacing: {
      baseUnit: '10px',
      marginScale: '10 / 24 / 44 / 80 / 120',
      paddingScale: '20 / 32 / 48',
      grid: 'Single 1040px story column with wide margins for star scatter',
    },
    motion: {
      pageLoad: 'Lights dim in: background brightens from darker, content fades 600ms',
      hoverStates: '300ms glow only — no movement at bedtime',
      transitions: 'Slow blinks; nothing under 250ms',
      scroll: 'Constellations twinkle (opacity 0.6→1) as sections arrive',
    },
    accessibility:
      'Cream on dusk navy 11.8:1; gold on navy 9.4:1. Glow is always paired with a brightness or border change. Focus is a 3px gold outline; reduced-motion keeps the dim-in as a plain fade.',
    responsive:
      'The story column stays single-column at every width — it is a book. Display clamps 2.3rem→4rem. Moon-phase nav bullets hide under 640px; links wrap warmly.',
    codeExample:
      '<section class="chapter">\n  <h1>One more <em>chapter.</em></h1>\n  <p>Read me at 30% brightness. I was designed for it.</p>\n  <button class="btn-lantern">Read on</button>\n</section>',
    accent: '#f2c14e',
    stage: '#141c33',
    motif: 'soft-shadows',
    layout: 'centered',
    useCases: ['Kids', 'Education', 'Health'],
    signatureCss: `
.dv-site { background: radial-gradient(90% 60% at 70% -10%, #2c3a5c, #1b2440 60%); }
.dv-section + .dv-section::before { content: '✦'; display: block; text-align: center; color: rgba(242,193,78,.6); margin-bottom: 1em; }
.dv-hero h1 em { color: #f2c14e; }
.dv-card { border-radius: 20px !important; }`,
    author: 'Elif Demir',
    createdAt: '2026-08-25',
    popularity: 88,
  },
  {
    id: 'arcade-pop',
    name: 'Arcade Pop',
    category: 'Playful',
    tags: ['arcade', 'pixel-adjacent', 'high-score', 'coin-op'],
    description: 'Coin-op energy without the pixel cosplay — glossy, loud, scorekeeping.',
    designPhilosophy:
      'The arcade cabinet, not the 8-bit sprite: glossy plastics, backlit marquees, coin-slot chrome, and a score counter always running. This is playful for teens and adults — competitive, fast, a little sweaty. Every interactive element responds like a button that owes you a combo, and the dashboard extras keep the leaderboard honest.',
    designDetails:
      'Cherry red, cyan, and trophy gold on deep cabinet indigo. Bungee for marquee type, Space Grotesk for UI copy. Buttons are backlit plastic (inner glow + top gloss streak); cards are cabinet side-art panels. The dashboard arrangement gets a real leaderboard table with rank medals, and the hero ships a fake high-score ticker.',
    colors: {
      primary: '#ff2e63',
      secondary: '#1b1b3a',
      accent: '#08d9d6',
      neutral: '#252550',
      background: '#161636',
      text: '#f6f6ff',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 20 / 26 / 38 / 76',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.02em, HUD labels 0.14em uppercase',
    },
    components: {
      primary:
        'Backlit cherry-red slab, white text, radius 8px, 1px #000 inset + top gloss streak, weight 700, glow 0 0 20px rgba(255,46,99,.4)',
      secondary: 'Cyan outline slab on cabinet indigo; hover fills 15% and glows',
      tertiary: 'HUD-style link: cyan, monospace-ish tracking, bracket hover states',
      radius: '8px slabs, 12px panels — molded plastic, not bevels',
      hover: 'Credit insert: 150ms glow surge + 1px press; score chip increments on click',
      cards: 'Side-art panels #252550, 12px radius, 1px rgba(8,217,214,.25) border, padding 26px',
      forms: 'Slab inputs on indigo, cyan focus border + glow, HUD labels above',
      navigation: 'Marquee bar with a running attract-mode gradient; links are cabinet buttons',
      modals: 'Attract-mode panel: dark glass, cyan scanline shimmer, 240ms credit-drop-in',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 20 / 36 / 64 / 104',
      paddingScale: '16 / 26 / 44',
      grid: '12-col 1220px; the dashboard uses a 180px sidebar + fluid main',
    },
    motion: {
      pageLoad: 'Marquee flickers on 300ms then holds; content slides up 350ms',
      hoverStates: '150ms glow surges; no easing over 250ms — arcade pace',
      transitions: 'Fast, electric, decisive',
      scroll: 'HUD elements pin briefly at section tops like score headers',
    },
    accessibility:
      'Near-white on indigo 12.1:1; cyan on indigo 8.7:1. Glow never substitutes for state — every glowing element also changes border or fill. Focus is a 3px cyan outline; the attract-mode gradient is paused under reduced-motion.',
    responsive:
      'The marquee condenses to a logo + menu coin at 700px. Display clamps 2.4rem→4.75rem. The leaderboard table scrolls horizontally on mobile with sticky rank cells.',
    codeExample:
      '<section class="cabinet">\n  <h1>INSERT COIN. <em>MAKE PAGES.</em></h1>\n  <p class="hud">HIGH SCORE 999,999 — HELD BY: YOUR LAST PROJECT</p>\n  <button class="btn-start">PRESS START</button>\n</section>',
    accent: '#ff2e63',
    stage: '#101028',
    motif: 'glow-pulse',
    layout: 'dashboard',
    useCases: ['Gaming', 'Events', 'Music'],
    signatureCss: `
.dv-hero h1 { background: linear-gradient(180deg, #fff 20%, #ff2e63 60%, #08d9d6 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-btn { box-shadow: inset 0 2px 0 rgba(255,255,255,.25), 0 0 20px rgba(255,46,99,.35) !important; }
.dv-label { letter-spacing: 0.14em; text-transform: uppercase; }`,
    author: 'Dex Harlow',
    createdAt: '2026-08-27',
    popularity: 84,
  },
  {
    id: 'jelly-toy',
    name: 'Jelly Toy',
    category: 'Playful',
    tags: ['jelly', 'translucent', 'squishy', 'glossy'],
    description: 'Translucent jelly components you can almost pinch — glossy, squishy, sweet.',
    designPhilosophy:
      'Components made of candy jelly: translucent fills, glossy specular highlights, and a wobble physics that answers every touch. The system stays soft-spoken where it counts — text is always solid ink for reading — while surfaces, chips, and buttons are the squishy layer. It is tactile design for screens that deserve more squish.',
    designDetails:
      'Jelly fills at 70% opacity over white, each with a white top-left gloss streak and a darker 1px bottom edge. Strawberry, lime, and blueberry jellies on sugar white. Fredoka display over Quicksand body. The wobble is a real spring: scaleX/scaleY counter-oscillation, one cycle, then still. Shadows are soft and colored by the jelly itself.',
    colors: {
      primary: '#ff6f91',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      neutral: '#eafaf1',
      background: '#fffdfa',
      text: '#2f2a3b',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Quicksand',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 66',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Strawberry jelly pill: rgba(255,111,145,.75) fill, white gloss streak, 1px deep-strawberry bottom edge, white text, radius 999px',
      secondary: 'Lime jelly pill at 55% fill with ink text; hover adds gloss and thickens the bottom edge',
      tertiary: 'Ink link with a jelly underline that wobbles once on hover',
      radius: '999px buttons, 24px cards — jelly has no corners',
      hover: 'Wobble: one 300ms counter-oscillation (scaleX 1.03 / scaleY 0.97, then swap), then settle',
      cards:
        'Jelly panels at 60% fill, 24px radius, gloss streak, 1px tinted bottom edge, padding 28px, colored soft shadow 0 14px 30px rgba(255,111,145,.18)',
      forms: 'Jelly inputs 999px radius at 50% fill; focus fills to 75% and gloss brightens',
      navigation: 'Jelly chip bar — translucent chips that squish individually; active chip doubles its gloss',
      modals: 'A big jelly drop: 30px radius, deep fill 85%, lands with one wobble, 55% ink backdrop',
    },
    spacing: {
      baseUnit: '10px',
      marginScale: '10 / 20 / 38 / 68 / 108',
      paddingScale: '16 / 28 / 44',
      grid: '12-col 1200px, 26px gutter; jelly layer floats above a strict text column',
    },
    motion: {
      pageLoad: 'Jellies drop and wobble once each, 80ms stagger — the tray settling',
      hoverStates: '300ms single wobble; no repeat loops',
      transitions: 'Spring physics only; overshoot 3%',
      scroll: 'Sticky jelly nav gains fill opacity as content passes beneath',
    },
    accessibility:
      'Ink on white 13.8:1; white on strawberry jelly 4.8:1 at bold weights. Text never sits directly on jelly below 70% fill — a solid chip backs it. Focus is a 3px ink outline; reduced-motion replaces wobbles with 200ms fades.',
    responsive:
      'Jelly fills thicken on mobile (75% min) for contrast on bright screens. Display clamps 2.4rem→4.1rem. The chip nav scrolls horizontally; gloss streaks stay top-left at every size.',
    codeExample:
      '<section class="tray">\n  <h1>Squish, don’t <em>stress.</em></h1>\n  <p>Press anything. It wobbles exactly once, like good jelly.</p>\n  <button class="btn-jelly">Give it a poke</button>\n</section>',
    accent: '#ff6f91',
    motif: 'soft-shadows',
    layout: 'spotlight',
    useCases: ['Kids', 'E-commerce', 'Productivity'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.5), transparent 45%); box-shadow: 0 10px 24px rgba(255,111,145,.25) !important; }
.dv-card { border-radius: 24px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.45), transparent 40%); }
.dv-hero h1 em { color: #4ecdc4; }`,
    author: 'Momo Arai',
    createdAt: '2026-08-29',
    popularity: 80,
  },
  {
    id: 'confetti-brew',
    name: 'Confetti Brew',
    category: 'Playful',
    tags: ['coffee', 'confetti', 'cafe', 'warm-fun'],
    description: 'A café that fired confetti cannons over the espresso bar — warm, loud, caffeinated.',
    designPhilosophy:
      'Morning energy with permission to celebrate. Coffee-brown warmth grounds the system; confetti accents (coral, mustard, mint) burst at exactly three places per page — the badge, the active state, the banner. The magazine arrangement reads like a café menu zine: specials first, stories alongside, foam art as section breaks.',
    designDetails:
      'Espresso and cream base with coral, mustard, and mint confetti chips scattered via CSS — always crisp squares and circles, never emoji. Young Serif display over Be Vietnam Pro body. Cards are café chalkboard specials with paper tags; the stats band is the “today at the counter” board. Steam-arc dividers rise between sections.',
    colors: {
      primary: '#6f4e37',
      secondary: '#2e1f16',
      accent: '#ff7f6b',
      neutral: '#f1e7dc',
      background: '#faf3ea',
      text: '#2e1f16',
    },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 64',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display 0, tag labels 0.1em uppercase',
    },
    components: {
      primary:
        'Espresso pill, cream text, radius 14px, weight 700, with a coral confetti chip pinned at the top-right corner',
      secondary: 'Cream tag button with 2px espresso border and a mustard chip; hover tilts -1deg',
      tertiary: 'Underlined espresso link; the underline is a dashed steam line',
      radius: '14px buttons, 18px cards, 999px confetti chips',
      hover: 'Confetti pop: 3 tiny squares/circles burst from the button corner and fade, 400ms, once',
      cards: 'Chalkboard specials: #2e1f16 panels, cream chalk text, 18px radius, paper tag header, padding 26px',
      forms: 'Paper order-form inputs with 2px espresso borders; focus draws a coral cup-ring around the field',
      navigation: 'Menu-board bar with dotted separators; the active link wears a confetti chip',
      modals: 'Cake-box panel: cream with a coral ribbon band, opens 240ms, steam divider on top',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 20 / 36 / 64 / 100',
      paddingScale: '16 / 26 / 42',
      grid: '12-col 1180px; the magazine grid interleaves specials and stories',
    },
    motion: {
      pageLoad: 'Pour-in: content fades up while one steam arc draws across the hero, 550ms',
      hoverStates: 'Confetti pop 400ms; tilts 1deg',
      transitions: 'Warm and quick; pops never repeat while hovered',
      scroll: 'Steam arcs rise 6px as sections enter, then rest',
    },
    accessibility:
      'Espresso on cream 9.8:1; cream on espresso chalk 9.8:1. Confetti chips are decorative and aria-hidden; states always pair with text or border changes. Focus is a 3px coral outline; reduced-motion removes pops.',
    responsive:
      'The menu zine collapses to a single column of specials under 700px; chalk cards keep cream text. Display clamps 2.2rem→4rem. Confetti density halves on mobile.',
    codeExample:
      '<section class="bar">\n  <h1>Brewed loud. <em>Poured loud.</em></h1>\n  <p>Today’s special: a design system with whip.</p>\n  <button class="btn-brew">Order the system</button>\n</section>',
    accent: '#ff7f6b',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Restaurant', 'Events', 'E-commerce'],
    signatureCss: `
.dv-card { background: #2e1f16; color: #faf3ea; border-radius: 18px !important; }
.dv-card .dv-link { color: #ffd166; }
.dv-hero h1 em { color: #ff7f6b; }
.dv-kicker { background: #ffd166; display: inline-block; padding: .15em .6em; border-radius: 999px; }`,
    author: 'Rosie Cafasso',
    createdAt: '2026-08-31',
    popularity: 77,
  },
