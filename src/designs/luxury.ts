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
      'Black #0d0b09 canvas with champagne-gold (#d4af37-family) 1px rules and small-caps serif labels. Fraunces light weight for display with wide letter-spacing; IBM Plex Sans for function. Buttons are gold-bordered ghosts that fill on hover over 400ms — luxury is patient. Every section is separated by a gold hairline, never a box.',
    colors: {
      primary: '#d4af37',
      secondary: '#3a3630',
      accent: '#8a6f2f',
      neutral: '#201d19',
      background: '#0d0b09',
      text: '#f5f0e6',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 28 / 40 / 64',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.02em, labels 0.28em uppercase small-caps',
    },
    components: {
      primary: '1px #d4af37 border, transparent bg, gold text, padding 16px 40px, letter-spaced uppercase, fills gold (text flips #0d0b09) on hover over 400ms',
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
    accent: '#d4af37',
    motif: 'serif-italic-hero',
    signatureCss: `
.dv-smallcaps { font-variant: small-caps; letter-spacing: .28em; color: #d4af37; }
.dv-hero h1 { letter-spacing: .02em; font-weight: 350; }
.dv-btn { transition: background .4s, color .4s; }
.dv-btn:hover { background: #d4af37; color: #0d0b09; }
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
]
