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
    colors: {
      primary: '#b5173c',
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
      primary: 'Solid #b5173c, cream text, radius 999px (a circle-ish pill), padding 16px 36px, 700',
      secondary: 'Solid #3557a7, cream text, same metrics',
      tertiary: 'Ink text link with geometric diamond ◆ marker on hover',
      radius: 'Pills and circles only — geometry is the brand',
      hover: 'Shapes rotate 6deg and scale 1.05, 300ms; buttons invert to ink',
      cards: 'Flat color plates (red/blue/yellow rotation) with ink 1px border, padding 32px, no shadow',
      forms: 'Underline inputs with geometric focus diamond at line end',
      navigation: 'Ink top rule, geometric logo (circle+triangle), uppercase links',
      modals: 'Cream plate framed by overlapping geometric shapes',
    },
    accent: '#b5173c',
    motif: 'editorial-columns',
    layout: 'hero-cards',
    useCases: ['Portfolio', 'Agency', 'Events'],
signatureCss: `
.dv-shape { position: absolute; pointer-events: none; }
.dv-shape.circle { width: 120px; height: 120px; border-radius: 50%; background: #b5173c; }
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
  {
    id: 'collage-cut',
    name: 'Collage Cut',
    category: 'Creative',
    tags: ['collage', 'paper', 'tape', 'cutout'],
    description: 'Torn paper, washi tape, and scissors you can hear.',
    designPhilosophy:
      'The page is a desk after a good crafting session: torn edges, overlapping scraps, tape holding the important parts. Nothing is precious — the joy is in the layering. Every element looks placed by hand, even when the grid underneath is exact.',
    colors: {
      primary: '#3e8f7c',
      secondary: '#211e1a',
      accent: '#b3402e',
      neutral: '#e2dbcc',
      background: '#f3eee4',
      text: '#211e1a',
    },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 66',
      lineHeights: 'Display 1.05, body 1.58',
      letterSpacing: 'Display -0.01em, notes 0.04em',
    },
    components: {
      primary:
        'Washi-teal scrap button with 2px ink edge and torn bottom edge; hover peels the tape corners 2px',
      secondary: 'Ink scrap button on cream; hover reveals thread-red stitching',
      tertiary: 'Margin-note link in italic with a red thread underline',
      radius: '0px with torn clip-path edges; tape strips are 999px',
      hover: 'Paper lifts 2px, tape peels, threads draw — 180ms',
      cards: 'Paper scraps: cream, torn edges, 2° rotation alternating, washi corner tape, 24px padding, hard shadow 3px 3px 0 rgba(33,30,26,.85)',
      forms: 'Pasted-label inputs: cream with 1px ink border and a tape tab; focus adds thread-red stitching',
      navigation: 'Scrap header: rotated pill links taped across the top; the active scrap is teal',
      modals: 'Full collage sheet with layered scraps and ink scrim rgba(33,30,26,.5)',
    },
    accent: '#3e8f7c',
    motif: 'rotated-stickers',
    layout: 'asymmetric',
    useCases: ['Portfolio', 'Events', 'Music'],
    signatureCss: `
.dv-card { background: #f3eee4; border: 2px solid #211e1a; box-shadow: 3px 3px 0 rgba(33,30,26,.85); transform: rotate(-1.4deg); }
.dv-card:nth-child(even) { transform: rotate(1.4deg); }
.dv-btn { border-radius: 0; border: 2px solid #211e1a; }`,
    author: 'Juno Castellanos',
    createdAt: '2026-08-23',
    popularity: 80,
    trending: true,
  },
  {
    id: 'foundry-type',
    name: 'Foundry Type',
    category: 'Creative',
    tags: ['typography', 'specimen', 'plates', 'ink'],
    description: 'A type foundry’s specimen book — ink plates, registration marks.',
    designPhilosophy:
      'The product is the alphabet. Every section is a specimen plate: giant glyphs on the left, metadata on the right, registration crosses in the corners. Typography is the interface — weights, widths, and spacing do all the talking.',
    colors: {
      primary: '#161616',
      secondary: '#f6f4ef',
      accent: '#e0492f',
      neutral: '#dcd8cd',
      background: '#f6f4ef',
      text: '#161616',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 20 / 26 / 36 / 96',
      lineHeights: 'Display 0.95, body 1.6',
      letterSpacing: 'Display -0.02em, metadata 0.08em uppercase',
    },
    components: {
      primary:
        'Plate-ink #161616 button, 0px radius, paper text, weight 700, 0.08em tracking; hover stamps a registration-red corner mark',
      secondary: 'Paper button with 1px ink hairline; hover inverts to ink',
      tertiary: 'Metadata link — uppercase micro-label with a red registration dot',
      radius: '0px; plates are cropped, not rounded',
      hover: 'Registration marks stamp in the corners, 140ms; glyphs never move',
      cards: 'Specimen plates: paper with 1px ink frame, crop-mark corners, 28px padding, glyph wall left + metadata table right',
      forms: 'Metadata fields: hairline rules with mono input and red focus tick',
      navigation: 'Plate index bar: uppercase hairline links; the active plate carries the red mark',
      modals: 'Full-bleed plate with crop marks and ink scrim rgba(22,22,22,.55)',
    },
    accent: '#e0492f',
    motif: 'outline-type',
    layout: 'editorial',
    useCases: ['Portfolio', 'Agency', 'Productivity'],
    signatureCss: `
.dv-card { border: 1px solid #161616; background: #f6f4ef; position: relative; }
.dv-card::before, .dv-card::after { content: "+"; position: absolute; color: #e0492f; font-size: 12px; line-height: 1; }
.dv-card::before { top: 4px; left: 6px; }
.dv-card::after { bottom: 4px; right: 6px; }
.dv-btn { border-radius: 0; }`,
    author: 'Esme Trouvé',
    createdAt: '2026-08-15',
    popularity: 78,
  },
  {
    id: 'puppet-theater',
    name: 'Puppet Theater',
    category: 'Creative',
    tags: ['puppet', 'stage', 'handmade', 'play'],
    description: 'A hand-sewn stage: curtain crimson, gold stars, showtime joy.',
    designPhilosophy:
      'All the world’s a stage, and this design knows it. Hand-stitched crimson curtains, gold-star footlights, and characters that peek from the wings. The craft is visible — every stitch and seam is part of the show.',
    colors: {
      primary: '#8c2f39',
      secondary: '#5a2430',
      accent: '#e0b84e',
      neutral: '#ecdfc8',
      background: '#fbf5e9',
      text: '#3b2314',
    },
    typography: {
      displayFont: 'Gaegu',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 21 / 27 / 36 / 60',
      lineHeights: 'Display 1.15, body 1.6',
      letterSpacing: 'Display 0, programme 0.06em',
    },
    components: {
      primary:
        'Wooden toggle knob: stage-crimson round button, 999px, gold ring, cream text, weight 700; press rocks 3° like a real toggle',
      secondary: 'Playbill cream button with dashed crimson stitch border; hover adds a gold star',
      tertiary: 'Programme link with a gold star bullet that spins once on hover',
      radius: '999px knobs, 10px playbills with dashed stitch borders',
      hover: 'Curtain hems sway 2°, stars spin, toggles rock — 200ms',
      cards: 'Playbills: cream with 2px dashed crimson stitch border, 10px radius, 24px padding, gold corner star patches',
      forms: 'Ticket-stub fields: 1px crimson rules with Gaegu labels and gold focus stars',
      navigation: 'Valance bar: scalloped crimson top with playbill pill links; the active show is gold-starred',
      modals: 'Stage box: crimson curtain frame with a cream playbill center and rgba(43,18,24,.6) scrim',
    },
    accent: '#8c2f39',
    motif: 'rotated-stickers',
    layout: 'spotlight',
    useCases: ['Events', 'Kids', 'Education'],
    signatureCss: `
.dv-card { background: #fbf5e9; border: 2px dashed #8c2f39; border-radius: 10px; }
.dv-btn { border-radius: 999px; }
.dv-hero h1 { font-family: "Gaegu", cursive; font-weight: 700; }`,
    author: 'Pin Grandpre',
    createdAt: '2026-08-10',
    popularity: 76,
  },
  {
    id: 'audio-wave',
    name: 'Audio Wave',
    category: 'Creative',
    tags: ['audio', 'studio', 'waveform', 'dark'],
    description: 'A mastering studio after hours: mint waveforms on console black.',
    designPhilosophy:
      'Sound you can see. The page is a mastering console at night: mint waveforms pulse on black, meters breathe with the cursor, and every section has a BPM. Dark, focused, and alive — but the faders stay where you put them.',
    colors: {
      primary: '#3ddc97',
      secondary: '#1a1e24',
      accent: '#9ad7ff',
      neutral: '#262c33',
      background: '#0f1115',
      text: '#e8f0ec',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 56',
      lineHeights: 'Display 1.14, body 1.55',
      letterSpacing: 'Display 0, timecode 0.04em',
    },
    components: {
      primary:
        'Mint #3ddc97 fader button, 6px radius, console text, weight 700, mono label; hover slides a waveform fill from the left',
      secondary: 'Panel fader with 1px #262c33 seam; the seam glows ice on hover',
      tertiary: 'Mono timecode link [00:42:17] that mints on hover',
      radius: '6px strips, 8px channels — rack-mount machining',
      hover: 'Waveforms animate 300ms; meters breathe 1.2s; faders snap 100ms',
      cards: 'Channel strips: #1a1e24, 1px #262c33 seam, 8px radius, 22px padding, mono track header with mint ● REC dot',
      forms: 'Console fields: inset #0b0d10 with mono input and mint focus ring',
      navigation: 'Top transport bar: mono track links with a live waveform underline; the active track pulses mint',
      modals: 'Master bus overlay: channel strip with a waveform header and rgba(5,7,9,.8) scrim',
    },
    accent: '#3ddc97',
    motif: 'glow-pulse',
    layout: 'full-bleed',
    useCases: ['Music', 'Gaming', 'Portfolio'],
    signatureCss: `
.dv-card { background: #1a1e24; border: 1px solid #262c33; border-radius: 8px; }
.dv-btn { border-radius: 6px; font-family: "Space Mono", monospace; }
.dv-kicker { color: #9ad7ff; font-family: "Space Mono", monospace; letter-spacing: .04em; }`,
    author: 'Lena Moreau',
    createdAt: '2026-08-20',
    popularity: 81,
  },
  {
    id: 'skate-zine',
    name: 'Skate Zine',
    category: 'Creative',
    tags: ['skate', 'zine', 'photocopy', 'diy'],
    description: 'Photocopied skate zine energy — xerox blue, safety orange, all DIY.',
    designPhilosophy:
      'Made in a garage, duplicated at the copy shop, stapled by hand. Xerox-blue ink on cheap paper, safety-orange highlights, and Rubik Mono One screaming the trade secrets. DIY means every reader could make this page themselves — and the design invites them to try.',
    colors: {
      primary: '#1f3bb3',
      secondary: '#101820',
      accent: '#ff5f00',
      neutral: '#cfd6e4',
      background: '#e8eef8',
      text: '#101820',
    },
    typography: {
      displayFont: 'Rubik Mono One',
      bodyFont: 'Space Mono',
      scale: '13 / 15 / 17 / 20 / 25 / 33 / 60',
      lineHeights: 'Display 1.05, body 1.55',
      letterSpacing: 'Display 0, tips 0.02em',
    },
    components: {
      primary:
        'Xerox-blue #1f3bb3 plate, 0px radius, copy text, weight 400 (the face is heavy enough), mono sub-label; hover offsets a 1px misprint shadow',
      secondary: 'Copy-paper button with 2px ink frame; hover fills safety orange with ink text',
      tertiary: 'Mono tip link [ollie.txt] with an orange highlighter slash on hover',
      radius: '0px; copy shop does not round corners',
      hover: 'Misprint offsets 1px, highlighter slashes wipe 140ms',
      cards: 'Tip sheets: #f2f6fd with 2px ink frame (offset 1px for the photocopy drift), 22px padding, orange corner staple',
      forms: 'Trick-log fields: mono input on 2px ink rules; focus slashes orange',
      navigation: 'Stapled header strip: boxed mono links; the active page carries the orange staple',
      modals: 'Full-bleed photocopy with an ink masthead bar and rgba(16,24,32,.6) scrim',
    },
    accent: '#1f3bb3',
    motif: 'grain-overlay',
    layout: 'manifesto',
    useCases: ['Music', 'Events', 'Gaming'],
    signatureCss: `
.dv-card { background: #f2f6fd; border: 2px solid #101820; box-shadow: 3px 3px 0 rgba(16,24,32,.8); transform: rotate(.8deg); }
.dv-card:nth-child(even) { transform: rotate(-.8deg); }
.dv-btn { border-radius: 0; }
.dv-hero h1 { font-family: "Rubik Mono One", monospace; }`,
    author: 'Trey Alvarez',
    createdAt: '2026-07-31',
    popularity: 75,
  },
]