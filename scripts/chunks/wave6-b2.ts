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
