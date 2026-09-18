import type { DesignSystem } from '../types'

/**
 * Wave 5 — twelve systems aimed at the catalog's thinnest website-type
 * buckets (crypto, fashion, fitness, photography, remote work, pets,
 * nonprofit, agency, real estate, news, kids, AI/ML) so the Website Type
 * filter keeps resolving to deep, real result sets.
 */

export const wave5Designs: DesignSystem[] = [
  {
    id: 'signal-spire',
    name: 'Signal Spire',
    category: 'Professional',
    tags: ['crypto', 'blockchain', 'ledger', 'on-chain', 'fintech', 'terminal'],
    description: 'On-chain finance with terminal discipline.',
    designPhilosophy:
      'Crypto products failed when they dressed speculation as play. Signal Spire borrows the gravity of a trading floor: monospaced figures, ledger-dark surfaces, and green/red truth-telling. Every number is a promise, so every number is set in a mono face with tabular figures. For exchanges, custody platforms, and on-chain analytics.',
    designDetails:
      'Obsidian #0b0f14 canvas with ledger-line hairlines, signal green #2fd47a and alert red #f0524f for deltas only. IBM Plex Mono for figures, Oxanium display for headings. Candlestick sparklines, block-height tickers, and address chips with truncation rules. Hairline 1px borders everywhere; glow reserved for live data.',
    colors: {
      primary: '#2fd47a',
      secondary: '#8b98a9',
      accent: '#f0524f',
      neutral: '#151b24',
      background: '#0b0f14',
      text: '#e6edf3',
    },
    typography: {
      displayFont: 'Oxanium',
      bodyFont: 'IBM Plex Mono',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 52',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Labels 0.12em uppercase; figures 0',
    },
    components: {
      primary: 'Solid #2fd47a, #0b0f14 text, radius 4px, mono label uppercase 0.08em',
      secondary: '1px #2b3644 border, transparent, #e6edf3 text',
      tertiary: 'Green text link with ↗ for external chains',
      radius: '4px controls, 6px cards — instrument-panel sharp',
      hover: 'Border brightens to green, 120ms; rows flash on update',
      cards: '#10161f panels, 1px #1d2733 border, hairline dividers, 20px padding',
      forms: 'Dark inputs, mono placeholder, green focus ring 2px',
      navigation: 'Top ledger bar with block-height ticker and hairline rule',
      modals: 'Instrument sheet, title bar with close ✕, hairline sections',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 48 / 96 / 160',
      paddingScale: '12 / 20 / 32',
      grid: 'Full-width 1360px; 12-col trading grid',
    },
    motion: {
      pageLoad: 'Rows cascade 30ms apart, 200ms each',
      hoverStates: 'Border + background brighten 120ms',
      transitions: 'Snappy ease-out, instrument-like',
      scroll: 'Ticker marquee 40s loop; sparklines draw on enter',
    },
    accessibility:
      '#e6edf3 on #0b0f14 15.2:1; green/red deltas paired with ▲▼ arrows (never color alone). Focus 2px #2fd47a. Live regions announce price updates politely.',
    responsive:
      'Trading grid becomes stacked order-book + chart under 900px. Tables collapse to cards. Mono figures never truncate mid-number.',
    codeExample:
      '<section class="book">\n  <h1>The ledger is <em>open.</em></h1>\n  <dl class="pair"><dt>ETH/USD</dt><dd>3,412.08 <span class="up">▲1.8%</span></dd></dl>\n  <button class="btn-signal">Trade now</button>\n</section>',
    accent: '#2fd47a',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['Crypto', 'Fintech', 'Developer Tools'],
    signatureCss: `.dv-card { background: #10161f; }
.dv-ticker { border-bottom: 1px solid #1d2733; font-family: 'IBM Plex Mono', monospace; }
.dv-up { color: #2fd47a; } .dv-down { color: #f0524f; }
.dv-hero h1 em { color: #2fd47a; font-style: normal; }
.dv-btn-primary { border-radius: 4px; }`,
    author: 'Ada Osei',
    createdAt: '2026-07-04',
    popularity: 79,
  },
  {
    id: 'maison-mode',
    name: 'Maison Mode',
    category: 'Luxury',
    tags: ['fashion', 'runway', 'editorial', 'lookbook', 'couture'],
    description: 'Runway silence, set in didone type.',
    designPhilosophy:
      'Fashion speaks in whitespace. Maison Mode is the lookbook before the lookbook: one garment per breath, a didone headline that never competes with the cloth, and navigation so quiet you discover it. For fashion houses, stylists, and editorial shops that sell restraint as hard as they sell silk.',
    designDetails:
      'Gallery white #faf9f7, ink #171513, blush #e8d5cc accents used once per view. DM Serif Display at enormous sizes, Karla body. Full-bleed lookbook imagery with caption side-notes, hairline-framed product plates, and a whisper-thin 1px rule system. Numbers are Roman-numeraled.',
    colors: {
      primary: '#171513',
      secondary: '#8a8378',
      accent: '#e8d5cc',
      neutral: '#efece7',
      background: '#faf9f7',
      text: '#171513',
    },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Karla',
      scale: '15 / 17 / 19 / 24 / 32 / 46 / 72',
      lineHeights: 'Display 1.05, body 1.7',
      letterSpacing: 'Display -0.01em; labels 0.22em uppercase',
    },
    components: {
      primary: 'Solid #171513, gallery text, radius 0, wide 18px 44px padding, 500',
      secondary: '1px #171513 border underline style, transparent',
      tertiary: 'Ink text link with long em-dash on hover',
      radius: '0 everywhere — tailoring has no round corners',
      hover: 'Image scales 1.02 inside frame, 600ms; caption slides up',
      cards: 'Frameless images with 1px plate borders, generous captions',
      forms: 'Bottom-border-only inputs, centered text, ink caret',
      navigation: 'Hairline top bar, centered wordmark, drop-cap menu',
      modals: 'Full-bleed plate with margin notes and ✕ in corner',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 64 / 120 / 200',
      paddingScale: '24 / 48 / 80',
      grid: 'Editorial 1240px with 2-col lookbook rhythm',
    },
    motion: {
      pageLoad: 'Images reveal via clip-path, 700ms staggered',
      hoverStates: 'Slow zoom + caption reveal, 600ms',
      transitions: 'Linear, unhurried, runway-calm',
      scroll: 'Parallax plates at 0.96x; rules stay fixed',
    },
    accessibility:
      '#171513 on #faf9f7 15.8:1. Focus 2px ink outline. Whitespace is decorative — all text passes contrast with margin to spare.',
    responsive:
      'Lookbook stacks to single column; captions move below plates. Display clamps 3rem→4.5rem. Menu collapses to quiet drawer.',
    codeExample:
      '<section class="plate">\n  <h1>Collection <span class="rn">IV</span></h1>\n  <figure><img src="look-01.jpg" alt="Wool overcoat, back view" /><figcaption>Look 01 — wool &amp; silence</figcaption></figure>\n  <button class="btn-maison">View lookbook</button>\n</section>',
    accent: '#e8d5cc',
    motif: 'serif-italic-hero',
    layout: 'editorial',
    useCases: ['Fashion', 'Art Gallery', 'Portfolio'],
    signatureCss: `.dv-card { background: #ffffff; border: 1px solid #e5e0d8; }
.dv-hero h1 { font-family: 'DM Serif Display', serif; }
.dv-hero h1 em { font-style: italic; color: #8a8378; }
.dv-caption { letter-spacing: 0.22em; text-transform: uppercase; font-size: 11px; }
.dv-btn-primary { border-radius: 0; }`,
    author: 'Ines Farrugia',
    createdAt: '2026-07-06',
    popularity: 83,
  },
  {
    id: 'iron-cadence',
    name: 'Iron Cadence',
    category: 'Brutalism',
    tags: ['fitness', 'gym', 'training', 'strength', 'coaching'],
    description: 'A coach’s whistle, set in heavy type.',
    designPhilosophy:
      'Fitness design lies with gradients and fake energy. Iron Cadence tells the truth: massive slab numerals for reps and plates, chalk-white on iron grey, and copy that reads like a training block — sets, reps, rest. For gyms, strength coaches, and programs that respect the work.',
    designDetails:
      'Iron #17181a canvas, chalk #f2f0eb, plate-red #d33f2e for PRs and alerts. Alfa Slab One display, Source Sans 3 body. Rep-scheme tables, rest-timer rings, and plate-math graphics (45/25/10/5). Hard 6px shadows, square corners, uppercase everything short.',
    colors: {
      primary: '#f2f0eb',
      secondary: '#8c8f94',
      accent: '#d33f2e',
      neutral: '#24262a',
      background: '#17181a',
      text: '#f2f0eb',
    },
    typography: {
      displayFont: 'Alfa Slab One',
      bodyFont: 'Source Sans 3',
      scale: '15 / 17 / 20 / 25 / 34 / 48 / 68',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #d33f2e, chalk text, radius 0, 4px offset shadow #000, uppercase 700',
      secondary: '3px chalk border, transparent, chalk text, same shadow',
      tertiary: 'Chalk text link, plate-red underline slide',
      radius: '0 — every corner is a corner',
      hover: 'Shadow grows to 8px offset, translate -4px, 140ms',
      cards: '#1e2024 panels, 3px chalk border, hard shadow, plate headers',
      forms: 'Square inputs, 3px chalk border, red focus ring',
      navigation: 'Chalk top bar with iron text, active item plate-red underlined',
      modals: 'Iron sheet, chalk 3px border, WARM UP / WORK / COOL DOWN sections',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 48 / 88 / 144',
      paddingScale: '20 / 36 / 56',
      grid: 'Strongman 1160px; 2-col set/rep grids',
    },
    motion: {
      pageLoad: 'Blocks drop 12px and settle, 180ms staggered',
      hoverStates: 'Shadow push 140ms; timers tick smoothly',
      transitions: 'Fast, percussive, never bouncy',
      scroll: 'Rest timer rings count on enter; rules scroll with content',
    },
    accessibility:
      '#f2f0eb on #17181a 14.9:1; plate-red only for state, always with text. Focus 3px #d33f2e. Timers respect reduced-motion (static + numeric).',
    responsive:
      'Set/rep tables become cards under 720px. Display clamps 2.75rem→4.25rem. Shadow sizes halve on mobile.',
    codeExample:
      '<section class="block">\n  <h1>Week 1 · <em>Squat</em></h1>\n  <table class="scheme"><tr><td>5</td><td>× 225</td><td>rest 3:00</td></tr></table>\n  <button class="btn-iron">Start session</button>\n</section>',
    accent: '#d33f2e',
    motif: 'hard-shadows',
    layout: 'full-bleed',
    useCases: ['Fitness', 'Sports', 'Health'],
    signatureCss: `.dv-card { background: #1e2024; border: 3px solid #f2f0eb; box-shadow: 6px 6px 0 #000; }
.dv-hero h1 { font-family: 'Alfa Slab One', serif; text-transform: uppercase; }
.dv-btn-primary { border-radius: 0; box-shadow: 4px 4px 0 #000; }
.dv-pr { color: #d33f2e; }`,
    author: 'Marco Deluca',
    createdAt: '2026-07-08',
    popularity: 76,
  },
  {
    id: 'aperture-notes',
    name: 'Aperture Notes',
    category: 'Creative',
    tags: ['photography', 'gallery', 'film', 'darkroom', 'portfolio'],
    description: 'A contact sheet with captions worth reading.',
    designPhilosophy:
      'Photography sites either hide the images in chrome or drown them in it. Aperture Notes does neither: a darkroom-grey field, images at print size, and caption typography treated like a writer wrote it. For photographers, darkroom prints, zines, and anyone selling light.',
    designDetails:
      'Darkroom #1a1917 field, print-white #f4f1ea, amber #e0a458 safelight accent. Fraunces display, IBM Plex Sans body. Contact-sheet grids with frame numbers (▲24), print-border images (8px white), EXIF sidebars in mono, and a reading-rhythm caption block. Hover prints the negative.',
    colors: {
      primary: '#f4f1ea',
      secondary: '#9b968c',
      accent: '#e0a458',
      neutral: '#262420',
      background: '#1a1917',
      text: '#f4f1ea',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'IBM Plex Sans',
      scale: '14 / 16 / 18 / 23 / 30 / 42 / 60',
      lineHeights: 'Display 1.1, body 1.65',
      letterSpacing: 'Captions 0.04em; EXIF labels mono',
    },
    components: {
      primary: 'Solid #f4f1ea, darkroom text, radius 2px, 600',
      secondary: '1px #3a372f border, transparent, print text',
      tertiary: 'Amber text link with ▶ shutter click',
      radius: '2px controls, 4px print plates',
      hover: 'Print border widens to 12px, caption darkens, 300ms',
      cards: 'Print plates: white 8px border, shadow like paper on felt',
      forms: 'Underline inputs on grey, amber caret, mono notes',
      navigation: 'Frame-number strip; current frame ambered',
      modals: 'Light-table: full dark, print centered, EXIF aside',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 56 / 104 / 168',
      paddingScale: '20 / 40 / 64',
      grid: 'Contact sheet: auto-fill minmax(220px, 1fr)',
    },
    motion: {
      pageLoad: 'Prints fade from negative, 500ms staggered 60ms',
      hoverStates: 'Safelight amber warms the frame, 300ms',
      transitions: 'Smooth darkroom-dim easing',
      scroll: 'Contact sheet scrolls as one strip; captions settle',
    },
    accessibility:
      '#f4f1ea on #1a1917 14.1:1; amber reserved for non-text accents and links with underlines. Focus 2px amber. All images carry real captions.',
    responsive:
      'Contact sheet drops to 2-col then 1-col prints. EXIF asides move under captions. Print borders stay (identity).',
    codeExample:
      '<section class="sheet">\n  <h1>Field notes, <em>printed.</em></h1>\n  <figure class="print"><img src="frame-24.jpg" alt="Harbor fog, dawn" /><figcaption>▲24 — harbor fog, 1/125 f8</figcaption></figure>\n  <button class="btn-print">Order a print</button>\n</section>',
    accent: '#e0a458',
    motif: 'grain-overlay',
    layout: 'asymmetric',
    useCases: ['Photography', 'Art Gallery', 'Portfolio'],
    signatureCss: `.dv-card { background: #262420; }
.dv-print { background: #f4f1ea; padding: 8px; box-shadow: 0 10px 28px rgba(0,0,0,.5); }
.dv-hero h1 em { color: #e0a458; font-style: italic; }
.dv-exif { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #9b968c; }`,
    author: 'Yusuf Kaya',
    createdAt: '2026-07-10',
    popularity: 81,
  },
  {
    id: 'async-rally',
    name: 'Async Rally',
    category: 'Playful',
    tags: ['remote-work', 'distributed', 'standup', 'timezone', 'team'],
    description: 'Distributed work without the beige.',
    designPhilosophy:
      'Remote-work tools all bought the same purple gradient. Async Rally is what distributed teams actually feel like: overlapping timezones as a rally route, hand-stickered standup boards, and copy with a pulse. Friendly enough for a 7am standup, honest enough for a retro. For remote-first teams, retreats, and async tooling.',
    designDetails:
      'Route-cream #fdf6ec, rally-blue #2563a8, sticker-yellow #f5b31b, mark-green #3a9e63. Baloo 2 display, Nunito body. Timezone ribbons (repeating-linear-gradient bands), hand-drawn arrows (border-radius elbows), sticker rotations (-2°/1.5°), and emoji-free status chips with dot language.',
    colors: {
      primary: '#2563a8',
      secondary: '#3a9e63',
      accent: '#f5b31b',
      neutral: '#f3e9d8',
      background: '#fdf6ec',
      text: '#33302a',
    },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Nunito',
      scale: '15 / 17 / 19 / 24 / 30 / 40 / 56',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display 0; chips 0.04em',
    },
    components: {
      primary: 'Solid #2563a8, cream text, radius 14px, 700, 3px bottom shadow #1c4c83',
      secondary: '2px #2563a8 border, cream, blue text, radius 14px',
      tertiary: 'Blue text link, green ✓ appears on done',
      radius: '16px controls, 20px cards — rally-flag round',
      hover: 'Cards tilt -1° and lift, 200ms; stickers wobble',
      cards: 'Cream cards, 2px #e4d5bc border, sticker header row',
      forms: 'Rounded inputs, 2px blue border, yellow focus ring',
      navigation: 'Route ribbon with timezone bands and flag dots',
      modals: 'Postcard sheet with stamp corner and dashed airmail border',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 48 / 88 / 140',
      paddingScale: '20 / 36 / 56',
      grid: 'Rally 1120px; standup board 3-col',
    },
    motion: {
      pageLoad: 'Cards drive in from left 24px, 260ms staggered',
      hoverStates: 'Tilt + lift 200ms; flags wave 1.8s loop',
      transitions: 'Springy but damped',
      scroll: 'Timezone ribbons scroll at 0.95x; flags parallax',
    },
    accessibility:
      '#33302a on #fdf6ec 11.9:1; blue on cream 6.4:1. Status never color-only (dot + word). Focus 3px #2563a8. Stickers are aria-hidden.',
    responsive:
      'Standup board stacks under 860px. Timezone ribbons go horizontal-scroll. Stickers lose rotation under 480px (legibility).',
    codeExample:
      '<section class="rally">\n  <h1>Standup, <em>wherever</em> you woke up.</h1>\n  <div class="ribbon">SF ● 9:04 — BER ● 18:04 — TYO ● 1:04</div>\n  <button class="btn-rally">Post update</button>\n</section>',
    accent: '#f5b31b',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Remote Work', 'Productivity', 'Community'],
    signatureCss: `.dv-card { background: #fffdf8; border: 2px solid #e4d5bc; border-radius: 20px; }
.dv-sticker { transform: rotate(-2deg); background: #f5b31b; border-radius: 8px; padding: 2px 10px; font-weight: 700; }
.dv-hero h1 em { color: #2563a8; font-style: normal; }
.dv-ribbon { background: repeating-linear-gradient(90deg, #f5b31b22 0 40px, transparent 40px 80px); }`,
    author: 'Priya Raman',
    createdAt: '2026-07-12',
    popularity: 78,
  },
  {
    id: 'kennel-and-co',
    name: 'Kennel & Co.',
    category: 'Organic',
    tags: ['pets', 'dogs', 'vet', 'adoption', 'warm'],
    description: 'Wet noses, warm type, zero baby-talk.',
    designPhilosophy:
      'Pet brands condescend with paw-print clip art. Kennel & Co. respects the animal and the owner: earthy linen field, intelligent serif display, and photography treated like portraiture. For shelters, vets, groomers, and pet food that reads like it was made by people with dogs.',
    designDetails:
      'Linen #f6f1e7, moss #6f7d54, clay #b96a4b, ink #3b362e. Young Serif display, Livvic body. Portrait-framed animal photography (arched tops), adoption cards as file-folder tabs, vet-record tables with paw-free iconography, and a warm dashed rule system.',
    colors: {
      primary: '#6f7d54',
      secondary: '#b96a4b',
      accent: '#e9dcc3',
      neutral: '#ece4d3',
      background: '#f6f1e7',
      text: '#3b362e',
    },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Livvic',
      scale: '15 / 17 / 19 / 24 / 31 / 42 / 58',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display 0; tabs 0.06em',
    },
    components: {
      primary: 'Solid #6f7d54, linen text, radius 999px 999px 999px 6px (moss-cornered), 600',
      secondary: '2px #6f7d54 border, transparent, moss text',
      tertiary: 'Clay text link with paw-free ❤ hover',
      radius: 'Arch cards (999px 999px 8px 8px); buttons moss-cornered',
      hover: 'Arch images tilt -1°, folder tab lifts, 220ms',
      cards: 'Linen panels with folder-tab headers, dashed #d8ccb2 rules',
      forms: 'Rounded inputs, 2px moss border, clay focus ring',
      navigation: 'Linen bar with folder-tab active states',
      modals: 'File-folder sheet, tab header, dashed dividers',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 48 / 88 / 144',
      paddingScale: '22 / 40 / 60',
      grid: 'Kennel 1100px; portrait cards 3-col',
    },
    motion: {
      pageLoad: 'Cards unzip from tab edge, 300ms staggered',
      hoverStates: 'Tab lift + arch tilt 220ms',
      transitions: 'Soft, warm, eager',
      scroll: 'Dashed rules scroll with content; arches static',
    },
    accessibility:
      '#3b362e on #f6f1e7 10.6:1; moss on linen 4.9:1 (large text + icons). Focus 3px #6f7d54. Arch crops never hide faces (safe-area).',
    responsive:
      'Portrait cards stack; arches keep safe area. Folder tabs become pill headers under 720px. Display clamps 2.5rem→3.6rem.',
    codeExample:
      '<section class="kennel">\n  <h1>Good dogs, <em>great</em> homes.</h1>\n  <article class="tab-card"><header>Biscuit · 4y</header><p>Knows “sit”, loves trains.</p></article>\n  <button class="btn-kennel">Meet the dogs</button>\n</section>',
    accent: '#e9dcc3',
    motif: 'soft-shadows',
    layout: 'hero-cards',
    useCases: ['Pets', 'Health', 'Nonprofit'],
    signatureCss: `.dv-card { background: #fbf7ee; border: 1px solid #e4d8bf; border-radius: 12px; }
.dv-arch { border-radius: 999px 999px 8px 8px; overflow: hidden; }
.dv-hero h1 em { color: #b96a4b; font-style: italic; }
.dv-tab { background: #e9dcc3; border-radius: 8px 8px 0 0; padding: 6px 16px; font-weight: 600; }`,
    author: 'Hana Sato',
    createdAt: '2026-07-14',
    popularity: 80,
  },
  {
    id: 'mutual-aid-press',
    name: 'Mutual Aid Press',
    category: 'Brutalism',
    tags: ['nonprofit', 'activism', 'community', 'zine', 'grassroots'],
    description: 'Grassroots print energy, zero corporate gloss.',
    designPhilosophy:
      'Nonprofit design apologizes. Mutual Aid Press doesn’t: photocopied textures, marching headline stacks, and donation asks set like headlines. It reads like the good kind of flyer — the one you actually keep. For mutual-aid networks, organizers, and community fridges.',
    designDetails:
      'Newsprint #f3efe4, ink #1c1a17, march-red #c8331f, stamp-blue #274b8f. Permanent Marker accents, Zilla Slab body, Bungee Shade display reserved for one line per page. Halftone texture (radial-gradient dot fields), torn-edge dividers (polygon clip), rubber-stamp CTAs with rotate(-2°).',
    colors: {
      primary: '#c8331f',
      secondary: '#274b8f',
      accent: '#e8dfc9',
      neutral: '#e6dfcd',
      background: '#f3efe4',
      text: '#1c1a17',
    },
    typography: {
      displayFont: 'Bungee Shade',
      bodyFont: 'Zilla Slab',
      scale: '15 / 17 / 20 / 25 / 34 / 46 / 64',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.02em; stamps 0.08em uppercase',
    },
    components: {
      primary: 'Solid #c8331f, newsprint text, radius 2px, 2px ink border + 4px offset shadow, rotate(-1deg)',
      secondary: '2px #1c1a17 border, transparent, ink text',
      tertiary: 'Ink text link, red marker underline',
      radius: '2px controls, 4px cards — photocopy honesty',
      hover: 'Stamp un-rotates to 0° and stamps down shadow, 160ms',
      cards: 'Newsprint panels, 2px ink border, halftone header strip',
      forms: 'Underline-only inputs, ink caret, red focus bar',
      navigation: 'Ink masthead bar, red active underline, marquee ticker option',
      modals: 'Flyer sheet, torn top edge, stamp corner “URGENT”',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 44 / 80 / 132',
      paddingScale: '18 / 32 / 52',
      grid: 'Flyer 1040px; 2-col agenda + actions',
    },
    motion: {
      pageLoad: 'Headline stacks march up 16px, 200ms staggered',
      hoverStates: 'Stamp press 160ms; marker underline draws',
      transitions: 'Fast, urgent, never smooth-jazz',
      scroll: 'Halftone fields static; torn edges scroll 0.97x',
    },
    accessibility:
      '#1c1a17 on #f3efe4 13.5:1; red on newsprint 5.1:1 (large/bold). Focus 3px #c8331f. Rotation never exceeds 2° (readability). Marker accents aria-hidden.',
    responsive:
      'Agenda stacks under 780px. Display line clamps to 2.25rem (Bungee Shade is loud). Stamps straighten under 480px.',
    codeExample:
      '<section class="flyer">\n  <h1>THE FRIDGE IS <em>FULL.</em></h1>\n  <p class="stamp">Take what you need · Leave what you can</p>\n  <button class="btn-aid">Volunteer tonight</button>\n</section>',
    accent: '#e8dfc9',
    motif: 'rotated-stickers',
    layout: 'manifesto',
    useCases: ['Nonprofit', 'Community', 'Events'],
    signatureCss: `.dv-card { background: #faf6ea; border: 2px solid #1c1a17; box-shadow: 4px 4px 0 #1c1a17; }
.dv-halftone { background: radial-gradient(#1c1a1722 1px, transparent 1.5px) 0 0 / 8px 8px; }
.dv-stamp { transform: rotate(-2deg); border: 2px solid #c8331f; color: #c8331f; padding: 4px 12px; }
.dv-hero h1 { font-family: 'Bungee Shade', cursive; }`,
    author: 'Rosie Achebe',
    createdAt: '2026-07-16',
    popularity: 74,
  },
  {
    id: 'studio-copperplate',
    name: 'Studio Copperplate',
    category: 'Luxury',
    tags: ['agency', 'studio', 'branding', 'consultancy', 'engraved'],
    description: 'An engraver’s agency: stations, not sections.',
    designPhilosophy:
      'Agencies promise transformation with stock photos of lightbulbs. Studio Copperplate presents like an engraving house: a stationery-grade grid, engraved-line ornaments, case studies filed as “stations”, and copy set with a steady hand. For brand studios, design consultancies, and anyone who invoices by the quarter-hour and earns it.',
    designDetails:
      'Wove #f7f5f0, engraving ink #221f1a, copper #9a5b33. Marcellus display, EB Garamond body. Engraved rules (double hairlines), station numerals (01 — Discovery), copper-foil chip accents, and a case-study ledger with ruled columns. Ornaments are structural, never decorative-only.',
    colors: {
      primary: '#221f1a',
      secondary: '#6d675c',
      accent: '#9a5b33',
      neutral: '#eae6dd',
      background: '#f7f5f0',
      text: '#221f1a',
    },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'EB Garamond',
      scale: '15 / 17 / 19 / 24 / 31 / 43 / 62',
      lineHeights: 'Display 1.15, body 1.72',
      letterSpacing: 'Display 0.02em; station labels 0.18em',
    },
    components: {
      primary: 'Solid #221f1a, wove text, radius 0, engraved double border, 500',
      secondary: '1px double #221f1a border, transparent, ink text',
      tertiary: 'Copper text link, hairline underline draw',
      radius: '0 everywhere — the plate is the plate',
      hover: 'Rule draws across, station numeral coppers, 280ms',
      cards: 'Wove plates with double-rule frames and station numerals',
      forms: 'Ruled inputs (baseline hairline only), ink caret',
      navigation: 'Masthead with double rules; stations as numbered tabs',
      modals: 'Engraved plate with margin notes and seal corner',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 60 / 112 / 180',
      paddingScale: '24 / 44 / 72',
      grid: 'Stationery 1200px; ruled 12-col with visible baselines',
    },
    motion: {
      pageLoad: 'Rules draw left-to-right 400ms; text settles 60ms later',
      hoverStates: 'Hairline draws, foil warms 280ms',
      transitions: 'Measured ease, engraver patience',
      scroll: 'Ruled baselines scroll with the sheet; numerals pin',
    },
    accessibility:
      '#221f1a on #f7f5f0 14.6:1; copper on wove 5.6:1. Focus 2px double outline. Ornament rules carry no meaning (aria-hidden).',
    responsive:
      'Ledger tables collapse to cards; station numerals stay. Display clamps 2.75rem→3.875rem. Double rules simplify to single under 480px.',
    codeExample:
      '<section class="station">\n  <h1>Brand, <em>engraved.</em></h1>\n  <dl class="ledger"><dt>01 — Discovery</dt><dd>Positioning, audits, appetite</dd></dl>\n  <button class="btn-copper">Open a station</button>\n</section>',
    accent: '#9a5b33',
    motif: 'dashed-borders',
    layout: 'editorial',
    useCases: ['Agency', 'Consulting', 'Portfolio'],
    signatureCss: `.dv-card { background: #ffffff; border: 1px solid #dcd6c9; box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 4px #dcd6c9; }
.dv-rule { border-top: 1px solid #221f1a; position: relative; }
.dv-rule::after { content: ''; position: absolute; inset: 3px 0 auto; border-top: 1px solid #221f1a66; }
.dv-hero h1 em { color: #9a5b33; font-style: normal; }`,
    author: 'Émile Fournier',
    createdAt: '2026-07-18',
    popularity: 77,
  },
  {
    id: 'parcel-and-key',
    name: 'Parcel & Key',
    category: 'Professional',
    tags: ['real-estate', 'property', 'listings', 'rental', 'maps'],
    description: 'Listings with the patience of a surveyor.',
    designPhilosophy:
      'Real-estate sites shout with red badges and countdowns. Parcel & Key works like a surveyor’s file: plat-map grids, lot-line rules, and listing cards that read like deeds. Trust comes from precision, not urgency. For brokerages, rental platforms, and land trusts.',
    designDetails:
      'Parchment #f4f2ec, surveyor green #3d6b4f, key brass #a9822f, ink #262b26. Cormorant Garamond display, IBM Plex Sans body. Plat-grid backgrounds (repeating-linear-gradient lot lines), listing cards with lot dims (52′ × 118′), map-pin chips, and deed-table data rows.',
    colors: {
      primary: '#3d6b4f',
      secondary: '#a9822f',
      accent: '#e4ddc9',
      neutral: '#e7e2d4',
      background: '#f4f2ec',
      text: '#262b26',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'IBM Plex Sans',
      scale: '15 / 16 / 18 / 23 / 30 / 41 / 58',
      lineHeights: 'Display 1.12, body 1.65',
      letterSpacing: 'Display 0; dims mono 0.02em',
    },
    components: {
      primary: 'Solid #3d6b4f, parchment text, radius 3px, 600',
      secondary: '1.5px #3d6b4f border, transparent, green text',
      tertiary: 'Brass text link with 🔑-free dot marker',
      radius: '3px controls, 5px cards — plat-line crisp',
      hover: 'Lot lines darken, card lifts 2px, 200ms',
      cards: 'Parchment listing plates, 1px #d4cdb8 border, plat-grid header',
      forms: 'Ruled inputs, green focus ring, mono for dims/prices',
      navigation: 'Survey bar with plat-tick active markers',
      modals: 'Deed sheet: title block, ruled table, seal corner',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 52 / 96 / 152',
      paddingScale: '22 / 40 / 64',
      grid: 'Plat 1180px; listings 3-col with map rail',
    },
    motion: {
      pageLoad: 'Listings file in 40ms apart, 220ms each',
      hoverStates: 'Plat grid warms, pin drops 3px, 200ms',
      transitions: 'Even, surveyor-steady',
      scroll: 'Map rail pins; plat background scrolls 0.98x',
    },
    accessibility:
      '#262b26 on #f4f2ec 12.8:1; green on parchment 6.1:1. Prices/dims in mono with labels (never symbol-only). Focus 2px #3d6b4f.',
    responsive:
      'Map rail becomes full-width sheet under 900px. Listing cards 2-col → 1-col. Dims wrap on hyphens, never truncate.',
    codeExample:
      '<section class="plat">\n  <h1>Ground, <em>properly</em> measured.</h1>\n  <article class="listing"><header>Lot 14 · Cedar Row</header><p>52′ × 118′ · 3 bed · $612k</p></article>\n  <button class="btn-parcel">Book a viewing</button>\n</section>',
    accent: '#e4ddc9',
    motif: 'swiss-grid',
    layout: 'hero-cards',
    useCases: ['Real Estate', 'Architecture', 'Booking'],
    signatureCss: `.dv-card { background: #fbf9f3; border: 1px solid #d4cdb8; }
.dv-plat { background: repeating-linear-gradient(0deg, #3d6b4f14 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, #3d6b4f14 0 1px, transparent 1px 32px); }
.dv-hero h1 { font-family: 'Cormorant Garamond', serif; }
.dv-dims { font-family: 'IBM Plex Mono', monospace; font-size: 12px; }`,
    author: 'Bram Verhoeven',
    createdAt: '2026-07-20',
    popularity: 75,
  },
  {
    id: 'deadline-gazette',
    name: 'Deadline Gazette',
    category: 'Retro',
    tags: ['news', 'press', 'morning-paper', 'columns', 'current-events'],
    description: 'The morning paper, rebuilt for the phone.',
    designPhilosophy:
      'News sites buried the front page under banners. Deadline Gazette restores it: a broadsheet grid that survives 390px, ink-on-newsprint palette, columns that actually column, and a live “STOP PRESS” strip. For newsrooms, newsletters, and local papers that still employ editors.',
    designDetails:
      'Newsprint #f6f3ea, ink #191713, press-red #b3271e, rule-blue #2c4a7c. Playfair Display headlines, Source Sans 3 body, Space Mono for timestamps. Column rules (1px ink), drop caps, kicker-deck-headline hierarchy, and a stop-press ticker with wire timestamps (14:02 GMT).',
    colors: {
      primary: '#191713',
      secondary: '#2c4a7c',
      accent: '#b3271e',
      neutral: '#e8e2d2',
      background: '#f6f3ea',
      text: '#191713',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Source Sans 3',
      scale: '15 / 16 / 18 / 22 / 28 / 40 / 60',
      lineHeights: 'Display 1.05, body 1.62',
      letterSpacing: 'Kickers 0.14em uppercase; decks 0',
    },
    components: {
      primary: 'Solid #191713, newsprint text, radius 0, 600, subscribe emphasis',
      secondary: '1px #191713 border, transparent, ink text',
      tertiary: 'Press-red headline links, blue section links',
      radius: '0 — the column is the column',
      hover: 'Headline underlines in press-red; columns hold still',
      cards: 'Rule-framed story blocks with kicker/deck slots',
      forms: 'Baseline-ruled inputs, ink caret, red focus bar',
      navigation: 'Masthead with date line + edition, section rule below',
      modals: 'Front-page plate: lead story + STOP PRESS strip',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 44 / 84 / 136',
      paddingScale: '18 / 34 / 56',
      grid: 'Broadsheet 1240px → 3-col → 1-col; column rules everywhere',
    },
    motion: {
      pageLoad: 'Columns set in 30ms stagger, like typesetting',
      hoverStates: 'Underline draws 180ms; ticker scrolls 45s',
      transitions: 'Crisp, print-quick',
      scroll: 'Masthead condenses to date line; rules persist',
    },
    accessibility:
      '#191713 on #f6f3ea 13.9:1. Wire timestamps in mono with full dates for screen readers. Focus 2px ink. Ticker is duplicable as static list.',
    responsive:
      'Broadsheet reflows 4→2→1 with rules intact. Drop caps keep 3-line height. Stop-press becomes static strip under 640px.',
    codeExample:
      '<section class="front">\n  <h1 class="lead">Council votes to <em>save</em> the arcade.</h1>\n  <p class="deck">Narrow win follows six-hour session; owners pledge repairs by spring.</p>\n  <button class="btn-gazette">Read the full story</button>\n</section>',
    accent: '#b3271e',
    motif: 'editorial-columns',
    layout: 'magazine',
    useCases: ['News', 'Publishing', 'Podcast'],
    signatureCss: `.dv-card { background: #fbf8ef; border: 1px solid #19171322; }
.dv-column { border-right: 1px solid #19171333; padding-right: 20px; }
.dv-kicker { font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: 0.14em; font-size: 11px; color: #b3271e; }
.dv-hero h1 { font-family: 'Playfair Display', serif; }`,
    author: 'Edith Marchetti',
    createdAt: '2026-07-22',
    popularity: 79,
  },
  {
    id: 'cosmo-explorers',
    name: 'Cosmo Explorers',
    category: 'Playful',
    tags: ['kids', 'space', 'learning', 'planets', 'family'],
    description: 'Learning at escape velocity (ages 6–10).',
    designPhilosophy:
      'Kids’ education design talks down or sugars up. Cosmo Explorers does neither: real space facts, chunky comet trails, missions instead of lessons, and type sturdy enough for small hands. For learning apps, children’s museums, and family science centers.',
    designDetails:
      'Deep-space #141b3d, comet-mint #7fe3c3, sun-yellow #ffcf4d, rocket-red #ff6b57. Fredoka display, Quicksand body. Planet-orbit progress rings, mission-patch badges (clip-path polygons), starfields (box-shadow stars), and comet-trail list markers. No gradients on text, ever.',
    colors: {
      primary: '#7fe3c3',
      secondary: '#ffcf4d',
      accent: '#ff6b57',
      neutral: '#232c56',
      background: '#141b3d',
      text: '#f4f6ff',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Quicksand',
      scale: '16 / 18 / 20 / 25 / 32 / 44 / 60',
      lineHeights: 'Display 1.2, body 1.7',
      letterSpacing: 'Display 0; mission labels 0.08em',
    },
    components: {
      primary: 'Solid #ffcf4d, #141b3d text, radius 999px, 700, 4px bottom shadow #b8912e',
      secondary: '3px #7fe3c3 border, transparent, mint text, radius 999px',
      tertiary: 'Mint text link with comet-trail underline',
      radius: '999px controls, 24px cards — nothing sharp in space',
      hover: 'Patch badges spin 8°, orbit rings pulse, 220ms',
      cards: '#1a2250 panels, 3px #2c376e border, mission-patch header',
      forms: 'Rounded inputs, 3px mint border, yellow focus glow',
      navigation: 'Orbit bar; active planet dots to the label',
      modals: 'Mission-briefing sheet with patch header + countdown chip',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 48 / 88 / 140',
      paddingScale: '22 / 40 / 60',
      grid: 'Launchpad 1080px; mission cards 2-col big',
    },
    motion: {
      pageLoad: 'Planets rise into orbit, 350ms staggered springs',
      hoverStates: 'Orbit pulse 220ms; patches spin once',
      transitions: 'Bouncy springs, damped 0.7',
      scroll: 'Starfield parallax 0.9x; comets streak on enter',
    },
    accessibility:
      '#f4f6ff on #141b3d 13.2:1; mint on deep-space 10.9:1. Focus 3px #ffcf4d. All motion springs off under reduced-motion. Facts never conveyed by color alone.',
    responsive:
      'Mission cards stack big; orbit rings scale to viewport. Starfield density halves under 480px (battery). Touch targets ≥ 52px.',
    codeExample:
      '<section class="mission">\n  <h1>Mission 04: <em>Io</em></h1>\n  <p>Io has 400 volcanoes. Your task: count the plumes.</p>\n  <button class="btn-cosmo">Begin mission</button>\n</section>',
    accent: '#ff6b57',
    motif: 'glow-pulse',
    layout: 'hero-cards',
    useCases: ['Kids', 'Education', 'E-learning'],
    signatureCss: `.dv-card { background: #1a2250; border: 3px solid #2c376e; border-radius: 24px; }
.dv-orbit { border: 2px dashed #7fe3c366; border-radius: 999px; }
.dv-stars { box-shadow: 120px 40px 0 1px #fff, 300px 90px 0 0 #fff8, 60px 200px 0 1px #fff6; }
.dv-hero h1 { font-family: 'Fredoka', sans-serif; }`,
    author: 'Nkechi Okafor',
    createdAt: '2026-07-24',
    popularity: 82,
  },
  {
    id: 'tensor-atlas',
    name: 'Tensor Atlas',
    category: 'Minimalism',
    tags: ['ai-ml', 'machine-learning', 'research', 'models', 'data'],
    description: 'Research papers, shipped as products.',
    designPhilosophy:
      'AI sites either cosplay sci-fi or bury the model behind gradients. Tensor Atlas reads like the paper it shipped: figure-first layouts, numbered claims, eval tables in the open, and type that behaves like a good preprint. For ML research teams, model hubs, and eval platforms.',
    designDetails:
      'Paper-white #fbfbfa, graphite #232323, eval-teal #0f766e, caution-amber #b45309. Fraunces display, IBM Plex Sans body, Space Mono for numbers. Figure blocks with numbered captions (Figure 3b), eval tables with hairline rules, confidence chips (±0.4), and a claim/evidence two-column rhythm.',
    colors: {
      primary: '#0f766e',
      secondary: '#b45309',
      accent: '#e7ebe9',
      neutral: '#e9e9e6',
      background: '#fbfbfa',
      text: '#232323',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'IBM Plex Sans',
      scale: '15 / 16 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.12, body 1.68',
      letterSpacing: 'Labels 0.1em uppercase; figures mono',
    },
    components: {
      primary: 'Solid #0f766e, paper text, radius 4px, 600',
      secondary: '1.5px #232323 border, transparent, graphite text',
      tertiary: 'Teal text link, dotted evidence underline',
      radius: '4px controls, 6px figure plates',
      hover: 'Figure caption darkens, eval row highlights, 180ms',
      cards: 'Figure plates: white, 1px #dedede border, numbered caption bar',
      forms: 'Baseline inputs, teal caret, mono numeric fields',
      navigation: 'Section-number rail (1. Intro, 2. Method…)',
      modals: 'Preprint plate: abstract block, figure, footnote rule',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 52 / 96 / 156',
      paddingScale: '20 / 40 / 64',
      grid: 'Two-column claim/evidence 1140px; figures full measure',
    },
    motion: {
      pageLoad: 'Figures fade with caption slide, 240ms staggered',
      hoverStates: 'Eval rows tint 180ms; chips settle',
      transitions: 'Plain, paper-like',
      scroll: 'Number rail tracks the section; figures pin briefly',
    },
    accessibility:
      '#232323 on #fbfbfa 14.7:1; teal on paper 5.3:1. Confidence always numeric (±), never color-only. Focus 2px #0f766e. Tables have proper headers.',
    responsive:
      'Claim/evidence stacks under 880px. Eval tables scroll in plates. Figure captions stay attached (never float).',
    codeExample:
      '<section class="figure">\n  <h1>Eval 2: <em>Long context.</em></h1>\n  <table class="eval"><tr><th>Model</th><th>Acc ±</th></tr><tr><td>Ours</td><td>91.2 ±0.4</td></tr></table>\n  <button class="btn-tensor">Read the paper</button>\n</section>',
    accent: '#e7ebe9',
    motif: 'numbered-steps',
    layout: 'editorial',
    useCases: ['AI/ML', 'Data & Analytics', 'Education'],
    signatureCss: `.dv-card { background: #ffffff; border: 1px solid #dedede; }
.dv-caption { border-top: 1px solid #dedede; font-size: 12px; color: #565656; padding-top: 8px; }
.dv-hero h1 { font-family: 'Fraunces', serif; }
.dv-eval { font-variant-numeric: tabular-nums; font-family: 'Space Mono', monospace; font-size: 13px; }`,
    author: 'Sofia Lindqvist',
    createdAt: '2026-07-26',
    popularity: 81,
  },
  {
    id: 'gilded-hour',
    name: 'Gilded Hour',
    category: 'Luxury',
    tags: ['wedding', 'events', 'celebration', 'invitation', 'gala'],
    description: 'An invitation you can almost feel the weight of.',
    designPhilosophy:
      'Event sites shout with countdowns. Gilded Hour invites: deckled-edge cards, gilt-line rules, and an RSVP flow that feels like correspondence. The palette is candlelight, the type is engraved, and nothing moves faster than a held breath. For weddings, galas, and milestone celebrations.',
    designDetails:
      'Candle #faf6ec, ink #2c2620, gilt #b08d3e, blush rose #d8a7a0. Cormorant Garamond display with true italics, EB Garamond body. Deckled edges (mask-image torn), gilt double rules, monogram seals (border-radius 50% with inset ring), and RSVP cards filed as correspondence.',
    colors: {
      primary: '#b08d3e',
      secondary: '#d8a7a0',
      accent: '#efe6d2',
      neutral: '#ece4d3',
      background: '#faf6ec',
      text: '#2c2620',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'EB Garamond',
      scale: '16 / 18 / 20 / 25 / 32 / 44 / 64',
      lineHeights: 'Display 1.1, body 1.75',
      letterSpacing: 'Display 0.01em; rules 0.22em uppercase',
    },
    components: {
      primary: 'Solid #2c2620, candle text, radius 0, gilt 1px inset ring, 500',
      secondary: '1px #b08d3e border, transparent, ink text, gilt hover fill',
      tertiary: 'Ink italic link with gilt underline on hover',
      radius: '0 corners; monogram seals circular',
      hover: 'Gilt ring brightens, deckle edges lift, 320ms',
      cards: 'Deckled correspondence cards with gilt double rules',
      forms: 'Ruled correspondence inputs, italic labels, gilt caret',
      navigation: 'Centered wordmark between gilt rules; events as tabs',
      modals: 'Invitation plate: monogram seal, date block, RSVP slit',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 64 / 116 / 188',
      paddingScale: '26 / 48 / 76',
      grid: 'Correspondence 1060px; single measured column with asides',
    },
    motion: {
      pageLoad: 'Cards settle like paper on a desk, 400ms',
      hoverStates: 'Gilt warms, edges lift 320ms',
      transitions: 'Slow, ceremonial',
      scroll: 'Parallax gilt rules 0.98x; seals static',
    },
    accessibility:
      '#2c2620 on #faf6ec 12.4:1; gilt on candle 3.9:1 (decorative rules only, never body text). Focus 2px double gilt. Dates in full prose (no numerals-only).',
    responsive:
      'Single column throughout; asides fold under. Deckle edges simplify under 640px (mask cost). Display clamps 2.75rem→4rem.',
    codeExample:
      '<section class="invite">\n  <h1>Together with <em>joy</em></h1>\n  <p class="date">Saturday, the twelfth of September</p>\n  <button class="btn-gilt">Respond by post</button>\n</section>',
    accent: '#efe6d2',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Wedding', 'Events', 'Hotel'],
    signatureCss: `.dv-card { background: #fffdf6; border: 1px solid #e6dcc4; box-shadow: 0 1px 0 #b08d3e55; }
.dv-gilt { border-top: 1px solid #b08d3e; position: relative; }
.dv-gilt::after { content: ''; position: absolute; inset: 3px 0 auto; border-top: 1px solid #b08d3e88; }
.dv-seal { border: 2px solid #b08d3e; border-radius: 999px; box-shadow: inset 0 0 0 3px #faf6ec, inset 0 0 0 4px #b08d3e; }
.dv-hero h1 em { font-style: italic; color: #b08d3e; }`,
    author: 'Margaux Delacroix',
    createdAt: '2026-07-28',
    popularity: 84,
  },
]
