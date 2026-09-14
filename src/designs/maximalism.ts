import type { DesignSystem } from '../types'

export const maximalismDesigns: DesignSystem[] = [
  {
    id: 'neon-maximalist',
    name: 'Neon Maximalist',
    category: 'Maximalism',
    tags: ['neon', 'night', 'gaming', 'energy', 'dark'],
    description: 'Midnight canvas, neon voltage, zero restraint.',
    designPhilosophy:
      'The page is an arcade at 2am. Deep space-black absorbs everything while neon magenta, cyan, and lime punch through with electric glow. More is the strategy: layered gradients, glowing borders, animated marquee strips. If it feels like too much, add one more layer — then stop exactly there.',
    designDetails:
      'Everything lives on #0a0a14 with radial neon glows behind heroes and cards. Buttons have gradient fills plus a colored box-shadow halo; cards have 1px neon borders that intensify on hover. Space Grotesk carries display duty with tight -0.03em tracking; gradients run across headlines. A marquee ticker of neon "tags" rides above the footer.',
    colors: {
      primary: '#ff2e88',
      secondary: '#00e5ff',
      accent: '#a3ff12',
      neutral: '#1a1a2e',
      background: '#0a0a14',
      text: '#f2f2ff',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64 / 88',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display -0.03em, neon labels 0.14em uppercase',
    },
    components: {
      primary:
        'Linear gradient 90deg #ff2e88→#7b2eff, white text, radius 999px, padding 14px 32px, 700, halo shadow 0 0 24px rgba(255,46,136,.55)',
      secondary: 'Transparent, 2px #00e5ff border, cyan text, glow shadow on hover',
      tertiary: 'Uppercase neon text link, letter-spaced, glow pulses under it',
      radius: 'Pills for buttons, 16px cards, 20px modals',
      hover: 'Glow intensifies 30%, card borders brighten, slight scale 1.02 with 220ms bounce',
      cards: '#12121f with 1px rgba(0,229,255,.25) border, radius 16px, inner glow top edge, hover lifts 4px with stronger glow',
      forms: 'Dark inputs #16162a, 1px rgba(255,255,255,.15) border, neon focus ring, placeholder #8a8ab0',
      navigation: 'Floating pill nav, blur backdrop, neon border, gradient logo text',
      modals: 'Dark glass panel rgba(18,18,31,.9) blur 20px, neon gradient border, scale-in',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '12 / 24 / 48 / 96 / 160',
      paddingScale: '16 / 32 / 48',
      grid: 'Asymmetric 2:3 grids; 1200px max with bleed sections',
    },
    motion: {
      pageLoad: 'Hero words slam in with scale 0.9→1 + blur 8px→0, staggered 90ms',
      hoverStates: 'Glow bloom + scale on everything interactive, 220ms cubic-bezier(.34,1.56,.64,1)',
      transitions: 'Bouncy overshoot for playful energy, never linear',
      scroll: 'Sections parallax at 0.85x; neon orbs drift slowly; marquee scrolls forever',
    },
    accessibility:
      'Neon text is large/bold only; body copy is #f2f2ff at 14.8:1 on #0a0a14. Focus rings are 3px cyan halos. All animation respects prefers-reduced-motion: glows become static, parallax removed.',
    responsive:
      'Hero type clamps 3rem→6.5rem. Grids stack under 820px; marquee persists. Tap targets 48px; nav pill condenses to logo + hamburger under 640px.',
    codeExample:
      '<section class="hero">\n  <h1><span class="grad">FEEL</span> EVERY <span class="grad">VOLT</span></h1>\n  <p>The loudest theme for the bravest brand.</p>\n  <button class="btn-neon">Enter the grid</button>\n</section>\n<div class="marquee">NEON ✦ ENERGY ✦ MOTION ✦ COLOR</div>',
    accent: '#ff2e88',
    motif: 'gradient-hero',
    signatureCss: `
.dv-hero h1 { background: linear-gradient(90deg, #ff2e88, #00e5ff, #a3ff12); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-marquee { overflow: hidden; white-space: nowrap; border-block: 1px solid rgba(0,229,255,.3); }
.dv-marquee span { display: inline-block; animation: dv-marq 18s linear infinite; }
@keyframes dv-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.dv-hero { background: radial-gradient(600px 300px at 70% 10%, rgba(123,46,255,.35), transparent 70%); }`,
    author: 'Riko Tanaka',
    createdAt: '2026-02-14',
    popularity: 96,
    trending: true,
  },
  {
    id: 'editorial-maximalist',
    name: 'Editorial Maximalist',
    category: 'Maximalism',
    tags: ['magazine', 'art-direction', 'typographic', 'contrast'],
    description: 'A fashion-magazine spread as a website.',
    designPhilosophy:
      'Print energy, web-native. Oversized display serif set at dramatic scale, columns that break the grid deliberately, giant quotation bands, and a strict-but-broken magazine rhythm. Every scroll is a page turn; every element demands to be read.',
    designDetails:
      'Fraunces at 144–200px for hero display with tight leading, paired with Archivo for captions and body. Massive pull-quote bands invert colors mid-page. Numbered issues, thin column rules, and full-bleed color blocks (#ffd166) segment the story. Hover states invert entire cards, print-style.',
    colors: {
      primary: '#e63946',
      secondary: '#ffd166',
      accent: '#111111',
      neutral: '#f0ebe2',
      background: '#faf6ef',
      text: '#111111',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 60 / 144',
      lineHeights: 'Display 0.95, body 1.5, quotes 1.1',
      letterSpacing: 'Display -0.02em, captions 0.08em uppercase',
    },
    components: {
      primary: 'Solid #111, paper text, radius 0, padding 16px 36px, 800 weight, uppercase',
      secondary: 'Solid #ffd166, #111 text, square, same metrics',
      tertiary: 'Underlined Archivo 700 with thick 3px underline on hover',
      radius: '0 — sharp print edges',
      hover: 'Full color inversion on cards and buttons, instant, print-like',
      cards: 'Paper cards with 2px #111 border and hard shadow 6px 6px 0 #111',
      forms: 'Square inputs, 2px bottom borders, bold Archivo labels above',
      navigation: 'Masthead-style: oversized logo center, thin rule, issue number + links row',
      modals: 'Full-width magazine panel sliding down with 4px border',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '24 / 48 / 64',
      grid: '12-col but deliberately broken: elements bleed columns',
    },
    motion: {
      pageLoad: 'Headline reveals with clip-path wipe 600ms, print-roller style',
      hoverStates: 'Instant inversions; thick underlines draw in 200ms',
      transitions: 'Bold, fast, decisive — no easing softness over 300ms',
      scroll: 'Quote bands become sticky for one viewport then release',
    },
    accessibility:
      'Ink on paper 16.5:1; red used at large sizes only. Focus is a 3px offset outline. All display text remains selectable and semantic — drama never sacrifices semantics.',
    responsive:
      'Display clamps 3rem→9rem via viewport units. Broken-grid becomes stacked overlaps under 768px. Quote bands remain full-bleed at all sizes.',
    codeExample:
      '<header class="masthead">\n  <div class="issue">Issue 07</div>\n  <h1>THE<br/>LOUD<br/>ISSUE</h1>\n</header>\n<blockquote class="band">"Design is opinion, printed."</blockquote>',
    accent: '#e63946',
    motif: 'quote-band',
    signatureCss: `
.dv-band { background: #111; color: #faf6ef; font-family: 'Fraunces', serif; font-size: clamp(2rem, 6vw, 4.5rem); line-height: 1.05; padding: 48px 24px; text-align: center; font-style: italic; }
.dv-card:hover { background: #111; color: #faf6ef; }
.dv-card:hover .dv-price { color: #ffd166; }`,
    author: 'Camille Roth',
    createdAt: '2026-03-05',
    popularity: 82,
  },
  {
    id: 'playful-maximalist',
    name: 'Playful Maximalist',
    category: 'Maximalism',
    tags: ['candy', 'stickers', 'colorful', 'wacky', 'fun'],
    description: 'A candy shop exploded and we kept every piece.',
    designPhilosophy:
      'Joy is a feature. Sticker-style cards at jaunty angles, a rainbow of buttons, squishy hover physics, and confetti emoji accents. The layout wobbles on purpose — but every interactive element still lands exactly where your cursor expects.',
    designDetails:
      'Cards rotate ±2° at rest and straighten on hover with a springy 300ms bounce. Five core colors rotate through sections; buttons each take a different fill. Permanent Marker flashes in big exclamations while Be Vietnam Pro handles real text. Emoji act as section punctuation. Shadows are hard, colored, and offset.',
    colors: {
      primary: '#ff5da2',
      secondary: '#ffd23f',
      accent: '#2ec4b6',
      neutral: '#fff6ec',
      background: '#fff6ec',
      text: '#2b2140',
    },
    typography: {
      displayFont: 'Be Vietnam Pro',
      bodyFont: 'Be Vietnam Pro',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 60 / 84',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display -0.01em; stickers 0.06em uppercase',
    },
    components: {
      primary: 'Solid #ff5da2, white text, radius 999px, padding 14px 30px, 800, shadow 0 4px 0 #c22e74',
      secondary: 'Solid #ffd23f, #2b2140 text, shadow 0 4px 0 #d9a616',
      tertiary: 'Rounded text button with emoji prefix, underline squiggle on hover',
      radius: 'Everything pill-shaped or 20px',
      hover: 'Squish: scale(0.97) press then overshoot 1.03, 280ms spring',
      cards: 'White, radius 20px, 3px #2b2140 border, rotated ±2°, shadow 6px 6px 0 rgba(43,33,64,.9); hover straightens to 0°',
      forms: 'Pill inputs with 3px borders, focus rainbow ring (box-shadow spread)',
      navigation: 'Rainbow underline row; logo has a wobble animation on hover',
      modals: 'White rounded sheet with tape-strip decoration at top',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '12 / 24 / 40 / 72 / 120',
      paddingScale: '16 / 32 / 40',
      grid: 'Freeform masonry-ish clusters that align on scroll',
    },
    motion: {
      pageLoad: 'Stickers pop in with rotate+scale stagger, 90ms apart',
      hoverStates: 'Squishy springs everywhere, 280ms cubic-bezier(.34,1.56,.64,1)',
      transitions: 'Overshoot easing; wobble keyframes on decorative elements',
      scroll: 'Cards gently counter-rotate (±1°) as they enter viewport',
    },
    accessibility:
      'Dark plum text on cream: 12.4:1. All rotations are decorative — hit areas stay axis-aligned. Focus is a 3px plum ring; springs disabled under reduced-motion.',
    responsive:
      'Sticker angles reduce to ±1° under 768px; font clamps 2.5rem→5rem. Emoji decorations hide on small screens to save space. Grid stacks with 16px gaps.',
    codeExample:
      '<div class="sticker" style="--rot: 2deg">\n  <h3>🎁 Free sticker pack</h3>\n  <p>With every order this month.</p>\n</div>\n<button class="btn-candy">Grab it! ✦</button>',
    accent: '#ff5da2',
    motif: 'rotated-stickers',
    signatureCss: `
.dv-card { --rot: 2deg; transform: rotate(var(--rot)); transition: transform .28s cubic-bezier(.34,1.56,.64,1); }
.dv-card:hover { transform: rotate(0deg) scale(1.02); }
.dv-card:nth-child(even) { --rot: -2deg; }
.dv-hero h1 span { display: inline-block; animation: dv-wobble 2.4s ease-in-out infinite; }
.dv-hero h1 span:nth-child(2) { animation-delay: .2s; }
@keyframes dv-wobble { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }`,
    author: 'Bea Solano',
    createdAt: '2026-01-28',
    popularity: 90,
    trending: true,
  },
]
