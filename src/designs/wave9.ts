import type { DesignSystem } from '../types'

/**
 * Wave 9 — sixteen more systems built from aesthetics still missing from the
 * vault: constructivist print, pop-art halftone, Moroccan zellige, Venetian
 * glass, disco mirrorball, an FM dial, ukiyo-e woodblock, an apothecary
 * counter, beekeeping, a circus big top, an auction house, a flight deck,
 * a bioluminescent reef, a stamp album, woven tapestry, and art brut.
 *
 * Two new motifs ship with them: `diagonal-bars` (constructivist bands) and
 * `halftone-dots` (print-screen colour). Every design here uses a type pairing
 * that appears nowhere else in the catalog, so `audit-designs.cjs` reports no
 * identity overlaps against the existing 200.
 */

export const wave9Designs: DesignSystem[] = [
  {
    id: 'constructivist',
    name: 'Constructivist Press',
    category: 'Creative',
    tags: ['constructivist', 'propaganda', 'diagonal', 'print', 'revolution'],
    description: 'The diagonal is doing the arguing.',
    designPhilosophy:
      'Constructivism treated a poster as a machine: no ornament, one direction, maximum force. Constructivist Press keeps that discipline for the web — bands that run at an angle, type that is either enormous or tiny with nothing in between, and a red that appears because it is the point rather than because it is pretty. For campaigns, journals, and studios with something to say.',
    colors: { primary: '#c62828', secondary: '#111111', accent: '#1b5e20', neutral: '#e7e0d2', background: '#f4efe4', text: '#14110e' },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 21 / 30 / 44 / 68',
      lineHeights: 'Display 0.96, body 1.62',
      letterSpacing: 'Display -0.03em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #c62828, paper text, 0 radius, uppercase, padding 14px 26px',
      secondary: 'Solid #111, paper text, 0 radius',
      tertiary: 'Black link with a 2px underline',
      radius: '0 everywhere — nothing is rounded',
      hover: 'Plate offsets 4px on a hard 90ms shift',
      cards: 'Paper plates, 0 radius, 2px #14110e border, 3px 3px 0 #14110e, 24px padding',
      forms: 'Boxed inputs, 2px black border, red focus fill',
      navigation: 'Heavy black bar with a red index mark',
      modals: 'Full plate with a red title strip',
    },
    accent: '#c62828',
    motif: 'diagonal-bars',
    layout: 'poster',
    useCases: ['Publishing', 'Nonprofit', 'Agency'],
    signatureCss: `.dv-hero { position: relative; overflow: hidden; }
.dv-hero::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(108deg, #c62828 0 14px, transparent 14px 68px); opacity: .12; }
.dv-hero h1 { text-transform: uppercase; font-weight: 700; }
.dv-card { box-shadow: 3px 3px 0 #14110e; }
.dv-kicker { color: #c62828; }`,
    author: 'Mira Yakovleva',
    createdAt: '2026-09-27',
    popularity: 85,
  },
  {
    id: 'pop-print',
    name: 'Pop Print',
    category: 'Maximalism',
    tags: ['pop-art', 'halftone', 'warhol', 'comic', 'screenprint'],
    description: 'Benday dots and a raised voice.',
    designPhilosophy:
      'Pop art argued that a grocery can is a legitimate subject. Pop Print takes the printing screen seriously instead of ironically: halftone dots large enough to see, hard black outlines, and colours placed with no blending allowed. It is loud because comic covers are loud, not because contrast is trendy. For retail, merch, and entertainment.',
    colors: { primary: '#ee2e24', secondary: '#00a9e0', accent: '#ffd400', neutral: '#f6ecd2', background: '#fffdf5', text: '#111111' },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Archivo',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 64',
      lineHeights: 'Display 1.0, body 1.58',
      letterSpacing: 'Display -0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #ee2e24, white text, 4px radius, 3px #111 border, 4px 4px 0 #111',
      secondary: 'Solid #ffd400, ink text, 4px radius, 3px #111 border',
      tertiary: 'Cyan underlined link, 2px',
      radius: '4px controls, 8px cards — comic sharp',
      hover: 'Offset grows to 6px, 120ms ease-out',
      cards: 'White cards, 8px radius, 3px #111 border, 4px 4px 0 #111, 24px padding',
      forms: 'Bold inputs, 3px black border, yellow focus fill',
      navigation: 'Outlined bar with a starburst logo',
      modals: 'Panel with a dashed speech-balloon header',
    },
    accent: '#ee2e24',
    motif: 'halftone-dots',
    layout: 'bento',
    useCases: ['E-commerce', 'Events', 'Fashion'],
    signatureCss: `.dv-hero { background-image: radial-gradient(#ee2e2433 3px, transparent 3px); background-size: 14px 14px; }
.dv-card { border-width: 3px; border-color: #111; box-shadow: 4px 4px 0 #111; }
.dv-hero h1 em { color: #00a9e0; }
.dv-kicker { background: #ffd400; border: 2px solid #111; display: inline-block; padding: .2em .6em; }`,
    author: 'Bex Tanaka',
    createdAt: '2026-09-27',
    popularity: 89,
    trending: true,
  },
  {
    id: 'zellige-palace',
    name: 'Zellige Palace',
    category: 'Luxury',
    tags: ['zellige', 'moroccan', 'tile', 'craft', 'hospitality'],
    description: 'A courtyard, folded into eight points.',
    designPhilosophy:
      'Islamic tile work is a design system in the literal sense: one geometric rule generating infinite surface. Zellige Palace takes the eight-point star as a layout logic — nested frames, brass hairlines, and emerald held back so the pattern does the work. For hotels, heritage brands, and hospitality that wants to feel handmade.',
    colors: { primary: '#0f5f4a', secondary: '#0b3b30', accent: '#c9a227', neutral: '#eae4d4', background: '#f7f3e8', text: '#14201c' },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Quicksand',
      scale: '15 / 17 / 19 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.12, body 1.7',
      letterSpacing: 'Display 0.02em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #0f5f4a, cream text, 10px radius, 1px brass outline',
      secondary: '1px #c9a227 border, transparent, brass text',
      tertiary: 'Brass link with a hairline draw',
      radius: '10px controls, 16px cards, plus brass frames',
      hover: 'Frame brightens and lifts 2px, 220ms ease-out',
      cards: 'Cream cards, 16px radius, 1px #c9a22788 double frame, 30px padding',
      forms: '46px inputs, 10px radius, brass focus ring 3px',
      navigation: 'Quiet bar with a brass rule underneath',
      modals: 'Nested frame with a tiled corner motif',
    },
    accent: '#0f5f4a',
    motif: 'corner-brackets',
    layout: 'spotlight',
    useCases: ['Hotel', 'Booking', 'Architecture'],
    signatureCss: `.dv-stage { background-image: radial-gradient(#0f5f4a0f 1px, transparent 1px); background-size: 26px 26px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 { font-family: 'Marcellus', serif; }
.dv-hero h1 em { color: #c9a227; font-style: normal; }
.dv-kicker { color: #0f5f4a; }`,
    author: 'Nadia El-Amin',
    createdAt: '2026-09-27',
    popularity: 83,
  },
  {
    id: 'murano-glass',
    name: 'Murano Glass',
    category: 'Luxury',
    tags: ['glass', 'venice', 'jewel', 'craft', 'colour'],
    description: 'Colour that cooled into a shape.',
    designPhilosophy:
      'Murano glass is expensive because the window for working it is seconds. Murano Glass keeps that urgency in the surface: saturated jewel gradients, glossy edges, and a dark ground that lets colour carry. It is decorative without being fussy. For galleries, accessories, and premium retail.',
    colors: { primary: '#f08a24', secondary: '#b83b5e', accent: '#46c1c1', neutral: '#0d3439', background: '#062a2e', text: '#eef6f6' },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Jost',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.06, body 1.66',
      letterSpacing: 'Display -0.02em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Gradient #f08a24 → #b83b5e, white text, 999px pill, gloss highlight',
      secondary: '1px #46c1c1 border, transparent, aqua text',
      tertiary: 'Aqua link with a soft underline sweep',
      radius: '999px pills, 20px cards — blown glass',
      hover: 'Gloss sweep travels, 240ms ease-out',
      cards: 'Glass panels, 1px #ffffff1f border, 20px radius, inner highlight, 26px padding',
      forms: 'Dark inputs on #0d3439, aqua focus ring 3px',
      navigation: 'Floating glass bar with a light hairline',
      modals: 'Rounded sheet with a specular edge',
    },
    accent: '#f08a24',
    motif: 'gradient-hero',
    layout: 'split-hero',
    useCases: ['Art Gallery', 'E-commerce', 'Portfolio'],
    signatureCss: `.dv-card { background: #0d3439; }
.dv-split-visual, .dv-fake-ui { background: linear-gradient(140deg, #f08a24, #b83b5e); border-radius: 20px; }
.dv-hero h1 em { color: #46c1c1; font-style: normal; }
.dv-btn-primary { background: linear-gradient(90deg, #f08a24, #b83b5e); }`,
    author: 'Giovanni Ruzzini',
    createdAt: '2026-09-27',
    popularity: 84,
  },
  {
    id: 'mirrorball',
    name: 'Mirrorball',
    category: 'Playful',
    tags: ['disco', 'glitter', 'nightlife', 'chrome', 'party'],
    description: 'Nothing commits like a mirrorball.',
    designPhilosophy:
      'Disco design gets dismissed as tacky, which is exactly why it is honest. Mirrorball leans into chrome type, gold on plum, and light that never settles. It is for brands that admit they want to be watched. Nightlife, festivals, and retail with a stage.',
    colors: { primary: '#ff5db1', secondary: '#7c3aad', accent: '#f7c948', neutral: '#3a1f4d', background: '#2a1338', text: '#f2eef6' },
    typography: {
      displayFont: 'Monoton',
      bodyFont: 'Outfit',
      scale: '16 / 18 / 20 / 26 / 36 / 48 / 72',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.02em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #ff5db1, plum text, 999px pill, gold rim glow',
      secondary: '1px #f7c948 border, transparent, gold text',
      tertiary: 'Gold link with a sparkle ✓',
      radius: '999px pills, 20px cards',
      hover: 'Flare rotates 12°, 260ms ease-out',
      cards: 'Plum glass, 1px #ffffff26, 20px radius, radial flare, 26px padding',
      forms: 'Dark inputs, magenta focus ring 3px',
      navigation: 'Chrome bar that reflects the hero',
      modals: 'Glitter sheet with a gold rule',
    },
    accent: '#ff5db1',
    motif: 'glow-pulse',
    layout: 'full-bleed',
    useCases: ['Events', 'Streaming', 'Music'],
    signatureCss: `.dv-bleed-hero { background: radial-gradient(60% 60% at 50% 30%, #ff5db133, transparent 70%), linear-gradient(160deg, #7c3aad, #2a1338); }
.dv-card { background: #3a1f4d; }
.dv-hero h1 { font-family: 'Monoton', cursive; }
.dv-hero h1 em { color: #f7c948; font-style: normal; }`,
    author: 'Cleo Vasquez',
    createdAt: '2026-09-27',
    popularity: 86,
  },
  {
    id: 'fm-dial',
    name: 'FM Dial',
    category: 'Retro',
    tags: ['radio', 'analog', 'broadcast', 'dial', 'warm'],
    description: 'Turn until it sounds right.',
    designPhilosophy:
      'An analog dial is an interface you can feel: ticks, a sliding needle, warmth in the grain. FM Dial builds a browsing experience out of that — cream plastic, walnut, orange needle, and numbers set like a tuning scale. For podcasts, community radio, and audio products that value ritual.',
    colors: { primary: '#e2661f', secondary: '#4a3427', accent: '#1f6f8b', neutral: '#e7ddcb', background: '#f3ece0', text: '#1d1712' },
    typography: {
      displayFont: 'Bebas Neue',
      bodyFont: 'Livvic',
      scale: '15 / 17 / 19 / 23 / 30 / 42 / 60',
      lineHeights: 'Display 1.02, body 1.64',
      letterSpacing: 'Display 0.04em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #e2661f, cream text, 6px radius, tactile inset edge',
      secondary: '1px #4a3427 border, transparent, walnut text',
      tertiary: 'Walnut link with a needle sweep',
      radius: '6px controls, 14px cards — molded plastic',
      hover: 'Sweep along the button, 180ms ease-out',
      cards: 'Cream plastic cards, 14px radius, 1px #4a342733, 24px padding',
      forms: 'Recessed inputs, 6px radius, blue focus ring',
      navigation: 'Woodgrain bar with a tuning scale',
      modals: 'Radio-panel sheet with a station label',
    },
    accent: '#e2661f',
    motif: 'mono-labels',
    layout: 'catalog',
    useCases: ['Podcast', 'Streaming', 'Community'],
    signatureCss: `.dv-card { background: #fbf7ee; }
.dv-hero { border-bottom: 3px solid #4a3427; position: relative; }
.dv-hero::after { content: ''; position: absolute; left: 0; right: 0; bottom: -3px; height: 3px; background: repeating-linear-gradient(90deg, #4a3427 0 2px, transparent 2px 22px); }
.dv-hero h1 em { color: #e2661f; font-style: normal; }`,
    author: 'Gil Moreau',
    createdAt: '2026-09-27',
    popularity: 77,
  },
  {
    id: 'woodblock-wave',
    name: 'Woodblock Wave',
    category: 'Creative',
    tags: ['ukiyo-e', 'woodblock', 'washi', 'indigo', 'edition'],
    description: 'Ink, paper, and one clean pull.',
    designPhilosophy:
      'A woodblock print is an edition of the same gesture, repeated with slight difference — which is what a design system aspires to be. Woodblock Wave is quiet indigo on washi with a vermilion seal as the only permitted interruption. It rewards patience. For galleries, cultural institutions, and craft brands.',
    colors: { primary: '#1f3a63', secondary: '#2f5d8a', accent: '#c8442e', neutral: '#e9e2d3', background: '#f6f1e7', text: '#171a1f' },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 19 / 24 / 31 / 42 / 60',
      lineHeights: 'Display 1.1, body 1.72',
      letterSpacing: 'Display -0.01em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #1f3a63, washi text, 4px radius, seal-red accent mark',
      secondary: '1px #1f3a63 border, transparent, indigo text',
      tertiary: 'Indigo link with a drawn rule',
      radius: '4px controls, 8px cards',
      hover: 'Rule draws left to right, 220ms ease-out',
      cards: 'Washi cards, 8px radius, 1px #1f3a6333, 28px padding, deckle edge',
      forms: 'Underlined inputs with an indigo focus rule',
      navigation: 'Slim bar with a vermilion seal',
      modals: 'Paper sheet with a seal stamp',
    },
    accent: '#c8442e',
    motif: 'duotone-media',
    layout: 'editorial',
    useCases: ['Art Gallery', 'Publishing', 'Community'],
    signatureCss: `.dv-media { background: linear-gradient(150deg, #1f3a63, #c8442e); }
.dv-card { background: #fffdf7; }
.dv-hero h1 em { color: #c8442e; }
.dv-kicker::before { content: '印 '; color: #c8442e; }`,
    author: 'Kenji Arai',
    createdAt: '2026-09-27',
    popularity: 82,
  },
  {
    id: 'apothecary-counter',
    name: 'Apothecary Counter',
    category: 'Organic',
    tags: ['apothecary', 'herbal', 'botanical', 'remedy', 'vintage'],
    description: 'Everything has a tincture and a label.',
    designPhilosophy:
      'The apothecary is commerce disguised as knowledge — shelves, labels, and a person who knows which jar. Apothecary Counter brings that back for modern apothecary and wellness: label strips, amber glass, and copy that names ingredients rather than benefits. For herbal retail, clinics, and small-batch makers.',
    colors: { primary: '#2c5f4a', secondary: '#7a5230', accent: '#b3742a', neutral: '#eee6d6', background: '#f7f1e4', text: '#23201b' },
    typography: {
      displayFont: 'Zilla Slab',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 29 / 38 / 52',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display -0.01em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #2c5f4a, cream text, 4px radius, 1px amber edge',
      secondary: '1px #b3742a border, transparent, amber text',
      tertiary: 'Green link with a hairline underline',
      radius: '4px controls, 8px labels, 12px cards',
      hover: 'Label straightens, 160ms ease-out',
      cards: 'Cream cards, 12px radius, 1px #23201b33, 24px padding, shelf rule',
      forms: 'Labelled inputs with a green focus rule',
      navigation: 'Shelf bar with a dosage strip',
      modals: 'Label sheet with a bottle edge',
    },
    accent: '#b3742a',
    motif: 'tape-labels',
    layout: 'catalog',
    useCases: ['E-commerce', 'Clinic', 'Wellness'],
    signatureCss: `.dv-card { background: #fffdf6; border-left: 3px solid #2c5f4a; }
.dv-hero h1 em { color: #b3742a; }
.dv-label { color: #2c5f4a; }
.dv-kicker { background: #eee6d6; }`,
    author: 'Rosalind Cheung',
    createdAt: '2026-09-27',
    popularity: 78,
  },
  {
    id: 'apiary',
    name: 'The Apiary',
    category: 'Organic',
    tags: ['bees', 'honey', 'hexagon', 'pollinator', 'farm'],
    description: 'Honey is a supply-chain story.',
    designPhilosophy:
      'Beekeeping is a system of tiny hexagonal decisions. The Apiary leans on that geometry for structure while keeping the warmth of something handmade — honey amber, comb black, and body copy that explains the meadow behind the jar. For artisan food, farms, and conservation.',
    colors: { primary: '#e8a021', secondary: '#6a8f3c', accent: '#1c1813', neutral: '#f2e7cd', background: '#faf3e0', text: '#1c1813' },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Fredoka',
      scale: '16 / 18 / 20 / 24 / 31 / 42 / 58',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.06em uppercase',
    },
    components: {
      primary: 'Solid #e8a021, comb text, 8px radius, honeycomb edge',
      secondary: '1px #6a8f3c border, transparent, meadow text',
      tertiary: 'Meadow link with a leaf mark',
      radius: '8px controls, 14px cards',
      hover: 'Lift 2px and warm, 180ms ease-out',
      cards: 'Wax-cream cards, 14px radius, 1px #e8a02166, 24px padding',
      forms: 'Warm inputs, 8px radius, honey focus ring 3px',
      navigation: 'Wax bar with a hexagon mark',
      modals: 'Comb sheet with a honey rule',
    },
    accent: '#e8a021',
    motif: 'leaf-divider',
    layout: 'hero-cards',
    useCases: ['Agriculture', 'Grocery', 'Nonprofit'],
    signatureCss: `.dv-stage { background-image: radial-gradient(#e8a0211f 1.5px, transparent 1.5px); background-size: 22px 22px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 em { color: #6a8f3c; }
.dv-media { background: linear-gradient(140deg, #e8a021, #6a8f3c); }`,
    author: 'Faye Okonkwo',
    createdAt: '2026-09-27',
    popularity: 76,
  },
  {
    id: 'big-top',
    name: 'Big Top',
    category: 'Playful',
    tags: ['circus', 'carnival', 'stripe', 'show', 'fun'],
    description: 'Ladies and gentlemen, this is a website.',
    designPhilosophy:
      'The big top works because it makes promises before you go in. Big Top keeps that: red-and-cream stripes, ticket-stub borders, and type that shouts the headline before the fine print. It is theatrical on purpose. For festivals, family events, and anything selling a show.',
    colors: { primary: '#c8322b', secondary: '#16203c', accent: '#f4c430', neutral: '#f7e8cd', background: '#fdf4e3', text: '#16203c' },
    typography: {
      displayFont: 'Bangers',
      bodyFont: 'Rubik',
      scale: '16 / 18 / 20 / 25 / 34 / 46 / 68',
      lineHeights: 'Display 1.0, body 1.58',
      letterSpacing: 'Display 0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #c8322b, cream text, 6px radius, gold starburst corner',
      secondary: '2px #16203c border, transparent, midnight text',
      tertiary: 'Red link with a ticket notch',
      radius: '6px controls, 12px cards, ticket stubs at 0',
      hover: 'Tilt 1° and lift, 160ms ease-out',
      cards: 'Cream tickets, 12px radius, dashed 2px #c8322b55, 24px padding',
      forms: 'Bold inputs, 6px radius, gold focus ring',
      navigation: 'Striped canopy bar with a bell',
      modals: 'Ticket panel with perforation',
    },
    accent: '#c8322b',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Events', 'Kids', 'Sports'],
    signatureCss: `.dv-masthead { background: repeating-linear-gradient(90deg, #c8322b 0 18px, #fdf4e3 18px 36px); padding: 1.6em 1.4em; border-radius: 12px; }
.dv-card { background: #fffdf7; }
.dv-hero h1 em { color: #c8322b; }
.dv-kicker { color: #c8322b; }`,
    author: 'Cassidy Monroe',
    createdAt: '2026-09-27',
    popularity: 80,
  },
  {
    id: 'auction-house',
    name: 'Auction House',
    category: 'Luxury',
    tags: ['auction', 'lot', 'provenance', 'saleroom', 'collecting'],
    description: 'Lot 14. Sold to the phone at nine.',
    designPhilosophy:
      'An auction catalogue is the rare luxury format that is also a spreadsheet: lot numbers, provenance, estimates, and an outcome. Auction House keeps the hush of a saleroom while making the numbers the star. For resale, collectibles, and premium marketplaces.',
    colors: { primary: '#17150f', secondary: '#6f6656', accent: '#8c2f2f', neutral: '#e2dacb', background: '#f1ece2', text: '#17150f' },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #17150f, white text, 0 radius, uppercase gilt label',
      secondary: '1px #17150f border, transparent, ink text',
      tertiary: 'Gilt link with a hairline draw',
      radius: '0 controls, 2px cards — catalogue-sharp',
      hover: 'Gilt rule draws, 200ms ease-out',
      cards: 'White lot cards, 2px radius, 1px #17150f33, 26px padding, gilt lot number',
      forms: 'Underlined inputs with a gilt focus rule',
      navigation: 'Quiet bar with a lot ticker',
      modals: 'Lot sheet with a red SOLD stamp',
    },
    accent: '#8c2f2f',
    motif: 'editorial-columns',
    layout: 'spotlight',
    useCases: ['Marketplace', 'Art Gallery', 'E-commerce'],
    signatureCss: `.dv-card { background: #ffffff; border-top: 2px solid #17150f; }
.dv-hero h1 { font-family: 'DM Serif Display', serif; }
.dv-hero h1 em { color: #8c2f2f; font-style: normal; }
.dv-stat strong { font-variant-numeric: tabular-nums; }
.dv-kicker { color: #b08d57; }`,
    author: 'Eleanor Ashworth',
    createdAt: '2026-09-27',
    popularity: 79,
  },
  {
    id: 'flight-deck',
    name: 'Flight Deck',
    category: 'Professional',
    tags: ['aviation', 'cockpit', 'gauges', 'logistics', 'ops'],
    description: 'Instruments first, opinions second.',
    designPhilosophy:
      'A cockpit is a document with strict priorities: altitude, speed, heading, everything else. Flight Deck borrows that hierarchy for operations products — instrument numerals, amber for attention, teal for normal, and no layout that makes you search for a figure. For aviation, logistics, and industrial operations.',
    colors: { primary: '#39d6d0', secondary: '#93a1b1', accent: '#f0a721', neutral: '#141a20', background: '#0b0e11', text: '#e6edf2' },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 52',
      lineHeights: 'Display 1.14, body 1.6',
      letterSpacing: 'Display 0.01em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #39d6d0, cockpit-black text, 6px radius, uppercase mono',
      secondary: '1px #f0a721 border, transparent, amber text',
      tertiary: 'Cyan link with a ▸ chevron',
      radius: '6px controls, 10px panels',
      hover: 'Frame brightens, 120ms linear',
      cards: '#141a20 panels, 1px #232c35 border, 10px radius, 22px padding',
      forms: 'Dark inputs, cyan focus ring 2px, tabular figures',
      navigation: 'Top frame with a call-sign ticker',
      modals: 'Briefing panel with a stamped header',
    },
    accent: '#39d6d0',
    motif: 'scanlines',
    layout: 'dashboard',
    useCases: ['Logistics', 'Manufacturing', 'Data & Analytics'],
    signatureCss: `.dv-card { background: #141a20; }
.dv-kpi, .dv-stat { border: 1px solid #232c35; }
.dv-hero h1 { font-family: 'Chakra Petch', sans-serif; }
.dv-hero h1 em { color: #f0a721; font-style: normal; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Rui Almeida',
    createdAt: '2026-09-27',
    popularity: 81,
  },
  {
    id: 'bioluminescent-reef',
    name: 'Reef At Night',
    category: 'Organic',
    tags: ['underwater', 'bioluminescence', 'ocean', 'dark', 'wonder'],
    description: 'Turn off the lights and look closer.',
    designPhilosophy:
      'Underwater sites fail when they use surface design in deep water. Reef At Night is built for the dark: near-black blue, glow that comes from the organisms rather than from a shadow, and copy that reads like a dive log. For marine science, travel, and premium content.',
    colors: { primary: '#4fe0d8', secondary: '#1a6f7a', accent: '#ff7ad9', neutral: '#0a2532', background: '#04141d', text: '#dff6f6' },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Nunito',
      scale: '15 / 17 / 19 / 24 / 31 / 44 / 64',
      lineHeights: 'Display 1.08, body 1.7',
      letterSpacing: 'Display -0.02em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #4fe0d8, abyss text, 999px pill, soft glow',
      secondary: '1px #ff7ad9 border, transparent, pink text',
      tertiary: 'Reef-glow link with a soft bloom',
      radius: '999px pills, 18px cards',
      hover: 'Glow blooms +25%, 240ms ease-out',
      cards: '#0a2532 panels, 1px #4fe0d822, 18px radius, inner glow, 26px padding',
      forms: 'Deep inputs, teal focus ring 3px',
      navigation: 'Transparent bar that deepens on scroll',
      modals: 'Drift sheet with a glow edge',
    },
    accent: '#4fe0d8',
    motif: 'grain-overlay',
    layout: 'full-bleed',
    useCases: ['Travel', 'Education', 'Photography'],
    signatureCss: `.dv-bleed-hero { background: radial-gradient(50% 50% at 50% 40%, #4fe0d82e, transparent 70%), linear-gradient(160deg, #0a2532, #04141d); }
.dv-card { background: #0a2532; }
.dv-hero h1 em { color: #ff7ad9; font-style: normal; }
.dv-kicker { color: #4fe0d8; }`,
    author: 'Tomas Reefs',
    createdAt: '2026-09-27',
    popularity: 84,
  },
  {
    id: 'philatelic-album',
    name: 'Philatelic Album',
    category: 'Retro',
    tags: ['stamps', 'collecting', 'postage', 'album', 'archive'],
    description: 'Small squares, long histories.',
    designPhilosophy:
      'A stamp album is a grid with provenance — every cell has a number, a country, a year, and a reason. Philatelic Album takes that seriously for catalogs and archives: perforated edges, tabular metadata, and a rhythm of small, well-labelled objects. For collections, directories, and archival projects.',
    colors: { primary: '#7a2231', secondary: '#24406b', accent: '#c99b28', neutral: '#e0ddd4', background: '#eceae4', text: '#1a1714' },
    typography: {
      displayFont: 'Rubik Mono One',
      bodyFont: 'Source Sans 3',
      scale: '13 / 14 / 16 / 19 / 26 / 34 / 48',
      lineHeights: 'Display 1.1, body 1.66',
      letterSpacing: 'Display -0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #7a2231, white text, 2px radius, perforated top edge',
      secondary: '1px #24406b border, transparent, blue text',
      tertiary: 'Blue link with a catalogue number',
      radius: '2px controls, 4px stamps',
      hover: 'Stamp lifts 2px and straightens, 150ms',
      cards: 'Perforated cards, 4px radius, dashed mask, 1px #1a171433, 20px padding',
      forms: 'Boxed inputs, 2px radius, blue focus ring',
      navigation: 'Index bar with a country list',
      modals: 'Mount sheet with a catalogue stamp',
    },
    accent: '#7a2231',
    motif: 'dashed-borders',
    layout: 'magazine',
    useCases: ['Publishing', 'Marketplace', 'Education'],
    signatureCss: `.dv-card { background: #faf9f5; border-style: dashed; }
.dv-hero h1 { font-family: 'Rubik Mono One', monospace; }
.dv-hero h1 em { color: #24406b; font-style: normal; }
.dv-kicker { color: #7a2231; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Arthur Penhaligon',
    createdAt: '2026-09-27',
    popularity: 74,
  },
  {
    id: 'tapestry-weave',
    name: 'Tapestry & Weave',
    category: 'Organic',
    tags: ['textile', 'tapestry', 'folk', 'craft', 'warm'],
    description: 'Two threads, one long pattern.',
    designPhilosophy:
      'A tapestry looks ornamental and is actually structural: the pattern IS the weave. Tapestry & Weave takes folk textile logic — repeating bands, warm wool colours, and a rhythm you can feel without reading — and uses it to organise a page. For makers, heritage brands, and textiles.',
    colors: { primary: '#a8452e', secondary: '#2c3a63', accent: '#d9b06a', neutral: '#eee1cb', background: '#f4ead8', text: '#241c16' },
    typography: {
      displayFont: 'Bitter',
      bodyFont: 'EB Garamond',
      scale: '15 / 17 / 19 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.1, body 1.72',
      letterSpacing: 'Display -0.01em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #a8452e, oat text, 4px radius, woven edge pattern',
      secondary: '1px #2c3a63 border, transparent, indigo text',
      tertiary: 'Indigo link with a thread draw',
      radius: '4px controls, 8px cards',
      hover: 'Thread draws across, 200ms ease-out',
      cards: 'Oat cards, 8px radius, 1px #a8452e44, 26px padding, banded top',
      forms: 'Warm inputs, 4px radius, indigo focus ring 3px',
      navigation: 'Braided bar with a loom mark',
      modals: 'Folded panel with a woven rule',
    },
    accent: '#a8452e',
    motif: 'wave-section',
    layout: 'magazine',
    useCases: ['E-commerce', 'Fashion', 'Marketplace'],
    signatureCss: `.dv-masthead { background: repeating-linear-gradient(90deg, #a8452e 0 14px, #2c3a63 14px 28px, #d9b06a 28px 34px); height: 14px; border-radius: 7px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 em { color: #2c3a63; }
.dv-kicker { color: #a8452e; }`,
    author: 'Ida Martensson',
    createdAt: '2026-09-27',
    popularity: 77,
  },
  {
    id: 'outsider-art',
    name: 'Outsider Art',
    category: 'Creative',
    tags: ['art-brut', 'raw', 'handmade', 'eclectic', 'gallery'],
    description: 'No training required, just nerve.',
    designPhilosophy:
      'Art brut was defined by its distance from institutions — raw materials, private systems, no style guide. Outsider Art takes the amateur-rules credential seriously: hand-drawn marks, uneven baselines, and a layout that admits it was assembled by a person. For galleries, zine culture, and studios that distrust polish.',
    colors: { primary: '#ff6b1a', secondary: '#2f6bd8', accent: '#1b1a17', neutral: '#e7e1d6', background: '#f6f2ea', text: '#1b1a17' },
    typography: {
      displayFont: 'Permanent Marker',
      bodyFont: 'Livvic',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 64',
      lineHeights: 'Display 1.12, body 1.66',
      letterSpacing: 'Display 0; labels 0.08em uppercase',
    },
    components: {
      primary: 'Solid #ff6b1a, ink text, 10px radius, uneven hand-drawn edge',
      secondary: '2px #1b1a17 dashed border, transparent, ink text',
      tertiary: 'Blue-pencil link with a marker underline',
      radius: '10px controls, 14px cards — irregular on purpose',
      hover: 'Jitters 1° and lifts, 140ms',
      cards: 'Paper cards, 14px radius, 2px #1b1a1755, 24px padding, random tilt',
      forms: 'Rough inputs, 10px radius, orange focus ring 3px',
      navigation: 'Taped-up bar with a marker title',
      modals: 'Collage panel with a scribbled header',
    },
    accent: '#ff6b1a',
    motif: 'underline-accent',
    layout: 'asymmetric',
    useCases: ['Art Gallery', 'Publishing', 'Community'],
    signatureCss: `.dv-card { transform: rotate(.6deg); }
.dv-card:nth-child(even) { transform: rotate(-.8deg); }
.dv-card:hover { transform: rotate(0deg) translateY(-2px); }
.dv-hero h1 { font-family: 'Permanent Marker', cursive; }
.dv-hero h1 em { color: #2f6bd8; }`,
    author: 'Jonah Ferrier',
    createdAt: '2026-09-27',
    popularity: 85,
    trending: true,
  },
]
