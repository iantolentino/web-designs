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
