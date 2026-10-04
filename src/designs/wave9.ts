import type { DesignSystem } from '../types'

/**
 * Wave 9 — sixteen more systems built from aesthetics still missing from the
 * vault: constructivist print, pop-art halftone, Moroccan zellige, Venetian
 * glass, disco mirrorball, an FM dial, ukiyo-e woodblock, an apothecary
 * counter, beekeeping, a circus big top, an auction house, a flight deck,
 * a bioluminescent reef, a stamp album, woven tapestry, and art brut.
 *
 * Two new motifs ship with them: `diagonal-bars` (constructivist bands) and
 * `halftone-dots` (print-screen colour). Every design here uses a type pairing
 * that appears nowhere else in the catalog, so `audit-designs.cjs` reports no
 * identity overlaps against the existing 200.
 */

export const wave9Designs: DesignSystem[] = [
  {
    id: 'constructivist',
    name: 'Constructivist Press',
    category: 'Creative',
    tags: ['constructivist', 'propaganda', 'diagonal', 'print', 'revolution'],
    description: 'The diagonal is doing the arguing.',
    designPhilosophy:
      'Constructivism treated a poster as a machine: no ornament, one direction, maximum force. Constructivist Press keeps that discipline for the web — bands that run at an angle, type that is either enormous or tiny with nothing in between, and a red that appears because it is the point rather than because it is pretty. For campaigns, journals, and studios with something to say.',
    designDetails:
      'Oxblood #c62828, paper #f4efe4, and true black #111. Diagonal bands at 18° behind the hero, condensed uppercase headlines, and a single red circle per screen. Zero radius; shadows are replaced by solid offset plates.',
    colors: { primary: '#c62828', secondary: '#111111', accent: '#1b5e20', neutral: '#e7e0d2', background: '#f4efe4', text: '#14110e' },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Be Vietnam Pro',
      scale: '13 / 15 / 17 / 21 / 30 / 44 / 68',
      lineHeights: 'Display 0.96, body 1.62',
      letterSpacing: 'Display -0.03em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #c62828, paper text, 0 radius, uppercase, padding 14px 26px',
      secondary: 'Solid #111, paper text, 0 radius',
      tertiary: 'Black link with a 2px underline',
      radius: '0 everywhere — nothing is rounded',
      hover: 'Plate offsets 4px on a hard 90ms shift',
      cards: 'Paper plates, 0 radius, 2px #14110e border, 3px 3px 0 #14110e, 24px padding',
      forms: 'Boxed inputs, 2px black border, red focus fill',
      navigation: 'Heavy black bar with a red index mark',
      modals: 'Full plate with a red title strip',
    },
    spacing: { baseUnit: '4px', marginScale: '8 / 16 / 32 / 64 / 120', paddingScale: '12 / 24 / 44 / 72', grid: '12-column, 1240px max, 16px gutter' },
    motion: {
      pageLoad: 'Bands slide in from the diagonal, 260ms',
      hoverStates: 'Hard 4px offset, 90ms linear',
      transitions: 'No easing — mechanical',
      scroll: 'Sections snap in once, never fade',
    },
    accessibility:
      'Ink 14.2:1 on paper; red at 5.6:1 always paired with a label or shape. Focus is a 3px black outline offset 2px. Diagonal bands are aria-hidden.',
    responsive:
      'Bands shorten but keep their angle; headline clamps between 34 and 68px; grids collapse 4 → 2 → 1 under 720px.',
    codeExample:
      '<section class="press">\n  <span class="band" aria-hidden="true"></span>\n  <h1>Act, do not <em>decorate.</em></h1>\n  <button class="btn-press">Agitate</button>\n</section>',
    accent: '#c62828',
    motif: 'diagonal-bars',
    layout: 'poster',
    useCases: ['Publishing', 'Nonprofit', 'Agency'],
    signatureCss: `.dv-hero { position: relative; overflow: hidden; }
.dv-hero::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(108deg, #c62828 0 14px, transparent 14px 68px); opacity: .12; }
.dv-hero h1 { text-transform: uppercase; font-weight: 700; }
.dv-card { box-shadow: 3px 3px 0 #14110e; }
.dv-kicker { color: #c62828; }`,
    author: 'Mira Yakovleva',
    createdAt: '2026-09-27',
    popularity: 85,
  },
  {
    id: 'pop-print',
    name: 'Pop Print',
    category: 'Maximalism',
    tags: ['pop-art', 'halftone', 'warhol', 'comic', 'screenprint'],
    description: 'Benday dots and a raised voice.',
    designPhilosophy:
      'Pop art argued that a grocery can is a legitimate subject. Pop Print takes the printing screen seriously instead of ironically: halftone dots large enough to see, hard black outlines, and colours placed with no blending allowed. It is loud because comic covers are loud, not because contrast is trendy. For retail, merch, and entertainment.',
    designDetails:
      'Pop yellow #ffd400, cyan #00a9e0, hot red #ee2e24, and ink #111. Righteous display with Archivo body. Halftone dot fields behind heroes, 3px black outlines on every card, and a speech-balloon shape for CTAs.',
    colors: { primary: '#ee2e24', secondary: '#00a9e0', accent: '#ffd400', neutral: '#f6ecd2', background: '#fffdf5', text: '#111111' },
    typography: {
      displayFont: 'Righteous',
      bodyFont: 'Archivo',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 64',
      lineHeights: 'Display 1.0, body 1.58',
      letterSpacing: 'Display -0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #ee2e24, white text, 4px radius, 3px #111 border, 4px 4px 0 #111',
      secondary: 'Solid #ffd400, ink text, 4px radius, 3px #111 border',
      tertiary: 'Cyan underlined link, 2px',
      radius: '4px controls, 8px cards — comic sharp',
      hover: 'Offset grows to 6px, 120ms ease-out',
      cards: 'White cards, 8px radius, 3px #111 border, 4px 4px 0 #111, 24px padding',
      forms: 'Bold inputs, 3px black border, yellow focus fill',
      navigation: 'Outlined bar with a starburst logo',
      modals: 'Panel with a dashed speech-balloon header',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 48 / 88', paddingScale: '14 / 24 / 36 / 56', grid: '12-column, 1200px max, 24px gutter' },
    motion: {
      pageLoad: 'Cards stamp down 8px, 180ms each',
      hoverStates: 'Offset +2px, 120ms ease-out',
      transitions: 'Transform only',
      scroll: 'Sections pop in once',
    },
    accessibility:
      'Ink 17.9:1 on the cream ground; red/cyan/yellow always carry ink outlines so they read without colour. Focus 3px black with 2px offset.',
    responsive:
      'The halftone field shrinks dot spacing; outline cards reflow 3 → 2 → 1; headlines clamp.',
    codeExample:
      '<section class="pop">\n  <h1>Great items at <em>loud</em> prices.</h1>\n  <p>Every detail outlined. Nothing blended.</p>\n  <button class="btn-pop">Show me</button>\n</section>',
    accent: '#ee2e24',
    motif: 'halftone-dots',
    layout: 'bento',
    useCases: ['E-commerce', 'Events', 'Fashion'],
    signatureCss: `.dv-hero { background-image: radial-gradient(#ee2e2433 3px, transparent 3px); background-size: 14px 14px; }
.dv-card { border-width: 3px; border-color: #111; box-shadow: 4px 4px 0 #111; }
.dv-hero h1 em { color: #00a9e0; }
.dv-kicker { background: #ffd400; border: 2px solid #111; display: inline-block; padding: .2em .6em; }`,
    author: 'Bex Tanaka',
    createdAt: '2026-09-27',
    popularity: 89,
    trending: true,
  },
  {
    id: 'zellige-palace',
    name: 'Zellige Palace',
    category: 'Luxury',
    tags: ['zellige', 'moroccan', 'tile', 'craft', 'hospitality'],
    description: 'A courtyard, folded into eight points.',
    designPhilosophy:
      'Islamic tile work is a design system in the literal sense: one geometric rule generating infinite surface. Zellige Palace takes the eight-point star as a layout logic — nested frames, brass hairlines, and emerald held back so the pattern does the work. For hotels, heritage brands, and hospitality that wants to feel handmade.',
    designDetails:
      'Emerald #0f5f4a over courtyard cream #f7f3e8, brass #c9a227 for frames and rules, ink #14201c text. Marcellus display with Quicksand body. Star-tile dividers, 1px brass frames, and generous 40px insets.',
    colors: { primary: '#0f5f4a', secondary: '#0b3b30', accent: '#c9a227', neutral: '#eae4d4', background: '#f7f3e8', text: '#14201c' },
    typography: {
      displayFont: 'Marcellus',
      bodyFont: 'Quicksand',
      scale: '15 / 17 / 19 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.12, body 1.7',
      letterSpacing: 'Display 0.02em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #0f5f4a, cream text, 10px radius, 1px brass outline',
      secondary: '1px #c9a227 border, transparent, brass text',
      tertiary: 'Brass link with a hairline draw',
      radius: '10px controls, 16px cards, plus brass frames',
      hover: 'Frame brightens and lifts 2px, 220ms ease-out',
      cards: 'Cream cards, 16px radius, 1px #c9a22788 double frame, 30px padding',
      forms: '46px inputs, 10px radius, brass focus ring 3px',
      navigation: 'Quiet bar with a brass rule underneath',
      modals: 'Nested frame with a tiled corner motif',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 56 / 96 / 144', paddingScale: '18 / 32 / 48 / 72', grid: '12-column, 1160px max, 32px gutter' },
    motion: {
      pageLoad: 'Tiles resolve in, 400ms, 60ms apart',
      hoverStates: 'Frame brighten, 220ms ease-out',
      transitions: 'Opacity and transform only',
      scroll: 'Sections fade once at 15%',
    },
    accessibility:
      'Text 13.4:1 on cream; brass at 4.6:1 only for rules and labels. Focus 3px emerald ring. Decorative tile patterns are aria-hidden.',
    responsive:
      'The courtyard grid reflows 3 → 1; brass frames inset to 20px under 640px.',
    codeExample:
      '<section class="palace">\n  <h1>Eight points, <em>one room.</em></h1>\n  <p>Hand-cut tile, laid by four generations.</p>\n  <button class="btn-palace">Reserve</button>\n</section>',
    accent: '#0f5f4a',
    motif: 'corner-brackets',
    layout: 'spotlight',
    useCases: ['Hotel', 'Booking', 'Architecture'],
    signatureCss: `.dv-stage { background-image: radial-gradient(#0f5f4a0f 1px, transparent 1px); background-size: 26px 26px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 { font-family: 'Marcellus', serif; }
.dv-hero h1 em { color: #c9a227; font-style: normal; }
.dv-kicker { color: #0f5f4a; }`,
    author: 'Nadia El-Amin',
    createdAt: '2026-09-27',
    popularity: 83,
  },
  {
    id: 'murano-glass',
    name: 'Murano Glass',
    category: 'Luxury',
    tags: ['glass', 'venice', 'jewel', 'craft', 'colour'],
    description: 'Colour that cooled into a shape.',
    designPhilosophy:
      'Murano glass is expensive because the window for working it is seconds. Murano Glass keeps that urgency in the surface: saturated jewel gradients, glossy edges, and a dark ground that lets colour carry. It is decorative without being fussy. For galleries, accessories, and premium retail.',
    designDetails:
      'Deep teal #062a2e ground with molten amber #f08a24, garnet #b83b5e, and aqua #46c1c1. Abril Fatface display with Jost body. Gradients used on objects only, never on type; hairline specular highlights; 20px corners.',
    colors: { primary: '#f08a24', secondary: '#b83b5e', accent: '#46c1c1', neutral: '#0d3439', background: '#062a2e', text: '#eef6f6' },
    typography: {
      displayFont: 'Abril Fatface',
      bodyFont: 'Jost',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.06, body 1.66',
      letterSpacing: 'Display -0.02em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Gradient #f08a24 → #b83b5e, white text, 999px pill, gloss highlight',
      secondary: '1px #46c1c1 border, transparent, aqua text',
      tertiary: 'Aqua link with a soft underline sweep',
      radius: '999px pills, 20px cards — blown glass',
      hover: 'Gloss sweep travels, 240ms ease-out',
      cards: 'Glass panels, 1px #ffffff1f border, 20px radius, inner highlight, 26px padding',
      forms: 'Dark inputs on #0d3439, aqua focus ring 3px',
      navigation: 'Floating glass bar with a light hairline',
      modals: 'Rounded sheet with a specular edge',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 40 / 72 / 120', paddingScale: '16 / 26 / 44 / 64', grid: '12-column, 1180px max, 28px gutter' },
    motion: {
      pageLoad: 'Objects settle, 460ms, no bounce',
      hoverStates: 'Gloss sweep 240ms ease-out',
      transitions: 'Transform and background-position',
      scroll: 'Parallax on the showcase only',
    },
    accessibility:
      'Text 14.7:1 on teal; aqua links at 7.1:1; gradients always paired with solid text. Focus 3px aqua. Gloss is decorative only.',
    responsive:
      'The collection grid goes 3 → 2 → 1; the gradient showcase becomes a single centred object under 700px.',
    codeExample:
      '<section class="glass">\n  <h1>Colour, <em>caught mid-air.</em></h1>\n  <p>Blown, cut, and cooled in one morning.</p>\n  <button class="btn-murano">View the collection</button>\n</section>',
    accent: '#f08a24',
    motif: 'gradient-hero',
    layout: 'split-hero',
    useCases: ['Art Gallery', 'E-commerce', 'Portfolio'],
    signatureCss: `.dv-card { background: #0d3439; }
.dv-split-visual, .dv-fake-ui { background: linear-gradient(140deg, #f08a24, #b83b5e); border-radius: 20px; }
.dv-hero h1 em { color: #46c1c1; font-style: normal; }
.dv-btn-primary { background: linear-gradient(90deg, #f08a24, #b83b5e); }`,
    author: 'Giovanni Ruzzini',
    createdAt: '2026-09-27',
    popularity: 84,
  },
  {
    id: 'mirrorball',
    name: 'Mirrorball',
    category: 'Playful',
    tags: ['disco', 'glitter', 'nightlife', 'chrome', 'party'],
    description: 'Nothing commits like a mirrorball.',
    designPhilosophy:
      'Disco design gets dismissed as tacky, which is exactly why it is honest. Mirrorball leans into chrome type, gold on plum, and light that never settles. It is for brands that admit they want to be watched. Nightlife, festivals, and retail with a stage.',
    designDetails:
      'Plum #2a1338 with chrome #f2eef6, gold #f7c948, and magenta #ff5db1. Monoton display with Outfit body. Chrome gradient type, a radial flare behind the hero, and repeating gold ticks like a hanging ball.',
    colors: { primary: '#ff5db1', secondary: '#7c3aad', accent: '#f7c948', neutral: '#3a1f4d', background: '#2a1338', text: '#f2eef6' },
    typography: {
      displayFont: 'Monoton',
      bodyFont: 'Outfit',
      scale: '16 / 18 / 20 / 26 / 36 / 48 / 72',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.02em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #ff5db1, plum text, 999px pill, gold rim glow',
      secondary: '1px #f7c948 border, transparent, gold text',
      tertiary: 'Gold link with a sparkle ✓',
      radius: '999px pills, 20px cards',
      hover: 'Flare rotates 12°, 260ms ease-out',
      cards: 'Plum glass, 1px #ffffff26, 20px radius, radial flare, 26px padding',
      forms: 'Dark inputs, magenta focus ring 3px',
      navigation: 'Chrome bar that reflects the hero',
      modals: 'Glitter sheet with a gold rule',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 56 / 96', paddingScale: '14 / 24 / 40 / 60', grid: '12-column, 1240px max, 24px gutter' },
    motion: {
      pageLoad: 'Flare sweeps across once, 700ms',
      hoverStates: 'Flare rotate, 260ms ease-out',
      transitions: 'Transform and background-position',
      scroll: 'Grid sparkles at intervals, never continuously',
    },
    accessibility:
      'Text 12.9:1 on plum; gold at 8.6:1 for links. Flare is decorative and disabled under reduced motion. Focus 3px gold ring.',
    responsive:
      'Chrome headline clamps hard; the club grid drops 3 → 1; flares stop rotating on small screens.',
    codeExample:
      '<section class="ball">\n  <h1>Start the <em>weekend</em> early.</h1>\n  <p>Doors at nine. The ball starts at eight.</p>\n  <button class="btn-ball">Book a table</button>\n</section>',
    accent: '#ff5db1',
    motif: 'glow-pulse',
    layout: 'full-bleed',
    useCases: ['Events', 'Streaming', 'Music'],
    signatureCss: `.dv-bleed-hero { background: radial-gradient(60% 60% at 50% 30%, #ff5db133, transparent 70%), linear-gradient(160deg, #7c3aad, #2a1338); }
.dv-card { background: #3a1f4d; }
.dv-hero h1 { font-family: 'Monoton', cursive; }
.dv-hero h1 em { color: #f7c948; font-style: normal; }`,
    author: 'Cleo Vasquez',
    createdAt: '2026-09-27',
    popularity: 86,
  },
  {
    id: 'fm-dial',
    name: 'FM Dial',
    category: 'Retro',
    tags: ['radio', 'analog', 'broadcast', 'dial', 'warm'],
    description: 'Turn until it sounds right.',
    designPhilosophy:
      'An analog dial is an interface you can feel: ticks, a sliding needle, warmth in the grain. FM Dial builds a browsing experience out of that — cream plastic, walnut, orange needle, and numbers set like a tuning scale. For podcasts, community radio, and audio products that value ritual.',
    designDetails:
      'Cream #f3ece0 with walnut #4a3427, needle orange #e2661f, and ink #1d1712. Bebas Neue display with Livvic body. A horizontal tuning scale runs under the hero; ticks mark every section.',
    colors: { primary: '#e2661f', secondary: '#4a3427', accent: '#1f6f8b', neutral: '#e7ddcb', background: '#f3ece0', text: '#1d1712' },
    typography: {
      displayFont: 'Bebas Neue',
      bodyFont: 'Livvic',
      scale: '15 / 17 / 19 / 23 / 30 / 42 / 60',
      lineHeights: 'Display 1.02, body 1.64',
      letterSpacing: 'Display 0.04em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #e2661f, cream text, 6px radius, tactile inset edge',
      secondary: '1px #4a3427 border, transparent, walnut text',
      tertiary: 'Walnut link with a needle sweep',
      radius: '6px controls, 14px cards — molded plastic',
      hover: 'Sweep along the button, 180ms ease-out',
      cards: 'Cream plastic cards, 14px radius, 1px #4a342733, 24px padding',
      forms: 'Recessed inputs, 6px radius, blue focus ring',
      navigation: 'Woodgrain bar with a tuning scale',
      modals: 'Radio-panel sheet with a station label',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 56 / 92', paddingScale: '14 / 24 / 38 / 56', grid: '12-column, 1180px max, 26px gutter' },
    motion: {
      pageLoad: 'Needle slides to its position, 520ms',
      hoverStates: 'Sweep, 180ms ease-out',
      transitions: 'transform and background-position',
      scroll: 'Ticks illuminate as sections enter',
    },
    accessibility:
      'Ink 14.8:1 on cream; orange at 5.4:1 with a label. Focus 2px blue ring. The tuning scale is decorative and aria-hidden.',
    responsive:
      'The scale compresses to a thin rule; program cards reflow 3 → 1 under 700px.',
    codeExample:
      '<section class="dial">\n  <p class="freq">88.5 · 91.1 · 98.3</p>\n  <h1>Find your <em>station.</em></h1>\n  <button class="btn-fm">Listen live</button>\n</section>',
    accent: '#e2661f',
    motif: 'mono-labels',
    layout: 'catalog',
    useCases: ['Podcast', 'Streaming', 'Community'],
    signatureCss: `.dv-card { background: #fbf7ee; }
.dv-hero { border-bottom: 3px solid #4a3427; position: relative; }
.dv-hero::after { content: ''; position: absolute; left: 0; right: 0; bottom: -3px; height: 3px; background: repeating-linear-gradient(90deg, #4a3427 0 2px, transparent 2px 22px); }
.dv-hero h1 em { color: #e2661f; font-style: normal; }`,
    author: 'Gil Moreau',
    createdAt: '2026-09-27',
    popularity: 77,
  },
  {
    id: 'woodblock-wave',
    name: 'Woodblock Wave',
    category: 'Creative',
    tags: ['ukiyo-e', 'woodblock', 'washi', 'indigo', 'edition'],
    description: 'Ink, paper, and one clean pull.',
    designPhilosophy:
      'A woodblock print is an edition of the same gesture, repeated with slight difference — which is what a design system aspires to be. Woodblock Wave is quiet indigo on washi with a vermilion seal as the only permitted interruption. It rewards patience. For galleries, cultural institutions, and craft brands.',
    designDetails:
      'Washi #f6f1e7 with indigo #1f3a63, deep ink #171a1f, and vermilion #c8442e reserved for seals. Fraunces display with Manrope body. Rough deckle edges, one seal per screen, and generous vertical space.',
    colors: { primary: '#1f3a63', secondary: '#2f5d8a', accent: '#c8442e', neutral: '#e9e2d3', background: '#f6f1e7', text: '#171a1f' },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 19 / 24 / 31 / 42 / 60',
      lineHeights: 'Display 1.1, body 1.72',
      letterSpacing: 'Display -0.01em; labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid #1f3a63, washi text, 4px radius, seal-red accent mark',
      secondary: '1px #1f3a63 border, transparent, indigo text',
      tertiary: 'Indigo link with a drawn rule',
      radius: '4px controls, 8px cards',
      hover: 'Rule draws left to right, 220ms ease-out',
      cards: 'Washi cards, 8px radius, 1px #1f3a6333, 28px padding, deckle edge',
      forms: 'Underlined inputs with an indigo focus rule',
      navigation: 'Slim bar with a vermilion seal',
      modals: 'Paper sheet with a seal stamp',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 64 / 104 / 152', paddingScale: '16 / 30 / 48 / 76', grid: '1160px, 12-column with a 60ch reading measure' },
    motion: {
      pageLoad: 'Fade only, 640ms, no translation',
      hoverStates: 'Rule draws, 220ms ease-out',
      transitions: 'Opacity and border',
      scroll: 'Sections fade in once at 18%',
    },
    accessibility:
      'Ink 14.1:1 on washi; indigo 10.6:1 for links; vermilion always with a label. Focus 2px indigo. All ornament is aria-hidden.',
    responsive:
      'The print grid stacks to one column under 760px; the measure never widens past 65 characters.',
    codeExample:
      '<section class="block">\n  <span class="seal" aria-hidden="true">印</span>\n  <h1>The space between <em>strokes.</em></h1>\n  <p>Forty-one pulls, each one slightly alive.</p>\n</section>',
    accent: '#c8442e',
    motif: 'duotone-media',
    layout: 'editorial',
    useCases: ['Art Gallery', 'Publishing', 'Community'],
    signatureCss: `.dv-media { background: linear-gradient(150deg, #1f3a63, #c8442e); }
.dv-card { background: #fffdf7; }
.dv-hero h1 em { color: #c8442e; }
.dv-kicker::before { content: '印 '; color: #c8442e; }`,
    author: 'Kenji Arai',
    createdAt: '2026-09-27',
    popularity: 82,
  },
  {
    id: 'apothecary-counter',
    name: 'Apothecary Counter',
    category: 'Organic',
    tags: ['apothecary', 'herbal', 'botanical', 'remedy', 'vintage'],
    description: 'Everything has a tincture and a label.',
    designPhilosophy:
      'The apothecary is commerce disguised as knowledge — shelves, labels, and a person who knows which jar. Apothecary Counter brings that back for modern apothecary and wellness: label strips, amber glass, and copy that names ingredients rather than benefits. For herbal retail, clinics, and small-batch makers.',
    designDetails:
      'Amber #b3742a, bottle green #2c5f4a, label cream #f7f1e4, ink #23201b. Zilla Slab display with Karla body. Tape-label kickers, hairline shelf rules, and small caps for dosage-style metadata.',
    colors: { primary: '#2c5f4a', secondary: '#7a5230', accent: '#b3742a', neutral: '#eee6d6', background: '#f7f1e4', text: '#23201b' },
    typography: {
      displayFont: 'Zilla Slab',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 29 / 38 / 52',
      lineHeights: 'Display 1.1, body 1.68',
      letterSpacing: 'Display -0.01em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #2c5f4a, cream text, 4px radius, 1px amber edge',
      secondary: '1px #b3742a border, transparent, amber text',
      tertiary: 'Green link with a hairline underline',
      radius: '4px controls, 8px labels, 12px cards',
      hover: 'Label straightens, 160ms ease-out',
      cards: 'Cream cards, 12px radius, 1px #23201b33, 24px padding, shelf rule',
      forms: 'Labelled inputs with a green focus rule',
      navigation: 'Shelf bar with a dosage strip',
      modals: 'Label sheet with a bottle edge',
    },
    spacing: { baseUnit: '6px', marginScale: '12 / 24 / 44 / 76', paddingScale: '14 / 24 / 38 / 58', grid: '12-column, 1140px max, 24px gutter' },
    motion: {
      pageLoad: 'Jars slide in, 240ms, 40ms apart',
      hoverStates: 'Label straighten, 160ms ease-out',
      transitions: 'Transform only',
      scroll: 'Shelves reveal once',
    },
    accessibility:
      'Ink 13.1:1 on label cream; green links 7.4:1; amber always labelled. Focus 3px green ring. Shelf rules are decorative.',
    responsive:
      'The shelf reflows 3 → 2 → 1; label strips wrap instead of truncating.',
    codeExample:
      '<section class="counter">\n  <p class="label">Tincture No. 4 · 30ml</p>\n  <h1>For the <em>long winter.</em></h1>\n  <button class="btn-apothecary">Add to order</button>\n</section>',
    accent: '#b3742a',
    motif: 'tape-labels',
    layout: 'catalog',
    useCases: ['E-commerce', 'Clinic', 'Wellness'],
    signatureCss: `.dv-card { background: #fffdf6; border-left: 3px solid #2c5f4a; }
.dv-hero h1 em { color: #b3742a; }
.dv-label { color: #2c5f4a; }
.dv-kicker { background: #eee6d6; }`,
    author: 'Rosalind Cheung',
    createdAt: '2026-09-27',
    popularity: 78,
  },
  {
    id: 'apiary',
    name: 'The Apiary',
    category: 'Organic',
    tags: ['bees', 'honey', 'hexagon', 'pollinator', 'farm'],
    description: 'Honey is a supply-chain story.',
    designPhilosophy:
      'Beekeeping is a system of tiny hexagonal decisions. The Apiary leans on that geometry for structure while keeping the warmth of something handmade — honey amber, comb black, and body copy that explains the meadow behind the jar. For artisan food, farms, and conservation.',
    designDetails:
      'Honey #e8a021, comb black #1c1813, meadow green #6a8f3c, wax cream #faf3e0. Baloo 2 display with Fredoka body. Hexagonal frames on media, amber rules, and a gentle hex-pattern backdrop.',
    colors: { primary: '#e8a021', secondary: '#6a8f3c', accent: '#1c1813', neutral: '#f2e7cd', background: '#faf3e0', text: '#1c1813' },
    typography: {
      displayFont: 'Baloo 2',
      bodyFont: 'Fredoka',
      scale: '16 / 18 / 20 / 24 / 31 / 42 / 58',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.06em uppercase',
    },
    components: {
      primary: 'Solid #e8a021, comb text, 8px radius, honeycomb edge',
      secondary: '1px #6a8f3c border, transparent, meadow text',
      tertiary: 'Meadow link with a leaf mark',
      radius: '8px controls, 14px cards',
      hover: 'Lift 2px and warm, 180ms ease-out',
      cards: 'Wax-cream cards, 14px radius, 1px #e8a02166, 24px padding',
      forms: 'Warm inputs, 8px radius, honey focus ring 3px',
      navigation: 'Wax bar with a hexagon mark',
      modals: 'Comb sheet with a honey rule',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 52 / 84', paddingScale: '14 / 24 / 38 / 58', grid: '12-column, 1160px max, 24px gutter' },
    motion: {
      pageLoad: 'Cells fill in, 220ms, 30ms apart',
      hoverStates: 'Lift 2px, 180ms ease-out',
      transitions: 'Transform and opacity',
      scroll: 'Honey level animates once',
    },
    accessibility:
      'Ink 16.2:1 on wax; amber at 8.9:1 paired with ink text — never amber on white. Focus 3px meadow ring. Hex patterns are aria-hidden.',
    responsive:
      'The comb grid reflows 4 → 2 → 1; the honey gauge becomes a plain number.',
    codeExample:
      '<section class="honey">\n  <h1>Twelve hives, <em>one meadow.</em></h1>\n  <p>Raw and unfiltered, jarred the week it comes off.</p>\n  <button class="btn-apiary">Order a jar</button>\n</section>',
    accent: '#e8a021',
    motif: 'leaf-divider',
    layout: 'hero-cards',
    useCases: ['Agriculture', 'Grocery', 'Nonprofit'],
    signatureCss: `.dv-stage { background-image: radial-gradient(#e8a0211f 1.5px, transparent 1.5px); background-size: 22px 22px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 em { color: #6a8f3c; }
.dv-media { background: linear-gradient(140deg, #e8a021, #6a8f3c); }`,
    author: 'Faye Okonkwo',
    createdAt: '2026-09-27',
    popularity: 76,
  },
  {
    id: 'big-top',
    name: 'Big Top',
    category: 'Playful',
    tags: ['circus', 'carnival', 'stripe', 'show', 'fun'],
    description: 'Ladies and gentlemen, this is a website.',
    designPhilosophy:
      'The big top works because it makes promises before you go in. Big Top keeps that: red-and-cream stripes, ticket-stub borders, and type that shouts the headline before the fine print. It is theatrical on purpose. For festivals, family events, and anything selling a show.',
    designDetails:
      'Circus red #c8322b, cream #fdf4e3, midnight #16203c, gold #f4c430. Bangers display with Rubik body. Striped canopy bands, ticket perforations on cards, and a gold starburst badge system.',
    colors: { primary: '#c8322b', secondary: '#16203c', accent: '#f4c430', neutral: '#f7e8cd', background: '#fdf4e3', text: '#16203c' },
    typography: {
      displayFont: 'Bangers',
      bodyFont: 'Rubik',
      scale: '16 / 18 / 20 / 25 / 34 / 46 / 68',
      lineHeights: 'Display 1.0, body 1.58',
      letterSpacing: 'Display 0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #c8322b, cream text, 6px radius, gold starburst corner',
      secondary: '2px #16203c border, transparent, midnight text',
      tertiary: 'Red link with a ticket notch',
      radius: '6px controls, 12px cards, ticket stubs at 0',
      hover: 'Tilt 1° and lift, 160ms ease-out',
      cards: 'Cream tickets, 12px radius, dashed 2px #c8322b55, 24px padding',
      forms: 'Bold inputs, 6px radius, gold focus ring',
      navigation: 'Striped canopy bar with a bell',
      modals: 'Ticket panel with perforation',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 32 / 56 / 92', paddingScale: '14 / 26 / 40 / 60', grid: '12-column, 1180px max, 26px gutter' },
    motion: {
      pageLoad: 'Badges pop in with an overshoot, 280ms',
      hoverStates: 'Tilt 1° + lift, 160ms ease-out',
      transitions: 'Transform with overshoot',
      scroll: 'Marquee band runs under the hero',
    },
    accessibility:
      'Midnight on cream 14.6:1; red at 5.2:1 always with a label; gold never on white. Focus 3px midnight ring.',
    responsive:
      'Stripes compress; ticket grid reflows 3 → 1; badges shrink rather than overlap.',
    codeExample:
      '<section class="show">\n  <p class="badge">★ Tonight only ★</p>\n  <h1>Three rings, <em>no rules.</em></h1>\n  <button class="btn-bigtop">Get tickets</button>\n</section>',
    accent: '#c8322b',
    motif: 'rotated-stickers',
    layout: 'magazine',
    useCases: ['Events', 'Kids', 'Sports'],
    signatureCss: `.dv-masthead { background: repeating-linear-gradient(90deg, #c8322b 0 18px, #fdf4e3 18px 36px); padding: 1.6em 1.4em; border-radius: 12px; }
.dv-card { background: #fffdf7; }
.dv-hero h1 em { color: #c8322b; }
.dv-kicker { color: #c8322b; }`,
    author: 'Cassidy Monroe',
    createdAt: '2026-09-27',
    popularity: 80,
  },
  {
    id: 'auction-house',
    name: 'Auction House',
    category: 'Luxury',
    tags: ['auction', 'lot', 'provenance', 'saleroom', 'collecting'],
    description: 'Lot 14. Sold to the phone at nine.',
    designPhilosophy:
      'An auction catalogue is the rare luxury format that is also a spreadsheet: lot numbers, provenance, estimates, and an outcome. Auction House keeps the hush of a saleroom while making the numbers the star. For resale, collectibles, and premium marketplaces.',
    designDetails:
      'Saleroom white #f1ece2, ink #17150f, hammer red #8c2f2f, gilt #b08d57. DM Serif Display display with Manrope body. Lot numbering in gilt, hairline rules, tabular estimates, and a hammer-red status mark.',
    colors: { primary: '#17150f', secondary: '#6f6656', accent: '#8c2f2f', neutral: '#e2dacb', background: '#f1ece2', text: '#17150f' },
    typography: {
      displayFont: 'DM Serif Display',
      bodyFont: 'Manrope',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 62',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.01em; labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid #17150f, white text, 0 radius, uppercase gilt label',
      secondary: '1px #17150f border, transparent, ink text',
      tertiary: 'Gilt link with a hairline draw',
      radius: '0 controls, 2px cards — catalogue-sharp',
      hover: 'Gilt rule draws, 200ms ease-out',
      cards: 'White lot cards, 2px radius, 1px #17150f33, 26px padding, gilt lot number',
      forms: 'Underlined inputs with a gilt focus rule',
      navigation: 'Quiet bar with a lot ticker',
      modals: 'Lot sheet with a red SOLD stamp',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 56 / 96 / 148', paddingScale: '18 / 32 / 48 / 76', grid: '12-column, 1200px max, 32px gutter' },
    motion: {
      pageLoad: 'Lots fade in, 420ms, no movement',
      hoverStates: 'Gilt rule draws, 200ms ease-out',
      transitions: 'Opacity and border only',
      scroll: 'Estimates count up once',
    },
    accessibility:
      'Ink 16.1:1 on saleroom white; hammer red at 7.3:1 with a label; gilt only for ornament. Focus 2px ink with 2px offset. Estimates are real text, not images.',
    responsive:
      'The lot grid reflows 3 → 1; the estimate table scrolls with a pinned lot column.',
    codeExample:
      '<article class="lot">\n  <p class="lot-no">Lot 14</p>\n  <h1>A pair of <em>marmalade</em> urns.</h1>\n  <p>Estimate £4,000–6,000 · Wednesday 14:30</p>\n</article>',
    accent: '#8c2f2f',
    motif: 'editorial-columns',
    layout: 'spotlight',
    useCases: ['Marketplace', 'Art Gallery', 'E-commerce'],
    signatureCss: `.dv-card { background: #ffffff; border-top: 2px solid #17150f; }
.dv-hero h1 { font-family: 'DM Serif Display', serif; }
.dv-hero h1 em { color: #8c2f2f; font-style: normal; }
.dv-stat strong { font-variant-numeric: tabular-nums; }
.dv-kicker { color: #b08d57; }`,
    author: 'Eleanor Ashworth',
    createdAt: '2026-09-27',
    popularity: 79,
  },
  {
    id: 'flight-deck',
    name: 'Flight Deck',
    category: 'Professional',
    tags: ['aviation', 'cockpit', 'gauges', 'logistics', 'ops'],
    description: 'Instruments first, opinions second.',
    designPhilosophy:
      'A cockpit is a document with strict priorities: altitude, speed, heading, everything else. Flight Deck borrows that hierarchy for operations products — instrument numerals, amber for attention, teal for normal, and no layout that makes you search for a figure. For aviation, logistics, and industrial operations.',
    designDetails:
      'Cockpit black #0b0e11, instrument cyan #39d6d0, caution amber #f0a721, cool grey #93a1b1. Chakra Petch display with Archivo body. Gauge rings on metrics, hairline frame rules, and monospace for call signs.',
    colors: { primary: '#39d6d0', secondary: '#93a1b1', accent: '#f0a721', neutral: '#141a20', background: '#0b0e11', text: '#e6edf2' },
    typography: {
      displayFont: 'Chakra Petch',
      bodyFont: 'Archivo',
      scale: '13 / 15 / 17 / 21 / 28 / 38 / 52',
      lineHeights: 'Display 1.14, body 1.6',
      letterSpacing: 'Display 0.01em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #39d6d0, cockpit-black text, 6px radius, uppercase mono',
      secondary: '1px #f0a721 border, transparent, amber text',
      tertiary: 'Cyan link with a ▸ chevron',
      radius: '6px controls, 10px panels',
      hover: 'Frame brightens, 120ms linear',
      cards: '#141a20 panels, 1px #232c35 border, 10px radius, 22px padding',
      forms: 'Dark inputs, cyan focus ring 2px, tabular figures',
      navigation: 'Top frame with a call-sign ticker',
      modals: 'Briefing panel with a stamped header',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 64 / 112', paddingScale: '12 / 22 / 34', grid: '1360px full-width, 12-col instrument grid' },
    motion: {
      pageLoad: 'Gauges sweep from zero, 500ms',
      hoverStates: 'Frame brighten, 120ms linear',
      transitions: 'Linear, instrument-like',
      scroll: 'Nothing animates on scroll — data must be present',
    },
    accessibility:
      'Text 14.8:1 on cockpit black; amber cautions paired with an icon and words; cyan never alone. Focus 2px cyan. Gauge sweeps stop under reduced motion.',
    responsive:
      'The instrument row reflows 4 → 2; tables scroll with pinned call signs; gauges shrink to numbers on small screens.',
    codeExample:
      '<section class="deck">\n  <p class="callsign">FL 340 · ZBAA → EGLL</p>\n  <h1>On time, <em>every time.</em></h1>\n  <p>62 movements, zero holds.</p>\n</section>',
    accent: '#39d6d0',
    motif: 'scanlines',
    layout: 'dashboard',
    useCases: ['Logistics', 'Manufacturing', 'Data & Analytics'],
    signatureCss: `.dv-card { background: #141a20; }
.dv-kpi, .dv-stat { border: 1px solid #232c35; }
.dv-hero h1 { font-family: 'Chakra Petch', sans-serif; }
.dv-hero h1 em { color: #f0a721; font-style: normal; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Rui Almeida',
    createdAt: '2026-09-27',
    popularity: 81,
  },
  {
    id: 'bioluminescent-reef',
    name: 'Reef At Night',
    category: 'Organic',
    tags: ['underwater', 'bioluminescence', 'ocean', 'dark', 'wonder'],
    description: 'Turn off the lights and look closer.',
    designPhilosophy:
      'Underwater sites fail when they use surface design in deep water. Reef At Night is built for the dark: near-black blue, glow that comes from the organisms rather than from a shadow, and copy that reads like a dive log. For marine science, travel, and premium content.',
    designDetails:
      'Abyss #04141d with reef glow #4fe0d8, anemone #ff7ad9, and cool foam #dff6f6. Bricolage Grotesque display with Nunito body. Soft glow layers, grain like water haze, and generous darkness between sections.',
    colors: { primary: '#4fe0d8', secondary: '#1a6f7a', accent: '#ff7ad9', neutral: '#0a2532', background: '#04141d', text: '#dff6f6' },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Nunito',
      scale: '15 / 17 / 19 / 24 / 31 / 44 / 64',
      lineHeights: 'Display 1.08, body 1.7',
      letterSpacing: 'Display -0.02em; labels 0.16em uppercase',
    },
    components: {
      primary: 'Solid #4fe0d8, abyss text, 999px pill, soft glow',
      secondary: '1px #ff7ad9 border, transparent, pink text',
      tertiary: 'Reef-glow link with a soft bloom',
      radius: '999px pills, 18px cards',
      hover: 'Glow blooms +25%, 240ms ease-out',
      cards: '#0a2532 panels, 1px #4fe0d822, 18px radius, inner glow, 26px padding',
      forms: 'Deep inputs, teal focus ring 3px',
      navigation: 'Transparent bar that deepens on scroll',
      modals: 'Drift sheet with a glow edge',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 16 / 40 / 76 / 128', paddingScale: '16 / 28 / 46 / 68', grid: '12-column, 1220px max, 28px gutter' },
    motion: {
      pageLoad: 'Bioluminescence fades up over 700ms',
      hoverStates: 'Glow bloom, 240ms ease-out',
      transitions: 'Opacity and filter',
      scroll: 'Parallax drift on the depth layers',
    },
    accessibility:
      'Text 15.1:1 on abyss; teal/pink links above 7:1 with underlines. Focus 2px teal. Glow and drift disabled under reduced motion.',
    responsive:
      'Depth parallax turns off below 700px; the dive log becomes single column.',
    codeExample:
      '<section class="reef">\n  <p class="depth">−28 m · moonless</p>\n  <h1>Four thousand metres, <em>no sunlight.</em></h1>\n  <button class="btn-reef">Enter the dive log</button>\n</section>',
    accent: '#4fe0d8',
    motif: 'grain-overlay',
    layout: 'full-bleed',
    useCases: ['Travel', 'Education', 'Photography'],
    signatureCss: `.dv-bleed-hero { background: radial-gradient(50% 50% at 50% 40%, #4fe0d82e, transparent 70%), linear-gradient(160deg, #0a2532, #04141d); }
.dv-card { background: #0a2532; }
.dv-hero h1 em { color: #ff7ad9; font-style: normal; }
.dv-kicker { color: #4fe0d8; }`,
    author: 'Tomas Reefs',
    createdAt: '2026-09-27',
    popularity: 84,
  },
  {
    id: 'philatelic-album',
    name: 'Philatelic Album',
    category: 'Retro',
    tags: ['stamps', 'collecting', 'postage', 'album', 'archive'],
    description: 'Small squares, long histories.',
    designPhilosophy:
      'A stamp album is a grid with provenance — every cell has a number, a country, a year, and a reason. Philatelic Album takes that seriously for catalogs and archives: perforated edges, tabular metadata, and a rhythm of small, well-labelled objects. For collections, directories, and archival projects.',
    designDetails:
      'Album grey #eceae4, stamp red #7a2231, deep blue #24406b, ink #1a1714. Rubik Mono One display with Source Sans 3 body. Perforated card edges, hairline mounts, and corner metadata in tiny caps.',
    colors: { primary: '#7a2231', secondary: '#24406b', accent: '#c99b28', neutral: '#e0ddd4', background: '#eceae4', text: '#1a1714' },
    typography: {
      displayFont: 'Rubik Mono One',
      bodyFont: 'Source Sans 3',
      scale: '13 / 14 / 16 / 19 / 26 / 34 / 48',
      lineHeights: 'Display 1.1, body 1.66',
      letterSpacing: 'Display -0.02em; labels 0.1em uppercase',
    },
    components: {
      primary: 'Solid #7a2231, white text, 2px radius, perforated top edge',
      secondary: '1px #24406b border, transparent, blue text',
      tertiary: 'Blue link with a catalogue number',
      radius: '2px controls, 4px stamps',
      hover: 'Stamp lifts 2px and straightens, 150ms',
      cards: 'Perforated cards, 4px radius, dashed mask, 1px #1a171433, 20px padding',
      forms: 'Boxed inputs, 2px radius, blue focus ring',
      navigation: 'Index bar with a country list',
      modals: 'Mount sheet with a catalogue stamp',
    },
    spacing: { baseUnit: '4px', marginScale: '16 / 32 / 56 / 96', paddingScale: '14 / 24 / 38', grid: '12-column, 1200px max, 22px gutter' },
    motion: {
      pageLoad: 'Stamps settle into mounts, 240ms',
      hoverStates: 'Lift + straighten, 150ms ease-out',
      transitions: 'Transform only',
      scroll: 'Album rows reveal once',
    },
    accessibility:
      'Ink 14.9:1 on album grey; red and blue above 5.9:1 with labels; metadata is real text. Focus 2px blue with 2px offset.',
    responsive:
      'The album grid goes 6 → 4 → 2; catalogue numbers wrap instead of clipping.',
    codeExample:
      '<article class="stamp">\n  <p class="cat">Cat. 4471 · Japon</p>\n  <h1>Three pence, <em>imperforate.</em></h1>\n  <p>Issued 1871 · toned on the reverse</p>\n</article>',
    accent: '#7a2231',
    motif: 'dashed-borders',
    layout: 'magazine',
    useCases: ['Publishing', 'Marketplace', 'Education'],
    signatureCss: `.dv-card { background: #faf9f5; border-style: dashed; }
.dv-hero h1 { font-family: 'Rubik Mono One', monospace; }
.dv-hero h1 em { color: #24406b; font-style: normal; }
.dv-kicker { color: #7a2231; }
.dv-stat strong { font-variant-numeric: tabular-nums; }`,
    author: 'Arthur Penhaligon',
    createdAt: '2026-09-27',
    popularity: 74,
  },
  {
    id: 'tapestry-weave',
    name: 'Tapestry & Weave',
    category: 'Organic',
    tags: ['textile', 'tapestry', 'folk', 'craft', 'warm'],
    description: 'Two threads, one long pattern.',
    designPhilosophy:
      'A tapestry looks ornamental and is actually structural: the pattern IS the weave. Tapestry & Weave takes folk textile logic — repeating bands, warm wool colours, and a rhythm you can feel without reading — and uses it to organise a page. For makers, heritage brands, and textiles.',
    designDetails:
      'Wool #a8452e, loom indigo #2c3a63, straw #d9b06a, oat #f4ead8. Bitter display with EB Garamond body. Horizontal bands separate sections like woven stripes, with geometric dividers between bands.',
    colors: { primary: '#a8452e', secondary: '#2c3a63', accent: '#d9b06a', neutral: '#eee1cb', background: '#f4ead8', text: '#241c16' },
    typography: {
      displayFont: 'Bitter',
      bodyFont: 'EB Garamond',
      scale: '15 / 17 / 19 / 23 / 30 / 40 / 56',
      lineHeights: 'Display 1.1, body 1.72',
      letterSpacing: 'Display -0.01em; labels 0.14em uppercase',
    },
    components: {
      primary: 'Solid #a8452e, oat text, 4px radius, woven edge pattern',
      secondary: '1px #2c3a63 border, transparent, indigo text',
      tertiary: 'Indigo link with a thread draw',
      radius: '4px controls, 8px cards',
      hover: 'Thread draws across, 200ms ease-out',
      cards: 'Oat cards, 8px radius, 1px #a8452e44, 26px padding, banded top',
      forms: 'Warm inputs, 4px radius, indigo focus ring 3px',
      navigation: 'Braided bar with a loom mark',
      modals: 'Folded panel with a woven rule',
    },
    spacing: { baseUnit: '8px', marginScale: '16 / 32 / 56 / 92 / 132', paddingScale: '16 / 28 / 44 / 64', grid: '12-column, 1160px max, 28px gutter' },
    motion: {
      pageLoad: 'Bands draw in from left, 380ms',
      hoverStates: 'Thread draws, 200ms ease-out',
      transitions: 'Border and transform',
      scroll: 'Weave bands reveal once',
    },
    accessibility:
      'Text 12.4:1 on oat; wool red at 5.7:1 with labels; indigo links 8.3:1. Focus 3px indigo. Bands are decorative and aria-hidden.',
    responsive:
      'Bands shorten but keep their stripes; the pattern grid reflows 3 → 1.',
    codeExample:
      '<section class="weave">\n  <h1>Woven, not <em>printed.</em></h1>\n  <p>Four colours, one loom, eight weeks.</p>\n  <button class="btn-weave">See the process</button>\n</section>',
    accent: '#a8452e',
    motif: 'wave-section',
    layout: 'magazine',
    useCases: ['E-commerce', 'Fashion', 'Marketplace'],
    signatureCss: `.dv-masthead { background: repeating-linear-gradient(90deg, #a8452e 0 14px, #2c3a63 14px 28px, #d9b06a 28px 34px); height: 14px; border-radius: 7px; }
.dv-card { background: #fffdf6; }
.dv-hero h1 em { color: #2c3a63; }
.dv-kicker { color: #a8452e; }`,
    author: 'Ida Martensson',
    createdAt: '2026-09-27',
    popularity: 77,
  },
  {
    id: 'outsider-art',
    name: 'Outsider Art',
    category: 'Creative',
    tags: ['art-brut', 'raw', 'handmade', 'eclectic', 'gallery'],
    description: 'No training required, just nerve.',
    designPhilosophy:
      'Art brut was defined by its distance from institutions — raw materials, private systems, no style guide. Outsider Art takes the amateur-rules credential seriously: hand-drawn marks, uneven baselines, and a layout that admits it was assembled by a person. For galleries, zine culture, and studios that distrust polish.',
    designDetails:
      'Raw paper #f6f2ea with charcoal #1b1a17, signal orange #ff6b1a, and blue pencil #2f6bd8. Permanent Marker display with Livvic body. Hand-drawn rules, mismatched rotations, and a deliberate baseline wobble.',
    colors: { primary: '#ff6b1a', secondary: '#2f6bd8', accent: '#1b1a17', neutral: '#e7e1d6', background: '#f6f2ea', text: '#1b1a17' },
    typography: {
      displayFont: 'Permanent Marker',
      bodyFont: 'Livvic',
      scale: '15 / 17 / 19 / 24 / 32 / 44 / 64',
      lineHeights: 'Display 1.12, body 1.66',
      letterSpacing: 'Display 0; labels 0.08em uppercase',
    },
    components: {
      primary: 'Solid #ff6b1a, ink text, 10px radius, uneven hand-drawn edge',
      secondary: '2px #1b1a17 dashed border, transparent, ink text',
      tertiary: 'Blue-pencil link with a marker underline',
      radius: '10px controls, 14px cards — irregular on purpose',
      hover: 'Jitters 1° and lifts, 140ms',
      cards: 'Paper cards, 14px radius, 2px #1b1a1755, 24px padding, random tilt',
      forms: 'Rough inputs, 10px radius, orange focus ring 3px',
      navigation: 'Taped-up bar with a marker title',
      modals: 'Collage panel with a scribbled header',
    },
    spacing: { baseUnit: '8px', marginScale: '8 / 18 / 34 / 58 / 96', paddingScale: '14 / 26 / 40 / 62', grid: '12-column, 1140px max, 26px gutter, deliberately loose' },
    motion: {
      pageLoad: 'Elements wobble in, 200ms, uneven timing',
      hoverStates: 'Jitter + lift, 140ms',
      transitions: 'Transform with irregular timing',
      scroll: 'Elements appear without a shared easing',
    },
    accessibility:
      'Ink 16.3:1 on raw paper; orange at 4.8:1 with a label; dashed borders still meet 3:1 for UI. Focus 3px orange. Random tilts stop under reduced motion.',
    responsive:
      'Tilts reduce to zero below 700px so content stays readable; grids reflow 3 → 1.',
    codeExample:
      '<section class="raw">\n  <h1>Not <em>finished,</em> just honest.</h1>\n  <p>Every mark was made by a hand.</p>\n  <button class="btn-raw">See the wall</button>\n</section>',
    accent: '#ff6b1a',
    motif: 'underline-accent',
    layout: 'asymmetric',
    useCases: ['Art Gallery', 'Publishing', 'Community'],
    signatureCss: `.dv-card { transform: rotate(.6deg); }
.dv-card:nth-child(even) { transform: rotate(-.8deg); }
.dv-card:hover { transform: rotate(0deg) translateY(-2px); }
.dv-hero h1 { font-family: 'Permanent Marker', cursive; }
.dv-hero h1 em { color: #2f6bd8; }`,
    author: 'Jonah Ferrier',
    createdAt: '2026-09-27',
    popularity: 85,
    trending: true,
  },
]
