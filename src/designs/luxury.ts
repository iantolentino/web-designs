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
    designDetails:
      'Black #0d0b09 canvas with champagne-gold (#e7cf9f-family) 1px rules and small-caps serif labels. Bodoni Moda light weight for display with wide letter-spacing; IBM Plex Sans for function. Buttons are gold-bordered ghosts that fill on hover over 400ms — luxury is patient. Every section is separated by a gold hairline, never a box.',
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
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 48 / 96 / 192',
      paddingScale: '32 / 64 / 96',
      grid: '12-col, 1200px, but most sections use a centered 800px column',
    },
    motion: {
      pageLoad: 'Gold hairlines draw horizontally 800ms; text fades after',
      hoverStates: '400ms patience — fills, never lifts',
      transitions: 'Slow, weighted, 300–500ms ease-out',
      scroll: 'Sections fade up 16px over 700ms at 25% visibility',
    },
    accessibility:
      'Paper text on black 15.5:1; gold holds 4.6:1 on black at label sizes. Focus is a 2px gold outline offset 4px. Hairlines are decorative (aria-hidden); semantics never depend on color.',
    responsive:
      'Display clamps 2.5rem→4rem; hairlines remain. Padding steps 96→64→32. Under 640px nav becomes a minimal ✕/☰ hairline toggle.',
    codeExample:
      '<section class="atelier">\n  <p class="smallcaps">Collection No. 3</p>\n  <h1>Quiet objects,<br/>loud heritage.</h1>\n  <a class="ghost" href="#">View the collection</a>\n</section>',
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
    designDetails:
      'Off-white #fbfaf7 walls, ink #1a1a1a text, one deep-navy accent. Playfair Display at light weights for display; Karla for function. Museum-plaque labels (10px uppercase, 0.2em tracking) annotate everything. Images (if used) are framed by 1px rules and 64px breathing room. Hover = slow opacity shifts only.',
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
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 64 / 128 / 192',
      paddingScale: '24 / 48 / 64',
      grid: 'Centered 900px column; occasional asymmetric 2:1 plate layout',
    },
    motion: {
      pageLoad: 'Plates fade in sequentially, 500ms, 120ms stagger',
      hoverStates: 'Opacity shifts only, 400ms',
      transitions: 'Quiet and slow; nothing moves more than 8px',
      scroll: 'Plates reveal at 30% visibility with 24px rise, 600ms',
    },
    accessibility:
      'Ink on off-white 16.1:1; navy holds 8.9:1. Focus is a 2px navy outline offset 3px. All plaque labels are real text, aria-decorative rules are hidden.',
    responsive:
      'Single column under 820px; plate padding 48→24. Display clamps 2.25rem→3.375rem. Plaque labels stay 10px but gain letter-spacing relief to 0.14em on mobile.',
    codeExample:
      '<section class="plate">\n  <p class="plaque">Exhibit 01 — Oeuvre</p>\n  <h1>Considered objects for considered rooms.</h1>\n  <a class="link-quiet" href="#">Visit the gallery</a>\n</section>',
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
    designDetails:
      'Cream #f6f1e7 and ink #141414 in high contrast; one red (#c1121f-family) for emphasis words and active states. DM Serif Display for theatrical headlines; Spectral for body. Double rules (two 1px lines 4px apart) frame sections. Buttons are oversized squares with uppercase letter-spaced labels. Hover: red floods in from the left.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 160',
      paddingScale: '24 / 40 / 64',
      grid: '12-col 1240px; display text routinely bleeds into the gutter',
    },
    motion: {
      pageLoad: 'Headline words cascade with slight y-offset, 400ms',
      hoverStates: 'Red flood 400ms; underlines draw 200ms',
      transitions: 'Decisive 400ms ease; never playful easing',
      scroll: 'Double rules draw across as sections enter',
    },
    accessibility:
      'Ink on cream 15.9:1; red holds 5.9:1 large. Focus is a 3px red outline offset 2px. Red is never the only signal — always paired with underline or weight.',
    responsive:
      'Display clamps 3rem→4.5rem. Double rules persist at all sizes. Under 768px, buttons become full-width with the same flood hover.',
    codeExample:
      '<header class="house">\n  <h1>MAISON<br/><em>ROUGE</em></h1>\n  <p class="kicker">Autumn–Winter 2026</p>\n  <a class="btn-flood" href="#">The Collection</a>\n</header>',
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
    designDetails:
      'Espresso noir #171210 with champagne #d9b47c foil, blush #c98a7d candlelight, and cream #f4ead9 copy. Fraunces italic opens evenings; Spectral serves the details with engraved precision. Foil is applied as gradient text on the single headline per view; rules are 1px champagne at 25% opacity. Cards read like matte boxes with debossed edges.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 48 / 80 / 136 / 208',
      paddingScale: '20 / 36 / 56',
      grid: 'Centered 1020px with editorial 5:7 feature spreads; measure 640px',
    },
    motion: {
      pageLoad: 'The room lights up: foil text fades in first, cards follow at 80ms intervals',
      hoverStates: 'Foil brightens and rules pour — 220ms, never bouncy',
      transitions: 'ease-in-out with long tails; luxury never snaps',
      scroll: 'Sections candle-fade: 12px rise with a warm shadow bloom',
    },
    accessibility:
      'Cream on noir 13.9:1; champagne on noir 8.7:1. Foil gradients keep a 7:1 average contrast. Focus is a 2px champagne outline offset 3px. Gradient text has solid-color fallback via background-clip support queries.',
    responsive:
      'Spreads stack cream-first under 880px; the rule nav condenses to a champagne dot strip. Display clamps 2.2rem→4.1rem.',
    codeExample:
      '<header class="noir">\n  <p class="over">EVENING SERVICE</p>\n  <h1>The last pour<br/><em>of the season.</em></h1>\n</header>',
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
    designDetails:
      'Pearl #f7f4ef with marble #e6e1d8, ink #262219, and aged brass #a08347. Playfair Display writes the room numbers; Source Sans 3 handles the service copy. Cards are marble panels with 1px brass keylines and 14px radius — grand but not gilded. Shadows are soft key light from the left, always.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 44 / 76 / 128 / 200',
      paddingScale: '20 / 36 / 60',
      grid: '12-col 1220px; suite cards in 2-col rhythm with 28px gaps; measure 660px',
    },
    motion: {
      pageLoad: 'Doors open: hero curtain-fades, cards arrive in suite order, 90ms apart',
      hoverStates: 'Key lights and underline draws, 240ms — service pacing',
      transitions: 'ease-in-out; every motion ends at rest, never mid-gesture',
      scroll: 'Section headers arrive with a small brass rule extend',
    },
    accessibility:
      'Ink on pearl 12.8:1; brass on pearl 3.9:1 reserved for large text and keylines — button text is pearl on brass at 4.6:1. Focus is a 2px brass ring. Suite numbers decorative; real headings carry the semantics.',
    responsive:
      'Suite cards stack with brass numbers kept; the lobby bar folds into a monogram menu under 860px. Display clamps 2.1rem→3.9rem.',
    codeExample:
      '<header class="lobby">\n  <p class="wing">EAST WING · SUITE 12</p>\n  <h1>Arrive as a guest,<br/><em>leave as a regular.</em></h1>\n</header>',
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
    designDetails:
      'Velvet #2c1220 walls with gilt #cfa34c proscenium details, rose #b76e79 intermissions, and ivory #f5eddc programme copy. Cormorant Garamond italic performs headlines; Source Sans 3 sets the programme notes. Gilt appears as double-rule frames and a 2px spotlight ring on interactive elements. Backgrounds carry a barely-there radial spotlight.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 44 / 76 / 128 / 200',
      paddingScale: '20 / 32 / 52',
      grid: 'Centered 1000px; acts alternate full-bleed velvet with framed 2-col spreads',
    },
    motion: {
      pageLoad: 'Curtain rise: content fades up 16px with a spotlight sweep, 420ms',
      hoverStates: 'Spotlight rings and curtain wipes, 200–240ms',
      transitions: 'ease-in-out; arias bloom, never pop',
      scroll: 'Acts cross-fade like scene changes; no sliding scenery',
    },
    accessibility:
      'Ivory on velvet 12.4:1; gilt on velvet 7.2:1. Focus is a 2px gilt ring plus the spotlight ring for pointer users. The cursor spotlight is pointer-only and disabled under reduced-motion.',
    responsive:
      'Framed spreads stack gilt-frame-first under 860px; the programme bar becomes an act-select dropdown. Display clamps 2.2rem→4.4rem.',
    codeExample:
      '<section class="act">\n  <p class="act-no">ACT II</p>\n  <h1>The voice that<br/><em>holds the house.</em></h1>\n</section>',
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
    designDetails:
      'Obsidian #0c0c0e on #121215 with platinum #c7c9d1 hairlines and a single gem #7d5ba6 reserved for one jewel per view. Bricolage Grotesque 200-weight display whispers at huge sizes; Manrope handles the atelier notes. Cards differ from the background by 4% luminance and a 1px seam — luxury through precision, not contrast.',
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
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 48 / 84 / 140 / 216',
      paddingScale: '20 / 40 / 64',
      grid: '12-col 1140px with strict 24px gutter; hero spreads at 7:5',
    },
    motion: {
      pageLoad: 'Pieces are unveiled: opacity 0→1 over 480ms with a 1px seam draw',
      hoverStates: 'Liquid-metal fills at 260ms; seams brighten 180ms',
      transitions: 'cubic-bezier(.4,0,.2,1); measured as a fitting, not a fitting-room',
      scroll: 'Lookbook sections reveal with 20px parallax on the imagery only',
    },
    accessibility:
      'Text on obsidian 15.1:1; platinum on obsidian 12.3:1; gem 4.7:1 for large UI. The 4% card luminance split is paired with a hard hairline so panels never rely on subtle contrast alone. Focus is a 2px platinum offset ring.',
    responsive:
      'Lookbook parallax disables under 760px; spreads stack with seams kept. Display clamps 2.3rem→4rem.',
    codeExample:
      '<header class="atelier">\n  <p class="seam">COLLECTION VII</p>\n  <h1>Cut once.<br/><em>Measured twice.</em></h1>\n</header>',
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
    designDetails:
      'Linen #f3eee1 with walnut ink #33291c, olive-gold #7a6a2f seals, and oxblood #6e2b2b ribbons. EB Garamond engraves the headlines; Bitter sets the charter text. Rules are double 1px copperplate lines; seals are circular wax stamps with slight rotation. Cards are charter pages with crest corners.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 44 / 72 / 120 / 192',
      paddingScale: '20 / 32 / 52',
      grid: 'Centered 940px charter column; registries open to 12-col 1180px',
    },
    motion: {
      pageLoad: 'The charter unrolls: rules draw left→right, text fades after, 360ms',
      hoverStates: 'Inking rules and seal rotations, 200ms',
      transitions: 'ease; deliberate as an engraver’s stroke',
      scroll: 'Double rules extend as sections enter, like ruled ledgers filling',
    },
    accessibility:
      'Walnut on linen 11.6:1; olive 5.8:1 at UI sizes. Seal shapes carry text labels; the rotation is decorative. Focus is a 2px olive outline. Small caps keep sentence-case text underneath.',
    responsive:
      'Registries collapse to ruled lists under 800px; the crest bar becomes a wax-dot menu. Display clamps 2rem→3.6rem.',
    codeExample:
      '<article class="charter">\n  <h1>Standards, kept<br/><em>since the first stamp.</em></h1>\n  <p class="clause">Clause IV — provenance on every piece.</p>\n</article>',
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