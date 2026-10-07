import type { DesignSystem } from '../types'

export const playfulDesigns: DesignSystem[] = [
  {
    id: 'pastel-playful',
    name: 'Pastel Playful',
    category: 'Playful',
    tags: ['pastel', 'soft', 'rounded', 'friendly', 'kawaii'],
    description: 'Sorbet colors, cloud-soft shapes, zero stress.',
    designPhilosophy:
      'A hug in UI form. Sorbet pastels, pill everything, gentle springs, and friendly Quicksand roundedness. Designed to lower the user’s heart rate — but with enough contrast and structure to stay production-grade, not precious.',
    colors: {
      primary: '#f9a8d4',
      secondary: '#a7e8c6',
      accent: '#7c6ff0',
      neutral: '#ffeef4',
      background: '#fffafd',
      text: '#4a3b52',
    },
    typography: {
      displayFont: 'Quicksand',
      bodyFont: 'Quicksand',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 54',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display 0, labels 0.05em',
    },
    components: {
      primary: 'Pill #7c6ff0, white text, padding 14px 30px, 700, shadow 0 4px 0 #564ac2, squashes to 0 1px on hover',
      secondary: 'Pill #a7e8c6, #4a3b52 text, shadow 0 4px 0 #79c9a2',
      tertiary: 'Cocoa text link with hand-drawn Caveat arrow on hover',
      radius: '16px inputs, 20px cards, 999px buttons',
      hover: 'Squash: shadow collapses, translateY(2px), 180ms ease-out',
      cards: 'White, radius 20px, 2px #f3d7e4 border, padding 28px, shadow 0 6px 0 rgba(74,59,82,.08)',
      forms: 'Pill inputs, 2px #f3d7e4 borders, lilac focus ring 0 0 0 4px rgba(124,111,240,.25)',
      navigation: 'Floating pill nav with pastel active dot indicators',
      modals: 'White rounded sheet radius 24px, pastel backdrop tint rgba(249,168,212,.2)',
    },
    accent: '#7c6ff0',
    motif: 'soft-shadows',
    layout: 'hero-cards',
    useCases: ['Kids', 'Health', 'Education'],
signatureCss: `
.dv-btn { box-shadow: 0 4px 0 rgba(86,74,194,.9); transition: transform .18s ease-out, box-shadow .18s ease-out; }
.dv-btn:hover { transform: translateY(2px); box-shadow: 0 1px 0 rgba(86,74,194,.9); }
.dv-card { border: 2px solid #f3d7e4; }
.dv-hero h1 { font-weight: 700; }
.dv-hero h1::after { content: '♡'; color: #f9a8d4; font-size: .6em; vertical-align: super; }`,
    author: 'Bea Solano',
    createdAt: '2026-02-08',
    popularity: 88,
  },
  {
    id: 'rainbow-playful',
    name: 'Rainbow Playful',
    category: 'Playful',
    tags: ['colorful', 'kids', 'confetti', 'bold', 'emoji'],
    description: 'Confetti cannon energy with bold rounded blocks.',
    designPhilosophy:
      'Maximum delight per pixel. Chunky rounded blocks in candy-bright colors, confetti borders, emoji as iconography, and Gochi/Bungee-style display for shouting-friendly headlines. Built for kids’ products and anyone selling joy.',
    colors: {
      primary: '#ff6b6b',
      secondary: '#ffd93d',
      accent: '#4d96ff',
      neutral: '#fff3e0',
      background: '#ffffff',
      text: '#333333',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 22 / 30 / 40 / 60',
      lineHeights: 'Display 1.05, body 1.55',
      letterSpacing: 'Display 0.02em, labels 0.08em uppercase',
    },
    components: {
      primary: 'Solid #ff6b6b, white text, radius 999px, padding 14px 32px, 800, shadow 0 5px 0 #c43d3d',
      secondary: 'Solid #ffd93d, #333 text, shadow 0 5px 0 #cfab1e',
      tertiary: 'Nunito 800 link with emoji prefix 🎈 and wavy underline on hover',
      radius: '999px buttons, 24px cards — everything chunky',
      hover: 'Buttons squash + rotate -1deg, 200ms; cards tilt 1deg',
      cards: 'White, 4px #333 border, radius 24px, shadow 8px 8px 0 currentTint, padding 28px',
      forms: 'Rounded inputs with 3px #333 borders, focus shadow rainbow ring',
      navigation: 'Sticky bar with emoji logo, candy gradient underline bar',
      modals: 'White card style with confetti header strip',
    },
    accent: '#ff6b6b',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Kids', 'Events', 'E-commerce'],
signatureCss: `
.dv-stage { background-image: radial-gradient(3px 3px at 10% 20%, #ff6b6b 40%, transparent 41%), radial-gradient(3px 3px at 70% 40%, #4d96ff 40%, transparent 41%), radial-gradient(3px 3px at 40% 80%, #ffd93d 40%, transparent 41%); background-size: 220px 220px; }
.dv-card { border: 4px solid #333; transition: transform .2s; }
.dv-card:hover { transform: rotate(-1deg) scale(1.02); }
.dv-hero h1 { text-shadow: 3px 3px 0 rgba(51,51,51,.15); }`,
    author: 'Bea Solano',
    createdAt: '2026-03-30',
    popularity: 86,
  },
  {
    id: 'toybox-round',
    name: 'Toybox Round',
    category: 'Playful',
    tags: ['apps', 'soft-ui', 'tactile', 'claymorphism'],
    description: 'Claymorphism: squeezable pastel 3D toy buttons.',
    designPhilosophy:
      'Everything looks squeezable. Clay-style double shadows (inner highlight + outer drop), soft pastel-on-pastel pairings, and Fredoka’s toy-round forms. A tactile, app-store-friendly playful system that still passes contrast checks.',
    colors: {
      primary: '#ff8a5c',
      secondary: '#ffd166',
      accent: '#06d6a0',
      neutral: '#eaf4f4',
      background: '#f7fbfb',
      text: '#31493c',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Fredoka',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 56',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: '0 everywhere — Fredoka carries the roundness',
    },
    components: {
      primary: 'Solid #ff8a5c, white text, radius 20px, padding 14px 32px, 600, inner top highlight + outer shadow 0 8px 20px rgba(255,138,92,.4)',
      secondary: 'Solid white, #31493c text, same clay treatment with grey shadow',
      tertiary: 'Coral text link with rounded underline that thickens on hover',
      radius: '20px buttons/inputs, 28px cards, 36px modals',
      hover: 'Lifts 4px with deeper clay shadow, 220ms ease-out; presses back on click',
      cards: 'White clay: radius 28px, inner white highlight, outer shadow 0 12px 32px rgba(49,73,60,.12), padding 32px',
      forms: 'Clay inputs radius 20px, inner shadow top, coral focus ring',
      navigation: 'Floating clay bar radius 999px with soft shadow, active pill coral',
      modals: 'Clay sheet radius 36px with blob decoration corners',
    },
    accent: '#ff8a5c',
    motif: 'big-stat-row',
    layout: 'split-hero',
    useCases: ['Kids', 'SaaS', 'Health'],
signatureCss: `
.dv-btn { border-radius: 20px; box-shadow: inset 0 6px 12px rgba(255,255,255,.35), 0 8px 20px rgba(255,138,92,.4); transition: transform .22s ease-out, box-shadow .22s ease-out; }
.dv-btn:hover { transform: translateY(-4px); box-shadow: inset 0 6px 12px rgba(255,255,255,.35), 0 14px 28px rgba(255,138,92,.5); }
.dv-card { box-shadow: inset 0 8px 16px rgba(255,255,255,.6), 0 12px 32px rgba(49,73,60,.12); }
.dv-hero h1 { font-weight: 600; }`,
    author: 'Riko Tanaka',
    createdAt: '2026-04-12',
    popularity: 79,
  },
  {
    id: 'gumball',
    name: 'Gumball Machine',
    category: 'Playful',
    tags: ['candy', 'round', 'surprise', 'chunky'],
    description: 'Chunky glass-dome fun — turn the knob, get a color, smile anyway.',
    designPhilosophy:
      'The whole system is a gumball machine: a serious chrome base (solid layout, honest hierarchy) with a glass dome of color on top. Every interaction should dispense something — a hue, a confetti burst, a stamp. Utility stays chewy: nothing is so playful it stops working, nothing so useful it stops being fun.',
    colors: {
      primary: '#ef476f',
      secondary: '#118ab2',
      accent: '#ffd166',
      neutral: '#f4f1f7',
      background: '#fffdf6',
      text: '#241d33',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 68',
      lineHeights: 'Display 1.05, body 1.62',
      letterSpacing: 'Display 0, labels 0.1em uppercase',
    },
    components: {
      primary:
        'Candy #ef476f knob, ink 2px border, radius 999px, cream text, weight 700, highlight dot top-left, press = translate 2px + shadow shrink',
      secondary: 'Cream knob with 2px ink border and blueberry text; hover fills blueberry 12%',
      tertiary: 'Blueberry underlined link with a tiny ● dispenser dot before it',
      radius: '999px buttons, 22px cards, 16px inputs — jawbreaker geometry',
      hover: 'Dispense: 150ms press-in with a one-bounce settle; badges wobble 4deg once',
      cards: 'Cream tray cards, 2px ink border, 22px radius, one candy-corner dot, padding 26px, shadow 0 4px 0 ink',
      forms: 'Pill inputs with 2px ink borders; focus ring lemon 3px; labels bubble-rounded chips',
      navigation: 'Dome nav — links sit in half-circle glass chips; active chip fills candy red',
      modals: 'Dispenser tray: rounded 28px panel sliding up like the flap opening, 60% ink backdrop',
    },
    accent: '#ef476f',
    motif: 'halftone-dots',
    layout: 'hero-cards',
    useCases: ['Kids', 'E-commerce', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; box-shadow: 0 4px 0 rgba(36,29,51,.9); }
.dv-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 rgba(36,29,51,.9); }
.dv-card { border: 2px solid rgba(36,29,51,.9); border-radius: 22px !important; box-shadow: 0 4px 0 rgba(36,29,51,.9); }
.dv-hero h1 em { color: #118ab2; }`,
    author: 'Beatrix Kolb',
    createdAt: '2026-08-19',
    popularity: 90,
    trending: true,
  },
  {
    id: 'doodle-desk',
    name: 'Doodle Desk',
    category: 'Playful',
    tags: ['sketchy', 'notebook', 'hand-drawn', 'margin-notes'],
    description: 'A notebook that came alive — graph paper, marker heads, margin notes.',
    designPhilosophy:
      'Work looks better with a doodle in the margin. This system frames every component as notebook paper: graph grids, spiral bindings, tape, and marker annotations that talk back to the content. The hand-drawn layer comments on the typed layer — and the two always agree, because the doodle is the highlight, not the point.',
    colors: {
      primary: '#6d28d9',
      secondary: '#1e293b',
      accent: '#fde047',
      neutral: '#f8fafc',
      background: '#fefce8',
      text: '#1e293b',
    },
    typography: {
      displayFont: 'Be Vietnam Pro',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 66',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display -0.01em, annotations 0',
    },
    components: {
      primary:
        'Marker-blue rounded rect, radius 12px with one irregular corner (16px), white text, 2.5px ink border, highlighter sweep on hover',
      secondary: 'Index-card button: cream, ruled lines, 2px ink border, slight 0.8deg tilt',
      tertiary: 'Caveat-annotated link with a hand-drawn arrow pointing at it',
      radius: '12px with ±4px irregularities — nothing machine-perfect',
      hover: 'Highlighter swipe: yellow sweep behind text 200ms; tape corners lift 2px',
      cards: 'Index cards and taped polaroids: cream, ruled or graph lines, 2px ink border, tape strip top, 0.5-1.5deg tilts',
      forms: 'Fill-in-the-blank inputs: dotted bottom borders on paper; focus draws a marker box around the blank',
      navigation: 'Top spiral binding with tab links; the active tab is a bigger tab with a circled scribble',
      modals: 'A pulled-out notebook page: larger, spiral left edge, ink 25% backdrop, 240ms flip-in',
    },
    accent: '#6d28d9',
    motif: 'dashed-borders',
    layout: 'asymmetric',
    useCases: ['Education', 'Productivity', 'Portfolio'],
    signatureCss: `
.dv-site { background-image: linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.06) 1px, transparent 1px); background-size: 8px 8px; }
.dv-card { background: #fffef5; border: 2px solid rgba(30,41,59,.85); transform: rotate(-0.6deg); }
.dv-card:nth-child(even) { transform: rotate(0.7deg); }
.dv-hero h1 em { background: linear-gradient(transparent 55%, #fde047 55%); }
.dv-kicker { font-family: 'Caveat', cursive; font-size: 1.2em; text-transform: none; letter-spacing: 0; }`,
    author: 'Sana Qureshi',
    createdAt: '2026-08-21',
    popularity: 86,
  },
  {
    id: 'bounce-house',
    name: 'Bounce House',
    category: 'Playful',
    tags: ['inflatable', 'springy', 'oversized', 'bright'],
    description: 'Inflated UI you want to jump in — everything squishes, nothing breaks.',
    designPhilosophy:
      'Physics is the brand: everything has mass, and mass is delightful. Buttons compress, cards wobble, sections land with a squash-and-stretch. The palette is inflatable-vivid, the type is balloon-rounded, and the whole page behaves like a castle you are legally allowed to jump in. Beneath it, sober spacing keeps the bounce readable.',
    colors: {
      primary: '#e0479e',
      secondary: '#0e7fc0',
      accent: '#ffb703',
      neutral: '#eef6fb',
      background: '#ffffff',
      text: '#24243a',
    },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 26 / 36 / 72',
      lineHeights: 'Display 1.08, body 1.64',
      letterSpacing: 'Display 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Magenta balloon pill, radius 999px, white text, weight 800, gradient highlight, press squashes scaleY(0.94)',
      secondary: 'Pool-blue outline pill, 2.5px border, white fill; hover inflates 1.03',
      tertiary: 'Magenta link with a bouncing underline dot that hops on hover',
      radius: '999px buttons, 28px cards — everything inflated to max safe pressure',
      hover: 'Inflate 1.03 + 200ms squash on release; nothing translates, things change shape',
      cards: 'Balloon cards: 28px radius, white→tint gradient, 2px tint border, padding 28px, shadow 0 6px 0 tint',
      forms: 'Balloon inputs 999px radius; focus inflates the ring to 4px pool blue',
      navigation: 'Inflated raft bar: pill segments that squish when the active one lands',
      modals: 'Bounce castle panel: 32px radius, drops in with 2 bounces, 55% ink backdrop',
    },
    accent: '#e0479e',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Kids', 'Fitness', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.35), transparent 40%); }
.dv-btn:active { transform: scaleY(0.94) scaleX(1.04); }
.dv-card { border-radius: 28px !important; box-shadow: 0 6px 0 rgba(224,71,158,.25); }
.dv-hero h1 { text-shadow: 0.03em 0.03em 0 rgba(224,71,158,.3); }`,
    author: 'Poppy Lang',
    createdAt: '2026-08-23',
    popularity: 82,
  },
  {
    id: 'storybook-night',
    name: 'Storybook Night',
    category: 'Playful',
    tags: ['bedtime', 'moonlit', 'cozy-tale', 'illustrated'],
    description: 'A bedtime story at screen brightness — moonlit blues, soft whimsy.',
    designPhilosophy:
      'Playful, but for the hour when the lights go down. This system tells a story: dusk-navy paper, moon-cream type, one lantern-gold accent that walks the reader through the page like a night-light. Whimsy comes from illustration-like borders and star-scatter details — never from noise, because the reader is getting sleepy.',
    colors: {
      primary: '#f2c14e',
      secondary: '#2c3a5c',
      accent: '#9bb1d4',
      neutral: '#232f4e',
      background: '#1b2440',
      text: '#f5ecd7',
    },
    typography: {
      displayFont: 'Quicksand',
      bodyFont: 'Nunito',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 64',
      lineHeights: 'Display 1.12, body 1.72',
      letterSpacing: 'Display 0.005em, kicker 0.18em uppercase',
    },
    components: {
      primary:
        'Lantern-gold pill, dusk text, radius 999px, weight 700, warm glow 0 0 24px rgba(242,193,78,.35)',
      secondary: '1px rgba(245,236,215,.35) outline pill, cream text; hover glows faint gold',
      tertiary: 'Cream link with gold dotted underline (storybook footpath)',
      radius: '999px buttons, 20px cards with 8px fore-edge shading',
      hover: 'Night-light: elements brighten 8% with a soft gold glow, 300ms',
      cards:
        'Book pages #232f4e, 20px radius, 1px rgba(245,236,215,.16) border, padding 28px, subtle fore-edge gradient on the left',
      forms: 'Rounded inputs on navy with cream dotted focus underlines; labels in small-caps cream',
      navigation: 'Night-cap bar with moon-phase bullets between links; active link glows gold',
      modals: 'Pop-up book spread: center-creased panel that unfolds 320ms, backdrop dusk 70%',
    },
    accent: '#f2c14e',
    stage: '#141c33',
    motif: 'soft-shadows',
    layout: 'centered',
    useCases: ['Kids', 'Education', 'Health'],
    signatureCss: `
.dv-site { background: radial-gradient(90% 60% at 70% -10%, #2c3a5c, #1b2440 60%); }
.dv-section + .dv-section::before { content: '✦'; display: block; text-align: center; color: rgba(242,193,78,.6); margin-bottom: 1em; }
.dv-hero h1 em { color: #f2c14e; }
.dv-card { border-radius: 20px !important; }`,
    author: 'Elif Demir',
    createdAt: '2026-08-25',
    popularity: 88,
  },
  {
    id: 'arcade-pop',
    name: 'Arcade Pop',
    category: 'Playful',
    tags: ['arcade', 'pixel-adjacent', 'high-score', 'coin-op'],
    description: 'Coin-op energy without the pixel cosplay — glossy, loud, scorekeeping.',
    designPhilosophy:
      'The arcade cabinet, not the 8-bit sprite: glossy plastics, backlit marquees, coin-slot chrome, and a score counter always running. This is playful for teens and adults — competitive, fast, a little sweaty. Every interactive element responds like a button that owes you a combo, and the dashboard extras keep the leaderboard honest.',
    colors: {
      primary: '#ff2e63',
      secondary: '#1b1b3a',
      accent: '#08d9d6',
      neutral: '#252550',
      background: '#161636',
      text: '#f6f6ff',
    },
    typography: {
      displayFont: 'Bungee',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 20 / 26 / 38 / 76',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display 0.02em, HUD labels 0.14em uppercase',
    },
    components: {
      primary:
        'Backlit cherry-red slab, white text, radius 8px, 1px #000 inset + top gloss streak, weight 700, glow 0 0 20px rgba(255,46,99,.4)',
      secondary: 'Cyan outline slab on cabinet indigo; hover fills 15% and glows',
      tertiary: 'HUD-style link: cyan, monospace-ish tracking, bracket hover states',
      radius: '8px slabs, 12px panels — molded plastic, not bevels',
      hover: 'Credit insert: 150ms glow surge + 1px press; score chip increments on click',
      cards: 'Side-art panels #252550, 12px radius, 1px rgba(8,217,214,.25) border, padding 26px',
      forms: 'Slab inputs on indigo, cyan focus border + glow, HUD labels above',
      navigation: 'Marquee bar with a running attract-mode gradient; links are cabinet buttons',
      modals: 'Attract-mode panel: dark glass, cyan scanline shimmer, 240ms credit-drop-in',
    },
    accent: '#ff2e63',
    stage: '#101028',
    motif: 'glow-pulse',
    layout: 'dashboard',
    useCases: ['Gaming', 'Events', 'Music'],
    signatureCss: `
.dv-hero h1 { background: linear-gradient(180deg, #fff 20%, #ff2e63 60%, #08d9d6 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.dv-btn { box-shadow: inset 0 2px 0 rgba(255,255,255,.25), 0 0 20px rgba(255,46,99,.35) !important; }
.dv-label { letter-spacing: 0.14em; text-transform: uppercase; }`,
    author: 'Dex Harlow',
    createdAt: '2026-08-27',
    popularity: 84,
  },
  {
    id: 'jelly-toy',
    name: 'Jelly Toy',
    category: 'Playful',
    tags: ['jelly', 'translucent', 'squishy', 'glossy'],
    description: 'Translucent jelly components you can almost pinch — glossy, squishy, sweet.',
    designPhilosophy:
      'Components made of candy jelly: translucent fills, glossy specular highlights, and a wobble physics that answers every touch. The system stays soft-spoken where it counts — text is always solid ink for reading — while surfaces, chips, and buttons are the squishy layer. It is tactile design for screens that deserve more squish.',
    colors: {
      primary: '#ff6f91',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      neutral: '#eafaf1',
      background: '#fffdfa',
      text: '#2f2a3b',
    },
    typography: {
      displayFont: 'Fredoka',
      bodyFont: 'Quicksand',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 66',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Strawberry jelly pill: rgba(255,111,145,.75) fill, white gloss streak, 1px deep-strawberry bottom edge, white text, radius 999px',
      secondary: 'Lime jelly pill at 55% fill with ink text; hover adds gloss and thickens the bottom edge',
      tertiary: 'Ink link with a jelly underline that wobbles once on hover',
      radius: '999px buttons, 24px cards — jelly has no corners',
      hover: 'Wobble: one 300ms counter-oscillation (scaleX 1.03 / scaleY 0.97, then swap), then settle',
      cards:
        'Jelly panels at 60% fill, 24px radius, gloss streak, 1px tinted bottom edge, padding 28px, colored soft shadow 0 14px 30px rgba(255,111,145,.18)',
      forms: 'Jelly inputs 999px radius at 50% fill; focus fills to 75% and gloss brightens',
      navigation: 'Jelly chip bar — translucent chips that squish individually; active chip doubles its gloss',
      modals: 'A big jelly drop: 30px radius, deep fill 85%, lands with one wobble, 55% ink backdrop',
    },
    accent: '#ff6f91',
    motif: 'soft-shadows',
    layout: 'spotlight',
    useCases: ['Kids', 'E-commerce', 'Productivity'],
    signatureCss: `
.dv-btn { border-radius: 999px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.5), transparent 45%); box-shadow: 0 10px 24px rgba(255,111,145,.25) !important; }
.dv-card { border-radius: 24px !important; background-image: linear-gradient(160deg, rgba(255,255,255,.45), transparent 40%); }
.dv-hero h1 em { color: #4ecdc4; }`,
    author: 'Momo Arai',
    createdAt: '2026-08-29',
    popularity: 80,
  },
  {
    id: 'confetti-brew',
    name: 'Confetti Brew',
    category: 'Playful',
    tags: ['coffee', 'confetti', 'cafe', 'warm-fun'],
    description: 'A café that fired confetti cannons over the espresso bar — warm, loud, caffeinated.',
    designPhilosophy:
      'Morning energy with permission to celebrate. Coffee-brown warmth grounds the system; confetti accents (coral, mustard, mint) burst at exactly three places per page — the badge, the active state, the banner. The magazine arrangement reads like a café menu zine: specials first, stories alongside, foam art as section breaks.',
    colors: {
      primary: '#6f4e37',
      secondary: '#2e1f16',
      accent: '#ff7f6b',
      neutral: '#f1e7dc',
      background: '#faf3ea',
      text: '#2e1f16',
    },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 20 / 25 / 34 / 64',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display 0, tag labels 0.1em uppercase',
    },
    components: {
      primary:
        'Espresso pill, cream text, radius 14px, weight 700, with a coral confetti chip pinned at the top-right corner',
      secondary: 'Cream tag button with 2px espresso border and a mustard chip; hover tilts -1deg',
      tertiary: 'Underlined espresso link; the underline is a dashed steam line',
      radius: '14px buttons, 18px cards, 999px confetti chips',
      hover: 'Confetti pop: 3 tiny squares/circles burst from the button corner and fade, 400ms, once',
      cards: 'Chalkboard specials: #2e1f16 panels, cream chalk text, 18px radius, paper tag header, padding 26px',
      forms: 'Paper order-form inputs with 2px espresso borders; focus draws a coral cup-ring around the field',
      navigation: 'Menu-board bar with dotted separators; the active link wears a confetti chip',
      modals: 'Cake-box panel: cream with a coral ribbon band, opens 240ms, steam divider on top',
    },
    accent: '#ff7f6b',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Restaurant', 'Events', 'E-commerce'],
    signatureCss: `
.dv-card { background: #2e1f16; color: #faf3ea; border-radius: 18px !important; }
.dv-card .dv-link { color: #ffd166; }
.dv-hero h1 em { color: #ff7f6b; }
.dv-kicker { background: #ffd166; display: inline-block; padding: .15em .6em; border-radius: 999px; }`,
    author: 'Rosie Cafasso',
    createdAt: '2026-08-31',
    popularity: 77,
  },
]