  {
    id: 'ledger-fintech',
    name: 'Ledger Fintech',
    category: 'Professional',
    tags: ['fintech', 'ledger', 'numbers', 'green'],
    description: 'Money software that shows its work — double-entry calm.',
    designPhilosophy:
      'Finance UI earns trust by exposing the math. Every figure is typographically exact, every action leaves a trail, and the ledger green reassures without decorating. The dashboard is a balance sheet that happens to be beautiful.',
    designDetails:
      'Mint-paper #f4f6f5 with deep green-ink #10201b, ledger emerald #0d7a5f, and amber #d97706 flags. IBM Plex Sans carries UI copy; IBM Plex Mono sets every number in fixed-width columns so decimals align. Cards are statement panels with 1px #dbe4e0 rules and mono running totals. Amber marks only exceptions and pending states.',
    colors: {
      primary: '#0d7a5f',
      secondary: '#10201b',
      accent: '#d97706',
      neutral: '#dbe4e0',
      background: '#f4f6f5',
      text: '#12261f',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 52',
      lineHeights: 'Display 1.2, body 1.6',
      letterSpacing: 'Display -0.01em, figures 0.02em',
    },
    components: {
      primary:
        'Ledger-emerald #0d7a5f button, 6px radius, mint text, weight 600; hover deepens to #0a5f4a with a mono “✓ posting” microcopy swap',
      secondary: 'Statement button with 1px #c9d6d1 border and ink text; hover tints mint 6%',
      tertiary: 'Mono footnote link with a running-total index that underlines in emerald',
      radius: '6px controls, 10px statements — banker’s millwork',
      hover: 'Color and microcopy only, 140ms; numbers never move',
      cards: 'Statement panels: white, 10px radius, 1px #dbe4e0 rule, 24px padding, mono header row with a stamped date',
      forms: 'Amount fields: mono input right-aligned, 1px rule bottom, emerald focus; currency chip left-anchored',
      navigation: 'Left 230px statement rail: accounts grouped with mono balances; the active account carries an emerald margin bar',
      modals: 'Entry sheet: white panel with a double-rule top and mint scrim rgba(16,32,27,.45)',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 32 / 56 / 96 / 152',
      paddingScale: '16 / 24 / 40',
      grid: 'Dashboard: 230px rail + fluid ledgers on 1240px; numeric columns snap to 8px',
    },
    motion: {
      pageLoad: 'Statements file in top-down, 50ms per row, like pages landing',
      hoverStates: 'Tints and microcopy swaps, 140ms — nothing bounces in a bank',
      transitions: 'ease-out, short; confirmations are instant',
      scroll: 'A running balance bar sticks to the top and updates per section',
    },
    accessibility:
      'Ink on mint 12.7:1; emerald 5.9:1 at UI sizes; amber only with ink text 4.9:1. Numeric tables use real table semantics with tabular figures. Focus is a 2px emerald ring. Balance changes are announced via aria-live polite.',
    responsive:
      'Ledger tables become stacked entry cards under 760px; the rail folds to an account switcher. Mono figures scale with clamp() and never truncate.',
    codeExample:
      '<section class="statement">\n  <h1>Every cent,<br/><em>accounted.</em></h1>\n  <table class="figures"><tr><td>4,281.00</td><td class="ok">cleared</td></tr></table>\n</section>',
    accent: '#0d7a5f',
    motif: 'big-stat-row',
    layout: 'dashboard',
    useCases: ['Fintech', 'SaaS', 'Productivity'],
    signatureCss: `
.dv-card { border-radius: 10px; border: 1px solid #dbe4e0; background: #fff; }
.dv-btn { border-radius: 6px; font-variant-numeric: tabular-nums; }
.dv-kicker { font-family: "IBM Plex Mono", monospace; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }`,
    author: 'Priya Anand',
    createdAt: '2026-08-25',
    popularity: 83,
    trending: true,
  },
  {
    id: 'briefcase-slate',
    name: 'Briefcase Slate',
    category: 'Professional',
    tags: ['consulting', 'slate', 'b2b', 'sober'],
    description: 'Consulting-grade B2B: slate suits, hairline grids, zero fluff.',
    designPhilosophy:
      'The deck your most skeptical client approves. Slate surfaces, a hairline grid you could rule with a straightedge, and copy that respects the reader’s time. Confidence comes from restraint: no gradients, no gimmicks, just structure.',
    designDetails:
      'Cool slate #f5f6f8 with charcoal-blue #1f2733 ink and suit-slate #33415c structure; a single #b45f18 briefcase-tan accent marks key actions. Source Sans 3 handles prose; IBM Plex Mono sets data. Cards are dossier pages with 1px #dfe3ea rules and tab labels. Everything left-aligned; the grid never breaks.',
    colors: {
      primary: '#33415c',
      secondary: '#1b2432',
      accent: '#b45f18',
      neutral: '#dfe3ea',
      background: '#f5f6f8',
      text: '#1f2733',
    },
    typography: {
      displayFont: 'Source Sans 3',
      bodyFont: 'Source Sans 3',
      scale: '12 / 14 / 16 / 19 / 24 / 32 / 54',
      lineHeights: 'Display 1.18, body 1.62',
      letterSpacing: 'Display -0.01em, labels 0.08em uppercase',
    },
    components: {
      primary:
        'Suit-slate #33415c button, 4px radius, paper text, weight 600; hover darkens one step with a 2px tan left edge',
      secondary: 'Dossier button with 1px #c7ced9 border; hover fills slate 6%',
      tertiary: 'Charcoal link with a tan dossier-tab underline on hover',
      radius: '4px controls, 6px dossiers — manila, not rounded',
      hover: 'One-step tone shifts and tab edges, 130ms',
      cards: 'Dossier pages: white with 1px #dfe3ea rule, 6px radius, a slate tab strip on top, 24px padding, mono exhibit numbers',
      forms: 'Filing fields: 1px bottom rules with mono input; focus re-inks the rule tan',
      navigation: 'Top agenda bar with numbered sections; the active item carries the tan tab',
      modals: 'Briefing sheet: white with a slate header band and slate scrim rgba(27,36,50,.5)',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '16 / 32 / 56 / 96 / 152',
      paddingScale: '16 / 28 / 44',
      grid: 'Strict 12-col 1200px, 24px gutter, hairline column rules at 6% opacity; 7:5 hero split',
    },
    motion: {
      pageLoad: 'Sections file in left-aligned, 8px slide, 200ms, staggered 50ms',
      hoverStates: 'Tone steps and tab edges, 130ms',
      transitions: 'ease-out; brisk, boardroom-ready',
      scroll: 'Agenda numbers pin until their section passes',
    },
    accessibility:
      'Charcoal on slate 13.2:1; tan accent 5.1:1 with ink text. Focus is a 2px tan outline. Left-alignment preserved at all breakpoints; no centered exceptions. Reduced-motion files content instantly.',
    responsive:
      'The 7:5 split stacks text-first under 860px; agenda folds to a numbered drawer. Display clamps 2rem→3.4rem.',
    codeExample:
      '<section class="briefing">\n  <p class="exhibit">EXHIBIT A</p>\n  <h1>Serious tools,<br/><em>sober shell.</em></h1>\n  <button class="suit">Review the findings</button>\n</section>',
    accent: '#33415c',
    motif: 'swiss-grid',
    layout: 'split-hero',
    useCases: ['SaaS', 'Education', 'Productivity'],
    signatureCss: `
.dv-card { border-radius: 6px; border: 1px solid #dfe3ea; background: #fff; }
.dv-btn { border-radius: 4px; }
.dv-kicker { letter-spacing: .08em; text-transform: uppercase; font-size: 11px; color: #b45f18; }`,
    author: 'Jonas Whitfield',
    createdAt: '2026-08-08',
    popularity: 77,
  },
  {
    id: 'campus-lms',
    name: 'Campus LMS',
    category: 'Professional',
    tags: ['education', 'campus', 'plum', 'courses'],
    description: 'A learning platform with collegiate warmth — plum, gold, and progress.',
    designPhilosophy:
      'School spirit, software-grade. Plum banners, old-gold honors cords, and progress you can feel: streaks, credits, and checkmarks that celebrate without infantilizing. The dashboard is a hallway of open doors.',
    designDetails:
      'Parchment #faf6ee with deep plum #7b2d5e, honor gold #d9a441, and ivy #4c6b52. Familjen Grotesk headlines the course doors; Karla carries the syllabus. Cards are course doors: parchment panels with plum lintels and a gold honor cord on completed courses. Progress is a real, labeled bar — never a vague glow.',
    colors: {
      primary: '#7b2d5e',
      secondary: '#2c2136',
      accent: '#d9a441',
      neutral: '#e8dfcf',
      background: '#faf6ee',
      text: '#241b2e',
    },
    typography: {
      displayFont: 'Familjen Grotesk',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 20 / 25 / 33 / 56',
      lineHeights: 'Display 1.16, body 1.6',
      letterSpacing: 'Display 0, labels 0.06em uppercase',
    },
    components: {
      primary:
        'Plum #7b2d5e button, 8px radius, parchment text, weight 600; hover honors it with a gold top cord',
      secondary: 'Parchment button with 1px plum border; hover fills plum 6%',
      tertiary: 'Ivy link with a gold honor tick before it',
      radius: '8px controls, 12px doors — campus arches',
      hover: 'Cords and tints, 180ms; celebratory but composed',
      cards: 'Course doors: #fffdf7 panels, 12px radius, 4px plum lintel, 24px padding, gold cord + “Completed” ribbon on done',
      forms: 'Enrollment fields: 1px plum rules with gold focus; due dates chip in ivy',
      navigation: 'Left 220px hallway rail: course list with progress bars; the active door stands open (plum fill)',
      modals: 'Registrar sheet: parchment panel with a plum seal header and plum scrim rgba(44,33,54,.5)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 36 / 64 / 104 / 160',
      paddingScale: '18 / 30 / 48',
      grid: 'Dashboard: 220px rail + fluid course grid on 1220px; doors in 3-col with 24px gaps',
    },
    motion: {
      pageLoad: 'Doors open one hall at a time, 70ms stagger; progress bars fill once',
      hoverStates: 'Cords drop and doors swell 1%, 180ms',
      transitions: 'ease-out; graduation pace — steady progress',
      scroll: 'Hall labels stick until their course group passes',
    },
    accessibility:
      'Ink on parchment 11.9:1; plum 8.2:1; gold used decoratively with text twins. Progress bars carry real values in text (“7 of 10 modules”). Focus is a 2px plum ring. Reduced-motion opens all doors at once.',
    responsive:
      'Doors stack under 780px; the hallway rail becomes a plum course drawer. Display clamps 2rem→3.5rem.',
    codeExample:
      '<section class="hall">\n  <p class="term">FALL TERM · WEEK 6</p>\n  <h1>Learn, then<br/><em>learn again.</em></h1>\n  <button class="enroll">Continue course</button>\n</section>',
    accent: '#7b2d5e',
    motif: 'numbered-steps',
    layout: 'dashboard',
    useCases: ['Education', 'SaaS', 'Nonprofit'],
    signatureCss: `
.dv-card { border-radius: 12px; background: #fffdf7; border-top: 4px solid #7b2d5e; }
.dv-btn { border-radius: 8px; }
.dv-card.done { border-top-color: #d9a441; }`,
    author: 'Thea Okonkwo',
    createdAt: '2026-08-01',
    popularity: 79,
  },
  {
    id: 'clinic-warm',
    name: 'Clinic Warm',
    category: 'Professional',
    tags: ['healthcare', 'bedside', 'rose', 'calm'],
    description: 'Healthcare with bedside manner — rose warmth, sage calm.',
    designPhilosophy:
      'Medicine is human. Rose warmth replaces clinical blue; sage green keeps vitals honest; every screen explains itself in plain language before asking anything. Consent and clarity are the design system.',
    designDetails:
      'Warm paper #fdf8f5 with dusty rose #c65f72, deep umber #4a3b3f, and sage #7fa88b. Fraunces speaks gently in headlines; Source Sans 3 keeps care copy plain and legible at arm’s length. Cards are referral sheets with 1px rose rules and 14px soft corners. Icons are line-drawn, never filled — anatomy-chart honesty.',
    colors: {
      primary: '#c65f72',
      secondary: '#4a3b3f',
      accent: '#7fa88b',
      neutral: '#f0e2dc',
      background: '#fdf8f5',
      text: '#38302e',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 26 / 34 / 56',
      lineHeights: 'Display 1.18, body 1.64',
      letterSpacing: 'Display 0, labels 0.05em',
    },
    components: {
      primary:
        'Rose #c65f72 button, 999px pill, warm text, weight 600; hover deepens to #b04d60 and holds a 4px sage halo',
      secondary: 'Paper pill with 1px rose border and umber text; hover tints rose 5%',
      tertiary: 'Sage plain-language link with a small “what this does” tooltip affordance',
      radius: '999px buttons, 14px sheets — soft as a waiting-room chair',
      hover: 'Warm halos and tint fills, 220ms ease-out',
      cards: 'Referral sheets: #fffdfc, 14px radius, 1px rgba(198,95,114,.35) rule, 26px padding, sage vitals chip row',
      forms: 'Intake fields: 1px rose rules with plain-language helper text beneath; focus rings sage',
      navigation: 'Top reception bar with pill links; the active desk carries a rose dot and label',
      modals: 'Consultation card: paper sheet with a rose header rule and umber scrim rgba(74,59,63,.45)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 36 / 64 / 108 / 168',
      paddingScale: '18 / 30 / 48',
      grid: '12-col 1180px; intake forms stay single-column, 620px measure',
    },
    motion: {
      pageLoad: 'Content fades like a calm breath, 300ms, no staggering urgency',
      hoverStates: 'Halos bloom and tints fill, 220ms',
      transitions: 'ease-in-out; reassurance pacing',
      scroll: 'Section headers arrive with a soft sage underline draw',
    },
    accessibility:
      'Umber on paper 10.8:1; rose 4.7:1 at button weights; sage chips carry ink text 5.6:1. Plain-language summaries precede every form. Focus is a 2px sage ring. Font sizes never below 15px for care copy.',
    responsive:
      'Intake stays single-column at all sizes; the reception bar folds into a rose menu with labels, icons never alone. Display clamps 2rem→3.5rem.',
    codeExample:
      '<section class="reception">\n  <h1>Medicine with<br/><em>bedside manner.</em></h1>\n  <p>Here’s what happens next, in plain words.</p>\n  <button class="pill-rose">Book a visit</button>\n</section>',
    accent: '#c65f72',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Health', 'Nonprofit', 'Education'],
    signatureCss: `
.dv-card { border-radius: 14px; background: #fffdfc; border: 1px solid rgba(198,95,114,.35); }
.dv-btn { border-radius: 999px; }
.dv-hero h1 { font-weight: 500; }`,
    author: 'Amara Osei',
    createdAt: '2026-07-27',
    popularity: 78,
  },
  {
    id: 'terminal-ops',
    name: 'Terminal Ops',
    category: 'Professional',
    tags: ['devops', 'terminal', 'mono', 'oncall'],
    description: 'An on-call console for people who live in terminals — green prompt, amber alerts.',
    designPhilosophy:
      'Built for 3 a.m. The whole design is a terminal that respects operators: monospace everything, green confirmation, amber warnings, red incidents, and keyboard-first everything. No dashboard theater — state, logs, and actions.',
    designDetails:
      'Console #0d1117 with panel #161b22, prompt green #3fb950, alert amber #ff9f43, and #e6edf3 text. Space Mono is the identity font; IBM Plex Sans appears only in prose descriptions. Panels are 1px #21262d windows with mono titles like `$ service: api`. Buttons look like shell commands with keyboard hints.',
    colors: {
      primary: '#3fb950',
      secondary: '#161b22',
      accent: '#ff9f43',
      neutral: '#21262d',
      background: '#0d1117',
      text: '#e6edf3',
    },
    typography: {
      displayFont: 'Space Mono',
      bodyFont: 'IBM Plex Sans',
      scale: '12 / 13 / 15 / 18 / 24 / 30 / 46',
      lineHeights: 'Display 1.25, body 1.6',
      letterSpacing: 'Display 0, code 0',
    },
    components: {
      primary:
        'Prompt-green command button: dark fill, green text + border, 4px radius, mono, with a ⏎ kbd hint; hover inverts to green fill with console text',
      secondary: 'Panel command with 1px #21262d border; hover brightens the border to #30363d',
      tertiary: 'Mono flag-style link [--flag] that greens on hover',
      radius: '4px consoles, 6px panels — soft terminal corners',
      hover: 'Cursor blink (1.1s steps) on focused panels; instant border brightens',
      cards: 'Console windows: #161b22, 1px #21262d, 6px radius, mono title bar with a green ● status and 20px padding',
      forms: 'Prompt inputs: “$ ” prefix, mono text, green caret, amber focus border on warnings',
      navigation: 'Left 210px service tree in mono; the active service carries a green ● and bold row',
      modals: 'Incident modal: panel with an amber header bar, mono timestamps, rgba(1,4,9,.8) scrim',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '12 / 24 / 40 / 72 / 120',
      paddingScale: '12 / 20 / 32',
      grid: 'Dashboard: 210px rail + fluid log streams on 1240px; rows 32px fixed',
    },
    motion: {
      pageLoad: 'Panels boot top-down like service startup logs, 40ms per line',
      hoverStates: 'Border brightens and cursors blink; nothing eases past 120ms',
      transitions: 'steps for cursors, 100ms ease for borders',
      scroll: 'Log streams autoscroll only when already pinned to bottom (operator rule)',
    },
    accessibility:
      'Text on console 13.4:1; green 8.9:1; amber 9.6:1. Status is never color-only — every ● pairs with mono text (ok/warn/crit). Focus is a 2px green ring. All actions reachable by keyboard with visible kbd hints; reduced-motion disables autoscroll and cursor blinks.',
    responsive:
      'The service tree becomes a command palette under 900px; log rows wrap mono at 44ch. Display clamps 1.8rem→2.9rem.',
    codeExample:
      '<div class="console">\n  <p class="cmd">$ deploy api --env=prod</p>\n  <p class="ok">✓ 12 services green · 0 incidents</p>\n  <button class="cmd-btn">rollback <kbd>⌘Z</kbd></button>\n</div>',
    accent: '#3fb950',
    motif: 'mono-labels',
    layout: 'dashboard',
    useCases: ['SaaS', 'Productivity', 'AI/ML'],
    signatureCss: `
.dv-card { background: #161b22; border: 1px solid #21262d; border-radius: 6px; }
.dv-btn { border-radius: 4px; font-family: "Space Mono", monospace; }
.dv-hero h1 { font-family: "Space Mono", monospace; }`,
    author: 'Viktor Lindgren',
    createdAt: '2026-08-18',
    popularity: 82,
  },
  {
    id: 'civic-trust',
    name: 'Civic Trust',
    category: 'Professional',
    tags: ['civic', 'government', 'limestone', 'olive'],
    description: 'Public-sector clarity: limestone, olive-bronze, and plain-language promise.',
    designPhilosophy:
      'A civic building, digitized: limestone permanence, bronze plaque accents, and signage written in plain language. The design promises accountability — every service shows its steps, its fees, and its office hours. Trust through legibility.',
    designDetails:
      'Limestone #f6f4ec with civic olive #556b2f, bronze #8a6d3b plaques, and #2b2a24 ink. Archivo caps carry department signage; Source Sans 3 writes the plain-language copy. Cards are service counters with 2px olive lintels and step numbers. Dividers are 1px stone rules; seals are bronze outline circles.',
    colors: {
      primary: '#556b2f',
      secondary: '#3c4429',
      accent: '#8a6d3b',
      neutral: '#e3e0d2',
      background: '#f6f4ec',
      text: '#2b2a24',
    },
    typography: {
      displayFont: 'Archivo',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 20 / 25 / 33 / 56',
      lineHeights: 'Display 1.16, body 1.62',
      letterSpacing: 'Display 0.02em, signage 0.1em uppercase',
    },
    components: {
      primary:
        'Civic-olive #556b2f counter button, 2px radius, limestone text, weight 700; hover raises a bronze plaque underline',
      secondary: 'Limestone button with 1px olive border; hover fills olive 8%',
      tertiary: 'Bronze plaque link — small-caps with a dotted rule beneath',
      radius: '2px controls, 4px counters — stonemason tolerances',
      hover: 'Plaques raise and tints fill, 160ms; government steady',
      cards: 'Service counters: #fbfaf3, 4px radius, 2px olive lintel, 26px padding, bronze step numbers in outline circles',
      forms: 'Application fields: 1px olive rules with plain-language help text; focus inks the rule bronze',
      navigation: 'Department bar: limestone with uppercase signage links; the active department carries the bronze plaque dot',
      modals: 'Public notice sheet: limestone with a double olive rule header and ink scrim rgba(43,42,36,.5)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 40 / 68 / 112 / 176',
      paddingScale: '18 / 32 / 52',
      grid: '12-col 1200px; service steps in numbered 3-col; measure 660px',
    },
    motion: {
      pageLoad: 'Counters open per department, 60ms stagger; step numbers stamp in',
      hoverStates: 'Plaques and tints, 160ms',
      transitions: 'ease-out; dependable, unhurried',
      scroll: 'Step numbers pin until the service completes',
    },
    accessibility:
      'Ink on limestone 12.4:1; olive 6.1:1; bronze plaques 4.8:1 with small caps ≥14px. Every service lists steps as a real ordered list. Focus is a 2px olive ring. Plain-language summaries at 9th-grade reading level for all actions.',
    responsive:
      'Counters stack under 800px; the department bar becomes an olive accordion. Display clamps 2rem→3.5rem.',
    codeExample:
      '<section class="hall">\n  <p class="dept">DEPT. OF RECORDS — WINDOW 3</p>\n  <h1>Public services,<br/><em>public trust.</em></h1>\n  <button class="counter">Start application</button>\n</section>',
    accent: '#556b2f',
    motif: 'editorial-columns',
    layout: 'dashboard',
    useCases: ['Nonprofit', 'Education', 'SaaS'],
    signatureCss: `
.dv-card { border-radius: 4px; background: #fbfaf3; border-top: 2px solid #556b2f; }
.dv-btn { border-radius: 2px; }
.dv-kicker { letter-spacing: .1em; text-transform: uppercase; color: #8a6d3b; font-size: 11px; }`,
    author: 'Miriam Adler',
    createdAt: '2026-07-23',
    popularity: 74,
  },
