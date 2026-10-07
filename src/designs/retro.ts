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
    accent: '#b8a6f5',
    motif: 'gradient-hero',
    layout: 'hero-cards',
    useCases: ['Music', 'Gaming', 'E-commerce'],
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
    accent: '#7a3b2e',
    motif: 'serif-italic-hero',
    layout: 'editorial',
    useCases: ['News', 'Education', 'Restaurant'],
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
    accent: '#00f0ff',
    motif: 'glow-pulse',
    layout: 'dashboard',
    useCases: ['Gaming', 'AI/ML', 'Crypto'],
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
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 64',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #ff5964, 2px #1d1d1d outline, white text, radius 12px, padding 14px 28px, 800, shadow 5px 5px 0 #1d1d1d',
      secondary: 'Solid #00a896 with same outline treatment, ink text',
      tertiary: 'Ink Space Grotesk 700 link with squiggle underline image on hover',
      radius: '12px buttons, 16px cards — rounded but outlined',
      hover: 'Shadow grows to 7px 7px + element shifts -2px,-2px, 150ms',
      cards: 'White, 2px #1d1d1d border, radius 16px, hard shadow 6px 6px 0, padding 28px, terrazzo corner decorations',
      forms: 'Outlined inputs 2px, squiggle focus underline, Space Grotesk labels',
      navigation: 'White bar with squiggle bottom border and outlined pill links',
      modals: 'White outlined panel with terrazzo header band',
    },
    accent: '#ff5964',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Events', 'Agency', 'E-commerce'],
signatureCss: `
.dv-stage { background-image: radial-gradient(4px 4px at 15% 25%, #00a896 45%, transparent 46%), radial-gradient(4px 4px at 75% 60%, #f4c95d 45%, transparent 46%), radial-gradient(4px 4px at 45% 85%, #ff5964 45%, transparent 46%); background-size: 260px 260px; }
.dv-card { border: 2px solid #1d1d1d; box-shadow: 6px 6px 0 #1d1d1d; transition: transform .15s, box-shadow .15s; }
.dv-card:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 #1d1d1d; }
.dv-squiggle { height: 8px; background: repeating-linear-gradient(90deg, #ff5964 0 10px, transparent 10px 20px); border-radius: 999px; }`,
    author: 'Bea Solano',
    createdAt: '2026-02-11',
    popularity: 84,
  },
  {
    id: 'cassette-deck',
    name: 'Cassette Deck',
    category: 'Retro',
    tags: ['hifi', 'tape', 'analog', '80s'],
    description: 'Front-panel hi-fi: VU meters, chrome buttons, amber needle glow.',
    designPhilosophy:
      'The interface is a tape deck faceplate. Brushed charcoal, chrome transport buttons, amber VU needles that dance when you hover. Analog honesty: visible mechanics, labeled everything, and a REC light you learn to respect.',
    colors: {
      primary: '#ffb347',
      secondary: '#2a2d31',
      accent: '#c8ccd2',
      neutral: '#3a3e44',
      background: '#1d1f22',
      text: '#efe9dc',
    },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 18 / 23 / 31 / 50',
      lineHeights: 'Display 1.1, body 1.5',
      letterSpacing: 'Display 0.04em, track data 0.02em',
    },
    components: {
      primary:
        'REC-red→amber chrome button: 4px radius, 2px bevel (light top, dark bottom), charcoal text, weight 700; press depresses the bevel 2px',
      secondary: 'Chrome transport button (#c8ccd2) with charcoal glyph; hover glows amber underneath',
      tertiary: 'Cream mono link with a blinking amber cursor on hover (1s steps)',
      radius: '4px buttons, 6px panels — faceplate machining',
      hover: 'VU needles swing 20°, LEDs warm up, 180ms ease-out',
      cards: 'Faceplate modules: #2a2d31 with 1px #3a3e44 seam and brushed-top highlight; module labels engraved cream',
      forms: 'Deck fields: inset #16181a with mono input and amber focus glow',
      navigation: 'Transport bar: chrome buttons with charcoal glyphs and an LED strip showing the current section',
      modals: 'Faceplate overlay with a VU meter header and rgba(13,14,16,.75) scrim',
    },
    accent: '#ffb347',
    motif: 'glow-pulse',
    layout: 'split-hero',
    useCases: ['Music', 'Events', 'Gaming'],
    signatureCss: `
.dv-card { background: #2a2d31; border: 1px solid #3a3e44; border-top: 1px solid #454a51; }
.dv-btn { border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255,255,255,.35), inset 0 -2px 0 rgba(0,0,0,.4); }
.dv-btn:hover { box-shadow: inset 0 1px 0 rgba(255,255,255,.35), 0 0 12px rgba(255,179,71,.35); }`,
    author: 'Dex Okafor',
    createdAt: '2026-08-13',
    popularity: 81,
    trending: true,
  },
  {
    id: 'seventies-sunburst',
    name: 'Seventies Sunburst',
    category: 'Retro',
    tags: ['70s', 'sunburst', 'shag', 'avocado'],
    description: 'Wood-paneled sunshine: avocado, harvest gold, and thick round strokes.',
    designPhilosophy:
      'The rec room at golden hour. Wood-panel warmth, avocado and harvest-gold sunshine rounds, and typography with groovy weight. Everything is friendly, round-cornered, and slightly too confident — in the best way.',
    colors: {
      primary: '#c05a2e',
      secondary: '#7a8b3f',
      accent: '#dfa32e',
      neutral: '#e4d5b8',
      background: '#f6ecd9',
      text: '#4a3524',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 64',
      lineHeights: 'Display 1.05, body 1.58',
      letterSpacing: 'Display 0, labels 0.06em uppercase',
    },
    components: {
      primary:
        'Burnt-orange #c05a2e pill, 999px radius, cream text, weight 800, 3px walnut outline; hover spins a sun-ray ring 8°',
      secondary: 'Avocado pill with cream text; hover fills harvest gold',
      tertiary: 'Walnut underlined link with a gold ray tick before it',
      radius: '999px buttons, 20px cards — everything groovy is round',
      hover: 'Ray rings rotate and pills swell 4%, 200ms ease-out',
      cards: 'Liner-note cards: cream with 3px walnut outline, 20px radius, harvest-gold corner ray, 26px padding',
      forms: 'Pill inputs with 2px walnut borders and gold focus rings; labels sit in groovy chips',
      navigation: 'Wood-grain bar with pill links; the active link gets a sunburst badge',
      modals: 'Cream card with a conic sunburst header band and walnut scrim rgba(74,53,36,.5)',
    },
    accent: '#c05a2e',
    motif: 'wave-section',
    layout: 'hero-cards',
    useCases: ['Restaurant', 'Travel', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px; border: 3px solid #4a3524; }
.dv-card { border-radius: 20px; border: 3px solid #4a3524; }
.dv-hero h1 { font-weight: 800; }`,
    author: 'Marisol Vega',
    createdAt: '2026-08-06',
    popularity: 79,
  },
  {
    id: 'dial-up',
    name: 'Dial-Up',
    category: 'Retro',
    tags: ['90s-web', 'geocities', 'webring', 'nostalgia'],
    description: 'The 90s personal web, rebuilt with love — guestbooks and all.',
    designPhilosophy:
      'The hand-made web before templates: visitor counters, webrings, guestbooks, and under-construction GIFs — rebuilt with modern semantics and accessibility. Nostalgia that respects what the early web got right: personality, links you could trust, and pages that said hello.',
    colors: {
      primary: '#2320e0',
      secondary: '#5a5d63',
      accent: '#7b1fa2',
      neutral: '#c0c0c0',
      background: '#f2efe9',
      text: '#1a1a1a',
    },
    typography: {
      displayFont: 'Courier Prime',
      bodyFont: 'Times New Roman',
      scale: '14 / 16 / 18 / 21 / 26 / 32 / 44',
      lineHeights: 'Display 1.2, body 1.5',
      letterSpacing: 'Display 0, body 0',
    },
    components: {
      primary:
        'Outset bevel button (#c0c0c0 chrome, ink text, 0px radius); active flips to inset — the original button press',
      secondary: 'Link-blue underlined classic anchor; visited state honestly purple',
      tertiary: 'Courier [bracket] link in table-gray that blues on hover',
      radius: '0px everywhere; bevels are the rounding',
      hover: 'Bevels flip, links underline-squiggle, 80ms — instant like a local file',
      cards: 'Table panels: inset 2px bevels, #ffffff content, gray title bars with pixel-serif headers',
      forms: 'Inset bevel fields with Courier input; focus paints a classic 1px dotted outline',
      navigation: 'Webring bar: centered links with ◄ previous | next ► and a hit counter chip',
      modals: 'Popup window with outset title bar and minimize dots, rgba(0,0,0,.45) scrim',
    },
    accent: '#2320e0',
    motif: 'dashed-borders',
    layout: 'editorial',
    useCases: ['News', 'Nonprofit', 'Education'],
    signatureCss: `
.dv-card { border: 2px inset #c0c0c0; background: #fff; }
.dv-btn { border: 2px outset #c0c0c0; border-radius: 0; background: #c0c0c0; }
.dv-btn:active { border-style: inset; }
.dv-hero h1 { font-family: "Times New Roman", serif; }`,
    author: 'Wes Tanaka',
    createdAt: '2026-07-21',
    popularity: 73,
  },
]