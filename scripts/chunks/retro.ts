  {
    id: 'cassette-deck',
    name: 'Cassette Deck',
    category: 'Retro',
    tags: ['hifi', 'tape', 'analog', '80s'],
    description: 'Front-panel hi-fi: VU meters, chrome buttons, amber needle glow.',
    designPhilosophy:
      'The interface is a tape deck faceplate. Brushed charcoal, chrome transport buttons, amber VU needles that dance when you hover. Analog honesty: visible mechanics, labeled everything, and a REC light you learn to respect.',
    designDetails:
      'Brushed charcoal #1d1f22 with panel #2a2d31, chrome #c8ccd2, amber #ffb347 glow, and cream #efe9dc labels. Righteous caps the transport labels; Space Mono renders track data. VU meters are CSS needle gauges that ease on hover; buttons are chrome rectangles with 2px bevel shadows. Everything sits on a fine horizontal brush texture.',
    colors: {
      primary: '#ffb347',
      secondary: '#2a2d31',
      accent: '#c8ccd2',
      neutral: '#3a3e44',
      background: '#1d1f22',
      text: '#efe9dc',
    },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Space Mono',
      scale: '12 / 14 / 16 / 18 / 23 / 31 / 50',
      lineHeights: 'Display 1.1, body 1.5',
      letterSpacing: 'Display 0.04em, track data 0.02em',
    },
    components: {
      primary:
        'REC-red→amber chrome button: 4px radius, 2px bevel (light top, dark bottom), charcoal text, weight 700; press depresses the bevel 2px',
      secondary: 'Chrome transport button (#c8ccd2) with charcoal glyph; hover glows amber underneath',
      tertiary: 'Cream mono link with a blinking amber cursor on hover (1s steps)',
      radius: '4px buttons, 6px panels — faceplate machining',
      hover: 'VU needles swing 20°, LEDs warm up, 180ms ease-out',
      cards: 'Faceplate modules: #2a2d31 with 1px #3a3e44 seam and brushed-top highlight; module labels engraved cream',
      forms: 'Deck fields: inset #16181a with mono input and amber focus glow',
      navigation: 'Transport bar: chrome buttons with charcoal glyphs and an LED strip showing the current section',
      modals: 'Faceplate overlay with a VU meter header and rgba(13,14,16,.75) scrim',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 32 / 56 / 88 / 136',
      paddingScale: '14 / 24 / 40',
      grid: 'Split hero 5:7; modules rack in 2-col with 20px gaps, 1140px max',
    },
    motion: {
      pageLoad: 'Deck powers on: LEDs chase left→right, then modules fade in, 300ms',
      hoverStates: 'Needle swings and LED glows, 180ms; bevels press instantly',
      transitions: 'ease-out for needles, steps for LEDs',
      scroll: 'A thin tape-position bar fills as you scroll, like a counter',
    },
    accessibility:
      'Cream on charcoal 12.6:1; amber on charcoal 8.1:1. Focus is a 2px amber ring. VU needles are decorative; values have text equivalents. The LED chase disables under reduced-motion.',
    responsive:
      'Modules rack single-column under 760px; the transport bar keeps 44px touch targets. Display clamps 1.9rem→3.1rem.',
    codeExample:
      '<section class="deck">\n  <p class="track">TRACK 04 — SIDE A</p>\n  <h1>Recorded live.<br/><em>Pressed forever.</em></h1>\n  <button class="chrome">▶ PLAY</button>\n</section>',
    accent: '#ffb347',
    motif: 'glow-pulse',
    layout: 'split-hero',
    useCases: ['Music', 'Events', 'Gaming'],
    signatureCss: `
.dv-card { background: #2a2d31; border: 1px solid #3a3e44; border-top: 1px solid #454a51; }
.dv-btn { border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255,255,255,.35), inset 0 -2px 0 rgba(0,0,0,.4); }
.dv-btn:hover { box-shadow: inset 0 1px 0 rgba(255,255,255,.35), 0 0 12px rgba(255,179,71,.35); }`,
    author: 'Dex Okafor',
    createdAt: '2026-08-13',
    popularity: 81,
    trending: true,
  },
  {
    id: 'seventies-sunburst',
    name: 'Seventies Sunburst',
    category: 'Retro',
    tags: ['70s', 'sunburst', 'shag', 'avocado'],
    description: 'Wood-paneled sunshine: avocado, harvest gold, and thick round strokes.',
    designPhilosophy:
      'The rec room at golden hour. Wood-panel warmth, avocado and harvest-gold sunshine rounds, and typography with groovy weight. Everything is friendly, round-cornered, and slightly too confident — in the best way.',
    designDetails:
      'Cream #f6ecd9 with avocado #7a8b3f, harvest gold #dfa32e, burnt orange #c05a2e, and walnut #4a3524. Bricolage Grotesque 800 carries the grooves; Bitter sets the liner notes. Sunburst rays (conic gradients) back heroes; cards are rounded 20px with 3px walnut outlines. Thick 2px strokes and pill shapes repeat everywhere.',
    colors: {
      primary: '#c05a2e',
      secondary: '#7a8b3f',
      accent: '#dfa32e',
      neutral: '#e4d5b8',
      background: '#f6ecd9',
      text: '#4a3524',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 64',
      lineHeights: 'Display 1.05, body 1.58',
      letterSpacing: 'Display 0, labels 0.06em uppercase',
    },
    components: {
      primary:
        'Burnt-orange #c05a2e pill, 999px radius, cream text, weight 800, 3px walnut outline; hover spins a sun-ray ring 8°',
      secondary: 'Avocado pill with cream text; hover fills harvest gold',
      tertiary: 'Walnut underlined link with a gold ray tick before it',
      radius: '999px buttons, 20px cards — everything groovy is round',
      hover: 'Ray rings rotate and pills swell 4%, 200ms ease-out',
      cards: 'Liner-note cards: cream with 3px walnut outline, 20px radius, harvest-gold corner ray, 26px padding',
      forms: 'Pill inputs with 2px walnut borders and gold focus rings; labels sit in groovy chips',
      navigation: 'Wood-grain bar with pill links; the active link gets a sunburst badge',
      modals: 'Cream card with a conic sunburst header band and walnut scrim rgba(74,53,36,.5)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 72 / 120 / 184',
      paddingScale: '18 / 32 / 52',
      grid: '2-col sunshine rhythm, 1160px max, 26px gaps; heroes get full-bleed rays',
    },
    motion: {
      pageLoad: 'Rays fan out from the hero center, cards slide up like LPs from a sleeve, 320ms',
      hoverStates: 'Swells, spins, and ray ticks, 200ms — warm and unhurried',
      transitions: 'ease-out with a soft landing, cubic-bezier(.3,1.2,.5,1)',
      scroll: 'Sunburst backgrounds rotate 4° per section for variation',
    },
    accessibility:
      'Walnut on cream 9.2:1; cream on burnt orange 4.7:1 at 800 weight. Focus is a 3px harvest-gold ring. Sun-ray decorations are aria-hidden. The ray spin pauses under reduced-motion.',
    responsive:
      'Sunshine rhythm stacks under 720px; the wood bar folds into a gold pill menu. Display clamps 2.2rem→4rem.',
    codeExample:
      '<section class="sunburst">\n  <h1>Good wood,<br/><em>good vibes.</em></h1>\n  <button class="groove-pill">Drop the needle</button>\n</section>',
    accent: '#c05a2e',
    motif: 'wave-section',
    layout: 'hero-cards',
    useCases: ['Restaurant', 'Travel', 'Events'],
    signatureCss: `
.dv-btn { border-radius: 999px; border: 3px solid #4a3524; }
.dv-card { border-radius: 20px; border: 3px solid #4a3524; }
.dv-hero h1 { font-weight: 800; }`,
    author: 'Marisol Vega',
    createdAt: '2026-08-06',
    popularity: 79,
  },
  {
    id: 'dial-up',
    name: 'Dial-Up',
    category: 'Retro',
    tags: ['90s-web', 'geocities', 'webring', 'nostalgia'],
    description: 'The 90s personal web, rebuilt with love — guestbooks and all.',
    designPhilosophy:
      'The hand-made web before templates: visitor counters, webrings, guestbooks, and under-construction GIFs — rebuilt with modern semantics and accessibility. Nostalgia that respects what the early web got right: personality, links you could trust, and pages that said hello.',
    designDetails:
      'Classic #f2efe9 page with link-blue #2320e0, visited-purple #7b1fa2, and table-gray #c0c0c0 chrome. Times New Roman serif body (period-correct), Courier Prime for code and counters. Borders are outset/inset 2px bevels; hit counters render in LCD style; marquee is a paused, accessible ticker.',
    colors: {
      primary: '#2320e0',
      secondary: '#5a5d63',
      accent: '#7b1fa2',
      neutral: '#c0c0c0',
      background: '#f2efe9',
      text: '#1a1a1a',
    },
    typography: {
      displayFont: 'Courier Prime',
      bodyFont: 'Times New Roman',
      scale: '14 / 16 / 18 / 21 / 26 / 32 / 44',
      lineHeights: 'Display 1.2, body 1.5',
      letterSpacing: 'Display 0, body 0',
    },
    components: {
      primary:
        'Outset bevel button (#c0c0c0 chrome, ink text, 0px radius); active flips to inset — the original button press',
      secondary: 'Link-blue underlined classic anchor; visited state honestly purple',
      tertiary: 'Courier [bracket] link in table-gray that blues on hover',
      radius: '0px everywhere; bevels are the rounding',
      hover: 'Bevels flip, links underline-squiggle, 80ms — instant like a local file',
      cards: 'Table panels: inset 2px bevels, #ffffff content, gray title bars with pixel-serif headers',
      forms: 'Inset bevel fields with Courier input; focus paints a classic 1px dotted outline',
      navigation: 'Webring bar: centered links with ◄ previous | next ► and a hit counter chip',
      modals: 'Popup window with outset title bar and minimize dots, rgba(0,0,0,.45) scrim',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '12 / 24 / 40 / 64 / 104',
      paddingScale: '10 / 18 / 28',
      grid: 'Table-style 25/50/25 panels, 980px max, centered like a GeoCities front page',
    },
    motion: {
      pageLoad: 'Page appears instantly (period-correct), counters count up, ticker unpauses once',
      hoverStates: 'Bevel flips and link squiggles, 80ms linear',
      transitions: 'steps(1) — the web before easing curves',
      scroll: 'A "BACK TO TOP ▲" chip docks bottom-right after 400px',
    },
    accessibility:
      'Ink on page 15.9:1; link blue 7.9:1. The marquee is a paused, duplicated ticker announced once. Bevel states also change text weight so state is not color-only. Focus keeps the classic dotted outline at 2px for visibility.',
    responsive:
      'Table panels stack full-width under 720px; the webring wraps but keeps ◄ ► as real buttons. Display clamps 1.6rem→2.75rem.',
    codeExample:
      '<div class="homepage">\n  <p class="counter">You are visitor No. <strong>0008421</strong></p>\n  <h1>Welcome to my <em>corner</em> of the web!</h1>\n  <a class="classic" href="/guestbook">Sign the guestbook</a>\n</div>',
    accent: '#2320e0',
    motif: 'dashed-borders',
    layout: 'editorial',
    useCases: ['News', 'Nonprofit', 'Education'],
    signatureCss: `
.dv-card { border: 2px inset #c0c0c0; background: #fff; }
.dv-btn { border: 2px outset #c0c0c0; border-radius: 0; background: #c0c0c0; }
.dv-btn:active { border-style: inset; }
.dv-hero h1 { font-family: "Times New Roman", serif; }`,
    author: 'Wes Tanaka',
    createdAt: '2026-07-21',
    popularity: 73,
  },
