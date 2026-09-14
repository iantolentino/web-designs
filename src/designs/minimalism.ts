import type { DesignSystem } from '../types'

export const minimalismDesigns: DesignSystem[] = [
  {
    id: 'minimalist-tech',
    name: 'Minimalist Tech',
    category: 'Minimalism',
    tags: ['saas', 'clean', 'product', 'modern', 'light'],
    description: 'Clean, refined tech aesthetic for modern SaaS products.',
    designPhilosophy:
      'Restraint is the feature. Every element earns its place: one accent color carries the entire brand, whitespace does the heavy lifting, and typography — not decoration — creates hierarchy. The page should feel like a well-lit studio: calm, precise, and quietly confident.',
    designDetails:
      'Built around a strict 8px rhythm and a single accent (electric teal) used only for actions and key data. Surfaces are flat; depth comes from two restrained shadow levels. Headings use a geometric grotesque at heavy weights with tight tracking; body text is airy and highly legible. Nothing blinks, nothing bounces — motion is a soft 200ms ease used to confirm intent.',
    colors: {
      primary: '#0d9488',
      secondary: '#0f172a',
      accent: '#5eead4',
      neutral: '#f1f5f9',
      background: '#ffffff',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'Space Grotesk',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 24 / 32 / 48 / 72 (fluid between breakpoints)',
      lineHeights: 'Headings 1.1, body 1.6, labels 1.2',
      letterSpacing: 'Display -0.02em, body 0, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Solid #0d9488, white text, radius 8px, padding 12px 24px, weight 600, subtle inner top highlight',
      secondary: '1px #cbd5e1 border, transparent bg, #0f172a text, same metrics',
      tertiary: 'Text-only link in #0d9488 with animated underline on hover',
      radius: '8px (buttons/inputs), 12px (cards), 999px (pills)',
      hover: 'Primary darkens 8% and lifts 1px; secondary border turns #0d9488',
      cards: 'White, 1px #e2e8f0 border, radius 12px, padding 24px, shadow 0 1px 2px rgba(15,23,42,.06), hover raises to 0 8px 24px rgba(15,23,42,.08)',
      forms:
        'Inputs 44px tall, 1px #cbd5e1 border, radius 8px, focus ring 3px rgba(13,148,136,.25), labels 13px/600 above the field',
      navigation:
        '72px sticky top bar, blurred white background, wordmark left, 4 text links center, primary button right',
      modals: 'Radius 16px, dimmed backdrop rgba(15,23,42,.5), scale-in 0.98→1 over 200ms',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 24 / 40 / 64 / 96',
      paddingScale: '8 / 16 / 24 / 48',
      grid: '12-column, 1140px max width, 24px gutter',
    },
    motion: {
      pageLoad: 'Hero fades up 12px over 500ms ease-out, staggered 80ms per element',
      hoverStates: 'All interactive elements transition 200ms cubic-bezier(.4,0,.2,1)',
      transitions: 'Only opacity and transform — never layout properties',
      scroll: 'Sections reveal once at 15% visibility, never re-animate',
    },
    accessibility:
      'All text pairs meet WCAG AA (body 12.6:1 on white). Focus is a 3px teal ring with 2px offset, never removed. Semantic landmarks on every section; prefers-reduced-motion collapses all animation to opacity fades.',
    responsive:
      'Breakpoints 640/768/1024/1280. Type scales via clamp(): display clamp(2.25rem, 5vw, 4.5rem). Grid collapses to 1 column under 768px; nav condenses to a bottom-sheet menu; tap targets stay ≥44px.',
    codeExample:
      '<section class="hero">\n  <p class="eyebrow">New · v2.0</p>\n  <h1>Ship calm software.</h1>\n  <p class="lead">The metrics platform for teams that value focus.</p>\n  <div class="actions">\n    <button class="btn btn--primary">Start free</button>\n    <button class="btn btn--secondary">View demo</button>\n  </div>\n</section>',
    accent: '#0d9488',
    motif: 'underline-accent',
    signatureCss: `
.dv-hero h1 { position: relative; display: inline-block; }
.dv-hero h1::after { content: ''; position: absolute; left: 2px; right: 2px; bottom: 6px; height: 10px; background: rgba(94,234,212,.45); z-index: -1; transform: skewX(-8deg); }
.dv-nav { backdrop-filter: blur(8px); }
.dv-card:hover { transform: translateY(-2px); }`,
    author: 'Mara Lin',
    createdAt: '2026-01-15',
    popularity: 98,
    trending: true,
  },
  {
    id: 'zen-minimal',
    name: 'Zen Minimal',
    category: 'Minimalism',
    tags: ['calm', 'wellness', 'spacious', 'warm-minimal'],
    description: 'Breathing-room minimalism with warm paper tones.',
    designPhilosophy:
      'A digital garden path. Warm off-white paper, ink-soft text, and enormous negative space let the reader slow down. The interface almost disappears — content sits on the page the way stones sit in sand, each with room to be seen.',
    designDetails:
      'One serif voice (Newsreader-style display via Fraunces) set at generous sizes, hairline rules instead of boxes, and a single moss-green accent used for links and one CTA. Sections are separated by whitespace alone; navigation is a single quiet row. Motion is limited to gentle 400ms fades — the page never startles.',
    colors: {
      primary: '#5a7263',
      secondary: '#8a9a8e',
      accent: '#c4703f',
      neutral: '#ece7dd',
      background: '#faf7f0',
      text: '#2b2b27',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 28 / 40 / 56',
      lineHeights: 'Display 1.15, body 1.75',
      letterSpacing: 'Display -0.01em, labels 0.12em uppercase 11px',
    },
    components: {
      primary: 'Solid #5a7263, #faf7f0 text, radius 2px, padding 14px 32px, weight 500, no shadow',
      secondary: 'Hairline 1px #2b2b27 border, transparent bg, quiet hover fill',
      tertiary: 'Underlined text link, underline offset 6px, moss on hover',
      radius: '2px everywhere — nearly square, softly resolved',
      hover: 'Fill crossfades 300ms; links shift color, never underline-thicken',
      cards: 'Borderless — 1px top rule #d8d2c4, generous 32px padding, no shadow',
      forms: 'Bottom-border-only inputs on paper bg, moss focus border 2px',
      navigation: 'Single row, 24px padding, tiny uppercase letter-spaced links, active link moss',
      modals: 'Full-bleed paper sheet sliding up 16px, hairline top rule',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 32 / 64 / 128',
      paddingScale: '16 / 32 / 64',
      grid: 'Single 680px reading column; 12-col only below hero',
    },
    motion: {
      pageLoad: 'Content fades in 600ms; hero serif rises 8px',
      hoverStates: '300ms ease color and background transitions only',
      transitions: 'Gentle, unhurried; nothing under 250ms',
      scroll: 'Parallax-free. Sections fade at 20% visibility',
    },
    accessibility:
      'Ink text on paper measures 12.9:1. Focus is a 2px moss outline offset 3px. Reading column capped at 68ch; line length never strains. prefers-reduced-motion removes fades entirely.',
    responsive:
      'Single column at every size; hero type clamps from 2.5rem to 3.5rem. Navigation collapses to a horizontal scroll row under 480px. Touch targets padded to 48px.',
    codeExample:
      '<main class="zen">\n  <h1>Begin quietly.</h1>\n  <p class="lede">A journal for slower mornings.</p>\n  <a class="quiet-link" href="#">Read the first entry</a>\n</main>',
    accent: '#5a7263',
    motif: 'serif-italic-hero',
    signatureCss: `
.dv-hero h1 em { font-style: italic; font-weight: 400; color: #5a7263; }
.dv-section + .dv-section { border-top: 1px solid rgba(43,43,39,.12); }
.dv-nav a { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }`,
    author: 'Ana Reyes',
    createdAt: '2026-02-02',
    popularity: 84,
  },
  {
    id: 'swiss-editorial',
    name: 'Swiss Editorial',
    category: 'Minimalism',
    tags: ['grid', 'typographic', 'international-style', 'magazine'],
    description: 'International-style grid, oversized numerals, red accents.',
    designPhilosophy:
      'The grid is the design. Strict 12-column order, flush-left ragged-right type, and one loud vermilion accent against near-black and paper. Content is numbered, aligned, and unapologetically typographic — ornament is a failure of structure.',
    designDetails:
      'Massive display numerals (01, 02, 03) anchor each section. Archivo at 800–900 weight for display, hairline 1px column rules, and vermilion used only for section markers and active states. Photography, if any, is duotone. Everything aligns to the baseline grid; ragged edges are intentional and controlled.',
    colors: {
      primary: '#e63317',
      secondary: '#111111',
      accent: '#e63317',
      neutral: '#e8e6e1',
      background: '#f4f2ee',
      text: '#111111',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'Archivo',
      scale: '12 / 14 / 16 / 20 / 28 / 44 / 96 (numerals up to 160)',
      lineHeights: 'Display 0.95, body 1.5',
      letterSpacing: 'Display -0.03em, labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #111111, paper text, radius 0, padding 14px 28px, 700 weight, arrow suffix',
      secondary: '1px #111 border, transparent, 700, square corners',
      tertiary: 'Uppercase letter-spaced text link with vermilion index numeral',
      radius: '0 — everything square',
      hover: 'Background inverts instantly (no transition) — bold Swiss honesty',
      cards: '1px #111 border, square, internal 1px grid lines dividing content',
      forms: 'Square inputs with 2px #111 borders, labels as uppercase micro-type',
      navigation: 'Top rule 2px, wordmark left, numbered links (01 Work, 02 Studio)',
      modals: 'Square panel with 4px #111 border and hard offset shadow 8px 8px 0 #111',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 48',
      grid: '12 columns, 1px visible gutters, 1280px max',
    },
    motion: {
      pageLoad: 'No entrance animation — the page simply is',
      hoverStates: 'Instant inversions; underlines draw left-to-right 150ms',
      transitions: 'Immediate state changes; 150ms only for underline draws',
      scroll: 'Numerals pin briefly (sticky) as sections pass',
    },
    accessibility:
      'Near-black on paper: 15.8:1. Vermilion reserved for large elements only (AA Large). Focus is a 3px offset #111 outline. Keyboard order mirrors visual column order.',
    responsive:
      '12-col collapses to 6 under 1024px and 1 under 640px. Display numerals scale with clamp(4rem, 14vw, 10rem). Rules remain visible at all sizes — structure never hides.',
    codeExample:
      '<section class="chapter">\n  <span class="index">01</span>\n  <h2>Grid &amp; Order</h2>\n  <div class="cols">\n    <p>Typography is the architecture of the page.</p>\n  </div>\n</section>',
    accent: '#e63317',
    motif: 'swiss-grid',
    signatureCss: `
.dv-index { font-weight: 900; font-size: clamp(4rem, 12vw, 9rem); line-height: .85; color: #e63317; }
.dv-card { display: grid; grid-template-columns: 1fr 1px 1fr; }
.dv-card > .rule { background: #111; }
.dv-nav a:hover { background: #111; color: #f4f2ee; }`,
    author: 'Jonas Keller',
    createdAt: '2026-03-11',
    popularity: 88,
  },
  {
    id: 'soft-mono',
    name: 'Soft Mono',
    category: 'Minimalism',
    tags: ['monochrome', 'developer', 'quiet', 'greyscale'],
    description: 'Greyscale developer tooling calm with one amber spark.',
    designPhilosophy:
      'A terminal that learned manners. Greyscale surfaces, mono details, and hairline structure — then a single amber spark for the one action that matters. Built for developer tools whose users distrust color but respect clarity.',
    designDetails:
      'Space Mono for labels, numbers, and meta; IBM Plex Sans for prose. Surfaces step through four greys; borders are 1px and always visible. Amber (#f59e0b-family, deepened for contrast) appears exactly twice per viewport: active nav item and primary CTA. Code blocks are first-class citizens, styled like the product itself.',
    colors: {
      primary: '#b45309',
      secondary: '#27272a',
      accent: '#f59e0b',
      neutral: '#e4e4e7',
      background: '#fafafa',
      text: '#18181b',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 13 / 15 / 17 / 22 / 30 / 44',
      lineHeights: 'Display 1.15, body 1.65, mono 1.5',
      letterSpacing: 'Mono labels 0.06em, display -0.01em',
    },
    components: {
      primary: 'Solid #b45309, white text, radius 6px, padding 10px 20px, 600, mono uppercase 13px',
      secondary: '1px #d4d4d8 border on #fafafa, mono 13px uppercase',
      tertiary: 'Mono text link with `>` prefix that shifts 2px right on hover',
      radius: '6px components, 10px cards, 4px code blocks',
      hover: '150ms border-color darken; primary warms one step (#d97706)',
      cards: '#ffffff, 1px #e4e4e7, radius 10px, mono header row with grey divider',
      forms: 'Inputs with mono placeholder text, 1px borders, focus border #b45309 + glow 0 0 0 3px rgba(245,158,11,.2)',
      navigation: '52px bar, bottom 1px border, mono breadcrumb, active item amber underline 2px',
      modals: 'Radius 10px, header row mono uppercase, backdrop rgba(24,24,27,.55)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 16 / 24 / 48 / 80',
      paddingScale: '12 / 24 / 32',
      grid: '12-col 1080px; docs pages use a 240px sidebar + fluid column',
    },
    motion: {
      pageLoad: 'Elements fade 250ms — fast, functional, no theatrics',
      hoverStates: '150ms ease on border and background color only',
      transitions: 'Short and purposeful; nothing above 250ms',
      scroll: 'Sidebar highlights current section via scrollspy',
    },
    accessibility:
      'Body text 14.7:1; amber only on dark or as large/bold elements to hold 4.5:1+. Focus rings amber, 3px, always visible. All icon-only controls carry aria-labels.',
    responsive:
      'Breakpoints 640/1024. Sidebar becomes a top drawer under 1024px; code blocks scroll horizontally with a sticky language label. Type scale compresses two steps on mobile.',
    codeExample:
      '<header class="topbar">\n  <span class="crumb">docs / quickstart</span>\n  <button class="btn-primary">GET API KEY</button>\n</header>\n<pre><code>curl -X POST https://api.dev/v1/run</code></pre>',
    accent: '#b45309',
    motif: 'mono-labels',
    signatureCss: `
.dv-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: #71717a; }
.dv-tertiary:hover::before { transform: translateX(2px); }
.dv-card h4 { border-bottom: 1px solid #e4e4e7; padding-bottom: 8px; }`,
    author: 'Priya Nair',
    createdAt: '2026-04-08',
    popularity: 76,
  },
]
