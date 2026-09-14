import type { DesignSystem } from '../types'

export const creativeDesigns: DesignSystem[] = [
  {
    id: 'abstract-art',
    name: 'Abstract Art',
    category: 'Creative',
    tags: ['bauhaus', 'shapes', 'primary', 'gallery', 'geometric'],
    description: 'Bauhaus playground: primary shapes floating on cream.',
    designPhilosophy:
      'A Kandinsky canvas that learned to scroll. Primary red/yellow/blue geometry on warm cream, circles overlapping rectangles, and display type as composition. The layout IS the artwork — but buttons still look pressable.',
    designDetails:
      'Cream #faf3e3 with pure geometry: #e63946 circles, #f1c40f triangles (clip-path), #3557a7 rectangles, all flat with no shadows. Fraunces black italic display collides deliberately with geometric blocks. Thin ink rules connect sections like gallery labels. Decorative shapes drift slowly on scroll (translateY parallax at different rates).',
    colors: {
      primary: '#e63946',
      secondary: '#3557a7',
      accent: '#f1c40f',
      neutral: '#efe6d0',
      background: '#faf3e3',
      text: '#1d1d1b',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 28 / 40 / 72',
      lineHeights: 'Display 0.95, body 1.6',
      letterSpacing: 'Display -0.02em, gallery labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #e63946, cream text, radius 999px (a circle-ish pill), padding 16px 36px, 700',
      secondary: 'Solid #3557a7, cream text, same metrics',
      tertiary: 'Ink text link with geometric diamond ◆ marker on hover',
      radius: 'Pills and circles only — geometry is the brand',
      hover: 'Shapes rotate 6deg and scale 1.05, 300ms; buttons invert to ink',
      cards: 'Flat color plates (red/blue/yellow rotation) with ink 1px border, padding 32px, no shadow',
      forms: 'Underline inputs with geometric focus diamond at line end',
      navigation: 'Ink top rule, geometric logo (circle+triangle), uppercase links',
      modals: 'Cream plate framed by overlapping geometric shapes',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 160',
      paddingScale: '24 / 40 / 64',
      grid: 'Deliberately asymmetric: 5:7, 3:9 splits; 1200px max',
    },
    motion: {
      pageLoad: 'Shapes slide in from different directions, 500ms staggered',
      hoverStates: 'Rotation + scale 300ms; playful but composed',
      transitions: 'ease-in-out 300ms; parallax slow and steady',
      scroll: 'Decorative shapes parallax at 0.85x / 1.1x rates',
    },
    accessibility:
      'Ink on cream 15.4:1; cream on red 4.6:1 (large/bold). Focus 3px ink outline. All decorative shapes aria-hidden with role=presentation. Color never alone: plates carry text labels.',
    responsive:
      'Asymmetric grids stack under 768px; shapes scale down 40%. Display clamps 2.75rem→4.5rem. Parallax disabled on touch and reduced-motion.',
    codeExample:
      '<section class="canvas">\n  <div class="shape circle"></div>\n  <div class="shape bar"></div>\n  <h1>Form follows<br/><em>feeling.</em></h1>\n  <a class="btn-round" href="#">See the work</a>\n</section>',
    accent: '#e63946',
    motif: 'editorial-columns',
    layout: 'hero-cards',
    useCases: ['Portfolio', 'Agency', 'Events'],
signatureCss: `
.dv-shape { position: absolute; pointer-events: none; }
.dv-shape.circle { width: 120px; height: 120px; border-radius: 50%; background: #e63946; }
.dv-shape.tri { width: 0; height: 0; border-left: 60px solid transparent; border-right: 60px solid transparent; border-bottom: 104px solid #f1c40f; }
.dv-shape.bar { width: 180px; height: 40px; background: #3557a7; }
.dv-hero h1 em { font-style: italic; font-weight: 900; }
.dv-card:hover { filter: invert(0.06); }`,
    author: 'Camille Roth',
    createdAt: '2026-01-22',
    popularity: 86,
  },
  {
    id: 'geometric-art',
    name: 'Geometric Art',
    category: 'Creative',
    tags: ['opus-art', 'pattern', 'grid-art', 'morandi', 'tiling'],
    description: 'Op-art tiling and pattern-as-interface.',
    designPhilosophy:
      'Pattern is the interface. Morandi-meets-op-art tiles, checker interruptions, and Bricolage Grotesque’s quirky geometry. Sections ARE tiles in a larger composition — the page reads as one artwork that happens to be usable.',
    designDetails:
      'Warm greys (#8d8477-family) with terracotta and ochre accents tile the page. Bricolage Grotesque display with Space Grotesk body. Checkerboard strips, half-circle scallop borders (repeating radial gradients), and diagonal stripe fills create rhythm. Buttons are squares with 1px ink borders and pattern-fill hovers.',
    colors: {
      primary: '#c65d3b',
      secondary: '#8d8477',
      accent: '#d9a441',
      neutral: '#e8e2d6',
      background: '#f2ede3',
      text: '#2b2724',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Space Grotesk',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 60',
      lineHeights: 'Display 1.0, body 1.6',
      letterSpacing: 'Display -0.01em, labels 0.12em uppercase',
    },
    components: {
      primary: 'Solid #c65d3b, cream text, radius 0, padding 14px 28px, 600, 1px #2b2724 border',
      secondary: 'Pattern-fill (diagonal stripes) with ink border on hover',
      tertiary: 'Ink link with ▚ pattern glyph prefix',
      radius: '0 — tiling demands square edges',
      hover: 'Pattern fills sweep in 250ms; tiles shift one step',
      cards: 'Cream tiles with 1px ink borders, scallop top edges, padding 28px',
      forms: 'Square inputs with checker focus borders',
      navigation: 'Scallop-edged bar with checker active state',
      modals: 'Tiled panel with pattern header band',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '24 / 40 / 56',
      grid: 'Strict 8px tiling rhythm; page IS a grid',
    },
    motion: {
      pageLoad: 'Tiles flip in (rotateY) sequentially, 400ms staggered',
      hoverStates: 'Pattern sweeps and tile shifts, 250ms',
      transitions: 'Mechanical ease, 250ms',
      scroll: 'Checker strips scroll at 1.1x (slightly faster) for op-art effect',
    },
    accessibility:
      '#2b2724 on cream 13.9:1; cream on terracotta 4.8:1 (large/bold). Focus 3px ink outline. Patterns are aria-hidden backgrounds; content sits on solid areas. No strobing patterns — all static or ≤3Hz.',
    responsive:
      'Tiles stack under 720px; scallop borders persist. Display clamps 2.25rem→3.75rem. Checker strips narrow on mobile.',
    codeExample:
      '<section class="tiles">\n  <h1>PATTERN ≠<br/>DECORATION.</h1>\n  <p>It’s structure you can feel.</p>\n  <button class="btn-tile">Enter the grid</button>\n</section>',
    accent: '#c65d3b',
    motif: 'pixel-grid',
    layout: 'magazine',
    useCases: ['Agency', 'E-commerce', 'Portfolio'],
signatureCss: `
.dv-scallop { height: 16px; background: radial-gradient(circle at 8px -4px, transparent 10px, #c65d3b 11px); background-size: 16px 16px; }
.dv-checker { background-image: conic-gradient(#2b2724 25%, transparent 0 50%, #2b2724 0 75%, transparent 0); background-size: 16px 16px; }
.dv-card { border: 1px solid #2b2724; }
.dv-card:hover { background-image: repeating-linear-gradient(45deg, rgba(198,93,59,.15) 0 8px, transparent 8px 16px); }`,
    author: 'Greta Hansen',
    createdAt: '2026-03-02',
    popularity: 77,
  },
  {
    id: 'illustration-heavy',
    name: 'Illustration-Heavy',
    category: 'Creative',
    tags: ['hand-drawn', 'sketchy', 'notebook', 'doodle', 'crayon'],
    description: 'A sketchbook that shipped: doodles, wobble, charm.',
    designPhilosophy:
      'The sketchbook became the product. Hand-drawn borders, Patrick Hand annotations, wobbly sketch boxes, and paper texture. Every component looks drawn — but hit targets, contrast, and semantics are rigorously digital.',
    designDetails:
      'Paper #fffef5 with pencil-grey ink #33312c. Patrick Hand for annotations/labels; Bitter for real body text (readability). Sketch borders use border-radius asymmetry (255px 15px 225px 15px/15px 225px 15px 255px) for wobble. Caveat for pull quotes. Doodle decorations: CSS squiggles, stars, arrows. Buttons look outlined with a hand-drawn double-line effect (box-shadow offset).',
    colors: {
      primary: '#e76f51',
      secondary: '#2a9d8f',
      accent: '#e9c46a',
      neutral: '#f1ede1',
      background: '#fffef5',
      text: '#33312c',
    },
    typography: {
      displayFont: 'Patrick Hand',
      bodyFont: 'Bitter',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 56',
      lineHeights: 'Display 1.2, body 1.7',
      letterSpacing: '0 — hand lettering carries itself',
    },
    components: {
      primary: 'White bg, 2px ink sketch-border (wobble radius), Patrick Hand label 20px, shadow 3px 3px 0 rgba(51,49,44,.25), presses flat on hover',
      secondary: 'Same sketch box, dashed 2px border',
      tertiary: 'Ink underlined link with hand-drawn arrow → on hover',
      radius: 'Wobble: 255px 15px 225px 15px / 15px 225px 15px 255px',
      hover: 'Squash to flat (shadow 0 0 0) + slight rotate -1deg, 200ms',
      cards: 'Sketch boxes with tape-strip (rotated semi-transparent rectangle) top center, paper bg',
      forms: 'Sketch-bordered inputs with pencil-grey placeholder, Patrick Hand labels',
      navigation: 'Top row with hand-drawn underline scribbles under active links',
      modals: 'Big sketch box with taped corners and doodle margin stars',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 32 / 56 / 104',
      paddingScale: '20 / 32 / 48',
      grid: 'Loose masonry that aligns on load; 1120px max',
    },
    motion: {
      pageLoad: 'Doodles draw in (stroke-dashoffset effect via opacity), cards pop',
      hoverStates: 'Press-flat physics 200ms; arrows scoot',
      transitions: '200ms ease; wobble springs on decorations',
      scroll: 'Margin doodles parallax gently (0.95x)',
    },
    accessibility:
      '#33312c on paper 13.3:1; white on terracotta 3.6:1 (large/bold only, paired with ink outlines). Focus 3px ink outline. Hand fonts used ≥18px only; body text is Bitter for readability. Doodles aria-hidden.',
    responsive:
      'Masonry stacks under 720px. Patrick Hand clamps 2.25rem→3.5rem. Tape strips shrink; margin doodles hide under 640px.',
    codeExample:
      '<section class="sketch">\n  <h1>big ideas, drawn first ✏️</h1>\n  <p>Every feature started as a margin doodle.</p>\n  <button class="btn-sketch">start sketching</button>\n</section>',
    accent: '#e76f51',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Kids', 'Education', 'Nonprofit'],
signatureCss: `
.dv-sketchbox { border: 2px solid #33312c; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; }
.dv-tape { position: absolute; top: -10px; left: 50%; width: 96px; height: 24px; background: rgba(233,196,106,.75); transform: translateX(-50%) rotate(-2deg); }
.dv-hero h1 { font-family: 'Patrick Hand', cursive; }
.dv-btn-sketch { font-family: 'Patrick Hand', cursive; font-size: 20px; }`,
    author: 'Bea Solano',
    createdAt: '2026-04-02',
    popularity: 88,
    trending: true,
  },
  {
    id: 'ink-house',
    name: 'Ink House',
    category: 'Creative',
    tags: ['illustration', 'storybook', 'cozy', 'warm', 'hand-drawn'],
    description: 'Storybook coziness with warm inks and rounded serif.',
    designPhilosophy:
      'A picture book for grown-ups. Warm tea-stain palette, rounded serif display, hand-drawn spot illustrations (CSS shapes), and gentle, rounded everything. It feels like a favorite chair: soft, warm, familiar.',
    designDetails:
      'Tea-stain cream #f9f3e3, warm brown ink, terracotta and moss accents. Fraunces soft (SOFT axis via weight 500) display; Bitter body. Rounded blob frames (organic border-radius), spot decorations (CSS mushrooms, leaves, moons via border-radius combos), and generous line-height. Buttons are rounded pebbles.',
    colors: {
      primary: '#b3541e',
      secondary: '#6a7f4f',
      accent: '#e0a458',
      neutral: '#ece4d0',
      background: '#f9f3e3',
      text: '#40342a',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Bitter',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 56',
      lineHeights: 'Display 1.15, body 1.75',
      letterSpacing: 'Display 0, labels 0.1em uppercase',
    },
    components: {
      primary: 'Pebble (radius 999px) #b3541e, cream text, padding 14px 32px, 600, warm shadow',
      secondary: 'Pebble with 2px #6a7f4f border, transparent',
      tertiary: 'Terracotta text link with leaf swash underline on hover',
      radius: 'Pebbles and organic blobs (40% 60% 55% 45%)',
      hover: 'Gentle lift 4px + shadow bloom 300ms',
      cards: 'Blob-topped cream cards, 1px #d9cdb4 border, padding 32px',
      forms: 'Rounded inputs, warm borders, moss focus',
      navigation: 'Cozy rounded bar with pebble active state',
      modals: 'Cream rounded sheet with moon glyph top-right',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 72 / 136',
      paddingScale: '24 / 40 / 56',
      grid: 'Cozy centered 1040px; storybook spreads (2:1) for features',
    },
    motion: {
      pageLoad: 'Elements rise like a curtain, 500ms; blobs settle with soft springs',
      hoverStates: 'Lift + bloom 300ms; nothing snaps',
      transitions: 'Soft ease-out 300ms',
      scroll: 'Spot illustrations bob gently; blobs drift',
    },
    accessibility:
      '#40342a on cream 10.9:1; cream on terracotta 4.7:1 (large/bold buttons). Focus 3px terracotta ring. Spot illustrations decorative. Body text stays ≥16px Bitter for comfort.',
    responsive:
      'Spreads stack under 760px. Display clamps 2.25rem→3.5rem. Blob frames simplify under 640px. Pebble buttons stay full-width on mobile forms.',
    codeExample:
      '<section class="cozy">\n  <h1>Warm drinks, warm pixels.</h1>\n  <p>A reading app that feels like a blanket.</p>\n  <button class="btn-pebble">Pour a cup</button>\n</section>',
    accent: '#b3541e',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Education', 'Restaurant', 'Nonprofit'],
signatureCss: `
.dv-blob { border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%; }
.dv-btn-pebble { border-radius: 999px; box-shadow: 0 6px 16px rgba(179,84,30,.3); }
.dv-btn-pebble:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(179,84,30,.4); }
.dv-moon { width: 40px; height: 40px; border-radius: 50%; box-shadow: 10px 6px 0 0 #e0a458; }`,
    author: 'Ana Reyes',
    createdAt: '2026-04-10',
    popularity: 83,
  },
]
