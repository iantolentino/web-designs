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
    accent: '#0f5c8c',
    motif: 'pcb-trace',
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
    colors: {
      primary: '#3a4a52',
      secondary: '#90a4ae',
      accent: '#d1495b',
      neutral: '#eceff1',
      background: '#f9fafb',
      text: '#172125',
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
    accent: '#d1495b',
    motif: 'mono-labels',
    layout: 'centered',
    useCases: ['Manufacturing', 'Health', 'Data & Analytics'],
    signatureCss: `.dv-stat strong { font-size: 64px; font-weight: 300; font-variant-numeric: tabular-nums; }
.dv-btn-primary { background: transparent; color: #172125; border: 0; border-bottom: 1px solid #3a4a52; border-radius: 0; text-transform: lowercase; letter-spacing: 0; }
.dv-card { border: 0; border-bottom: 1px solid #eceff1; border-radius: 0; background: transparent; }
.dv-hero h1 { font-size: clamp(34px, 9vw, 120px); font-variant-numeric: tabular-nums; }
.dv-label, .dv-kicker { letter-spacing: 0.14em; text-transform: uppercase; font-size: 11px; color: #90a4ae; }`,
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
    colors: {
      primary: '#9c3b26',
      secondary: '#8d8b84',
      accent: '#2f4858',
      neutral: '#e6e2da',
      background: '#f6f4f0',
      text: '#221d18',
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
      secondary: 'Mortar-outlined block: 2px #8d8b84 border, no fill',
      tertiary: 'Roman-numeraled text link with a joint line under it',
      radius: '2px controls, 2px cards — every corner is a cut brick',
      hover: 'The block shifts 2px down and its joint line doubles in weight, 90ms',
      cards: 'Staggered blocks: even children offset 44px down and 6% right, 2px joints, no shadow',
      forms: 'Fields laid as bricks in a wall — 2px joints, labels in the margin',
      navigation: 'A course counter in the left margin plus three laid blocks',
      modals: 'A taller wall segment that slides up from the mortar line',
    },
    accent: '#2f4858',
    motif: 'swiss-grid',
    layout: 'asymmetric',
    useCases: ['Construction', 'Architecture', 'Real Estate'],
    signatureCss: `.dv-card { border-radius: 2px; box-shadow: none; }
.dv-cards > *:nth-child(2n) { transform: translate(6%, 44px); }
.dv-btn-primary { border-radius: 2px; box-shadow: 0 2px 0 #221d1833; }
.dv-site { background-image: repeating-linear-gradient(90deg, #e6e2da 0 2px, transparent 2px 100%); }
.dv-h2 { border-left: 6px solid #2f4858; padding-left: 10px; }
.dv-nav { border-bottom: 2px solid #e6e2da; }`,
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
    colors: {
      primary: '#0b1020',
      secondary: '#4a5568',
      accent: '#e85d04',
      neutral: '#e8ecf2',
      background: '#f7f9fc',
      text: '#0a0e18',
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
    accent: '#e85d04',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Data & Analytics', 'Energy', 'Developer Tools'],
    signatureCss: `.dv-site { background-image: linear-gradient(90deg, #e8ecf2 1px, transparent 1px); background-size: 8.333% 100%; }
.dv-hero { border-bottom: 2px solid #0b1020; }
.dv-hero h1 em { font-style: normal; color: #e85d04; }
.dv-card { border: 1px solid #e8ecf2; border-left: 3px solid #0b1020; border-radius: 0; background: #f7f9fc; }
.dv-btn-primary { border-radius: 0; background: #0b1020; box-shadow: 3px 0 0 #e85d04; }
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
    colors: {
      primary: '#1f2a37',
      secondary: '#6f7a74',
      accent: '#b23b3b',
      neutral: '#eceef0',
      background: '#fbfcfd',
      text: '#1f2a37',
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
    accent: '#b23b3b',
    motif: 'editorial-columns',
    layout: 'editorial',
    useCases: ['Publishing', 'University', 'Legal'],
    signatureCss: `.dv-card { border-left: 1px solid #6f7a74; border-radius: 0; background: transparent; box-shadow: none; padding: 4px 0 4px 12px; }
.dv-card p, .dv-card .dv-sub { font-size: 12px; line-height: 1.45; color: #6f7a74; }
.dv-hero h1 em { font-style: italic; color: #1f2a37; }
.dv-btn-primary { background: transparent; color: #1f2a37; border-bottom: 1px solid #1f2a37; border-radius: 0; padding: 8px 0; }
.dv-badge { background: transparent; border: 1px solid #b23b3b; color: #b23b3b; border-radius: 0; font-size: 11px; }
.dv-sep { background: #6f7a74; height: 1px; }`,
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
    accent: '#d1453b',
    motif: 'numbered-steps',
    layout: 'receipt',
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
    colors: {
      primary: '#8f6b3a',
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
    accent: '#8f6b3a',
    motif: 'quote-band',
    layout: 'editorial',
    useCases: ['Banking', 'Legal', 'Insurance'],
    signatureCss: `.dv-site { background: #14131a; color: #ece7dc; }
.dv-card { background: transparent; border: 0; border-top: 1px solid #8f6b3a66; border-radius: 0; padding: 18px 0; }
.dv-btn-primary { background: transparent; color: #8f6b3a; border: 0; border-bottom: 1px solid #8f6b3a; border-radius: 0; letter-spacing: 0.24em; text-transform: uppercase; font-size: 12px; }
.dv-hero h1 { color: #ece7dc; }
.dv-hero h1 em { color: #8f6b3a; font-style: italic; }
.dv-badge { background: transparent; border: 1px solid #8f6b3a55; color: #ece7dc; border-radius: 0; }
.dv-nav { background: transparent; border-bottom: 1px solid #8f6b3a33; }
.dv-stat strong { color: #8f6b3a; font-weight: 400; }`,
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
    colors: {
      primary: '#ff4d1a',
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
    accent: '#ff4d1a',
    motif: 'ticker-marquee',
    layout: 'dashboard',
    useCases: ['Sports', 'Events', 'Automotive'],
    signatureCss: `.dv-site { background-image: repeating-conic-gradient(#1b1b1b 0 25%, #fff 0 50%); background-size: 16px 16px; background-repeat: repeat-x; background-position: top; }
.dv-card { border-radius: 2px; border-top: 8px solid #37474f; }
.dv-card::before { content: ''; position: absolute; top: -8px; left: 0; right: 0; height: 8px; background: repeating-conic-gradient(#1b1b1b 0 25%, #fff 0 50%) 0 0 / 8px 8px; }
.dv-hero h1 { font-size: clamp(40px, 12vw, 120px); line-height: 0.86; }
.dv-btn-primary { border-radius: 0; background: #ff4d1a; color: #fff; }
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
    accent: '#4fc3f7',
    motif: 'leaf-divider',
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
  {
    id: 'grid-dispatch',
    name: 'Grid Dispatch',
    category: 'Professional',
    tags: ['grid', 'dispatch', 'frequency', 'utility', 'control-room'],
    description: 'Frequency first, everything else second.',
    designPhilosophy:
      'Grid Dispatch is a control room that admits there is only one number that matters: system frequency, held at 50 hertz. That value sits in the header on every screen and is the only element allowed to change colour. Everything else is a single-line diagram, an alarm list, and a breaker state, drawn with the discipline of an electrical schematic. For utilities, network operators, and industrial control rooms.',
    colors: {
      primary: '#1a2b4a',
      secondary: '#6f7f95',
      accent: '#b25b00',
      neutral: '#e2e8ee',
      background: '#f5f8fa',
      text: '#0e1b28',
    },
    typography: {
      displayFont: 'Oxanium',
      bodyFont: 'Karla',
      scale: '12 / 14 / 16 / 19 / 25 / 34 / 48',
      lineHeights: 'Display 1.2, body 1.5',
      letterSpacing: 'Bus labels 0.08em uppercase; timestamps 0.02em',
    },
    components: {
      primary: 'Schematic block with a 3px bus bar along its top and a mono label, radius 0',
      secondary: '1px ink outline with a breaker state (OPEN/CLOSED) in 12px caps',
      tertiary: 'A node ID that links, drawn with a 6px conductor stub',
      radius: '0 controls, 0 cards — a schematic has no rounded geometry',
      hover: 'The 6px conductor stub extends to 14px and the bus bar thickens to 4px, 100ms linear',
      cards: 'Panels: 3px bus bar, a single-line diagram inset, and an alarm count in the corner',
      forms: 'A dispatch form with a feeder picker, a target MW, and a reason code',
      navigation: 'A topology bar: substation names with a live frequency readout',
      modals: 'A full single-line diagram that replaces the page, still carrying the frequency header',
    },
    accent: '#b25b00',
    motif: 'swiss-grid',
    layout: 'dashboard',
    useCases: ['Energy', 'DevOps & Cloud', 'Manufacturing'],
    signatureCss: `.dv-site { background-image: linear-gradient(#e2e8ee 1px, transparent 1px), linear-gradient(90deg, #e2e8ee 1px, transparent 1px); background-size: 24px 24px; }
.dv-card { border-radius: 0; border: 1px solid #1a2b4a22; border-top: 3px solid #1a2b4a; background: #fff; }
.dv-hero h1 { font-family: 'Oxanium', sans-serif; }
.dv-hero h1 em { color: #b25b00; font-style: normal; }
.dv-btn-primary { border-radius: 0; background: #1a2b4a; color: #f5f8fa; }
.dv-stat strong { font-family: 'Oxanium', sans-serif; letter-spacing: 0.02em; }
.dv-badge { background: transparent; border: 1px solid #6f7f95; color: #1a2b4a; border-radius: 0; font-size: 11px; }`,
    author: 'Ravi Chandrasekhar',
    createdAt: '2026-09-25',
    popularity: 64,
  },
  {
    id: 'tower-approach',
    name: 'Tower Approach',
    category: 'Professional',
    tags: ['air-traffic', 'strips', 'approach', 'sequencing', 'calm'],
    description: 'Paper strips in bays, one per aircraft.',
    designPhilosophy:
      'Tower Approach is a flight-strip board. Each aircraft is a paper strip in a bay, ordered by sequence and moved by hand, and the controller reads across bays rather than down a list. The design is deliberately calm — one colour for the board, amber only for a conflict — because a screen shouted at is a screen misread. For aviation operations, sequencing tools, and any workflow that runs on ordered slips.',
    colors: {
      primary: '#1f3a2e',
      secondary: '#7f8f86',
      accent: '#e0a021',
      neutral: '#e6e9e2',
      background: '#f4f5f2',
      text: '#14201a',
    },
    typography: {
      displayFont: 'Space Mono',
      bodyFont: 'Manrope',
      scale: '11 / 12 / 14 / 17 / 22 / 30 / 44',
      lineHeights: 'Strips 1.35, body 1.5',
      letterSpacing: 'Callsigns 0.08em uppercase; fields 0.02em',
    },
    components: {
      primary: 'Board-green block with a 2px groove beneath it and a mono label, radius 2px',
      secondary: 'Strip-white chip with fixed 62px field columns and a groove edge',
      tertiary: 'A callsign link with its altitude in 11px mono',
      radius: '2px controls, 2px cards — strips are card stock',
      hover: 'The strip lifts 2px out of its bay and its groove widens, 110ms linear',
      cards: 'Strips: callsign, altitude, squawk in fixed columns, plus a bay number in the corner',
      forms: 'A flight plan entry with fixed-column fields and a squawk validator',
      navigation: 'A bay header strip with the active runway and a wind readout',
      modals: 'A strip enlarged to a full clearance sheet, keeping its column grid',
    },
    accent: '#e0a021',
    motif: 'pill-nav',
    layout: 'full-bleed',
    useCases: ['Travel', 'Logistics', 'Government'],
    signatureCss: `.dv-card { border-radius: 2px; border: 0; box-shadow: 0 2px 0 #7f8f8633, inset 0 0 0 1px #7f8f8622; background: #fbfcfa; }
.dv-card:hover { transform: translateY(-2px); box-shadow: 0 4px 0 #7f8f8644; }
.dv-hero h1 { font-family: 'Space Mono', monospace; font-size: 30px; }
.dv-hero h1 em { color: #e0a021; font-style: normal; }
.dv-btn-primary { border-radius: 2px; background: #1f3a2e; color: #f4f5f2; }
.dv-stat { font-family: 'Space Mono', monospace; border-left: 2px solid #7f8f86; padding-left: 10px; }
.dv-badge { background: #e0a021; color: #14201a; border-radius: 2px; text-transform: uppercase; font-size: 10px; }
.dv-nav { border-bottom: 2px solid #7f8f8655; }`,
    author: 'Dana Whitfield',
    createdAt: '2026-09-25',
    popularity: 62,
  },
  {
    id: 'underwriter-desk',
    name: 'Underwriter Desk',
    category: 'Professional',
    tags: ['insurance', 'risk', 'worksheet', 'declined', 'clauses'],
    description: 'Every price carries its reasoning.',
    designPhilosophy:
      'Underwriter Desk is a worksheet, not a dashboard. Questions are numbered in nested clauses (4.2.1.a), each answer carries the loading it produces, and the declined stamp sits beside the reason rather than hidden behind a tooltip. Nothing is summarised away, because in risk a summary is a liability. For insurers, brokers, and any assessment where the working must be shown to a regulator.',
    colors: {
      primary: '#1f2a44',
      secondary: '#7d7f8c',
      accent: '#a8342c',
      neutral: '#e9e7de',
      background: '#fdfcf7',
      text: '#1b1f2b',
    },
    typography: {
      displayFont: 'Familjen Grotesk',
      bodyFont: 'Bitter',
      scale: '12 / 13 / 15 / 18 / 23 / 30 / 42',
      lineHeights: 'Worksheet 1.6 (ruled 26px), notes 1.45',
      letterSpacing: 'Clause numbers 0.06em; body 0.005em',
    },
    components: {
      primary: 'Ink-blue block with a 1px darker edge and a 13px label, radius 2px, 40px tall',
      secondary: 'Ruled box with a clause number in the left gutter and a loading figure',
      tertiary: 'A clause reference that links to its wording',
      radius: '2px controls, 2px cards — a worksheet is a printed form',
      hover: 'The row gains a 1px rule above and the loading figure bolds, 130ms linear',
      cards: 'Worksheet sections: ruled 26px rows, clause numbers in the gutter, loads at the right edge',
      forms: 'Nested clause fields with +/- loadings displayed live beside each answer',
      navigation: 'A clause tree: sections 1 to 7, expanded to two levels',
      modals: 'A full worksheet page with the decline stamp applied to the header',
    },
    accent: '#a8342c',
    motif: 'dashed-borders',
    layout: 'editorial',
    useCases: ['Insurance', 'Legal', 'Banking'],
    signatureCss: `.dv-site { background-image: repeating-linear-gradient(0deg, #7d7f8c14 0 1px, transparent 1px 26px); }
.dv-card { border-radius: 2px; border: 1px solid #e9e7de; border-left: 3px solid #7d7f8c; background: #fffef9; }
.dv-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; }
.dv-hero h1 em { color: #a8342c; font-style: normal; }
.dv-btn-primary { border-radius: 2px; background: #1f2a44; color: #fdfcf7; }
.dv-badge { background: transparent; border: 2px solid #a8342c; color: #a8342c; border-radius: 2px; text-transform: uppercase; transform: rotate(-3deg); }
.dv-stat { border-bottom: 1px dotted #7d7f8c; padding-bottom: 6px; }
.dv-h2 { font-variant-numeric: tabular-nums; }`,
    author: 'Aurélie Dumont',
    createdAt: '2026-09-25',
    popularity: 59,
  },
  {
    id: 'cold-chain',
    name: 'Cold Chain',
    category: 'Professional',
    tags: ['pharma', 'logistics', 'temperature', 'compliance', 'excursion'],
    description: 'Two hundred and fourteen sensors, no excursions.',
    designPhilosophy:
      'Cold Chain exists to answer one question: did anything leave its band. The page is therefore a temperature band chart with the permissible range printed as a shaded corridor, and every sensor log sits at the point it was taken. Excursions are counted, listed, and stamped, never smoothed over. For pharmaceutical logistics, food safety, and clinical supply chains under audit.',
    colors: {
      primary: '#12556f',
      secondary: '#86a3b0',
      accent: '#e08a1e',
      neutral: '#e4eef3',
      background: '#f7fbfd',
      text: '#0c1f28',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 44',
      lineHeights: 'Display 1.25, body 1.55',
      letterSpacing: 'Device IDs 0.08em; readings 0.02em',
    },
    components: {
      primary: 'Corridor-blue block with a 6% tint band running through it, radius 3px, 44px tall',
      secondary: 'Sensor chip with a device ID and its last reading in the same line',
      tertiary: 'A device ID link with its sensor channel in 11px',
      radius: '3px controls, 4px cards — clinical, not decorative',
      hover: 'The band tint deepens to 12% and the reading gains its decimal, 130ms linear',
      cards: 'Device panels: a temperature band, a sensor count, and an excursion badge when flagged',
      forms: 'A shipment intake with a temperature band picker and a sensor pairing list',
      navigation: 'A lane strip with four legs and a running excursion count',
      modals: 'An audit report with the band reproduced at full width and every flagged row listed',
    },
    accent: '#e08a1e',
    motif: 'big-stat-row',
    layout: 'split-hero',
    useCases: ['Logistics', 'Health', 'Clinic'],
    signatureCss: `.dv-card { border-radius: 4px; border: 1px solid #e4eef3; border-top: 1px solid #12556f; background: #fff; }
.dv-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, #12556f0f 0 20%, #12556f0f 80% 100%); pointer-events: none; }
.dv-hero h1 em { color: #12556f; font-style: normal; }
.dv-btn-primary { border-radius: 3px; background: #12556f; color: #f7fbfd; }
.dv-badge { background: #e4eef3; color: #12556f; border-radius: 3px; font-size: 11px; }
.dv-stat strong { font-family: 'Archivo', sans-serif; letter-spacing: 0.02em; }
.dv-media { background: linear-gradient(90deg, #12556f 0 12%, #e4eef3 12% 88%, #12556f 88% 100%); border-radius: 4px; }`,
    author: 'Nadia Rahman',
    createdAt: '2026-09-25',
    popularity: 63,
  },
  {
    id: 'deed-office',
    name: 'Deed Office',
    category: 'Professional',
    tags: ['land-registry', 'title', 'records', 'parcels', 'archival'],
    description: 'Every parcel has a number and a stamp.',
    designPhilosophy:
      'Deed Office is a registry before it is a website: navigation is a filing index, and a parcel is identified by its deed number before its address. There are no cards, only entries ruled into a register with an archival stamp and a folio reference, because a record is only useful if it can be cited. For land registries, notaries, and archives whose output is a citation.',
    colors: {
      primary: '#2f3238',
      secondary: '#7f7a70',
      accent: '#4a5aa8',
      neutral: '#e4e2dc',
      background: '#f5f4f0',
      text: '#24262b',
    },
    typography: {
      displayFont: 'Spectral',
      bodyFont: 'Source Sans 3',
      scale: '12 / 14 / 16 / 20 / 26 / 34 / 46',
      lineHeights: 'Entries 1.6, index 1.45',
      letterSpacing: 'Deed numbers 0.04em; entries 0.005em',
    },
    components: {
      primary: 'Registry-ink block with a 0.5px inner rule and a 14px label, radius 1px, 42px tall',
      secondary: 'Filing chip with a folio reference and an access status',
      tertiary: 'A deed number that links and prints its full citation on hover',
      radius: '1px controls, 1px cards — nothing in a registry is rounded',
      hover: 'The entry gains a 1px rule above and its citation expands in the margin, 150ms linear',
      cards: 'Register entries: 1px top rule, indented by folio depth, stamped with an access mark',
      forms: 'A search form with parcel number, parish, and date-range fields in a 4-column register',
      navigation: 'A filing index: letters of the alphabet with parcel counts',
      modals: 'A folio sheet showing the full chain of title as a numbered list',
    },
    accent: '#4a5aa8',
    motif: 'quote-band',
    layout: 'magazine',
    useCases: ['Government', 'Legal', 'Real Estate'],
    signatureCss: `.dv-card { border-radius: 1px; border: 0; border-top: 1px solid #7f7a70; background: transparent; padding: 14px 0; }
.dv-card p, .dv-card .dv-sub { color: #7f7a70; }
.dv-hero h1 em { color: #2f3238; font-style: italic; }
.dv-btn-primary { border-radius: 1px; background: #2f3238; color: #f5f4f0; }
.dv-badge { background: transparent; border: 1px solid #4a5aa8; color: #4a5aa8; border-radius: 1px; transform: rotate(-1deg); font-size: 10px; letter-spacing: 0.04em; }
.dv-stat { border-left: 1px solid #7f7a70; padding-left: 10px; }
.dv-nav { border-bottom: 3px double #2f3238; background: transparent; }`,
    author: 'Edith Ashworth',
    createdAt: '2026-09-25',
    popularity: 57,
  },
  {
    id: 'cyanotype-lab',
    name: 'Cyanotype Lab',
    category: 'Creative',
    tags: ['cyanotype', 'sun-print', 'monochrome', 'photography', 'process'],
    description: 'One blue, no silver.',
    designPhilosophy:
      'Cyanotype Lab is printed in a single colour because that is the process: iron salts, sunlight, water, and prussian blue. Photographs appear as reverse-outs — white forms on blue — and exposure test strips are shown as graded steps rather than explained. The whole site is a darkroom note about a 1842 process, argued in one hue. For photographers, print studios, and workshops that teach an obsolete method on purpose.',
    colors: {
      primary: '#16385e',
      secondary: '#4a7ba6',
      accent: '#0d2340',
      neutral: '#dbe6ee',
      background: '#eef4f8',
      text: '#10233a',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 17 / 21 / 27 / 36 / 52',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Process notes 0.06em; display -0.01em',
    },
    components: {
      primary: 'Prussian block with a 1px wash edge and 0.06em tracked mono label, radius 0',
      secondary: 'Wash-grey chip with an exposure time in seconds',
      tertiary: 'A process note link with a leading grade number',
      radius: '0 controls, 0 cards — cut paper, squared off',
      hover: 'The frame inverts to blue-on-white, as if re-exposed, 300ms ease-in-out',
      cards: 'Print plates: a 1px deckle frame, a reverse-out image area, and a grade strip',
      forms: 'An exposure calculator with coat time, sunlight time, and a resulting grade',
      navigation: 'A process strip: five numbered stages from coat to wash',
      modals: 'A full plate with its reverse-out inverted and the grade strip extended',
    },
    accent: '#16385e',
    motif: 'gradient-hero',
    layout: 'full-bleed',
    useCases: ['Photography', 'Art Gallery', 'Education'],
    signatureCss: `.dv-site { background: linear-gradient(180deg, #eef4f8 0%, #dbe6ee 100%); }
.dv-card { border-radius: 0; border: 1px solid #16385e; box-shadow: inset 0 0 0 4px #eef4f8, inset 0 0 0 5px #16385e33; background: #fff; }
.dv-card:hover { background: #16385e; color: #eef4f8; }
.dv-media { background: #16385e; border-radius: 0; }
.dv-hero h1 em { color: #16385e; font-style: italic; }
.dv-btn-primary { border-radius: 0; background: #16385e; color: #eef4f8; font-family: 'Space Mono', monospace; letter-spacing: 0.06em; font-size: 12px; }
.dv-badge { background: #dbe6ee; color: #16385e; border-radius: 0; font-family: 'Space Mono', monospace; font-size: 10px; }
.dv-stat strong { color: #16385e; }`,
    author: 'Whitney Calloway',
    createdAt: '2026-09-25',
    popularity: 66,
  },
  {
    id: 'letterpress-crash',
    name: 'Letterpress Crash',
    category: 'Creative',
    tags: ['letterpress', 'relief', 'over-inking', 'wood-type', 'studio'],
    description: 'Over-inked, and proud of it.',
    designPhilosophy:
      'Letterpress Crash celebrates the mistakes a real press makes: squeezed ink, a kiss that went too deep, a forme that shifted half a millimetre. Headings are debossed into the page with inset shadows, and every block carries a slight ink halo where pressure was highest. Instead of pretending to be flat design, it is honestly dimensional. For print studios, workshops, and typography projects that want to be touched.',
    colors: {
      primary: '#232a33',
      secondary: '#857f76',
      accent: '#b03024',
      neutral: '#e5ded2',
      background: '#f5f0e6',
      text: '#1b2026',
    },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Karla',
      scale: '14 / 16 / 19 / 24 / 30 / 40 / 56',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.01em (never tight, wood type needs air)',
    },
    components: {
      primary: 'Debossed black block with a 1px light lower inset and 3px press offset, radius 1px',
      secondary: 'Press-board chip with a 2px press edge and an over-ink halo',
      tertiary: 'A link debossed into the page with a 1px shadow only',
      radius: '1px controls, 2px cards — relief printing is square by nature',
      hover: 'The block sinks 2px deeper and its halo widens by 1px, 140ms ease-out',
      cards: 'Printed panels: 2px press edge, debossed heading, a 2% ink halo at the edges',
      forms: 'A job-booking form with debossed labels and fields that look struck into the board',
      navigation: 'A forme strip: five locked-up panels with registration crosses',
      modals: 'A press sheet sliding out of the frame with ink still visible at its leading edge',
    },
    accent: '#b03024',
    motif: 'hard-shadows',
    layout: 'spotlight',
    useCases: ['Publishing', 'Design Tools', 'Events'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #232a331f; box-shadow: inset 0 1px 0 #ffffffcc, inset 0 -2px 0 #232a3326, 3px 3px 0 #232a3314; background: #fffdF7; }
.dv-hero h1, .dv-h2 { text-shadow: 0 1px 0 #ffffffb3, 0 -1px 0 #232a3333; }
.dv-hero h1 em { color: #b03024; font-style: normal; }
.dv-btn-primary { border-radius: 1px; background: #232a33; color: #f5f0e6; box-shadow: inset 0 -2px 0 #ffffff26, 3px 3px 0 #b0302433; }
.dv-btn-primary:hover { transform: translateY(2px); }
.dv-badge { background: #e5ded2; color: #232a33; border-radius: 1px; box-shadow: inset 0 1px 0 #fff; }
.dv-stat strong { text-shadow: 0 1px 0 #ffffffcc; }`,
    author: 'Walter Fenwick',
    createdAt: '2026-09-25',
    popularity: 64,
  },
  {
    id: 'stop-motion-bench',
    name: 'Stop Motion Bench',
    category: 'Creative',
    tags: ['animation', 'frames', 'onion-skin', '12fps', 'set-building'],
    description: 'Twelve frames a second, no tweening.',
    designPhilosophy:
      'Stop Motion Bench is shot at 12fps and refuses to hide it. Nothing on the page interpolates smoothly: transitions happen in twelve discrete steps per second, and interactive elements show onion-skin ghosts of their previous three states, exactly as an animator checks a walk cycle. Charming motion comes from discipline, not from easing curves. For animation studios, set builders, and frame-by-frame workshops.',
    colors: {
      primary: '#3b3a38',
      secondary: '#98938c',
      accent: '#d97a35',
      neutral: '#e6e0d8',
      background: '#f5f2ee',
      text: '#2a2724',
    },
    typography: {
      displayFont: 'Rubik Mono One',
      bodyFont: 'IBM Plex Sans',
      scale: '11 / 13 / 16 / 20 / 26 / 34 / 48',
      lineHeights: 'Display 1.1, body 1.55',
      letterSpacing: 'Frame numbers 0.1em; display -0.01em',
    },
    components: {
      primary: 'Charcoal block with a 3px clay-orange bottom edge and a frame number, radius 2px',
      secondary: 'Rig steel outline with a frame count and a 12fps badge',
      tertiary: 'A frame-number link that steps 12 frames per second on hover',
      radius: '2px controls, 2px cards — rigid armatures, square sets',
      hover: 'Two onion-skin ghosts appear behind the element at 20% and 10% opacity, stepping 12 times a second',
      cards: 'Frames: a numbered corner, a clay accent edge, and a three-ghost onion-skin stack',
      forms: 'A shot list with frame ranges and a 12-step exposure calculator',
      navigation: 'A timeline strip of 12 numbered frames per second with the playhead marked',
      modals: 'A frame held up to the light, with its two neighbours ghosted behind it',
    },
    accent: '#d97a35',
    motif: 'numbered-steps',
    layout: 'split-hero',
    useCases: ['Film & TV', 'Education', 'Gaming'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #98938c33; box-shadow: 3px 3px 0 #e6e0d8, 5px 5px 0 #e6e0d866; background: #fffefb; }
.dv-card::after { content: ''; position: absolute; top: 6px; right: 8px; font-size: 10px; color: #98938c; }
.dv-btn-primary { border-radius: 2px; background: #3b3a38; color: #f5f2ee; border-bottom: 3px solid #d97a35; }
.dv-btn-primary:hover { transform: translateX(2px); box-shadow: -4px 0 0 #d97a3540, -8px 0 0 #d97a3520; }
.dv-hero h1 { font-family: 'Rubik Mono One', monospace; }
.dv-hero h1 em { color: #d97a35; font-style: normal; }
.dv-stat strong { font-family: 'Rubik Mono One', monospace; }
.dv-badge { background: #e6e0d8; color: #3b3a38; border-radius: 2px; font-family: 'IBM Plex Sans', sans-serif; }`,
    author: 'Miroslav Havel',
    createdAt: '2026-09-25',
    popularity: 65,
  },
  {
    id: 'grid-paper',
    name: 'Grid Paper',
    category: 'Creative',
    tags: ['illustration', 'workspace', 'annotation', 'taped', 'sketchbook'],
    description: 'Ruled five millimetres, taped at the corners.',
    designPhilosophy:
      'Grid Paper is somebody else has been working here: illustrations taped in at their corners, annotations pencilled into the margin, and one hot marker colour used for whatever mattered that day. The ruled 5mm grid is never hidden, because the substrate is part of the work. For illustrators, teaching studios, and portfolios that would rather show the sketchbook than the case study.',
    colors: {
      primary: '#2b3a67',
      secondary: '#8c9bb5',
      accent: '#e2574c',
      neutral: '#e8edf3',
      background: '#fbfcfd',
      text: '#22293a',
    },
    typography: {
      displayFont: 'Patrick Hand',
      bodyFont: 'Karla',
      scale: '12 / 14 / 17 / 21 / 27 / 36 / 50',
      lineHeights: 'Display 1.3, body 1.6',
      letterSpacing: 'Annotations 0.02em; display 0.005em',
    },
    components: {
      primary: 'Pencil-blue block with a marker-red 3px underline and a 5mm grid showing through, radius 2px',
      secondary: 'Taped chip: white, 1px graphite edge, 14px tape at two corners',
      tertiary: 'A margin annotation that links, drawn with a 28px leader line',
      radius: '2px controls, 2px cards — paper corners are cut square',
      hover: 'The tape lifts 1px and its shadow separates, and the marker underline doubles to 6px, 150ms ease-out',
      cards: 'Taped-in plates: visible 5mm grid, corner tape, a pencil-blue caption, a margin annotation',
      forms: 'A brief form ruled at 5mm with annotations in the margin and a marker-red required mark',
      navigation: 'A desk strip: four taped tabs with hand-written labels',
      modals: 'A plate unpeeled from the page, revealing bare grid where it was',
    },
    accent: '#e2574c',
    motif: 'rotated-stickers',
    layout: 'asymmetric',
    useCases: ['Portfolio', 'Design Tools', 'Education'],
    signatureCss: `.dv-site { background-image: linear-gradient(#2b3a6714 1px, transparent 1px), linear-gradient(90deg, #2b3a6714 1px, transparent 1px); background-size: 20px 20px; }
.dv-card { border-radius: 2px; border: 1px solid #8c9bb533; background: #ffffff; box-shadow: 0 1px 0 #8c9bb526, 0 6px 14px #2b3a670f; transform: rotate(-0.6deg); }
.dv-card::before { content: ''; position: absolute; top: -8px; left: 12px; width: 48px; height: 16px; background: #eff3f7cc; border: 1px solid #8c9bb533; transform: rotate(-4deg); }
.dv-hero h1 em { color: #2b3a67; font-style: normal; border-bottom: 3px solid #e2574c; }
.dv-btn-primary { border-radius: 2px; background: #2b3a67; color: #fbfcfd; border-bottom: 3px solid #e2574c; }
.dv-badge { background: #e8edf3; color: #2b3a67; border-radius: 2px; }
.dv-media { border-radius: 2px; background: repeating-linear-gradient(45deg, #e8edf3 0 6px, #fbfcfd 6px 12px); }`,
    author: 'Lena Petrova',
    createdAt: '2026-09-25',
    popularity: 68,
  },
  {
    id: 'binaural-room',
    name: 'Binaural Room',
    category: 'Creative',
    tags: ['spatial-audio', 'studio', 'speakers', 'stereo', 'mixdown'],
    description: 'Left and right, drawn as a room.',
    designPhilosophy:
      'Binaural Room treats a mix as a plan view: the hero is a floor plan with speaker positions you can click, and the layout itself splits left and right like a stereo field, so the page literally has a channel per column. Panning is explained spatially rather than numerically, and levels are shown as distance from the listener. For spatial-audio studios, mastering rooms, and audio-tool documentation.',
    colors: {
      primary: '#8f7ae0',
      secondary: '#4b5563',
      accent: '#e5a76f',
      neutral: '#1a1720',
      background: '#100d16',
      text: '#e6e1f0',
    },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 16 / 20 / 26 / 34 / 48',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Channel labels 0.1em uppercase; levels 0.04em',
    },
    components: {
      primary: 'Teal block with room-dark text and a 1px teal ring offset 3px, radius 999px for a speaker feel',
      secondary: 'Slate panel with a channel label and a level in dBFS',
      tertiary: 'A channel label that links, with its speaker index in 11px',
      radius: '999px controls, 4px cards — monitors are round, rooms are not',
      hover: 'The speaker dot gains a 4px teal ring and its level readout brightens, 150ms ease-out',
      cards: 'Room panels: a mini floor plan, four speaker dots, and a stereo pairing note',
      forms: 'A session form with left and right gain fields and a balance readout',
      navigation: 'A channel strip: L, C, R, LFE, LS, RS with live activity dots',
      modals: 'A plan view enlarged with speaker positions draggable and levels updating live',
    },
    accent: '#8f7ae0',
    motif: 'glow-pulse',
    layout: 'centered',
    useCases: ['Music', 'Podcast', 'Film & TV'],
    signatureCss: `.dv-site { background: radial-gradient(90% 70% at 50% 30%, #1a1720 0%, #100d16 70%); }
.dv-card { background: #1a1720; border: 1px solid #4b556355; border-radius: 4px; }
.dv-card::after { content: ''; position: absolute; inset: 10px; border-radius: 24px; border: 1px dashed #4b556344; }
.dv-hero h1 { color: #e6e1f0; }
.dv-hero h1 em { color: #8f7ae0; font-style: normal; }
.dv-btn-primary { border-radius: 999px; background: #8f7ae0; color: #100d16; box-shadow: 0 0 0 3px #8f7ae033; }
.dv-badge { background: transparent; border: 1px solid #4b5563; color: #e6e1f0; border-radius: 999px; font-size: 10px; }
.dv-stat strong { color: #8f7ae0; }
.dv-nav { background: transparent; border-bottom: 1px solid #4b556344; }`,
    author: 'Hana Sørensen',
    createdAt: '2026-09-25',
    popularity: 62,
  },
  {
    id: 'zoetrope',
    name: 'Zoetrope',
    category: 'Creative',
    tags: ['animation-history', 'frames', 'drum', 'pre-cinema', 'brass'],
    description: 'Fourteen frames, one revolution.',
    designPhilosophy:
      'Zoetrope is about pre-cinema animation, so the page is a drum: a horizontal strip of fourteen frames you scrub through, with a slit-viewer metaphor that only reveals one frame at a time until you turn it. Motion is derived from rotation, not from scroll position, and the whole system is built from brass rules and ink. For animation archives, museums, and studios that care where the frame came from.',
    colors: {
      primary: '#622277',
      secondary: '#8f7a58',
      accent: '#a8742c',
      neutral: '#ddd9d2',
      background: '#f1f0ec',
      text: '#241c12',
    },
    typography: {
      displayFont: 'Rye',
      bodyFont: 'Courier Prime',
      scale: '12 / 14 / 17 / 21 / 27 / 36 / 50',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Caption labels 0.08em uppercase; display 0.01em',
    },
    components: {
      primary: 'Brass-framed mauve block with a 2px brass rule along the top and 0.08em tracked label, radius 2px',
      secondary: 'Vitrine chip with a frame number and a revolution count',
      tertiary: 'A frame number link that advances the strip by one frame',
      radius: '2px controls, 2px cards — brass fittings, squared off',
      hover: 'The strip rotates 1/14 of a turn to bring the hovered frame under the slit, 220ms steps(7)',
      cards: 'Frame plates: a numbered strip, a slit mask, and a brass caption rail',
      forms: 'A drum-order form with frame count and a rotation-speed picker',
      navigation: 'A drum strip of 14 numbered frames with the slit position marked',
      modals: 'A drum opened flat, showing all fourteen frames at once with their captions',
    },
    accent: '#a8742c',
    motif: 'ticker-marquee',
    layout: 'magazine',
    useCases: ['Art Gallery', 'Film & TV', 'Education'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #a8742c44; border-top: 2px solid #a8742c; background: #fffdf8; }
.dv-card::after { content: ''; position: absolute; inset: 0 6px auto 6px; height: 2px; background: repeating-linear-gradient(90deg, #622277 0 2px, transparent 2px 14px); }
.dv-hero h1 em { color: #a8742c; font-style: normal; }
.dv-btn-primary { border-radius: 2px; background: #622277; color: #f1f0ec; border-top: 2px solid #a8742c; }
.dv-badge { background: #ddd9d2; color: #622277; border-radius: 2px; font-family: 'Courier Prime', monospace; }
.dv-stat strong { color: #a8742c; font-family: 'Rye', serif; }
.dv-media { border-radius: 2px; background: repeating-linear-gradient(90deg, #ddd9d2 0 14px, #f1f0ec 14px 16px); }`,
    author: 'Julian Ashby',
    createdAt: '2026-09-25',
    popularity: 60,
  },
]
