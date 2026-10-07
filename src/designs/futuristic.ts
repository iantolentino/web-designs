import type { DesignSystem } from '../types'

export const futuristicDesigns: DesignSystem[] = [
  {
    id: 'atompunk',
    name: 'Atompunk',
    category: 'Retro',
    tags: ['atomic-age', '50s-future', 'space-race', 'googie', 'retrofuture'],
    description: 'The 1958 future: chrome fins, starbursts, boosters.',
    designPhilosophy:
      'The future as imagined in 1958 — optimistic, geometric, chrome-plated. Googie architecture signs, rocket fins, starburst sparkles, and science-fair optimism. This is retrofuturism with its collar popped: confident, playful, and absolutely certain the year 2000 will have jetpacks.',
    colors: {
      primary: '#e07a00',
      secondary: '#1b2a5e',
      accent: '#f2b705',
      neutral: '#e9e2cf',
      background: '#fbf6e8',
      text: '#1b2a5e',
    },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Jost',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 58',
      lineHeights: 'Display 1.0, body 1.55',
      letterSpacing: 'Display 0.02em, labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #e07a00, cream text, radius 12px 24px 12px 24px (finned), padding 14px 30px, 700, 2px navy border, hard shadow 4px 4px 0 #1b2a5e',
      secondary: 'Cream bg, 2px navy border, finned radius, same shadow',
      tertiary: 'Navy 700 link with ✷ sparkle prefix on hover',
      radius: 'Finned: 12px 24px 12px 24px on interactive; 16px cards',
      hover: 'Shadow grows to 6px + lift -2px, 180ms; sparkles spin',
      cards: 'Cream panels, 2px navy border, radius 16px, shadow 5px 5px 0 #1b2a5e, starburst corner accents',
      forms: '2px navy border inputs, cream bg, red focus ring',
      navigation: 'Chrome-gradient bar with navy links and red active fin underline',
      modals: 'Cream panel with chrome title bar and finned corners',
    },
    accent: '#e07a00',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Events', 'Gaming', 'Kids'],
    signatureCss: `
.dv-btn { border: 2px solid #1b2a5e; box-shadow: 4px 4px 0 #1b2a5e; transition: transform .18s, box-shadow .18s; }
.dv-btn:hover { transform: translateY(-2px); box-shadow: 6px 6px 0 #1b2a5e; }
.dv-card { border: 2px solid #1b2a5e; box-shadow: 5px 5px 0 #1b2a5e; }
.dv-logo { letter-spacing: .02em; }
.dv-stats-band { background: repeating-linear-gradient(45deg, rgba(27,42,94,.05) 0 16px, transparent 16px 32px); }`,
    author: 'Riko Tanaka',
    createdAt: '2026-06-02',
    popularity: 83,
    trending: true,
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    category: 'Luxury',
    tags: ['deco', 'geometric-lux', 'gatsby', 'gilded', 'symmetry'],
    description: 'Gatsby grandeur: gold geometry, sunbursts, symmetry.',
    designPhilosophy:
      'Chrysler Building energy. Strict symmetry, stepped geometry, sunburst fans, and gold-on-emerald opulence. Every element is framed, every frame is ornamented, and every ornament is architectural. For hotels, spirits, theaters, and brands that consider 1929 the high-water mark of taste.',
    colors: {
      primary: '#d4af37',
      secondary: '#0f3d33',
      accent: '#7a1f2b',
      neutral: '#143c34',
      background: '#0f3d33',
      text: '#f0e6c8',
    },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Jost',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 52',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display 0.08em, labels 0.3em uppercase',
    },
    components: {
      primary: 'Gold #d4af37 solid, emerald text, radius 0, padding 14px 40px, letter-spaced uppercase, stepped shadow 3px 3px 0 #7a1f2b',
      secondary: '1px gold border, transparent, champagne text, same metrics',
      tertiary: 'Gold letter-spaced link with diamond separator on hover',
      radius: '0 — Deco is all right angles and deliberate arches',
      hover: 'Gold fill spreads from center outward 300ms; frames brighten',
      cards: 'Emerald panels with double gold border (1px outer, 1px inner 4px inset) and corner sunburst stamps',
      forms: 'Underline inputs with gold focus line and centered labels',
      navigation: 'Centered wordmark, diamond separators between links, gold hairlines above/below',
      modals: 'Emerald panel with triple gold frame and sunburst backdrop',
    },
    accent: '#d4af37',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Events', 'Fashion', 'Restaurant'],
    signatureCss: `
.dv-hero { background: repeating-conic-gradient(from 0deg at 50% 120%, rgba(212,175,55,.06) 0deg 4deg, transparent 4deg 8deg); }
.dv-card { box-shadow: inset 0 0 0 1px #d4af37, inset 0 0 0 5px #0f3d33, inset 0 0 0 6px rgba(212,175,55,.5); }
.dv-h2 { text-align: center; letter-spacing: .08em; }
.dv-section { text-align: center; }
.dv-hero h1 em { font-style: normal; color: #d4af37; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-06-08',
    popularity: 85,
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave',
    category: 'Retro',
    tags: ['vapor', 'aesthetic', 'pink-cyan', '90s', 'glitch'],
    description: 'ＡＥＳＴＨＥＴＩＣ: pink-cyan grids, statues, nostalgia.',
    designPhilosophy:
      'The mall at the end of time. Full-width pink-to-cyan gradients, wireframe grids stretching to infinity, Roman busts, and Japanese katakana flourishes. Vaporwave is sincere nostalgia wearing irony as armor — and underneath, a real design system with real contrast ratios.',
    colors: {
      primary: '#ff71ce',
      secondary: '#01cdfe',
      accent: '#05ffa1',
      neutral: '#2d1b69',
      background: '#1a103c',
      text: '#f9f5ff',
    },
    typography: {
      displayFont: 'Monoton',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 18 / 24 / 34 / 52',
      lineHeights: 'Display 1.1, mono body 1.7',
      letterSpacing: 'Display 0.06em, fullwidth labels 0.2em',
    },
    components: {
      primary: 'Gradient 90deg #ff71ce→#b967ff, white text, radius 4px, padding 14px 32px, 700, glow 0 0 20px rgba(255,113,206,.5)',
      secondary: '1px #01cdfe border, transparent, cyan text, cyan glow on hover',
      tertiary: 'Cyan mono link with ►► prefix',
      radius: '4px — sharp but not brutalist; it is dreaming',
      hover: 'Glow intensifies + hue-rotate(15deg) 250ms; grid scrolls faster',
      cards: 'Translucent purple rgba(45,27,105,.55) panels, 2px cyan border, blur backdrop, magenta glow shadow',
      forms: 'Dark inputs with cyan borders, mono placeholders, magenta focus ring',
      navigation: 'Full-width gradient bar with mono uppercase links',
      modals: 'Purple glass panel with gradient border-image and ＳＹＳＴＥＭ title',
    },
    accent: '#ff71ce',
    motif: 'gradient-hero',
    layout: 'hero-cards',
    useCases: ['Music', 'Events', 'Gaming'],
    signatureCss: `
.dv-stage { background-image: linear-gradient(180deg, rgba(26,16,60,0) 60%, rgba(1,205,254,.15)), repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,255,255,.02) 3px 4px); }
.dv-hero { background: linear-gradient(180deg, rgba(255,113,206,.25), transparent 70%); }
.dv-hero h1 { text-shadow: 3px 3px 0 #ff71ce, -3px -3px 0 #01cdfe; }
.dv-btn-primary { background: linear-gradient(90deg, #ff71ce, #b967ff); box-shadow: 0 0 20px rgba(255,113,206,.5); }
.dv-btn-primary:hover { filter: hue-rotate(15deg); }
.dv-marquee { color: #05ffa1; }`,
    author: 'Dmitri Volkov',
    createdAt: '2026-06-15',
    popularity: 88,
    trending: true,
  },
  {
    id: 'tactical-hud',
    name: 'Tactical HUD',
    category: 'Brutalism',
    tags: ['military', 'huds', 'ops-center', 'mono', 'mission'],
    description: 'Mission-control chrome: brackets, telemetry, alert states.',
    designPhilosophy:
      'The operations room at 0300. Every pixel is instrumented: corner brackets, live telemetry, monospaced readouts, and status colors that mean something. Restraint through function — decoration is a liability when lives (or SLAs) are on the line. For infrastructure dashboards, security tools, and anything with an incident channel.',
    colors: {
      primary: '#4ade80',
      secondary: '#94a3b8',
      accent: '#fbbf24',
      neutral: '#1c232b',
      background: '#0c0f12',
      text: '#d7e0e8',
    },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'IBM Plex Mono',
      scale: '11 / 13 / 15 / 18 / 24 / 32 / 48',
      lineHeights: 'Display 1.1, mono 1.55',
      letterSpacing: 'Display 0.06em uppercase, mono 0.02em',
    },
    components: {
      primary: 'Solid #4ade80, gunmetal text, radius 2px, padding 12px 26px, 700 uppercase 0.1em, 1px darker green border',
      secondary: '1px #94a3b8 border, transparent, steel text',
      tertiary: 'Green mono link with [ ] bracket wrap on hover',
      radius: '2px — machined, not rounded',
      hover: 'Border brightens + background lightens 6%, 120ms; bracket gap widens',
      cards: 'Panel #141a21 with corner brackets, 1px #2a3540 border, mono header strip, padding 20px',
      forms: 'Mono inputs, 1px borders, focus = green border + blinking block cursor feel',
      navigation: 'Top bar with SYS:ONLINE status dot, mono links, alert counter right',
      modals: 'Ops panel with red header strip for destructive actions',
    },
    accent: '#4ade80',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['AI/ML', 'Crypto', 'SaaS'],
    signatureCss: `
.dv-card { position: relative; border: 1px solid #2a3540; }
.dv-card::before, .dv-card::after { content: ''; position: absolute; width: 12px; height: 12px; border-color: #4ade80; border-style: solid; }
.dv-card::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.dv-card::after { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
.dv-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #94a3b8; }
.dv-btn { font-family: 'IBM Plex Mono', monospace; text-transform: uppercase; }`,
    author: 'Dmitri Volkov',
    createdAt: '2026-06-22',
    popularity: 80,
  },
]
