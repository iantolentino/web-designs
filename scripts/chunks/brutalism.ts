  {
    id: 'concrete-slab',
    name: 'Concrete Slab',
    category: 'Brutalism',
    tags: ['concrete', 'stencil', 'massive', 'raw'],
    description: 'Poured-concrete pages with stencil type and zero finish.',
    designPhilosophy:
      'Structure exposed. The page is a slab: board-formed gray, rebar grid lines, stencil caps for signage. Nothing decorative survives the pour. If it does not hold weight, it does not ship.',
    designDetails:
      'Board-formed concrete #d8d3c9 with near-black ink #1d1b18 and oxide-red #a33b2a stamp marks. Oswald condensed caps carry signage at heavy tracking; Archivo does the labor below. Buttons are 0px stencil plates; cards are form-work panels with visible 1px seam lines. Shadows are cast, not soft: 6px hard offset.',
    colors: {
      primary: '#2e2c28',
      secondary: '#6b675e',
      accent: '#a33b2a',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '0 / 24 / 48 / 96 / 160',
      paddingScale: '16 / 32 / 56',
      grid: 'Visible 12-col with 1px seam rules; 1280px max, no gutters under 24px',
    },
    motion: {
      pageLoad: 'Panels drop 12px and settle with a one-bounce thud, staggered 70ms',
      hoverStates: 'Presses are mechanical: 90ms down, 120ms up, no easing comfort',
      transitions: 'steps(2) for color, cubic-bezier(.2,0,0,1) for movement',
      scroll: 'Sections butt against each other; seams never overlap',
    },
    accessibility:
      'Ink on concrete 12.9:1; oxide stamps 5.4:1 at 600 weight. Focus is a 3px oxide outline. Uppercase signage has sentence-case aria-labels. Reduced-motion replaces drops with hard cuts.',
    responsive:
      'Slabs stack with seams preserved under 820px; stencil display clamps 2.6rem→5rem. Press shadows shrink to 3px on touch.',
    codeExample:
      '<section class="slab">\n  <h1>FORMWORK<br/>NO. 04</h1>\n  <button class="stamp">POUR ORDER</button>\n</section>',
    accent: '#a33b2a',
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
    designDetails:
      'Photocopy paper #f0ede4 with toner black #161616 and crimson #d92b2b. Archivo Black headlines get double-exposure offsets (1px ink over 1px red); Space Mono carries copy like typewritten ransom notes. Borders are 2px ink at slight rotations, and halftone grain sits over every surface.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 104 / 168',
      paddingScale: '14 / 28 / 44',
      grid: 'Broken 12-col: elements deliberately overlap the rules; 1200px max',
    },
    motion: {
      pageLoad: 'Sheets slam in rotated −2deg→0 with a toner shake, 120ms',
      hoverStates: 'Misprint offsets slide 100ms; redaction bars wipe 140ms',
      transitions: 'linear, mostly — punk means abrupt',
      scroll: 'Halftone band positions jitter ±2px between sections',
    },
    accessibility:
      'Ink on paper 15.4:1; crimson 4.8:1 with 700 weight. Rotations stay ≤2deg to preserve legibility; all rotated elements keep axis-aligned hit areas. Reduced-motion kills shakes and wipes.',
    responsive:
      'Rotations flatten to 0 under 720px; the torn nav becomes a stacked list with crimson index numbers. Display clamps 2.5rem→4.75rem.',
    codeExample:
      '<main class="xerox">\n  <h1>STAPLED<br/>TOGETHER.</h1>\n  <button class="misprint">READ ISSUE 7</button>\n</main>',
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
    designDetails:
      'Chassis #15181c with panel #20262c, safety-orange #ff7a1a actuators, gauge-blue #4f9bc4 readouts, and #e6e9ec text. Archivo caps label each instrument; IBM Plex Mono renders values. Buttons are guarded switches: 4px radius, 2px orange border, depressed state inverts. Panels carry 1px #2c343b weld seams and 45° corner cuts on alarms.',
    colors: {
      primary: '#ff7a1a',
      secondary: '#20262c',
      accent: '#4f9bc4',
      neutral: '#2c343b',
      background: '#15181c',
      text: '#e6e9ec',
    },
    typography: {
      displayFont: 'Archivo',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '12 / 24 / 40 / 72 / 120',
      paddingScale: '12 / 18 / 28',
      grid: 'Dashboard: 200px rail + fluid gauges on 1240px; rows snap to 4px',
    },
    motion: {
      pageLoad: 'Panels power on row by row: border flashes orange then settles, 200ms each',
      hoverStates: 'LEDs light instantly (80ms); gauges ease 300ms',
      transitions: 'steps for LEDs, ease-out for gauges — machines mix both',
      scroll: 'Alarm headers stay pinned until their group passes',
    },
    accessibility:
      'Text on chassis 11.2:1; orange on chassis 6.3:1. Focus is a 2px orange ring. The blinking caret pauses under prefers-reduced-motion; gauges render numeric values alongside needles.',
    responsive:
      'The rail folds to a top switch strip under 900px; gauges keep 120px minimums. Mono values scale with clamp() so readouts never wrap.',
    codeExample:
      '<div class="instrument">\n  <span class="label">LINE PRESSURE</span>\n  <strong class="value">4.82 <em>bar</em></strong>\n  <button class="switch-armed">ENGAGE</button>\n</div>',
    accent: '#ff7a1a',
    motif: 'mono-labels',
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
    designDetails:
      'Stucco #efe6d8 walls with clay #b4552d masses, shade concrete #4a4640, and oasis teal #2e6e5e accents. Oswald caps carry wayfinding; Archivo sets body. Buttons are 0px baked-clay plates with 4px sun shadows. Cards are shade blocks — dark panels that cool the page rhythm like a covered walk.',
    colors: {
      primary: '#b4552d',
      secondary: '#4a4640',
      accent: '#2e6e5e',
      neutral: '#ddd3c2',
      background: '#efe6d8',
      text: '#262019',
    },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Archivo',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 72 / 120 / 184',
      paddingScale: '20 / 36 / 60',
      grid: 'Deep 12-col with dramatic 2/3 + 1/3 masses; 1240px max',
    },
    motion: {
      pageLoad: 'Masses slide in from the sun side, 240ms, like shade advancing',
      hoverStates: 'Shadow lengthening only, 160ms — heat, not bounce',
      transitions: 'ease-in for shadows, ease-out for text',
      scroll: 'Shade cards stick briefly to cool the scroll rhythm',
    },
    accessibility:
      'Text on stucco 12.1:1; stucco on clay 4.5:1 at 600 weight and ≥18px. Focus is a 3px teal outline. All uppercase wayfinding has sentence-case duplicates for assistive tech.',
    responsive:
      'Masses stack shade-first under 840px; the clay bar condenses to a sun-dial menu. Display clamps 2.4rem→4.5rem.',
    codeExample:
      '<section class="sunbelt">\n  <h1>BUILT FOR<br/>HIGH NOON.</h1>\n  <button class="clay-plate">TOUR THE GROUNDS</button>\n</section>',
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
    designDetails:
      'Void #070707 with white #f0f0f0 type and signal blue #2f6bff reserved for one action or marker per screen. Archivo Black headlines sit flush to edges; Archivo body stays small and exact. Cards are darker-than-void panels with 1px #262626 edges. Full-bleed sections stack like monolith faces.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 48 / 88 / 144 / 224',
      paddingScale: '24 / 48 / 80',
      grid: 'Full-bleed bands; inner column 1080px; type bleeds to the viewport edge on heroes',
    },
    motion: {
      pageLoad: 'Faces slide over one another like a closing shutter, 300ms',
      hoverStates: 'Signal under-edge only, 140ms — restrained as a status LED',
      transitions: 'cubic-bezier(.3,0,.2,1); heavy but silent',
      scroll: 'Bands stack with 1px #262626 seams; heroes pin for half a viewport',
    },
    accessibility:
      'White on void 19.3:1; signal blue on void 4.9:1 for large UI. Focus is a 2px blue outline offset 3px. The single-signal rule is enforced: blue never decorates, it only marks action or state.',
    responsive:
      'Heroes clamp 2.8rem→5.25rem; bands collapse seams and pin less on mobile to save scroll budget.',
    codeExample:
      '<section class="monolith">\n  <h1>ONE SLAB.<br/>ONE SIGNAL.</h1>\n  <button class="signal">ENTER</button>\n</section>',
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
    designDetails:
      'Ledger paper #f5f2e6 with ink #1f231d, banker’s green #1d5c3f, and stamp red-orange #d95d2b. IBM Plex Mono sets every number; Karla carries prose between the rules. Rows sit on 1px #d8d3bd rulings with dashed cut lines between entries. Stamps rotate −3° with 2px ink borders.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 32 / 56 / 96 / 152',
      paddingScale: '12 / 24 / 40',
      grid: '12-col with visible column rules in tables; 1180px max, measure 620px',
    },
    motion: {
      pageLoad: 'Entries rule themselves in top to bottom, 40ms per row',
      hoverStates: 'Highlighter wipes and stamp rotations, 120ms — audit-fast',
      transitions: 'ease-out, short; nothing lingers',
      scroll: 'A running total bar sticks to the top and updates per section',
    },
    accessibility:
      'Ink on ledger paper 13.8:1; green 6.8:1. Numeric tables keep real table semantics. Dashed cut lines are aria-hidden. Stamps carry text duplicates of their meaning without the rotation.',
    responsive:
      'Ledger tables scroll horizontally in a ruled frame under 760px; stamps flatten to 0°. Display clamps 2rem→3.5rem.',
    codeExample:
      '<article class="entry">\n  <span class="no">047</span>\n  <h2>Quarterly Reckoning</h2>\n  <table class="ruled">…</table>\n</article>',
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
    designDetails:
      'Plank gray #ebe9e4 with charcoal #1c1c1c poles, hazard #f2c230 tape, and safety white #f2f0ea panels. Archivo 800 caps bolt the headlines; IBM Plex Mono tags every measurement. Cards are plank boards with visible end-grain tops; hazard tape stripes key sections. Pole borders are 3px double lines.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 96 / 160',
      paddingScale: '16 / 32 / 48',
      grid: 'Visible 24-col micro-grid (2px rules at 8% opacity) under a 12-col content grid, 1200px',
    },
    motion: {
      pageLoad: 'Planks slot into the frame one row at a time, 90ms each',
      hoverStates: 'Tape slides and presses drop — mechanical, 150ms',
      transitions: 'steps(3) for tape, ease-out for slots',
      scroll: 'Pole rules stay fixed while planks scroll behind them',
    },
    accessibility:
      'Charcoal on plank 13.5:1; hazard 9.8:1 with ink text. Focus is a 3px hazard outline. Stripes are aria-hidden; measurements decorative. Reduced-motion stops tape sliding.',
    responsive:
      'The micro-grid hides under 700px; the pole frame folds to corner brackets. Display clamps 2.2rem→4.25rem.',
    codeExample:
      '<section class="zone">\n  <span class="tag">[ WORK ZONE 03 ]</span>\n  <h1>STILL BUILDING.<br/>ALREADY STANDING.</h1>\n</section>',
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
