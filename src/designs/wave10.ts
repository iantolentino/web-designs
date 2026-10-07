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
