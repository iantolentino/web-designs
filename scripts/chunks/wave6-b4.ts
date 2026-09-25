  {
    id: 'grid-dispatch',
    name: 'Grid Dispatch',
    category: 'Professional',
    tags: ['grid', 'dispatch', 'frequency', 'utility', 'control-room'],
    description: 'Frequency first, everything else second.',
    designPhilosophy:
      'Grid Dispatch is a control room that admits there is only one number that matters: system frequency, held at 50 hertz. That value sits in the header on every screen and is the only element allowed to change colour. Everything else is a single-line diagram, an alarm list, and a breaker state, drawn with the discipline of an electrical schematic. For utilities, network operators, and industrial control rooms.',
    designDetails:
      'Switchgear grey #f2f5f7 with schematic ink #123a52 for conductors, and a single alarm rust #d34c2a reserved for out-of-band frequency and open breakers. Single-line diagrams are drawn with 1px hairlines and 3px bus bars; every alarm carries a timestamp to the second. Type is a technical display face for bus labels and a plain sans for the alarm log.',
    colors: {
      primary: '#123a52',
      secondary: '#6b8a9c',
      accent: '#d34c2a',
      neutral: '#dfe7ec',
      background: '#f2f5f7',
      text: '#0d1b24',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 40 / 74 / 124',
      paddingScale: '12 / 22 / 38',
      grid: '1380px with an 18-col schematic grid and 12px conductor gutters',
    },
    motion: {
      pageLoad: 'Bus bars draw left to right over 500ms, then alarm rows populate instantly',
      hoverStates: 'Conductor stub growth, 100ms linear',
      transitions: 'Linear and immediate; a control room does not decorate',
      scroll: 'The frequency readout stays pinned in the header and re-renders as you move',
    },
    accessibility:
      '#0d1b24 on #f2f5f7 is 15.9:1; alarm rust at 4.4:1 is only used with the word ALARM or a listed breaker state, never as a bare indicator. Frequency carries its unit and its nominal band in text. Alarm rows are a real ordered list with timestamps so assistive tech reads the sequence in order.',
    responsive:
      'The schematic grid drops from 18 to 8 columns at 1100px and to 4 at 700px, with bus bars reflowing as vertical stubs under 700px. The alarm log becomes a stacked two-line format at 560px. The frequency readout stays in the header at every width.',
    codeExample:
      '<section class="board">\n  <p class="kicker">SUBSTATION 4 · FEEDER B2</p>\n  <p class="freq">50.01 <span>Hz</span></p>\n  <p class="row">06:14:02 BREAKER OPEN · B2 · RESTORED</p>\n  <button class="btn-primary">DISPATCH CLOSE</button>\n</section>',
    accent: '#d34c2a',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Energy', 'DevOps & Cloud', 'Manufacturing'],
    signatureCss: `.dv-site { background-image: linear-gradient(#dfe7ec 1px, transparent 1px), linear-gradient(90deg, #dfe7ec 1px, transparent 1px); background-size: 24px 24px; }
.dv-card { border-radius: 0; border: 1px solid #123a5222; border-top: 3px solid #123a52; background: #fff; }
.dv-hero h1 { font-family: 'Oxanium', sans-serif; }
.dv-hero h1 em { color: #d34c2a; font-style: normal; }
.dv-btn-primary { border-radius: 0; background: #123a52; color: #f2f5f7; }
.dv-stat strong { font-family: 'Oxanium', sans-serif; letter-spacing: 0.02em; }
.dv-badge { background: transparent; border: 1px solid #6b8a9c; color: #123a52; border-radius: 0; font-size: 11px; }`,
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
    designDetails:
      'Board green #1f3a2e on quiet grey #f4f5f2, with caution amber #e0a021 reserved for spacing conflicts and a strip white #e6e9e2 for the slips themselves. Strips carry a callsign, an altitude, and a squawk, all in 12px mono with fixed columns so the eye can scan a column at speed. Bays are separated by 2px printed grooves.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '14 / 36 / 66 / 112',
      paddingScale: '8 / 16 / 30',
      grid: '1360px with 6 bays of 200px and 2px grooves between them',
    },
    motion: {
      pageLoad: 'Strips drop into bays top-down, 35ms apart, landing 1px into the groove',
      hoverStates: 'A 2px lift and a groove widening, 110ms linear',
      transitions: 'Linear and brief; strips are moved by hand, not animated',
      scroll: 'Bays stay fixed while strips reorder within them once per scroll pause',
    },
    accessibility:
      '#14201a on #f4f5f2 is 15.6:1 and strip white sits 1.2:1 from the board, so structure is legible without contrast strain. Caution amber is always paired with the word CONFLICT and the spacing figure. Strips are a real ordered list per bay, so a screen reader gets sequence as sequence rather than as a grid of numbers.',
    responsive:
      'Six bays become four at 1100px, two at 800px, and one at 560px with strips stacked in sequence order. Fixed 62px columns narrow to 48px below 480px but keep their alignment. The wind readout moves from the bay header into the page header at 480px.',
    codeExample:
      '<section class="bay">\n  <p class="kicker">BAY 3 · RWY 09 · WIND 240/12</p>\n  <p class="strip">BAW214  FL240  4312</p>\n  <p class="row">SEQUENCE 4 OF 9 · SPACING 6 NM</p>\n  <button class="btn-primary">HAND OFF TO APPROACH</button>\n</section>',
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
    designDetails:
      'Ledger paper #fdfcf7 with ink blue #1f2a44 rules, a load grey #7d7f8c for secondary figures, and a decline red #a8342c used only on the stamp and the clause that caused it. The worksheet is ruled at 26px with clause numbers in the left gutter, and loadings are printed with a plus or minus sign and one decimal.',
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
    spacing: {
      baseUnit: '2px',
      marginScale: '16 / 40 / 72 / 118',
      paddingScale: '10 / 20 / 34',
      grid: '1100px worksheet with a 46px clause gutter and a 78px loading column',
    },
    motion: {
      pageLoad: 'Rows rule themselves in over 300ms, then loadings count up by 0.1 steps',
      hoverStates: 'Rule appearance plus figure bolding, 130ms linear',
      transitions: 'Linear, minimal; a worksheet should not move while being read',
      scroll: 'The clause gutter stays in view so a number is never lost mid-scroll',
    },
    accessibility:
      '#1b1f2b on #fdfcf7 is 16.4:1 and loading figures sit at 12px with 5.4:1, so small numbers remain legible. Clause numbers are real list markers, so the nested numbering survives in the accessibility tree. Decline red is 6.2:1 and always accompanies the stamped word DECLINED plus its clause reference.',
    responsive:
      'The loading column moves beneath each clause row at 760px, keeping its sign and decimal. The clause gutter narrows from 46px to 28px at 560px. Nested numbering is preserved at every width rather than being flattened into bullets.',
    codeExample:
      '<section class="sheet">\n  <p class="kicker">REF 4471 · SECTION 4.2</p>\n  <h1>Flood loading <em>+18.5%.</em></h1>\n  <p class="row">4.2.1.a  River within 200 m .......... DECLINED</p>\n  <button class="btn-primary">Apply the loading</button>\n</section>',
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
    designDetails:
      'Sterile white #f7fbfd with corridor blue #12556f for the band, sensor grey #86a3b0 for readings, and excursion amber #e08a1e used only on a flagged row. The band is drawn as two 1px edges with a 6% cyan fill, and exceedance rows carry a hard 4px amber bar bleeding into the margin. Type is a plain grotesque for prose and a condensed face for device IDs.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 44 / 80 / 134',
      paddingScale: '14 / 26 / 42',
      grid: '1300px with a 4-col device grid and a 96px band chart area',
    },
    motion: {
      pageLoad: 'The band draws along its length over 600ms and readings appear at their positions',
      hoverStates: 'Band tint deepening and a decimal appearing, 130ms linear',
      transitions: 'Linear and calm; refrigeration is not expressive',
      scroll: 'Sensor readings tick as they pass the centre line, never on a timer',
    },
    accessibility:
      '#0c1f28 on #f7fbfd is 16.4:1; corridor blue at 7.4:1 carries headings and band edges. Exceedance amber is 2.6:1 on white and is therefore restricted to the 4px margin bar, with the row itself stating EXCURSION plus the temperature and duration. Band limits are printed as numbers above and below the chart, so the corridor is never the only evidence.',
    responsive:
      'The band chart stays full width at every size and reduces its tick density instead of its span. Four device columns become two at 1000px and one at 620px, with the amber margin bar retained at 4px. Device IDs never truncate.',
    codeExample:
      '<section class="lane">\n  <p class="kicker">LANE 2 · LEG 3 · 214 SENSORS</p>\n  <h1>Excursions <em>0 of 214.</em></h1>\n  <p class="row">2.0–8.0 °C · worst reading 5.4 °C · 41 h elapsed</p>\n  <button class="btn-primary">Print the audit report</button>\n</section>',
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
    designDetails:
      'Document cream #f6f2ea with registry ink #33302b, a filing grey #857e6f for marginalia, and a stamp brown #8a5a2b used once per entry. Entries are ruled with a 1px top rule and indented by folio depth, and every citation is printed in full rather than abbreviated. Type is a book serif for entries and a sans for the index, so the two never blur.',
    colors: {
      primary: '#33302b',
      secondary: '#857e6f',
      accent: '#8a5a2b',
      neutral: '#e7e0d2',
      background: '#f6f2ea',
      text: '#262320',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 42 / 76 / 128',
      paddingScale: '12 / 22 / 36',
      grid: '1140px register with 18px folio indents per depth level and 1px rules',
    },
    motion: {
      pageLoad: 'Entries appear in filing order over 400ms, folio rules drawing last',
      hoverStates: 'Rule plus margin citation, 150ms linear',
      transitions: 'Linear; records do not ease in and out',
      scroll: 'Folio depth markers persist in the left margin throughout the register',
    },
    accessibility:
      '#262320 on #f6f2ea is 14.9:1 and 0.5px rules are decorative only — every separation also has spacing, so nothing depends on a hairline. Deed numbers are announced with their folio and access status. The registry is a definition list so number and description stay associated for assistive tech.',
    responsive:
      'Folio indents halve from 18px to 9px below 760px and the four-column search becomes two at 640px, then one at 460px. Citations wrap at their commas rather than mid-number. Rules stay 1px at every width so the register still reads as ruled.',
    codeExample:
      '<section class="entry">\n  <p class="kicker">REGISTER · PARCEL 4471 · FOLIO 214</p>\n  <h1>Title <em>held since 1931.</em></h1>\n  <p class="citation">Deed 4471/214, Parish of Ashwell, transferred 14 June 1931.</p>\n  <button class="btn-primary">Request a certified copy</button>\n</section>',
    accent: '#8a5a2b',
    motif: 'quote-band',
    layout: 'magazine',
    useCases: ['Government', 'Legal', 'Real Estate'],
    signatureCss: `.dv-card { border-radius: 1px; border: 0; border-top: 1px solid #857e6f; background: transparent; padding: 14px 0; }
.dv-card p, .dv-card .dv-sub { color: #857e6f; }
.dv-hero h1 em { color: #33302b; font-style: italic; }
.dv-btn-primary { border-radius: 1px; background: #33302b; color: #f6f2ea; }
.dv-badge { background: transparent; border: 1px solid #8a5a2b; color: #8a5a2b; border-radius: 1px; transform: rotate(-1deg); font-size: 10px; letter-spacing: 0.04em; }
.dv-stat { border-left: 1px solid #857e6f; padding-left: 10px; }
.dv-nav { border-bottom: 3px double #33302b; background: transparent; }`,
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
    designDetails:
      'Prussian blue #16385e as the only strong colour, on a towel white #eef4f8 with wash-grey #dbe6ee for surface variation and a deeper blue #0d2340 for shadows. Exposure grades are five stacked tints, and every image frame carries a 1px deckle edge. Type is a display serif for headings and a mono for process notes, because timings must not be misread.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 56 / 100 / 164',
      paddingScale: '18 / 32 / 54',
      grid: '1160px with a 3-col plate grid and 5-step grade strips',
    },
    motion: {
      pageLoad: 'Plates appear as if developing, rising from 12% to full opacity over 900ms, in order',
      hoverStates: 'A 300ms inversion of the frame',
      transitions: 'Ease-in-out, slow, like a print developing in the wash',
      scroll: 'The grade strip extends by one step per section passed',
    },
    accessibility:
      '#10233a on #eef4f8 is 15.3:1 and the monochrome discipline means no meaning rests on hue. Exposure grades carry both a number and a seconds value, and process stages are an ordered list rather than an implied sequence. The inversion hover is also triggered on focus so keyboard users get identical feedback.',
    responsive:
      'The three-column plate grid becomes two at 900px and one at 600px, with grade strips staying five steps wide. Process notes drop from 17px to 15px below 480px. The deckle frame thins from 1px to 1px but its inset shadow reduces so nothing smudges.',
    codeExample:
      '<section class="plate">\n  <p class="kicker">GRADE 3 · 6 MIN IN SUN</p>\n  <h1>Reverse-out, <em>no silver.</em></h1>\n  <p class="note">Coat 1.5 ml · dry 20 min · wash 8 min · dry flat</p>\n  <button class="btn-primary">Calculate an exposure</button>\n</section>',
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
    designDetails:
      'Press-board #f4efe6 with ink black #2a2622, a bruised plum #8a8079 for secondary and over-ink red #b8452f for any text that was hit twice. Debossing is done with a 1px dark inset on the top edge and a 1px light inset below, which reads as relief at any size. Paper texture is a 3% grain, and every panel has a 2px press edge.',
    colors: {
      primary: '#2a2622',
      secondary: '#8a8079',
      accent: '#b8452f',
      neutral: '#e3dbcf',
      background: '#f4efe6',
      text: '#201d1a',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 50 / 92 / 150',
      paddingScale: '16 / 30 / 50',
      grid: '1180px with a 2-col forme layout and 3px press offsets',
    },
    motion: {
      pageLoad: 'Each block presses down 3px and settles, 70ms apart, with the halo appearing on impact',
      hoverStates: 'A 2px deeper press plus a wider halo, 140ms ease-out',
      transitions: 'Ease-out with a hard stop; a press does not glide',
      scroll: 'Blocks press in as they enter, once, then stay struck',
    },
    accessibility:
      '#201d1a on #f4efe6 is 15.4:1 and the deboss effect never carries contrast on its own — text stays ink-black in all states. Over-ink red at 5.1:1 marks anything struck twice and always duplicates a word. Inset shadows are decorative and removed under reduced motion, which leaves clean struck type.',
    responsive:
      'The two-column forme becomes one at 780px and press offsets reduce from 3px to 1px below 560px so blocks do not appear misaligned. Display sizes clamp from 56px to 34px at 400px. Halos are disabled under 480px where they would blur text.',
    codeExample:
      '<section class="forme">\n  <p class="kicker">JOB 114 · 2 PRESSES</p>\n  <h1>Ink too deep, <em>press it anyway.</em></h1>\n  <p class="note">Cotton 300gsm · 4 passes · impression 0.3 mm</p>\n  <button class="btn-primary">Book a forme</button>\n</section>',
    accent: '#b8452f',
    motif: 'hard-shadows',
    layout: 'spotlight',
    useCases: ['Publishing', 'Design Tools', 'Events'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #2a26221f; box-shadow: inset 0 1px 0 #ffffffcc, inset 0 -2px 0 #2a262226, 3px 3px 0 #2a262214; background: #fffdF7; }
.dv-hero h1, .dv-h2 { text-shadow: 0 1px 0 #ffffffb3, 0 -1px 0 #2a262233; }
.dv-hero h1 em { color: #b8452f; font-style: normal; }
.dv-btn-primary { border-radius: 1px; background: #2a2622; color: #f4efe6; box-shadow: inset 0 -2px 0 #ffffff26, 3px 3px 0 #b8452f33; }
.dv-btn-primary:hover { transform: translateY(2px); }
.dv-badge { background: #e3dbcf; color: #2a2622; border-radius: 1px; box-shadow: inset 0 1px 0 #fff; }
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
    designDetails:
      'Set grey #f5f2ee with puppet charcoal #3b3a38, a clay orange #d97a35 for the moving part, and steel rig #98938c for armatures. Every transition runs in twelve steps per second, and interactive elements carry three onion-skin ghosts at decreasing opacity. Frames are numbered in the corner of every block, because everything here is a frame.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '18 / 44 / 80 / 132',
      paddingScale: '12 / 24 / 40',
      grid: '1200px with a 12-frame timeline and a 3-col shot grid',
    },
    motion: {
      pageLoad: 'Everything enters over exactly 12 steps at 12fps, with three ghost states behind each element',
      hoverStates: '12 discrete steps with onion-skin ghosts at 20% and 10%, 1000ms total',
      transitions: 'steps(12, end) at 12fps — no interpolation is permitted anywhere in this system',
      scroll: 'A frame counter in the corner advances by exactly one per section passed',
    },
    accessibility:
      '#2a2724 on #f5f2ee is 14.6:1; clay orange at 3.6:1 only fills 3px edges and frame badges, never text. Onion-skin ghosts are decorative duplicates with aria-hidden, and nothing important is ever only a ghost. Reduced motion replaces the 12-step animation with instant state changes and removes the ghosts entirely — the honest fallback for a system built on stepped motion.',
    responsive:
      'The 12-frame timeline becomes a 6-frame strip below 800px and a progress bar below 520px, keeping the frame count in text. Shot grids go 3 → 2 → 1 columns at 980/620px. Ghost offsets reduce from 6px to 2px under 560px so nothing smears.',
    codeExample:
      '<section class="frame">\n  <p class="kicker">SHOT 14 · FRAMES 41–53 · 12 FPS</p>\n  <h1>Twelve frames, <em>one second.</em></h1>\n  <p class="note">Puppet move 38 mm · exposure double on 4 frames</p>\n  <button class="btn-primary">Shoot the next second</button>\n</section>',
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
    designDetails:
      'Pencil blue #2b3a67 rules at 5mm over graph cream #fbfcfd, with marker red #e2574c as the single loud colour and a graphite #8c9bb5 for annotations. Tapes are drawn as 14px whitened rectangles at 45° and 315° on the top corners, and panels sit at sub-degree rotations. Annotations are genuine margin notes at 12px, annotated in a hand-feel face.',
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
    spacing: {
      baseUnit: '5px',
      marginScale: '20 / 45 / 85 / 140',
      paddingScale: '15 / 30 / 50',
      grid: '5mm grid base (20px at 4x) with a 2-col plate layout and a 96px annotation margin',
    },
    motion: {
      pageLoad: 'Plates settle into place with a 1° tilt correction, 60ms apart, tape appearing last',
      hoverStates: 'Tape lift plus a marker underline doubling, 150ms ease-out',
      transitions: 'Ease-out, brief, with a slight paper settle at the end',
      scroll: 'Annotation leader lines draw toward their plate as it enters the viewport',
    },
    accessibility:
      '#22293a on #fbfcfd is 15.1:1 and the 5mm grid is drawn at 6% opacity so it cannot interfere with text contrast. Marker red at 3.9:1 only underlines headings and marks required fields, which also carry the word REQUIRED. Annotations are real text tied to their plate by aria-describedby, not free-floating labels.',
    responsive:
      'The 5mm grid scales from 20px to 15px below 700px so it stays visible without moiring. The two-column plate layout becomes one at 780px and annotations move from the margin to directly beneath their plate at 620px. Tape corners are retained at 14px.',
    codeExample:
      '<section class="plate">\n  <p class="kicker">DESK · TUESDAY MORNING</p>\n  <h1>Sketch first, <em>then the vector.</em></h1>\n  <p class="note">margin: three values tested, two survived</p>\n  <button class="btn-primary">Pin the brief</button>\n</section>',
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
    designDetails:
      'Room dark #0f1216 with monitor teal #6cd0c9 for anything routed, a level amber #f0c05a for clipping, and slate #45707a for surfaces. Speaker positions are 8px teal dots with a 4px ring when active, and the floor plan is drawn in 1px hairlines with a 24px radius grid. Type is a technical display for channel labels and a plain sans for the notes.',
    colors: {
      primary: '#6cd0c9',
      secondary: '#45707a',
      accent: '#f0c05a',
      neutral: '#171c21',
      background: '#0f1216',
      text: '#dfe9ea',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '20 / 46 / 84 / 140',
      paddingScale: '14 / 28 / 46',
      grid: '1280px two-channel split (1fr / 1fr) with a 24px radius plan grid',
    },
    motion: {
      pageLoad: 'Speaker dots activate in clockwise order over 700ms, then levels settle',
      hoverStates: 'Ring appearance and a level brightening, 150ms ease-out',
      transitions: 'Ease-out, short; only levels and rings animate, nothing slides',
      scroll: 'Active channel dots pulse in time with a 4/4 bar as sections pass',
    },
    accessibility:
      '#dfe9ea on #0f1216 is 15.6:1; teal at 9.4:1 carries labels, and level amber is reserved for clipping at 24px+ figures so its 2.3:1 stays decorative. Every panning position is written as a value and a side, never as an x-coordinate alone. The pulsing activity dots stop under reduced motion.',
    responsive:
      'The two-channel split stacks to a single column at 820px, with the floor plan above the notes. Speaker dots stay 8px with 44px hit areas at every size. The channel strip wraps to two rows below 520px rather than scrolling.',
    codeExample:
      '<section class="room">\n  <p class="kicker">ROOM B · 5.1 LAYOUT · PAIR 2</p>\n  <h1>Left and right, <em>forty degrees apart.</em></h1>\n  <p class="level">L −6.0 dBFS · R −5.8 dBFS · balance +0.2</p>\n  <button class="btn-primary">Open the plan</button>\n</section>',
    accent: '#6cd0c9',
    motif: 'glow-pulse',
    layout: 'centered',
    useCases: ['Music', 'Podcast', 'Film & TV'],
    signatureCss: `.dv-site { background: radial-gradient(90% 70% at 50% 30%, #171c21 0%, #0f1216 70%); }
.dv-card { background: #171c21; border: 1px solid #45707a55; border-radius: 4px; }
.dv-card::after { content: ''; position: absolute; inset: 10px; border-radius: 24px; border: 1px dashed #45707a44; }
.dv-hero h1 { color: #dfe9ea; }
.dv-hero h1 em { color: #6cd0c9; font-style: normal; }
.dv-btn-primary { border-radius: 999px; background: #6cd0c9; color: #0f1216; box-shadow: 0 0 0 3px #6cd0c933; }
.dv-badge { background: transparent; border: 1px solid #45707a; color: #dfe9ea; border-radius: 999px; font-size: 10px; }
.dv-stat strong { color: #6cd0c9; }
.dv-nav { background: transparent; border-bottom: 1px solid #45707a44; }`,
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
    designDetails:
      'Aged paper #f3efe7 with ink #2d2216, brass #a8742c rules, and a faded gilt #8f7a58 for secondary figures. Frames are drawn as 14 equal strips with 1px brass separators, and the slit is a 2px ink bar that masks all but the active frame. Type is a display wood-face paired with a typewriter mono, so captions read as labels in a museum vitrine.',
    colors: {
      primary: '#2d2216',
      secondary: '#8f7a58',
      accent: '#a8742c',
      neutral: '#e2d9c8',
      background: '#f3efe7',
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
      primary: 'Brass-framed ink block with a 2px brass rule along the top and 0.08em tracked label, radius 2px',
      secondary: 'Vitrine chip with a frame number and a revolution count',
      tertiary: 'A frame number link that advances the strip by one frame',
      radius: '2px controls, 2px cards — brass fittings, squared off',
      hover: 'The strip rotates 1/14 of a turn to bring the hovered frame under the slit, 220ms steps(7)',
      cards: 'Frame plates: a numbered strip, a slit mask, and a brass caption rail',
      forms: 'A drum-order form with frame count and a rotation-speed picker',
      navigation: 'A drum strip of 14 numbered frames with the slit position marked',
      modals: 'A drum opened flat, showing all fourteen frames at once with their captions',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '22 / 50 / 90 / 148',
      paddingScale: '14 / 28 / 46',
      grid: '1240px with a 14-frame strip (each 1fr) and 1px brass separators',
    },
    motion: {
      pageLoad: 'The drum advances one frame every 90ms until it settles on frame 1, then captions appear',
      hoverStates: 'A 1/14 rotation in seven discrete steps, 220ms',
      transitions: 'steps(7, end) so rotation reads as frames rather than a smooth turn',
      scroll: 'One revolution per two sections scrolled, always quantised to a frame',
    },
    accessibility:
      '#241c12 on #f3efe7 is 14.6:1; brass at 4.5:1 is confined to rules and frame numerals at 17px+. Because the slit metaphor intentionally hides frames, the strip is a real list with every frame caption present in the DOM, and the mask is aria-hidden. Reduced motion replaces rotation with instant frame changes and shows all captions.',
    responsive:
      'The fourteen-frame strip becomes a seven-frame strip below 860px and a scrubber with a frame counter below 560px, with the slit retained as a 2px ink bar. Captions move below their frame at 620px. Brass separators reduce from 1px to 1px but spacing halves so the drum stays legible.',
    codeExample:
      '<section class="drum">\n  <p class="kicker">DRUM 4 · 14 FRAMES · 1834</p>\n  <h1>One revolution, <em>fourteen frames.</em></h1>\n  <p class="caption">FRAME 07 · the horse runs · slit at 2 mm</p>\n  <button class="btn-primary">Turn the drum</button>\n</section>',
    accent: '#a8742c',
    motif: 'ticker-marquee',
    layout: 'magazine',
    useCases: ['Art Gallery', 'Film & TV', 'Education'],
    signatureCss: `.dv-card { border-radius: 2px; border: 1px solid #a8742c44; border-top: 2px solid #a8742c; background: #fffdf8; }
.dv-card::after { content: ''; position: absolute; inset: 0 6px auto 6px; height: 2px; background: repeating-linear-gradient(90deg, #2d2216 0 2px, transparent 2px 14px); }
.dv-hero h1 em { color: #a8742c; font-style: normal; }
.dv-btn-primary { border-radius: 2px; background: #2d2216; color: #f3efe7; border-top: 2px solid #a8742c; }
.dv-badge { background: #e2d9c8; color: #2d2216; border-radius: 2px; font-family: 'Courier Prime', monospace; }
.dv-stat strong { color: #a8742c; font-family: 'Rye', serif; }
.dv-media { border-radius: 2px; background: repeating-linear-gradient(90deg, #e2d9c8 0 14px, #f3efe7 14px 16px); }`,
    author: 'Julian Ashby',
    createdAt: '2026-09-25',
    popularity: 60,
  },
