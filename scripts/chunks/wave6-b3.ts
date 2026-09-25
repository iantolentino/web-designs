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
