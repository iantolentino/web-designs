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
    designDetails:
      'Pastel fills (mint, peach, butter, lilac) rotate through sections on a #fffafd canvas. Text is deep warm cocoa #4a3b52 for softness with AA contrast. All radii are 16px+; buttons are pills with bottom “press” shadows that squash on hover. Caveat handwriting appears for tiny annotations only — never for critical text.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '12 / 24 / 40 / 72 / 120',
      paddingScale: '16 / 28 / 40',
      grid: '2-col card rhythm, 1120px max, 24px gaps',
    },
    motion: {
      pageLoad: 'Cards bob up with 12px rise + soft spring, staggered 80ms',
      hoverStates: 'Squash physics 180ms; dots wiggle; never sharp',
      transitions: 'ease-out with slight overshoot (cubic-bezier(.34,1.3,.64,1))',
      scroll: 'Sections bob 8px as they enter; decorations drift ±4px',
    },
    accessibility:
      'Cocoa on white 10.4:1; white on lilac 4.6:1 at button weights. Focus rings are 4px lilac halos. All pastel decorations aria-hidden; semantics carried by real text. Springs disabled under reduced-motion.',
    responsive:
      'Cards stack under 768px with 16px gaps. Display clamps 2.25rem→3.375rem. Pill nav condenses; press-shadows shrink to 2px on mobile.',
    codeExample:
      '<section class="sorbet">\n  <h1>Soft tools for<br/>soft mornings.</h1>\n  <p>Everything gentle, nothing sticky.</p>\n  <button class="btn-pill">Try it free</button>\n</section>',
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
    designDetails:
      'A 6-color candy palette rotates section by section — every block a different fill with white chunky text or ink text depending on contrast. Bungee display font for headers; Nunito rounded body. Cards have thick white borders (4px) plus colored hard shadows. Confetti dots are pure CSS radial-gradients. Emojis serve as bullet icons.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 48 / 96',
      paddingScale: '20 / 32 / 48',
      grid: '2–3 col chunky grid, 120px gaps between sections',
    },
    motion: {
      pageLoad: 'Blocks bounce in with scale 0.8→1 overshoot, staggered 70ms',
      hoverStates: 'Squash + tilt physics, 200ms spring',
      transitions: 'Springs with overshoot everywhere, 200–300ms',
      scroll: 'Confetti dots parallax slowly; blocks counter-tilt',
    },
    accessibility:
      'White on #ff6b6b is 3.0:1 (large text only) — body uses #333 on white at 12.6:1. Focus rings 4px #4d96ff. Emojis are aria-hidden with real text labels adjacent. Springs off under reduced-motion.',
    responsive:
      'Blocks stack under 720px; shadows reduce 8px→4px. Bungee clamps 2rem→3.5rem. Emoji decorations hide under 480px to save room.',
    codeExample:
      '<section class="party" style="--tint:#ffd93d">\n  <h1>🎉 LET’S MAKE STUFF!</h1>\n  <p>Craft kits, coding camps, and chaos (organized).</p>\n  <button class="btn-candy">Start the fun</button>\n</section>',
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
    designDetails:
      'Clay recipe: elements sit on pastel tinted backgrounds, carry 16px+ radii, an inner white top highlight (inset 0 6px 12px rgba(255,255,255,.8)) and a colored outer shadow. Fredoka for display and UI; weights 400–700 only. One saturated coral for primary actions against mint and butter surfaces. Decorations are simple blob shapes in CSS.',
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
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 104',
      paddingScale: '20 / 32 / 48',
      grid: '2-col clay cards, 1160px, generous 32px gaps',
    },
    motion: {
      pageLoad: 'Clay pieces rise 16px with soft ease, 500ms staggered',
      hoverStates: 'Lift + shadow deepen, 220ms; press returns instantly',
      transitions: 'ease-out, gentle overshoot 1.02 max',
      scroll: 'Blobs parallax 0.9x; cards rise at 20% visibility',
    },
    accessibility:
      '#31493c on white 11.5:1; white on coral 2.9:1 (large/bold UI text only, paired with icons). Focus rings 4px coral. Inner highlights decorative. Reduced-motion keeps color shifts only.',
    responsive:
      'Clay cards stack under 760px; shadows compress. Display clamps 2.25rem→3.5rem. Floating nav becomes static bar under 640px.',
    codeExample:
      '<section class="clay">\n  <h1>Squeeze the interface.</h1>\n  <p>Tools that feel like toys, work like pro apps.</p>\n  <button class="btn-clay">Get the app</button>\n</section>',
    accent: '#ff8a5c',
    motif: 'soft-shadows',
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
]
