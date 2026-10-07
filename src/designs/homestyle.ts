import type { DesignSystem } from '../types'

export const homestyleDesigns: DesignSystem[] = [
  {
    id: 'cottagecore',
    name: 'Cottagecore',
    category: 'Organic',
    tags: ['cottage', 'pastoral', 'gingham', 'handmade', 'rural'],
    description: 'Linen, wildflowers, and bread from the oven.',
    designPhilosophy:
      'The life we imagine when we close our eyes at a desk: linen drying in wind, jam in mismatched jars, a dog asleep on the draft excluder. Design that feels handmade — soft edges, gingham checks, botanical flourishes, and type with warmth instead of gloss. For farms, bakeries, craft marketplaces, and retreats.',
    colors: {
      primary: '#8a9b6e',
      secondary: '#b0575c',
      accent: '#f2d8a7',
      neutral: '#ede4d0',
      background: '#f8f3e7',
      text: '#4a4238',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Figtree',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.15, body 1.75',
      letterSpacing: 'Display 0, labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #8a9b6e, oatmeal text, radius 999px 999px 999px 4px (leaf-cornered), padding 14px 32px, 600',
      secondary: '2px dashed #8a9b6e border, transparent, sage text',
      tertiary: 'Berry text link with sprout ❀ on hover',
      radius: 'Leaf: 999px 999px 999px 4px buttons; 18px cards',
      hover: 'Gentle rise 3px + shadow bloom, 250ms; ornaments sway',
      cards: 'Cream panels, 1px #d9cdb4 border, scalloped top edge, padding 28px',
      forms: 'Rounded inputs, 2px sage borders, berry focus ring',
      navigation: 'Linen bar with gingham underline strip, sage active dot',
      modals: 'Paper sheet with scalloped edge and twine bow header',
    },
    accent: '#8a9b6e',
    motif: 'soft-shadows',
    layout: 'hero-cards',
    useCases: ['Restaurant', 'E-commerce', 'Education'],
    signatureCss: `
.dv-card { background: #fdfaf2; }
.dv-stats-band { background: repeating-conic-gradient(#f2d8a7 0% 25%, transparent 0% 50%) 50% / 22px 22px; opacity: .35; }
.dv-logo::before { content: '✿ '; color: #b0575c; }
.dv-hero h1 em { color: #b0575c; font-style: italic; }
.dv-btn-primary { border-radius: 999px 999px 999px 4px; }`,
    author: 'Ana Reyes',
    createdAt: '2026-06-29',
    popularity: 84,
  },
  {
    id: 'nordic-hygge',
    name: 'Nordic Hygge',
    category: 'Minimalism',
    tags: ['scandinavian', 'cozy-minimal', 'wool', 'warm-grey', 'calm'],
    description: 'Woollen minimalism: warm greys, soft light, exhale.',
    designPhilosophy:
      'Scandinavian design with the candles lit. The minimalism stays — clean forms, honest materials, no clutter — but the palette warms and the shadows soften. Everything invites you to stay a while. For wellness, D2C home goods, and services that promise calm without promising emptiness.',
    colors: {
      primary: '#c97b4a',
      secondary: '#6e675e',
      accent: '#e8b04b',
      neutral: '#dedad2',
      background: '#eceae5',
      text: '#2d2a26',
    },
    typography: {
      displayFont: 'Manrope',
      bodyFont: 'Mulish',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 52',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display -0.01em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #c97b4a, warm white #faf8f4 text, radius 999px, padding 14px 32px, 600, warm shadow 0 6px 18px rgba(201,123,74,.3)',
      secondary: '1px #c9c4ba border, warm white bg, charcoal text',
      tertiary: 'Charcoal text link with amber underline sweep on hover',
      radius: '20px buttons (pill), 24px cards, 14px inputs',
      hover: 'Lift 3px with warmer, larger shadow, 250ms ease-out',
      cards: 'Warm white #faf8f4, radius 24px, lamplight shadow 0 14px 40px rgba(45,42,38,.1), padding 32px',
      forms: 'Warm white inputs, 1px borders, amber focus ring',
      navigation: 'Transparent-to-solid scroll bar, pill links, amber active dot',
      modals: 'Warm white sheet, radius 28px, dimmed warm backdrop rgba(45,42,38,.4)',
    },
    accent: '#c97b4a',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['E-commerce', 'Health', 'SaaS'],
    signatureCss: `
.dv-btn-primary { box-shadow: 0 6px 18px rgba(201,123,74,.3); }
.dv-btn-primary:hover { box-shadow: 0 12px 28px rgba(201,123,74,.42); transform: translateY(-3px); }
.dv-card { background: #faf8f4; box-shadow: 0 14px 40px rgba(45,42,38,.1); }
.dv-media, .dv-feature-media { border-radius: 999px 999px 0 0; }`,
    author: 'Greta Hansen',
    createdAt: '2026-07-06',
    popularity: 86,
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    category: 'Luxury',
    tags: ['academia', 'library', 'oxford', 'candlelit', 'scholarly'],
    description: 'Candlelit libraries, worn leather, and marginalia.',
    designPhilosophy:
      'The library at closing time: brass lamps, leather chairs, Latin inscriptions. Romanticism for learning itself — typography that feels set by a university press, palettes of oxblood and oak, and texture that suggests centuries of use. For education, publishing, archives, and brands with a syllabus.',
    colors: {
      primary: '#6e1423',
      secondary: '#c5a253',
      accent: '#4a6b4f',
      neutral: '#2e2822',
      background: '#1e1a16',
      text: '#ede4d3',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Spectral',
      scale: '12 / 14 / 16 / 19 / 24 / 34 / 52',
      lineHeights: 'Display 1.1, body 1.75 — set for long reading',
      letterSpacing: 'Display 0.01em, mottos 0.24em small-caps',
    },
    components: {
      primary: 'Oxblood #6e1423 solid, cream text, radius 2px, padding 12px 30px, 500, letter-spaced',
      secondary: '1px rgba(237,228,211,.3) border, transparent',
      tertiary: 'Gold underlined link, footnote-style superscript on hover',
      radius: '2px — university presses do not round corners',
      hover: '300ms gold underline draws; leather textures deepen',
      cards: 'Oak panels with double-rule top border and gold corner fleurons ❦',
      forms: 'Underline inputs like ledger entries, gold focus, small-caps labels',
      navigation: 'Double-rule band with centered serif wordmark, small-caps links',
      modals: 'Manuscript panel with red-ink header rule and ❦ finial',
    },
    accent: '#6e1423',
    motif: 'quote-band',
    layout: 'editorial',
    useCases: ['Education', 'News', 'Nonprofit'],
    signatureCss: `
.dv-dropcap::first-letter, .dv-ed-lead::first-letter { font-size: 3.2em; color: #6e1423; font-weight: 700; }
.dv-motto { font-variant: small-caps; letter-spacing: .24em; color: #c5a253; }
.dv-card { background: #262019; border-top: 3px double #c5a253; }
.dv-card::before { content: '❦'; color: #c5a253; display: block; text-align: center; margin-bottom: 4px; font-size: .9em; }
.dv-hero h1 em { color: #c5a253; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-07-13',
    popularity: 87,
    trending: true,
  },
  {
    id: 'frontier-western',
    name: 'Frontier Western',
    category: 'Retro',
    tags: ['western', 'saloon', 'woodtype', 'rodeo', 'frontier'],
    description: 'Wanted posters and woodtype: rodeo typography.',
    designPhilosophy:
      'Main street, 1885. Woodtype posters, bandana red, rope borders, and letters tall enough to read off a horse. Modern inside: real hierarchy, real contrast, real buttons. For rodeos, BBQ joints, western wear, whiskey, and anyone selling authenticity by the yard.',
    colors: {
      primary: '#7d3320',
      secondary: '#6b3f23',
      accent: '#d9a441',
      neutral: '#e5d3ae',
      background: '#f2e3c8',
      text: '#3a2418',
    },
    typography: {
      displayFont: 'Rye',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.04em, labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #7d3320, parchment text, radius 4px, padding 14px 30px, 800, 3px #3a2418 border, shadow 4px 4px 0 #3a2418',
      secondary: 'Parchment bg, 3px border, same shadow',
      tertiary: 'Brown 700 link with ★ prefix and underline rope on hover',
      radius: '4px — hand-cut posters are almost square',
      hover: 'Press-flat like desert modern: translate + shadow shrink, 150ms',
      cards: 'Wanted-poster panels: double border, halftone corners, ★ corner badges',
      forms: '3px border inputs, parchment bg, red focus',
      navigation: 'Rope-border bar with woodtype logo and star separators',
      modals: 'Wanted-poster panel: "$REWARD$" header strip',
    },
    accent: '#7d3320',
    motif: 'hard-shadows',
    layout: 'hero-cards',
    useCases: ['Events', 'Restaurant', 'E-commerce'],
    signatureCss: `
.dv-hero h1 { font-family: 'Rye', serif; }
.dv-logo { font-family: 'Rye', serif; }
.dv-card { border: 3px double #3a2418; }
.dv-btn { box-shadow: 4px 4px 0 #3a2418; transition: transform .15s, box-shadow .15s; }
.dv-btn:hover { transform: translate(2px,2px); box-shadow: 1px 1px 0 #3a2418; }
.dv-kicker { color: #7d3320; letter-spacing: .18em; }`,
    author: 'Bea Solano',
    createdAt: '2026-07-20',
    popularity: 82,
  },
]
