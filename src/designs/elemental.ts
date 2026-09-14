import type { DesignSystem } from '../types'

export const elementalDesigns: DesignSystem[] = [
  {
    id: 'deep-current',
    name: 'Deep Current',
    category: 'Organic',
    tags: ['aquatic', 'ocean', 'deep', 'fluid', 'marine'],
    description: 'Abyssal blues, bioluminescent cyan, weightless depth.',
    designPhilosophy:
      'The ocean floor at 200 meters: pressure-dark blues, creatures that make their own light, and a silence that focuses. Interfaces here float — cards drift on soft shadows, accents glow like plankton, and every gradient moves vertically, descending. For marine tech, diving, aquariums, and anything that benefits from awe.',
    designDetails:
      'Vertical gradients from #07182b to #0d2c47, bioluminescent cyan #22d3ee-family accents with soft glow shadows, and pale foam text. Outfit rounded display; Manrope body. Cards have bubble-soft 16px radii and layered shadows (ambient + glow). Caustic light pattern via overlapping radial gradients at 4% opacity. Waves via border-radius scallops.',
    colors: {
      primary: '#0ea5c9',
      secondary: '#155e75',
      accent: '#67e8f9',
      neutral: '#123249',
      background: '#07182b',
      text: '#e0f2fe',
    },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'Manrope',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 56',
      lineHeights: 'Display 1.1, body 1.65',
      letterSpacing: 'Display -0.01em, labels 0.12em uppercase',
    },
    components: {
      primary: 'Solid #0ea5c9, deep-sea text #07182b, radius 999px, padding 14px 32px, 700, glow 0 0 24px rgba(34,211,238,.35)',
      secondary: '1px rgba(103,232,249,.4) border, transparent, foam text, glow on hover',
      tertiary: 'Cyan text link with wave underline on hover',
      radius: '16px cards, 999px buttons, 10px inputs',
      hover: 'Glow bloom + lift 3px, 250ms ease-out; bubbles rise (decoration)',
      cards: '#0d2c47 gradient panel, radius 16px, shadow 0 12px 32px rgba(2,8,20,.5) + inner top highlight, padding 28px',
      forms: 'Deep inputs with cyan focus ring 0 0 0 3px rgba(34,211,238,.25)',
      navigation: 'Floating glass bar, blur 12px, cyan active underline wave',
      modals: 'Deep panel radius 20px with cyan border glow, rise-in 300ms',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '24 / 40 / 64',
      grid: '12-col 1200px; feature rows in 2:1 splits',
    },
    motion: {
      pageLoad: 'Sections rise from depth (24px + blur 4px→0) 500ms staggered',
      hoverStates: 'Glow bloom and gentle buoyancy, 250ms',
      transitions: 'Fluid ease-out, weightless, never abrupt',
      scroll: 'Caustic light drifts slowly; cards rise at 20% visibility',
    },
    accessibility:
      'Foam on abyss 13.4:1; cyan on abyss 9.2:1. Focus 3px cyan ring. Glows are additive decoration, aria-hidden. prefers-reduced-motion keeps opacity fades only.',
    responsive:
      'Splits stack under 820px. Display clamps 2.25rem→3.5rem. Floating nav condenses under 640px. Glow shadows halve on mobile for performance.',
    codeExample:
      '<section class="reef">\n  <h1>Descend into <em>clarity</em>.</h1>\n  <p>Marine data platforms, without the murk.</p>\n  <button class="btn-glow">Dive in</button>\n</section>',
    accent: '#22d3ee',
    motif: 'wave-section',
    layout: 'split-hero',
    useCases: ['Travel', 'Health', 'SaaS'],
    signatureCss: `
.dv-hero { background: linear-gradient(180deg, rgba(13,44,71,0) 0%, rgba(13,44,71,.6) 100%), radial-gradient(40em 16em at 80% 20%, rgba(34,211,238,.12), transparent 70%); }
.dv-btn-primary { box-shadow: 0 0 24px rgba(34,211,238,.35); }
.dv-btn-primary:hover { box-shadow: 0 0 36px rgba(34,211,238,.5); transform: translateY(-3px); }
.dv-card { background: linear-gradient(180deg, #123249, #0d2c47); border: 1px solid rgba(103,232,249,.15); }
.dv-stats-band { background: linear-gradient(180deg, rgba(14,165,201,.12), rgba(7,24,43,0)); }`,
    author: 'Ana Reyes',
    createdAt: '2026-05-14',
    popularity: 82,
  },
  {
    id: 'desert-modern',
    name: 'Desert Modern',
    category: 'Organic',
    tags: ['desert', 'terracotta', 'warm', 'southwestern', 'sunset'],
    description: 'Canyon clay, sunset terracotta, palm-spring modernism.',
    designPhilosophy:
      'Palm Springs at golden hour: adobe walls, rust and clay layered against a sky that refuses blue. This system is warm architecture — thick borders instead of shadows, sun-baked neutrals, and geometry borrowed from mid-century desert modernism. For hospitality, travel, and artisan goods with heat in their story.',
    designDetails:
      'Sand #f6ede1 canvas, terracotta #c05b3c-family primary, canyon rust and sage secondary, ink-brown text. Jost geometric display; Karla body. Borders before shadows: 2px solid ink-brown frames everything. Arched image frames. Sunburst/step patterns (CSS repeating gradients) as section dividers. Buttons are chunky rectangles with offset pressed-state shadows.',
    colors: {
      primary: '#c05b3c',
      secondary: '#8a6f4d',
      accent: '#5f7a5f',
      neutral: '#eadcc8',
      background: '#f6ede1',
      text: '#3d2b22',
    },
    typography: {
      displayFont: 'Jost',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 60',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0, labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #c05b3c, sand text, radius 6px, padding 14px 32px, 600, border 2px #3d2b22, shadow 4px 4px 0 #3d2b22',
      secondary: 'Sand bg, 2px #3d2b22 border, same shadow',
      tertiary: 'Terracotta text link with step-underline on hover',
      radius: '6px buttons, 12px cards, arches for media (999px 999px 0 0)',
      hover: 'Press-flat: translate(2px,2px) + shadow shrinks to 0, 150ms',
      cards: 'Sand panels, 2px ink-brown border, radius 12px, hard shadow 5px 5px 0, padding 28px',
      forms: '2px border inputs, sand bg, terracotta focus border + soft ring',
      navigation: '2px bottom border bar with uppercase letter-spaced links',
      modals: 'Arch-topped panel with 2px border and hard shadow',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 112',
      paddingScale: '24 / 40 / 56',
      grid: '12-col 1180px; postcard-style 2:3 feature cards',
    },
    motion: {
      pageLoad: 'Cards rise 12px, 400ms staggered, like sun-bleached film fades',
      hoverStates: 'Press-flat physics 150ms — tactile, physical, warm',
      transitions: 'Snappy ease-out; nothing floats',
      scroll: 'Step-pattern dividers parallax 0.97x',
    },
    accessibility:
      'Ink-brown on sand 11.3:1; sand on terracotta 4.6:1 at bold weights. Focus 3px terracotta outline. Borders carry state alongside color. Springs disabled under reduced-motion.',
    responsive:
      'Postcard cards stack under 760px; shadows shrink 5px→3px. Display clamps 2.25rem→3.75rem. Arches become rounded rects under 640px to save vertical space.',
    codeExample:
      '<section class="mesa">\n  <h1>Stay where the <em>air</em> is dry.</h1>\n  <p>Desert modern stays, 1962–today.</p>\n  <button class="btn-clay">Book a room</button>\n</section>',
    accent: '#c05b3c',
    motif: 'hard-shadows',
    layout: 'hero-cards',
    useCases: ['Travel', 'Restaurant', 'E-commerce'],
    signatureCss: `
.dv-btn { box-shadow: 4px 4px 0 #3d2b22; transition: transform .15s, box-shadow .15s; }
.dv-btn:hover { transform: translate(2px,2px); box-shadow: 1px 1px 0 #3d2b22; }
.dv-media, .dv-feature-media { border-radius: 999px 999px 0 0; }
.dv-stats-band { background: repeating-linear-gradient(90deg, rgba(192,91,60,.08) 0 24px, transparent 24px 48px); }
.dv-h2 { letter-spacing: 0; }`,
    author: 'Ana Reyes',
    createdAt: '2026-05-20',
    popularity: 79,
  },
  {
    id: 'ink-wash',
    name: 'Ink Wash',
    category: 'Minimalism',
    tags: ['sumi-e', 'monochrome', 'zen-brush', 'japanese', 'negative-space'],
    description: 'Sumi-e brush minimalism: ink, paper, and emptiness.',
    designPhilosophy:
      'One brushstroke says more than a thousand divs. Sumi-e discipline: greyscale ink on warm paper, asymmetric balance, and negative space treated as the primary material. The interface breathes like a hand scroll — unhurried, deliberate, precise where it matters and empty where it does not.',
    designDetails:
      'Warm paper #f7f4ee with near-black ink #1c1a17. Zilla Slab light for display with manual brush-weight contrast; Karla for function. Single vermilion hanko-stamp accent (used at most twice per page). Brushstroke divider: a CSS gradient that tapers. Layouts are asymmetric (7:5) with deliberate emptiness. Hover states are ink spreading (background tint grows).',
    colors: {
      primary: '#1c1a17',
      secondary: '#6b665e',
      accent: '#c73e2d',
      neutral: '#e7e2d8',
      background: '#f7f4ee',
      text: '#1c1a17',
    },
    typography: {
      displayFont: 'Zilla Slab',
      bodyFont: 'Karla',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 54',
      lineHeights: 'Display 1.2, body 1.8 — generous like a hand scroll',
      letterSpacing: 'Display 0.02em, labels 0.3em uppercase',
    },
    components: {
      primary: 'Solid ink #1c1a17, paper text, radius 2px, padding 12px 32px, 400 weight, letter-spaced',
      secondary: '1px ink border, transparent, weight 400',
      tertiary: 'Ink text link with taper-underline (gradient) on hover',
      radius: '2px — the brush does not round corners',
      hover: 'Ink-spread: background tint expands from 4% to 8%, 300ms',
      cards: 'Borderless — hairline top rule + enormous padding, shadow none',
      forms: 'Hairline bottom-border inputs, vermilion focus, spaced labels',
      navigation: 'Sparse top row; active link carries the vermilion seal dot',
      modals: 'Paper sheet with single brush rule top, fade 400ms',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 64 / 128 / 224',
      paddingScale: '32 / 64 / 96',
      grid: 'Asymmetric 7:5 ma grid, 1100px, emptiness preserved',
    },
    motion: {
      pageLoad: 'Content fades like ink absorbing, 600ms, no movement',
      hoverStates: '300ms tint spread only — motion as absorption',
      transitions: 'Slow, absorbent, 300–600ms',
      scroll: 'Vertical reveal masked like a scroll painting (clip-path)',
    },
    accessibility:
      'Ink on paper 15.9:1; vermilion only at large sizes (4.9:1). Focus 2px ink outline offset 4px. Emptiness is layout, not hidden content — all sections have text alternatives. Reduced-motion: fades only.',
    responsive:
      'Asymmetry relaxes to single column under 760px; emptiness preserved via padding, not removal. Display clamps 2rem→3.375rem. Vermilion seal becomes underline under 480px.',
    codeExample:
      '<section class="scroll">\n  <h1>One stroke.<br/><em>Enough.</em></h1>\n  <p class="quiet">A portfolio for work that waits.</p>\n  <a class="seal" href="#">View</a>\n</section>',
    accent: '#c73e2d',
    motif: 'serif-italic-hero',
    layout: 'editorial',
    useCases: ['Portfolio', 'Photography', 'Agency'],
    signatureCss: `
.dv-hero h1 em { font-style: normal; color: #6b665e; }
.dv-section + .dv-section::before { content: ''; display: block; height: 2px; margin-bottom: 3em; background: linear-gradient(90deg, #1c1a17 0%, rgba(28,26,23,.35) 55%, transparent 90%); }
.dv-kicker { color: #c73e2d; }
.dv-logo::after { content: '・'; color: #c73e2d; }`,
    author: 'Riko Tanaka',
    createdAt: '2026-05-27',
    popularity: 81,
  },
]
