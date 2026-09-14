import type { DesignSystem } from '../types'

export const printDesigns: DesignSystem[] = [
  {
    id: 'broadsheet-press',
    name: 'Broadsheet Press',
    category: 'Retro',
    tags: ['newspaper', 'editorial', 'columns', 'journalism', 'serif'],
    description: 'A working newspaper: columns, rules, kickers, datelines.',
    designPhilosophy:
      'The newspaper is the most battle-tested information design in history. This system borrows its entire grammar — column rules, kickers, widows and orphans controlled, headlines that state rather than decorate — and runs it on the web with modern legibility. Density is respected; the reader is trusted.',
    designDetails:
      'Playfair Display for headlines (condensed via tight tracking), Source Sans 3 for body and captions. Ink #1a1a1a on newsprint #faf7f0, column rules 1px, section kickers in inverted black chips. Dateline above every article. Drop caps, jump lines ("continued on A6"), and a byline row with date and edition. No color except one red correction mark.',
    colors: {
      primary: '#8c1d18',
      secondary: '#1a1a1a',
      accent: '#8c1d18',
      neutral: '#e8e2d4',
      background: '#faf7f0',
      text: '#1a1a1a',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Source Sans 3',
      scale: '11 / 13 / 15 / 17 / 21 / 28 / 44 / 68',
      lineHeights: 'Headlines 1.05, body 1.55, captions 1.35',
      letterSpacing: 'Headlines -0.01em, kickers 0.14em uppercase',
    },
    components: {
      primary: 'Solid #1a1a1a, newsprint text, radius 0, padding 10px 22px, 700, uppercase 0.08em — reads as "Subscribe" button in print',
      secondary: '1px #1a1a1a border, transparent, same metrics',
      tertiary: 'Underlined 700 link, underline 2px offset 3px',
      radius: '0 everywhere — print has no curves',
      hover: 'Background inverts; headlines gain red underline 200ms',
      cards: 'Newsprint panels separated by 1px column rules, not boxes; kickers above',
      forms: 'Underline-only inputs, ink focus, uppercase micro labels',
      navigation: 'Double-rule masthead band; section tabs (World, Opinion, Culture)',
      modals: 'Print-style panel with 2px rule frame and "CORRECTION" red stamp',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 24 / 48 / 96',
      paddingScale: '12 / 24 / 40',
      grid: '6-column news grid with 1px visible column rules, 1280px',
    },
    motion: {
      pageLoad: 'None — the page is printed, not performed',
      hoverStates: '200ms underline and invert only',
      transitions: 'Minimal; print does not animate',
      scroll: 'Sticky section nav; nothing else moves',
    },
    accessibility:
      'Ink on newsprint 16.9:1. Red reserved for corrections (never color-only). Focus 3px ink outline. Column rules decorative. Headlines are real h1–h3, bylines in address elements.',
    responsive:
      '6-col news grid → 2-col under 900px → single column under 600px with rules retained. Headlines clamp 1.75rem→4.25rem. Masthead condenses to wordmark + section scroller.',
    codeExample:
      '<article class="story">\n  <p class="kicker">CITY DESK</p>\n  <h2>Council approves riverfront plan</h2>\n  <p class="byline">By A. Reporter · Sept 14, 2026</p>\n  <p class="dropcap">After three hours of testimony…</p>\n</article>',
    accent: '#8c1d18',
    motif: 'editorial-columns',
    layout: 'magazine',
    useCases: ['News', 'Education', 'Nonprofit'],
    signatureCss: `
.dv-kicker { background: #1a1a1a; color: #faf7f0; display: inline-block; padding: 2px 8px; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
.dv-ed-lead::first-letter { font-size: 3.2em; font-weight: 700; }
.dv-h2 { border-bottom: 3px double #1a1a1a; padding-bottom: 8px; }
.dv-masthead-rule { height: 4px; border-bottom: 1px solid #1a1a1a; }`,
    author: 'Nostalgia Engine',
    createdAt: '2026-05-02',
    popularity: 84,
  },
  {
    id: 'neo-gothic',
    name: 'Neo Gothic',
    category: 'Luxury',
    tags: ['gothic', 'dark', 'mystical', 'blackletter', 'arch'],
    description: 'Cathedral darkness: blackletter hints, arches, candlelit gold.',
    designPhilosophy:
      'The sacred and the serious. Deep obsidian surfaces, pointed-arch frames, blackletter-flavored display, and gilded accents that catch light like candle flames on stone. For brands that trade in mystery, craftsmanship, and weight — rare spirits, artisan ateliers, the occult of taste.',
    designDetails:
      'Near-black #0e0c12 with ultra-dark purple undertones, antique gold #c9a227-family hairlines, and deep crimson accents. UnifrakturMaguntia appears only in the wordmark and drop caps; Cormorant Garamond carries display; EB Garamond the body. Pointed arches (border-radius 50% 50% 0 0 / 100% 100% 0 0 on tall elements) frame imagery. Hairline gold rules with a center diamond ornament ◆.',
    colors: {
      primary: '#c9a227',
      secondary: '#4a1942',
      accent: '#8e2436',
      neutral: '#1c1826',
      background: '#0e0c12',
      text: '#e8ddc8',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'EB Garamond',
      scale: '12 / 14 / 17 / 20 / 26 / 36 / 54 / 76',
      lineHeights: 'Display 1.05, body 1.7',
      letterSpacing: 'Display 0.01em, labels 0.22em uppercase',
    },
    components: {
      primary: '1px gold border, transparent, gold text, padding 14px 36px, uppercase 0.18em, fills gold (text obsidian) over 400ms',
      secondary: '1px rgba(232,221,200,.3) border, parchment text',
      tertiary: 'Gold text link with slow underline draw',
      radius: 'Arches only: 999px 999px 0 0 on frames; buttons square',
      hover: 'Slow gold fills; arch frames brighten; 400ms patience',
      cards: 'Obsidian panels with 1px gold hairline and top center diamond ornament',
      forms: 'Bottom-hairline inputs, gold focus, small-caps labels',
      navigation: 'Centered wordmark with flanking hairlines; tiny uppercase links',
      modals: 'Arch-topped obsidian panel with double gold frame',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 48 / 96 / 192',
      paddingScale: '32 / 64 / 96',
      grid: 'Single 760px nave column; 12-col only in galleries',
    },
    motion: {
      pageLoad: 'Gold hairlines draw outward from center 700ms; text fades after',
      hoverStates: '400ms gold fills; nothing bounces in a cathedral',
      transitions: 'Slow, reverent, 400–600ms ease',
      scroll: 'Sections emerge from dark (opacity 0.4→1) over 700ms',
    },
    accessibility:
      'Parchment on obsidian 13.8:1; gold on obsidian 7.6:1. Focus 2px gold outline offset 4px. Blackletter decorative only, aria-hidden. prefers-reduced-motion removes the emergence effect.',
    responsive:
      'Nave column holds to 92vw. Arch frames become simple rounded tops under 640px. Display clamps 2.5rem→4.75rem. Wordmark alone survives small navs.',
    codeExample:
      '<section class="sanctum">\n  <p class="kicker">Chapter VII</p>\n  <h1>The <em>Unseen</em> Collection</h1>\n  <a class="ghost-gold" href="#">Request audience</a>\n</section>',
    accent: '#c9a227',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Fashion', 'Events', 'Music'],
    signatureCss: `
.dv-hero h1 em { color: #c9a227; }
.dv-logo { font-family: 'UnifrakturMaguntia', serif; font-size: 1.4em; }
.dv-card { position: relative; }
.dv-card::before { content: '◆'; position: absolute; top: -0.7em; left: 50%; transform: translateX(-50%); color: #c9a227; font-size: 0.7em; background: #0e0c12; padding: 0 8px; }
.dv-btn { transition: background .4s, color .4s; }
.dv-btn:hover { background: #c9a227; color: #0e0c12; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-05-09',
    popularity: 86,
    trending: true,
  },
]
