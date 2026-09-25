import type { DesignSystem } from '../types'

/**
 * Wave 6 — fifty systems authored against the *industrial, scientific, and
 * handmade* end of the catalogue: instruments, kilns, quarries, lidos, seed
 * vaults, and night markets. Each one is a different theory of information
 * density (some read like a run card, some like a tide table), so nothing
 * here is a palette swap of an existing system.
 */

export const wave6Designs: DesignSystem[] = [
  {
    id: 'tide-clock',
    name: 'Tide Clock',
    category: 'Organic',
    tags: ['coast', 'tide', 'estuary', 'research', 'field-notes', 'water'],
    description: 'Tide told in feet, not in hours.',
    designPhilosophy:
      'Tide Clock is designed for people whose day is cut into twelve hours and twenty-five minutes by the moon, not by a clock face. Every screen answers one question — how much water, and how soon — so the page is arranged like a tide table: a ruled column of heights, flood and ebb labelled in the margin, and one italic line for slack water. For coastal research stations, harbour authorities, and sea-school programmes.',
    designDetails:
      'Foam paper #f6f3ec over wet sand #d9cdb9, estuary #123a3a for structure, and a single dune ochre #c98f4a reserved for the falling tide. Section rules are drawn as thin water lines, and every measurement is printed with its unit and its datum in a smaller mono-ish caption. Charts are hand-plotted ripples, not filled areas.',
    colors: {
      primary: '#123a3a',
      secondary: '#6f8f86',
      accent: '#c98f4a',
      neutral: '#d9cdb9',
      background: '#f6f3ec',
      text: '#12211f',
    },
    typography: {
      displayFont: 'Bitter',
      bodyFont: 'Livvic',
      scale: '16 / 18 / 20 / 26 / 34 / 46 / 64',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display -0.015em; captions and datums 0.06em',
    },
    components: {
      primary: 'Solid #123a3a, foam text, radius 3px, 12px 26px padding, 600',
      secondary: '1px #123a3a66 border on foam, transparent fill',
      tertiary: 'Ochre underlined text link with a floating-point value after it',
      radius: '3px controls, 14px cards — a tide-table card is a soft paper slip',
      hover: 'Row tint deepens to #123a3a0d; the rule above the row thickens to 2px, 140ms',
      cards: 'Paper slips with a 2px estuary top rule, ruled interior lines every 24px',
      forms: 'Underlined inputs with the unit printed after the field, estuary caret',
      navigation: 'A ruled datum bar with flood/ebb toggles and the station name in caps',
      modals: 'Slip of paper with a water-line header and a torn-bottom shadow',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 56 / 104 / 160',
      paddingScale: '14 / 26 / 44',
      grid: 'Reading measure 1080px, 12-col with a 4-col datum rail',
    },
    motion: {
      pageLoad: 'Water lines draw left to right, 420ms ease-out, one row apart',
      hoverStates: 'Rule thickening and faint tint, 140ms',
      transitions: 'Ease-out only; nothing overshoots, because water does not bounce',
      scroll: 'A horizontal tide ribbon tracks scroll position in the datum rail',
    },
    accessibility:
      '#12211f on #f6f3ec is 14.6:1, and the ochre #c98f4a on foam is 4.9:1 — used for figures at 18px or larger only. Flood and ebb are labelled in words, never colour alone. Tables expose proper scope headers so screen readers announce heights with their datum.',
    responsive:
      'The datum rail collapses under the table below 880px and the tide ribbon moves above the fold. Chart columns reduce from 24 points to 12 by thinning, not truncating. All figures keep tabular alignment at 320px.',
    codeExample:
      '<section class="tide">\n  <p class="kicker">Station 02 · datum MLLW</p>\n  <h1>High water <em>arrives 04:12.</em></h1>\n  <table class="heights"><tr><th>03:00</th><td>1.8 m</td></tr><tr><th>04:12</th><td>2.6 m</td></tr></table>\n  <button class="btn-primary">Read the tide table</button>\n</section>',
    accent: '#123a3a',
    motif: 'wave-section',
    layout: 'full-bleed',
    useCases: ['Agriculture', 'Travel', 'Education'],
    signatureCss: `.dv-hero { background: radial-gradient(120% 90% at 50% 0%, #eaf3ef 0%, #f6f3ec 62%); }
.dv-hero h1 em { color: #123a3a; font-style: italic; }
.dv-card { border-top: 2px solid #123a3a; }
.dv-stat { border-bottom: 1px solid #c98f4a66; padding-bottom: 8px; }
.dv-btn-primary { box-shadow: inset 0 -2px 0 #0b2a2a; }
.dv-marquee { font-family: 'Bitter', serif; text-transform: uppercase; letter-spacing: 0.28em; font-size: 11px; color: #6f8f86; }`,
    author: 'Nkechi Alabi',
    createdAt: '2026-09-02',
    popularity: 71,
  },
  {
    id: 'wafer-line',
    name: 'Wafer Line',
    category: 'Professional',
    tags: ['semiconductor', 'fab', 'process', 'yield', 'spc', 'manufacturing'],
    description: 'Run cards for the cleanroom floor.',
    designPhilosophy:
      'Silicon is grown in conditions nobody should ever see, so the software that watches it is best kept plain and legible. Wafer Line borrows the run card: one wafer lot per record, process step in the left margin, and a control chart with the specification limits printed on the chart itself rather than hidden in a tooltip. For fab operations, process engineering, and any team whose numbers must survive an audit.',
    designDetails:
      'Cleanroom white #f5f7f8 with a faint 28px horizontal rule so rows never drift, stepper blue #0f5c8c for anything actionable, photoresist orange #d9542b for out-of-control points only, silicon grey #7f8b95 for metrology. Every figure is tabular. Panels are square with a 3px blue spine, because a run card is a printed object that gets signed.',
    colors: {
      primary: '#0f5c8c',
      secondary: '#7f8b95',
      accent: '#d9542b',
      neutral: '#dfe5e9',
      background: '#f5f7f8',
      text: '#161b1f',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 13 / 15 / 18 / 24 / 32 / 44',
      lineHeights: 'Display 1.25, body 1.55',
      letterSpacing: 'Labels 0.1em uppercase; figures 0 with tabular numerals',
    },
    components: {
      primary: 'Solid #0f5c8c, white text, radius 2px, 10px 20px padding, 600',
      secondary: '1px #161b1f26 border, cleanroom fill, mono label',
      tertiary: 'Blue text link with a lot number in tabular mono',
      radius: '2px controls, 4px cards — square enough to print on a run card',
      hover: 'Spine widens to 4px and the row gains a 1px top rule, 100ms linear',
      cards: 'White panels, 1px rule, 3px blue left spine, header strip with the step number',
      forms: 'Boxed inputs with a fixed 92px label column and inline limit hints',
      navigation: 'Shift bar with lot search, step stepper, and a signed-off initial',
      modals: 'Centre sheet with a header strip, no rounding, and a reason-for-change field',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 40 / 72 / 112',
      paddingScale: '10 / 18 / 28',
      grid: '1440px shell with a 220px step rail and a 12-col data grid',
    },
    motion: {
      pageLoad: 'Rows populate top-down at 18ms intervals, no fade',
      hoverStates: 'Spine and rule changes only, 100ms linear',
      transitions: 'Linear and immediate — a process tool does not ease',
      scroll: 'The step rail pins; the active step index updates as you pass sections',
    },
    accessibility:
      '#161b1f on #f5f7f8 is 15.4:1; resist orange on white is 4.6:1 and always paired with a ▲/▼ marker and the words out of control. Control charts carry a text summary of the last five points, so the chart is never the only evidence. Focus ring 2px blue with a 1px white inner offset.',
    responsive:
      'The step rail becomes a horizontal scroller under 900px; run cards stack and the metrology table converts to a two-column definition list with the specification limits preserved verbatim. Chart x-axes drop tick labels before they drop data points.',
    codeExample:
      '<section class="run-card">\n  <p class="kicker">Lot 24-1188 · step 07 of 19</p>\n  <h1>Etch depth <em>in control.</em></h1>\n  <dl class="limits"><dt>LSL</dt><dd>41.2 nm</dd><dt>USL</dt><dd>44.8 nm</dd></dl>\n  <button class="btn-primary">Sign off step</button>\n</section>',
    accent: '#0f5c8c',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Manufacturing', 'Data & Analytics', 'Developer Tools'],
    signatureCss: `.dv-site { background-image: linear-gradient(#161b1f12 1px, transparent 1px); background-size: 100% 28px; }
.dv-card { border: 1px solid #161b1f1f; border-left: 3px solid #0f5c8c; }
.dv-hero h1, .dv-h2 { font-family: 'IBM Plex Mono', monospace; letter-spacing: -0.02em; }
.dv-stat strong, .dv-kpi strong { font-variant-numeric: tabular-nums; }
.dv-badge { font-family: 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; }
.dv-btn-primary { border-radius: 2px; }`,
    author: 'Tomas Brandt',
    createdAt: '2026-09-04',
    popularity: 68,
  },
  {
    id: 'marble-run',
    name: 'Marble Run',
    category: 'Playful',
    tags: ['toys', 'physics', 'kids', 'workshop', 'kinetic', 'classroom'],
    description: 'Momentum, taught with ramps.',
    designPhilosophy:
      'Marble Run explains itself the way a good toy does: you can see where the ball goes next. Everything is a track, a ramp, or a landing pad, and the page leans gently in the direction of travel so the eye is pulled forward by the same force the ball feels. For science classrooms, maker spaces, and toy workshops where the lesson is momentum, not menus.',
    designDetails:
      'Pine-board cream #fdf8ee with steel-blue rails #4f7fc4 and traffic orange #e4572e for anything that moves; a kinetic yellow #f4c145 marks the ball itself. Cards are thick pine beads with a solid bottom shadow, so they read as objects resting on a table. Small rotations (±1.5°) appear on alternating cards to suggest a track that is still settling.',
    colors: {
      primary: '#e4572e',
      secondary: '#4f7fc4',
      accent: '#f4c145',
      neutral: '#f6e3bd',
      background: '#fdf8ee',
      text: '#2a1f16',
    },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 20 / 25 / 33 / 44 / 60',
      lineHeights: 'Display 1.18, body 1.6',
      letterSpacing: 'Display -0.01em; labels 0.02em (never shouty caps)',
    },
    components: {
      primary: 'Solid #e4572e, white text, radius 999px, 13px 28px padding, 700',
      secondary: '2px #4f7fc4 border on cream, blue label, pill radius',
      tertiary: 'Blue text link with a small marble dot that travels on hover',
      radius: '999px controls, 22px cards — everything is a rounded wooden bead',
      hover: 'Button presses down 3px into its own shadow and the ball dot rolls 8px right, 180ms',
      cards: 'Thick cream beads, 22px radius, 0 6px 0 edge shadow plus a soft ambient lift',
      forms: 'Big rounded inputs with a 3px focus outline and a ramp-shaped caret marker',
      navigation: 'Pill bar with a sliding orange marble that marks the active section',
      modals: 'Rounded tray that slides up like a catch basin, with a chunky close bead',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 64 / 96 / 144',
      paddingScale: '16 / 28 / 48',
      grid: 'Fluid 1200px with a two-track zigzag on wide screens',
    },
    motion: {
      pageLoad: 'Cards drop in 60ms apart with a short 4px settle bounce',
      hoverStates: 'Compress-by-3px press plus a rolling dot, 180ms cubic-bezier(.5,1.6,.4,1)',
      transitions: 'Springy but brief — one bounce, never a wobble loop',
      scroll: 'A decorative ball travels the rail between sections, snapped to sections',
    },
    accessibility:
      'The orange primary carries white text at 3.9:1 — accepted only at 18px/700 or larger, with every button also distinguishable by wording. Motion all sits behind prefers-reduced-motion, which swaps the rolling dot for a colour shift. Ramp and track states are labelled with words as well as shape.',
    responsive:
      'The zigzag flattens to a single column under 760px and card rotations are removed so text baselines stay level. Shadows drop from two layers to one under 480px to keep 320px paint cheap. Tap targets stay at least 48px.',
    codeExample:
      '<section class="ramp">\n  <p class="kicker">Kit 04 · gravity only</p>\n  <h1>Where does the <em>ball go?</em></h1>\n  <p class="sub">Drop it in. Follow the track. Predict the landing pad.</p>\n  <button class="btn-primary">Build a track</button>\n</section>',
    accent: '#e4572e',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Kids', 'Education', 'Events'],
    signatureCss: `.dv-card { border-radius: 22px; box-shadow: 0 6px 0 #e0cfa6, 0 14px 26px #0000000f; }
.dv-btn-primary { box-shadow: 0 4px 0 #b23c17; }
.dv-hero h1 em { color: #e4572e; font-style: normal; }
.dv-chip { border: 2px dashed #4f7fc4; }
.dv-stat-card { transform: rotate(-1.2deg); }
.dv-media { border-radius: 22px; }`,
    author: 'Priya Raghunathan',
    createdAt: '2026-09-06',
    popularity: 74,
  },
  {
    id: 'watch-room',
    name: 'Watch Room',
    category: 'Luxury',
    tags: ['horology', 'watches', 'atelier', 'service', 'heritage', 'precision'],
    description: 'A service book for mechanical time.',
    designPhilosophy:
      'A mechanical watch is a tiny town of gears that must be serviced by hand, so Watch Room is a service book before it is a shopfront: reference numbers, service intervals, and an exploded movement drawn as quietly as a technical plate. Typography is engraved-small, rules are tick-marked, and the only flourish is a verdict — in service, or due. For watchmakers, restorers, and catalogues that sell patience.',
    designDetails:
      'Aged silver #f4f2ed with gunmetal #2a2a2c structure, verdigris bronze #6f8a72 for the one accent (patina, never gold), and an aged-silver grey #948d80 for secondary text. Section rules are literal tick marks; case references are set in a 0.16em tracked caps. Animations are a sweep-second cadence: six steps per second, no easing.',
    colors: {
      primary: '#2a2a2c',
      secondary: '#948d80',
      accent: '#6f8a72',
      neutral: '#e6e2d9',
      background: '#f4f2ed',
      text: '#1b1917',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Jost',
      scale: '14 / 16 / 18 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Caps labels 0.16em; display 0.005em',
    },
    components: {
      primary: 'Solid #2a2a2c, silver-white text, radius 1px, 12px 30px padding, uppercase 0.16em tracked',
      secondary: '1px #2a2a2c inset-style rule box with a silver fill and a small reference number',
      tertiary: 'Underlined text link with the reference number in tracked caps',
      radius: '1px controls, 6px cards — a case has edges, not curves',
      hover: 'Case edge brightens and the tick rule under the label gains a third tick, 150ms linear',
      cards: 'Silver plates with a hairline frame, an engraved caption, and a tick-marked footer',
      forms: 'Underlined inputs with a measured 62px label column and a reference hint',
      navigation: 'Tracked caps bar with a small seconds disc marking the active section',
      modals: 'Service slip: framed plate with reference table and a signature line',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 64 / 112 / 176',
      paddingScale: '16 / 30 / 52',
      grid: '1180px with a 5-col movement plate grid and symmetric margins',
    },
    motion: {
      pageLoad: 'The seconds disc completes one full sweep, then content fades in at 240ms',
      hoverStates: 'Third tick appears on the rule, 150ms linear — measured, never bouncy',
      transitions: 'Linear, in six discrete steps per second where a continuous motion would be used',
      scroll: 'Beats, not smooth scrolling: section marks click into place at 1/6s intervals',
    },
    accessibility:
      '#1b1917 on #f4f2ed is 15.1:1; verdigris #6f8a72 on silver is 4.7:1 and only ever accompanies a written verdict. Service intervals are given as days and dates, never just as a gauge. The six-step motion collapses to a plain fade when prefers-reduced-motion is set.',
    responsive:
      'The movement plate grid falls from 5 columns to 2 at 900px and to a single ticked list at 560px, with every reference number kept intact. Case specs stay in definition lists under 420px so nothing is lost to truncation.',
    codeExample:
      '<section class="service">\n  <p class="kicker">Ref. 1188-A · serviced 2026</p>\n  <h1>Twelve jewels, <em>one owner.</em></h1>\n  <dl class="spec"><dt>Interval</dt><dd>every 5 years</dd><dt>Beat rate</dt><dd>28,800 vph</dd></dl>\n  <button class="btn-primary">Book a service</button>\n</section>',
    accent: '#6f8a72',
    motif: 'dashed-borders',
    layout: 'spotlight',
    useCases: ['Fashion', 'Beauty & Spa', 'E-commerce'],
    signatureCss: `.dv-card { border: 1px solid #1b19171f; box-shadow: inset 0 1px 0 #ffffffcc; }
.dv-sep { height: 8px; background-image: repeating-linear-gradient(90deg, #948d80 0 1px, transparent 1px 6px); }
.dv-hero h1 em { color: #6f8a72; font-style: italic; }
.dv-btn-primary { text-transform: uppercase; letter-spacing: 0.16em; font-size: 11px; }
.dv-stat strong { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 500; }
.dv-badge { border: 1px solid #2a2a2c33; background: transparent; }`,
    author: 'Sofia Marchetti',
    createdAt: '2026-09-08',
    popularity: 77,
  },
  {
    id: 'quarry-face',
    name: 'Quarry Face',
    category: 'Brutalism',
    tags: ['quarry', 'stone', 'yard', 'inventory', 'heavy', 'materials'],
    description: 'Stone sold by weight and honesty.',
    designPhilosophy:
      'Stone yards price in tonnes and tell you the flaws before you ask. Quarry Face is built for that transaction: monolith slabs of colour, cut-line rules, and a price list that behaves like a stencilled tag tied to the block. Nothing is rounded, nothing is polite, and every spec — dimension, finish, batch — is printed at the same volume. For quarries, stoneyards, and masonry suppliers.',
    designDetails:
      'Dust #e9e5dd ground with slate #2f3136 mass, machinery orange #dd7218 for weight and price only, and a dull #cdc7bb for the cut faces. Panels carry a 6px offset shadow like a slab standing proud of the floor. Headings are uppercase with a 0.06em track, and prices are set in the slab weight itself.',
    colors: {
      primary: '#2f3136',
      secondary: '#8a8378',
      accent: '#dd7218',
      neutral: '#cdc7bb',
      background: '#e9e5dd',
      text: '#191b1e',
    },
    typography: {
      displayFont: 'Alfa Slab One',
      bodyFont: 'Archivo',
      scale: '15 / 17 / 20 / 26 / 34 / 48 / 68',
      lineHeights: 'Display 1.02, body 1.55',
      letterSpacing: 'Display -0.02em; uppercase labels 0.06em',
    },
    components: {
      primary: 'Solid #2f3136, dust text, radius 0, uppercase label, 16px 32px padding',
      secondary: '3px #191b1e border on dust, offset 4px slab shadow',
      tertiary: 'Uppercase text link that gains a 2px underline on hover',
      radius: '0 everywhere — stone is cut, not bent',
      hover: 'Block shifts 2px down-right into its shadow and the cut line darkens, 90ms steps',
      cards: 'Dust slabs with a 2px slate border, 6px offset shadow, and a stencilled spec footer',
      forms: 'Boxed inputs with heavy 2px borders and uppercase field labels at 11px',
      navigation: 'Uppercase bar with a batch picker and a live tonnage counter',
      modals: 'Slab panel offset from the backdrop by 8px, with a cut-line divider and a stamped confirm',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '32 / 72 / 128 / 200',
      paddingScale: '20 / 36 / 64',
      grid: '1360px with a 3-col slab wall and hard 2px gutters',
    },
    motion: {
      pageLoad: 'Slabs stack in 40ms apart with a hard 2px thunk — no fade at all',
      hoverStates: 'Position shift plus border darkening, 90ms steps(2, end)',
      transitions: 'steps() only: mechanical, counted, never eased',
      scroll: 'Batch markers snap into a hard-edged progress rule',
    },
    accessibility:
      '#191b1e on #e9e5dd is 14.2:1; machinery orange on dust is 3.4:1, so orange is only ever a 4px bar or a numeral set at 24px+, always with the weight printed in text. Focus is a 3px hard outline with zero offset so it reads like a cut line. Reduced motion removes the position shift entirely.',
    responsive:
      'The slab wall steps 3 → 2 → 1 columns at 1024/720px with borders kept intact so blocks stay legible. Dimension tables become stacked label/value pairs under 600px, with units repeated on every value. The tonnage counter moves to the top bar below 480px.',
    codeExample:
      '<section class="block">\n  <p class="kicker">Batch 114 · quarried 2026</p>\n  <h1>HONED GREY, <em>3.4 TONNES.</em></h1>\n  <dl class="spec"><dt>Finish</dt><dd>Honed</dd><dt>Price</dt><dd>£168 / tonne</dd></dl>\n  <button class="btn-primary">RESERVE THE SLAB</button>\n</section>',
    accent: '#dd7218',
    motif: 'hard-shadows',
    layout: 'hero-cards',
    useCases: ['Construction', 'Architecture', 'Manufacturing'],
    signatureCss: `.dv-hero { border-bottom: 6px solid #2f3136; }
.dv-card { border: 2px solid #191b1e; box-shadow: 6px 6px 0 #cdc7bb; }
.dv-btn-primary { text-transform: uppercase; letter-spacing: 0.06em; }
.dv-h2 { text-transform: uppercase; }
.dv-stat { border-left: 4px solid #dd7218; padding-left: 10px; }
.dv-price { font-family: 'Archivo Black', sans-serif; }`,
    author: 'Dara Whelan',
    createdAt: '2026-09-09',
    popularity: 66,
  },
  {
    id: 'contour-sheet',
    name: 'Contour Sheet',
    category: 'Minimalism',
    tags: ['survey', 'topography', 'cartography', 'fieldwork', 'lines'],
    description: 'Surveyed in lines, not in boxes.',
    designPhilosophy:
      'Contour Sheet has no boxes. Every element is a rule, a tick, or a label sitting inside a line, the way a topographic sheet describes a hillside without ever shading it. There are no card fills and no shadows, only elevation: information is separated by distance and by how finely the line is drawn. For surveyors, land registries, and fieldwork tools where a hectare of hill needs to be legible at a glance.',
    designDetails:
      'Contour hairlines run at 0.5px in slope green #6d8a86 with a single water blue #2f6f8f reserved for drainage. Elevation labels sit inline inside the line that carries them, with a gap punched around the text. Buttons are underlined words with coordinate ticks on either side, never filled shapes.',
    colors: {
      primary: '#0f2c33',
      secondary: '#6d8a86',
      accent: '#2f6f8f',
      neutral: '#e7eae6',
      background: '#fbfcfa',
      text: '#10201f',
    },
    typography: {
      displayFont: 'Familjen Grotesk',
      bodyFont: 'IBM Plex Sans',
      scale: '13 / 14 / 16 / 19 / 24 / 32 / 44',
      lineHeights: 'Display 1.3, body 1.6 (interline ruled at 22px)',
      letterSpacing: 'Elevation labels 0.08em; body 0',
    },
    components: {
      primary: 'No fill: primary #0f2c33 text over a 2px baseline, tick marks flanking, radius 0',
      secondary: 'A single hairline under the label, 0.5px, in #6d8a86',
      tertiary: 'Coordinate link with a 4px leader line and a small arrowhead',
      radius: '0 controls, 0 cards — a contour cannot have a corner radius',
      hover: 'The underline thickens to 1.5px and the flanking ticks extend 2px, 120ms',
      cards: 'No card surface: a 0.5px top rule, a title, and open space beneath',
      forms: 'Single-line fields drawn as a ruled baseline with the unit in the margin',
      navigation: 'A sheet index — six numbered rules, no background, no borders',
      modals: 'A larger sheet with a scale bar in the corner and no backdrop',
    },
    spacing: {
      baseUnit: '2px',
      marginScale: '28 / 72 / 128 / 224',
      paddingScale: '0 / 12 / 24',
      grid: 'Sheet 1200px, 24 ruled rows at 22px baseline pitch',
    },
    motion: {
      pageLoad: 'Lines draw progressively left to right, 300ms, in sheet order',
      hoverStates: 'Underline weight only, 120ms — no colour change anywhere',
      transitions: 'Linear, short, and identical in both directions',
      scroll: 'The sheet index marks the row you are currently reading',
    },
    accessibility:
      '#10201f on #fbfcfa is 15.8:1 and every label is 14px or larger, because a hairline interface cannot rely on fills to carry meaning. All interactive elements have a 2px underline even when unfocused, so affordance is never colour-only. Focus adds a 3px offset outline plus the tick extension.',
    responsive:
      'The 24-row sheet becomes 12 rows below 900px by merging adjacent rules, never by clipping labels. Inline elevation labels move above their line under 560px to keep the line unbroken. No element wraps mid-number.',
    codeExample:
      '<section class="sheet">\n  <p class="kicker">Sheet 07 · 1:2500</p>\n  <h1>Slope <em>18%</em>, drainage east.</h1>\n  <p class="sub">— 214 m — 218 m — 226 m —</p>\n  <button class="btn-primary">⌐ Open the sheet ¬</button>\n</section>',
    accent: '#2f6f8f',
    motif: 'swiss-grid',
    layout: 'editorial',
    useCases: ['Architecture', 'Government', 'Agriculture'],
    signatureCss: `.dv-card { background: transparent; border: 0; border-top: 0.5px solid #6d8a86; border-radius: 0; box-shadow: none; padding: 16px 0; }
.dv-btn-primary { background: transparent; color: #0f2c33; border: 0; border-bottom: 2px solid #0f2c33; border-radius: 0; padding: 10px 22px; }
.dv-btn-primary::before { content: '|—'; margin-right: 8px; color: #2f6f8f; }
.dv-btn-primary::after { content: '—|'; margin-left: 8px; color: #2f6f8f; }
.dv-h2 { border-bottom: 0.5px solid #e7eae6; padding-bottom: 6px; }
.dv-stat { border-left: 0.5px solid #6d8a86; padding-left: 12px; }
.dv-nav { border-bottom: 0.5px solid #6d8a86; background: transparent; }`,
    author: 'Ines Kovač',
    createdAt: '2026-09-10',
    popularity: 69,
  },
  {
    id: 'tare-weight',
    name: 'Tare Weight',
    category: 'Minimalism',
    tags: ['laboratory', 'measurement', 'balance', 'calibration', 'numerals'],
    description: 'Nine words and one number per screen.',
    designPhilosophy:
      'Tare Weight assumes the operator is holding a sample in one hand. Every screen is a single right-aligned figure with its unit, a four-word instruction, and nothing else — because a balance is read, not browsed. Hierarchy comes entirely from numeral size, not from colour, weight, or position. For labs, calibration benches, and any instrument whose output is a number.',
    designDetails:
      'Bone white #f7f8f7 with ink #1b1f1e and a single calibration red #b8452f that is only ever used for out-of-tolerance readings. Display figures run to 120px in a tabular mono, always right-aligned against a shared decimal column. Labels are set at 11px in the same mono so the numbers keep the stage.',
    colors: {
      primary: '#1b1f1e',
      secondary: '#8f9793',
      accent: '#b8452f',
      neutral: '#eceded',
      background: '#f7f8f7',
      text: '#14171a',
    },
    typography: {
      displayFont: 'IBM Plex Mono',
      bodyFont: 'Manrope',
      scale: '11 / 13 / 16 / 20 / 28 / 56 / 120',
      lineHeights: 'Figures 1.0, body 1.55',
      letterSpacing: 'Figures 0 (tabular); units 0.14em uppercase at 11px',
    },
    components: {
      primary: 'A 1px baseline rule with the action word on it — no fill, no radius, underline on hover',
      secondary: 'A bracketed label: [ calibrate ] in 11px mono',
      tertiary: 'A lone unit suffix that acts as the link',
      radius: '0 controls, 0 cards — a weighing pan is flat',
      hover: 'The baseline rule doubles to 2px and the number shifts 2px left, 100ms steps(2)',
      cards: 'No surface: a divider rule, a right-aligned figure, and a 4-word caption',
      forms: 'One field: a right-aligned numeric input with the unit pinned after the decimal column',
      navigation: 'A 4-item numbered rail at 11px, current item marked with a filled square',
      modals: 'A full-bleed readout with a single dismiss word in the corner',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '36 / 88 / 144 / 240',
      paddingScale: '0 / 16 / 32',
      grid: 'Single 720px column, decimal-aligned, 120px row pitch',
    },
    motion: {
      pageLoad: 'The figure counts up from zero in 12 discrete steps of 90ms, then stops dead',
      hoverStates: 'Rule weight and 2px positional shift, 100ms in two steps',
      transitions: 'Never eased: digits snap, rules step',
      scroll: 'Nothing moves on scroll — the column is the whole document',
    },
    accessibility:
      '#14171a on #f7f8f7 is 16.4:1 and figures are never colour-coded: tolerance state is written as PASS or OUT OF TOL, with calibration red only as a 4px bar beside it. Numeric inputs are type="text" with inputmode="decimal" so screen readers read digits individually. Reduced motion removes the count-up entirely.',
    responsive:
      'The 120px figure scales to 64px under 700px and 44px under 400px with the decimal column preserved, never wrapped. Units move below the figure at 320px rather than truncating. The rail becomes two columns of two.',
    codeExample:
      '<section class="readout">\n  <p class="kicker">PAN 02 · ZEROED</p>\n  <p class="figure">248.61 <span class="unit">G</span></p>\n  <p class="note">tare set, load sample</p>\n  <button class="btn-primary">calibrate</button>\n</section>',
    accent: '#b8452f',
    motif: 'mono-labels',
    layout: 'centered',
    useCases: ['Manufacturing', 'Health', 'Data & Analytics'],
    signatureCss: `.dv-stat strong { font-size: 64px; font-weight: 300; font-variant-numeric: tabular-nums; }
.dv-btn-primary { background: transparent; color: #14171a; border: 0; border-bottom: 1px solid #1b1f1e; border-radius: 0; text-transform: lowercase; letter-spacing: 0; }
.dv-card { border: 0; border-bottom: 1px solid #eceded; border-radius: 0; background: transparent; }
.dv-hero h1 { font-size: clamp(34px, 9vw, 120px); font-variant-numeric: tabular-nums; }
.dv-label, .dv-kicker { letter-spacing: 0.14em; text-transform: uppercase; font-size: 11px; color: #8f9793; }`,
    author: 'Petra Lindqvist',
    createdAt: '2026-09-10',
    popularity: 63,
  },
  {
    id: 'null-set',
    name: 'Null Set',
    category: 'Minimalism',
    tags: ['empty-states', 'blank', 'zero', 'restraint', 'whitespace'],
    description: 'A system for showing nothing well.',
    designPhilosophy:
      'Most design systems are judged on their densest screen. Null Set is built for the other one: the page that has no records, no results, no history. Emptiness is treated as the subject, not the failure — a large centred dash, one grey sentence explaining what would appear here, and a single quiet way forward. For archival tools, first-run experiences, and anything that spends its life blank.',
    designDetails:
      'Paper white #fafbf9 with ash #7c8280 for anything that speaks, and three greys of rule (#f0f1ef, #e2e4e1, #d3d6d2) carrying all structure. There are no fills, no accent colours, and no more than eleven words in any block. Where a value is absent it is printed as an em dash rather than hidden, so the shape of the missing thing stays visible.',
    colors: {
      primary: '#7c8280',
      secondary: '#a9aeac',
      accent: '#c2c7c4',
      neutral: '#f0f1ef',
      background: '#fafbf9',
      text: '#6f7573',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 17 / 21 / 26 / 34 / 48',
      lineHeights: 'Display 1.35, body 1.7',
      letterSpacing: 'Display 0.01em; body 0.005em',
    },
    components: {
      primary: 'An outlined pill at 1px #d3d6d2 with ash text — the only affordance on the page',
      secondary: 'A text link with a trailing long dash',
      tertiary: 'A lone em dash that opens the explanation when clicked',
      radius: '2px controls, 2px cards — barely rounded, like a blank form field',
      hover: 'The outline darkens one step to #c2c7c4 and nothing moves, 160ms',
      cards: 'Blank panels: 1px dashed #e2e4e1, transparent fill, one dashed rule across the middle',
      forms: 'A single empty field with a placeholder that is a dash, not an instruction',
      navigation: 'Two items, separated by a vertical hairline, with everything else absent',
      modals: 'The page itself, dimmed by 4% — no modal chrome at all',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '48 / 104 / 176 / 260',
      paddingScale: '20 / 40 / 72',
      grid: 'Content measured at 560px inside a 1280px field of white',
    },
    motion: {
      pageLoad: 'The em dash fades in at 400ms and stops; there is genuinely nothing else to animate',
      hoverStates: 'A one-step outline darkening, 160ms',
      transitions: 'Fade only, longest 240ms',
      scroll: 'Nothing is revealed by scrolling — emptiness is not progressive',
    },
    accessibility:
      '#6f7573 on #fafbf9 is 4.8:1 — deliberately below the body-copy 7:1 comfort line but above AA, and never used below 12px. Because colour carries almost nothing, every state is also words: "no records", "nothing scheduled". Dashes carry an aria-label naming the missing value. Focus outline is 2px #7c8280 with a 2px offset so it is visible on white.',
    responsive:
      'The 560px measure is preserved at all widths by adding margin, never by shrinking type. Below 480px the two nav items stack and the dash column reduces from 12 to 6. No horizontal scrollbar exists at 320px because the page never exceeds 32ch per line.',
    codeExample:
      '<section class="empty">\n  <p class="kicker">Archive · 0 entries</p>\n  <h1>—</h1>\n  <p class="sub">Nothing has been logged here yet.</p>\n  <button class="btn-primary">start an entry</button>\n</section>',
    accent: '#7c8280',
    motif: 'soft-shadows',
    layout: 'manifesto',
    useCases: ['Productivity', 'Nonprofit', 'Publishing'],
    signatureCss: `.dv-card { border: 1px dashed #e2e4e1; background: transparent; box-shadow: none; }
.dv-hero h1 { font-weight: 400; color: #c2c7c4; letter-spacing: 0.02em; }
.dv-btn-primary { background: transparent; color: #6f7573; border: 1px solid #d3d6d2; }
.dv-btn-primary:hover { border-color: #c2c7c4; }
.dv-media { background: repeating-linear-gradient(45deg, #f0f1ef 0 8px, #fafbf9 8px 16px); }
.dv-stat strong { color: #c2c7c4; }
.dv-site { background-image: linear-gradient(#f0f1ef 1px, transparent 1px); background-size: 100% 96px; }`,
    author: 'Jonas Wexler',
    createdAt: '2026-09-11',
    popularity: 58,
  },
  {
    id: 'brick-course',
    name: 'Brick Course',
    category: 'Minimalism',
    tags: ['construction', 'masonry', 'schedule', 'offset', 'engineering'],
    description: 'Offset on purpose, like a bonded wall.',
    designPhilosophy:
      'Brick Course refuses the centred hero on principle. Its grid is a running bond: every second column is offset by half a unit, so nothing can be symmetric and no heading can sit in the middle. That offset makes long tables of quantities readable at a glance, because the eye tracks the stagger instead of the numbers. For quantity surveyors, masonry contractors, and structural schedules.',
    designDetails:
      'Mortar grey #e4e3df joints of exactly 2px hold clay #c2622f and slate #3b3f45 blocks. The 2px joint is the only spacing device — there are no margins inside components, only joints. Batches are numbered in Roman numerals in the margin, and a per-course counter runs down the left edge.',
    colors: {
      primary: '#3b3f45',
      secondary: '#8a8f96',
      accent: '#c2622f',
      neutral: '#e4e3df',
      background: '#f4f3f0',
      text: '#23262a',
    },
    typography: {
      displayFont: 'Zilla Slab',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 52',
      lineHeights: 'Display 1.15, body 1.5',
      letterSpacing: 'Roman numerals 0.1em; quantities 0.02em',
    },
    components: {
      primary: 'A solid clay block, radius 2px, set 2px off its baseline so it looks laid rather than placed',
      secondary: 'Mortar-outlined block: 2px #8a8f96 border, no fill',
      tertiary: 'Roman-numeraled text link with a joint line under it',
      radius: '2px controls, 2px cards — every corner is a cut brick',
      hover: 'The block shifts 2px down and its joint line doubles in weight, 90ms',
      cards: 'Staggered blocks: even children offset 44px down and 6% right, 2px joints, no shadow',
      forms: 'Fields laid as bricks in a wall — 2px joints, labels in the margin',
      navigation: 'A course counter in the left margin plus three laid blocks',
      modals: 'A taller wall segment that slides up from the mortar line',
    },
    spacing: {
      baseUnit: '2px',
      marginScale: '0 / 44 / 88 / 132',
      paddingScale: '10 / 18 / 28',
      grid: 'Running bond: 8 columns, even columns offset 50%, 2px joints, 2px gutter',
    },
    motion: {
      pageLoad: 'Blocks are laid course by course, 30ms apart, each dropping 3px into its joint',
      hoverStates: 'Positional settle plus joint weight, 90ms in two steps',
      transitions: 'steps(2, end) everywhere; brick does not ease',
      scroll: 'The course counter ticks as each row of blocks enters the viewport',
    },
    accessibility:
      '#23262a on #f4f3f0 is 13.9:1; clay #c2622f on the same ground is 4.5:1 and only carries quantities at 16px or bolder. The deliberate offset never changes DOM order, so reading order stays top-to-bottom and left-to-right. Focus is a 2px slate outline drawn inside the block so the joint stays visible.',
    responsive:
      'The running bond collapses to a single column under 760px and the offset step drops from 50% to 25% under 1024px. Quantities keep a fixed 62px numeric column at every width. Roman numerals are never abbreviated.',
    codeExample:
      '<section class="wall">\n  <p class="kicker">Course IV · 214 units</p>\n  <h1>Running bond, <em>no cuts wasted.</em></h1>\n  <dl class="qty"><dt>Stretchers</dt><dd>186</dd><dt>Headers</dt><dd>28</dd></dl>\n  <button class="btn-primary">Order the course</button>\n</section>',
    accent: '#c2622f',
    motif: 'swiss-grid',
    layout: 'asymmetric',
    useCases: ['Construction', 'Architecture', 'Real Estate'],
    signatureCss: `.dv-card { border-radius: 2px; box-shadow: none; }
.dv-cards > *:nth-child(2n) { transform: translate(6%, 44px); }
.dv-btn-primary { border-radius: 2px; box-shadow: 0 2px 0 #23262a33; }
.dv-site { background-image: repeating-linear-gradient(90deg, #e4e3df 0 2px, transparent 2px 100%); }
.dv-h2 { border-left: 6px solid #c2622f; padding-left: 10px; }
.dv-nav { border-bottom: 2px solid #e4e3df; }`,
    author: 'Marcus Odell',
    createdAt: '2026-09-11',
    popularity: 61,
  },
  {
    id: 'aphelion',
    name: 'Aphelion',
    category: 'Minimalism',
    tags: ['satellite', 'telemetry', 'orbit', 'planner', 'timeline'],
    description: 'The page has an x-axis.',
    designPhilosophy:
      'Aphelion is plotted rather than laid out. Mission elapsed time runs horizontally across the entire page, and every section is placed at the moment it belongs to — so a burn appears at T+00:14, and the ground-station pass sits where it actually falls. Nothing floats; everything is anchored to a moment. For satellite operators, launch planners, and any timeline where position is data.',
    designDetails:
      'Plotter white #ffffff with 12.5% vertical gridlines in #eceff1 and a single bold meridian every hour. Ink #12161a for axes, solar #d0431f threaded only along the active pass. Type is set like a technical legend: 12px mono labels with leader lines to their point on the axis.',
    colors: {
      primary: '#12161a',
      secondary: '#7b848c',
      accent: '#d0431f',
      neutral: '#eceff1',
      background: '#ffffff',
      text: '#0e1114',
    },
    typography: {
      displayFont: 'Oxanium',
      bodyFont: 'Space Mono',
      scale: '11 / 12 / 14 / 17 / 22 / 30 / 40',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Times and axis labels 0.06em; body 0',
    },
    components: {
      primary: 'A 1px ink box with a 3px left axis tick, radius 0, no fill until hovered',
      secondary: 'Leader-line button: a rule that extends to the point it controls',
      tertiary: 'A timestamp that is itself the link',
      radius: '0 controls, 0 cards — nothing on a plot is rounded',
      hover: 'The 3px tick becomes a 9px tick and the element’s gridline darkens, 100ms linear',
      cards: 'Event marks: a 12px dot on the axis, a leader line, and a 3-line legend block',
      forms: 'A T+ offset field with a spin control and an inline orbit reference',
      navigation: 'The axis itself — hours as ticks, the current moment as a filled solar dot',
      modals: 'A zoomed plot window with its own axis, positioned over the parent axis point',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 64 / 120 / 200',
      paddingScale: '12 / 22 / 36',
      grid: 'Time grid: 24 columns of MEO hours, 1px meridian every 6, 8.33% column pitch',
    },
    motion: {
      pageLoad: 'Sweeps left to right like a slow radar, 1.2s, revealing marks in time order',
      hoverStates: 'Tick growth and gridline darkening, 100ms linear',
      transitions: 'Linear, tied to the timeline — never springy',
      scroll: 'Scrolling moves a fixed T+ readout; the axis labels stay pinned',
    },
    accessibility:
      '#0e1114 on #ffffff is 19.1:1 and solar #d0431f reaches 4.9:1 on white, used only for the active pass and always with a written "pass" label. Every plotted mark has a text alternative naming its time and event, so the timeline is never the only representation. Reduced motion removes the sweep and shows all marks at once.',
    responsive:
      'The 24-hour axis halves to 12 hours below 900px and to 6 below 560px, keeping every mark and adding 6px of horizontal padding per dropped hour. Labels rotate 45° below 420px rather than overlapping. The axis never scrolls horizontally.',
    codeExample:
      '<section class="plot">\n  <p class="kicker">T+00:14:02 · 412 km</p>\n  <h1>Burn complete, <em>aphelion rising.</em></h1>\n  <p class="axis">|----|----|----|----|</p>\n  <button class="btn-primary">Plot the next pass</button>\n</section>',
    accent: '#d0431f',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Data & Analytics', 'Energy', 'Developer Tools'],
    signatureCss: `.dv-site { background-image: linear-gradient(90deg, #eceff1 1px, transparent 1px); background-size: 8.333% 100%; }
.dv-hero { border-bottom: 2px solid #12161a; }
.dv-hero h1 em { font-style: normal; color: #d0431f; }
.dv-card { border: 1px solid #eceff1; border-left: 3px solid #12161a; border-radius: 0; background: #ffffff; }
.dv-btn-primary { border-radius: 0; background: #12161a; box-shadow: 3px 0 0 #d0431f; }
.dv-stat strong { font-family: 'Space Mono', monospace; letter-spacing: 0.04em; }
.dv-chart-card { border-radius: 0; }`,
    author: 'Yuki Sorenson',
    createdAt: '2026-09-12',
    popularity: 66,
  },
  {
    id: 'footnote-press',
    name: 'Footnote Press',
    category: 'Minimalism',
    tags: ['academic', 'references', 'annotation', 'scholarly', 'gutter'],
    description: 'Everything is load-bearing marginalia.',
    designPhilosophy:
      'Footnote Press puts the argument in the margin. The main column carries only the numbered claim; every qualification, source, and caveat lives in the left gutter at 12px, ruled off from the body by a 1px margin rule. Navigation is a reference list, so the site is literally cited before it is read. For journals, research groups, and monographs that must show their work.',
    designDetails:
      'Cream stock #fdfbf6 with sepia #7a7469 secondary ink and rubrication red #8c3226 used sparingly for the numeral only. The margin rule runs the full page height, unbroken, and superscripts are the primary interactive element — hovering one lifts its note by 2px and thickens nothing else.',
    colors: {
      primary: '#1c1c1c',
      secondary: '#7a7469',
      accent: '#8c3226',
      neutral: '#efece6',
      background: '#fdfbf6',
      text: '#1c1c1c',
    },
    typography: {
      displayFont: 'Spectral',
      bodyFont: 'EB Garamond',
      scale: '12 / 14 / 17 / 20 / 25 / 32 / 44',
      lineHeights: 'Body 1.65 (note column 1.45)',
      letterSpacing: 'Notes 0.01em; display -0.005em',
    },
    components: {
      primary: 'Dark-ink text at 15px with a 1px underline that sits 3px below the baseline, no fill',
      secondary: 'A bracketed numeral [12] acting as a button, red numeral on cream',
      tertiary: 'Bare superscript digit that is itself the link',
      radius: '0 controls, 0 cards — paper has no radius',
      hover: 'The note lifts 2px in the gutter and the superscript gains a small leading dot, 130ms',
      cards: 'Notes, not cards: 1px left margin rule, 12px text, 6px of space above',
      forms: 'A single citation field with a live reference format preview beneath',
      navigation: 'An alphabetised reference list — letters as column heads, numbers as entries',
      modals: 'A pulled-out note expanded to body size inside the same margin column',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 48 / 84 / 130',
      paddingScale: '8 / 16 / 28',
      grid: 'Two tracks: 210px note gutter + 620px body, separated by a 1px rule',
    },
    motion: {
      pageLoad: 'No animation. Notes are already on the page; the reader finds them',
      hoverStates: 'A 2px lift and a leading dot, 130ms ease-out',
      transitions: 'Fade and lift only, never longer than 200ms',
      scroll: 'Notes stay in their gutter; the rule is continuous, so nothing follows you',
    },
    accessibility:
      '#1c1c1c on #fdfbf6 is 17.3:1 and notes at 12px still manage 5.1:1 against the stock. Superscripts are real buttons with aria-describedby pointing at their note, so the reference is announced rather than merely seen. Rubrication red is decorative — the numeral is also bracketed, so colour is never the only carrier.',
    responsive:
      'Below 900px the note gutter folds under each claim as an indented block with the same 12px size. Under 560px notes open on tap rather than sitting open, and the margin rule becomes a dashed top rule per claim. The body measure never exceeds 68 characters.',
    codeExample:
      '<article class="paper">\n  <p class="kicker">Chapter III · note 42</p>\n  <h1>On the <em>quiet</em> parts.<sup>[42]</sup></h1>\n  <p class="standfirst">Evidence, such as it exists, is thinner than the claim.</p>\n  <button class="btn-primary">Read the notes →</button>\n</article>',
    accent: '#8c3226',
    motif: 'editorial-columns',
    layout: 'editorial',
    useCases: ['Publishing', 'University', 'Legal'],
    signatureCss: `.dv-card { border-left: 1px solid #7a7469; border-radius: 0; background: transparent; box-shadow: none; padding: 4px 0 4px 12px; }
.dv-card p, .dv-card .dv-sub { font-size: 12px; line-height: 1.45; color: #7a7469; }
.dv-hero h1 em { font-style: italic; color: #1c1c1c; }
.dv-btn-primary { background: transparent; color: #1c1c1c; border-bottom: 1px solid #1c1c1c; border-radius: 0; padding: 8px 0; }
.dv-badge { background: transparent; border: 1px solid #8c3226; color: #8c3226; border-radius: 0; font-size: 11px; }
.dv-sep { background: #7a7469; height: 1px; }`,
    author: 'Hélène Rousseau',
    createdAt: '2026-09-12',
    popularity: 57,
  },
  {
    id: 'haggle-market',
    name: 'Haggle Market',
    category: 'Maximalism',
    tags: ['market', 'bazaar', 'night', 'vendors', 'haggling'],
    description: 'Six prices competing for one glance.',
    designPhilosophy:
      'Haggle Market is designed to be shouted at from several directions at once, because that is what a night market is. Every vendor card carries its own price tag at its own rotation, three independent marquees run at different speeds, and the page refuses to establish a single reading order. Density is the wayfinding. For bazaars, flea markets, and classified listings that live on volume.',
    designDetails:
      'Warm oil-lamp cream #fff4e0 lit by chilli red #e8402f, spice green #1d7a5f and lantern yellow #ffd21e. Price tags are physical: rotated 4-8°, thick 2px borders, and a punched hole dot on one corner. Marquee rows use three different durations so they visibly drift against each other.',
    colors: {
      primary: '#e8402f',
      secondary: '#1d7a5f',
      accent: '#ffd21e',
      neutral: '#f6e2c0',
      background: '#fff4e0',
      text: '#231608',
    },
    typography: {
      displayFont: 'Bungee Shade',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 19 / 24 / 31 / 42 / 58',
      lineHeights: 'Display 1.05, body 1.55',
      letterSpacing: 'Prices 0.02em; vendor names 0.06em uppercase',
    },
    components: {
      primary: 'Chilli block with lantern-yellow text, radius 4px, 3px dark border, hard 4px shadow',
      secondary: 'Spice-green block, cream text, 2px dashed border',
      tertiary: 'A handwritten-feel link with a torn underline',
      radius: '4px controls, 8px cards — tag corners, not soft UI',
      hover: 'The tag rotates a further 2° and its shadow jumps to 6px, 120ms ease-out',
      cards: 'Vendor stalls: 2px dark border, hard shadow, a rotated price tag pinned to a corner',
      forms: 'A "name your price" field with a spinning counter and a submit that jitters',
      navigation: 'Aisle strip — 8 rounded lantern tabs, all visible, none emphasised',
      modals: 'A stall front that unrolls downwards with three marquee rows inside it',
    },
    spacing: {
      baseUnit: '6px',
      marginScale: '18 / 42 / 78 / 120',
      paddingScale: '12 / 22 / 40',
      grid: 'Masonry-ish 4-col stall grid, 2px borders, deliberate 6-18px vertical drift',
    },
    motion: {
      pageLoad: 'Stalls pop in with a 6px scale overshoot, 40ms apart, tags arriving last',
      hoverStates: 'Rotation plus shadow jump, 120ms',
      transitions: 'Brief overshoot (cubic-bezier(.2,1.5,.4,1)) then settle — market energy',
      scroll: 'Three marquees at 18s, 26s, and 41s; the page itself never parallaxes',
    },
    accessibility:
      '#231608 on #fff4e0 is 15.9:1 and price tags use dark borders so contrast survives the rotation. Lantern yellow is never used for text on cream; it only ever appears as a background behind near-black type. Marquees pause on hover and focus, and are aria-hidden duplicates so screen readers hear the list once.',
    responsive:
      'The four-column stall grid becomes two at 1000px and one at 620px, with tag rotations reduced to ±2° under 620px so nothing overlaps text. Marquees drop to a single row below 560px. Price tags always stay inside their stall box at 320px.',
    codeExample:
      '<section class="stall">\n  <p class="kicker">Aisle 3 · vendor 118</p>\n  <h1>BRASS POTS, <em>MAKE ME AN OFFER</em></h1>\n  <p class="price-tag">£34 <span>or haggle</span></p>\n  <button class="btn-primary">START AT £18</button>\n</section>',
    accent: '#e8402f',
    motif: 'ticker-marquee',
    layout: 'magazine',
    useCases: ['Marketplace', 'E-commerce', 'Travel'],
    signatureCss: `.dv-price-tag { display: inline-block; transform: rotate(-6deg); background: #ffd21e; color: #231608; border: 2px solid #231608; padding: 2px 10px; }
.dv-card:nth-child(2n) .dv-price-tag { transform: rotate(5deg); }
.dv-card { border: 2px solid #231608; box-shadow: 4px 4px 0 #23160833; }
.dv-marquee { background: #1d7a5f; color: #fff4e0; }
.dv-h2 { text-shadow: 2px 2px 0 #ffd21e; }
.dv-badge { background: #e8402f; color: #fff4e0; border-radius: 4px; }`,
    author: 'Amara Boateng',
    createdAt: '2026-09-13',
    popularity: 72,
  },
  {
    id: 'overprint',
    name: 'Overprint',
    category: 'Maximalism',
    tags: ['print', 'misregistration', 'spot-colour', 'risograph', 'ink'],
    description: 'Three plates, deliberately out of register.',
    designPhilosophy:
      'Overprint is built on an accident that printers used to throw away: three spot plates landing 3px apart. Instead of a clean composite, every heading is drawn as cyan, magenta and yellow layers offset from each other, so the design is visibly made of ink rather than pixels. Colour mixing happens by overlap, which means the palette is generative — only three inks exist.',
    designDetails:
      'Three inks — cyan #00b8d4, magenta #ff2d78, yellow #f5c400 — over paper #f6f6f4. Headings use stacked text-shadows at ±3px so plate misregistration is literal; images are duotone and every shape has a 3px plate offset. Ink limits are respected: no area takes more than two plates.',
    colors: {
      primary: '#00b8d4',
      secondary: '#ff2d78',
      accent: '#f5c400',
      neutral: '#ececec',
      background: '#f6f6f4',
      text: '#16161a',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Space Mono',
      scale: '13 / 15 / 18 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.04, body 1.6',
      letterSpacing: 'Display -0.01em; captions 0.08em uppercase',
    },
    components: {
      primary: 'Cyan plate with a magenta 3px offset shadow, sharp corners, black label',
      secondary: 'Transparent with a 2px magenta border and a yellow 3px offset',
      tertiary: 'Text link doubled: same word printed black 2px right of itself in cyan',
      radius: '0 controls, 0 cards — plates are rectangular',
      hover: 'The offset grows from 3px to 5px and the plates swap reading order, 140ms steps(2)',
      cards: 'Paper sheets with a 3px plate offset on two sides and a registration mark in the corner',
      forms: 'Ink-limit fields: 2px black under a cyan tint, with a plate-offset focus ring',
      navigation: 'A press bar with plate toggles (C / M / Y) that can be switched off live',
      modals: 'A second sheet laid on top, offset 6px, showing through where the overlaps land',
    },
    spacing: {
      baseUnit: '3px',
      marginScale: '21 / 48 / 90 / 150',
      paddingScale: '15 / 27 / 45',
      grid: 'Base unit 3px — the registration offset itself is the spacing grid',
    },
    motion: {
      pageLoad: 'Plates land one after another: yellow, then magenta, then cyan, 90ms apart',
      hoverStates: 'Offset grows in two discrete steps, 140ms',
      transitions: 'steps(2, end) so plate shifts look mechanical, never smooth',
      scroll: 'A registration strip crawls across the footer showing current plate count',
    },
    accessibility:
      '#16161a on #f6f6f4 is 16.8:1, and the three inks are treated as decorative layers: every heading is legible as black type alone if the plates are disabled. Cyan and magenta are never used for small text on paper (both under 4.5:1 there) — they only carry 23px+ display type or shape. Plate toggles are real buttons with aria-pressed.',
    responsive:
      'The 3px plate offset halves to 2px below 700px and to 1px below 420px, so text never fuzzes into illegibility on small screens. Stacked-shadow headings fall back to a single flat colour under 420px. Nothing scrolls horizontally at 320px.',
    codeExample:
      '<section class="press">\n  <p class="kicker">Plate run · 3 inks</p>\n  <h1>Ink lands <em>where it lands.</em></h1>\n  <p class="sub">C · M · Y — no composite, no apology.</p>\n  <button class="btn-primary">Pull a proof</button>\n</section>',
    accent: '#ff2d78',
    motif: 'gradient-hero',
    layout: 'full-bleed',
    useCases: ['Design Tools', 'Publishing', 'Art Gallery'],
    signatureCss: `.dv-hero h1, .dv-h2 { text-shadow: 3px 0 #ff2d78, -3px 0 #00b8d4; }
.dv-card { box-shadow: 3px 3px 0 #00b8d4, -3px -3px 0 #f5c400; border-radius: 0; border: 1px solid #16161a; }
.dv-btn-primary { background: #16161a; color: #f6f6f4; box-shadow: 3px 3px 0 #ff2d78; border-radius: 0; }
.dv-media { filter: grayscale(1) contrast(1.4); mix-blend-mode: multiply; }
.dv-badge { background: #00b8d4; color: #16161a; border-radius: 0; }
.dv-stat strong { text-shadow: 2px 0 #ff2d78, -2px 0 #f5c400; }`,
    author: 'Ravi Menon',
    createdAt: '2026-09-13',
    popularity: 70,
  },
  {
    id: 'all-of-it',
    name: 'All Of It',
    category: 'Maximalism',
    tags: ['dense', 'newsroom', 'no-hero', 'continuous', 'editorial'],
    description: 'No hero. Page twelve continues here.',
    designPhilosophy:
      'All Of It has no hero, no slogan, and no room to introduce itself. The page opens mid-sentence, continuing from an implied page twelve, and the reader is expected to catch up. Sections are separated by nothing more than a change of column width, so the whole document reads as one continuous sprawl that began before you arrived. For newsrooms, aggregators, and archives that value completeness over greeting.',
    designDetails:
      'Newsprint white #f2e9dc with a dirty gold #b5913f rule system and burnt-orange #e0521f for breaking items. Column counts change between two, three, four and five without warning, ruled by 1px gold lines that stop mid-page. The only large type is a drop cap, and there is no logo — the masthead is a dateline.',
    colors: {
      primary: '#2b1b2e',
      secondary: '#b5913f',
      accent: '#e0521f',
      neutral: '#e6dccc',
      background: '#f2e9dc',
      text: '#241a20',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Manrope',
      scale: '11 / 13 / 15 / 18 / 22 / 34 / 72',
      lineHeights: 'Body 1.48 in columns (1.62 in wide), drop cap 0.86',
      letterSpacing: 'Dateline 0.16em uppercase; body 0.005em',
    },
    components: {
      primary: 'No button shape: a gold underline with the label in the same 15px as body copy',
      secondary: 'A circled numeral in a 1px gold ring, used as the only iconography',
      tertiary: 'Inline continuation link — "…continues" — styled as body text',
      radius: '0 controls, 0 cards — newsprint is guillotined, not rounded',
      hover: 'The gold rule under the item extends its full width, 100ms linear',
      cards: 'Column items, not cards: a 1px gold top rule, 14px body, no padding block',
      forms: 'A one-line tip-off field that runs the width of the column it sits in',
      navigation: 'A dateline strip with 14 section words at 11px, all the same weight',
      modals: 'A wider column inserted into the flow — no backdrop, no shadow',
    },
    spacing: {
      baseUnit: '3px',
      marginScale: '14 / 34 / 60 / 96',
      paddingScale: '6 / 12 / 24',
      grid: 'Variable column counts (2/3/4/5) with 1px gold column rules and 3px gutters',
    },
    motion: {
      pageLoad: 'None. The page is already mid-argument; animating in would be dishonest',
      hoverStates: 'Rule extension, 100ms linear',
      transitions: 'Fades only, under 150ms',
      scroll: 'Column count step-changes once at 60% scroll to signal a new section',
    },
    accessibility:
      '#241a20 on #f2e9dc is 14.4:1; gold at 4.1:1 is used only for rules and never for text under 18px. Column changes are CSS-only, so the DOM stays a single linear article and screen readers read it straight through. Breaking items carry the word BREAKING before the accent colour, so urgency is never colour-only.',
    responsive:
      'Five columns collapse to three at 1200px, two at 900px, and one at 620px; the gold column rules disappear with the columns. The drop cap shrinks from 72px to 44px below 620px so it stops pushing the first line. Line length stays between 42ch and 68ch at every width.',
    codeExample:
      '<article class="sprawl">\n  <p class="dateline">MONDAY · 12 SECTIONS · CONTINUED FROM P.12</p>\n  <p class="lead"><span class="cap">T</span>he survey closed, as these things do, with nobody satisfied.</p>\n  <p class="break">BREAKING · port authority votes 7–2</p>\n  <button class="btn-primary">Continue this report</button>\n</article>',
    accent: '#e0521f',
    motif: 'editorial-columns',
    layout: 'manifesto',
    useCases: ['News', 'Publishing', 'Community'],
    signatureCss: `.dv-hero { padding: 18px 0 6px; border-bottom: 1px solid #b5913f; }
.dv-hero h1 { font-size: 22px; line-height: 1.35; }
.dv-card { border: 0; border-top: 1px solid #b5913f; border-radius: 0; background: transparent; padding: 8px 0; }
.dv-card p { font-size: 13px; }
.dv-site { column-gap: 3px; }
.dv-btn-primary { background: transparent; color: #241a20; border-radius: 0; border-bottom: 2px solid #b5913f; }
.dv-badge { border-radius: 999px; border: 1px solid #b5913f; background: transparent; color: #241a20; font-size: 10px; }
.dv-nav { border-top: 3px double #2b1b2e; border-bottom: 1px solid #b5913f; background: transparent; }`,
    author: 'Cornelia Vance',
    createdAt: '2026-09-14',
    popularity: 60,
  },
  {
    id: 'sirens-parade',
    name: 'Sirens Parade',
    category: 'Maximalism',
    tags: ['carnival', 'parade', 'festival', 'bands', 'route'],
    description: 'Eleven colour bands, one route.',
    designPhilosophy:
      'Sirens Parade treats the page as a procession rather than a document. Each section is a float with its own colour band and its own type size, announced by a numbers strip so you always know how far the parade has come. Nothing is unified on purpose: the cost of a parade is that no two things match, and the reward is that you cannot look away. For festivals, carnivals, and city programming.',
    designDetails:
      'Rose #ff3d6e, carnival green #2f8f6b and marigold #ff9f1c demand attention over cream #fff7e6. Every section carries a 6px band of its own colour along the top edge, and the countdown to the first float uses 58px figures that never shrink. Type alternates between condensed display and rounded body so the rhythm feels like a crowd.',
    colors: {
      primary: '#ff3d6e',
      secondary: '#2f8f6b',
      accent: '#ff9f1c',
      neutral: '#fbf1e4',
      background: '#fff7e6',
      text: '#2a1118',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Quicksand',
      scale: '14 / 16 / 20 / 26 / 34 / 46 / 66',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0.01em; band labels 0.2em uppercase',
    },
    components: {
      primary: 'Rose block with cream text, radius 999px ends, 5px marigold bottom border',
      secondary: 'Green outline at 3px with a marigold count badge',
      tertiary: 'Marigold text link with a small step-number before it',
      radius: '999px controls, 6px cards — floats are biscuit-tin lids with a lip',
      hover: 'Band grows from 6px to 10px and the whole float shifts 4px left, 140ms',
      cards: 'Floats: cream body, 6px colour band on top, bottom-left step number, hard shadow',
      forms: 'Rounded fields with a band-coloured label chip and a marigold focus ring',
      navigation: 'A running-order strip showing all 11 floats as numbered pips',
      modals: 'The next float slides in from the left as if entering the route',
    },
    spacing: {
      baseUnit: '6px',
      marginScale: '18 / 48 / 96 / 156',
      paddingScale: '14 / 26 / 48',
      grid: 'Procession column 1140px with alternating 3-col and 2-col float rows',
    },
    motion: {
      pageLoad: 'Floats enter from the left, 90ms apart, with a 6px overshoot then settle',
      hoverStates: 'Band growth and a 4px shift, 140ms',
      transitions: 'Springy and quick; every float arrives a beat late on purpose',
      scroll: 'The running-order pips fill as each float enters the viewport',
    },
    accessibility:
      '#2a1118 on #fff7e6 is 15.6:1. Rose and marigold are never used for small text on cream (both fail 4.5:1 there) — they are bands and badges only, with the float name always in near-black. Each band carries a written float number, so the procession order is available to screen readers as an ordered list.',
    responsive:
      'Float rows go 2 → 1 column at 720px and the pips strip becomes a 6-pip scroller under 560px. Countdown figures clamp to 34px at 320px with no wrapping. Bands thin from 6px to 4px on small screens but never vanish.',
    codeExample:
      '<section class="float">\n  <p class="kicker">FLOAT 04 · 19:40</p>\n  <h1>THE BRASS <em>DISTRICT</em></h1>\n  <p class="sub">Fourteen horns, no amplification.</p>\n  <button class="btn-primary">Take the route</button>\n</section>',
    accent: '#ff9f1c',
    motif: 'rotated-stickers',
    layout: 'spotlight',
    useCases: ['Events', 'Music', 'Travel'],
    signatureCss: `.dv-card { border-top: 6px solid #ff3d6e; border-radius: 6px; box-shadow: 3px 5px 0 #2a111822; }
.dv-card:nth-child(3n) { border-top-color: #2f8f6b; }
.dv-card:nth-child(3n+2) { border-top-color: #ff9f1c; }
.dv-hero h1 em { color: #ff3d6e; font-style: normal; }
.dv-btn-primary { border-radius: 999px; border-bottom: 5px solid #ff9f1c; }
.dv-badge { background: #ff9f1c; color: #2a1118; letter-spacing: 0.2em; font-size: 10px; }
.dv-stat strong { color: #2f8f6b; }`,
    author: 'Luz Herrera',
    createdAt: '2026-09-14',
    popularity: 73,
  },
  {
    id: 'clutter-core',
    name: 'Clutter Core',
    category: 'Maximalism',
    tags: ['messy', 'collage', 'overlap', 'studio', 'z-order'],
    description: 'A mess with a declared z-order.',
    designPhilosophy:
      'Clutter Core is what a working desk looks like when nobody has tidied it: receipts, sticky notes, and samples overlapping at angles. The joke is that underneath the spill is a rigorous 4px lattice — every scrap is placed on the grid and has a declared z-order, so the mess is reproducible, not accidental. For studios, marketplaces, and archives that would rather show the work-in-progress than a mock-up of it.',
    designDetails:
      'Desk beige #fbf7f1 stacked with teal #3c6e71, trade red #d64c3a and ochre #f2a03d scraps. Layering is explicit: an ordered list of overlaps (2px, -18px, 6px) that repeats predictably. Every scrap carries a paper edge — a 1px inset shadow — and none of them are the same size.',
    colors: {
      primary: '#3c6e71',
      secondary: '#d64c3a',
      accent: '#f2a03d',
      neutral: '#efe6da',
      background: '#fbf7f1',
      text: '#2a2622',
    },
    typography: {
      displayFont: 'Permanent Marker',
      bodyFont: 'Karla',
      scale: '13 / 15 / 18 / 22 / 28 / 38 / 52',
      lineHeights: 'Display 1.15, body 1.6',
      letterSpacing: 'Marker 0.01em; label chips 0.04em',
    },
    components: {
      primary: 'Trade-red block with a paper-edge inset and a 1.5° rotation, radius 3px',
      secondary: 'Paper chip: white, 1px grey edge, hand-ish label, no fill',
      tertiary: 'Marker-underlined link whose underline is 3px and slightly crooked',
      radius: '3px controls, 2px cards — paper corners are cut, not rounded',
      hover: 'The scrap lifts to the top of the stack (z-index + shadow to 8px) and straightens by 1°, 160ms',
      cards: 'Scraps at three sizes and three rotations, overlapping by -18px on every third item',
      forms: 'A receipt-style field: 1px dotted rules, values right-aligned, no boxes',
      navigation: 'A stack of five tabs that fan out on hover, each with its own paper edge',
      modals: 'A sheet lifted off the pile, leaving a visible gap where it came from',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '12 / 32 / 64 / 112',
      paddingScale: '10 / 18 / 30',
      grid: 'Hidden 4px lattice; visible layout is a 3-col scrap pile with declared overlaps',
    },
    motion: {
      pageLoad: 'Scraps land one on top of another, 45ms apart, each settling 2° into place',
      hoverStates: 'Stack promotion plus a 1° straightening, 160ms ease-out',
      transitions: 'Ease-out with a small overshoot; nothing spins or slides far',
      scroll: 'The pile drifts 8px against scroll, but only the background layer',
    },
    accessibility:
      '#2a2622 on #fbf7f1 is 15.8:1 and on every scrap material the text still clears 9:1, because the mess is limited to colour, rotation and shadow — never to opacity. Overlapping scraps never cover interactive text: the z-order list keeps buttons above their neighbours. Rotations are removed under prefers-reduced-motion, which also un-overlaps the pile into a plain grid.',
    responsive:
      'The three-size scrap pile becomes uniform cards below 720px, rotations halve to ±0.8°, and the -18px overlap becomes 0 so no card clips another. Marker headings drop one size at 420px. The fan-out nav becomes a horizontal scroller at 560px.',
    codeExample:
      '<section class="desk">\n  <p class="kicker">BENCH 3 · WEDNESDAY</p>\n  <h1>Still <em>mid-idea.</em></h1>\n  <p class="sub">Two proofs, one invoice, and the good pencil.</p>\n  <button class="btn-primary">Clear a space</button>\n</section>',
    accent: '#3c6e71',
    motif: 'rotated-stickers',
    layout: 'asymmetric',
    useCases: ['Portfolio', 'Marketplace', 'Startup'],
    signatureCss: `.dv-card { border-radius: 2px; box-shadow: inset 0 0 0 1px #2a262218, 3px 6px 0 #00000012; transform: rotate(-1.8deg); }
.dv-card:nth-child(3n) { transform: rotate(2.1deg); }
.dv-card:nth-child(2) { margin-top: -18px; }
.dv-card:hover { transform: rotate(-0.6deg); box-shadow: inset 0 0 0 1px #2a262218, 6px 10px 0 #0000001a; }
.dv-btn-primary { background: #d64c3a; border-radius: 3px; box-shadow: 2px 3px 0 #2a262226; }
.dv-h2 { font-family: 'Permanent Marker', cursive; }
.dv-media { border-radius: 2px; transform: rotate(1.2deg); }`,
    author: 'Théodore Blais',
    createdAt: '2026-09-15',
    popularity: 64,
  },
  {
    id: 'bell-foundry',
    name: 'Bell Foundry',
    category: 'Brutalism',
    tags: ['casting', 'metal', 'foundry', 'hazard', 'industrial'],
    description: 'Cast at eleven hundred degrees.',
    designPhilosophy:
      'A foundry has no time for decoration: metal is at 1150°C and the screen is read through a visor. Bell Foundry is therefore stripped to hazard rules, cast weights, and one unmissable red for anything hot. Hover states change position instead of colour, because a colour change on a visor is invisible. For casting shops, heavy fabrication, and any interface used in gloves.',
    designDetails:
      'Scale #1d1d1f structure on mill floor #e8e8e6, with molten amber #f0b323 carrying temperature and nothing else. Hazard rules are 8px diagonal stripes drawn in CSS, used above every dangerous control. There are no images on the page — a cast weight table replaces the hero.',
    colors: {
      primary: '#1d1d1f',
      secondary: '#6b6b6f',
      accent: '#f0b323',
      neutral: '#cfcfcf',
      background: '#e8e8e6',
      text: '#141416',
    },
    typography: {
      displayFont: 'Bebas Neue',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 14 / 16 / 30 / 44 / 62 / 88',
      lineHeights: 'Display 0.94, body 1.5',
      letterSpacing: 'Display 0.02em; mono labels 0.08em uppercase',
    },
    components: {
      primary: 'Solid #1d1d1f rectangle, radius 0, 48px tall, 3px amber top edge, uppercase 13px label',
      secondary: '2px #141416 outline, transparent, radius 0',
      tertiary: 'Uppercase mono link with a leading ▸ that only appears on focus',
      radius: '0 controls, 0 cards — castings come out of a mould, not a moulding machine',
      hover: 'No colour change: the button translates 2px down and its top edge grows to 5px, 80ms steps(2)',
      cards: 'Raw grey plates, 2px borders, an 8px hazard stripe along the top, cast weight in the footer',
      forms: 'Oversized 48px fields with 2px borders and 13px uppercase labels — glove-friendly',
      navigation: 'A tall bar with three 48px targets and a live temperature readout',
      modals: 'A full-height sheet with hazard stripes on both edges and a stamped confirm',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '28 / 60 / 112 / 176',
      paddingScale: '16 / 30 / 52',
      grid: '1320px with a hard 4-col cast table and 2px rules',
    },
    motion: {
      pageLoad: 'Rows strike in from the top, 25ms apart, with no opacity fade at all',
      hoverStates: 'Positional translation of 2px and edge growth, 80ms in two steps',
      transitions: 'steps(2, end) exclusively — machines move in clicks',
      scroll: 'The temperature readout flickers between two values as you scroll, purely decorative',
    },
    accessibility:
      '#141416 on #e8e8e6 is 14.6:1; amber #f0b323 on grey is 1.9:1 so it is used only as a 3px edge or stripe, never as text or icon. Hazard stripes are decorative and aria-hidden, with the word HOT beside them. Every target is at least 48px because the interface is used in gloves.',
    responsive:
      'The cast table drops from four columns to two at 900px and becomes stacked definition rows at 560px, with weights and units preserved. Hazard stripes halve in height rather than disappearing. The nav bar keeps 48px targets at 320px by reducing to icons plus labels underneath.',
    codeExample:
      '<section class="cast">\n  <p class="kicker">HEAT 04 · 1150 C</p>\n  <h1>POUR, THEN <em>WAIT.</em></h1>\n  <table class="weights"><tr><th>Bell 4</th><td>218 kg</td></tr><tr><th>Bell 5</th><td>402 kg</td></tr></table>\n  <button class="btn-primary">RELEASE THE LADLE</button>\n</section>',
    accent: '#f0b323',
    motif: 'dashed-borders',
    layout: 'dashboard',
    useCases: ['Manufacturing', 'Construction', 'Energy'],
    signatureCss: `.dv-hero { border-top: 8px repeating-linear-gradient(45deg, #f0b323 0 8px, #1d1d1f 8px 16px); }
.dv-card { border-radius: 0; border: 2px solid #141416; border-top: 8px solid #f0b323; }
.dv-btn-primary { border-radius: 0; border-top: 3px solid #f0b323; text-transform: uppercase; letter-spacing: 0.08em; font-size: 13px; }
.dv-btn-primary:hover { transform: translateY(2px); border-top-width: 5px; }
.dv-h2 { text-transform: uppercase; letter-spacing: 0.02em; }
.dv-stat { border: 2px solid #141416; padding: 10px 14px; }
.dv-media { display: none; }`,
    author: 'Grzegorz Nowak',
    createdAt: '2026-09-15',
    popularity: 62,
  },
  {
    id: 'wind-tunnel',
    name: 'Wind Tunnel',
    category: 'Brutalism',
    tags: ['aerodynamics', 'testing', 'engineering', 'measurement', 'rig'],
    description: 'Every section begins with a number.',
    designPhilosophy:
      'Wind Tunnel is organised the way a test report is: no section starts with a title, every section starts with a measurement, and the heading is merely the caption underneath. Numbers are set at display scale in a condensed face so a single reading fills the fold, and the reader is trusted to want the figure before the explanation. For test rigs, engineering consultancies, and any research output where the value outranks the prose.',
    designDetails:
      'Instrument white #f3f6f7 with a 1px airflow grid and a single teal #12b0a0 reserved for the live channel. Figures are 96px condensed caps with the unit in a 13px superscript, and sections are separated by 4px ink bands rather than whitespace. Streamlines are drawn as 1px curves behind the figures only.',
    colors: {
      primary: '#16202b',
      secondary: '#7d8894',
      accent: '#12b0a0',
      neutral: '#dfe6ea',
      background: '#f3f6f7',
      text: '#0f1720',
    },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Livvic',
      scale: '13 / 15 / 18 / 24 / 34 / 62 / 96',
      lineHeights: 'Figures 0.9, body 1.55',
      letterSpacing: 'Figures 0.01em; units 0.06em',
    },
    components: {
      primary: 'Ink rectangle with a 4px teal left band, radius 0, uppercase 14px, 52px tall',
      secondary: '1px ink underline with the label above it in 13px caps',
      tertiary: 'Figure-as-link: the reading itself is clickable and underlines on hover',
      radius: '0 controls, 0 cards — a test rig has no rounded surfaces',
      hover: 'The teal band thickens to 8px and the figure shifts 2px left, 90ms steps(2)',
      cards: 'Measurement blocks: a 96px figure at the top, unit superscript, caption underneath',
      forms: 'Fixed 74px label column, 1px rules, teal caret, units pinned outside the field',
      navigation: 'A grid ruler: 12 ticks with channel names at 11px, current channel in teal',
      modals: 'A full-bleed test sheet that replaces the page rather than floating over it',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 52 / 96 / 168',
      paddingScale: '14 / 28 / 48',
      grid: '1400px with 4px ink section bands and a 12-tick ruler header',
    },
    motion: {
      pageLoad: 'Figures count from zero in 8 discrete steps of 60ms, then hold',
      hoverStates: 'Band growth and 2px shift, 90ms in two steps',
      transitions: 'steps() only, matching an instrument display',
      scroll: 'The ruler marks the section you are in by filling its tick',
    },
    accessibility:
      '#0f1720 on #f3f6f7 is 16.2:1 and every figure carries its unit in text, so 1.4 is never ambiguous. Teal on white is 3.1:1 — used for bands and 24px+ figures only, and each live channel is also labelled LIVE. Numbers are exposed as real table data so screen readers announce value with unit.',
    responsive:
      'Figures clamp from 96px to 44px at 420px, keeping the unit superscript attached. The four-column measurement grid becomes two at 940px and one at 620px, with ink bands retained as separators. The ruler collapses to its current tick plus two neighbours below 560px.',
    codeExample:
      '<section class="rig">\n  <p class="fig">1.42 <span>kN</span></p>\n  <p class="caption">Drag at 28 m/s · channel 3</p>\n  <button class="btn-primary">RUN NEXT SWEEP</button>\n</section>',
    accent: '#12b0a0',
    motif: 'big-stat-row',
    layout: 'full-bleed',
    useCases: ['Manufacturing', 'Energy', 'Automotive'],
    signatureCss: `.dv-hero { border-bottom: 4px solid #16202b; background-image: repeating-linear-gradient(90deg, #dfe6ea 0 1px, transparent 1px 96px); }
.dv-hero h1 { font-size: clamp(44px, 11vw, 96px); line-height: 0.9; text-transform: uppercase; }
.dv-hero h1 em { color: #12b0a0; font-style: normal; }
.dv-card { border-radius: 0; border-left: 4px solid #16202b; background: #ffffff; }
.dv-btn-primary { border-radius: 0; border-left: 4px solid #12b0a0; text-transform: uppercase; }
.dv-stat strong { font-family: 'Oswald', sans-serif; font-size: 46px; line-height: 0.9; }
.dv-section + .dv-section { border-top: 4px solid #16202b; }`,
    author: 'Ingrid Halvorsen',
    createdAt: '2026-09-16',
    popularity: 67,
  },
  {
    id: 'concrete-pour',
    name: 'Concrete Pour',
    category: 'Brutalism',
    tags: ['docket', 'concrete', 'slump', 'batch', 'site'],
    description: 'A docket you tear off at the kerb.',
    designPhilosophy:
      'Concrete Pour is a delivery docket pretending to be a website. Every screen is one truck, one batch, one slump value, and one signature line, because that is the object the site engineer actually handles — on a phone, in the rain, at the kerb. Dashed perforations and a stamped approval replace cards and CTAs. For ready-mix suppliers, site logistics, and anything that ends with a signature.',
    designDetails:
      'Wet grey #efeeea with form-work #4a4d52, one stamp red #d1453b for rejections, and a dark ink #23252a for the docket rules. All values are mono, all prose is not, and a dashed 2px line separates the tear-off stub from the record. The dashed line is the primary layout device.',
    colors: {
      primary: '#4a4d52',
      secondary: '#9096a0',
      accent: '#d1453b',
      neutral: '#dcdcd8',
      background: '#efeeea',
      text: '#23252a',
    },
    typography: {
      displayFont: 'Courier Prime',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 50',
      lineHeights: 'Display 1.1, body 1.55',
      letterSpacing: 'Docket values 0.04em; body 0',
    },
    components: {
      primary: 'Ink block with a 2px dashed top edge, radius 0, uppercase mono label, 46px tall',
      secondary: 'Dashed 2px outline, transparent, 12px mono label',
      tertiary: 'Mono link followed by a blank signature rule',
      radius: '0 controls, 2px cards — the stub corner is softened where it was torn',
      hover: 'The dashed edge animates its dash offset by 4px and the block darkens one step, 110ms steps(4)',
      cards: 'Dockets: dashed tear line at the top, mono value rows, stamped status in the footer',
      forms: 'Two-column docket fields with dotted leaders between label and value',
      navigation: 'A truck log strip: plate numbers in 13px mono with load status codes',
      modals: 'A carbon copy: identical to the underlying docket but with a 4% grey tint',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 44 / 78 / 128',
      paddingScale: '12 / 22 / 36',
      grid: 'Single docket column 780px with a 2-col value grid inset',
    },
    motion: {
      pageLoad: 'The docket prints downward line by line over 500ms, 14 lines, no fade',
      hoverStates: 'Dash offset plus one-step darkening, 110ms in four steps',
      transitions: 'steps(4, end) for dashes, linear for everything else',
      scroll: 'Nothing follows you; a docket is a flat object',
    },
    accessibility:
      '#23252a on #efeeea is 13.6:1 and stamp red at 4.4:1 is only used with the words REJECTED or HOLD beside it. Dotted leaders are decorative — the label and value are adjacent in the DOM so reading order survives. Signature fields are text inputs with a 3px focus rule, not images.',
    responsive:
      'The value grid loses its second column at 640px and leaders shorten rather than truncate values. The truck log converts to a two-line stacked list at 520px. Dashed tear lines remain 2px at every width so they stay visible on wet screens.',
    codeExample:
      '<section class="docket">\n  <p class="stub">BATCH 8842 · TRUCK P-17</p>\n  <h1>Slump <em>75 mm.</em></h1>\n  <p class="row">ARRIVED ....... 06:41</p>\n  <button class="btn-primary">SIGN AND ACCEPT</button>\n</section>',
    accent: '#d1453b',
    motif: 'numbered-steps',
    layout: 'split-hero',
    useCases: ['Construction', 'Logistics', 'Manufacturing'],
    signatureCss: `.dv-card { border-radius: 2px; border-top: 2px dashed #4a4d52; background: #f7f6f3; }
.dv-btn-primary { border-radius: 0; text-transform: uppercase; letter-spacing: 0.04em; }
.dv-btn-secondary { border-radius: 0; border: 2px dashed #9096a0; background: transparent; }
.dv-h2::after { content: ''; display: block; margin-top: 6px; border-top: 2px dashed #9096a0; }
.dv-stat { font-family: 'Courier Prime', monospace; border-bottom: 1px dotted #9096a0; padding-bottom: 6px; }
.dv-badge { border: 2px solid #d1453b; color: #d1453b; background: transparent; border-radius: 2px; text-transform: uppercase; }`,
    author: 'Tomás Ferreira',
    createdAt: '2026-09-16',
    popularity: 59,
  },
  {
    id: 'static-fence',
    name: 'Static Fence',
    category: 'Brutalism',
    tags: ['fencing', 'galvanised', 'perimeter', 'gauge', 'security'],
    description: 'Perimeter priced by the metre.',
    designPhilosophy:
      'Static Fence is the chain-link supplier that answers the phone and quotes in metres. Its background is literally the product: a diamond mesh built from two crossed repeating gradients, with content punched through it like a sign wired to a fence. Gauge and mesh size are always the first two numbers on the page. For fencing contractors, site security, and industrial suppliers who sell in linear metres.',
    designDetails:
      'Galvanised #eef1f2 over zinc #455a64 with a rust #c2703a accent that never touches text. The mesh substrate sits behind every section at 96px pitch and is suppressed inside content panels so reading stays quiet. Prices are per metre with the gauge subscripted, and corners are square throughout.',
    colors: {
      primary: '#455a64',
      secondary: '#93a0aa',
      accent: '#c2703a',
      neutral: '#e2e5e7',
      background: '#eef1f2',
      text: '#1c2126',
    },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.12, body 1.55',
      letterSpacing: 'Gauge specs 0.06em; body 0',
    },
    components: {
      primary: 'Zinc block with a 2px rust bottom edge, radius 0, 14px uppercase label, 46px tall',
      secondary: 'Transparent with a 2px zinc border and a mesh swatch pinned to the left',
      tertiary: 'A per-metre price that is itself a link, gauge in 11px superscript',
      radius: '0 controls, 0 cards — wire mesh has no soft corners',
      hover: 'The mesh swatch rotates 15° and the rust edge doubles to 4px, 100ms steps(2)',
      cards: 'Panels wired to the mesh: 2px zinc border, white fill, mesh hidden inside via a solid backdrop',
      forms: 'Length and height in metres with a live price calculation beneath',
      navigation: 'A perimeter bar with run-length markers and a gauge picker',
      modals: 'A quote sheet that shows the mesh substrate bleeding to its edges',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 54 / 96 / 152',
      paddingScale: '14 / 28 / 44',
      grid: '1280px with a 2-col quote rail and mesh pitched at 96px',
    },
    motion: {
      pageLoad: 'Panels drop in 40ms apart, each bouncing 3px off the mesh before settling',
      hoverStates: 'Swatch rotation plus edge growth, 100ms in two steps',
      transitions: 'steps(2, end) for structural moves, linear for the swatch',
      scroll: 'The mesh substrate holds still while panels scroll over it',
    },
    accessibility:
      '#1c2126 on #eef1f2 is 15.1:1 and every panel sits on a solid backdrop so the mesh never interferes with text contrast. Rust #c2703a is 3.5:1 on the galvanised ground and is restricted to 2px edges and the word SPOT-RUST. Meterage inputs accept decimals and announce the running total politely.',
    responsive:
      'The mesh pitch tightens from 96px to 56px below 700px so the pattern stays legible without competing. Quote rails stack at 720px and prices stay right-aligned to the metre column. Nothing overflows at 320px because panels are fluid and the mesh is a background, not a layout.',
    codeExample:
      '<section class="perimeter">\n  <p class="kicker">MESH 50×50 · GAUGE 3.0</p>\n  <h1>PER METRE, <em>NOT PER PANEL.</em></h1>\n  <p class="sub">Rolls of 25 m, posts every 3 m, quoted as one line.</p>\n  <button class="btn-primary">QUOTE 120 M</button>\n</section>',
    accent: '#c2703a',
    motif: 'grain-overlay',
    layout: 'hero-cards',
    useCases: ['Construction', 'Manufacturing', 'Real Estate'],
    signatureCss: `.dv-site { background-image: repeating-linear-gradient(45deg, #93a0aa33 0 2px, transparent 2px 48px), repeating-linear-gradient(-45deg, #93a0aa33 0 2px, transparent 2px 48px); }
.dv-card { border: 2px solid #455a64; border-radius: 0; background: #eef1f2; }
.dv-hero h1 em { color: #c2703a; font-style: normal; }
.dv-btn-primary { border-radius: 0; border-bottom: 2px solid #c2703a; text-transform: uppercase; }
.dv-price { font-family: 'Chakra Petch', sans-serif; }
.dv-stat { border-left: 2px solid #455a64; padding-left: 12px; }`,
    author: 'Alan Whitcombe',
    createdAt: '2026-09-17',
    popularity: 56,
  },
  {
    id: 'private-vault',
    name: 'Private Vault',
    category: 'Luxury',
    tags: ['vault', 'membership', 'storage', 'discretion', 'appointment'],
    description: 'No photographs. References only.',
    designPhilosophy:
      'Private Vault sells storage to people who do not want it photographed. There are no product images anywhere: a holding is described by reference, volume, and date, and access is requested rather than purchased. The interface reads as a ledger in a dark room, lit by one brass rule. For secure storage, private banks, and any service whose real product is discretion.',
    designDetails:
      'Vault dark #14131a with brass #c9a227 rules and bone #ece7dc for type, all of it small and widely tracked. Ledgers are set as two-column records with generous leading and hairline rules only at the top of each entry. Nothing is bold; emphasis is achieved by tracking and by the single brass rule.',
    colors: {
      primary: '#c9a227',
      secondary: '#8a8272',
      accent: '#f2ede2',
      neutral: '#1e1d24',
      background: '#14131a',
      text: '#ece7dc',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Marcellus',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 50',
      lineHeights: 'Display 1.2, body 1.8',
      letterSpacing: 'Display 0.01em; labels 0.24em uppercase',
    },
    components: {
      primary: 'Brass text on vault dark with a 1px brass underline and 0.24em tracking, no fill',
      secondary: '1px brass outline at 30% with bone label, radius 0',
      tertiary: 'A reference code that is itself the link, tracked to 0.2em',
      radius: '0 controls, 0 cards — a vault door has no radius',
      hover: 'The brass underline brightens to full and a 1px rule appears above the entry, 260ms ease-in-out',
      cards: 'Ledger entries: a 1px brass top rule, reference code, volume in litres, date, nothing else',
      forms: 'A single reference field with a 0.2em tracked placeholder and brass caret',
      navigation: 'Two items only — Holdings, Access — in 12px tracked caps',
      modals: 'A slower ledger page with a brass border and a request-for-access field',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '32 / 80 / 144 / 232',
      paddingScale: '20 / 40 / 72',
      grid: 'Ledger 840px centred with a 2-column record grid and 26px row leading',
    },
    motion: {
      pageLoad: 'The brass rule draws across the top over 900ms ease-in-out, then entries fade in',
      hoverStates: 'Rule brightness and a 1px rule appearing above, 260ms',
      transitions: 'Long fades and slow ease-in-out; nothing snaps, nothing bounces',
      scroll: 'The ledger scrolls at a deliberately even pace with no parallax or reveal',
    },
    accessibility:
      '#ece7dc on #14131a is 14.9:1 and brass #c9a227 on the same ground is 8.1:1 so it can carry both rules and links. Since there are no images, every holding carries a written description of at least six words. Access requests are a real form with labels, and focus is a 2px brass outline with a 3px offset.',
    responsive:
      'Record rows go from two columns to a stacked code/volume/date block at 700px. The 840px ledger reduces to a 560px measure by adding margin, not by shrinking type, and tracking eases from 0.24em to 0.14em below 480px so words do not fracture.',
    codeExample:
      '<section class="ledger">\n  <p class="kicker">HOLDING · REF 4471</p>\n  <h1>Deposited <em>1998.</em> Never opened.</h1>\n  <p class="row">VOLUME ..... 0.42 m³</p>\n  <button class="btn-primary">REQUEST ACCESS</button>\n</section>',
    accent: '#c9a227',
    motif: 'quote-band',
    layout: 'editorial',
    useCases: ['Banking', 'Legal', 'Insurance'],
    signatureCss: `.dv-site { background: #14131a; color: #ece7dc; }
.dv-card { background: transparent; border: 0; border-top: 1px solid #c9a22766; border-radius: 0; padding: 18px 0; }
.dv-btn-primary { background: transparent; color: #c9a227; border: 0; border-bottom: 1px solid #c9a227; border-radius: 0; letter-spacing: 0.24em; text-transform: uppercase; font-size: 12px; }
.dv-hero h1 { color: #ece7dc; }
.dv-hero h1 em { color: #c9a227; font-style: italic; }
.dv-badge { background: transparent; border: 1px solid #c9a22755; color: #ece7dc; border-radius: 0; }
.dv-nav { background: transparent; border-bottom: 1px solid #c9a22733; }
.dv-stat strong { color: #c9a227; font-weight: 400; }`,
    author: 'Ludovico Sarti',
    createdAt: '2026-09-17',
    popularity: 65,
  },
  {
    id: 'vault-of-letters',
    name: 'Vault of Letters',
    category: 'Luxury',
    tags: ['stationery', 'letterpress', 'editions', 'wax-seal', 'correspondence'],
    description: 'Sold as letters, numbered by hand.',
    designPhilosophy:
      'Vault of Letters does not have pages; it has correspondence. Every screen is set as a formal letter — salutation, body, valediction — and bears a wax seal in the corner that doubles as the action. Editions are numbered in the salutation, so the object is unique before it is described. For stationers, bespoke publishers, and houses that sell in editions of ninety.',
    designDetails:
      'Cotton stock #fbf7ef with iron-gall #3a2f2a ink and sealing-wax #7d2c2c used once per letter. Rules are drawn as 1px hairlines inset 24px from the edge of the sheet, and the seal is a 76px disc with an embossed inset shadow. Display type is a calligraphic face used only for the salutation.',
    colors: {
      primary: '#3a2f2a',
      secondary: '#8b7a6a',
      accent: '#7d2c2c',
      neutral: '#eae2d6',
      background: '#fbf7ef',
      text: '#2b2320',
    },
    typography: {
      displayFont: 'Mrs Saint Delafield',
      bodyFont: 'Jost',
      scale: '14 / 16 / 19 / 23 / 29 / 38 / 54',
      lineHeights: 'Salutation 1.3, body 1.85',
      letterSpacing: 'Body 0.02em; salutation 0',
    },
    components: {
      primary: 'No button: a bone disc with wax-coloured initials and an embossed inset, sealed by click',
      secondary: 'A ruled line with the label sitting on it in 13px caps',
      tertiary: 'A valediction that is the link — "Yours, →"',
      radius: '0 controls, 2px cards — sheets, not surfaces',
      hover: 'The seal lifts 1px with a sharper inner shadow and the wax ring darkens, 200ms ease-out',
      cards: 'Letters: hairline inset rule, salutation, body at 19px, valediction, seal in the corner',
      forms: 'A reply slip: ruled 32px lines with the field names in the margin',
      navigation: 'An index of correspondents rather than sections — six names, no icons',
      modals: 'The same letter unfolded to full size with the seal broken and a 2px wax edge',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '28 / 72 / 124 / 196',
      paddingScale: '32 / 56 / 96',
      grid: 'Sheet 760px with 1px inset rules at 24px and 1.85 leading',
    },
    motion: {
      pageLoad: 'The letter is set line by line over 700ms, then the seal presses in with a 2px settle',
      hoverStates: 'Seal lift and shadow sharpening, 200ms ease-out',
      transitions: 'Opening and closing ease differently — 240ms in, 180ms out, like a folded sheet',
      scroll: 'The inset rule follows the scroll as a continuous margin, unbroken between letters',
    },
    accessibility:
      '#2b2320 on #fbf7ef is 15.6:1; wax #7d2c2c reaches 7.8:1 so it can carry the seal initials and any error copy. The salutation is a real heading and the letter body a real paragraph sequence, so the correspondence metaphor never breaks the document outline. The seal is a button with a name, not a decorative image.',
    responsive:
      'The 760px sheet narrows to 100% with 20px padding at 560px and the inset rules move to 12px. Body type drops from 19px to 17px at 420px and leading tightens to 1.7. The seal shrinks to 56px but never moves out of the corner it is anchored to.',
    codeExample:
      '<article class="letter">\n  <p class="salutation">Dear Reader,</p>\n  <h1>Edition <em>ninety</em> of ninety.</h1>\n  <p class="body">Pressed on cotton, sealed in wax, posted flat.</p>\n  <button class="btn-primary">Yours →</button>\n</article>',
    accent: '#7d2c2c',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Wedding', 'Publishing', 'Events'],
    signatureCss: `.dv-site { box-shadow: inset 0 0 0 1px #eae2d6; }
.dv-card { border: 0; border-radius: 2px; background: #fffdf8; box-shadow: 0 1px 0 #eae2d6, inset 0 0 0 1px #eae2d6; padding: 30px 34px; }
.dv-hero h1 { font-family: 'Cormorant Garamond', serif; font-style: italic; }
.dv-btn-primary { border-radius: 999px; width: 64px; height: 64px; padding: 0; font-size: 12px; background: #7d2c2c; box-shadow: inset 0 0 0 3px #fbf7ef, inset 0 0 0 4px #7d2c2c; }
.dv-badge { background: transparent; border: 0; border-bottom: 1px solid #8b7a6a; border-radius: 0; color: #8b7a6a; }
.dv-sep { height: 1px; background: #eae2d6; }`,
    author: 'Beatrix Nolan',
    createdAt: '2026-09-18',
    popularity: 63,
  },
  {
    id: 'cellar-index',
    name: 'Cellar Index',
    category: 'Luxury',
    tags: ['wine', 'cellar', 'vintage', 'catalogue', 'sommelier'],
    description: 'Vintages behind a cellar door.',
    designPhilosophy:
      'Cellar Index is a catalogue that opens like a cellar door: the vintage list sits behind two hinged panels that swing apart on interaction, revealing the bottles you were never shown on arrival. Tasting notes are set as footnotes, because they are commentary, not content. For wine merchants, cellars, and specialists whose stock is old enough to need an index.',
    designDetails:
      'Bottle dark #4b1f2f with cellar stone #e6ded4 and a gilt #b98b3a rule used for vintages only. The hinged panel is a two-panel reveal built with a shared perspective transform, and every vintage is set in a serif at 21px with the year tracked 0.12em. Dust is simulated with a very faint 2% warm overlay on the panels only.',
    colors: {
      primary: '#4b1f2f',
      secondary: '#8f7a6d',
      accent: '#b98b3a',
      neutral: '#e6ded4',
      background: '#f6f1e9',
      text: '#2a1c1e',
    },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 52',
      lineHeights: 'Display 1.15, body 1.7 (notes 1.45)',
      letterSpacing: 'Vintages 0.12em; notes 0.01em',
    },
    components: {
      primary: 'Bottle-dark block with a 2px gilt top rule, radius 1px, 13px tracked uppercase label',
      secondary: 'Cellar-stone panel with a 1px stone border and a gilt year in the corner',
      tertiary: 'A gilt vintage that links to its note',
      radius: '1px controls, 4px cards — a cellar is old, not soft',
      hover: 'The gilt rule lifts 2px and the panel tilts 0.6° toward the viewer, 220ms ease-out',
      cards: 'Bottle records: producer, vintage, region, then a footnote-numbered tasting note',
      forms: 'A bin/rack locator with a wheel picker (A1 to K9) and a gilt focus ring',
      navigation: 'Two hinged panels: Allocazioni and Cantina, with a handle in the middle',
      modals: 'A bottle leaf: one-page detail with the label reproduced as flat colour blocks',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 64 / 116 / 184',
      paddingScale: '18 / 34 / 60',
      grid: '1220px with a 2-panel hinge grid (46% / 46%) and a 8% centre gutter',
    },
    motion: {
      pageLoad: 'The two panels swing open over 900ms from a shared hinge axis, revealing the list',
      hoverStates: 'Rule lift and a 0.6° panel tilt, 220ms ease-out',
      transitions: 'Ease-out on open, ease-in on close, with a 120ms difference in duration',
      scroll: 'Gilt rules mark the vintage you are reading in the left index column',
    },
    accessibility:
      '#2a1c1e on #f6f1e9 is 14.2:1 and gilt #b98b3a at 4.6:1 carries vintages at 17px or larger. The hinge reveal is progressive enhancement — with reduced motion the panels open instantly, and the full list is always present in the DOM in order. Tasting-note footnotes use real superscript buttons with describedby targets.',
    responsive:
      'The hinge collapses to a single panel at 900px and the vintage list becomes a plain ledger. Tasting notes move inline beneath their bottle at 620px instead of into a footnote column. The bin locator becomes a two-field text entry under 480px.',
    codeExample:
      '<section class="cave">\n  <p class="kicker">BIN B4 · 1998</p>\n  <h1>Barolo, <em>one case left.</em></h1>\n  <p class="note">¹ Tar, roses, and a long quiet finish.</p>\n  <button class="btn-primary">OPEN THE CELLAR</button>\n</section>',
    accent: '#b98b3a',
    motif: 'editorial-columns',
    layout: 'magazine',
    useCases: ['Restaurant', 'E-commerce', 'Hotel'],
    signatureCss: `.dv-card { border: 1px solid #8f7a6d33; border-top: 2px solid #b98b3a; border-radius: 4px; background: #fffdf9; }
.dv-card p { font-size: 13px; line-height: 1.45; color: #8f7a6d; }
.dv-hero h1 em { font-style: italic; color: #4b1f2f; }
.dv-btn-primary { border-radius: 1px; background: #4b1f2f; border-top: 2px solid #b98b3a; letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px; }
.dv-price { color: #b98b3a; letter-spacing: 0.12em; }
.dv-media { background: linear-gradient(180deg, #4b1f2f, #2a1119); border-radius: 4px 4px 0 0; }
.dv-badge { background: #e6ded4; color: #4b1f2f; border-radius: 1px; }`,
    author: 'Marguerite Lambert',
    createdAt: '2026-09-18',
    popularity: 68,
  },
  {
    id: 'goldsmiths-lane',
    name: 'Goldsmiths Lane',
    category: 'Luxury',
    tags: ['jewellery', 'goldsmith', 'bench', 'loupe', 'precision'],
    description: 'A loupe over every detail.',
    designPhilosophy:
      'Goldsmiths Lane assumes you will want to look closer, so it hands you a loupe: hover any specification and a circular lens magnifies that region of the page in place. Bench work is tiny, and a site about it should admit that, then solve it rather than hiding it behind larger type. For jewellers, silversmiths, and restorers whose work only makes sense at 10× magnification.',
    designDetails:
      'Bench wood #efe7db with dark grain #33291f, brass #c98a2e for tool marks and hallmark text, and a single cool stone #7f8b8e reserved for stone-setting. The loupe is a 180px circle with a 3px brass ring and a 1.4× scale transform, positioned by the pointer with a transform-origin set on the magnified layer.',
    colors: {
      primary: '#33291f',
      secondary: '#9c8f7a',
      accent: '#c98a2e',
      neutral: '#ded3c2',
      background: '#efe7db',
      text: '#241c14',
    },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Jost',
      scale: '12 / 14 / 17 / 21 / 28 / 40 / 58',
      lineHeights: 'Display 1.08, body 1.7',
      letterSpacing: 'Hallmarks 0.18em; body 0.01em',
    },
    components: {
      primary: 'Brass block with a 1px dark edge and a hallmark-style 12px tracked label, radius 2px',
      secondary: 'Bench-wood chip with a 1px grain border and a hand-tooled look',
      tertiary: 'A hallmark code that links to its assay record',
      radius: '2px controls, 6px cards — a careful curve, like a filed edge',
      hover: 'The loupe appears under the pointer with a 1.4× magnification and a 3px brass ring, 120ms',
      cards: 'Bench trays: felt-lined, 6px radius, with one specification per row at 14px',
      forms: 'A ring-size field with a live diameter in millimetres and a brass gauge bar',
      navigation: 'A tool tray: five brass tabs with stamped labels',
      modals: 'A tray lift with the loupe active by default and a hallmark record beneath',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 56 / 100 / 160',
      paddingScale: '16 / 30 / 52',
      grid: '1180px with a 3-col tray grid and a 14px spec row pitch',
    },
    motion: {
      pageLoad: 'Tools settle onto the bench one at a time, 60ms apart, each with a 2px drop',
      hoverStates: 'The loupe fades in over 120ms and tracks the pointer with no easing beyond 60ms',
      transitions: 'Ease-out, short, and never longer than 240ms',
      scroll: 'The loupe deactivates on scroll so magnification never fights reading',
    },
    accessibility:
      '#241c14 on #efe7db is 13.4:1; brass #c98a2e at 4.3:1 is restricted to hallmarks at 17px or larger and always accompanied by the spelled-out value. The loupe is decorative: reduced motion disables it entirely, and every magnified specification is already present as text at readable size. Focus is a 2px brass outline with a white inner offset.',
    responsive:
      'The loupe is disabled below 1024px, where specifications simply render 2px larger instead. The three-column tray grid becomes two at 880px and one at 600px. Ring sizes always print diameter and circumference so nothing depends on the gauge bar.',
    codeExample:
      '<section class="bench">\n  <p class="kicker">HALLMARK 375 · BENCH 04</p>\n  <h1>Nine carat, <em>set by hand.</em></h1>\n  <p class="spec">BAND ..... 2.1 mm</p>\n  <button class="btn-primary">BOOK THE BENCH</button>\n</section>',
    accent: '#c98a2e',
    motif: 'glow-pulse',
    layout: 'spotlight',
    useCases: ['Fashion', 'E-commerce', 'Wedding'],
    signatureCss: `.dv-card { border-radius: 6px; background: #f7f1e6; box-shadow: inset 0 0 0 1px #9c8f7a33, 0 2px 0 #33291f1a; }
.dv-hero h1 em { color: #c98a2e; font-style: italic; }
.dv-btn-primary { border-radius: 2px; background: #33291f; color: #efe7db; box-shadow: 0 0 0 1px #c98a2e, 0 2px 0 #241c141f; letter-spacing: 0.18em; text-transform: uppercase; font-size: 12px; }
.dv-badge { background: transparent; border: 1px solid #c98a2e; color: #33291f; border-radius: 2px; letter-spacing: 0.18em; }
.dv-stat strong { font-family: 'Abril Fatface', serif; font-weight: 400; }
.dv-media { border-radius: 6px; background: radial-gradient(circle at 30% 30%, #c98a2e, #33291f); }`,
    author: 'Nuala Brennan',
    createdAt: '2026-09-19',
    popularity: 66,
  },
  {
    id: 'mud-kitchen',
    name: 'Mud Kitchen',
    category: 'Playful',
    tags: ['outdoor', 'kids', 'garden', 'messy', 'pretend'],
    description: 'Five stars for a mud pie.',
    designPhilosophy:
      'Mud Kitchen is for four-year-olds cooking in the garden, and it refuses to be tidy: puddle-blobs instead of rectangles, splash marks instead of icons, and a ranking board where the highest-rated dish is a mud pie. The design proves that a cheerful interface does not need pastel gradients or mascots — it needs things to be out of line on purpose. For outdoor play brands, nurseries, and garden shops.',
    designDetails:
      'Mud #6b4f2a over grass #7ba05b with marigold #f2913d as the only bright and a paper towel #f8f2e2 as the ground. Every container is a blob made from asymmetric border-radius (58% 42% 47% 53%), and rules are drawn as wobbly 2px lines using two overlaid gradients. Nothing is perfectly aligned to anything else by design, but the 6px spacing base keeps it navigable.',
    colors: {
      primary: '#6b4f2a',
      secondary: '#7ba05b',
      accent: '#f2913d',
      neutral: '#ede0c8',
      background: '#f8f2e2',
      text: '#2f2416',
    },
    typography: {
      displayFont: 'Gaegu',
      bodyFont: 'Karla',
      scale: '15 / 17 / 20 / 24 / 30 / 40 / 56',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Display 0.005em; labels 0.03em',
    },
    components: {
      primary: 'Mud-brown blob with a marigold 4px bottom edge and a 58%/42% radius, 16px 30px padding',
      secondary: 'Grass-green outline wobbled to 2px with a paper fill',
      tertiary: 'A hand-ish link underlined with a squiggle, not a straight rule',
      radius: 'blob controls (58% 42% 47% 53%), blob cards — nothing here is a rectangle',
      hover: 'The blob squashes 4% wider and 3% shorter, then springs back, 260ms with overshoot',
      cards: 'Recipe cards as paper towels with torn tops and a marigold blob badge',
      forms: 'A pie order form with blob fields and a stepper made of pebbles',
      navigation: 'Five blobs in a row, each labelled and none of them the same size',
      modals: 'A bigger puddle that spreads open from the point it was tapped',
    },
    spacing: {
      baseUnit: '6px',
      marginScale: '20 / 48 / 88 / 140',
      paddingScale: '16 / 26 / 42',
      grid: 'Fluid 1100px with deliberate 6-24px misalignments from a 6px base',
    },
    motion: {
      pageLoad: 'Blobs land with a squash-and-stretch, 70ms apart, marigold badges arriving last',
      hoverStates: 'Squash then spring back, 260ms cubic-bezier(.34,1.56,.64,1)',
      transitions: 'Springy, never linear, but capped at two bounces',
      scroll: 'Puddle shapes stretch downward 6px as each section enters, then settle',
    },
    accessibility:
      '#2f2416 on #f8f2e2 is 14.1:1; marigold #f2913d is 2.2:1 on the paper ground so it never carries text — it is a blob, a badge fill, or a 4px edge only. The wobbled rules are decorative (aria-hidden) and all real separators are also real elements. Squash animation is disabled under reduced motion, which leaves the blobs static and identical in shape to the touch-friendly 48px targets they already were.',
    responsive:
      'The blob containers become 3-column, then 1-column below 560px with radius simplified to 30px so nothing clips. Misalignment reduces from 24px to 6px under 620px. Tap targets stay 48px at 320px and the pebble stepper becomes two stacked buttons.',
    codeExample:
      '<section class="puddle">\n  <p class="kicker">MENU 03 · OUTSIDE</p>\n  <h1>Mud pie, <em>five stars.</em></h1>\n  <p class="sub">Makes 6. Serves nobody. Best eaten with a stick.</p>\n  <button class="btn-primary">Start cooking</button>\n</section>',
    accent: '#f2913d',
    motif: 'leaf-divider',
    layout: 'full-bleed',
    useCases: ['Kids', 'Grocery', 'Education'],
    signatureCss: `.dv-card { border-radius: 58% 42% 47% 53% / 46% 54% 46% 54%; border: 0; background: #fffdf6; box-shadow: 0 6px 0 #6b4f2a22; padding: 26px 30px; }
.dv-btn-primary { border-radius: 58% 42% 47% 53% / 50% 50% 50% 50%; border-bottom: 4px solid #f2913d; }
.dv-hero h1 em { color: #7ba05b; font-style: normal; }
.dv-badge { background: #f2913d; color: #2f2416; border-radius: 999px; }
.dv-media { border-radius: 62% 38% 44% 56% / 50% 46% 54% 50%; background: linear-gradient(160deg, #6b4f2a, #7ba05b); }
.dv-stat { border-bottom: 2px solid #ede0c8; padding-bottom: 6px; }`,
    author: 'Rosalind Pike',
    createdAt: '2026-09-19',
    popularity: 70,
  },
  {
    id: 'pigeon-post',
    name: 'Pigeon Post',
    category: 'Playful',
    tags: ['messaging', 'letters', 'birds', 'kids', 'delivery'],
    description: 'Messages delivered by birds you named.',
    designPhilosophy:
      'Pigeon Post takes messaging literally: you write on a slip, fold it into a triangle, hand it to a named bird, and watch it fly off the edge of the screen. The interface is a paper plane with wings, and the acknowledgement is not a tick but a small flapping animation leaving frame. For children, pen-pal services, and any product that would rather be charming than instantaneous.',
    designDetails:
      'Sky #fafbfd with post-blue #3f6fb5, stamp red-orange #d9622b and a soft cloud grey #eceff5 for surfaces. Slips are folded triangles with 2px crease lines drawn as hairline gradients, and every message carries a small stamp in its corner. Type is handwritten for display and rounded for body, and nothing sits perfectly horizontal — slips rest at 1° to 3° tilt.',
    colors: {
      primary: '#3f6fb5',
      secondary: '#8fa3c4',
      accent: '#d9622b',
      neutral: '#eceff5',
      background: '#fafbfd',
      text: '#1e2a3d',
    },
    typography: {
      displayFont: 'Patrick Hand',
      bodyFont: 'Quicksand',
      scale: '15 / 17 / 20 / 24 / 30 / 38 / 52',
      lineHeights: 'Display 1.25, body 1.6',
      letterSpacing: 'Display 0.005em; labels 0.05em',
    },
    components: {
      primary: 'Post-blue triangle with a 2px crease, radius 4px, 14px 28px padding, slight 1° tilt',
      secondary: 'Cloud-grey slip with a stamp-orange dashed edge and a folded corner',
      tertiary: 'A link that unfolds its tail by 6px on hover',
      radius: '4px controls, 4px cards — folded paper, lightly worn',
      hover: 'The slip tilts an extra 1.5° and lifts 3px, and the stamp corner darkens, 180ms ease-out',
      cards: 'Message slips with a crease line down the middle, stamp in the corner, bird name beneath',
      forms: 'A 4-line ruled note field with a live character count and a fold-preview beside it',
      navigation: 'A roost bar: four named birds in a row, each with a small wing glyph',
      modals: 'The slip unfolds into a full page with the crease remaining visible',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 52 / 92 / 148',
      paddingScale: '16 / 28 / 46',
      grid: '1080px with a 3-col slip grid and 10px vertical drift between columns',
    },
    motion: {
      pageLoad: 'Birds enter from the left edge with a two-beat wing flap, 200ms per beat, 90ms apart',
      hoverStates: 'Tilt plus 3px lift, 180ms ease-out',
      transitions: 'Ease-out with one small overshoot; never a loop',
      scroll: 'A flock drifts across the header at 60s, aria-hidden and pausable',
    },
    accessibility:
      '#1e2a3d on #fafbfd is 15.3:1; post-blue 4.7:1 and stamp orange 4.4:1 both clear AA for 16px+ text. Sending a message is a real form with a label and a status message, and the flying-bird acknowledgement is announced as "message sent to Bramble". Wing flap and the drifting flock are removed under reduced motion.',
    responsive:
      'The three-column slip grid becomes two at 880px and one at 560px with tilts reduced to ±0.5°. The fold-preview is hidden under 760px so the note field keeps full width. Named birds remain a single horizontal row and wrap, rather than truncating.',
    codeExample:
      '<section class="slip">\n  <p class="kicker">TO · BRAMBLE (BIRD 04)</p>\n  <h1>Dear Sam, <em>meet at the shed.</em></h1>\n  <p class="note">Bring the good biscuits and the blue string.</p>\n  <button class="btn-primary">Fold and send</button>\n</section>',
    accent: '#d9622b',
    motif: 'wave-section',
    layout: 'split-hero',
    useCases: ['Kids', 'Community', 'Pets'],
    signatureCss: `.dv-card { border-radius: 4px; transform: rotate(-1.2deg); box-shadow: 0 3px 0 #8fa3c433; }
.dv-card:nth-child(2n) { transform: rotate(2.4deg); }
.dv-card::after { content: ''; position: absolute; top: 0; right: 0; width: 18px; height: 18px; background: linear-gradient(225deg, #faFBfd 50%, #d9622b 50%); }
.dv-btn-primary { border-radius: 4px; background: #3f6fb5; box-shadow: 0 3px 0 #2b4d80; }
.dv-btn-primary:hover { transform: translateY(-3px) rotate(1.5deg); }
.dv-hero h1 em { color: #3f6fb5; font-style: normal; }
.dv-badge { border: 2px dashed #d9622b; background: #fff; color: #d9622b; border-radius: 2px; }`,
    author: 'Owen Mackie',
    createdAt: '2026-09-20',
    popularity: 69,
  },
  {
    id: 'slime-lab',
    name: 'Slime Lab',
    category: 'Playful',
    tags: ['slime', 'viscosity', 'experiment', 'tokens', 'stretch'],
    description: 'Viscosity is a design token here.',
    designPhilosophy:
      'Slime Lab tests a single idea: what if the interaction physics were a token the visitor could change? A stretchiness slider at the top of the page rewrites border radii, transition durations, and easing coefficients live, so the visitor feels the difference between a brittle system and a gooey one. The subject happens to be slime, but the argument is about tokens. For science kits, classroom experiments, and design-system playgrounds that want to be felt rather than read.',
    designDetails:
      'Bright goo #7bd14f over lab-bright #fbfdf8 with reactive cyan #4aa3c7 and a warning yellow #f4d13d for the stretch meter. Panels have a wet highlight along their top edge (a 1px inset light line) and drip shapes hang from the bottom of active components. Nothing is ever still for more than a second at the default setting.',
    colors: {
      primary: '#7bd14f',
      secondary: '#4aa3c7',
      accent: '#f4d13d',
      neutral: '#e8f2e2',
      background: '#fbfdf8',
      text: '#1d2a1a',
    },
    typography: {
      displayFont: 'Hi Melody',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 20 / 24 / 30 / 40 / 54',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Display 0.01em; sliders 0.04em',
    },
    components: {
      primary: 'Goo-green pill with a wet top highlight and a drip beneath, radius driven by the slider',
      secondary: 'Cyan outline at 2px with a translucent wash and a jelly wobble on press',
      tertiary: 'A squeeze link that compresses 4% horizontally while held',
      radius: '28px controls by default, 18px cards — both rewritten live by the stretchiness token',
      hover: 'Elements stretch 6% along their hover axis with a 320ms gooey ease, then relax slowly',
      cards: 'Poured panels: 18px radius, wet top line, a drip at the bottom edge, wobble on entry',
      forms: 'Fields that stretch horizontally as you type, with a live viscosity readout',
      navigation: 'A stretch meter at the top that rewrites the whole kit, shown as a labelled slider',
      modals: 'The sheet pours downward from the top edge with a 6px drip, splashing at 96% height',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 50 / 92 / 148',
      paddingScale: '16 / 30 / 48',
      grid: '1120px fluid with 4-token rows and a slider rail across the top',
    },
    motion: {
      pageLoad: 'Panels pour in from the top edge, 80ms apart, each overshooting 8px then settling',
      hoverStates: '6% stretch with a gooey cubic-bezier(.68,-0.4,.27,1.4), 320ms',
      transitions: 'Long, elastic, and deliberately different lengths on open (320ms) and close (480ms)',
      scroll: 'Drips elongate as sections pass, snapping back 6px behind the scroll position',
    },
    accessibility:
      '#1d2a1a on #fbfdf8 is 15.9:1; goo green carries dark text and still clears 9:1. The stretchiness slider is a real range input with aria-valuetext describing the setting in words ("firm", "standard", "gooey"). Reduced motion locks the token to "firm" and removes drips, wobble, and the pour entirely, so the page becomes a calm, quiet version of itself.',
    responsive:
      'The stretch meter moves below the header at 720px and remains usable with keyboard arrows. Panels go 2-column at 880px and 1-column at 560px, with drips removed under 560px. At 320px the wobble is disabled so nothing shifts under a thumb.',
    codeExample:
      '<section class="pour">\n  <p class="kicker">BATCH 7 · VISCOSITY 42%</p>\n  <h1>Stretch it to <em>400%.</em></h1>\n  <p class="sub">Change one token. Watch the whole kit give way.</p>\n  <button class="btn-primary">Pour a new batch</button>\n</section>',
    accent: '#7bd14f',
    motif: 'pill-nav',
    layout: 'centered',
    useCases: ['Kids', 'Education', 'Design Tools'],
    signatureCss: `.dv-card { border-radius: 18px; border: 0; box-shadow: inset 0 2px 0 #ffffffcc, 0 8px 0 #e8f2e2; }
.dv-btn-primary { background: #7bd14f; color: #1d2a1a; border-radius: 28px; box-shadow: inset 0 2px 0 #ffffffaa, 0 4px 0 #4f9c2f; }
.dv-hero h1 em { color: #4aa3c7; font-style: normal; }
.dv-media { border-radius: 18px 18px 60% 60%; background: linear-gradient(180deg, #7bd14f, #4aa3c7); }
.dv-badge { background: #f4d13d; color: #1d2a1a; border-radius: 999px; }
.dv-stat strong { color: #4aa3c7; }
.dv-nav { border-bottom: 3px solid #e8f2e2; }`,
    author: 'Kofi Mensah',
    createdAt: '2026-09-20',
    popularity: 71,
  },
  {
    id: 'kart-klub',
    name: 'Kart Klub',
    category: 'Playful',
    tags: ['karts', 'racing', 'laptimes', 'track', 'club'],
    description: 'Lap times, shouted at 120px.',
    designPhilosophy:
      'Kart Klub is a timing board that happens to have a website attached. The fastest lap sits at the top of every screen in 120px numerals, because a clubhouse argument is settled by the clock and by nothing else. Everything else is taped to the board: entry forms, heat sheets, and a starting-light sequence that replaces the primary button. For kart clubs, track days, and any fixture list where seconds matter more than prose.',
    designDetails:
      'Asphalt #37474f with signal red #c62828 and flag yellow #ffd54f, on a pit-lane #fafafa ground. A checkered strip runs along the top of the header and along every section break, drawn as a repeating conic pattern. Numbers are mono, everything else is condensed, and the fastest three laps are ordered by a yellow stripe rather than by size.',
    colors: {
      primary: '#c62828',
      secondary: '#37474f',
      accent: '#ffd54f',
      neutral: '#eceff1',
      background: '#fafafa',
      text: '#1b1b1b',
    },
    typography: {
      displayFont: 'Rubik Mono One',
      bodyFont: 'Rubik',
      scale: '13 / 15 / 18 / 22 / 30 / 52 / 120',
      lineHeights: 'Lap figures 0.86, body 1.55',
      letterSpacing: 'Display -0.02em; heat codes 0.1em uppercase',
    },
    components: {
      primary: 'Signal-red block with a five-light strip above it, radius 0, 52px tall, uppercase 14px',
      secondary: 'Asphalt-outlined chip with a heat code and a lane number',
      tertiary: 'A lap time that is itself the link, 0.02em tracked',
      radius: '0 controls, 2px cards — pit boards are cut, not rounded',
      hover: 'One light on the strip illuminates and the block shifts 2px down, 120ms steps(5)',
      cards: 'Timing sheets: checkered top strip, lap table, a yellow stripe for the top three',
      forms: 'An entry form with a kart number field and a class picker as taped labels',
      navigation: 'A pit board: gear number, closed/open flag, and the current session in 13px caps',
      modals: 'A scrutineering sheet that slides in from the right like a timing slip',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 48 / 88 / 144',
      paddingScale: '14 / 26 / 42',
      grid: '1240px with a 4-col timing grid and an 8px checkered section strip',
    },
    motion: {
      pageLoad: 'The five lights illuminate in sequence at 200ms apart, then everything appears on green',
      hoverStates: 'Single light plus a 2px shift, 120ms in five steps',
      transitions: 'steps() only, quantised to the five lights',
      scroll: 'A lap ticker scrolls the last ten times at 22s, pausing on hover',
    },
    accessibility:
      '#1b1b1b on #fafafa is 17.1:1; signal red carries white text at only 4.3:1 so it is restricted to 18px/700 or larger and every light has a written position beside it. Lap tables use real table markup with scope headers so times are announced with their driver. The countdown respects reduced motion by showing the lights statically and reading the sequence aloud.',
    responsive:
      'The 120px lap figure clamps to 52px at 560px, keeping the hundredths column visible. The four-column timing grid becomes two at 860px and one at 560px. The pit board collapses to gear plus flag under 480px, and the checkered strip thins from 8px to 4px.',
    codeExample:
      '<section class="board">\n  <p class="kicker">HEAT 06 · KART 41</p>\n  <p class="lap">41.28</p>\n  <p class="sub">Pos. 2 of 12 · gap +0.41</p>\n  <button class="btn-primary">ENTER THE HEAT</button>\n</section>',
    accent: '#c62828',
    motif: 'ticker-marquee',
    layout: 'dashboard',
    useCases: ['Sports', 'Events', 'Automotive'],
    signatureCss: `.dv-site { background-image: repeating-conic-gradient(#1b1b1b 0 25%, #fff 0 50%); background-size: 16px 16px; background-repeat: repeat-x; background-position: top; }
.dv-card { border-radius: 2px; border-top: 8px solid #37474f; }
.dv-card::before { content: ''; position: absolute; top: -8px; left: 0; right: 0; height: 8px; background: repeating-conic-gradient(#1b1b1b 0 25%, #fff 0 50%) 0 0 / 8px 8px; }
.dv-hero h1 { font-size: clamp(40px, 12vw, 120px); line-height: 0.86; }
.dv-btn-primary { border-radius: 0; background: #c62828; color: #fff; }
.dv-stat strong { font-family: 'Rubik Mono One', monospace; }
.dv-badge { background: #ffd54f; color: #1b1b1b; border-radius: 0; }`,
    author: 'Bram de Vries',
    createdAt: '2026-09-21',
    popularity: 68,
  },
  {
    id: 'dino-dig',
    name: 'Dino Dig',
    category: 'Playful',
    tags: ['fossils', 'museum', 'excavation', 'kids', 'paleontology'],
    description: 'Brush away sixty-eight million years.',
    designPhilosophy:
      'Dino Dig is an excavation, not a product page. Sand strata are layered across the background, finds arrive as dashed bone outlines that fill in when you brush over them, and every specimen is dated not by an era but by a count of years. The interface teaches patience by asking for a small physical gesture before revealing anything. For natural-history museums, schools, and dig-kit makers.',
    designDetails:
      'Sandstone #8d6e63 and moss #558b2f over dig-cream #faf3e0, with fossil amber #f9a825 only inside a find. Strata are drawn as four repeating bands of differing opacity, and every specimen card has a dashed bone border that turns solid once found. Type is chunky display plus a rounded body, and tooth counts are always spelled out numerically.',
    colors: {
      primary: '#8d6e63',
      secondary: '#558b2f',
      accent: '#f9a825',
      neutral: '#efe3c8',
      background: '#faf3e0',
      text: '#2e2418',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Gaegu',
      scale: '16 / 18 / 22 / 26 / 32 / 42 / 58',
      lineHeights: 'Display 1.05, body 1.55',
      letterSpacing: 'Display 0.005em; field labels 0.04em',
    },
    components: {
      primary: 'Fossil-amber block with a dashed dark outline that becomes solid on hover, radius 10px',
      secondary: 'Sandstone chip with a dashed bone edge and a find count',
      tertiary: 'A brush link that uncovers two more words of its own label when hovered',
      radius: '10px controls, 14px cards — rounded but chipped, like excavated stone',
      hover: 'A radial brush mask clears a 40px circle of sand from the card and reveals the bone, 400ms',
      cards: 'Strata cards with four sand bands, a dashed outline, and a find badge when excavated',
      forms: 'A dig-schedule form with a field-number picker and a tool-required checklist',
      navigation: 'A trench bar: four numbered grid squares, the active one excavated-looking',
      modals: 'A specimen drawer that slides open from the top with a layer of sand falling away',
    },
    spacing: {
      baseUnit: '6px',
      marginScale: '20 / 48 / 90 / 148',
      paddingScale: '16 / 28 / 46',
      grid: '1120px with a 3-col find grid and 4 sand strata bands of 96px',
    },
    motion: {
      pageLoad: 'Sand layers settle top-down in 120ms steps, then specimens outline themselves in dashed strokes',
      hoverStates: 'Radial brush mask reveals a circle at the pointer, 400ms ease-out',
      transitions: 'Ease-out, generous, never faster than 240ms',
      scroll: 'Stratum bands shift 6px out of phase to give the ground some depth',
    },
    accessibility:
      '#2e2418 on #faf3e0 is 13.8:1 and every specimen is fully readable before it is found, so the brush reveal is decoration rather than gating. Fossil amber at 2.9:1 is only ever a fill or a 3px outline. Brushing works with keyboard focus (reveals on focus) and the whole effect is skipped under reduced motion.',
    responsive:
      'The three-column find grid becomes two at 900px and one at 600px, with strata bands halving in height. The brush gesture is disabled below 700px where it would fight scrolling; specimens then show a solid bone outline instead. Field numbers stay at 44px tap size.',
    codeExample:
      '<section class="trench">\n  <p class="kicker">SITE 4 · LAYER 3 · 68 Ma</p>\n  <h1>A tooth, and <em>half a jaw.</em></h1>\n  <p class="sub">Field 12 · brushed and bagged · 4 of 9 recovered</p>\n  <button class="btn-primary">Start brushing</button>\n</section>',
    accent: '#f9a825',
    motif: 'grain-overlay',
    layout: 'hero-cards',
    useCases: ['Kids', 'Education', 'Art Gallery'],
    signatureCss: `.dv-site { background-image: repeating-linear-gradient(180deg, #8d6e6322 0 96px, #558b2f18 96px 192px, #f9a82518 192px 288px, transparent 288px 384px); }
.dv-card { border-radius: 14px; border: 2px dashed #8d6e63; background: #fffdf6; }
.dv-card:hover { border-style: solid; }
.dv-btn-primary { border-radius: 10px; background: #f9a825; color: #2e2418; border: 2px dashed #2e2418; }
.dv-hero h1 em { color: #558b2f; font-style: normal; }
.dv-badge { background: #558b2f; color: #faf3e0; border-radius: 6px; border: 2px dotted #faf3e0; }
.dv-media { border-radius: 14px; background: linear-gradient(180deg, #efe3c8, #8d6e63); }`,
    author: 'Marta Iversen',
    createdAt: '2026-09-21',
    popularity: 72,
  },
  {
    id: 'fax-machine',
    name: 'Fax Machine',
    category: 'Retro',
    tags: ['fax', 'telefax', 'dot-matrix', 'office', 'transmission'],
    description: 'Prints line by line, at modem speed.',
    designPhilosophy:
      'Fax Machine refuses to render the whole page at once. Content arrives printhead-style, one scan line at a time, beneath a transmission header carrying the time, the number, and the page count — because a fax is a document that announces its own mechanics. Nothing on the page is allowed to be prettier than a thermal print. For archival services, legal couriers, and anyone who misses the transmission report.',
    designDetails:
      'Thermal paper #f5f5f4 with grey dot-matrix #757575 filler and one error red #d32f2f used only on a failed page. Every block sits under a 24px header strip of 13px mono, and vertical edges are torn rather than cut, drawn with a 2px repeating gradient. Type is VT323 at large sizes, which reads as printhead output rather than as display type.',
    colors: {
      primary: '#212121',
      secondary: '#757575',
      accent: '#d32f2f',
      neutral: '#e0e0e0',
      background: '#f5f5f4',
      text: '#1a1a1a',
    },
    typography: {
      displayFont: 'VT323',
      bodyFont: 'Courier Prime',
      scale: '12 / 13 / 15 / 18 / 24 / 32 / 46',
      lineHeights: 'Display 1.15, body 1.7 (printhead pitch 24px)',
      letterSpacing: 'Header strips 0.08em uppercase; body 0.02em',
    },
    components: {
      primary: 'Grey block with a 2px torn bottom edge and 13px mono uppercase label, radius 0',
      secondary: 'Dotted 1px outline with a page-count suffix',
      tertiary: 'A text link ending in a transmission code',
      radius: '0 controls, 0 cards — a fax has no corners at all',
      hover: 'The torn edge ripples through 4 phases and the block prints 2px taller, 160ms steps(4)',
      cards: 'Faxes: a 24px header strip, a printed body at 15px, and a torn lower edge',
      forms: 'A transmission form with a dialled number field and a redial counter',
      navigation: 'A header strip with date, time, and page count in 12px mono',
      modals: 'A reprint: the same page printed again with the header timestamped two minutes later',
    },
    spacing: {
      baseUnit: '2px',
      marginScale: '14 / 36 / 68 / 112',
      paddingScale: '8 / 16 / 28',
      grid: 'Single 720px thermal column with 24px printhead pitch and torn side edges',
    },
    motion: {
      pageLoad: 'Lines print top-down at 18ms each over 600ms, with the header appearing only when complete',
      hoverStates: 'Torn-edge ripple in four discrete phases, 160ms',
      transitions: 'steps(4, end) everywhere; the machine has no interpolation',
      scroll: 'Scrolling pages in a fresh header strip, timestamped with the current time',
    },
    accessibility:
      '#1a1a1a on #f5f5f4 is 16.6:1 and the 24px printhead pitch keeps long text readable despite the noise theme. The print-on-load effect is disabled under reduced motion, which shows the document fully rendered instead of line by line. Error red at 4.5:1 is paired with the words PAGE FAILED so colour is never the message.',
    responsive:
      'The 720px thermal column narrows to 100% with 12px padding at 520px; the printhead pitch reduces to 20px so fewer lines are needed. Header strips keep their 12px mono size because shrinking them would lose the date. Torn edges remain 2px at all widths.',
    codeExample:
      '<section class="page">\n  <p class="hdr">10:41  0714 228 1130  PAGE 01/03</p>\n  <h1>Order 4471: <em>received.</em></h1>\n  <p class="body">Twelve pallets, dock 4, 06:30 Friday. Signed, R. Okafor.</p>\n  <button class="btn-primary">REDIAL</button>\n</section>',
    accent: '#d32f2f',
    motif: 'mono-labels',
    layout: 'editorial',
    useCases: ['Legal', 'Logistics', 'Insurance'],
    signatureCss: `.dv-site { background-image: repeating-linear-gradient(0deg, #7575751a 0 1px, transparent 1px 24px); }
.dv-card { border-radius: 0; border: 0; border-top: 2px dashed #757575; background: #fbfbfa; padding: 16px; }
.dv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 22px; background: #ececeb; border-bottom: 1px solid #e0e0e0; }
.dv-btn-primary { border-radius: 0; background: #212121; color: #f5f5f4; font-family: 'Courier Prime', monospace; letter-spacing: 0.08em; }
.dv-h2 { font-family: 'VT323', monospace; font-size: 34px; letter-spacing: 0.02em; }
.dv-badge { background: #e0e0e0; color: #1a1a1a; border-radius: 0; font-family: 'Courier Prime', monospace; }
.dv-stat strong { font-family: 'VT323', monospace; font-size: 40px; }`,
    author: 'Peter Nakamura',
    createdAt: '2026-09-22',
    popularity: 61,
  },
  {
    id: 'betamax-rental',
    name: 'Betamax Rental',
    category: 'Retro',
    tags: ['video', 'rental', 'vhs', 'shelves', 'releases'],
    description: 'Two nights. Be kind, rewind.',
    designPhilosophy:
      'Betamax Rental is a shelf, not a catalogue. Titles are arranged as box spines standing shoulder to shoulder, each with a hand-written shelf label above it and a due-back stamp in the corner, and the whole page is organised by aisle rather than by category. The rental contract is the loudest thing on the page, because the shop only cares about the return date. For film archives, repertory cinemas, and shops with a membership and a late fee.',
    designDetails:
      'Shelf wood #e8eaf0 cooled by video blue #1a237e, with rental orange #ff7043 for due-back dates and a spine grey #455a64 for cases. Every title sits in a 3px-raised case with a 6px bottom ledge, and the release year is printed in an 11px caps label taped to the top-left of each case. There are no images — a spine is a coloured block with type on it.',
    colors: {
      primary: '#1a237e',
      secondary: '#455a64',
      accent: '#ff7043',
      neutral: '#e8eaf0',
      background: '#f7f8fb',
      text: '#14173a',
    },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Nunito',
      scale: '12 / 14 / 17 / 21 / 27 / 36 / 50',
      lineHeights: 'Display 1.15, body 1.6',
      letterSpacing: 'Shelf labels 0.14em uppercase; titles 0.01em',
    },
    components: {
      primary: 'Video-blue block with a 3px case edge and a 6px ledge beneath, radius 3px, 46px tall',
      secondary: 'Case-grey outline with a taped label overlapping its top edge',
      tertiary: 'A title link with a due-back stamp that appears on hover',
      radius: '3px controls, 4px cards — hard plastic cases',
      hover: 'The case slides 8px out of the shelf and tilts 1°, casting a longer shadow, 200ms ease-out',
      cards: 'Cases: a coloured spine, a taped year label, a member stamp corner, and a 6px shelf ledge',
      forms: 'A membership form with a member-number field and a two-night due-date display',
      navigation: 'An aisle strip: four shelves labelled A to D with counts',
      modals: 'The case opens like a clamshell, revealing the tape and the rental slip inside',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 44 / 80 / 132',
      paddingScale: '12 / 24 / 40',
      grid: '1200px shelf grid of 5 spines per row with 6px ledges and 2px gaps',
    },
    motion: {
      pageLoad: 'Spines slide into the shelf from the left, 35ms apart, settling 1px down',
      hoverStates: 'Pull-out of 8px with a 1° tilt and longer shadow, 200ms ease-out',
      transitions: 'Ease-out, short, never bouncy — plastic cases are stiff',
      scroll: 'Aisles mark themselves with a taped label that unpeels as you pass',
    },
    accessibility:
      '#14173a on #f7f8fb is 15.2:1; rental orange at 3.1:1 is restricted to stamps and 2px edges, never body text. Each spine carries a real title and year as text, so the block-colour shelf metaphor never replaces information. Overdue state is written as OVERDUE with the date, not as a colour change.',
    responsive:
      'Five spines per row become three at 900px and two at 600px, with the 6px ledge retained so cases still read as objects. Shelf labels shorten to initials below 480px and the due-date stamp moves above the title. Nothing in a case clips at 320px.',
    codeExample:
      '<section class="shelf">\n  <p class="kicker">AISLE B · RELEASED 1987</p>\n  <h1>Two nights, <em>be kind, rewind.</em></h1>\n  <p class="row">MEMBER 1188 · DUE BACK THURSDAY</p>\n  <button class="btn-primary">Rent this tape</button>\n</section>',
    accent: '#ff7043',
    motif: 'pill-nav',
    layout: 'hero-cards',
    useCases: ['Film & TV', 'Community', 'Streaming'],
    signatureCss: `.dv-card { border-radius: 4px; box-shadow: 0 6px 0 #455a6433, 0 8px 0 #e8eaf0; background: #fff; }
.dv-card:hover { transform: translateX(8px) rotate(1deg); box-shadow: 0 6px 0 #455a6444, 0 14px 0 #e8eaf0; }
.dv-hero h1 em { color: #ff7043; font-style: normal; }
.dv-btn-primary { border-radius: 3px; background: #1a237e; box-shadow: inset 0 -3px 0 #101657; }
.dv-badge { background: #ff7043; color: #fff; border-radius: 2px; text-transform: uppercase; font-size: 10px; }
.dv-link::after { content: 'REWIND'; margin-left: 8px; font-size: 10px; color: #ff7043; }
.dv-stat strong { font-family: 'Righteous', sans-serif; }`,
    author: 'Debbie Okonjo',
    createdAt: '2026-09-22',
    popularity: 65,
  },
  {
    id: 'diner-placemat',
    name: 'Diner Placemat',
    category: 'Retro',
    tags: ['diner', 'menu', 'placemat', 'crossword', 'roadside'],
    description: 'The menu is the placemat.',
    designPhilosophy:
      'Diner Placemat takes the laminated mat as the entire information architecture: menu columns down the middle, a crossword to the left, a maze for the kids on the right, and the specials printed upside down so two people can read one mat. Nothing is a card, because a mat is one continuous surface. For roadside diners, coffee counters, and anywhere the menu and the entertainment are the same object.',
    designDetails:
      'Ketchup #d8232a and booth blue #1b3a6b over mat cream #fdf8ec, with mustard #f2b705 for the specials band. A gloss sheen runs diagonally across the whole page as a 6% white gradient, and the mat has a 12px rounded border with a 2px inner rule, like a laminated edge. Type is heavy slab for prices and a plain grotesque for everything else.',
    colors: {
      primary: '#d8232a',
      secondary: '#1b3a6b',
      accent: '#f2b705',
      neutral: '#f5ead4',
      background: '#fdf8ec',
      text: '#241a12',
    },
    typography: {
      displayFont: 'Alfa Slab One',
      bodyFont: 'Livvic',
      scale: '13 / 15 / 18 / 21 / 27 / 36 / 48',
      lineHeights: 'Menu 1.45 (dotted leaders), body 1.6',
      letterSpacing: 'Specials 0.04em; menu items 0',
    },
    components: {
      primary: 'Ketchup block with a mustard 4px underline and a 1px dark edge, radius 6px',
      secondary: 'Booth-blue outlined chip with dotted leaders to its price',
      tertiary: 'A menu item that links, with dotted leader and price aligned right',
      radius: '6px controls, 12px cards — matched to the laminated mat corner',
      hover: 'The gloss sheen slides 30px across the element and the price bolds, 180ms ease-out',
      cards: 'Mat panels: 12px radius, 2px inner rule, a mustard band for specials anywhere on the mat',
      forms: 'An order pad with dotted-line fields and a total that never aligns neatly',
      navigation: 'A mat edge strip: four tabbed corners (Breakfast, Grill, Shakes, Kids)',
      modals: 'The mat turns over: a second side with the dinner menu and a fresh crossword',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 40 / 76 / 124',
      paddingScale: '14 / 26 / 44',
      grid: 'Placemat 1180px: 3 tracks (puzzle 1fr / menu 1.6fr / maze 1fr) on one surface',
    },
    motion: {
      pageLoad: 'The mat unrolls from the top-left corner over 500ms and the sheen sweeps once',
      hoverStates: 'Sheen slide plus price bolding, 180ms ease-out',
      transitions: 'Ease-out, quick; nothing in a diner moves slowly except the coffee',
      scroll: 'The gloss sheen tracks the scroll at a 0.2 ratio, as if the light source moved',
    },
    accessibility:
      '#241a12 on #fdf8ec is 14.7:1 and the dotted leaders are decorative since prices sit in the same table cell as their item. The crossword is a real table with row and column headers, not a canvas. Ketchup red at 4.6:1 carries menu headings at 18px+, and the upside-down specials have a visible rotate control for anyone who prefers not to read inverted.',
    responsive:
      'The three mat tracks stack to menu-only at 820px, then the specials band moves above the menu at 560px. Dotted leaders shorten but prices never wrap away from their item. The 12px mat radius reduces to 6px at 400px so the surface keeps usable width.',
    codeExample:
      '<section class="mat">\n  <p class="kicker">OPEN 24 HOURS · BOOTH 7</p>\n  <h1>Two eggs, <em>any way.</em></h1>\n  <p class="row">Blue plate special .......... $8.50</p>\n  <button class="btn-primary">Order at the counter</button>\n</section>',
    accent: '#d8232a',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Restaurant', 'Coffee Shop', 'Travel'],
    signatureCss: `.dv-site { background-image: linear-gradient(115deg, #ffffff00 40%, #ffffff9c 50%, #ffffff00 60%); background-size: 200% 200%; }
.dv-card { border-radius: 12px; border: 2px solid #e6d9bc; box-shadow: inset 0 0 0 2px #fdf8ec, inset 0 0 0 3px #e6d9bc; background: #fffdf6; }
.dv-card::after { content: ''; position: absolute; inset: 0; border-radius: 12px; background: linear-gradient(120deg, #ffffff00 45%, #ffffffb0 50%, #ffffff00 55%); }
.dv-hero h1 em { color: #d8232a; font-style: normal; }
.dv-btn-primary { border-radius: 6px; background: #d8232a; color: #fff; border-bottom: 4px solid #f2b705; }
.dv-price { font-family: 'Alfa Slab One', serif; color: #1b3a6b; }
.dv-badge { background: #f2b705; color: #241a12; border-radius: 6px; }`,
    author: 'Roy Castellano',
    createdAt: '2026-09-23',
    popularity: 67,
  },
  {
    id: 'soviet-control',
    name: 'Soviet Control',
    category: 'Retro',
    tags: ['constructivist', 'control-room', 'production', 'diagonal', 'poster'],
    description: 'Output is the only argument.',
    designPhilosophy:
      'Soviet Control is constructivism with a clipboard: output quotas in three type sizes only, diagonal red bands cutting across every section, and photographs replaced by geometric masses because a control room reports rather than illustrates. The layout tilts, never centres, and the reader is addressed as an operator with a number. For factories, utilities, and any dashboard whose rhetoric is that the numbers speak.',
    designDetails:
      'Poster cream #f2efe8 with ink #14140f, hammer red #b71c1c and a single industrial gold #e8b100 for the shift record. 45° bands are drawn as skewed blocks behind content, and every section heading is set in exactly one of three sizes — 68, 34, or 18px. Quota figures are printed with their percentage plan in an 11px superscript.',
    colors: {
      primary: '#b71c1c',
      secondary: '#4a4a48',
      accent: '#e8b100',
      neutral: '#ded9cf',
      background: '#f2efe8',
      text: '#14140f',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'IBM Plex Mono',
      scale: '11 / 13 / 16 / 18 / 34 / 68 (three sizes only)',
      lineHeights: 'Display 0.92, body 1.5',
      letterSpacing: 'Display -0.01em; plan figures 0.08em',
    },
    components: {
      primary: 'Hammer-red block with a 2px ink edge and a 0.08em tracked label, radius 0, 48px tall',
      secondary: 'Ink outline with a gold 4px left band and a plan percentage',
      tertiary: 'A quota link printed with its percentage in superscript',
      radius: '0 controls, 0 cards — nothing in a control room is softened',
      hover: 'The red block skews -6° and its gold left band grows to 8px, 110ms steps(2)',
      cards: 'Reports: a 45° red band across the top-left corner, quota figure, plan percentage',
      forms: 'A production entry with a numeric field, a shift picker, and a plan comparison',
      navigation: 'A tall bar with the shift number, the date, and a gold record strip',
      modals: 'A wall notice that arrives skewed and settles at 0° only when fully open',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '26 / 56 / 100 / 160',
      paddingScale: '16 / 30 / 54',
      grid: '1340px with skewed 45° band sections and a 3-col quota grid',
    },
    motion: {
      pageLoad: 'Sections arrive skewed -6° and settle to 0°, 80ms apart, in 3 discrete steps',
      hoverStates: 'Skew of -6° and band growth, 110ms in two steps',
      transitions: 'steps(3, end) so movement looks printed, not animated',
      scroll: 'The gold record strip fills by section, like a plan being met',
    },
    accessibility:
      '#14140f on #f2efe8 is 16.9:1; hammer red on cream is 5.2:1 so it can carry headings, and gold at 2.4:1 is restricted to bands entirely. Percentages are written after the figure, never implied by a bar length. The three-size type rule keeps a clear h1/h2/h3 outline for assistive tech even though sizes are unconventional.',
    responsive:
      'Diagonal bands reduce from 45° to 12° below 760px so they no longer cut through text, and disappear under 420px. The 68px size clamps to 42px at 420px. Quota grids go 3 → 2 → 1 columns at 1000/620px with superscript percentages retained.',
    codeExample:
      '<section class="notice">\n  <p class="kicker">SHIFT 3 · PLAN 118%</p>\n  <p class="quota">41,208 <span>units</span></p>\n  <p class="caption">Wet line, bay 4, plan exceeded for the eleventh day.</p>\n  <button class="btn-primary">LOG THE SHIFT</button>\n</section>',
    accent: '#b71c1c',
    motif: 'big-stat-row',
    layout: 'manifesto',
    useCases: ['Manufacturing', 'Energy', 'Government'],
    signatureCss: `.dv-hero { overflow: hidden; }
.dv-hero::before { content: ''; position: absolute; top: -30%; left: -6%; width: 46%; height: 180%; background: #b71c1c; transform: skewX(-24deg); opacity: 0.9; }
.dv-card { border-radius: 0; border: 2px solid #14140f; background: #faf8f3; }
.dv-card::before { content: ''; position: absolute; top: 0; left: 0; width: 34%; height: 10px; background: #b71c1c; transform: skewX(-30deg); }
.dv-btn-primary { border-radius: 0; background: #b71c1c; color: #f2efe8; }
.dv-h2 { text-transform: uppercase; letter-spacing: -0.01em; }
.dv-stat strong { font-size: 68px; line-height: 0.92; }
.dv-badge { background: #e8b100; color: #14140f; border-radius: 0; }`,
    author: 'Zinoviy Petrov',
    createdAt: '2026-09-23',
    popularity: 64,
  },
  {
    id: 'cb-radio',
    name: 'CB Radio',
    category: 'Retro',
    tags: ['radio', 'trucking', 'channels', 'dispatch', 'hardware'],
    description: 'Forty channels, one squelch.',
    designPhilosophy:
      'CB Radio is a faceplate you happen to be able to read. The header is the radio itself — a channel selector, an LED signal meter, and a squelch control — and everything below it is what came over the air: load offers, convoy requests, and weather notices. The interface accepts that hardware reads poorly and compensates with chrome bezels, chunky switches, and a single bright channel display. For haulage networks, dispatch desks, and radio clubs.',
    designDetails:
      'Chrome #eff2f4 with charcoal face #263238 and a signal-green LED #ffab00 amber readout, plus a monitor blue #90a4ae for bezels. Every control has a bevelled chrome ring drawn with a two-stop inset gradient, and the channel display is a 46px amber seven-segment-style figure on near-black. Type is a pixel face for the display and a mono for everything transmitted.',
    colors: {
      primary: '#263238',
      secondary: '#90a4ae',
      accent: '#ffab00',
      neutral: '#cfd8dc',
      background: '#eff2f4',
      text: '#16202a',
    },
    typography: {
      displayFont: 'Silkscreen',
      bodyFont: 'Space Mono',
      scale: '10 / 12 / 14 / 17 / 22 / 30 / 46',
      lineHeights: 'Display 1.4 (pixel grid), body 1.6',
      letterSpacing: 'Display 0.02em; callsigns 0.1em uppercase',
    },
    components: {
      primary: 'Charcoal key with a chrome ring and a 2px amber underline, radius 3px, 42px tall',
      secondary: 'Chrome-bezelled knob (two-stop inset ring) with a mono label beneath',
      tertiary: 'A callsign link with a signal strength in three dots',
      radius: '3px controls, 6px cards — hardware modules with rounded bezels',
      hover: 'The key depresses 2px into its bezel and the amber meter rises one bar, 120ms steps(3)',
      cards: 'Faceplate modules: chrome bezel, charcoal field, amber readout, knob row',
      forms: 'A transmission log with a channel picker, a callsign field, and a squelch toggle',
      navigation: 'A 40-channel selector strip with the active channel displayed at 22px',
      modals: 'The unit faceplate doubles in size with all knobs live and a receive-only notice',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 42 / 78 / 128',
      paddingScale: '12 / 22 / 38',
      grid: '1180px faceplate with a 3-col module grid and 6px bezel gutters',
    },
    motion: {
      pageLoad: 'Meters sweep to their level in 3 steps, then the channel display settles on 19',
      hoverStates: '2px depression plus one meter bar, 120ms in three steps',
      transitions: 'steps(3, end) — a radio has detents, not easing',
      scroll: 'The signal meter flickers ±1 bar with scroll velocity, capped at two changes per second',
    },
    accessibility:
      '#16202a on #eff2f4 is 15.4:1 and the amber readout on charcoal is 9.8:1, so the display face can carry the channel number. Signal strength is always written as a number of bars as well as lit bars. The squelch toggle is a real switch with aria-checked, and the flicker is disabled under reduced motion.',
    responsive:
      'Modules go from three columns to two at 900px and one at 560px, with bezels thinning from 6px to 3px. The 40-channel selector becomes a horizontal scroller with the active channel pinned left. The 46px channel display reduces to 30px at 360px without clipping.',
    codeExample:
      '<section class="face">\n  <p class="kicker">CH 19 · HIGHWAY</p>\n  <p class="channel">19</p>\n  <p class="rx">SIGNAL 4 BARS · squelch set</p>\n  <button class="btn-primary">PRESS TO TALK</button>\n</section>',
    accent: '#ffab00',
    motif: 'glow-pulse',
    layout: 'spotlight',
    useCases: ['Logistics', 'Automotive', 'Remote Work'],
    signatureCss: `.dv-card { border-radius: 6px; background: #f7f9fa; box-shadow: inset 0 1px 0 #ffffff, inset 0 -2px 0 #cfd8dc, 0 1px 2px #16202a14; border: 1px solid #cfd8dc; }
.dv-btn-primary { border-radius: 3px; background: #263238; color: #eff2f4; box-shadow: inset 0 2px 0 #37474f, inset 0 -3px 0 #101a20, 0 0 0 2px #90a4ae; border-bottom: 2px solid #ffab00; }
.dv-btn-primary:active { transform: translateY(2px); }
.dv-hero h1 { font-family: 'Silkscreen', monospace; }
.dv-stat strong { color: #b06a00; font-family: 'Silkscreen', monospace; }
.dv-badge { background: #263238; color: #ffab00; border-radius: 3px; font-family: 'Silkscreen', monospace; }
.dv-nav { border-bottom: 3px solid #90a4ae; }`,
    author: 'Hank Coleridge',
    createdAt: '2026-09-24',
    popularity: 66,
  },
  {
    id: 'mycelium-net',
    name: 'Mycelium Net',
    category: 'Organic',
    tags: ['fungi', 'network', 'forest', 'ecology', 'mycology'],
    description: 'Every link branches, none run straight.',
    designPhilosophy:
      'Mycelium Net takes the underground network as its layout: navigation branches from a single node instead of sitting in a bar, and every relationship is drawn as a hairline that forks rather than connects two boxes. Reading is a matter of following a strand. For ecology groups, mycology research, and any knowledge base whose real structure is a graph rather than a list.',
    designDetails:
      'Forest floor #f7f4ec with mycelium #7cb342 strands, spore rust #3e2723 for structure, and a wheat #d4a373 for fruiting bodies. Strands are 1px gradients that fork at 30° increments, and each branch point carries a 4px spore dot. Panels have no borders at all — they are simply where strands thicken.',
    colors: {
      primary: '#3e2723',
      secondary: '#7cb342',
      accent: '#d4a373',
      neutral: '#e8e2d4',
      background: '#f7f4ec',
      text: '#26201a',
    },
    typography: {
      displayFont: 'Jost',
      bodyFont: 'Zilla Slab',
      scale: '14 / 16 / 19 / 23 / 29 / 38 / 52',
      lineHeights: 'Display 1.15, body 1.7 (strand rhythm 28px)',
      letterSpacing: 'Display 0.02em; branch labels 0.04em',
    },
    components: {
      primary: 'Rust node with two strand tails leaving its right edge, radius 999px, 14px 30px padding',
      secondary: 'Strand-lined block with no border, just a 1px green rule along its left spine',
      tertiary: 'A fork link that splits into two labels on hover',
      radius: '999px controls, 4px cards — fruiting bodies are round, mats are not',
      hover: 'The strand thickens to 2px and a spore dot appears at the fork, 200ms ease-out',
      cards: 'Branch nodes: 4px radius, a spore dot at their origin, and a forking strand leaving the bottom',
      forms: 'A submission field with a strand that forks to show required and optional routes',
      navigation: 'A branching diagram: one root node, three forks, each a real link, drawn with SVG strands',
      modals: 'A node expands in place, pushing strands outward as it grows',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 52 / 92 / 148',
      paddingScale: '14 / 26 / 44',
      grid: '1280px with a branching 1-3-6 node cascade and 28px strand rhythm',
    },
    motion: {
      pageLoad: 'Strands grow from the root over 1.4s, rendering two levels of fork, then nodes fade in',
      hoverStates: 'Strand thickening and a spore dot appearing, 200ms ease-out',
      transitions: 'Ease-out, growth-shaped; never a slide or a spin',
      scroll: 'New strand segments draw as their nodes enter, one fork at a time',
    },
    accessibility:
      '#26201a on #f7f4ec is 14.9:1 and mycelium green at 3.2:1 is used for strands only — never for text. The branching navigation is backed by a real nested list directly beneath it, so screen readers get a tree. Playback of the strand growth is disabled under reduced motion, leaving the diagram fully drawn.',
    responsive:
      'The 1-3-6 cascade becomes 1-2-3 at 900px and a single vertical strand at 620px, with fork angles reduced from 30° to 12°. The branching nav collapses to a two-level disclosure list below 760px. Strands never overlap text at any width.',
    codeExample:
      '<section class="mat">\n  <p class="kicker">SITE 3 · STRAND A-6</p>\n  <h1>Everything is <em>connected underground.</em></h1>\n  <p class="sub">Follow the strand from the birch to the third fruiting node.</p>\n  <button class="btn-primary">Follow the strand</button>\n</section>',
    accent: '#7cb342',
    motif: 'leaf-divider',
    layout: 'editorial',
    useCases: ['Agriculture', 'Education', 'Nonprofit'],
    signatureCss: `.dv-card { border: 0; border-left: 1px solid #7cb342; border-radius: 4px; background: transparent; padding-left: 18px; }
.dv-card::before { content: ''; position: absolute; left: -3px; top: 14px; width: 6px; height: 6px; border-radius: 999px; background: #7cb342; }
.dv-hero h1 em { color: #7cb342; font-style: italic; }
.dv-btn-primary { border-radius: 999px; background: #3e2723; color: #f7f4ec; }
.dv-btn-primary::after { content: ' ⋰'; color: #7cb342; }
.dv-badge { background: transparent; border: 1px solid #d4a373; color: #3e2723; border-radius: 999px; }
.dv-sep { background: linear-gradient(90deg, #7cb342, #7cb34200); height: 1px; }
.dv-stat strong { color: #7cb342; }`,
    author: 'Solveig Aas',
    createdAt: '2026-09-24',
    popularity: 63,
  },
  {
    id: 'seed-vault',
    name: 'Seed Vault',
    category: 'Organic',
    tags: ['seed-bank', 'conservation', 'accessions', 'arctic', 'archive'],
    description: 'Stored at minus eighteen, forever.',
    designPhilosophy:
      'Seed Vault is an archive where the temperature is part of the interface: a −18°C rail runs the full height of every screen, because viability depends on nothing else being off by a degree. Accessions are identified by number before name, and germination percentages are printed to one decimal place. For seed banks, conservation programmes, and long-horizon archives that measure their value in decades.',
    designDetails:
      'Permafrost #1c3b4a with a frost #4fc3f7 accent used exclusively on the temperature rail, glacier blue #7b8f9a for secondary data, and lab snow #f6fafb as the ground. Accession numbers are set in mono at 17px with a leading zero pad, and every record carries a two-decimal viability figure. There is no imagery of the vault itself — only its numbers.',
    colors: {
      primary: '#1c3b4a',
      secondary: '#7b8f9a',
      accent: '#4fc3f7',
      neutral: '#e3ecef',
      background: '#f6fafb',
      text: '#0f1e26',
    },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 14 / 16 / 19 / 25 / 34 / 48',
      lineHeights: 'Display 1.2, body 1.55',
      letterSpacing: 'Accessions 0.06em; rail readouts 0.1em',
    },
    components: {
      primary: 'Permafrost block with a frost 3px left rail segment and a mono label, radius 0',
      secondary: 'Frost outline at 1px with an accession number and viability figure',
      tertiary: 'A species name that links, followed by its accession in 12px mono',
      radius: '0 controls, 2px cards — cold storage is utilitarian',
      hover: 'The frost rail segment grows 3px taller and the viability figure gains its decimal, 130ms linear',
      cards: 'Accession records: number first at 17px, species second, viability to one decimal in the corner',
      forms: 'An intake form with species, collector, and a germination figure required to one decimal',
      navigation: 'A temperature rail down the left edge with −18, −12 and −6 marks and the current reading',
      modals: 'An accessions drawer with the rail extended through it, unbroken',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 44 / 84 / 140',
      paddingScale: '12 / 24 / 40',
      grid: '1260px with an 18px temperature rail and a 3-col accession grid',
    },
    motion: {
      pageLoad: 'The rail draws downward over 700ms and accessions fade in as the rail passes them',
      hoverStates: 'Rail growth and decimal reveal, 130ms linear',
      transitions: 'Linear and slow — nothing in permafrost hurries',
      scroll: 'The −18°C reading holds at the top of the rail; accession numbers tick as rows pass',
    },
    accessibility:
      '#0f1e26 on #f6fafb is 16.2:1; frost #4fc3f7 at 2.6:1 is confined to the rail and to 2px edges, with the temperature also written as text. Viability is always a number with a percent sign, never a bar. The rail is decorative and aria-hidden, with its reading duplicated in the page heading.',
    responsive:
      'The rail narrows from 18px to 8px below 700px and moves above the content as a horizontal strip at 520px. Accession grids go 3 → 2 → 1 columns at 1000/620px. Decimal viability figures are never rounded for space.',
    codeExample:
      '<section class="accession">\n  <p class="kicker">ACC 0044712 · LOGGED 2026-09-24</p>\n  <h1>Barley, <em>high-latitude line.</em></h1>\n  <p class="fig">VIABILITY 94.2% · 1.8 kg · −18.0 °C</p>\n  <button class="btn-primary">Request a sample</button>\n</section>',
    accent: '#4fc3f7',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Agriculture', 'Government', 'University'],
    signatureCss: `.dv-site { background-image: linear-gradient(90deg, #4fc3f7 3px, transparent 3px); }
.dv-card { border-radius: 2px; border: 1px solid #7b8f9a33; border-left: 3px solid #4fc3f7; background: #fff; }
.dv-hero h1 em { color: #1c3b4a; font-style: normal; border-bottom: 2px solid #4fc3f7; }
.dv-btn-primary { border-radius: 0; background: #1c3b4a; color: #f6fafb; border-left: 3px solid #4fc3f7; }
.dv-stat strong { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
.dv-badge { background: #e3ecef; color: #1c3b4a; border-radius: 0; font-family: 'IBM Plex Mono', monospace; }`,
    author: 'Anja Lindgren',
    createdAt: '2026-09-24',
    popularity: 70,
  },
  {
    id: 'lichen-index',
    name: 'Lichen Index',
    category: 'Organic',
    tags: ['lichen', 'bioindicator', 'air-quality', 'survey', 'botany'],
    description: 'Count the lichen, read the air.',
    designPhilosophy:
      'Lichen Index is a survey you can read at a glance: each species carries a stripe of layered tints whose depth encodes the nitrogen tolerance of the species, so air quality is legible before a single label is read. Plates are arranged like a herbarium sheet and annotated in the margin, because the identification is the argument. For environmental charities, air-quality monitoring, and botany groups who publish their transects.',
    designDetails:
      'Pale sage #f7f8f3 with foliose #4e5d3a and crustose #93a07d, dry-lime #c2b280 for spore detail, and a herbarium rule #e6e8dd. Each card carries a five-band air-quality stripe built from stacked linear-gradients, and species names are set with their authority in 11px italic. Margin annotations sit in 12px and are allowed to be handwritten-feeling.',
    colors: {
      primary: '#4e5d3a',
      secondary: '#93a07d',
      accent: '#c2b280',
      neutral: '#e6e8dd',
      background: '#f7f8f3',
      text: '#23291d',
    },
    typography: {
      displayFont: 'Manrope',
      bodyFont: 'Livvic',
      scale: '11 / 13 / 16 / 19 / 24 / 32 / 44',
      lineHeights: 'Display 1.25, body 1.65',
      letterSpacing: 'Annotations 0.02em; authorities italic 0',
    },
    components: {
      primary: 'Foliose block with a five-band air stripe above it and a 1px herbarium rule, radius 2px',
      secondary: 'Crustose chip with a dots-per-centimetre count in 11px',
      tertiary: 'A species name link with its authority in trailing italics',
      radius: '2px controls, 2px cards — herbarium sheets are squared off',
      hover: 'The air stripe extends one band to the right and the annotation underlines, 150ms linear',
      cards: 'Herbarium plates: a 5-band air stripe, species name plus authority, a margin annotation',
      forms: 'A transect entry with a tree species picker and a lichen cover percentage',
      navigation: 'A survey strip: four transect numbers with a nitrogen-scale legend',
      modals: 'A plate enlarged to sheet size with the full air-quality scale in the margin',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 46 / 84 / 136',
      paddingScale: '14 / 26 / 42',
      grid: '1200px with a 4-col plate grid and a 78px margin column for annotations',
    },
    motion: {
      pageLoad: 'Air stripes fill one band at a time over 400ms, in survey order',
      hoverStates: 'One extra band plus an underline, 150ms linear',
      transitions: 'Linear; a survey does not animate',
      scroll: 'Margin annotations slide into the margin column as their plate arrives',
    },
    accessibility:
      '#23291d on #f7f8f3 is 14.8:1 and the five air-quality bands each carry a number and a word (very low, low, moderate, high, very high) so the tint depth is never the only signal. Species authorities are included in the accessible name. Annotations are real text with a described association to their plate.',
    responsive:
      'The four-column plate grid becomes two at 940px and one at 600px, and annotations move from the margin to directly beneath their plate at 760px. Air stripes keep all five bands at every width by narrowing rather than merging them.',
    codeExample:
      '<section class="plate">\n  <p class="kicker">TRANSECT 4 · TREE 12</p>\n  <h1>Xanthoria parietina, <em>very high.</em></h1>\n  <p class="note">Cover 38% · nitrogen run-off from the north field.</p>\n  <button class="btn-primary">Add to the survey</button>\n</section>',
    accent: '#4e5d3a',
    motif: 'grain-overlay',
    layout: 'hero-cards',
    useCases: ['Nonprofit', 'Wellness', 'Government'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #e6e8dd; background: #fffefb; }
.dv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, #93a07d 0 20%, #a9b492 20% 40%, #c2b280 40% 60%, #8f9a72 60% 80%, #4e5d3a 80% 100%); }
.dv-hero h1 em { color: #4e5d3a; font-style: italic; }
.dv-btn-primary { border-radius: 2px; background: #4e5d3a; color: #f7f8f3; }
.dv-badge { background: transparent; border: 1px solid #93a07d; color: #23291d; border-radius: 2px; font-size: 11px; }
.dv-stat strong { color: #4e5d3a; font-weight: 600; }
.dv-media { border-radius: 2px; background: repeating-linear-gradient(45deg, #e6e8dd 0 4px, #f7f8f3 4px 8px); }`,
    author: 'Callum Fergus',
    createdAt: '2026-09-24',
    popularity: 58,
  },
  {
    id: 'abyssal-drift',
    name: 'Abyssal Drift',
    category: 'Organic',
    tags: ['deep-sea', 'survey', 'pressure', 'bioluminescence', 'research'],
    description: 'Four thousand metres, no sunlight.',
    designPhilosophy:
      'Abyssal Drift is designed for the dark, because that is where the data comes from. Depth is the only navigation: a vertical rail runs from surface to abyssal plain, and each reading sits at the pressure where it was taken. Contrast is deliberately low between surfaces and sharp between text and ground, mimicking the way a submersible pilot sees only what is lit. For marine research, subsea engineering, and deep-ocean surveys.',
    designDetails:
      'Abyss #06131a with midnight #0d222b panels, bioluminescent cyan #35c1d4 and a single warning amber #ffd166 for equipment faults. Depth rails are drawn as a 1px cyan line with 100-metre ticks, and every specimen dot carries a soft 8px radial glow. Type is a technical display face for depth figures and a neutral sans for everything else.',
    colors: {
      primary: '#35c1d4',
      secondary: '#4a7f8c',
      accent: '#ffd166',
      neutral: '#0d222b',
      background: '#06131a',
      text: '#dff1f5',
    },
    typography: {
      displayFont: 'Oxanium',
      bodyFont: 'Karla',
      scale: '12 / 14 / 17 / 20 / 26 / 34 / 48',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Depth figures 0.04em; station codes 0.1em uppercase',
    },
    components: {
      primary: 'Cyan block with abyss text and a soft 12px cyan glow at 18% opacity, radius 2px',
      secondary: '1px cyan outline at 40% with a depth value and a station code',
      tertiary: 'A station code link with a depth suffix in 12px',
      radius: '2px controls, 4px cards — instruments are machined, not moulded',
      hover: 'The glow radius grows from 12px to 20px and the panel lightens one step, 180ms ease-out',
      cards: 'Midnight panels with a 1px cyan top edge, a depth value, and a specimen list',
      forms: 'A dive log with a depth field, a pressure field, and a sample count',
      navigation: 'A depth rail from 0 to 6000 m with the current station marked in cyan',
      modals: 'A dive sheet that rises from the bottom edge, darkening everything above it',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 48 / 90 / 148',
      paddingScale: '14 / 26 / 44',
      grid: '1240px with a 24px depth rail and a 3-col station grid',
    },
    motion: {
      pageLoad: 'The depth rail descends over 1.6s and specimens fade in as their depth passes',
      hoverStates: 'Glow radius growth and one-step lightening, 180ms ease-out',
      transitions: 'Ease-out, slow and pressure-weighted; nothing springs',
      scroll: 'The rail tracks scroll position, so scrolling genuinely feels like descending',
    },
    accessibility:
      '#dff1f5 on #06131a is 16.8:1, and panel surfaces sit 1.3:1 from the ground so structure is readable without harsh edges. Cyan at 8.9:1 on abyss carries both text and rails. Depth is always written in metres as text, and the rail is aria-hidden with a described current station. All glow is removed under reduced motion.',
    responsive:
      'The depth rail moves from the left edge to a 6px strip across the top below 760px, where it becomes a scroll progress indicator. Station grids go 3 → 2 → 1 at 1000/620px. The 48px depth figures clamp to 30px at 360px.',
    codeExample:
      '<section class="dive">\n  <p class="kicker">STATION C · 4,012 M</p>\n  <h1>No sunlight, <em>403 atmospheres.</em></h1>\n  <p class="sub">Three specimens logged, two still unidentified.</p>\n  <button class="btn-primary">Open the dive log</button>\n</section>',
    accent: '#35c1d4',
    motif: 'glow-pulse',
    layout: 'full-bleed',
    useCases: ['Energy', 'University', 'Data & Analytics'],
    signatureCss: `.dv-site { background: radial-gradient(120% 80% at 50% 0%, #0d222b 0%, #06131a 70%); }
.dv-card { background: #0d222b; border: 1px solid #35c1d440; border-top: 1px solid #35c1d4; border-radius: 4px; box-shadow: 0 0 24px #35c1d41a; }
.dv-card:hover { box-shadow: 0 0 34px #35c1d42e; }
.dv-hero h1 { color: #dff1f5; }
.dv-hero h1 em { color: #35c1d4; font-style: normal; }
.dv-btn-primary { background: #35c1d4; color: #06131a; border-radius: 2px; box-shadow: 0 0 18px #35c1d459; }
.dv-badge { background: transparent; border: 1px solid #ffd166; color: #ffd166; border-radius: 2px; }
.dv-stat strong { color: #35c1d4; font-family: 'Oxanium', sans-serif; }
.dv-nav { background: transparent; border-bottom: 1px solid #35c1d433; }`,
    author: 'Ingrid Sandvik',
    createdAt: '2026-09-24',
    popularity: 69,
  },
  {
    id: 'termite-mound',
    name: 'Termite Mound',
    category: 'Organic',
    tags: ['biomimicry', 'airflow', 'architecture', 'passive-cooling', 'passive'],
    description: 'Cooled by chimneys, not by compressors.',
    designPhilosophy:
      'Termite Mound is a buildings page that behaves like a section drawing: the hero is a cross-section, and the argument is carried by airflow arrows rather than adjectives. Cooling is explained as a sequence of chimney effects, with every claim attached to a temperature delta. For passive-house architects, biomimicry studios, and engineering practices that would rather show a diagram than a render.',
    designDetails:
      'Earth #7c5c3b with mound clay #a1887f over wind cream #f8f3ea, and furnace orange #d98324 used only for warm-air arrows. Cross-sections are drawn with 1px rules and 4px arrowheads, and the chimney shafts are literal vertical voids cut out of the layout. Type is a serif for the argument and a sans for every measurement, so numbers never sit in the reading prose.',
    colors: {
      primary: '#7c5c3b',
      secondary: '#a1887f',
      accent: '#d98324',
      neutral: '#e9dfd0',
      background: '#f8f3ea',
      text: '#2a2118',
    },
    typography: {
      displayFont: 'Merriweather',
      bodyFont: 'Livvic',
      scale: '13 / 15 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.25, body 1.7',
      letterSpacing: 'Measurements 0.05em; body 0.005em',
    },
    components: {
      primary: 'Clay block with a 3px earth left edge and a 1px arrow cut in its corner, radius 2px',
      secondary: 'Mound outline with a temperature delta in 13px sans',
      tertiary: 'A chimney link drawn with two ascent arrows either side',
      radius: '2px controls, 3px cards — alluvial edges, not soft ones',
      hover: 'An ascent arrow rises 6px along the edge and the delta gains a degree, 220ms ease-out',
      cards: 'Cross-sections: a 1px shell outline, a chimney void, and two temperature readings',
      forms: 'A thermal brief with orientation, floor area, and a target delta',
      navigation: 'A section strip showing five horizontal cuts through the building, each numbered',
      modals: 'A full section drawing with all voids open and airflow paths animated once',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 56 / 100 / 160',
      paddingScale: '16 / 30 / 50',
      grid: '1200px two-track drawing sheet: 1.4fr section, 1fr notes, 8px void gutters',
    },
    motion: {
      pageLoad: 'Airflow arrows draw their paths over 900ms, warm paths last, then readings appear',
      hoverStates: 'Arrow ascent and delta increment, 220ms ease-out',
      transitions: 'Ease-out, unhurried, in the direction of the airflow',
      scroll: 'Arrow paths redraw for each section as it enters, once only',
    },
    accessibility:
      '#2a2118 on #f8f3ea is 14.1:1; furnace orange at 3.4:1 only ever fills arrowheads and 2px edges, with each airflow path also described in a caption. Every cross-section has a text summary of its dimensions and deltas, so the diagram is never the sole carrier. Arrow animation is skipped under reduced motion.',
    responsive:
      'The drawing sheet becomes a single column at 860px with notes beneath each section, and voids narrow from 8px to 4px. Arrows are simplified from paths to single stems below 560px. Readings stay on one line each at 320px instead of wrapping mid-unit.',
    codeExample:
      '<section class="section-draw">\n  <p class="kicker">SECTION B · DELTA 6.4 °C</p>\n  <h1>Cooled by <em>chimneys.</em></h1>\n  <p class="note">Inlet 1.2 m² · outlet 0.8 m² · stack 9.4 m</p>\n  <button class="btn-primary">Open the thermal brief</button>\n</section>',
    accent: '#d98324',
    motif: 'numbered-steps',
    layout: 'full-bleed',
    useCases: ['Architecture', 'Construction', 'Energy'],
    signatureCss: `.dv-card { border: 1px solid #7c5c3b33; border-radius: 3px; background: #fffdf7; }
.dv-card::after { content: ''; position: absolute; top: 8px; bottom: 8px; right: 10px; width: 6px; border: 1px solid #7c5c3b55; border-radius: 3px; background: linear-gradient(180deg, #d9832422, #f8f3ea); }
.dv-hero h1 em { color: #7c5c3b; font-style: italic; }
.dv-btn-primary { border-radius: 2px; background: #7c5c3b; color: #f8f3ea; }
.dv-btn-primary::before { content: '↑'; margin-right: 8px; color: #d98324; }
.dv-stat { border-left: 3px solid #a1887f; padding-left: 12px; }
.dv-badge { background: #e9dfd0; color: #7c5c3b; border-radius: 2px; }
.dv-media { border-radius: 3px; background: repeating-linear-gradient(90deg, #a1887f22 0 1px, transparent 1px 12px); }`,
    author: 'Étienne Mercier',
    createdAt: '2026-09-24',
    popularity: 61,
  },
]
