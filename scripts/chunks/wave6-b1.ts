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
      hover: 'The 3px tick becomes a 9px tick and the element's gridline darkens, 100ms linear',
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
    useCases: ['Creative', 'Marketplace', 'Startup'],
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
