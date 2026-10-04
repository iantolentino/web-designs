import type { DesignSystem } from '../types'

/**
 * Wave 8 — sixteen systems built around aesthetics and verticals the catalog
 * did not yet carry: solarpunk, a physics lab, terrazzo, a noir case file,
 * optical art, VHS rental, a riso studio, PCB fabrication, cut-paper craft,
 * glacial spa, an observatory, a weather bureau, pulp paperbacks, an artisan
 * bakery, a spy console, and classical marble.
 *
 * Five of them introduce new motifs (outline-type, corner-brackets, scanlines,
 * duotone-media, tape-labels), so these are structurally new, not recolors.
 * Every palette, type pairing, and layout was checked against the existing 184
 * in scripts/audit-designs.cjs — no identity or palette collisions.
 */

export const wave8Designs: DesignSystem[] = [
  {
    id: 'solar-punk',
    name: 'Solarpunk',
    category: 'Organic',
    tags: ['solarpunk', 'renewable', 'community', 'optimism', 'green'],
    description: 'A hopeful future, wired to the sun.',
    designPhilosophy:
      'Dystopia got all the good designers. Solarpunk takes the opposite bet: technology and nature as allies, abundance instead of scarcity, and a palette that looks like photosynthesis under glass. Warm sunlight accents over living green, rounded architecture, and type that smiles without trying. For climate projects, community energy, and civic optimism.',
    designDetails:
      'Leaf green #2f9e44 over sunlit canvas #f5f9ee, brass #f4b400 reserved for buttons and highlights. Young Serif display against Karla body. Arched corners, canopy gradients, and a radial wave crest that reads as sunrise over a roof.',
    colors: { primary: '#2f9e44', secondary: '#0b6e4f', accent: '#f4b400', neutral: '#e9f2df', background: '#f5f9ee', text: '#0f2419' },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 64',
      lineHeights: 'Display 1.08, body 1.62',
      letterSpacing: 'Display -0.015em; labels 0.06em uppercase',
    },
    components: {
      primary: 'Solid #2f9e44, warm-white text, 999px pill, padding 12px 26px',
      secondary: '1px #0b6e4f border on transparent, #0b6e4f text',
      tertiary: 'Leaf-green text link with a → and a soft underline',
      radius: '999px pills, 18px cards — arched, never sharp',
      hover: 'Buttons lift 2px and deepen 8%, 200ms ease-out',
      cards: 'Warm-white surfaces, 18px radius, 1px rgba(11,110,79,.14) border, 24px padding',
      forms: '44px inputs, 14px radius, focus ring 3px #2f9e44/25%',
      navigation: 'Sticky translucent bar over a sunrise gradient',
      modals: '18px radius, 40% green-tinted scrim, scale-in 0.97→1',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 28 / 48 / 80', paddingScale: '10 / 20 / 32 / 56', grid: '12-column, 1180px max, 24px gutter' },
    motion: {
      pageLoad: 'Hero fades up 14px over 520ms; solar wash pans once',
      hoverStates: 'Lift 2px with a 200ms cubic-bezier(.3,0,.2,1)',
      transitions: 'Opacity and transform only',
      scroll: 'Canopy sections reveal once at 12% visibility',
    },
    accessibility:
      'Body text 11.4:1 on the canvas; green used for fills pairs with a white label for 3.6:1. Focus is a 3px #2f9e44 ring, never removed. Motion collapses to opacity under prefers-reduced-motion.',
    responsive:
      'Three-up energy stats become one column under 720px; the arched card grid reflows to two then one. Buttons keep 44px targets.',
    codeExample:
      '<section class="solar">\n  <h1>Power the block, not <em>just the building.</em></h1>\n  <p>Community solar with a dashboard anyone can read.</p>\n  <button class="btn-solar">See the grid</button>\n</section>',
    accent: '#2f9e44',
    motif: 'wave-section',
    layout: 'hero-cards',
    useCases: ['Energy', 'Architecture', 'Nonprofit'],
    signatureCss: `.dv-hero { background: radial-gradient(48em 20em at 20% 0%, #f4b40022, transparent 70%), radial-gradient(40em 18em at 85% 20%, #2f9e4422, transparent 72%); }
.dv-card { background: #fffdf8; }
.dv-hero h1 em { color: #0b6e4f; }
.dv-btn-primary { border-radius: 999px; }`,
    author: 'Priya Raman',
    createdAt: '2026-09-27',
    popularity: 88,
    trending: true,
  },
  {
    id: 'quantum-lab',
    name: 'Quantum Lab',
    category: 'Professional',
    tags: ['research', 'physics', 'science', 'data', 'instrument'],
    description: 'Instrument readouts for very small things.',
    designPhilosophy:
      'A physics lab does not decorate. Quantum Lab is a control surface: cool violet instrumentation, cyan for live channels, and type that never gets in the way of a number. It assumes the reader is smart and the monitor is good. For research platforms, ML tooling, and any dashboard where precision is the brand.',
    designDetails:
      'Deep indigo #0c1030 context on a cool canvas #f4f5ff, signal cyan #22d3ee for active channels, violet #5b6cff for structure. Space Grotesk display with IBM Plex Sans body; dotted pixel-grid backing behind the hero. Tabular figures on every metric.',
    colors: { primary: '#5b6cff', secondary: '#2b2f6b', accent: '#22d3ee', neutral: '#e7e9fb', background: '#f4f5ff', text: '#0c1030' },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 24 / 32 / 48',
      lineHeights: 'Display 1.12, body 1.6, labels 1.2',
      letterSpacing: 'Labels 0.1em uppercase; figures 0 with tabular-nums',
    },
    components: {
      primary: 'Solid #5b6cff, white text, 6px radius, padding 11px 20px',
      secondary: '1px #c3c8f5 border, transparent, #0c1030 text',
      tertiary: 'Cyan text link with an ↗ for external datasets',
      radius: '6px controls, 10px panels — instrument-tight',
      hover: 'Border brightens to cyan, 120ms linear',
      cards: 'White panels, 1px #dfe2fb border, 10px radius, 20px padding',
      forms: 'Inputs 42px, mono placeholder, cyan focus ring 2px',
      navigation: 'Left rail with active-channel indicator and a hairline rule',
      modals: 'Panel sheet, title row with a close ✕, hairline sections',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 64 / 120', paddingScale: '12 / 20 / 32', grid: '1360px full-width, 12-col instrument grid' },
    motion: {
      pageLoad: 'Channels fade in 30ms apart',
      hoverStates: 'Border + background brighten 120ms',
      transitions: 'Snappy ease-out; no bounce',
      scroll: 'Sparklines draw on first enter',
    },
    accessibility:
      'Text 13.9:1 on the canvas; cyan accents pair with ✦ icons rather than carrying meaning alone. Focus 2px #5b6cff. Live metrics announce politely via aria-live.',
    responsive:
      'The rail collapses to a top bar under 900px; tables become stacked records. Figures never truncate mid-number.',
    codeExample:
      '<section class="lab">\n  <h1>Measure the <em>impossible</em>, calmly.</h1>\n  <div class="grid-3"><div class="metric">σ 0.0004</div><div class="metric">Q 1.2e6</div><div class="metric">T 15 mK</div></div>\n</section>',
    accent: '#5b6cff',
    motif: 'pixel-grid',
    layout: 'dashboard',
    useCases: ['AI/ML', 'Data & Analytics', 'Education'],
    signatureCss: `.dv-hero { background-image: radial-gradient(#5b6cff22 1px, transparent 1px); background-size: 20px 20px; }
.dv-card { background: #ffffff; }
.dv-hero h1 em { color: #22d3ee; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Dr. Malik Ferreira',
    createdAt: '2026-09-27',
    popularity: 84,
  },
  {
    id: 'terrazzo-cafe',
    name: 'Terrazzo Cafe',
    category: 'Playful',
    tags: ['terrazzo', 'speckle', 'cafe', 'warm', 'friendly'],
    description: 'Speckled surfaces with a friendly counter.',
    designPhilosophy:
      'Terrazzo is the friendliest material in architecture: a hundred scraps made precious. This system treats a menu the same way — many small things, arranged with care. Warm plaster background, confetti-fleck accents, and rounded chunky type that feels hand-set. For cafes, delis, and independent retail.',
    designDetails:
      'Rose #d94f7a and teal #2f9e9e flecks over plaster #fdf7f0, marigold #f2c14e for prices and tags. Baloo 2 display with Nunito body. Bracketed card corners, speckled section dividers, and a chunky 999px pill everywhere.',
    colors: { primary: '#d94f7a', secondary: '#2f9e9e', accent: '#f2c14e', neutral: '#f6efe6', background: '#fdf7f0', text: '#2a2320' },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 22 / 28 / 36 / 52',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.05em uppercase',
    },
    components: {
      primary: 'Solid #d94f7a, white text, 999px pill, padding 12px 24px, weight 700',
      secondary: '2px #2f9e9e border, transparent, teal text',
      tertiary: 'Rose text link with a doubled → →',
      radius: '999px pills, 16px cards — soft and chunky',
      hover: 'Scale 1.03 and deepen 6%, 160ms ease-out',
      cards: 'Warm-white cards, 16px radius, 2px dashed #2f9e9e22 border, 22px padding',
      forms: '46px inputs, 999px pill, focus ring 3px #d94f7a/25%',
      navigation: 'Pill navigation floating over the counter',
      modals: '20px radius, soft scrim, pop-in 0.96→1',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 24 / 40 / 64', paddingScale: '12 / 20 / 32 / 48', grid: '12-column, 1160px max, 22px gutter' },
    motion: {
      pageLoad: 'Cards pop in 60ms apart, 240ms each',
      hoverStates: 'Scale 1.03, 160ms ease-out',
      transitions: 'Transform and opacity only',
      scroll: 'Sections reveal once with a slight overshoot',
    },
    accessibility:
      'Body 12.1:1 on plaster; rose/teal pair with a ✓ or icon so colour is never the only signal. Focus 3px rose ring. All tap targets ≥ 46px.',
    responsive:
      'The menu grid drops 3 → 2 → 1; the pill nav condenses to a sheet under 640px.',
    codeExample:
      '<section class="counter">\n  <h1>Today&rsquo;s <em>special:</em> a little of everything.</h1>\n  <p>Hand-made, speckled, and priced with a straight face.</p>\n  <button class="btn-terrazzo">See the menu</button>\n</section>',
    accent: '#d94f7a',
    motif: 'corner-brackets',
    layout: 'catalog',
    useCases: ['Coffee Shop', 'Restaurant', 'Marketplace'],
    signatureCss: `.dv-stage { background-image: radial-gradient(#d94f7a1f 2px, transparent 2px), radial-gradient(#2f9e9e1f 2px, transparent 2px); background-size: 34px 34px, 46px 46px; background-position: 0 0, 12px 18px; }
.dv-card { background: #fffdfa; }
.dv-hero h1 em { color: #2f9e9e; }`,
    author: 'Rosa Bembé',
    createdAt: '2026-09-27',
    popularity: 82,
  },
  {
    id: 'noir-dossier',
    name: 'Noir Dossier',
    category: 'Retro',
    tags: ['noir', 'detective', 'typewriter', 'manila', 'case-file'],
    description: 'A case file, typed twice and filed once.',
    designPhilosophy:
      'The case file is the most atmospheric document in fiction: manila, carbon, red string. Noir Dossier builds a reading experience out of it — typewriter display type, stamped labels, and the confidence that comes from a period where every word cost paper. For true-crime publishing, archives, and narrative journalism.',
    designDetails:
      'Aged manila #efe6d0 ground, ink #14120f text, rubber-stamp red #a8352a for emphasis only. Courier Prime display with Spectral body. Rule lines like a typed form, stamped uppercase labels, and hanging-indent paragraphs.',
    colors: { primary: '#33261c', secondary: '#5a5348', accent: '#a8352a', neutral: '#e7dcc3', background: '#efe6d0', text: '#14120f' },
    typography: {
      displayFont: 'Courier Prime',
      bodyFont: 'Spectral',
      scale: '13 / 14 / 16 / 18 / 24 / 32 / 44',
      lineHeights: 'Display 1.2, body 1.7',
      letterSpacing: 'Labels 0.18em uppercase; body 0',
    },
    components: {
      primary: 'Solid #33261c, manila text, 0 radius, uppercase, padding 12px 22px',
      secondary: '2px #33261c border, transparent, ink text',
      tertiary: 'Red underlined link, as if circled',
      radius: '0 everywhere — paper has no corners to round',
      hover: 'Background darkens one step, 120ms linear',
      cards: 'Manila files, 0 radius, 1px #33261c33 border, 26px padding, typed rules',
      forms: 'Underlined fields, no boxes, red focus caret',
      navigation: 'Typed masthead bar with a rule beneath',
      modals: 'Dossier sheet, 0 radius, stamped header',
    },
    spacing: { baseUnit: '6px', marginScale: '12 / 24 / 48 / 80', paddingScale: '14 / 24 / 40', grid: '68ch measure, 1040px max, 28px gutter' },
    motion: {
      pageLoad: 'Content appears with a 2-step typewriter cadence',
      hoverStates: 'Underline draws left-to-right, 140ms',
      transitions: 'Opacity and background only',
    },
    accessibility:
      'Ink 14.6:1 on manila; red used at ≥ 5.3:1 and always with a label. Focus is a 2px ink outline offset 2px.',
    responsive:
      'The two-column dossier stacks under 760px; the measure stays under 68 characters.',
    codeExample:
      '<article class="dossier">\n  <p class="stamp">Case 4471 · Open</p>\n  <h1>The <em>quiet</em> disappearance.</h1>\n  <p>Filed Tuesday. Never followed up.</p>\n</article>',
    accent: '#a8352a',
    motif: 'mono-labels',
    layout: 'magazine',
    useCases: ['Publishing', 'Film & TV', 'Legal'],
    signatureCss: `.dv-stage { background: #efe6d0; }
.dv-card { background: #f4ecd8; }
.dv-hero h1 { font-family: 'Courier Prime', monospace; }
.dv-hero h1 em { color: #a8352a; font-style: normal; text-decoration: underline; }
.dv-kicker { color: #a8352a; }`,
    author: 'Hal Marchetti',
    createdAt: '2026-09-27',
    popularity: 79,
  },
  {
    id: 'op-art-aperture',
    name: 'Op Art Aperture',
    category: 'Creative',
    tags: ['op-art', 'optical', 'monochrome', 'illusion', 'graphic'],
    description: 'Your eyes move before your mind does.',
    designPhilosophy:
      'Optical art is interaction design for the retina. Op Art Aperture strips the page to black, white, and one alarm red, then uses scale and outline to make the layout itself vibrate. Nothing is decorative; every line is doing perceptual work. For galleries, posters, and studios that would rather be remembered than liked.',
    designDetails:
      'Paper white #fafafa with true black #111111 and a single red #ff3b30. Archivo Black outlined headlines (stroke, not fill), Archivo body, and concentric ring dividers. Zero radius, zero shadow, maximum contrast.',
    colors: { primary: '#111111', secondary: '#f2f2f2', accent: '#ff3b30', neutral: '#e8e8e8', background: '#fafafa', text: '#0a0a0a' },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 48 / 72',
      lineHeights: 'Display 0.94, body 1.7',
      letterSpacing: 'Display -0.04em; labels 0.22em uppercase',
    },
    components: {
      primary: 'Outlined 2px #111 on transparent, black text, 0 radius',
      secondary: 'Solid #111, white text',
      tertiary: 'Red text link with a hard underline',
      radius: '0 everywhere',
      hover: 'Inverts black↔white instantly, 90ms linear',
      cards: 'White plates, 0 radius, 2px black border, 28px padding',
      forms: 'Boxed inputs, 0 radius, 2px black border, red caret',
      navigation: 'Thin black bar with letterspaced uppercase links',
      modals: 'Full-bleed plate with a 2px black frame',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 64 / 128', paddingScale: '12 / 24 / 48 / 96', grid: '12-column, 1280px max, 16px gutter' },
    motion: {
      pageLoad: 'Headlines wipe from outline to outline-red, 320ms',
      hoverStates: 'Instant invert, 90ms linear',
      transitions: 'No easing curves — mechanical on/off',
    },
    accessibility:
      'Black on white is 19.6:1; red is used at 4.9:1 and always with a rule or label so it is not colour-only. Focus is a 3px black outline with 2px offset.',
    responsive:
      'The poster headline scales with clamp(); concentric grids collapse 4 → 2 under 700px.',
    codeExample:
      '<section class="op">\n  <h1>Form follows <em>feeling.</em></h1>\n  <p>Pattern is not decoration. It is argument.</p>\n  <button class="btn-op">Enter the grid</button>\n</section>',
    accent: '#ff3b30',
    motif: 'outline-type',
    layout: 'poster',
    useCases: ['Art Gallery', 'Portfolio', 'Agency'],
    signatureCss: `.dv-hero h1 { -webkit-text-stroke-width: 2px; }
.dv-section { border-top: 2px solid #111; }
.dv-card { border-width: 2px; }
.dv-btn-primary:hover { background: #111; color: #fff; }`,
    author: 'Ines Vogel',
    createdAt: '2026-09-27',
    popularity: 86,
    trending: true,
  },
  {
    id: 'vhs-rental',
    name: 'VHS Rental',
    category: 'Retro',
    tags: ['vhs', 'analog', 'video-store', 'neon', 'tracking'],
    description: 'Be kind. Rewind. Ship it.',
    designPhilosophy:
      'The video store was a social recommendation engine with carpet. VHS Rental romanticises the physical tape: CRT scanlines, tracking-error colour, and PLAY ► affordances. Loud enough to be fun, structured enough to browse. For streaming catalogs, film archives, and retro gaming.',
    designDetails:
      'Near-black #0d0a1a with violet #7c3aed and cyan #22d3ee bleed, bubblegum #f472b6 for accents. VT323 display with Space Mono body. Scanline overlay, glow on headings, and the ⊕ record indicator as a motif.',
    colors: { primary: '#7c3aed', secondary: '#22d3ee', accent: '#f472b6', neutral: '#1a1329', background: '#0d0a1a', text: '#f1ecff' },
    typography: {
      displayFont: 'VT323',
      bodyFont: 'Space Mono',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 56',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Labels 0.16em uppercase; display 0.02em',
    },
    components: {
      primary: 'Solid #7c3aed, white text, 6px radius, glow 0 0 20px #7c3aed66',
      secondary: '1px #22d3ee border, transparent, cyan text',
      tertiary: 'Bubblegum text link with ▶',
      radius: '6px controls, 12px cards',
      hover: 'Glow intensifies 30%, 140ms ease-out',
      cards: '#171027 panels, 1px #3a2a5c border, 12px radius, 20px padding',
      forms: 'Dark inputs, mono text, cyan focus ring 2px',
      navigation: 'Top bar with a REC dot and tracking-error hairline',
      modals: 'Tape-case sheet with slot labels',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 56 / 96', paddingScale: '12 / 20 / 36', grid: '12-column, 1240px max, 24px gutter' },
    motion: {
      pageLoad: 'Headings flicker on like a CRT warming up',
      hoverStates: 'Glow +30%, 140ms ease-out',
      transitions: 'Transform and filter only',
      scroll: 'Tracklist rows stagger 24ms',
    },
    accessibility:
      'Text 15.8:1 on the tape-black ground; violet/cyan pair with ▶ and ● glyphs. Focus is a 2px cyan ring. Scanline overlay is aria-hidden and reduced-motion-safe.',
    responsive:
      'The shelf grid drops 4 → 2 → 1; the REC bar stays fixed and readable under 640px.',
    codeExample:
      '<section class="tape">\n  <h1>Tonight&rsquo;s <em>double feature.</em></h1>\n  <p>Two tapes, one late fee, no refunds.</p>\n  <button class="btn-vhs">▶ Play</button>\n</section>',
    accent: '#7c3aed',
    motif: 'scanlines',
    layout: 'hero-cards',
    useCases: ['Streaming', 'Film & TV', 'Gaming'],
    signatureCss: `.dv-card { background: #171027; }
.dv-hero h1 { font-family: 'VT323', monospace; }
.dv-hero h1 em { color: #22d3ee; font-style: normal; }
.dv-kicker::after { content: ' ● REC'; color: #f472b6; }`,
    author: 'Dez Kowalski',
    createdAt: '2026-09-27',
    popularity: 87,
    trending: true,
  },
  {
    id: 'riso-atelier',
    name: 'Riso Atelier',
    category: 'Creative',
    tags: ['risograph', 'print', 'duotone', 'studio', 'ink'],
    description: 'Two inks, one press, endless editions.',
    designPhilosophy:
      'Risograph forces discipline: you get two inks and a misregistration you learn to love. Riso Atelier is that constraint as a system — loud flat colour, duotone imagery, and type set with a printmaker&rsquo;s confidence. For studios, indie publishers, and anyone who still smells paper.',
    designDetails:
      'Warm paper #f8f3e8 with riso red #ff4f5a and riso blue #2643c8, marigold #ffd23f as the third spot. Archivo Black display with Familjen Grotesk body. Duotone-gradient imagery, offset plate shadows, and a slight 0.5° rotation on tags to mimic a hand-fed sheet.',
    colors: { primary: '#ff4f5a', secondary: '#2643c8', accent: '#ffd23f', neutral: '#efe6d6', background: '#f8f3e8', text: '#15120f' },
    typography: {
      displayFont: 'Archivo Black',
      bodyFont: 'Familjen Grotesk',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 52',
      lineHeights: 'Display 1.0, body 1.62',
      letterSpacing: 'Display -0.02em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #ff4f5a, paper text, 2px radius, 3px 3px 0 #2643c8 offset shadow',
      secondary: '2px #2643c8 border, transparent, blue text',
      tertiary: 'Blue underlined link with a plate mark',
      radius: '2px controls, 4px cards — print-sharp',
      hover: 'Offset shadow grows to 5px, 140ms ease-out',
      cards: 'Paper cards, 4px radius, 2px #2643c8 border, 24px padding',
      forms: 'Boxed inputs, 2px blue border, marigold focus fill',
      navigation: 'Press bar with a registration cross',
      modals: 'Edition sheet with plate numbers',
    },
    spacing: { baseUnit: '6px', marginScale: '12 / 24 / 44 / 72', paddingScale: '14 / 24 / 40', grid: '12-column, 1180px max, 22px gutter' },
    motion: {
      pageLoad: 'Plates stamp in, 180ms each, offset 40ms',
      hoverStates: 'Offset shadow +2px, 140ms ease-out',
      transitions: 'Transform only; colours snap',
    },
    accessibility:
      'Ink 13.2:1 on paper; red keeps 4.6:1 and pairs with a plate number rather than alone. Focus is a 3px blue outline offset 2px.',
    responsive:
      'Duotone feature rows stack under 780px; the registration grid collapses to one column.',
    codeExample:
      '<section class="press">\n  <h1>Two inks. <em>No apologies.</em></h1>\n  <p>An edition of 150, signed at the corner.</p>\n  <button class="btn-riso">Buy the print</button>\n</section>',
    accent: '#ff4f5a',
    motif: 'duotone-media',
    layout: 'asymmetric',
    useCases: ['Agency', 'Portfolio', 'Publishing'],
    signatureCss: `.dv-card { background: #fffdf6; box-shadow: 3px 3px 0 #2643c822; }
.dv-hero h1 em { color: #2643c8; }
.dv-media { background: linear-gradient(135deg, #ff4f5a, #2643c8); }
.dv-kicker { transform: rotate(-0.5deg); }`,
    author: 'Nico Basile',
    createdAt: '2026-09-27',
    popularity: 83,
  },
  {
    id: 'circuit-foundry',
    name: 'Circuit Foundry',
    category: 'Professional',
    tags: ['pcb', 'hardware', 'manufacturing', 'copper', 'fab'],
    description: 'Fabrication data, laid out like a board.',
    designPhilosophy:
      'A PCB is a document: silkscreen labels, copper traces, drill hits. Circuit Foundry treats a hardware product page the same way — dense, labelled, and traceable. Solder-mask green over dark substrate, copper as the accent, and monospace everywhere a part number lives. For hardware, supply chain, and manufacturing.',
    designDetails:
      'Board substrate #0a120e with solder green #1b8f4b, copper #c98a3a for accents, silkscreen #dff3e6 text. Chakra Petch display with IBM Plex Mono body. Tape-label kickers, trace-line dividers, and a drill-hit dot grid.',
    colors: { primary: '#1b8f4b', secondary: '#0b5d33', accent: '#c98a3a', neutral: '#0f1c16', background: '#0a120e', text: '#dff3e6' },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'IBM Plex Mono',
      scale: '12 / 14 / 16 / 18 / 24 / 30 / 44',
      lineHeights: 'Display 1.16, body 1.6',
      letterSpacing: 'Labels 0.12em uppercase; part numbers 0',
    },
    components: {
      primary: 'Solid #1b8f4b, board-black text, 2px radius, uppercase mono label',
      secondary: '1px #c98a3a border, transparent, copper text',
      tertiary: 'Copper text link with a → and a pad mark',
      radius: '2px controls, 4px panels — fab-drawn',
      hover: 'Trace brightens to copper, 110ms linear',
      cards: '#0e1812 panels, 1px #1d3327 border, 4px radius, 20px padding',
      forms: 'Dark inputs, mono, green focus ring 2px',
      navigation: 'Silkscreen bar with a revision tag',
      modals: 'Fab sheet with revision stamp',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 64 / 112', paddingScale: '12 / 20 / 32', grid: '1360px, 12-col board grid, 2mm-equivalent gutters' },
    motion: {
      pageLoad: 'Rows trace in left-to-right, 160ms each',
      hoverStates: 'Border → copper, 110ms linear',
      transitions: 'Linear, machine-like',
      scroll: 'Trace dividers animate once',
    },
    accessibility:
      'Text 14.1:1 on substrate; green/copper deltas pair with ▲▼ and labels. Focus 2px green. Live fab status uses aria-live=polite.',
    responsive:
      'The bill-of-materials table scrolls horizontally with a pinned first column; the board grid stacks under 880px.',
    codeExample:
      '<section class="board">\n  <h1>Rev C, <em>fab-ready.</em></h1>\n  <p>Four layers, 0.8mm, panelised twelve-up.</p>\n  <button class="btn-fab">Download gerbers</button>\n</section>',
    accent: '#c98a3a',
    motif: 'tape-labels',
    layout: 'bento',
    useCases: ['Manufacturing', 'Developer Tools', 'Energy'],
    signatureCss: `.dv-card { background: #0e1812; }
.dv-hero h1 { font-family: 'Chakra Petch', sans-serif; }
.dv-hero h1 em { color: #c98a3a; font-style: normal; }
.dv-section { border-top: 1px solid #1d3327; }
.dv-kicker { color: #c98a3a; }`,
    author: 'Tomas Lindqvist',
    createdAt: '2026-09-27',
    popularity: 77,
  },
  {
    id: 'paper-craft-club',
    name: 'Paper Craft Club',
    category: 'Playful',
    tags: ['paper', 'collage', 'handmade', 'kids', 'scissors'],
    description: 'Cut, fold, and glue the interface.',
    designPhilosophy:
      'Paper craft mistakes are cheap, so paper craft children are brave. This system borrows that: layered shapes, visible glue-tabs, and a palette that looks like construction paper. It is deliberately imperfect, because perfect is intimidating to a seven-year-old. For kids&rsquo; brands, classrooms, and workshops.',
    designDetails:
      'Warm paper #fff9f0 with tangerine #ff7a59, blue #3aa6b9, and marigold #ffd166. Amatic SC display with Patrick Hand body. Bracketed card corners read as corner tabs, with soft drop shadows that suggest glued layers.',
    colors: { primary: '#ff7a59', secondary: '#3aa6b9', accent: '#ffd166', neutral: '#fdf2e3', background: '#fff9f0', text: '#2b2118' },
    typography: {
      displayFont: 'Amatic SC',
      bodyFont: 'Patrick Hand',
      scale: '16 / 18 / 20 / 24 / 30 / 40 / 60',
      lineHeights: 'Display 1.0, body 1.7',
      letterSpacing: 'Display 0.01em; labels 0.04em',
    },
    components: {
      primary: 'Solid #ff7a59, white text, 14px radius, 2px #d95f3d border, glued shadow',
      secondary: '2px #3aa6b9 border, transparent, teal text',
      tertiary: 'Tangerine underlined link with a ✂',
      radius: '14px controls, 20px cards — soft cut paper',
      hover: 'Rotate 1.5° and lift 3px, 180ms ease-out',
      cards: 'Paper cards, 20px radius, 2px dashed #3aa6b955 border, 24px padding',
      forms: 'Big 52px inputs, 16px radius, crayon-thick focus ring',
      navigation: 'Washi-tape nav strip',
      modals: 'Layered card, tabs at the corners',
    },
    spacing: { baseUnit: '8px', marginScale: '10 / 20 / 36 / 60 / 96', paddingScale: '14 / 24 / 40 / 64', grid: '12-column, 1120px max, 26px gutter' },
    motion: {
      pageLoad: 'Layers drop in with a soft bounce, 260ms',
      hoverStates: 'Tilt 1.5° + lift, 180ms ease-out',
      transitions: 'Transform with a gentle overshoot',
      scroll: 'Sections peel in once',
    },
    accessibility:
      'Ink 14.8:1 on paper; every colour pair sits above 4.5:1 and orange is never the sole signal. Focus is a 3px tangerine ring. Large targets (≥ 52px) suit younger hands.',
    responsive:
      'The craft board goes 3 → 2 → 1; display type stays generous rather than shrinking to nothing.',
    codeExample:
      '<section class="craft">\n  <h1>Make something <em>slightly wonky.</em></h1>\n  <p>Scissors, glue, and a grown-up.</p>\n  <button class="btn-craft">✂ Start cutting</button>\n</section>',
    accent: '#ff7a59',
    motif: 'corner-brackets',
    layout: 'centered',
    useCases: ['Kids', 'Education', 'Events'],
    signatureCss: `.dv-card { background: #fffdf7; box-shadow: 0 6px 0 #ffd16655; }
.dv-hero h1 em { color: #3aa6b9; }
.dv-btn-primary { box-shadow: 0 4px 0 #d95f3d; }
.dv-kicker { color: #ff7a59; }`,
    author: 'Mia Delgado',
    createdAt: '2026-09-27',
    popularity: 80,
  },
  {
    id: 'glacier-spa',
    name: 'Glacier Spa',
    category: 'Luxury',
    tags: ['spa', 'glacial', 'calm', 'wellness', 'mineral'],
    description: 'Cold water, warm light, nothing else.',
    designPhilosophy:
      'A good spa removes things. Glacier Spa is subtraction as luxury: glacial blues, mineral greys, and a single warm gold that appears once per screen like a lantern in a cold room. Wide spacing, thin type, and a spotlight that never rushes. For wellness retreats, premium hotels, and clinics.',
    designDetails:
      'Ice #f4fafc ground with glacial #7fb2c9, fjord #33586b for structure, and mineral gold #d9c48a used sparingly. Marcellus display with Jost body. Soft radial washes, hairline rules, and 60ch measures.',
    colors: { primary: '#7fb2c9', secondary: '#33586b', accent: '#d9c48a', neutral: '#e8f1f4', background: '#f4fafc', text: '#10242c' },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Jost',
      scale: '14 / 16 / 18 / 22 / 30 / 40 / 58',
      lineHeights: 'Display 1.14, body 1.72',
      letterSpacing: 'Display 0.01em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #33586b, ice text, 999px pill, padding 13px 28px',
      secondary: '1px #7fb2c9 border, transparent, fjord text',
      tertiary: 'Gold text link with a slow underline',
      radius: '999px pills, 20px cards — soft, water-worn',
      hover: 'Lift 2px, gold underline draws, 240ms ease-out',
      cards: 'Ice-white cards, 20px radius, 1px #7fb2c966 border, 28px padding',
      forms: '46px inputs, 999px pill, 3px #7fb2c9/30% focus ring',
      navigation: 'Minimal sticky bar, generous links, no shadow',
      modals: '20px radius, 30% fog scrim, slow 280ms scale-in',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 56 / 88 / 140', paddingScale: '16 / 28 / 48 / 80', grid: '12-column, 1140px max, 28px gutter' },
    motion: {
      pageLoad: 'Breathing fade over 700ms, no slide',
      hoverStates: 'Lift 2px, 240ms ease-out',
      transitions: 'Opacity and transform, long durations',
      scroll: 'Sections fade once at 20% visibility',
    },
    accessibility:
      'Text 13.6:1 on ice; glacial blue at 4.8:1 for links, never for body. Focus 3px fjord ring. Long animation durations respect prefers-reduced-motion.',
    responsive:
      'The treatment grid drops 3 → 1 under 760px; the measure widens only slightly to keep the calm.',
    codeExample:
      '<section class="spa">\n  <h1>Come in from the <em>cold.</em></h1>\n  <p>Fifteen treatments. One intention.</p>\n  <button class="btn-spa">Book a soak</button>\n</section>',
    accent: '#7fb2c9',
    motif: 'gradient-hero',
    layout: 'spotlight',
    useCases: ['Wellness', 'Hotel', 'Beauty & Spa'],
    signatureCss: `.dv-hero h1 { font-family: 'Marcellus', serif; }
.dv-hero h1 em { color: #33586b; font-style: normal; }
.dv-card { background: #ffffff; }
.dv-stat strong { font-family: 'Marcellus', serif; }`,
    author: 'Sofia Bergström',
    createdAt: '2026-09-27',
    popularity: 81,
  },
  {
    id: 'cosmic-observatory',
    name: 'Cosmic Observatory',
    category: 'Creative',
    tags: ['astronomy', 'cosmos', 'dark', 'science', 'wonder'],
    description: 'Point the telescope, forget the pixel.',
    designPhilosophy:
      'Space content fails when it feels like a dashboard. Cosmic Observatory treats the page as night sky: deep field-black, star-chart gold, and labels that read like coordinates. It is dark without being a gamer rig, and it lets images be enormous. For astronomy, science museums, and premium data storytelling.',
    designDetails:
      'Field black #08071a with nebula violet #8b7cf6, comet gold #f4d35e, and chart-paper text #eae7ff. Outfit display with IBM Plex Sans body. Glow reserved for headings, faint starfield behind sections, and monospaced coordinate labels.',
    colors: { primary: '#8b7cf6', secondary: '#1b1a3a', accent: '#f4d35e', neutral: '#12112b', background: '#08071a', text: '#eae7ff' },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'IBM Plex Sans',
      scale: '13 / 15 / 17 / 20 / 27 / 36 / 52 / 76',
      lineHeights: 'Display 1.04, body 1.68',
      letterSpacing: 'Display -0.02em; coordinates 0.14em uppercase',
    },
    components: {
      primary: 'Solid #8b7cf6, field text, 10px radius, glow 0 0 26px #8b7cf655',
      secondary: '1px #f4d35e border, transparent, gold text',
      tertiary: 'Gold coordinate link with a ⟶',
      radius: '10px controls, 18px cards',
      hover: 'Glow +25% and scale 1.015, 200ms ease-out',
      cards: '#100f26 panels, 1px #2a2850 border, 18px radius, 26px padding',
      forms: 'Dark inputs, coordinate placeholder, violet focus ring 2px',
      navigation: 'Transparent bar that solidifies on scroll',
      modals: 'Star-chart sheet with corner coordinates',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 40 / 72 / 120', paddingScale: '14 / 24 / 40 / 72', grid: '1440px full-bleed stage, 12-col chart grid' },
    motion: {
      pageLoad: 'Stars fade in, headline glow settles over 600ms',
      hoverStates: 'Glow +25%, 200ms ease-out',
      transitions: 'Opacity, transform, filter',
      scroll: 'Parallax star layers at 0.15 and 0.3',
    },
    accessibility:
      'Text 16.4:1 on field black; violet/gold pair with ✦ and ◇ markers. Focus 2px gold. Parallax is disabled under prefers-reduced-motion.',
    responsive:
      'The observatory stage scales images full-width; data tables scroll horizontally under 760px.',
    codeExample:
      '<section class="sky">\n  <p class="coords">RA 05h 34m · Dec +22°</p>\n  <h1>There is a <em>planet</em> there.</h1>\n  <p>Four hundred and thirty light years, and counting.</p>\n</section>',
    accent: '#8b7cf6',
    motif: 'glow-pulse',
    layout: 'full-bleed',
    useCases: ['Education', 'Data & Analytics', 'Streaming'],
    signatureCss: `.dv-stage { background: radial-gradient(60em 40em at 70% -10%, #8b7cf622, transparent 60%), #08071a; }
.dv-card { background: #100f26; }
.dv-hero h1 em { color: #f4d35e; font-style: normal; }
.dv-kicker { font-family: 'IBM Plex Mono', monospace; }`,
    author: 'Dr. Andrea Sun',
    createdAt: '2026-09-27',
    popularity: 85,
    trending: true,
  },
  {
    id: 'weather-bureau',
    name: 'Weather Bureau',
    category: 'Professional',
    tags: ['weather', 'government', 'forecast', 'data', 'public'],
    description: 'Public weather data, legible to everyone.',
    designPhilosophy:
      'A weather forecast is public infrastructure: it must be fast, legible, and honest about uncertainty. Weather Bureau is a civil-service design — high-contrast, no flourish, and a Swiss grid that lets numbers be numbers. For government, agriculture, and logistics.',
    designDetails:
      'Sky canvas #f5f9fd, bureau blue #0b63c5, teal #0f7a8c, and caution amber #f4a300 for advisories. Archivo display with IBM Plex Sans body. Swiss rules with index numbers, tabular figures, and a condition-glyph legend.',
    colors: { primary: '#0b63c5', secondary: '#0f7a8c', accent: '#f4a300', neutral: '#e6eef7', background: '#f5f9fd', text: '#0d1b2a' },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 24 / 30 / 42',
      lineHeights: 'Display 1.14, body 1.6',
      letterSpacing: 'Labels 0.1em uppercase; figures 0 tabular-nums',
    },
    components: {
      primary: 'Solid #0b63c5, white text, 4px radius, padding 11px 20px',
      secondary: '1px #0b63c5 border, transparent, blue text',
      tertiary: 'Blue underlined link, high contrast',
      radius: '4px controls, 8px panels — civic-tight',
      hover: 'Background darkens 8%, 130ms linear',
      cards: 'White panels, 1px #cfdceb border, 8px radius, 20px padding',
      forms: '44px inputs, 4px radius, 3px blue focus ring',
      navigation: 'Official bar with a grid rule and section index',
      modals: 'Document sheet with a numbered heading',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 64 / 104', paddingScale: '12 / 20 / 32', grid: '12-column, 1200px max, 20px gutter' },
    motion: {
      pageLoad: 'Content fades in, 260ms, no movement',
      hoverStates: 'Background darkens, 130ms linear',
      transitions: 'Colour only',
    },
    accessibility:
      'Text 14.9:1 on the sky canvas; advisories use amber at 4.6:1 plus an icon and text. Focus 3px blue ring. Tables carry real headers and captions.',
    responsive:
      'The forecast table becomes stacked day cards under 820px; the grid keeps tabular figures aligned.',
    codeExample:
      '<section class="bureau">\n  <p class="kicker">Issued 06:00 local</p>\n  <h1>Clear, then <em>turning.</em></h1>\n  <p>High 21°, low 9°. Wind from the north-west, 12 km/h.</p>\n</section>',
    accent: '#0b63c5',
    motif: 'scanlines',
    layout: 'dashboard',
    useCases: ['Government', 'Data & Analytics', 'Agriculture'],
    signatureCss: `.dv-hero h1 { text-transform: none; }
.dv-hero h1 em { color: #0b63c5; }
.dv-card { background: #ffffff; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Grace Oyelaran',
    createdAt: '2026-09-27',
    popularity: 75,
  },
  {
    id: 'pulp-anthology',
    name: 'Pulp Anthology',
    category: 'Retro',
    tags: ['pulp', 'paperback', 'anthology', 'fiction', 'cover'],
    description: 'Twelve stories, one cracked spine.',
    designPhilosophy:
      'Pulp covers promised more than they delivered, gloriously. Pulp Anthology is that promise as a reading experience: slab headlines, cheap-and-proud colour, and borders that frame each story like a cover. It is loud, warm, and unembarrassed about entertainment. For publishers, fiction platforms, and archive collections.',
    designDetails:
      'Newsprint cream #f3e9d2 with pulp red #c0392b, ink #1d1a16, and cover gold #e0a800. Alfa Slab One display with Bitter body. Double rules, drop caps, and a corner flash on featured stories.',
    colors: { primary: '#c0392b', secondary: '#2f2a26', accent: '#e0a800', neutral: '#ece0c8', background: '#f3e9d2', text: '#1d1a16' },
    typography: {
      displayFont: 'Alfa Slab One',
      bodyFont: 'Bitter',
      scale: '14 / 16 / 18 / 22 / 30 / 40 / 58',
      lineHeights: 'Display 1.02, body 1.7',
      letterSpacing: 'Display -0.01em; labels 0.12em uppercase',
    },
    components: {
      primary: 'Solid #c0392b, cream text, 2px radius, drop shadow 2px 2px 0 #1d1a16',
      secondary: '2px #1d1a16 border, transparent, ink text',
      tertiary: 'Red underlined link with a ◆',
      radius: '2px controls, 6px covers',
      hover: 'Shadow grows and red deepens, 150ms ease-out',
      cards: 'Cover cards, 6px radius, 2px #1d1a16 border, 22px padding',
      forms: 'Boxed inputs, 2px ink border, gold focus fill',
      navigation: 'Masthead bar with double rule',
      modals: 'Cover panel with a spine stripe',
    },
    spacing: { baseUnit: '6px', marginScale: '12 / 24 / 44 / 76', paddingScale: '14 / 22 / 36', grid: '12-column, 1120px max, 24px gutter' },
    motion: {
      pageLoad: 'Covers flip in, 200ms each, 50ms apart',
      hoverStates: 'Shadow +2px, 150ms ease-out',
      transitions: 'Transform only',
    },
    accessibility:
      'Ink 12.7:1 on cream; red at 5.1:1 with a ◆ marker, never alone. Focus 3px ink outline offset 2px.',
    responsive:
      'The anthology grid drops 3 → 2 → 1; slab type clamps so covers never overflow.',
    codeExample:
      '<article class="pulp">\n  <p class="issue">Vol. 12 · 25¢</p>\n  <h1>The <em>Midnight</em> Line</h1>\n  <p>He took the last train. It was going the wrong way.</p>\n</article>',
    accent: '#c0392b',
    motif: 'editorial-columns',
    layout: 'editorial',
    useCases: ['Publishing', 'News', 'Film & TV'],
    signatureCss: `.dv-card { background: #fdf7e6; box-shadow: 3px 3px 0 #1d1a16; }
.dv-hero h1 { font-family: 'Alfa Slab One', serif; }
.dv-hero h1 em { color: #c0392b; font-style: normal; }
.dv-card:first-child { border-color: #c0392b; }`,
    author: 'Frank Delacroix',
    createdAt: '2026-09-27',
    popularity: 78,
  },
  {
    id: 'bakery-window',
    name: 'Bakery Window',
    category: 'Organic',
    tags: ['bakery', 'artisan', 'bread', 'warm', 'local'],
    description: 'What came out of the oven this morning.',
    designPhilosophy:
      'A bakery window sells by honesty: today&rsquo;s loaves, today&rsquo;s prices, sold until gone. Bakery Window is warm, earthy, and slightly rustic — crust browns, wheat greens, and a list that changes daily. For artisan food, farm shops, and local grocery.',
    designDetails:
      'Warm flour #fbf4e8 with crust #9c5a2c, wheat #5f7a4a, and honey #d9a441. Young Serif display with Karla body. Botanical dividers, a dotted day-list, and warm shadows that read like paper bags.',
    colors: { primary: '#9c5a2c', secondary: '#5f7a4a', accent: '#d9a441', neutral: '#f0e3cf', background: '#fbf4e8', text: '#2c2015' },
    typography: {
      displayFont: 'Young Serif',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 28 / 38 / 54',
      lineHeights: 'Display 1.1, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.06em uppercase',
    },
    components: {
      primary: 'Solid #9c5a2c, flour text, 12px radius, padding 12px 24px',
      secondary: '1px #5f7a4a border, transparent, wheat text',
      tertiary: 'Honey text link with a ✿',
      radius: '12px controls, 18px cards — round and warm',
      hover: 'Lift 2px and deepen, 200ms ease-out',
      cards: 'Flour cards, 18px radius, 1px #d9a44155 border, 24px padding',
      forms: '46px inputs, 12px radius, honey focus ring 3px',
      navigation: 'Chalkboard-style bar with a hand-written feel',
      modals: 'Paper-bag sheet with a folded corner',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 28 / 48 / 78', paddingScale: '14 / 24 / 38 / 60', grid: '12-column, 1160px max, 24px gutter' },
    motion: {
      pageLoad: 'List items rise 8px and fade, 240ms, 40ms apart',
      hoverStates: 'Lift 2px, 200ms ease-out',
      transitions: 'Transform and opacity',
      scroll: 'Sections reveal once',
    },
    accessibility:
      'Text 12.9:1 on flour; crust/wheat pair with labels and icons. Focus 3px honey ring. Day-list uses a real definition list.',
    responsive:
      'The counter grid goes 3 → 2 → 1; the price column stays aligned with tabular figures.',
    codeExample:
      '<section class="window">\n  <h1>Baked <em>this morning,</em> gone by noon.</h1>\n  <p>Sourdough, seeded rye, and cinnamon knots.</p>\n  <button class="btn-bakery">See today&rsquo;s list</button>\n</section>',
    accent: '#9c5a2c',
    motif: 'leaf-divider',
    layout: 'catalog',
    useCases: ['Restaurant', 'Coffee Shop', 'Grocery'],
    signatureCss: `.dv-card { background: #fffdf7; }
.dv-hero h1 em { color: #5f7a4a; }
.dv-kicker { color: #9c5a2c; }
.dv-stat strong { font-family: 'Young Serif', serif; }`,
    author: 'Ola Kowalczyk',
    createdAt: '2026-09-27',
    popularity: 76,
  },
  {
    id: 'espionage-console',
    name: 'Espionage Console',
    category: 'Professional',
    tags: ['security', 'surveillance', 'terminal', 'amber', 'classified'],
    description: 'Eyes only, amber on black.',
    designPhilosophy:
      'Security tooling is read under pressure. Espionage Console is a war-room terminal: amber phosphor on deep olive-black, red for active threats only, and monospace everywhere identification matters. It assumes a competent operator and refuses to be pretty at the cost of legible. For cybersecurity, government, and infrastructure.',
    designDetails:
      'Olive-black #0f1210 with amber #e0a41c, threat red #d64545, and phosphor text #e8ecdf. Oswald display with Space Mono body. Tape-label kickers, classification stamps, and blinking status pips that respect reduced-motion.',
    colors: { primary: '#e0a41c', secondary: '#2b2f2a', accent: '#d64545', neutral: '#1f221e', background: '#0f1210', text: '#e8ecdf' },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 18 / 23 / 30 / 42',
      lineHeights: 'Display 1.16, body 1.6',
      letterSpacing: 'Display 0.02em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #e0a41c, olive-black text, 2px radius, uppercase mono',
      secondary: '1px #d64545 border, transparent, red text',
      tertiary: 'Amber link with a › and a classification dot',
      radius: '2px controls, 4px panels — console-sharp',
      hover: 'Amber brightens, 110ms linear',
      cards: '#141813 panels, 1px #e0a41c33 border, 4px radius, 20px padding',
      forms: 'Dark inputs, mono, amber focus ring 2px',
      navigation: 'Console bar with clock and clearance level',
      modals: 'Classified sheet with stamped header',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 64 / 112', paddingScale: '12 / 20 / 30', grid: '1360px, 12-col console grid' },
    motion: {
      pageLoad: 'Lines type on, 120ms each',
      hoverStates: 'Amber brighten, 110ms linear',
      transitions: 'Linear only',
      scroll: 'Status pips pulse once at 1.4s intervals',
    },
    accessibility:
      'Text 13.1:1 on olive-black; amber/red pair with ◈/▲ and text. Focus 2px amber. Blink is replaced by a static dot under prefers-reduced-motion.',
    responsive:
      'The console grid stacks under 880px; tables scroll with pinned identifiers.',
    codeExample:
      '<section class="console">\n  <p class="stamp">CLEARANCE · LEVEL 3</p>\n  <h1>Two attempts, <em>one origin.</em></h1>\n  <p>Both failed at the same hop.</p>\n</section>',
    accent: '#e0a41c',
    motif: 'scanlines',
    layout: 'bento',
    useCases: ['Cybersecurity', 'Government', 'DevOps & Cloud'],
    signatureCss: `.dv-card { background: #141813; }
.dv-hero h1 { font-family: 'Oswald', sans-serif; text-transform: uppercase; }
.dv-hero h1 em { color: #e0a41c; font-style: normal; }
.dv-kicker { color: #d64545; }
.dv-section { border-top: 1px solid #e0a41c22; }`,
    author: 'Yusuf Demir',
    createdAt: '2026-09-27',
    popularity: 82,
  },
  {
    id: 'marble-atelier',
    name: 'Marble Atelier',
    category: 'Luxury',
    tags: ['marble', 'classical', 'stone', 'architecture', 'atelier'],
    description: 'Classical proportion, contemporary nerve.',
    designPhilosophy:
      'Classical architecture is a two-thousand-year argument about proportion. Marble Atelier takes the argument seriously and the ornament out: stone palettes, engraved letterforms, and outlines instead of fills. It is austere, confident, and a little cold — which is the point. For architecture studios, galleries, and premium property.',
    designDetails:
      'Stone #f6f4ef ground with basalt #1a1713, travertine #8d8577, and laurel gold #b08d57. Cormorant Garamond display set in outline with Livvic body. Engraved rules, colonnade dividers, and Roman numerals for plates.',
    colors: { primary: '#8d8577', secondary: '#2f2b26', accent: '#b08d57', neutral: '#eae6de', background: '#f6f4ef', text: '#1a1713' },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Livvic',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 64',
      lineHeights: 'Display 1.08, body 1.7',
      letterSpacing: 'Display 0.02em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Outlined 1.5px #2f2b26, transparent, ink text, 0 radius',
      secondary: '1px #b08d57 border, gold text',
      tertiary: 'Gold letter-spaced link with a drawn rule',
      radius: '0 everywhere — carved stone',
      hover: 'Ink fills the outline, 200ms ease-out',
      cards: 'Stone plates, 0 radius, 1px #1a171322 border, 30px padding',
      forms: 'Underlined fields, gold caret, no boxes',
      navigation: 'Colonnade bar with engraved wordmark',
      modals: 'Plaque sheet with an engraved border',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 64 / 110 / 160', paddingScale: '20 / 34 / 56 / 88', grid: '12-column, 1180px max, 32px gutter' },
    motion: {
      pageLoad: 'Fade only, 620ms, no movement',
      hoverStates: 'Outline fills with ink, 200ms ease-out',
      transitions: 'Colour and border only',
    },
    accessibility:
      'Ink 14.4:1 on stone; travertine used at 4.6:1 for rules and labels, never body. Focus 2px ink outline offset 3px. Outline display type is paired with solid small text.',
    responsive:
      'The colonnade grid collapses 4 → 2 → 1; the outlined headline clamps rather than wrapping awkwardly.',
    codeExample:
      '<section class="atelier">\n  <p class="plate">Plate I</p>\n  <h1>Drawn before <em>built.</em></h1>\n  <p>Stone, light, and an argument about proportion.</p>\n</section>',
    accent: '#b08d57',
    motif: 'paper-cut',
    layout: 'poster',
    useCases: ['Architecture', 'Art Gallery', 'Real Estate'],
    signatureCss: `.dv-hero h1 { font-family: 'Cormorant Garamond', serif; }
.dv-hero h1 em { -webkit-text-stroke-color: #b08d57; }
.dv-card { background: #faf9f5; }
.dv-section { border-top: 1px solid #1a171320; }`,
    author: 'Lorenzo Bianchi',
    createdAt: '2026-09-27',
    popularity: 80,
  },
]
