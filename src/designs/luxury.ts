import type { DesignSystem } from '../types'

export const luxuryDesigns: DesignSystem[] = [
  {
    id: 'dark-luxury',
    name: 'Dark Luxury',
    category: 'Luxury',
    tags: ['dark', 'gold', 'jewel', 'premium', 'night'],
    description: 'Black velvet, champagne gold, quiet wealth.',
    designPhilosophy:
      'Wealth whispers. Deep velvet black, champagne-gold hairlines, and a display serif reserved for the few words that deserve them. Space is the real luxury: enormous padding, slow fades, and a singleCTA that appears only when you are ready.',
    colors: {
      primary: '#e7cf9f',
      secondary: '#3a3630',
      accent: '#8a6f2f',
      neutral: '#201d19',
      background: '#0d0b09',
      text: '#f5f0e6',
    },
    typography: {
      displayFont: 'Bodoni Moda',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 28 / 40 / 64',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.02em, labels 0.28em uppercase small-caps',
    },
    components: {
      primary: '1px #e7cf9f border, transparent bg, gold text, padding 16px 40px, letter-spaced uppercase, fills gold (text flips #0d0b09) on hover over 400ms',
      secondary: '1px rgba(245,240,230,.35) border, paper text, same patience',
      tertiary: 'Gold text link with hairline underline that draws slowly',
      radius: '0 — corners stay sharp like a folded tuxedo',
      hover: 'Slow 400ms fills; gold text brightens one step; nothing bounces',
      cards: 'Transparent with 1px rgba(212,175,55,.28) hairline, padding 40px, hover hairline brightens',
      forms: 'Bottom-hairline-only inputs, gold focus line, small-caps labels',
      navigation: 'Hairline-bottom nav, small-caps serif wordmark, tiny letter-spaced links',
      modals: 'Near-black panel with double gold hairline border, fade 500ms',
    },
    accent: '#e7cf9f',
    motif: 'glow-pulse',
    layout: 'centered',
    useCases: ['Fashion', 'Fintech', 'Real Estate'],
signatureCss: `
.dv-smallcaps { font-variant: small-caps; letter-spacing: .28em; color: #e7cf9f; }
.dv-hero h1 { letter-spacing: .02em; font-weight: 350; }
.dv-btn { transition: background .4s, color .4s; }
.dv-btn:hover { background: #e7cf9f; color: #0d0b09; }
.dv-section + .dv-section { border-top: 1px solid rgba(212,175,55,.25); }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-02-20',
    popularity: 93,
    trending: true,
  },
  {
    id: 'minimalist-luxury',
    name: 'Minimalist Luxury',
    category: 'Luxury',
    tags: ['gallery', 'art', 'white-space', 'serif'],
    description: 'A white-wall gallery with serif whispers.',
    designPhilosophy:
      'The page is a gallery wall. Everything unnecessary is removed; what remains is spaced like expensive art and labeled like a museum plaque. White does the talking; a single deep ink accent and hairline structure do the rest.',
    colors: {
      primary: '#1a1a1a',
      secondary: '#23405c',
      accent: '#23405c',
      neutral: '#efede8',
      background: '#fbfaf7',
      text: '#1a1a1a',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Karla',
      scale: '11 / 13 / 16 / 20 / 26 / 36 / 54',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Plaques 0.2em uppercase, display 0, body 0.01em',
    },
    components: {
      primary: 'Solid #1a1a1a, #fbfaf7 text, radius 0, padding 14px 36px, 500, letter-spaced uppercase',
      secondary: '1px #1a1a1a hairline, transparent, same patience',
      tertiary: 'Plaque-style text link with 0.2em tracking, underline on hover only',
      radius: '0',
      hover: '400ms opacity (0.7); buttons fill #23405c with paper text',
      cards: 'White plates with 1px #e5e2da border, 48px padding, plaque header',
      forms: 'Hairline bottom-border inputs, plaque labels, navy focus',
      navigation: 'Plaque-style top row: wordmark serif left, uppercase links right, hairline below',
      modals: 'White plate with 1px border and museum caption above content',
    },
    accent: '#23405c',
    motif: 'serif-italic-hero',
    layout: 'split-hero',
    useCases: ['Fashion', 'Photography', 'Portfolio'],
signatureCss: `
.dv-plaque { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: #23405c; }
.dv-hero h1 { font-weight: 400; }
.dv-card { background: #fff; border: 1px solid #e5e2da; }
.dv-btn:hover { background: #23405c; color: #fbfaf7; }`,
    author: 'Mara Lin',
    createdAt: '2026-01-30',
    popularity: 89,
  },
  {
    id: 'bold-luxury',
    name: 'Bold Luxury',
    category: 'Luxury',
    tags: ['fashion', 'contrast', 'editorial-lux', 'cream'],
    description: 'Fashion-house contrast: cream, ink, and one loud red.',
    designPhilosophy:
      'Luxury that raises its voice. Massive serif display at near-black on cream, one confident red for statements, and rules everywhere. It owes more to a fashion house lookbook than a tech landing page — drama with perfect manners.',
    colors: {
      primary: '#c1121f',
      secondary: '#141414',
      accent: '#c1121f',
      neutral: '#e7dfd0',
      background: '#f6f1e7',
      text: '#141414',
    },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Spectral',
      scale: '12 / 14 / 16 / 20 / 28 / 42 / 72',
      lineHeights: 'Display 1.0, body 1.65',
      letterSpacing: 'Display -0.01em, buttons 0.18em uppercase',
    },
    components: {
      primary: 'Solid #141414, cream text, radius 0, padding 18px 44px, 600, uppercase 0.18em, red flood-in from left on hover (400ms)',
      secondary: '1px #141414 border, transparent, same metrics',
      tertiary: 'Red italic Spectral link, underline on hover',
      radius: '0',
      hover: 'Red flood fills from left 400ms; card shadows deepen slightly',
      cards: 'Cream plates with double-rule top border, square, padding 32px',
      forms: 'Square inputs with 2px #141414 bottom borders, red focus, serif labels',
      navigation: 'Double-rule top band; serif wordmark; uppercase letter-spaced links',
      modals: 'Cream panel with double-rule frame, red close ×',
    },
    accent: '#c1121f',
    motif: 'serif-italic-hero',
    layout: 'magazine',
    useCases: ['Fashion', 'Music', 'Events'],
signatureCss: `
.dv-hero h1 em { color: #c1121f; font-style: italic; }
.dv-btn { position: relative; overflow: hidden; transition: color .4s; z-index: 0; }
.dv-btn::before { content: ''; position: absolute; inset: 0; background: #c1121f; transform: scaleX(0); transform-origin: left; transition: transform .4s; z-index: -1; }
.dv-btn:hover { color: #f6f1e7; }
.dv-btn:hover::before { transform: scaleX(1); }
.dv-section + .dv-section { border-top: 3px double #141414; }`,
    author: 'Camille Roth',
    createdAt: '2026-03-18',
    popularity: 91,
  },
  {
    id: 'champagne-noir',
    name: 'Champagne Noir',
    category: 'Luxury',
    tags: ['noir', 'champagne', 'velvet', 'evening'],
    description: 'After-dark luxury — espresso noir poured with champagne gold.',
    designPhilosophy:
      'Luxury at midnight. Noir surfaces swallow the room until champagne gold and one blush highlight mark what matters — the pour, the invitation, the name on the card. Everything else stays velvet-dark and unhurried.',
    colors: {
      primary: '#d9b47c',
      secondary: '#241b14',
      accent: '#c98a7d',
      neutral: '#37291e',
      background: '#171210',
      text: '#f4ead9',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Spectral',
      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',
      lineHeights: 'Display 1.12, body 1.66',
      letterSpacing: 'Display 0, labels 0.18em uppercase',
    },
    components: {
      primary:
        'Champagne foil button — gradient #e8cfa4→#c89a5e, noir text, 2px radius, weight 600; hover brightens the pour 200ms',
      secondary: 'Velvet button (#241b14) with 1px champagne border at 40%; hover pours to 100%',
      tertiary: 'Blush italic link with a hairline underline that glows candle-warm on hover',
      radius: '2px controls, 6px cards — crystal facets, kept subtle',
      hover: 'Foil brightens, rules pour in from 0→100% width, 220ms ease',
      cards: 'Matte boxes: #201812 with 1px rgba(217,180,124,.25) debossed edge, 28px padding, blush corner glow on the featured card',
      forms: 'Underline fields in champagne 35%; focus pours the rule to full gold with a small-caps floating label',
      navigation: 'Thin champagne rule nav with letterspaced small caps; the active link carries a foil dot',
      modals: 'Noir invitation card with double 1px champagne frame and rgba(10,7,5,.72) scrim',
    },
    accent: '#d9b47c',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Fashion', 'Events', 'Restaurant'],
    signatureCss: `
.dv-btn { border-radius: 2px; background: linear-gradient(100deg,#e8cfa4,#c89a5e); }
.dv-card { border: 1px solid rgba(217,180,124,.25); background: #201812; }
.dv-hero h1 em { background: linear-gradient(100deg,#e8cfa4,#c89a5e); -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic; }`,
    author: 'Ottilie von Falk',
    createdAt: '2026-08-16',
    popularity: 86,
    trending: true,
  },
  {
    id: 'pearl-hotel',
    name: 'Pearl Hotel',
    category: 'Luxury',
    tags: ['hotel', 'pearl', 'hospitality', 'marble'],
    description: 'Grand-hotel hospitality in pearl, marble gray, and quiet brass.',
    designPhilosophy:
      'The lobby at check-in: marble floors, pearl light, brass fixtures, and staff who never rush you. The interface hosts. Wayfinding is generous, imagery is framed like commissioned photography, and every interaction ends with a confirmation as courteous as a concierge.',
    colors: {
      primary: '#a08347',
      secondary: '#3a352a',
      accent: '#8fa5a0',
      neutral: '#e6e1d8',
      background: '#f7f4ef',
      text: '#262219',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 62',
      lineHeights: 'Display 1.18, body 1.6',
      letterSpacing: 'Display 0.01em, labels 0.12em uppercase',
    },
    components: {
      primary:
        'Aged-brass #a08347 button, 3px radius, pearl text, weight 600; hover buffs to #b3945a with a soft left key-light shadow',
      secondary: 'Marble button with 1px brass keyline and ink text; hover lifts 2px on the key light',
      tertiary: 'Ink link with a brass concierge underline that draws left→right',
      radius: '3px controls, 14px cards — grand-hotel millwork',
      hover: 'Key-light shadows bloom from the left, 240ms; never a bounce',
      cards: 'Marble panels: #fbf9f5, 1px rgba(160,131,71,.4) keyline, 14px radius, 28px padding, brass suite number top-right',
      forms: 'Check-in fields: white inset on marble, 1px #d8d2c6, focus ring brass 2px, labels small-caps above',
      navigation: 'Grand lobby bar: centered brass monogram, letterspaced links, thin double rule beneath',
      modals: 'Pearl concierge card with double brass rule header and rgba(38,34,25,.5) scrim',
    },
    accent: '#a08347',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Travel', 'Real Estate', 'Restaurant'],
    signatureCss: `
.dv-card { border-radius: 14px; border: 1px solid rgba(160,131,71,.4); background: #fbf9f5; }
.dv-btn { border-radius: 3px; }
.dv-hero h1 em { color: #a08347; font-style: italic; }`,
    author: 'Colette Amara',
    createdAt: '2026-08-09',
    popularity: 80,
  },
  {
    id: 'opera-box',
    name: 'Opera Box',
    category: 'Luxury',
    tags: ['opera', 'velvet', 'theatre', 'plum'],
    description: 'Velvet plum, gilt proscenium, and type that performs.',
    designPhilosophy:
      'Every page is a box seat. Velvet plum walls, gilt frames around the stars of the show, and a spotlight that moves with the cursor. Drama is choreographed: overtures fade, arias bloom, and the house lights never blind.',
    colors: {
      primary: '#cfa34c',
      secondary: '#3d1a2e',
      accent: '#b76e79',
      neutral: '#4a2439',
      background: '#2c1220',
      text: '#f5eddc',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',
      lineHeights: 'Display 1.1, body 1.62',
      letterSpacing: 'Display 0, programme 0.14em uppercase',
    },
    components: {
      primary:
        'Gilt #cfa34c button, 2px radius, velvet text, weight 700; hover raises a 6px spotlight shadow beneath',
      secondary: 'Velvet-deep button with 1px gilt border at 50%; the border sharpens on hover',
      tertiary: 'Rose italic link with gilt hairline; hover exchanges to ivory',
      radius: '2px controls, 4px frames — proscenium geometry',
      hover: 'Spotlight ring tightens around the hovered element, 200ms; curtains of color wipe 240ms',
      cards: 'Programme pages: #341727 with double 1px gilt frames (2px gap), 26px padding, rose act numbers',
      forms: 'Programme fields: underline on velvet, gilt focus rule, small-caps labels',
      navigation: 'Gilt double-rule bar with uppercase programme links; the active act is ivory',
      modals: 'House programme card with triple gilt rule header and rgba(20,8,15,.78) scrim',
    },
    accent: '#cfa34c',
    motif: 'serif-italic-hero',
    layout: 'magazine',
    useCases: ['Events', 'Music', 'Fashion'],
    signatureCss: `
.dv-card { border: 1px solid #cfa34c; outline: 1px solid rgba(207,163,76,.5); outline-offset: 2px; background: #341727; }
.dv-btn { border-radius: 2px; }
.dv-hero h1 em { color: #b76e79; font-style: italic; }`,
    author: 'Fiorella Marchetti',
    createdAt: '2026-07-31',
    popularity: 78,
  },
  {
    id: 'obsidian-atelier',
    name: 'Obsidian Atelier',
    category: 'Luxury',
    tags: ['obsidian', 'atelier', 'platinum', 'couture'],
    description: 'Couture black-on-black with platinum seams and a jeweler’s precision.',
    designPhilosophy:
      'A couture house after hours: obsidian surfaces on obsidian, separated only by platinum seams and the occasional gemstone accent. Craft shows in the seams — hairline rules, exact baselines, and jewelry-grade spacing that never approximates.',
    colors: {
      primary: '#c7c9d1',
      secondary: '#121215',
      accent: '#7d5ba6',
      neutral: '#232329',
      background: '#0c0c0e',
      text: '#eceef2',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 16 / 19 / 24 / 33 / 64',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.02em, labels 0.22em uppercase',
    },
    components: {
      primary:
        'Platinum seam button: transparent with 1px #c7c9d1 border, platinum text, weight 600; hover fills platinum with obsidian text in 260ms',
      secondary: 'Obsidian-on-obsidian button (#1a1a1f) whose seam brightens 15% on hover',
      tertiary: 'Atelier note link — 0.22em uppercase micro-label with a gem dot on hover',
      radius: '0px buttons, 2px cards — cut stone edges',
      hover: 'Seams brighten and fills pour like liquid metal, 260ms',
      cards: 'Seam panels: #121215 on #0c0c0e with 1px #232329 hairline, flush corners, 32px padding; the featured piece carries a 2px gem left rule',
      forms: 'Seam-field inputs: 1px hairline bottom, platinum focus, labels floating in micro-caps',
      navigation: 'Hairline top seam with 0.22em uppercase links; the current atelier carries a platinum underline at 1px exact',
      modals: 'Full-bleed obsidian with a platinum hairline frame and rgba(5,5,6,.8) scrim',
    },
    accent: '#c7c9d1',
    motif: 'mono-labels',
    layout: 'split-hero',
    useCases: ['Fashion', 'Portfolio', 'AI/ML'],
    signatureCss: `
.dv-card { background: #121215; border: 1px solid #232329; }
.dv-btn { border-radius: 0; border: 1px solid #c7c9d1; background: transparent; transition: background .26s ease; }
.dv-btn-primary:hover { background: #c7c9d1; color: #0c0c0e; }
.dv-kicker { letter-spacing: .22em; text-transform: uppercase; font-size: 11px; }`,
    author: 'Iva Reno',
    createdAt: '2026-08-24',
    popularity: 84,
  },
  {
    id: 'heritage-linen',
    name: 'Heritage Linen',
    category: 'Luxury',
    tags: ['heritage', 'linen', 'guild', 'olive'],
    description: 'Guild-hall heritage: linen paper, olive wax seals, engraved rules.',
    designPhilosophy:
      'A craft guild’s charter, typeset for the web. Linen paper, olive-gold wax, engraved copperplate rules, and crests that stand for real standards. Heritage is presented as provenance: every claim dated, every rule footnoted, nothing gilded dishonestly.',
    colors: {
      primary: '#7a6a2f',
      secondary: '#4a3f2a',
      accent: '#6e2b2b',
      neutral: '#ddd3ba',
      background: '#f3eee1',
      text: '#33291c',
    },
    typography: {
      displayFont: 'EB Garamond',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 58',
      lineHeights: 'Display 1.2, body 1.62',
      letterSpacing: 'Display 0.01em, small caps 0.12em',
    },
    components: {
      primary:
        'Olive-gold wax button — circular seal motif flattened to a plate, 2px radius, linen text, weight 600; press imprints 1px deeper',
      secondary: 'Charter button with double 1px walnut rules; hover inks the inner rule olive',
      tertiary: 'Footnote link with an oxblood superscript and dotted underline',
      radius: '2px controls, 3px pages; seals alone are circles',
      hover: 'Rules ink in and seals rotate −2°, 200ms; paper never lifts',
      cards: 'Charter pages: #f8f4e9 with double-rule top, crest corner marks, 28px padding, oxblood ribbon bookmark on featured',
      forms: 'Registry fields: 1px walnut rules with small-caps labels; focus re-inks olive',
      navigation: 'Copperplate rule bar with small-caps links and a centered crest; the active link carries a wax dot',
      modals: 'Charter sheet with a wax seal header and walnut scrim rgba(51,41,28,.5)',
    },
    accent: '#7a6a2f',
    motif: 'underline-accent',
    layout: 'editorial',
    useCases: ['Nonprofit', 'Education', 'Real Estate'],
    signatureCss: `
.dv-card { background: #f8f4e9; border-top: 3px double #7a6a2f; border-bottom: 1px solid #ddd3ba; }
.dv-btn { border-radius: 2px; }
.dv-hero h1 { font-variant: small-caps; }`,
    author: 'Alba Ferreiro',
    createdAt: '2026-07-26',
    popularity: 75,
  },
]