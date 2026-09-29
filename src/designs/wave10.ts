import type { DesignSystem } from '../types'

/**
 * Wave 10 — ten systems built around structure rather than decoration.
 *
 * Every prior wave added palettes and type pairings on top of thirteen shared
 * arrangements. This wave adds three *new* arrangements (mosaic, timeline,
 * split-scroll) and six new motifs (moire-rings, isometric-lattice, paper-cut,
 * oil-slick, ledger-rules, stencil-mask), so each design below differs from the
 * catalog on three axes at once: composition, motif, and identity (type pair +
 * palette + radius + depth). `scripts/audit-designs.cjs` re-checks that no two
 * systems collide on any of them.
 */

export const wave10Designs: DesignSystem[] = [
  {
    id: 'tidemark',
    name: 'Tidemark',
    category: 'Professional',
    tags: ['logistics', 'ledger', 'analytics', 'harbour', 'survey'],
    description: 'Every number has a tide line.',
    designPhilosophy:
      'Shipping runs on records, not dashboards. Tidemark is built as a ledger: ruled baselines that carry a reader down the page, a margin rule that marks where annotations belong, and a pinned rail that keeps the subject on screen while the evidence scrolls past. It is a professional system for teams whose work is auditable — logistics, analysis, operations — where the honest thing to show is the column, not a chart.',
    designDetails:
      'Harbour navy #12303f, sea green #2c6e7f, signal amber #e0a14a reserved for deltas and warnings, on cream paper #f4f1ea with ink #10232c. Instrument Serif display against Inter body, old-style figures on. Rules are 1px at 12% ink; the margin rule is amber at 45%. Cards are square-cornered and carry no shadow — depth comes from the ruling alone.',
    colors: { primary: '#12303f', secondary: '#2c6e7f', accent: '#e0a14a', neutral: '#e2dcd0', background: '#f4f1ea', text: '#10232c' },
    typography: {
      displayFont: 'Instrument Serif',
      bodyFont: 'Inter',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 58',
      lineHeights: 'Display 1.1, body 1.62',
      letterSpacing: 'Display -0.01em; labels 0.16em uppercase; figures tabular',
    },
    components: {
      primary: 'Solid #12303f, cream text, 6px radius, no shadow',
      secondary: '1px #12303f33 border, transparent, navy text',
      tertiary: 'Navy underlined link, 1px rule',
      radius: '6px controls, 10px cards',
      hover: 'Amber underline slides in, 160ms ease-out',
      cards: 'Flat cards, 10px radius, 1px #10232c1f border, no shadow at rest, 24px padding',
      forms: '42px ruled inputs, amber focus rule 2px',
      navigation: 'Hairline bar above a full-width ledger rule',
      modals: 'Sheet with a ruled header and a margin mark',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 64 / 104', paddingScale: '14 / 24 / 40 / 64', grid: '12-column, 1220px max, 24px gutter' },
    motion: {
      pageLoad: 'Rows rule in top-down, 30ms apart, 200ms each',
      hoverStates: 'Underline draw, 160ms ease-out',
      transitions: 'Opacity and transform only',
      scroll: 'Rail stays pinned; nothing fades on scroll',
    },
    accessibility:
      'Ink 14.1:1 on cream paper and 9.6:1 for secondary ink; amber only ever carries a label, never meaning alone. Focus is a 2px amber outline offset 2px. Ruled backgrounds are decorative and aria-hidden.',
    responsive:
      'The ledger rules keep their 28px rhythm at every width; the pinned rail becomes a static header under 860px; tables scroll horizontally inside their own container.',
    codeExample:
      '<section class="ledger">\n  <h1>Every number has a tide line.</h1>\n  <p>Ruled baselines, a margin for notes, no decoration.</p>\n  <button class="btn-ledger">Open the record</button>\n</section>',
    accent: '#e0a14a',
    motif: 'ledger-rules',
    layout: 'split-scroll',
    useCases: ['Logistics', 'Data & Analytics', 'Manufacturing'],
    signatureCss: `.dv-stage { background-image: repeating-linear-gradient(to bottom, transparent 0 27px, #10232c14 27px 28px); }
.dv-card { box-shadow: none !important; }
.dv-hero h1 em, .dv-ss-rail h1 em { text-decoration: underline; text-decoration-color: #e0a14a; text-decoration-thickness: 3px; text-underline-offset: 4px; }
.dv-kicker { font-family: 'Inter', sans-serif; letter-spacing: .18em; color: #2c6e7f; }`,
    author: 'Dana Okonjo',
    createdAt: '2026-09-29',
    popularity: 88,
    trending: true,
  },
  {
    id: 'salt-flat',
    name: 'Salt Flat',
    category: 'Minimalism',
    tags: ['desert', 'survey', 'photography', 'negative-space', 'travel'],
    description: 'A hundred miles of nothing, measured.',
    designPhilosophy:
      'The salt flats are the emptiest photogenic place on earth, and the photographs that work there are the ones that resist filling the frame. Salt Flat is that discipline as an interface: an enormous amount of paper, one cobalt mark at a time, and content cut out of a single sheet rather than stacked on top of it. Nothing is tinted, nothing glows, and every element earns its ink.',
    designDetails:
      'Bone ground #fbfaf7 with a single cobalt #1f4fd8, graphite #6f7d8c for secondary text, signal coral #ff5a3c used maybe twice per page, ink #16181d. Gloock for display, Public Sans for body. Cut-paper edges between sections, 2px radii, hairlines at 8% ink, and no shadow anywhere.',
    colors: { primary: '#1f4fd8', secondary: '#6f7d8c', accent: '#ff5a3c', neutral: '#efece6', background: '#fbfaf7', text: '#16181d' },
    typography: {
      displayFont: 'Gloock',
      bodyFont: 'Public Sans',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 52',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.02em; body 0.005em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #1f4fd8, white text, 2px radius, no shadow',
      secondary: 'Transparent with a 1px #16181d33 border, ink text',
      tertiary: 'Coral link with a 1px rule that draws on hover',
      radius: '2px controls, 4px cards',
      hover: 'Rule draws 1px to 100% in 180ms, nothing moves',
      cards: 'Paper cards, 4px radius, 1px #16181d14 border, no shadow, 28px padding',
      forms: 'Underlined inputs only, 1px ink rule, cobalt focus',
      navigation: 'Three links and a hairline, nothing else',
      modals: 'Full-bleed sheet with a paper edge and one cobalt rule',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 40 / 80 / 128 / 176', paddingScale: '20 / 36 / 56 / 88', grid: '12-column, 1140px max, 32px gutter' },
    motion: {
      pageLoad: 'One fade of the whole page, 280ms, once',
      hoverStates: 'Rule draw only, 180ms ease-out',
      transitions: 'Never transform — this system does not move things',
      scroll: 'Sections cut in at 20% with no travel',
    },
    accessibility:
      'Ink 16.4:1 on bone; cobalt 6.6:1 on bone; coral is never used for body text. Focus is a 2px cobalt outline with a 3px offset. The cut-paper edges are decorative and aria-hidden.',
    responsive:
      'Whitespace compresses 176 → 80 → 40 as the viewport narrows; the type scale holds four steps; nothing reflows into columns under 720px.',
    codeExample:
      '<section class="flat">\n  <h1>A hundred miles of nothing, measured.</h1>\n  <p>One cobalt mark at a time.</p>\n  <button class="btn-flat">Plan a survey</button>\n</section>',
    accent: '#1f4fd8',
    motif: 'paper-cut',
    layout: 'split-scroll',
    useCases: ['Photography', 'Travel', 'Architecture'],
    signatureCss: `.dv-stage { background: #fbfaf7; }
.dv-card, .dv-ss-block { box-shadow: 0 1px 0 #16181d0f !important; }
.dv-hero h1, .dv-ss-rail h1 { max-width: 22ch; }
.dv-hero h1 em, .dv-ss-rail h1 em { color: #1f4fd8; font-style: normal; }
.dv-kicker { letter-spacing: .24em; color: #6f7d8c; }`,
    author: 'Ivo Lindqvist',
    createdAt: '2026-09-29',
    popularity: 84,
  },
  {
    id: 'velvet-static',
    name: 'Velvet Static',
    category: 'Creative',
    tags: ['music', 'podcast', 'analogue', 'moiré', 'late-night'],
    description: 'Turn the noise up.',
    designPhilosophy:
      'Static is what an untuned signal sounds like, and moiré is what an untuned image looks like — both are the accidental beauty of analogue media. Velvet Static treats interference as the identity: two ring patterns that never quite line up, deep plum velvet, and a single electric mint that behaves like a tone rather than a colour. It is built for music, podcasts, and anything that wants to feel late at night.',
    designDetails:
      'Plum #14081f ground, velvet #2b1440 surfaces, magenta #a545ff and rose #ff4d94 interference, electric mint #6ff0d4 as the only cool accent, text #f6ecff at 92%. Bodoni Moda display with Sora body. Ring interference sits behind everything at 50% opacity; cards are 24px with a glow, pills are 999px.',
    colors: { primary: '#a545ff', secondary: '#ff4d94', accent: '#6ff0d4', neutral: '#2b1440', background: '#14081f', text: '#f6ecff' },
    typography: {
      displayFont: 'Bodoni Moda',
      bodyFont: 'Sora',
      scale: '14 / 16 / 18 / 23 / 32 / 46 / 68',
      lineHeights: 'Display 1.0, body 1.64',
      letterSpacing: 'Display -0.03em; labels 0.22em uppercase',
    },
    components: {
      primary: 'Gradient #a545ff → #ff4d94, white text, 999px pill, glow 0 0 28px',
      secondary: '1px #6ff0d455 border, transparent, mint text',
      tertiary: 'Mint link with a soft glow underline',
      radius: '999px pills, 24px cards',
      hover: 'Glow widens to 34px, 260ms ease-out',
      cards: 'Velvet cards, 24px radius, 1px #f6ecff1f border, soft glow 0 18px 50px, 28px padding',
      forms: 'Dark pill inputs on #2b1440, mint focus ring 3px',
      navigation: 'Floating pill bar with a blurred velvet backing',
      modals: 'Rounded sheet with a static overlay and a mint rule',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 20 / 44 / 80 / 128', paddingScale: '18 / 28 / 46 / 68', grid: '12-column, 1180px max, 28px gutter' },
    motion: {
      pageLoad: 'Rings resolve from 60% to 0 interference, 520ms',
      hoverStates: 'Glow bloom, 260ms ease-out',
      transitions: 'Opacity and box-shadow only — no layout movement',
      scroll: 'Sections drift 8px and settle, once',
    },
    accessibility:
      'Body text 13.8:1 on plum; mint 11.2:1; magenta on plum is 5.2:1 and always sits inside a bordered surface. Interference layers are below text and aria-hidden. Focus 3px mint ring, 2px offset.',
    responsive:
      'Interference ring spacing tightens with the viewport so moiré still reads; rings drop to one layer under 640px; display type clamps 32 → 68px.',
    codeExample:
      '<section class="static">\n  <h1>Turn the noise <em>up.</em></h1>\n  <p>Two signals that never quite line up.</p>\n  <button class="btn-static">Play the mix</button>\n</section>',
    accent: '#a545ff',
    motif: 'moire-rings',
    layout: 'spotlight',
    useCases: ['Music', 'Podcast', 'Streaming'],
    signatureCss: `.dv-stage { background: radial-gradient(120% 80% at 50% 0%, #2b1440 0%, #14081f 62%); }
.dv-hero h1 { mix-blend-mode: screen; }
.dv-card { background: #2b1440cc; backdrop-filter: blur(6px); }
.dv-hero h1 em { color: #6ff0d4; font-style: italic; }
.dv-kicker { color: #ff4d94; }`,
    author: 'Nia Sørensen',
    createdAt: '2026-09-29',
    popularity: 90,
    trending: true,
  },
  {
    id: 'kiln-works',
    name: 'Kiln Works',
    category: 'Brutalism',
    tags: ['industrial', 'manufacturing', 'ceramic', 'isometric', 'heat'],
    description: 'Fire, clay, repeat.',
    designPhilosophy:
      'A kiln is a brutal object with an exact schedule. Kiln Works takes that pairing literally: a hard isometric lattice as the page ground, shapes that never round, ember orange reserved for anything that is hot — status, deltas, destructive actions — and steel grey for everything structural. Nothing here is soft because nothing in a plant is soft, and the geometry does the work that gradients would otherwise fake.',
    designDetails:
      'Ember #c2410c, steel #3f4652, hazard yellow #facc15, concrete #d6d3ce on ground #e7e4de, ink #1a1a1a. Anton display with Work Sans body, uppercase display, 0 radius everywhere, 3px borders, 4px hard offsets. The lattice runs at 60°/-60° with a 22px horizontal grid.',
    colors: { primary: '#c2410c', secondary: '#3f4652', accent: '#facc15', neutral: '#d6d3ce', background: '#e7e4de', text: '#1a1a1a' },
    typography: {
      displayFont: 'Anton',
      bodyFont: 'Work Sans',
      scale: '14 / 16 / 18 / 22 / 30 / 40 / 56',
      lineHeights: 'Display 0.98, body 1.55',
      letterSpacing: 'Display 0.005em; labels 0.12em uppercase; body -0.005em',
    },
    components: {
      primary: 'Solid #c2410c, white text, 0 radius, 3px #1a1a1a border, 4px 4px 0 offset',
      secondary: 'Solid #d6d3ce, ink text, 0 radius, 3px border',
      tertiary: 'Ink link with a 3px ember underline',
      radius: '0 — nothing rounded, not even inputs',
      hover: 'Hard 4px offset shift, 80ms linear',
      cards: 'Concrete panels, 0 radius, 3px #1a1a1a border, hard 4px 4px 0 #1a1a1a offset, 22px padding',
      forms: 'Square inputs, 3px border, hazard-yellow focus fill',
      navigation: 'Thick 3px bottom rule with square nav cells',
      modals: 'Slab with a 3px frame and a hazard stripe header',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 56 / 96', paddingScale: '12 / 22 / 36 / 60', grid: '12-column, 1200px max, 16px gutter' },
    motion: {
      pageLoad: 'Blocks land with a 2px overshoot, 140ms each',
      hoverStates: 'Hard offset shift, 80ms linear',
      transitions: 'Transform and border only',
      scroll: 'Nothing animates on scroll — the page is a plant, not a showreel',
    },
    accessibility:
      'Ink 15.2:1 on concrete; ember on concrete is 4.9:1 and always paired with a word, not a dot alone; hazard yellow never carries text (1.4:1) — it is fill only. Focus is a 3px ink outline with no offset.',
    responsive:
      'The lattice keeps its angle and loses one axis under 700px; bento tiles collapse to one column; display type clamps 30 → 56px.',
    codeExample:
      '<section class="kiln">\n  <h1>Fire, clay, repeat.</h1>\n  <p>3px borders, 0 radius, no decoration.</p>\n  <button class="btn-kiln">Start a batch</button>\n</section>',
    accent: '#c2410c',
    motif: 'isometric-lattice',
    layout: 'bento',
    useCases: ['Manufacturing', 'Energy', 'Construction'],
    signatureCss: `.dv-card, .dv-btn { border-radius: 0 !important; }
.dv-bento-tile, .dv-card { border: 3px solid #1a1a1a !important; box-shadow: 4px 4px 0 #1a1a1a !important; }
.dv-hero h1 { text-transform: uppercase; }
.dv-kicker { background: #facc15; color: #1a1a1a; display: inline-block; padding: .18em .5em; }`,
    author: 'Marek Dolny',
    createdAt: '2026-09-29',
    popularity: 86,
  },
  {
    id: 'lantern-district',
    name: 'Lantern District',
    category: 'Luxury',
    tags: ['hospitality', 'night', 'lanterns', 'travel', 'dining'],
    description: 'Ten thousand lights, one street.',
    designPhilosophy:
      'The most luxurious thing in a night market is not gold — it is the way light behaves on a wet stone street. Lantern District builds its whole surface language from that: a dark ink-blue ground, lacquer red as the only loud colour, and an oil-slick sheen that travels across cards as you move over them. Money is expressed through restraint in the layout and generosity in the materials, not through ornament.',
    designDetails:
      'Ink blue #0d1526 ground with #22335c surfaces, lacquer #b83b2f, paper-brass #e8b04b for rules and labels, text #f3eee4. Newsreader display with Hanken Grotesk body. A conic sheen moves over every card at 32% overlay; 14px controls, 20px cards, hairline borders at 12% white.',
    colors: { primary: '#b83b2f', secondary: '#172a4d', accent: '#e8b04b', neutral: '#22335c', background: '#0d1526', text: '#f3eee4' },
    typography: {
      displayFont: 'Newsreader',
      bodyFont: 'Hanken Grotesk',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.08, body 1.7',
      letterSpacing: 'Display -0.015em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #b83b2f, paper text, 14px radius, 1px #e8b04b44 outline',
      secondary: '1px #e8b04b88 border, transparent, brass text',
      tertiary: 'Brass link with a 1px underline that fades in',
      radius: '14px controls, 20px cards',
      hover: 'Sheen travels across the surface, 420ms ease-out',
      cards: 'Ink panels, 20px radius, 1px #f3eee41f border, conic sheen overlay, 28px padding',
      forms: 'Dark 46px inputs, brass focus ring 2px',
      navigation: 'Quiet bar on the dark ground with a brass hairline',
      modals: 'Rounded sheet with a lantern glow behind it',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 64 / 104 / 152', paddingScale: '18 / 30 / 48 / 76', grid: '12-column, 1180px max, 30px gutter' },
    motion: {
      pageLoad: 'Lanterns rise 10px and settle, 480ms, 70ms apart',
      hoverStates: 'Sheen travel, 420ms ease-out',
      transitions: 'Opacity, transform, background-position',
      scroll: 'Sections fade once at 18%',
    },
    accessibility:
      'Paper text 14.6:1 on ink blue; brass 8.1:1; lacquer is only ever a fill behind light text (5.4:1). The moving sheen is aria-hidden and disabled under prefers-reduced-motion. Focus 2px brass ring, 2px offset.',
    responsive:
      'The mosaic reflows 4 → 2 → 1; sheen duration shortens to 240ms on touch; display type clamps 32 → 62px.',
    codeExample:
      '<section class="district">\n  <h1>Ten thousand lights, one street.</h1>\n  <p>Dark stone, lacquer red, brass rules.</p>\n  <button class="btn-district">Reserve a table</button>\n</section>',
    accent: '#b83b2f',
    motif: 'oil-slick',
    layout: 'mosaic',
    useCases: ['Hotel', 'Restaurant', 'Travel'],
    signatureCss: `.dv-stage { background: radial-gradient(90% 60% at 82% 4%, #22335c66 0%, #0d1526 60%); }
.dv-hero h1 em, .dv-mos-tile h1 em { color: #e8b04b; font-style: italic; }
.dv-card { background: #172a4d; }
.dv-kicker { color: #e8b04b; }
.dv-btn-primary { box-shadow: 0 10px 30px #b83b2f55; }`,
    author: 'Mei-Lin Chow',
    createdAt: '2026-09-29',
    popularity: 92,
  },
  {
    id: 'fog-signal',
    name: 'Fog Signal',
    category: 'Retro',
    tags: ['signal', 'civic', 'weather', 'stencil', 'utility'],
    description: 'The message arrives either way.',
    designPhilosophy:
      'A fog signal is engineered for the worst conditions: no colour, no detail, no patience. Fog Signal borrows that honesty — stencilled labels knocked out of solid ink, a red that means action rather than brand, and a chronological spine so every entry is dated and accountable. It is the retro of public infrastructure: dull paint, exact type, and a system that works when everything else has failed.',
    designDetails:
      'Signal red #d2452f, fog grey #29323b, buoy green #7fd1ae as the single calm accent, on #e9ebe8 with ink #1c2124. Red Hat Display for display and Raleway for body, both stencilled via knocked-out label chips. 3px radii, 1px rules, hard square timeline nodes.',
    colors: { primary: '#d2452f', secondary: '#29323b', accent: '#7fd1ae', neutral: '#cfd4d2', background: '#e9ebe8', text: '#1c2124' },
    typography: {
      displayFont: 'Red Hat Display',
      bodyFont: 'Raleway',
      scale: '14 / 16 / 18 / 21 / 28 / 38 / 50',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display -0.01em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #d2452f, white text, 3px radius, 2px ink underline',
      secondary: 'Solid #29323b, fog text, 3px radius',
      tertiary: 'Ink link with a 2px red rule on hover',
      radius: '3px controls, 6px cards',
      hover: 'Background shifts 1 tone, 120ms linear',
      cards: 'Grey cards, 6px radius, 1px #1c212433 border, no shadow at rest, 22px padding',
      forms: 'Boxed inputs with a 2px ink border and a red focus rule',
      navigation: 'Utility bar with stencilled section labels',
      modals: 'Boxed panel with a red header strip',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 56 / 96', paddingScale: '12 / 22 / 36 / 56', grid: '12-column, 1200px max, 20px gutter' },
    motion: {
      pageLoad: 'Entries click in top to bottom, 90ms apart',
      hoverStates: 'Tone shift, 120ms linear',
      transitions: 'Background and border only',
      scroll: 'Nothing fades — a signal is either on or off',
    },
    accessibility:
      'Ink 14.8:1 on the fog ground; signal red 4.7:1 and never the sole carrier of state (the label is always stencilled as words too). Focus 3px ink outline, 2px offset.',
    responsive:
      'The timeline spine moves to the left margin under 760px; entries stack without alternating; tables scroll inside their container.',
    codeExample:
      '<section class="signal">\n  <h1>The message arrives either way.</h1>\n  <p>Stencilled, dated, always on the record.</p>\n  <button class="btn-signal">Raise a notice</button>\n</section>',
    accent: '#d2452f',
    motif: 'stencil-mask',
    layout: 'timeline',
    useCases: ['Government', 'DevOps & Cloud', 'News'],
    signatureCss: `.dv-stage { background-image: linear-gradient(#1c21240a 1px, transparent 1px); background-size: 100% 28px; }
.dv-hero h1 em, .dv-tl-head h1 em { -webkit-text-stroke: 2px #d2452f; color: transparent; font-style: normal; }
.dv-card { box-shadow: none !important; }
.dv-kicker { background: #29323b; color: #e9ebe8; display: inline-block; padding: .22em .7em; letter-spacing: .2em; }`,
    author: 'Halvard Ness',
    createdAt: '2026-09-29',
    popularity: 81,
  },
  {
    id: 'culture-jar',
    name: 'Culture Jar',
    category: 'Organic',
    tags: ['fermentation', 'kitchen', 'recipe', 'slow', 'editorial'],
    description: 'Time does the cooking.',
    designPhilosophy:
      'Fermentation is a design system in the most literal sense: a few rules, a long timeline, and no shortcuts. Culture Jar lays its recipes out as dated entries on a spine — day one, day four, day twenty — with a ruled log beside each step so the reader can see how little has to happen for something to become good. Warm rye, cream, and one sour red for anything that needs watching.',
    designDetails:
      'Rye #b5722a, vine #6b8f4e, sour #e0533f for warnings and timings, cream #faf3e3 ground with #e8dcc4 surfaces and ink #2a2118. Petrona display with Mulish body, old-style figures, 8px controls, 16px cards, soft shadows at 6% ink.',
    colors: { primary: '#b5722a', secondary: '#6b8f4e', accent: '#e0533f', neutral: '#e8dcc4', background: '#faf3e3', text: '#2a2118' },
    typography: {
      displayFont: 'Petrona',
      bodyFont: 'Mulish',
      scale: '15 / 17 / 19 / 23 / 30 / 40 / 54',
      lineHeights: 'Display 1.14, body 1.72',
      letterSpacing: 'Display -0.01em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #b5722a, cream text, 8px radius, soft 0 6px 16px rye-30%',
      secondary: 'Solid #6b8f4e, cream text, 8px radius',
      tertiary: 'Vine link with a hand-ruled underline',
      radius: '8px controls, 16px cards',
      hover: 'Lift 2px with a warmer shadow, 200ms ease-out',
      cards: 'Cream cards, 16px radius, 1px #2a21181f border, soft shadow 0 8px 22px 6%, 26px padding',
      forms: 'Warm inputs, 1px rule, rye focus ring 3px',
      navigation: 'Wood-toned bar with a hand-ruled baseline',
      modals: 'Paper sheet with a jar-label header',
    },
    spacing: { baseUnit: '8px', marginScale: '12 / 24 / 48 / 80 / 128', paddingScale: '16 / 26 / 42 / 68', grid: '12-column, 1180px max, 26px gutter' },
    motion: {
      pageLoad: 'Entries rise 8px and settle, 240ms each, 80ms apart',
      hoverStates: 'Soft lift, 200ms ease-out',
      transitions: 'Transform, box-shadow, opacity',
      scroll: 'Sections fade once at 20%',
    },
    accessibility:
      'Ink 12.9:1 on cream; rye 4.6:1 on cream (large text and fills only); sour red 4.4:1 and always accompanied by a word. Focus 3px rye ring. Decorative ruled backgrounds are aria-hidden.',
    responsive:
      'The day ruler compacts from a full label column to an inline chip under 700px; cards go single column; display type clamps 28 → 54px.',
    codeExample:
      '<section class="jar">\n  <h1>Time does the cooking.</h1>\n  <p>Day one, day four, day twenty.</p>\n  <button class="btn-jar">Start a jar</button>\n</section>',
    accent: '#b5722a',
    motif: 'ledger-rules',
    layout: 'timeline',
    useCases: ['Restaurant', 'Agriculture', 'Grocery'],
    signatureCss: `.dv-stage { background-image: repeating-linear-gradient(to bottom, transparent 0 31px, #2a211812 31px 32px); }
.dv-tl-card, .dv-card { background: #fffaf0; }
.dv-hero h1 em, .dv-tl-head h1 em { color: #6b8f4e; font-style: italic; }
.dv-tl-year { text-decoration: underline; text-decoration-color: #e0533f; text-underline-offset: 4px; }
.dv-kicker { color: #b5722a; }`,
    author: 'Josefina Marchetti',
    createdAt: '2026-09-29',
    popularity: 83,
  },
  {
    id: 'orbital-registry',
    name: 'Orbital Registry',
    category: 'Professional',
    tags: ['space', 'registry', 'telemetry', 'isometric', 'aerospace'],
    description: 'Everything in orbit is on the record.',
    designPhilosophy:
      'Orbital tracking is a public-record problem dressed as a physics problem: the hard part is naming things and keeping the list honest. Orbital Registry treats every asset as a registered entry — one lattice of coordinates behind the page, one violet identity for primary objects, cyan only for live telemetry, and a typographic system big enough to be read at 2am by someone on call.',
    designDetails:
      'Deep space #0b0f1a with #1e2536 panels, registry violet #8b5cf6, orbital blue #4f7cff, telemetry cyan #22d3ee for live states only, text #e6ecff. Unbounded display with Figtree body. A 60° isometric lattice sits behind every section at 9% white; 5px radii, hairlines at 14%.',
    colors: { primary: '#4f7cff', secondary: '#8b5cf6', accent: '#22d3ee', neutral: '#1e2536', background: '#0b0f1a', text: '#e6ecff' },
    typography: {
      displayFont: 'Unbounded',
      bodyFont: 'Figtree',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 58',
      lineHeights: 'Display 1.06, body 1.64',
      letterSpacing: 'Display -0.02em; labels 0.14em uppercase; figures tabular',
    },
    components: {
      primary: 'Solid #4f7cff, white text, 5px radius, 1px #22d3ee33 edge',
      secondary: '1px #8b5cf688 border, transparent, violet text',
      tertiary: 'Cyan link with a telemetry dot before it',
      radius: '5px controls, 10px cards',
      hover: 'Edge brightens and the card lifts 2px, 180ms ease-out',
      cards: 'Panel cards, 10px radius, 1px #e6ecff1f border, no shadow at rest, 24px padding',
      forms: 'Dark inputs with a 1px lattice-aligned rule, cyan focus',
      navigation: 'Registry bar with a live-status cyan dot',
      modals: 'Panel with a coordinate header and locked footer actions',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 20 / 40 / 72 / 116', paddingScale: '14 / 24 / 40 / 64', grid: '12-column, 1240px max, 24px gutter' },
    motion: {
      pageLoad: 'Panels lock in with a 2px settle, 200ms each',
      hoverStates: 'Lift and edge brighten, 180ms ease-out',
      transitions: 'Transform, border-color, opacity',
      scroll: 'The lattice stays fixed while content scrolls — the sky does not move',
    },
    accessibility:
      'Text 15.1:1 on deep space; violet 5.9:1; cyan 11.4:1 and reserved for live state, always with a text label. The lattice is a decorative background. Focus 2px cyan outline, 3px offset.',
    responsive:
      'The mosaic reflows 4 → 2 → 1; the lattice drops to one axis under 700px; tabular figures keep columns aligned at every width.',
    codeExample:
      '<section class="registry">\n  <h1>Everything in orbit is on the record.</h1>\n  <p>One lattice, one list, no gaps.</p>\n  <button class="btn-registry">Register an asset</button>\n</section>',
    accent: '#4f7cff',
    motif: 'isometric-lattice',
    layout: 'mosaic',
    useCases: ['Data & Analytics', 'Cybersecurity', 'AI/ML'],
    signatureCss: `.dv-stage { background: radial-gradient(80% 60% at 50% -10%, #1e2536 0%, #0b0f1a 62%); }
.dv-card { background: #141a29; }
.dv-hero h1 em, .dv-mos-tile h1 em { color: #22d3ee; font-style: normal; }
.dv-kicker { color: #8b5cf6; }
.dv-badge, .dv-mos-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Priya Raghavan',
    createdAt: '2026-09-29',
    popularity: 87,
  },
  {
    id: 'sugar-rush',
    name: 'Sugar Rush Rides',
    category: 'Playful',
    tags: ['candy', 'kids', 'events', 'rides', 'bright'],
    description: 'Go faster, giggle louder.',
    designPhilosophy:
      'A fairground is engineered joy: everything is over-scaled, over-lit, and built to survive being hit with a fist. Sugar Rush Rides takes that energy and keeps the engineering — chunky hard-offset buttons you can hit with a palm, a sheen that makes surfaces feel like boiled sweets, and type that refuses to whisper. It is for children, and for anyone building something a child will use.',
    designDetails:
      'Bubblegum #ff3d8b, soda #00c2b8, sherbet #ffd23f, on #fff7fb with #ffe9f3 surfaces and ink #2a1030. Syne display with Poppins body. Hard 4px offsets on every control, conic candy sheen on cards, 999px pills, 24px card radii.',
    colors: { primary: '#ff3d8b', secondary: '#00c2b8', accent: '#ffd23f', neutral: '#ffe9f3', background: '#fff7fb', text: '#2a1030' },
    typography: {
      displayFont: 'Syne',
      bodyFont: 'Poppins',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.04, body 1.62',
      letterSpacing: 'Display -0.02em; labels 0.08em uppercase',
    },
    components: {
      primary: 'Solid #ff3d8b, white text, 999px pill, 3px #2a1030 border, 4px 4px 0 offset',
      secondary: 'Solid #00c2b8, ink text, 999px pill, 3px border',
      tertiary: 'Ink link with a sherbet highlighter swipe',
      radius: '999px pills, 24px cards',
      hover: 'Offset grows to 6px and the pill squashes 4%, 140ms',
      cards: 'Pink cards, 24px radius, 3px #2a1030 border, hard offset, candy sheen, 24px padding',
      forms: 'Fat 52px inputs, 999px radius, ink border, sherbet focus fill',
      navigation: 'Pill bar with a wobbling logo',
      modals: 'Rounded panel with a striped candy header',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 20 / 40 / 72 / 112', paddingScale: '18 / 28 / 44 / 64', grid: '12-column, 1180px max, 28px gutter' },
    motion: {
      pageLoad: 'Cards bounce in with a 6px overshoot, 200ms each, 60ms apart',
      hoverStates: 'Offset growth and squash, 140ms ease-out',
      transitions: 'Transform only — this system never cross-fades',
      scroll: 'Sections pop once, no travel',
    },
    accessibility:
      'Ink 15.7:1 on the pink ground; bubblegum is a fill behind white text at 4.8:1 — never body copy; soda and sherbet never carry text. Focus is a 4px ink outline offset 3px. Motion respects prefers-reduced-motion.',
    responsive:
      'Offsets shrink 6 → 3px on touch; the hero collapses to a single stack under 720px; buttons stay at least 48px tall everywhere.',
    codeExample:
      '<section class="rush">\n  <h1>Go faster, giggle louder.</h1>\n  <p>Fat controls, candy sheen, zero whispering.</p>\n  <button class="btn-rush">Ride the big one</button>\n</section>',
    accent: '#ff3d8b',
    motif: 'oil-slick',
    layout: 'hero-cards',
    useCases: ['Kids', 'Events', 'Fashion'],
    signatureCss: `.dv-stage { background: radial-gradient(70% 50% at 20% 0%, #ffe9f3 0%, #fff7fb 60%); }
.dv-card, .dv-btn { border: 3px solid #2a1030 !important; box-shadow: 4px 4px 0 #2a1030 !important; }
.dv-hero h1 { text-transform: uppercase; }
.dv-hero h1 em { color: #00c2b8; font-style: normal; }
.dv-kicker { background: #ffd23f; border: 3px solid #2a1030; border-radius: 999px; padding: .2em .8em; display: inline-block; }`,
    author: 'Toby Nakamura',
    createdAt: '2026-09-29',
    popularity: 89,
    trending: true,
  },
  {
    id: 'night-market',
    name: 'Night Market Arcade',
    category: 'Maximalism',
    tags: ['market', 'arcade', 'neon', 'stalls', 'night'],
    description: 'Open till the last night bus.',
    designPhilosophy:
      'A night market is the densest designed environment people actually enjoy: overlapping signage, competing palettes, and a crowd that navigates it by feel. Night Market Arcade commits to that density — a moiré of overlapping rings behind the listings, four saturated colours in rotation, and a catalogue grid that behaves like a wall of stalls rather than a tidy product page.',
    designDetails:
      'Aubergine #1b0f22 with #2b1b33 stalls, arcade orange #ff8a00, neon rose #ff2e63, lamp yellow #ffe066, text #fff4e6. Gilda Display with Cabin body. Ring interference at 52% over dark, 8px radii on tiles, neon glows on prices and badges only.',
    colors: { primary: '#ff8a00', secondary: '#ff2e63', accent: '#ffe066', neutral: '#2b1b33', background: '#1b0f22', text: '#fff4e6' },
    typography: {
      displayFont: 'Gilda Display',
      bodyFont: 'Cabin',
      scale: '15 / 17 / 19 / 24 / 31 / 42 / 60',
      lineHeights: 'Display 1.06, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #ff8a00, ink text, 8px radius, neon 0 0 22px glow',
      secondary: 'Solid #ff2e63, white text, 8px radius',
      tertiary: 'Lamp-yellow link with a glow underline',
      radius: '8px controls, 12px tiles',
      hover: 'Glow widens and the tile rotates −0.4deg, 200ms ease-out',
      cards: 'Stall tiles, 12px radius, 1px #fff4e61f border, rose glow 0 14px 40px, 22px padding',
      forms: 'Dark inputs, 8px radius, orange focus glow 3px',
      navigation: 'Dense bar with four rotating accent dots',
      modals: 'Ticket-shaped panel with a perforated top edge',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 60 / 96', paddingScale: '14 / 22 / 34 / 56', grid: '12-column, 1240px max, 18px gutter' },
    motion: {
      pageLoad: 'Stall tiles flicker in, 6% opacity hop, 160ms each',
      hoverStates: 'Glow bloom with a slight tilt, 200ms ease-out',
      transitions: 'Transform and box-shadow',
      scroll: 'Rows light up as they enter, one flicker each',
    },
    accessibility:
      'Text 13.4:1 on aubergine; lamp yellow 12.1:1; arcade orange and rose are fills behind ink or white at 4.9:1+. Glows never sit behind body copy. Focus 3px yellow outline offset 2px; flicker disabled under reduced motion.',
    responsive:
      'The catalogue grid reflows 4 → 3 → 2 → 1; ring spacing tightens; the perforated ticket edge becomes a straight rule under 640px.',
    codeExample:
      '<section class="market">\n  <h1>Open till the last night bus.</h1>\n  <p>Twelve stalls, four colours, no quiet corners.</p>\n  <button class="btn-market">Browse the stalls</button>\n</section>',
    accent: '#ff8a00',
    motif: 'moire-rings',
    layout: 'catalog',
    useCases: ['Marketplace', 'Gaming', 'Events'],
    signatureCss: `.dv-stage { background: radial-gradient(80% 60% at 30% 0%, #2b1b33 0%, #1b0f22 60%); }
.dv-card { background: #2b1b33; box-shadow: 0 14px 40px #ff2e6333 !important; }
.dv-hero h1 em, .dv-catalog-grid h3 em { color: #ffe066; font-style: italic; }
.dv-kicker { color: #ff8a00; }
.dv-catalog-filter, .dv-badge { border-color: #ff8a0066 !important; }`,
    author: 'Ravi Menon',
    createdAt: '2026-09-29',
    popularity: 91,
  },
]
