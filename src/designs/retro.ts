import type { DesignSystem } from '../types'

export const retroDesigns: DesignSystem[] = [
  {
    id: 'y2k-retro',
    name: 'Y2K Retro',
    category: 'Retro',
    tags: ['y2k', 'chrome', 'iridescent', '2000s', 'glossy'],
    description: 'Chrome, iridescence, and glossy 2000s optimism.',
    designPhilosophy:
      'Turn-of-the-millennium techno-optimism. Liquid chrome gradients, iridescent pastels, glossy pill buttons, and bubble type. The future felt shiny in 2001 — this design bottlenecks that feeling with modern production values underneath.',
    designDetails:
      'Iridescent chrome gradients (lavender→aqua→pink) sweep heroes and buttons with a gloss highlight (linear white 40%→transparent). Quicksand for body, Righteous for display. Glossy pill buttons with inner bevel highlight; cards are frosted silver. Star sparkles ✦ punctuate headers. Everything has a subtle specular sheen.',
    colors: {
      primary: '#b8a6f5',
      secondary: '#9be3e0',
      accent: '#ff9ad5',
      neutral: '#e8e8f4',
      background: '#dcdcfa',
      text: '#2d2a45',
    },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Quicksand',
      scale: '13 / 15 / 18 / 22 / 28 / 40 / 60',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.01em, sparkles get 0.1em',
    },
    components: {
      primary:
        'Chrome pill: linear-gradient(180deg, #cfc6ff 0%, #b8a6f5 45%, #8f7ae8 100%), 1px #ffffff66 inner top highlight, radius 999px, #2d2a45 text, 700',
      secondary: 'Frosted glass pill rgba(255,255,255,.55) with 1px white border, blur 8px',
      tertiary: 'Aqua text link with sparkle ✦ suffix that spins slowly on hover',
      radius: '999px buttons, 20px cards, glossy everywhere',
      hover: 'Sheen sweeps across (translateX) 500ms; buttons brighten 10%',
      cards: 'Frosted silver rgba(255,255,255,.5), 1px #ffffff88 border, blur 12px, radius 20px, shadow 0 8px 24px rgba(45,42,69,.15)',
      forms: 'Glossy inputs: white gradient fill, 1px lavender border, focus ring aqua',
      navigation: 'Floating frosted pill bar with chrome gradient logo',
      modals: 'Frosted panel with chrome border-image gradient and sparkle top-left',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 96',
      paddingScale: '20 / 32 / 48',
      grid: 'Centered 1080px; asymmetric 5:7 hero split',
    },
    motion: {
      pageLoad: 'Hero chrome gradient slides into view with gloss sweep, 600ms',
      hoverStates: 'Sheen sweep + brightness 110%, 400–500ms',
      transitions: 'Smooth ease-out, nothing bouncy — Y2K is glossy, not goofy',
      scroll: 'Iridescent orbs drift slowly; sections fade up 400ms',
    },
    accessibility:
      '#2d2a45 on chrome gradient ≥7:1; frosted cards keep text #2d2a45. Focus is 3px aqua ring. Sparkles aria-hidden. Gradient text always paired with solid-color fallback (background-clip with @supports).',
    responsive:
      'Hero type clamps 2.5rem→4.5rem. Frosted effects reduce blur under 640px for perf. Buttons stay pills at all sizes; grids stack under 760px.',
    codeExample:
      '<section class="chrome">\n  <h1>✦ the future is glossy ✦</h1>\n  <p>Products that feel like 2001 promised.</p>\n  <button class="btn-chrome">Enter site</button>\n</section>',
    accent: '#b8a6f5',
    motif: 'gradient-hero',
    signatureCss: `
.dv-hero h1 { background: linear-gradient(100deg, #8f7ae8, #9be3e0 45%, #ff9ad5); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-btn { background: linear-gradient(180deg, #cfc6ff, #8f7ae8); box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 6px 18px rgba(143,122,232,.35); }
.dv-btn:hover { filter: brightness(1.1); }
.dv-sparkle { display: inline-block; animation: dv-spin 6s linear infinite; }
@keyframes dv-spin { to { transform: rotate(360deg); } }`,
    author: 'Riko Tanaka',
    createdAt: '2026-02-25',
    popularity: 87,
    trending: true,
  },
  {
    id: 'vintage-print',
    name: 'Vintage Print',
    category: 'Retro',
    tags: ['print', 'paper', 'heritage', 'press', 'classic'],
    description: 'Letterpress heritage: paper, ink, and old-style serifs.',
    designPhilosophy:
      'A broadsheet from a better century. Aged paper, deep ink, letterpress-style indentation, old-style serifs, and engraving-flourish rules. Long-form reading is the product; every ornament earns its keep.',
    designDetails:
      'Paper #f4ecdb with subtle fiber texture via CSS gradients; ink #2a2118. EB Garamond at display sizes with true small-caps labels; Fraunces for pull quotes. Double-rule frames, drop-cap openings, and text set in a strict 65ch measure. Buttons look like stamped labels — small, bordered, letter-spaced.',
    colors: {
      primary: '#7a3b2e',
      secondary: '#2a2118',
      accent: '#9c6b3f',
      neutral: '#e6dcc3',
      background: '#f4ecdb',
      text: '#2a2118',
    },
    typography: {
      displayFont: 'EB Garamond',
      bodyFont: 'EB Garamond',
      scale: '12 / 14 / 17 / 20 / 26 / 34 / 52',
      lineHeights: 'Display 1.1, body 1.75',
      letterSpacing: 'Small-caps labels 0.18em, display 0',
    },
    components: {
      primary: '1px #2a2118 border, paper bg, small-caps letter-spaced label, padding 12px 28px, stamps darker on hover',
      secondary: 'Double-rule border (3px double), transparent',
      tertiary: 'Underlined ink link, underline offset 4px, rust on hover',
      radius: '0 — letterpress is square',
      hover: 'Background tints #e6dcc3; stamps press (inset shadow) 200ms',
      cards: 'Paper panels with 1px ink border + 4px paper inset (matting), padding 32px',
      forms: 'Underline-only inputs like ledger lines, ink focus, small-caps labels',
      navigation: 'Broadsheet masthead: double rules, centered serif wordmark, date line',
      modals: 'Paper sheet with double-rule frame and wax-seal red accent',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 160',
      paddingScale: '24 / 40 / 64',
      grid: 'Single 680px measure; 12-col for plate sections',
    },
    motion: {
      pageLoad: 'Ink fades in like developing print, 500ms; rules draw after',
      hoverStates: 'Subtle tint/press effects 200ms; nothing floats',
      transitions: 'Flat and material — no lifts, only tints and presses',
      scroll: 'None. Print does not animate on scroll.',
    },
    accessibility:
      'Ink on paper 12.4:1; rust links 6.8:1. Focus is 2px ink outline offset 3px. Drop caps are styled ::first-letter (keep semantic text intact). Small-caps via font-variant, not fake uppercase.',
    responsive:
      'Measure holds 680px until 92vw. Display clamps 2.5rem→3.25rem. Masthead simplifies under 640px; drop caps scale proportionally.',
    codeExample:
      '<article class="broadsheet">\n  <p class="dateline">Vol. XIV — Morning Edition</p>\n  <h1>The Careful Craft of Slowness</h1>\n  <p class="dropcap">Once, every letter was set by hand…</p>\n</article>',
    accent: '#7a3b2e',
    motif: 'serif-italic-hero',
    signatureCss: `
.dv-dropcap::first-letter { font-size: 3.4em; float: left; line-height: .8; padding-right: 8px; font-weight: 600; color: #7a3b2e; }
.dv-smallcaps { font-variant: small-caps; letter-spacing: .18em; }
.dv-section + .dv-section { border-top: 3px double #2a2118; }
.dv-hero h1 em { font-style: italic; color: #7a3b2e; }`,
    author: 'Nostalgia Engine',
    createdAt: '2026-01-25',
    popularity: 81,
  },
  {
    id: 'cyberpunk-retro',
    name: 'Cyberpunk Retro',
    category: 'Retro',
    tags: ['cyberpunk', 'neon-noir', 'terminal', 'glitch', 'dark'],
    description: 'Neon-noir terminal aesthetics with glitch energy.',
    designPhilosophy:
      'High tech, low life. Phosphor cyan and hot magenta on void black, terminal windows as cards, scanlines over everything, and Chakra Petch/VT323 for that decoded-transmission feel. The interface is a cockpit of a machine you shouldn’t trust.',
    designDetails:
      'Void black #0a0e17 with phosphor cyan (#00f0ff-family) primary and hot magenta alerts. Cards are terminal windows: 1px cyan borders, title bars with ▚▞ glyphs, scanline overlay (repeating-linear-gradient 4px). Space Mono for data, Chakra Petch for display. Glitch hover: 1-frame RGB split via text-shadow. Marquee status bar reports fake system stats.',
    colors: {
      primary: '#00f0ff',
      secondary: '#ff2d95',
      accent: '#b6ff00',
      neutral: '#151a26',
      background: '#0a0e17',
      text: '#d7e4ec',
    },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'Space Mono',
      scale: '12 / 13 / 15 / 18 / 24 / 34 / 56',
      lineHeights: 'Display 1.1, body 1.6, terminal 1.5',
      letterSpacing: 'Display 0.04em uppercase, mono 0',
    },
    components: {
      primary: 'Transparent, 1px #00f0ff border, cyan text, radius 0, padding 12px 28px, uppercase, fill #00f0ff/text flips black on hover, 150ms',
      secondary: '1px #ff2d95 border, magenta text, same geometry',
      tertiary: 'Cyan mono link with ▸ prefix, blink cursor on hover',
      radius: '0 — terminals are square',
      hover: 'Fill flips + 1-frame glitch text-shadow (2px 0 #ff2d95, -2px 0 #00f0ff)',
      cards: '#0d1119 with 1px rgba(0,240,255,.4) border, title bar strip, scanline overlay, padding 24px',
      forms: 'Dark inputs with 1px cyan borders, mono placeholders, focus = filled caret style',
      navigation: 'Top status bar: mono glyph logo left, ▚▞ links, fake clock right',
      modals: 'Terminal window modal with title bar and blinking cursor prompt',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '12 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 40',
      grid: '12-col 1200px; terminal cards in asymmetric 2:1:1 rows',
    },
    motion: {
      pageLoad: 'Text types in with block cursor, 30ms/char, then scanlines fade in',
      hoverStates: 'Fill flips 150ms + glitch flicker',
      transitions: 'Fast, digital, 150ms; glitch effects ≤100ms',
      scroll: 'Parallax grid background 0.95x; status bar persists',
    },
    accessibility:
      '#d7e4ec on #0a0e17 13.8:1; cyan holds 10.9:1 large. Focus is 2px cyan outline. Glitch effects fire once per hover (no infinite flicker) and are removed under reduced-motion. Scanlines are 2% opacity overlays, aria-hidden.',
    responsive:
      'Terminal cards stack under 768px. Display clamps 2rem→3.5rem. Status bar condenses to essentials under 480px. Scanlines persist (they’re cheap).',
    codeExample:
      '<div class="term">\n  <div class="term-bar">▚ net_runner v4.2</div>\n  <h1> Jack into the grid_</h1>\n  <p>> establishing uplink… ok</p>\n  <button class="btn-term">EXECUTE</button>\n</div>',
    accent: '#00f0ff',
    motif: 'glow-pulse',
    signatureCss: `
.dv-stage { background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 4px); }
.dv-card { border: 1px solid rgba(0,240,255,.4); }
.dv-card .titlebar { border-bottom: 1px solid rgba(0,240,255,.25); color: #00f0ff; font-family: 'Space Mono', monospace; font-size: 12px; padding: 6px 12px; }
.dv-btn:hover { background: #00f0ff; color: #0a0e17; text-shadow: 2px 0 #ff2d95, -2px 0 #b6ff00; }
.dv-hero h1 { color: #00f0ff; letter-spacing: .04em; }`,
    author: 'Dmitri Volkov',
    createdAt: '2026-03-15',
    popularity: 90,
    trending: true,
  },
  {
    id: 'memphis-pop',
    name: 'Memphis Pop',
    category: 'Retro',
    tags: ['memphis', '80s', 'geometric', 'patterns', 'squiggle'],
    description: '1980s Memphis Group: squiggles, terrazzo, primary pops.',
    designPhilosophy:
      'The Memphis Group threw a party on your screen. Squiggle lines, terrazzo dot patterns, clashing-but-curated primary colors, and Bungee/Archivo Black confidence. Playful geometry with gallery-certified composition underneath.',
    designDetails:
      'White base attacked by geometric confetti: CSS squiggle borders (repeating gradients), terrazzo dot fields, and 3-color blocks (coral, teal, mustard) with ink outlines. Archivo Black display; Karla body. Cards have thick outlines + hard offset shadows. Squiggle dividers separate sections. Every color block gets a black 2px outline for that printed-1981 look.',
    colors: {
      primary: '#ff5964',
      secondary: '#00a896',
      accent: '#f4c95d',
      neutral: '#f2f2f2',
      background: '#ffffff',
      text: '#1d1d1d',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #ff5964, 2px #1d1d1d outline, white text, radius 12px, padding 14px 28px, 800, shadow 5px 5px 0 #1d1d1d',
      secondary: 'Solid #00a896 with same outline treatment, ink text',
      tertiary: 'Ink Karla 700 link with squiggle underline image on hover',
      radius: '12px buttons, 16px cards — rounded but outlined',
      hover: 'Shadow grows to 7px 7px + element shifts -2px,-2px, 150ms',
      cards: 'White, 2px #1d1d1d border, radius 16px, hard shadow 6px 6px 0, padding 28px, terrazzo corner decorations',
      forms: 'Outlined inputs 2px, squiggle focus underline, Karla labels',
      navigation: 'White bar with squiggle bottom border and outlined pill links',
      modals: 'White outlined panel with terrazzo header band',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 112',
      paddingScale: '20 / 32 / 48',
      grid: 'Playful 12-col with intentional 1-col offsets, 1200px',
    },
    motion: {
      pageLoad: 'Blocks pop with overshoot rotate, staggered 80ms',
      hoverStates: 'Shadow-grow physics 150ms, snappy',
      transitions: '150ms ease-out; springs on decorative rotations',
      scroll: 'Squiggles undulate subtly; terrazzo dots parallax 0.95x',
    },
    accessibility:
      'Ink on white 16.7:1; white on coral 3.0:1 (large/bold only, outlined buttons have ink text alternative states). Focus 3px ink outline. Squiggles/terrazzo aria-hidden. Springs off under reduced-motion.',
    responsive:
      'Color blocks stack under 720px with 16px gaps. Archivo Black clamps 2rem→3.75rem. Hard shadows reduce to 3px on mobile. Squiggle borders persist.',
    codeExample:
      '<section class="pop">\n  <h1>DON’T BE<br/>A SQUARE.</h1>\n  <p>1981 called. It had better taste.</p>\n  <button class="btn-pop">Join the movement</button>\n</section>',
    accent: '#ff5964',
    motif: 'rotated-stickers',
    signatureCss: `
.dv-stage { background-image: radial-gradient(4px 4px at 15% 25%, #00a896 45%, transparent 46%), radial-gradient(4px 4px at 75% 60%, #f4c95d 45%, transparent 46%), radial-gradient(4px 4px at 45% 85%, #ff5964 45%, transparent 46%); background-size: 260px 260px; }
.dv-card { border: 2px solid #1d1d1d; box-shadow: 6px 6px 0 #1d1d1d; transition: transform .15s, box-shadow .15s; }
.dv-card:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 #1d1d1d; }
.dv-squiggle { height: 8px; background: repeating-linear-gradient(90deg, #ff5964 0 10px, transparent 10px 20px); border-radius: 999px; }`,
    author: 'Bea Solano',
    createdAt: '2026-02-11',
    popularity: 84,
  },
]
