import type { DesignSystem } from '../types'

export const organicDesigns: DesignSystem[] = [
  {
    id: 'nature-inspired',
    name: 'Nature-Inspired',
    category: 'Organic',
    tags: ['nature', 'forest', 'earth', 'calm', 'trail'],
    description: 'Forest greens and topographic calm for outdoor brands.',
    designPhilosophy:
      'A trail map you can read at a glance. Deep forest green, cream paper, topo-line textures, and Manrope’s sturdy clarity. Sturdy without being stiff — like good hiking boots: reliable, comfortable, unremarkable in the best way.',
    designDetails:
      'Cream #f7f4ec paper with forest #2f4a3c primary and rust accents. Topo-line texture (concentric CSS radial gradients at 2% opacity) backgrounds hero sections. Manrope for everything; weight contrast does the hierarchy work. Cards have 1px earth borders and slight cream tints. Buttons are sturdy rectangles with 2px radius.',
    colors: {
      primary: '#2f4a3c',
      secondary: '#7ba05b',
      accent: '#c16e3f',
      neutral: '#e8e3d3',
      background: '#f7f4ec',
      text: '#25332a',
    },
    typography: {
      displayFont: 'Manrope',
      bodyFont: 'Manrope',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 56',
      lineHeights: 'Display 1.1, body 1.65',
      letterSpacing: 'Labels 0.1em uppercase, display -0.01em',
    },
    components: {
      primary: 'Solid #2f4a3c, cream text, radius 2px, padding 14px 28px, 600',
      secondary: '1px #2f4a3c border, transparent bg, forest text',
      tertiary: 'Forest text link with leaf icon and 2px underline on hover',
      radius: '2px buttons, 8px cards — sturdy, near-square',
      hover: '200ms darken + 1px lift; topo texture shifts slowly',
      cards: 'Cream-tinted white, 1px #d9d2bd border, radius 8px, padding 28px',
      forms: '2px radius inputs, 1px #c9c2ab borders, forest focus ring',
      navigation: 'Cream bar with forest text, topo texture at 1% opacity',
      modals: 'Cream sheet with 1px earth border and leaf corner decoration',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '24 / 40 / 64',
      grid: '12-col 1160px; feature sections in 2:1 splits',
    },
    motion: {
      pageLoad: 'Hero fades up 16px, 500ms; topo lines drift in',
      hoverStates: '200ms darken/lift; no springs, no bounce',
      transitions: 'Grounded ease-out, nothing floats longer than 300ms',
      scroll: 'Topo textures parallax 0.97x — barely there, like wind',
    },
    accessibility:
      '#25332a on cream 12.8:1; white on forest 8.1:1. Focus is 3px forest ring. Topo textures aria-hidden. All icon buttons carry text labels or aria-labels.',
    responsive:
      'Feature splits stack under 820px. Display clamps 2.25rem→3.5rem. Nav condenses under 640px with forest hamburger. Cards stay bordered at all sizes.',
    codeExample:
      '<section class="trailhead">\n  <h1>Built for the long way round.</h1>\n  <p>Gear for people who read contour lines for fun.</p>\n  <button class="btn-forest">Plan your route</button>\n</section>',
    accent: '#2f4a3c',
    motif: 'leaf-divider',
    signatureCss: `
.dv-stage { background-image: repeating-radial-gradient(circle at 30% 40%, transparent 0 38px, rgba(47,74,60,.05) 38px 40px), repeating-radial-gradient(circle at 80% 70%, transparent 0 52px, rgba(47,74,60,.04) 52px 54px); }
.dv-hero h1 { font-weight: 800; }
.dv-card { background: #fffdf7; }
.dv-leaf { display: inline-block; animation: dv-sway 5s ease-in-out infinite; }
@keyframes dv-sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }`,
    author: 'Ana Reyes',
    createdAt: '2026-02-18',
    popularity: 83,
  },
  {
    id: 'biophilic',
    name: 'Biophilic',
    category: 'Organic',
    tags: ['wellness', 'flowing', 'spa', 'curves', 'sage'],
    description: 'Spa serenity: sage, curves, and breathing-room rhythm.',
    designPhilosophy:
      'The interface inhales. Sage green and soft clay, blob and arch shapes, Cormorant’s elegance, and rhythm that mimics breathing — expand, hold, release. Built for wellness, spas, and anything that wants your shoulders to drop.',
    designDetails:
      'Sage #a8bfa8 and clay #c9a227-family warm the cream canvas. Cormorant Garamond display with Zilla Slab body — elegant but readable. Arches (border-radius 999px 999px 0 0) frame images; blob shapes via border-radius morph. Buttons are pill-shaped with slow fills. A breathing animation (scale 1→1.04 over 4s) lives in the hero orb.',
    colors: {
      primary: '#5f7a5f',
      secondary: '#c9a227',
      accent: '#8faf8f',
      neutral: '#e9e9df',
      background: '#f4f4ea',
      text: '#3d4a3d',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Zilla Slab',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 60',
      lineHeights: 'Display 1.15, body 1.7',
      letterSpacing: 'Display 0, labels 0.14em uppercase',
    },
    components: {
      primary: 'Pill #5f7a5f, cream text, padding 14px 36px, 500, fills to #4a634a over 400ms',
      secondary: 'Pill with 1px #5f7a5f border, transparent, same patience',
      tertiary: 'Sage text link with slow underline draw, 400ms',
      radius: 'Pills, arches (999px 999px 0 0), blobs (60% 40% 55% 45%)',
      hover: 'Slow 400ms fills; nothing snaps; blobs morph slowly',
      cards: 'Cream cards with arch tops, 1px #d6d6c6 border, padding 32px',
      forms: 'Pill inputs with 1px sage borders, slow sage focus glow',
      navigation: 'Transparent over hero, pill links, sage active dot',
      modals: 'Arch-topped cream sheet, slow fade 500ms',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 48 / 96 / 160',
      paddingScale: '32 / 56 / 88',
      grid: 'Centered 1000px; alternating text/arch image rows',
    },
    motion: {
      pageLoad: 'Hero orb breathes (scale 1→1.04, 4s loop); text fades 600ms',
      hoverStates: '400ms fills; blobs morph 600ms',
      transitions: 'Slow, organic ease-in-out, 400–600ms',
      scroll: 'Sections rise 24px over 800ms; blobs counter-drift',
    },
    accessibility:
      '#3d4a3d on cream 9.6:1; cream on sage 4.6:1 at button weights. Focus 3px sage ring. Breathing animation pauses under reduced-motion. Arch shapes never clip text.',
    responsive:
      'Arch frames become simple rounded tops under 640px. Display clamps 2.5rem→3.75rem. Alternating rows stack; orb shrinks and centers.',
    codeExample:
      '<section class="spa">\n  <div class="orb"></div>\n  <h1>Breathe in. Begin.</h1>\n  <p>Slow rituals for fast lives.</p>\n  <a class="pill" href="#">Book a session</a>\n</section>',
    accent: '#5f7a5f',
    motif: 'wave-section',
    signatureCss: `
.dv-orb { width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #cfe0cf, #8faf8f); animation: dv-breathe 4s ease-in-out infinite; margin-inline: auto; }
@keyframes dv-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
.dv-hero h1 { font-weight: 500; }
.dv-card { border-radius: 999px 999px 12px 12px; }
.dv-section + .dv-section { border-top: 1px solid #d6d6c6; }`,
    author: 'Ana Reyes',
    createdAt: '2026-03-08',
    popularity: 85,
  },
  {
    id: 'botanical',
    name: 'Botanical',
    category: 'Organic',
    tags: ['botanical', 'garden', 'vines', 'romantic', 'greenhouse'],
    description: 'Greenhouse romance: deep botanicals and vine ornaments.',
    designPhilosophy:
      'A Victorian greenhouse in web form. Deep botanical greens, rose accents, vine flourishes, and Cormorant italic display. Romantic without being frilly — think heritage seed catalogs with modern usability.',
    designDetails:
      'Deep green #1e3528 canvas for hero moments, cream #f6f3ea for content. Cormorant Garamond italics for display; EB Garamond for body. Vine ornaments are SVG-free CSS: curved border-radius flourishes and ✻ glyph dividers. Rose #c76b7e-family accents for links and one CTA. Cards look like seed packets: bordered, labeled, matted.',
    colors: {
      primary: '#1e3528',
      secondary: '#c76b7e',
      accent: '#7fa074',
      neutral: '#e5e2d2',
      background: '#f6f3ea',
      text: '#22301f',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'EB Garamond',
      scale: '12 / 15 / 17 / 21 / 28 / 38 / 58',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.01em, labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #1e3528, cream text, radius 2px, padding 14px 32px, 500, letter-spaced uppercase',
      secondary: '1px #1e3528 border, transparent, same metrics',
      tertiary: 'Rose italic text link with vine underline on hover',
      radius: '2px cards/buttons; vine flourishes are decorative only',
      hover: '200ms tint shifts; vine underline draws 300ms',
      cards: 'Seed-packet style: cream, 1px #22301f border, inner 4px matting border, plaque label top',
      forms: 'Underline inputs like ledger rows, deep green focus, small-caps labels',
      navigation: 'Cream bar with ✻ divider glyphs between links',
      modals: 'Cream sheet with double vine border and rose seal',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 144',
      paddingScale: '24 / 40 / 56',
      grid: '12-col 1140px; seed packets in 3-col rhythm',
    },
    motion: {
      pageLoad: 'Vine flourishes draw (scaleX) 500ms; text fades after',
      hoverStates: 'Tint shifts 200ms; vine underlines 300ms',
      transitions: 'Gentle, botanical, 200–300ms',
      scroll: 'Seed packets rise gently at 25% visibility',
    },
    accessibility:
      '#22301f on cream 12.1:1; cream on deep green 11.2:1. Rose holds 5.2:1 on cream. Focus 3px deep-green outline. Vine glyphs decorative and aria-hidden.',
    responsive:
      'Seed packets stack under 760px. Display clamps 2.25rem→3.5rem. ✻ dividers wrap gracefully. Vine flourishes hide under 480px to save space.',
    codeExample:
      '<section class="greenhouse">\n  <p class="cultivar">Cultivar No. 12</p>\n  <h1>Gardens, <em>carefully</em> kept.</h1>\n  <p>Rare seeds and rarer patience.</p>\n  <a class="btn-seed" href="#">Request a catalog</a>\n</section>',
    accent: '#1e3528',
    motif: 'leaf-divider',
    signatureCss: `
.dv-cultivar { font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #7fa074; }
.dv-hero h1 em { color: #c76b7e; }
.dv-card { border: 1px solid #22301f; box-shadow: inset 0 0 0 4px #f6f3ea, inset 0 0 0 5px rgba(34,48,31,.35); }
.dv-divider { color: #7fa074; letter-spacing: .5em; text-align: center; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-04-05',
    popularity: 80,
  },
]
