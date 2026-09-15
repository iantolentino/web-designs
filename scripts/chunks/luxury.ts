  {
    id: 'champagne-noir',
    name: 'Champagne Noir',
    category: 'Luxury',
    tags: ['noir', 'champagne', 'velvet', 'evening'],
    description: 'After-dark luxury — espresso noir poured with champagne gold.',
    designPhilosophy:
      'Luxury at midnight. Noir surfaces swallow the room until champagne gold and one blush highlight mark what matters — the pour, the invitation, the name on the card. Everything else stays velvet-dark and unhurried.',
    designDetails:
      'Espresso noir #171210 with champagne #d9b47c foil, blush #c98a7d candlelight, and cream #f4ead9 copy. Fraunces italic opens evenings; IBM Plex Sans serves the details. Foil is applied as gradient text on the single headline per view; rules are 1px champagne at 25% opacity. Cards read like matte boxes with debossed edges.',
    colors: {
      primary: '#d9b47c',
      secondary: '#241b14',
      accent: '#c98a7d',
      neutral: '#37291e',
      background: '#171210',
      text: '#f4ead9',
    },
    typography: {
      displayFont: 'Fraunces',
      bodyFont: 'IBM Plex Sans',
      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',
      lineHeights: 'Display 1.12, body 1.66',
      letterSpacing: 'Display 0, labels 0.18em uppercase',
    },
    components: {
      primary:
        'Champagne foil button — gradient #e8cfa4→#c89a5e, noir text, 2px radius, weight 600; hover brightens the pour 200ms',
      secondary: 'Velvet button (#241b14) with 1px champagne border at 40%; hover pours to 100%',
      tertiary: 'Blush italic link with a hairline underline that glows candle-warm on hover',
      radius: '2px controls, 6px cards — crystal facets, kept subtle',
      hover: 'Foil brightens, rules pour in from 0→100% width, 220ms ease',
      cards: 'Matte boxes: #201812 with 1px rgba(217,180,124,.25) debossed edge, 28px padding, blush corner glow on the featured card',
      forms: 'Underline fields in champagne 35%; focus pours the rule to full gold with a small-caps floating label',
      navigation: 'Thin champagne rule nav with letterspaced small caps; the active link carries a foil dot',
      modals: 'Noir invitation card with double 1px champagne frame and rgba(10,7,5,.72) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 48 / 80 / 136 / 208',
      paddingScale: '20 / 36 / 56',
      grid: 'Centered 1020px with editorial 5:7 feature spreads; measure 640px',
    },
    motion: {
      pageLoad: 'The room lights up: foil text fades in first, cards follow at 80ms intervals',
      hoverStates: 'Foil brightens and rules pour — 220ms, never bouncy',
      transitions: 'ease-in-out with long tails; luxury never snaps',
      scroll: 'Sections candle-fade: 12px rise with a warm shadow bloom',
    },
    accessibility:
      'Cream on noir 13.9:1; champagne on noir 8.7:1. Foil gradients keep a 7:1 average contrast. Focus is a 2px champagne outline offset 3px. Gradient text has solid-color fallback via background-clip support queries.',
    responsive:
      'Spreads stack cream-first under 880px; the rule nav condenses to a champagne dot strip. Display clamps 2.2rem→4.1rem.',
    codeExample:
      '<header class="noir">\n  <p class="over">EVENING SERVICE</p>\n  <h1>The last pour<br/><em>of the season.</em></h1>\n</header>',
    accent: '#d9b47c',
    motif: 'serif-italic-hero',
    layout: 'centered',
    useCases: ['Fashion', 'Events', 'Restaurant'],
    signatureCss: `
.dv-btn { border-radius: 2px; background: linear-gradient(100deg,#e8cfa4,#c89a5e); }
.dv-card { border: 1px solid rgba(217,180,124,.25); background: #201812; }
.dv-hero h1 em { background: linear-gradient(100deg,#e8cfa4,#c89a5e); -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic; }`,
    author: 'Ottilie von Falk',
    createdAt: '2026-08-16',
    popularity: 86,
    trending: true,
  },
  {
    id: 'pearl-hotel',
    name: 'Pearl Hotel',
    category: 'Luxury',
    tags: ['hotel', 'pearl', 'hospitality', 'marble'],
    description: 'Grand-hotel hospitality in pearl, marble gray, and quiet brass.',
    designPhilosophy:
      'The lobby at check-in: marble floors, pearl light, brass fixtures, and staff who never rush you. The interface hosts. Wayfinding is generous, imagery is framed like commissioned photography, and every interaction ends with a confirmation as courteous as a concierge.',
    designDetails:
      'Pearl #f7f4ef with marble #e6e1d8, ink #262219, and aged brass #a08347. Playfair Display writes the room numbers; Source Sans 3 handles the service copy. Cards are marble panels with 1px brass keylines and 14px radius — grand but not gilded. Shadows are soft key light from the left, always.',
    colors: {
      primary: '#a08347',
      secondary: '#3a352a',
      accent: '#8fa5a0',
      neutral: '#e6e1d8',
      background: '#f7f4ef',
      text: '#262219',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Source Sans 3',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 62',
      lineHeights: 'Display 1.18, body 1.6',
      letterSpacing: 'Display 0.01em, labels 0.12em uppercase',
    },
    components: {
      primary:
        'Aged-brass #a08347 button, 3px radius, pearl text, weight 600; hover buffs to #b3945a with a soft left key-light shadow',
      secondary: 'Marble button with 1px brass keyline and ink text; hover lifts 2px on the key light',
      tertiary: 'Ink link with a brass concierge underline that draws left→right',
      radius: '3px controls, 14px cards — grand-hotel millwork',
      hover: 'Key-light shadows bloom from the left, 240ms; never a bounce',
      cards: 'Marble panels: #fbf9f5, 1px rgba(160,131,71,.4) keyline, 14px radius, 28px padding, brass suite number top-right',
      forms: 'Check-in fields: white inset on marble, 1px #d8d2c6, focus ring brass 2px, labels small-caps above',
      navigation: 'Grand lobby bar: centered brass monogram, letterspaced links, thin double rule beneath',
      modals: 'Pearl concierge card with double brass rule header and rgba(38,34,25,.5) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 44 / 76 / 128 / 200',
      paddingScale: '20 / 36 / 60',
      grid: '12-col 1220px; suite cards in 2-col rhythm with 28px gaps; measure 660px',
    },
    motion: {
      pageLoad: 'Doors open: hero curtain-fades, cards arrive in suite order, 90ms apart',
      hoverStates: 'Key lights and underline draws, 240ms — service pacing',
      transitions: 'ease-in-out; every motion ends at rest, never mid-gesture',
      scroll: 'Section headers arrive with a small brass rule extend',
    },
    accessibility:
      'Ink on pearl 12.8:1; brass on pearl 3.9:1 reserved for large text and keylines — button text is pearl on brass at 4.6:1. Focus is a 2px brass ring. Suite numbers decorative; real headings carry the semantics.',
    responsive:
      'Suite cards stack with brass numbers kept; the lobby bar folds into a monogram menu under 860px. Display clamps 2.1rem→3.9rem.',
    codeExample:
      '<header class="lobby">\n  <p class="wing">EAST WING · SUITE 12</p>\n  <h1>Arrive as a guest,<br/><em>leave as a regular.</em></h1>\n</header>',
    accent: '#a08347',
    motif: 'soft-shadows',
    layout: 'split-hero',
    useCases: ['Travel', 'Real Estate', 'Restaurant'],
    signatureCss: `
.dv-card { border-radius: 14px; border: 1px solid rgba(160,131,71,.4); background: #fbf9f5; }
.dv-btn { border-radius: 3px; }
.dv-hero h1 em { color: #a08347; font-style: italic; }`,
    author: 'Colette Amara',
    createdAt: '2026-08-09',
    popularity: 80,
  },
  {
    id: 'opera-box',
    name: 'Opera Box',
    category: 'Luxury',
    tags: ['opera', 'velvet', 'theatre', 'plum'],
    description: 'Velvet plum, gilt proscenium, and type that performs.',
    designPhilosophy:
      'Every page is a box seat. Velvet plum walls, gilt frames around the stars of the show, and a spotlight that moves with the cursor. Drama is choreographed: overtures fade, arias bloom, and the house lights never blind.',
    designDetails:
      'Velvet #2c1220 walls with gilt #cfa34c proscenium details, rose #b76e79 intermissions, and ivory #f5eddc programme copy. Playfair Display italic performs headlines; Karla sets the programme notes. Gilt appears as double-rule frames and a 2px spotlight ring on interactive elements. Backgrounds carry a barely-there radial spotlight.',
    colors: {
      primary: '#cfa34c',
      secondary: '#3d1a2e',
      accent: '#b76e79',
      neutral: '#4a2439',
      background: '#2c1220',
      text: '#f5eddc',
    },
    typography: {
      displayFont: 'Playfair Display',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',
      lineHeights: 'Display 1.1, body 1.62',
      letterSpacing: 'Display 0, programme 0.14em uppercase',
    },
    components: {
      primary:
        'Gilt #cfa34c button, 2px radius, velvet text, weight 700; hover raises a 6px spotlight shadow beneath',
      secondary: 'Velvet-deep button with 1px gilt border at 50%; the border sharpens on hover',
      tertiary: 'Rose italic link with gilt hairline; hover exchanges to ivory',
      radius: '2px controls, 4px frames — proscenium geometry',
      hover: 'Spotlight ring tightens around the hovered element, 200ms; curtains of color wipe 240ms',
      cards: 'Programme pages: #341727 with double 1px gilt frames (2px gap), 26px padding, rose act numbers',
      forms: 'Programme fields: underline on velvet, gilt focus rule, small-caps labels',
      navigation: 'Gilt double-rule bar with uppercase programme links; the active act is ivory',
      modals: 'House programme card with triple gilt rule header and rgba(20,8,15,.78) scrim',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '20 / 44 / 76 / 128 / 200',
      paddingScale: '20 / 32 / 52',
      grid: 'Centered 1000px; acts alternate full-bleed velvet with framed 2-col spreads',
    },
    motion: {
      pageLoad: 'Curtain rise: content fades up 16px with a spotlight sweep, 420ms',
      hoverStates: 'Spotlight rings and curtain wipes, 200–240ms',
      transitions: 'ease-in-out; arias bloom, never pop',
      scroll: 'Acts cross-fade like scene changes; no sliding scenery',
    },
    accessibility:
      'Ivory on velvet 12.4:1; gilt on velvet 7.2:1. Focus is a 2px gilt ring plus the spotlight ring for pointer users. The cursor spotlight is pointer-only and disabled under reduced-motion.',
    responsive:
      'Framed spreads stack gilt-frame-first under 860px; the programme bar becomes an act-select dropdown. Display clamps 2.2rem→4.4rem.',
    codeExample:
      '<section class="act">\n  <p class="act-no">ACT II</p>\n  <h1>The voice that<br/><em>holds the house.</em></h1>\n</section>',
    accent: '#cfa34c',
    motif: 'serif-italic-hero',
    layout: 'magazine',
    useCases: ['Events', 'Music', 'Fashion'],
    signatureCss: `
.dv-card { border: 1px solid #cfa34c; outline: 1px solid rgba(207,163,76,.5); outline-offset: 2px; background: #341727; }
.dv-btn { border-radius: 2px; }
.dv-hero h1 em { color: #b76e79; font-style: italic; }`,
    author: 'Fiorella Marchetti',
    createdAt: '2026-07-31',
    popularity: 78,
  },
  {
    id: 'obsidian-atelier',
    name: 'Obsidian Atelier',
    category: 'Luxury',
    tags: ['obsidian', 'atelier', 'platinum', 'couture'],
    description: 'Couture black-on-black with platinum seams and a jeweler’s precision.',
    designPhilosophy:
      'A couture house after hours: obsidian surfaces on obsidian, separated only by platinum seams and the occasional gemstone accent. Craft shows in the seams — hairline rules, exact baselines, and jewelry-grade spacing that never approximates.',
    designDetails:
      'Obsidian #0c0c0e on #121215 with platinum #c7c9d1 hairlines and a single gem #7d5ba6 reserved for one jewel per view. Bricolage Grotesque 200-weight display whispers at huge sizes; Manrope handles the atelier notes. Cards differ from the background by 4% luminance and a 1px seam — luxury through precision, not contrast.',
    colors: {
      primary: '#c7c9d1',
      secondary: '#121215',
      accent: '#7d5ba6',
      neutral: '#232329',
      background: '#0c0c0e',
      text: '#eceef2',
    },
    typography: {
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Manrope',
      scale: '12 / 14 / 16 / 19 / 24 / 33 / 64',
      lineHeights: 'Display 1.08, body 1.66',
      letterSpacing: 'Display -0.02em, labels 0.22em uppercase',
    },
    components: {
      primary:
        'Platinum seam button: transparent with 1px #c7c9d1 border, platinum text, weight 600; hover fills platinum with obsidian text in 260ms',
      secondary: 'Obsidian-on-obsidian button (#1a1a1f) whose seam brightens 15% on hover',
      tertiary: 'Atelier note link — 0.22em uppercase micro-label with a gem dot on hover',
      radius: '0px buttons, 2px cards — cut stone edges',
      hover: 'Seams brighten and fills pour like liquid metal, 260ms',
      cards: 'Seam panels: #121215 on #0c0c0e with 1px #232329 hairline, flush corners, 32px padding; the featured piece carries a 2px gem left rule',
      forms: 'Seam-field inputs: 1px hairline bottom, platinum focus, labels floating in micro-caps',
      navigation: 'Hairline top seam with 0.22em uppercase links; the current atelier carries a platinum underline at 1px exact',
      modals: 'Full-bleed obsidian with a platinum hairline frame and rgba(5,5,6,.8) scrim',
    },
    spacing: {
      baseUnit: '4px',
      marginScale: '24 / 48 / 84 / 140 / 216',
      paddingScale: '20 / 40 / 64',
      grid: '12-col 1140px with strict 24px gutter; hero spreads at 7:5',
    },
    motion: {
      pageLoad: 'Pieces are unveiled: opacity 0→1 over 480ms with a 1px seam draw',
      hoverStates: 'Liquid-metal fills at 260ms; seams brighten 180ms',
      transitions: 'cubic-bezier(.4,0,.2,1); measured as a fitting, not a fitting-room',
      scroll: 'Lookbook sections reveal with 20px parallax on the imagery only',
    },
    accessibility:
      'Text on obsidian 15.1:1; platinum on obsidian 12.3:1; gem 4.7:1 for large UI. The 4% card luminance split is paired with a hard hairline so panels never rely on subtle contrast alone. Focus is a 2px platinum offset ring.',
    responsive:
      'Lookbook parallax disables under 760px; spreads stack with seams kept. Display clamps 2.3rem→4rem.',
    codeExample:
      '<header class="atelier">\n  <p class="seam">COLLECTION VII</p>\n  <h1>Cut once.<br/><em>Measured twice.</em></h1>\n</header>',
    accent: '#c7c9d1',
    motif: 'mono-labels',
    layout: 'split-hero',
    useCases: ['Fashion', 'Portfolio', 'AI/ML'],
    signatureCss: `
.dv-card { background: #121215; border: 1px solid #232329; }
.dv-btn { border-radius: 0; border: 1px solid #c7c9d1; background: transparent; transition: background .26s ease; }
.dv-btn-primary:hover { background: #c7c9d1; color: #0c0c0e; }
.dv-kicker { letter-spacing: .22em; text-transform: uppercase; font-size: 11px; }`,
    author: 'Iva Reno',
    createdAt: '2026-08-24',
    popularity: 84,
  },
  {
    id: 'heritage-linen',
    name: 'Heritage Linen',
    category: 'Luxury',
    tags: ['heritage', 'linen', 'guild', 'olive'],
    description: 'Guild-hall heritage: linen paper, olive wax seals, engraved rules.',
    designPhilosophy:
      'A craft guild’s charter, typeset for the web. Linen paper, olive-gold wax, engraved copperplate rules, and crests that stand for real standards. Heritage is presented as provenance: every claim dated, every rule footnoted, nothing gilded dishonestly.',
    designDetails:
      'Linen #f3eee1 with walnut ink #33291c, olive-gold #7a6a2f seals, and oxblood #6e2b2b ribbons. EB Garamond engraves the headlines; Bitter sets the charter text. Rules are double 1px copperplate lines; seals are circular wax stamps with slight rotation. Cards are charter pages with crest corners.',
    colors: {
      primary: '#7a6a2f',
      secondary: '#4a3f2a',
      accent: '#6e2b2b',
      neutral: '#ddd3ba',
      background: '#f3eee1',
      text: '#33291c',
    },
    typography: {
      displayFont: 'EB Garamond',
      bodyFont: 'Bitter',
      scale: '13 / 15 / 17 / 20 / 26 / 34 / 58',
      lineHeights: 'Display 1.2, body 1.62',
      letterSpacing: 'Display 0.01em, small caps 0.12em',
    },
    components: {
      primary:
        'Olive-gold wax button — circular seal motif flattened to a plate, 2px radius, linen text, weight 600; press imprints 1px deeper',
      secondary: 'Charter button with double 1px walnut rules; hover inks the inner rule olive',
      tertiary: 'Footnote link with an oxblood superscript and dotted underline',
      radius: '2px controls, 3px pages; seals alone are circles',
      hover: 'Rules ink in and seals rotate −2°, 200ms; paper never lifts',
      cards: 'Charter pages: #f8f4e9 with double-rule top, crest corner marks, 28px padding, oxblood ribbon bookmark on featured',
      forms: 'Registry fields: 1px walnut rules with small-caps labels; focus re-inks olive',
      navigation: 'Copperplate rule bar with small-caps links and a centered crest; the active link carries a wax dot',
      modals: 'Charter sheet with a wax seal header and walnut scrim rgba(51,41,28,.5)',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '24 / 44 / 72 / 120 / 192',
      paddingScale: '20 / 32 / 52',
      grid: 'Centered 940px charter column; registries open to 12-col 1180px',
    },
    motion: {
      pageLoad: 'The charter unrolls: rules draw left→right, text fades after, 360ms',
      hoverStates: 'Inking rules and seal rotations, 200ms',
      transitions: 'ease; deliberate as an engraver’s stroke',
      scroll: 'Double rules extend as sections enter, like ruled ledgers filling',
    },
    accessibility:
      'Walnut on linen 11.6:1; olive 5.8:1 at UI sizes. Seal shapes carry text labels; the rotation is decorative. Focus is a 2px olive outline. Small caps keep sentence-case text underneath.',
    responsive:
      'Registries collapse to ruled lists under 800px; the crest bar becomes a wax-dot menu. Display clamps 2rem→3.6rem.',
    codeExample:
      '<article class="charter">\n  <h1>Standards, kept<br/><em>since the first stamp.</em></h1>\n  <p class="clause">Clause IV — provenance on every piece.</p>\n</article>',
    accent: '#7a6a2f',
    motif: 'underline-accent',
    layout: 'editorial',
    useCases: ['Nonprofit', 'Education', 'Real Estate'],
    signatureCss: `
.dv-card { background: #f8f4e9; border-top: 3px double #7a6a2f; border-bottom: 1px solid #ddd3ba; }
.dv-btn { border-radius: 2px; }
.dv-hero h1 { font-variant: small-caps; }`,
    author: 'Alba Ferreiro',
    createdAt: '2026-07-26',
    popularity: 75,
  },
