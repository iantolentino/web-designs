import type { DesignSystem } from '../types'

export const organicDesigns: DesignSystem[] = [
  {
    id: 'nature-inspired',
    name: 'Nature-Inspired',
    category: 'Organic',
    tags: ['nature', 'forest', 'earth', 'calm', 'trail'],
    description: 'Forest greens and topographic calm for outdoor brands.',
    designPhilosophy:
      'A trail map you can read at a glance. Deep forest green, cream paper, topo-line textures, and Manrope’s sturdy clarity. Sturdy without being stiff — like good hiking boots: reliable, comfortable, unremarkable in the best way.',
    colors: {
      primary: '#2f4a3c',
      secondary: '#7ba05b',
      accent: '#c16e3f',
      neutral: '#e8e3d3',
      background: '#f7f4ec',
      text: '#25332a',
    },
    typography: {
      displayFont: 'Manrope',
      bodyFont: 'Manrope',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 56',
      lineHeights: 'Display 1.1, body 1.65',
      letterSpacing: 'Labels 0.1em uppercase, display -0.01em',
    },
    components: {
      primary: 'Solid #2f4a3c, cream text, radius 2px, padding 14px 28px, 600',
      secondary: '1px #2f4a3c border, transparent bg, forest text',
      tertiary: 'Forest text link with leaf icon and 2px underline on hover',
      radius: '2px buttons, 8px cards — sturdy, near-square',
      hover: '200ms darken + 1px lift; topo texture shifts slowly',
      cards: 'Cream-tinted white, 1px #d9d2bd border, radius 8px, padding 28px',
      forms: '2px radius inputs, 1px #c9c2ab borders, forest focus ring',
      navigation: 'Cream bar with forest text, topo texture at 1% opacity',
      modals: 'Cream sheet with 1px earth border and leaf corner decoration',
    },
    accent: '#2f4a3c',
    motif: 'leaf-divider',
    layout: 'split-hero',
    useCases: ['Travel', 'Fitness', 'Nonprofit'],
signatureCss: `
.dv-stage { background-image: repeating-radial-gradient(circle at 30% 40%, transparent 0 38px, rgba(47,74,60,.05) 38px 40px), repeating-radial-gradient(circle at 80% 70%, transparent 0 52px, rgba(47,74,60,.04) 52px 54px); }
.dv-hero h1 { font-weight: 800; }
.dv-card { background: #fffdf7; }
.dv-leaf { display: inline-block; animation: dv-sway 5s ease-in-out infinite; }
@keyframes dv-sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }`,
    author: 'Ana Reyes',
    createdAt: '2026-02-18',
    popularity: 83,
  },
  {
    id: 'biophilic',
    name: 'Biophilic',
    category: 'Organic',
    tags: ['wellness', 'flowing', 'spa', 'curves', 'sage'],
    description: 'Spa serenity: sage, curves, and breathing-room rhythm.',
    designPhilosophy:
      'The interface inhales. Sage green and soft clay, blob and arch shapes, Cormorant’s elegance, and rhythm that mimics breathing — expand, hold, release. Built for wellness, spas, and anything that wants your shoulders to drop.',
    colors: {
      primary: '#5f7a5f',
      secondary: '#c9a227',
      accent: '#8faf8f',
      neutral: '#e9e9df',
      background: '#f4f4ea',
      text: '#3d4a3d',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Zilla Slab',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 60',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display 0, labels 0.14em uppercase',
    },
    components: {
      primary: 'Pill #5f7a5f, cream text, padding 14px 36px, 500, fills to #4a634a over 400ms',
      secondary: 'Pill with 1px #5f7a5f border, transparent, same patience',
      tertiary: 'Sage text link with slow underline draw, 400ms',
      radius: 'Pills, arches (999px 999px 0 0), blobs (60% 40% 55% 45%)',
      hover: 'Slow 400ms fills; nothing snaps; blobs morph slowly',
      cards: 'Cream cards with arch tops, 1px #d6d6c6 border, padding 32px',
      forms: 'Pill inputs with 1px sage borders, slow sage focus glow',
      navigation: 'Transparent over hero, pill links, sage active dot',
      modals: 'Arch-topped cream sheet, slow fade 500ms',
    },
    accent: '#5f7a5f',
    motif: 'wave-section',
    layout: 'centered',
    useCases: ['Health', 'Travel', 'Restaurant'],
signatureCss: `
.dv-orb { width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #cfe0cf, #8faf8f); animation: dv-breathe 4s ease-in-out infinite; margin-inline: auto; }
@keyframes dv-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
.dv-hero h1 { font-weight: 500; }
.dv-card { border-radius: 999px 999px 12px 12px; }
.dv-section + .dv-section { border-top: 1px solid #d6d6c6; }`,
    author: 'Ana Reyes',
    createdAt: '2026-03-08',
    popularity: 85,
  },
  {
    id: 'botanical',
    name: 'Botanical',
    category: 'Organic',
    tags: ['botanical', 'garden', 'vines', 'romantic', 'greenhouse'],
    description: 'Greenhouse romance: deep botanicals and vine ornaments.',
    designPhilosophy:
      'A Victorian greenhouse in web form. Deep botanical greens, rose accents, vine flourishes, and Cormorant italic display. Romantic without being frilly — think heritage seed catalogs with modern usability.',
    colors: {
      primary: '#1e3528',
      secondary: '#c76b7e',
      accent: '#7fa074',
      neutral: '#e5e2d2',
      background: '#f6f3ea',
      text: '#22301f',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'EB Garamond',
      scale: '12 / 15 / 17 / 21 / 28 / 38 / 58',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.01em, labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #1e3528, cream text, radius 2px, padding 14px 32px, 500, letter-spaced uppercase',
      secondary: '1px #1e3528 border, transparent, same metrics',
      tertiary: 'Rose italic text link with vine underline on hover',
      radius: '2px cards/buttons; vine flourishes are decorative only',
      hover: '200ms tint shifts; vine underline draws 300ms',
      cards: 'Seed-packet style: cream, 1px #22301f border, inner 4px matting border, plaque label top',
      forms: 'Underline inputs like ledger rows, deep green focus, small-caps labels',
      navigation: 'Cream bar with ✻ divider glyphs between links',
      modals: 'Cream sheet with double vine border and rose seal',
    },
    accent: '#1e3528',
    motif: 'leaf-divider',
    layout: 'magazine',
    useCases: ['Restaurant', 'E-commerce', 'Education'],
signatureCss: `
.dv-cultivar { font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #7fa074; }
.dv-hero h1 em { color: #c76b7e; }
.dv-card { border: 1px solid #22301f; box-shadow: inset 0 0 0 4px #f6f3ea, inset 0 0 0 5px rgba(34,48,31,.35); }
.dv-divider { color: #7fa074; letter-spacing: .5em; text-align: center; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-04-05',
    popularity: 80,
  },
  {
    id: 'moss-and-stone',
    name: 'Moss & Stone',
    category: 'Organic',
    tags: ['moss', 'granite', 'lichen', 'quiet'],
    description: 'Granite patience and moss persistence in one quiet system.',
    designPhilosophy:
      'Things that grow slowly, made for interfaces that last. Granite gray carries the weight; moss green softens every edge; lichen copper marks what has weathered well. The page breathes at the pace of a forest floor.',
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
]