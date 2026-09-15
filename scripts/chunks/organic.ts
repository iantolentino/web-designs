  {
    id: 'moss-and-stone',
    name: 'Moss & Stone',
    category: 'Organic',
    tags: ['moss', 'granite', 'lichen', 'quiet'],
    description: 'Granite patience and moss persistence in one quiet system.',
    designPhilosophy:
      'Things that grow slowly, made for interfaces that last. Granite gray carries the weight; moss green softens every edge; lichen copper marks what has weathered well. The page breathes at the pace of a forest floor.',
    designDetails:
      'Stone #edece6 ground with deep moss #5d7052, basalt #454a41, and lichen copper #a0623d. Young Serif rounds the headlines like river stones; Livvic keeps body text fresh and legible. Cards are moss-topped stones: stone bodies with a 4px moss cap. Rules are 1px granite; hover states bloom like spore prints.',
    colors: {
      primary: '#5d7052',
      secondary: '#454a41',
      accent: '#a0623d',
      neutral: '#d9d6cc',
      background: '#edece6',
      text: '#262a24',
    },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Livvic',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 58',
      lineHeights: 'Display 1.18, body 1.64',
      letterSpacing: 'Display 0, labels 0.05em',
    },
    components: {
      primary:
        'Moss #5d7052 button, 10px radius, stone text, weight 600; hover grows a soft spore-shadow beneath',
      secondary: 'Stone button with 1px basalt border; hover caps it with a moss top rule',
      tertiary: 'Copper-lichen link that spreads its underline like lichen, left to right',
      radius: '10px buttons, 14px cards with 4px moss caps — river-stone geometry',
      hover: 'Shadows bloom softly, 220ms ease-out; underlines spread like growth',
      cards: 'Stone cards: #f4f3ee with 4px moss cap, 14px radius, 26px padding, copper index marks',
      forms: 'Moss-bed inputs: inset #e6e4da with 2px basalt border, copper focus ring',
      navigation: 'Stone path nav: pill links on granite; the active step is moss with a copper end-cap',
      modals: 'Boulder overlay: stone sheet with a moss cap and rgba(38,42,36,.45) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 68 / 112 / 176',
      paddingScale: '20 / 32 / 52',
      grid: 'Centered 980px; feature boulders break to 2-col with 28px gaps',
    },
    motion: {
      pageLoad: 'Stones settle: 10px drop with soft landings, staggered 70ms',
      hoverStates: 'Bloom and spread only — 220ms, never springs',
      transitions: 'ease-out; growth has no snap',
      scroll: 'Moss caps fade in as cards enter, like growth on arrival',
    },
    accessibility:
      'Text on stone 12.3:1; moss on stone 5.1:1 at UI sizes; copper marks 4.8:1. Focus is a 2px copper ring. Moss caps are paired with real borders so cards never rely on subtle color alone. Reduced-motion settles stones instantly.',
    responsive:
      'Boulders stack under 760px; the stone path becomes a copper-stepped list. Display clamps 2rem→3.6rem.',
    codeExample:
      '<section class="forest-floor">\n  <h1>Slow growth,<br/><em>deep roots.</em></h1>\n  <button class="moss">Take root</button>\n</section>',
    accent: '#5d7052',
    motif: 'leaf-divider',
    layout: 'centered',
    useCases: ['Nonprofit', 'Health', 'Travel'],
    signatureCss: `
.dv-card { border-radius: 14px; background: #f4f3ee; border-top: 4px solid #5d7052; }
.dv-btn { border-radius: 10px; }
.dv-hero h1 { font-weight: 400; }`,
    author: 'Rowan Ashby',
    createdAt: '2026-08-28',
    popularity: 80,
  },
  {
    id: 'tide-pool',
    name: 'Tide Pool',
    category: 'Organic',
    tags: ['tide', 'coastal', 'anemone', 'tidal'],
    description: 'Low-tide wonder: kelp, anemone pink, and wet-stone calm.',
    designPhilosophy:
      'Look into a tide pool and the interface appears: layered shallows, one startling anemone, light refracting through salt water. Sections ebb and flow; content sits in pools; the cursor makes ripples.',
    designDetails:
      'Seafoam #f0f5f4 with tide teal #1f7a8c, wet stone #43565c, and anemone #e5989b. Familjen Grotesk holds the waterline headlines; Source Sans 3 keeps exploration copy clear. Cards are layered pools — concentric tints of the seafoam field with 1px tide rims. Wave underlines link back to the shore.',
    colors: {
      primary: '#1f7a8c',
      secondary: '#43565c',
      accent: '#e5989b',
      neutral: '#d5e4e2',
      background: '#f0f5f4',
      text: '#16323a',
    },
    typography: {
      displayFont: 'Familjen Grotesk',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 26 / 35 / 60',
      lineHeights: 'Display 1.14, body 1.62',
      letterSpacing: 'Display 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Tide-teal #1f7a8c button, 12px radius, seafoam text, weight 600; hover ripples a 3px concentric ring',
      secondary: 'Wet-stone button with 1px rim; hover pools a tide tint',
      tertiary: 'Anemone link with a wave underline that undulates once on hover',
      radius: '12px buttons, 18px pools — everything water-worn',
      hover: 'Ripple rings and wave ticks, 240ms ease-out; ripples are 2 rings max',
      cards: 'Layered pools: #f7fbfa with 1px rgba(31,122,140,.35) rim and an inner #e2efed shelf, 24px padding',
      forms: 'Tide-line inputs: 2px bottom rule in wet stone; focus floods the rule tide teal',
      navigation: 'Driftwood bar with pill links; the active link pools anemone',
      modals: 'Deepest pool: layered seafoam sheet with a tide rim and rgba(22,50,58,.5) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 72 / 120 / 184',
      paddingScale: '18 / 32 / 52',
      grid: '2-col pools with 26px gaps, 1140px max; heroes get a full-bleed shallows band',
    },
    motion: {
      pageLoad: 'The tide comes in: pools fill (opacity+scale .98→1) in shore order, 300ms',
      hoverStates: 'Ripples and wave ticks, 240ms',
      transitions: 'ease-in-out; tidal rhythm — slow in, slow out',
      scroll: 'Sections bob ±6px like float lines, damped',
    },
    accessibility:
      'Text on seafoam 11.8:1; tide teal 4.9:1 at 600 weight; anemone marks 3.2:1 — reserved for large decorative accents with text twins. Focus is a 2px tide ring. The bob pauses under reduced-motion; ripples render as static rings.',
    responsive:
      'Pools stack under 740px; driftwood bar folds into a tide-dot menu. Display clamps 2.1rem→3.75rem.',
    codeExample:
      '<section class="shallows">\n  <h1>What the tide<br/><em>left behind.</em></h1>\n  <button class="pool">Explore the pool</button>\n</section>',
    accent: '#1f7a8c',
    motif: 'wave-section',
    layout: 'split-hero',
    useCases: ['Travel', 'Education', 'Nonprofit'],
    signatureCss: `
.dv-card { border-radius: 18px; background: #f7fbfa; border: 1px solid rgba(31,122,140,.35); }
.dv-btn { border-radius: 12px; }
.dv-hero h1 { font-weight: 600; }`,
    author: 'Nerissa Cavendish',
    createdAt: '2026-08-20',
    popularity: 78,
  },
  {
    id: 'canopy-lodge',
    name: 'Canopy Lodge',
    category: 'Organic',
    tags: ['forest', 'lodge', 'ember', 'night'],
    description: 'A forest lodge after dark: cedar, embers, and lantern-lit copy.',
    designPhilosophy:
      'The lodge at night — deep forest quiet, one warm fire, trails marked for the morning. The interface hosts like a good lodge: dark, warm, unmistakably clear about where everything is. Ember light guides; pine keeps the peace.',
    designDetails:
      'Forest night #1c2620 with ember #d98e32, pine #3f5c46, and river-mist #a3b8c2. Merriweather opens the guestbook headers; Karla keeps trail notes readable in low light. Cards are log-cabin panels with 1px pine seams and ember kindling marks. Lantern glows back the primary actions.',
    colors: {
      primary: '#d98e32',
      secondary: '#3f5c46',
      accent: '#a3b8c2',
      neutral: '#2a3830',
      background: '#1c2620',
      text: '#efe9da',
    },
    typography: {
      displayFont: 'Merriweather',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 62',
      lineHeights: 'Display 1.2, body 1.62',
      letterSpacing: 'Display 0, trail labels 0.1em uppercase',
    },
    components: {
      primary:
        'Ember #d98e32 button, 8px radius, forest text, weight 700; hover stokes a lantern glow shadow',
      secondary: 'Pine panel button with 1px #3f5c46 seam; the seam embers on hover',
      tertiary: 'River-mist link with an ember trail-dash underline that walks on hover',
      radius: '8px buttons, 12px logs — cabin joinery',
      hover: 'Lantern glows bloom 200ms; trail dashes walk 300ms steps',
      cards: 'Log panels: #232f27 with 1px pine seam, 12px radius, 26px padding, ember kindling tick at the top-left',
      forms: 'Lantern-lit fields: inset #17201b with mist borders; focus embers the border',
      navigation: 'Trailhead bar with numbered trail links; the active trail is ember-marked',
      modals: 'Hearth overlay: log panel with an ember header glow and rgba(12,17,14,.7) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 68 / 112 / 176',
      paddingScale: '20 / 32 / 52',
      grid: '12-col 1160px; cabins alternate 7:5 guest-room spreads',
    },
    motion: {
      pageLoad: 'Lanterns light in sequence down the path, 90ms apart, then content arrives',
      hoverStates: 'Ember glows and walking dashes — 200ms, campfire patience',
      transitions: 'ease-out; warmth settles, never flickers fast',
      scroll: 'Trail numbers stay pinned until their section passes',
    },
    accessibility:
      'Text on forest night 12.9:1; ember 7.4:1. Focus is a 2px ember ring with a 2px offset. Lantern glows are decorative; state also changes border color. Sequence lighting collapses under reduced-motion.',
    responsive:
      'Guest-room spreads stack mist-first under 840px; the trailhead becomes an ember-numbered drawer. Display clamps 2rem→3.9rem.',
    codeExample:
      '<header class="lodge">\n  <p class="trail">TRAIL 3 · SUMMIT PATH</p>\n  <h1>Warm fire,<br/><em>wild morning.</em></h1>\n</header>',
    accent: '#d98e32',
    motif: 'numbered-steps',
    layout: 'hero-cards',
    useCases: ['Travel', 'Restaurant', 'Fitness'],
    signatureCss: `
.dv-card { background: #232f27; border: 1px solid #3f5c46; border-radius: 12px; }
.dv-btn { border-radius: 8px; }
.dv-btn-primary:hover { box-shadow: 0 0 18px rgba(217,142,50,.4); }`,
    author: 'Soren Blackthorn',
    createdAt: '2026-08-03',
    popularity: 77,
  },
  {
    id: 'glacier-air',
    name: 'Glacier Air',
    category: 'Organic',
    tags: ['glacier', 'arctic', 'frost', 'clean'],
    description: 'Arctic clarity: frost fields, steel-blue ice, aurora hints.',
    designPhilosophy:
      'The design inhales and the air comes out glacial. Frost-white fields, steel-blue ice masses, and one aurora-green hint on the horizon. Everything is clean, cold, and perfectly still — clarity as a natural force.',
    designDetails:
      'Frost #f2f7fa with arctic steel #33658a, ice #86bbd8, and aurora #6bbf8a. Jost cuts the ice with geometric headlines; Manrope keeps the thaw readable. Cards are ice sheets with 1px frost seams and 6px bevels of white. Aurora appears only as a thin top edge on the featured element — never as a fill.',
    colors: {
      primary: '#33658a',
      secondary: '#274b63',
      accent: '#6bbf8a',
      neutral: '#d8e6ee',
      background: '#f2f7fa',
      text: '#16324f',
    },
    typography: {
      displayFont: 'Jost',
      bodyFont: 'Manrope',
      scale: '13 / 15 / 17 / 20 / 25 / 33 / 56',
      lineHeights: 'Display 1.16, body 1.64',
      letterSpacing: 'Display 0.01em, labels 0.1em uppercase',
    },
    components: {
      primary:
        'Arctic-steel #33658a button, 6px radius, frost text, weight 600; hover chills a 2px ice inner ring',
      secondary: 'Ice-sheet button (#dfeaf1) with 1px steel seam; hover frosts white',
      tertiary: 'Steel link with an aurora edge that shimmers once on hover (single 400ms pass)',
      radius: '6px controls, 10px sheets — glacial cleavage lines',
      hover: 'Frost rings and single aurora passes, 200ms; nothing warm ever happens',
      cards: 'Ice sheets: #f8fbfd with 1px #d8e6ee seam and a 2px white top bevel, 24px padding; featured sheets carry the aurora top edge',
      forms: 'Frost-line inputs: 1px steel bottom rule; focus frosts the line to 2px',
      navigation: 'Ice-shelf bar with uppercase links; the active shelf is steel with an aurora under-edge',
      modals: 'Crevasse overlay: frost sheet with steel rim and rgba(22,50,79,.45) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 72 / 120 / 184',
      paddingScale: '18 / 32 / 52',
      grid: '12-col 1180px; reading measure 640px; ice masses split 5:7',
    },
    motion: {
      pageLoad: 'Frost creeps: sections reveal with a 2px ice edge growing outward, 280ms',
      hoverStates: 'Chill rings and aurora passes, 200ms',
      transitions: 'ease-in-out; glacial — deliberate, silent',
      scroll: 'Ice seams separate 4px as sections pass, like calving in slow motion',
    },
    accessibility:
      'Text on frost 10.9:1; steel on frost 5.6:1. Aurora edges are decorative and paired with border-color changes for state. Focus is a 2px steel ring. Aurora shimmer runs once per hover and never loops; reduced-motion renders it static.',
    responsive:
      'Ice masses stack under 820px; the shelf folds to a frost hamburger with steel rules. Display clamps 2rem→3.5rem.',
    codeExample:
      '<section class="icefield">\n  <h1>Thin air,<br/><em>thick clarity.</em></h1>\n  <button class="steel">Breathe</button>\n</section>',
    accent: '#33658a',
    motif: 'soft-shadows',
    layout: 'editorial',
    useCases: ['Health', 'Productivity', 'Photography'],
    signatureCss: `
.dv-card { border-radius: 10px; background: #f8fbfd; border: 1px solid #d8e6ee; box-shadow: inset 0 2px 0 #fff; }
.dv-btn { border-radius: 6px; }
.dv-card.featured { border-top: 3px solid #6bbf8a; }`,
    author: 'Ingrid Sørholt',
    createdAt: '2026-07-17',
    popularity: 75,
  },
  {
    id: 'harvest-table',
    name: 'Harvest Table',
    category: 'Organic',
    tags: ['farm', 'kitchen', 'barn', 'gathering'],
    description: 'A long farm table: barn red, honey, thyme, and second helpings.',
    designPhilosophy:
      'Everything good happens at a big wooden table. Barn-red doors, honey light, thyme sprigs, and place settings that make room for everyone. The interface feeds: generous portions, honest menus, and warmth you can taste.',
    designDetails:
      'Cream cloth #fbf3e4 with barn red #a63d2f, honey #cf9b3a, and thyme #586f47. Spectral sets the menu headers with old-world poise; Bitter writes the specials. Cards are place settings: cream plates with 2px barn rims and honey napkin accents. Rules are 1px butcher-paper; dividers are hand-drawn sprigs.',
    colors: {
      primary: '#a63d2f',
      secondary: '#6d4a2a',
      accent: '#cf9b3a',
      neutral: '#e9dcc2',
      background: '#fbf3e4',
      text: '#3a2d1a',
    },
    typography: {
      displayFont: 'Spectral',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 62',
      lineHeights: 'Display 1.18, body 1.6',
      letterSpacing: 'Display 0.01em, menu labels 0.08em uppercase',
    },
    components: {
      primary:
        'Barn-red #a63d2f button, 8px radius, cream text, weight 700; hover serves a honey underline pat of butter',
      secondary: 'Thyme button with cream text; hover honey-drips the border',
      tertiary: 'Walnut menu-dot link — · leading dot in honey, underline in thyme',
      radius: '8px buttons, 16px plates — turned-wood edges',
      hover: 'Butter melts and borders drip, 240ms ease-out; hearty, never sticky',
      cards: 'Place settings: #fffaf0 plates with 2px barn rim, 16px radius, 26px padding, honey napkin fold at the corner',
      forms: 'Order-slip fields: 1px butcher rules with honey focus and walnut ink',
      navigation: 'Menu board: walnut plank bar with cream course links; the active course is honey-marked',
      modals: 'Specials board overlay: chalk-cream sheet with barn frame and rgba(58,45,26,.5) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 72 / 120 / 184',
      paddingScale: '20 / 34 / 56',
      grid: '12-col 1200px; courses alternate full-width platters with 2-col place settings',
    },
    motion: {
      pageLoad: 'Plates are set: place settings arrive clockwise from the head, 80ms apart',
      hoverStates: 'Melts and drips at 240ms; comfort-food pacing',
      transitions: 'ease-out; nothing rushes a good meal',
      scroll: 'Course numbers arrive with a sprig divider that draws in',
    },
    accessibility:
      'Text on cream 11.1:1; barn red 6.9:1; thyme 5.4:1. Honey is decorative and always paired with text or borders for meaning. Focus is a 3px honey ring. Reduced-motion serves all plates at once.',
    responsive:
      'Platters and settings stack under 760px; the menu board rolls up into a honey drawer. Display clamps 2.1rem→3.9rem.',
    codeExample:
      '<section class="table">\n  <p class="course">COURSE II</p>\n  <h1>Set a long table,<br/><em>invite the block.</em></h1>\n</section>',
    accent: '#a63d2f',
    motif: 'big-stat-row',
    layout: 'magazine',
    useCases: ['Restaurant', 'Events', 'Nonprofit'],
    signatureCss: `
.dv-card { border-radius: 16px; background: #fffaf0; border: 2px solid #a63d2f; }
.dv-btn { border-radius: 8px; }
.dv-hero h1 { font-weight: 500; }`,
    author: 'Delphine Mercier',
    createdAt: '2026-07-14',
    popularity: 74,
  },
