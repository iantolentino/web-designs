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
    designDetails:
      'Oatmeal #f8f3e7 canvas, butter #f2d8a7, sage #8a9b6e, and berry #b0575c accents. Bitter body; Fraunces soft display. Gingham pattern strips (repeating-conic-gradient), scalloped borders (radial-gradient dots), and botanical ✿ ❀ ornaments. Cards look like paper labels tied with twine (dashed border top).',
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
      bodyFont: 'Bitter',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 72 / 128',
      paddingScale: '24 / 40 / 56',
      grid: 'Cozy centered 1080px; patchwork 2-col features',
    },
    motion: {
      pageLoad: 'Elements sway in (rotate ±2° settle), 450ms',
      hoverStates: 'Lift + bloom 250ms; ornaments sway 2s loop',
      transitions: 'Soft ease-out, unhurried',
      scroll: 'Gingham strips parallax 0.97x; botanicals drift',
    },
    accessibility:
      '#4a4238 on oatmeal 9.8:1; oatmeal on sage 3.4:1 (large/bold UI text only, paired with icons). Focus 3px sage ring. Gingham and scallops decorative. Springs off under reduced-motion.',
    responsive:
      'Patchwork stacks under 760px. Display clamps 2.25rem→3.375rem. Scallops simplify under 480px. Buttons stay leaf-cornered (identity).',
    codeExample:
      '<section class="larder">\n  <h1>Jam, bread, &amp; <em>slow light.</em></h1>\n  <p>From our kitchen, by hand, since always.</p>\n  <button class="btn-sprout">Order a box ❀</button>\n</section>',
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
    designDetails:
      'Warm grey #eceae5 canvas, charcoal #2d2a26, oat and terracotta accents. Manrope everywhere, weights doing quiet work. Rounded 20px forms, wool-texture subtle noise, and shadows like lamplight (large, soft, warm-tinted). Photography frames are arched. One candle-flame amber accent for actions.',
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
      bodyFont: 'Manrope',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 152',
      paddingScale: '24 / 40 / 64',
      grid: 'Centered 1080px; alternating text/arch-media rows',
    },
    motion: {
      pageLoad: 'Elements fade and rise 12px over 500ms, like lamps warming',
      hoverStates: '250ms lift with shadow bloom — nothing snaps',
      transitions: 'Soft ease-out throughout, 250–400ms',
      scroll: 'Sections settle gently; no parallax — hygge does not perform',
    },
    accessibility:
      'Charcoal on warm grey 12.4:1; warm white on terracotta 4.8:1 at 600. Focus 3px amber ring. Lamplight shadows are decoration. All animation is fade/rise — reduced-motion keeps fades.',
    responsive:
      'Arch frames become rounded rects under 640px. Display clamps 2.25rem→3.25rem. Pill nav condenses. Shadow depth halves on mobile for performance.',
    codeExample:
      '<section class="stue">\n  <h1>Kom inn.<br/>Det er <em>varmt</em> herinne.</h1>\n  <p>Home essentials for the dark months.</p>\n  <button class="btn-candle">Shop the winter edit</button>\n</section>',
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
    designDetails:
      'Deep oak #1e1a16 with oxblood #6e1423-family, aged gold, and cream manuscript text. Playfair Display display; Spectral body (book-like). Double-rule frames, marginalia-style asides (italic, smaller, in the gutter), drop caps, and footnote superscripts. Texture via subtle paper-grain gradient. Latin mottos in small-caps labels.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 144',
      paddingScale: '24 / 40 / 64',
      grid: 'Scholarly: centered 680px text measure; 12-col for folios',
    },
    motion: {
      pageLoad: 'Candle-flicker: content fades with 2 subtle opacity dips, 600ms',
      hoverStates: '300ms gold draws and texture deepens',
      transitions: 'Weighted, 300–400ms',
      scroll: 'Marginalia fade in slightly after main text (100ms delay)',
    },
    accessibility:
      'Cream on oak 12.8:1; gold on oak 6.9:1. Focus 2px gold outline offset 3px. Drop caps semantic (::first-letter). Latin flourishes aria-hidden. Flicker is subtle (2 dips) and removed under reduced-motion.',
    responsive:
      'Text measure holds; marginalia become inline asides under 800px. Display clamps 2.25rem→3.25rem. Fleurons simplify. Double rules persist at all sizes.',
    codeExample:
      '<article class="folio">\n  <p class="motto">LUX ET VERITAS</p>\n  <h1>On the <em>Pleasures</em> of Rereading</h1>\n  <p class="dropcap">The second reading is where the book begins…</p>\n</article>',
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
    designDetails:
      'Parchment #f2e3c8, leather brown #6b3f23, bandana red #b33a2c, and rope tan. Rye/Bungee-style slab western display (Rye loaded); Karla body. Rope borders via repeating-radial-gradient dots, star badges ★, and halftone corner shading. Buttons are woodcut blocks with heavy borders.',
    colors: {
      primary: '#b33a2c',
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
      primary: 'Solid #b33a2c, parchment text, radius 4px, padding 14px 30px, 800, 3px #3a2418 border, shadow 4px 4px 0 #3a2418',
      secondary: 'Parchment bg, 3px border, same shadow',
      tertiary: 'Brown 700 link with ★ prefix and underline rope on hover',
      radius: '4px — hand-cut posters are almost square',
      hover: 'Press-flat like desert modern: translate + shadow shrink, 150ms',
      cards: 'Wanted-poster panels: double border, halftone corners, ★ corner badges',
      forms: '3px border inputs, parchment bg, red focus',
      navigation: 'Rope-border bar with woodtype logo and star separators',
      modals: 'Wanted-poster panel: "$REWARD$" header strip',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 112',
      paddingScale: '20 / 32 / 48',
      grid: '12-col 1160px; poster-style centered heroes',
    },
    motion: {
      pageLoad: 'Posters pin up (drop + slight rotate settle), 350ms',
      hoverStates: '150ms press-flat physics',
      transitions: 'Quick and physical, 150ms',
      scroll: 'Tumbleweed-free zone. Static scroll, honest borders.',
    },
    accessibility:
      '#3a2418 on parchment 12.3:1; parchment on red 5.4:1 at 800. Focus 3px red outline. Rope borders and halftones aria-hidden. Rye used ≥28px only — Karla carries body text.',
    responsive:
      'Posters stack under 720px; halftones simplify. Rye clamps 2rem→3.5rem. Rope borders persist (identity). Shadows shrink 4px→2px mobile.',
    codeExample:
      '<section class="saloon">\n  <p class="reward">★ GRAND OPENING ★</p>\n  <h1>SUNDAY.<br/>HIGH NOON.</h1>\n  <button class="btn-wood">Saddle up</button>\n</section>',
    accent: '#b33a2c',
    motif: 'hard-shadows',
    layout: 'hero-cards',
    useCases: ['Events', 'Restaurant', 'E-commerce'],
    signatureCss: `
.dv-hero h1 { font-family: 'Rye', serif; }
.dv-logo { font-family: 'Rye', serif; }
.dv-card { border: 3px double #3a2418; }
.dv-btn { box-shadow: 4px 4px 0 #3a2418; transition: transform .15s, box-shadow .15s; }
.dv-btn:hover { transform: translate(2px,2px); box-shadow: 1px 1px 0 #3a2418; }
.dv-kicker { color: #b33a2c; letter-spacing: .18em; }`,
    author: 'Bea Solano',
    createdAt: '2026-07-20',
    popularity: 82,
  },
]
