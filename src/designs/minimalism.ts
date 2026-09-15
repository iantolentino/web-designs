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
    layout: 'split-hero',
    useCases: ['SaaS', 'AI/ML', 'Fintech', 'Productivity'],
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
    layout: 'centered',
    useCases: ['Health', 'Education', 'Portfolio'],
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
    layout: 'magazine',
    useCases: ['News', 'Agency', 'Education'],
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
    layout: 'dashboard',
    useCases: ['AI/ML', 'SaaS', 'Productivity'],
signatureCss: `
.dv-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: #71717a; }
.dv-tertiary:hover::before { transform: translateX(2px); }
.dv-card h4 { border-bottom: 1px solid #e4e4e7; padding-bottom: 8px; }`,
    author: 'Priya Nair',
    createdAt: '2026-04-08',
    popularity: 76,
  },
  {
    id: 'graphite-focus',
    name: 'Graphite Focus',
    category: 'Minimalism',
    tags: ['focus', 'graphite', 'docs', 'contrast'],
    description: 'One accent, zero noise — graphite discipline for deep-work interfaces.',
    designPhilosophy:
      'Minimalism in service of attention. A graphite paper field, hairline rules, and a single iris accent that appears only where the eye should land. Everything else earns its pixels or leaves.',
    designDetails:
      'Warm-gray paper (#f5f5f4) with near-black ink and one indigo signal. Bricolage Grotesque display stays 500-weight — hierarchy comes from size, not shouting. Buttons are 2px-radius rectangles; cards are flat panels separated by 1px rules, never shadows. Mono micro-labels uppercase at 0.08em track every section.',
    colors: {
      primary: '#4f46e5',
      secondary: '#1c1917',
      accent: '#a8a29e',
      neutral: '#e7e5e4',
      background: '#f5f5f4',
      text: '#1c1917',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 56',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display -0.01em, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Iris #4f46e5 fill, 2px radius, paper text, weight 600; hover deepens to #4338ca with no movement',
      secondary: 'Transparent panel button with 1px #d6d3d1 border; hover fills stone 8%',
      tertiary: 'Ink underline link with a leading → arrow that nudges 2px',
      radius: '2px controls, 0px cards — pure slab geometry',
      hover: 'Color-only changes, 120ms ease; nothing moves, nothing bounces',
      cards:
        'Flat #fbfaf9 panels with 1px #e0ddd8 rules and 24px padding; a 3px iris left edge marks the active card',
      forms: 'Hairline-bottom inputs on paper; focus paints the rule iris and shows a 2px caret bar',
      navigation: 'Left rail 220px with mono section labels; the active item carries the iris tick',
      modals: 'Paper sheet with 1px ink border and stone scrim rgba(28,25,23,.4)',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 32 / 56 / 96 / 144',
      paddingScale: '16 / 24 / 40',
      grid: '12-col 1120px; reading column 640px; asymmetric 5:7 splits',
    },
    motion: {
      pageLoad: 'Content fades up 8px, 240ms, staggered 40ms',
      hoverStates: 'Color shifts only — 120ms ease, zero transform',
      transitions: 'ease-out; reduced-motion collapses all to opacity',
      scroll: 'Sections earn a 1px top rule as they enter',
    },
    accessibility:
      'Ink on paper 15.8:1; iris on paper 6.1:1 at UI weights. Focus is a 2px iris outline offset 2px. Mono labels are decorative duplicates of real headings. All motion collapses under prefers-reduced-motion.',
    responsive:
      'Rail collapses to a top bar under 900px; the 5:7 split stacks with the text column first. Display clamps 2rem→3.5rem.',
    codeExample:
      '<section class="focus">\n  <p class="kicker">01 / FOCUS MODE</p>\n  <h1>Deep work, shallow chrome.</h1>\n  <button class="btn-iris">Start a session</button>\n</section>',
    accent: '#4f46e5',
    motif: 'mono-labels',
    layout: 'asymmetric',
    useCases: ['Productivity', 'SaaS', 'AI/ML'],
    signatureCss: `
.dv-btn { border-radius: 2px; transition: background .12s ease; }
.dv-card { border-left: 3px solid transparent; transition: border-color .12s ease; }
.dv-card:hover { border-left-color: #4f46e5; }
.dv-kicker { font-family: "IBM Plex Mono", monospace; letter-spacing: .08em; text-transform: uppercase; font-size: 11px; }`,
    author: 'Ines Kolar',
    createdAt: '2026-08-14',
    popularity: 81,
  },
  {
    id: 'linen-quiet',
    name: 'Linen Quiet',
    category: 'Minimalism',
    tags: ['linen', 'warm', 'editorial', 'calm'],
    description: 'Undyed-linen calm for words that prefer to whisper.',
    designPhilosophy:
      'Quiet as a material, not a mood. Ecru linen fields, espresso ink, and a single sage thread — the palette of an unbleached bookmark. Type sets the pace: a roman display, generous measure, and margins that refuse to hurry.',
    designDetails:
      'Ecru #f2ede4 ground with espresso #3c342b text, muted clay #b08968 accents, and a sage thread #6f7d6a. Marcellus small caps open each page like a bookplate; Karla keeps body text even and unhurried. Rules are 1px flax; buttons are 2px-radius with clay thread borders. Depth comes from paper-tone steps — shadows never appear.',
    colors: {
      primary: '#b08968',
      secondary: '#4a3f35',
      accent: '#6f7d6a',
      neutral: '#e4dccb',
      background: '#f2ede4',
      text: '#3c342b',
    },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 54',
      lineHeights: 'Display 1.2, body 1.7',
      letterSpacing: 'Display 0.01em, small caps 0.14em',
    },
    components: {
      primary:
        'Clay #b08968 fill, 2px radius, cream text, weight 600, letterspaced 0.04em; hover darkens to #9a7454',
      secondary: 'Linen button with 1px flax border and espresso text; hover fills cream',
      tertiary: 'Espresso small-caps link with clay thread underline',
      radius: '2px buttons, 3px cards — pressed-paper edges',
      hover: 'Tone steps only, 160ms ease; the page never jumps',
      cards: 'Cream #faf6ec panels with 1px #e0d8c4 rules, 3px radius, 28px padding; corner thread-stitch dots at 4px',
      forms: 'Bottom-rule inputs in flax; focus re-inks the rule espresso and floats a small-caps label',
      navigation: 'Centered masthead with small-caps links; the active link carries a clay thread underline',
      modals: 'Cream sheet with double 1px flax frame, 6px inset, espresso scrim rgba(60,52,43,.35)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 64 / 104 / 160',
      paddingScale: '20 / 32 / 48',
      grid: 'Centered 900px measure; 12-col only for galleries',
    },
    motion: {
      pageLoad: 'Sections fade up 6px over 320ms; masthead first',
      hoverStates: 'Color-only, 160ms; links re-thread their underline',
      transitions: 'ease-in-out; nothing overshoots, ever',
      scroll: 'Chapter rules fade in at section tops',
    },
    accessibility:
      'Espresso on ecru 9.9:1; clay buttons carry cream text at 4.9:1. Focus rings are 2px espresso outlines with 2px offset. Small-caps labels keep real sentence-case text underneath for screen readers.',
    responsive:
      'Measure holds 640–900px; masthead links collapse under a linen menu rule below 760px. Display clamps 1.9rem→3.2rem.',
    codeExample:
      '<header class="linen">\n  <h1>Set in quiet, read in comfort.</h1>\n  <a class="thread" href="#">Begin the first chapter</a>\n</header>',
    accent: '#b08968',
    motif: 'underline-accent',
    layout: 'centered',
    useCases: ['Travel', 'Photography', 'Nonprofit'],
    signatureCss: `
.dv-btn { border-radius: 2px; letter-spacing: .04em; }
.dv-card { border-radius: 3px; border: 1px solid #e0d8c4; background: #faf6ec; }
.dv-hero h1 { font-variant: small-caps; letter-spacing: .02em; }`,
    author: 'Marguerite Oyelaran',
    createdAt: '2026-08-02',
    popularity: 76,
  },
  {
    id: 'system-cool',
    name: 'System Cool',
    category: 'Minimalism',
    tags: ['os', 'workspace', 'cobalt', 'chrome'],
    description: 'The quiet OS chrome your apps always wished they had.',
    designPhilosophy:
      'An operating system for the browser tab. Every component borrows desktop OS grammar — window dots, menu bars, tool palettes — then calms it down with ice-blue surfaces and one cobalt action color. Familiar structure, zero grit.',
    designDetails:
      'Ice #f1f5f9 desktop with white window panels, slate #0f172a ink, cobalt #3b82f6 actions, and steel #94a3b8 supports. Outfit display stays geometric and quiet; IBM Plex Sans handles UI copy. Cards are windows: 8px radius, 1px #dbe4ec frame, 24px title bar with three 8px dots. Buttons are 6px pills with pressed insets.',
    colors: {
      primary: '#3b82f6',
      secondary: '#132437',
      accent: '#94a3b8',
      neutral: '#dbe4ec',
      background: '#f1f5f9',
      text: '#0f172a',
    },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 18 / 22 / 30 / 48',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Display 0, UI labels 0.02em',
    },
    components: {
      primary:
        'Cobalt #3b82f6 6px-radius button, white text, weight 600; active presses to inset shadow rgba(15,23,42,.18)',
      secondary: 'White window button with 1px #cbd5e1 border; hover tints cobalt 6%',
      tertiary: 'Slate text link with dotted underline that solidifies on hover',
      radius: '6px controls, 8px windows, 999px status dots',
      hover: 'Window buttons tint 120ms; menus open 160ms with a 4px drop',
      cards: 'Window panels: white, 8px radius, 1px #dbe4ec frame, 24px title bar with traffic dots and a mono filename',
      forms: 'Inset inputs: white on #eef3f7 field, 1px #cbd5e1, focus ring 2px cobalt at 25%',
      navigation: 'Top menu bar 40px with a mono app name, centered tabs, and a right clock chip',
      modals: 'Centered window with 1px frame, 12px header bar, steel scrim rgba(15,23,42,.45)',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 28 / 48 / 80 / 128',
      paddingScale: '12 / 20 / 32',
      grid: 'Dashboard: 220px sidebar + fluid main on 1160px; panels snap to 8px',
    },
    motion: {
      pageLoad: 'Windows cascade in 20px steps, 140ms apart, like opening a workspace',
      hoverStates: 'Tints and insets at 120ms; menus drop 160ms ease-out',
      transitions: 'cubic-bezier(.2,.7,.3,1); window focus snaps, never floats',
      scroll: 'Sidebar shrinks labels to icons after 40px',
    },
    accessibility:
      'Slate on ice 13.6:1; cobalt on white 4.6:1 at 600 weight. Focus is a 2px cobalt ring with 2px offset. All traffic dots are aria-hidden; window titles are real headings. Reduced-motion opens windows without the cascade.',
    responsive:
      'Sidebar becomes a bottom sheet under 860px; window title bars keep 20px minimums for touch. Display clamps 1.8rem→3rem.',
    codeExample:
      '<div class="win">\n  <div class="win-bar"><span class="dots"></span><span>workspace.mesh</span></div>\n  <button class="btn-cobalt">New sheet</button>\n</div>',
    accent: '#3b82f6',
    motif: 'pill-nav',
    layout: 'dashboard',
    useCases: ['Productivity', 'SaaS', 'Fintech'],
    signatureCss: `
.dv-card { border-radius: 8px; border: 1px solid #dbe4ec; }
.dv-card::before { content: ""; display: block; height: 22px; margin: -1px -1px 12px; border-radius: 8px 8px 0 0; background: linear-gradient(#f8fafc,#eef2f6); border-bottom: 1px solid #e2e8f0; }
.dv-btn { border-radius: 6px; }`,
    author: 'Danil Vetrov',
    createdAt: '2026-08-21',
    popularity: 83,
    trending: true,
  },
  {
    id: 'ivory-gallery',
    name: 'Ivory Gallery',
    category: 'Minimalism',
    tags: ['gallery', 'white-cube', 'art', 'brass'],
    description: 'A white cube for work that deserves wall labels.',
    designPhilosophy:
      'The portfolio as gallery hang. Ivory walls, generous void, brass label plates, and nothing between the viewer and the work. Every section behaves like a room: one piece, one wall label, one considered walk.',
    designDetails:
      'Warm-white #fdfcf9 walls with ink #1b1a17 text and a single brass #b0895a plate accent. Cormorant Garamond italic writes the wall labels; Karla sets captions. Frames are 1px ink rectangles with 16px matting; hover lights the plate. Scale is museum-slow: huge voids, small type.',
    colors: {
      primary: '#b0895a',
      secondary: '#1b1a17',
      accent: '#7d786c',
      neutral: '#ece9e0',
      background: '#fdfcf9',
      text: '#1b1a17',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Karla',
      scale: '12 / 14 / 17 / 21 / 28 / 40 / 72',
      lineHeights: 'Display 1.15, body 1.65',
      letterSpacing: 'Display 0, labels 0.16em uppercase',
    },
    components: {
      primary:
        'Brass #b0895a plate button, ink text, 0px radius, weight 600, letterspaced 0.12em uppercase; hover warms to #c49b6c',
      secondary: 'Ivory button with 1px ink border; hover inverts to ink with ivory text',
      tertiary: 'Wall-label link: small-caps caption with a brass underline that brightens',
      radius: '0px everywhere — the cube has no corners to soften',
      hover: 'Plate warms 200ms; frames gain a 1px brass mat on hover',
      cards: 'Framed works: 1px ink frame, 16px ivory mat, wall label beneath in italic serif',
      forms: 'Bottom-ruled ivory fields with a brass focus plate; labels sit outside as small caps',
      navigation: 'Thin top rule with small-caps room names; the current room is brass',
      modals: 'Full-wall overlay in ivory with a single centered frame and ink scrim rgba(27,26,23,.5)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 48 / 88 / 144 / 224',
      paddingScale: '16 / 32 / 56',
      grid: 'Single 720px gallery axis; folios break to 12-col 1200px',
    },
    motion: {
      pageLoad: 'Works fade like lights coming up, 400ms, staggered 60ms',
      hoverStates: 'Brass warms, mats appear — 200ms ease, no lift',
      transitions: 'ease-in-out; gallery pacing: slow in, slow out',
      scroll: 'Each room pins briefly as the next wall slides over',
    },
    accessibility:
      'Ink on ivory 16.2:1; brass plate with ink text 5.2:1. Focus is a 2px brass outline. Wall labels are real headings; decorative mats are aria-hidden. Scroll pinning disables under reduced-motion.',
    responsive:
      'Gallery axis narrows to 88vw under 900px; room nav becomes a brass dot strip. Display clamps 2.4rem→4.5rem.',
    codeExample:
      '<figure class="room">\n  <div class="frame"><img src="work.jpg" alt=""/></div>\n  <figcaption class="label">Untitled (Quiet), 2026</figcaption>\n</figure>',
    accent: '#b0895a',
    motif: 'soft-shadows',
    layout: 'editorial',
    useCases: ['Photography', 'Portfolio', 'Fashion'],
    signatureCss: `
.dv-card { border: 1px solid #1b1a17; padding: 16px; background: #fffefb; }
.dv-card:hover { outline: 1px solid #b0895a; outline-offset: 4px; }
.dv-btn { border-radius: 0; text-transform: uppercase; letter-spacing: .12em; font-size: 12px; }`,
    author: 'Vera Lindqvist',
    createdAt: '2026-07-19',
    popularity: 79,
  },
]