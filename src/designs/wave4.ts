import type { DesignSystem } from '../types'

/**
 * Wave 4 — nine systems aimed at the thinnest website-type buckets, each
 * with an opinion the vault didn't have yet. Same contract as every other
 * file: tokens, rules, and honest opinions.
 */
export const wave4Designs: DesignSystem[] = [
  {
    id: 'cartogrid',
    name: 'Cartogrid',
    category: 'Professional',
    tags: ['crm', 'pipeline', 'records', 'moss', 'b2b'],
    description: 'A field-notes CRM: records as terrain, deals as waypoints.',
    designPhilosophy:
      'Sales software borrows map conventions: the pipeline is terrain, every account is a waypoint, and the rep is the navigator. Sage-and-ochre on warm paper keeps the tool humane during a nine-hour prospecting day. Nothing blinks, nothing bounces — the map is already moving.',
    colors: {
      primary: '#4a6d52',
      secondary: '#b0863f',
      accent: '#d97d54',
      neutral: '#e3ded2',
      background: '#f5f3ee',
      text: '#23281f',
    },
    typography: {
      displayFont: 'Karla',
      bodyFont: 'Manrope',
      scale: '13 / 14 / 16 / 20 / 26 / 36 / 52',
      lineHeights: 'Display 1.15, body 1.6',
      letterSpacing: 'Display 0.01em, table heads 0.08em uppercase',
    },
    components: {
      primary: 'Solid moss #4a6d52, paper text, radius 4px, padding 10px 22px, 600',
      secondary: '1px #c9c2b2 border, transparent, ink text',
      tertiary: 'Underlined moss text link, underline offset 3px',
      radius: '4px controls, 6px cards',
      hover: 'Row rule thickens 3→5px and background warms, 160ms',
      cards: 'Flat paper cards, 1px #ddd6c6 border, tiny 2px stage-colored top rule',
      forms: 'Paper inputs, 1px #c9c2b2, moss caret, 2px moss focus ring',
      navigation: 'Left rail with waypoint dots; visited stages filled',
      modals: 'Paper sheet, 1px ink border at 20%, dimmed terrain behind',
    },
    accent: '#4a6d52',
    motif: 'swiss-grid',
    layout: 'dashboard',
    useCases: ['CRM', 'Project Management', 'Productivity'],
    signatureCss: `
.dv-card { border-top: 2px solid transparent; }
.dv-card:hover { border-top-color: #4a6d52; }
.dv-row-rule { border-left: 3px solid #4a6d52; padding-left: 12px; }
.dv-kicker { letter-spacing: .08em; text-transform: uppercase; color: #b0863f; }`,
    author: 'Tove Lindqvist',
    createdAt: '2026-09-16',
    popularity: 72,
  },
  {
    id: 'echo-loft',
    name: 'Echo Loft',
    category: 'Creative',
    tags: ['podcast', 'studio', 'audio', 'amber', 'night'],
    description: 'Night-studio warmth for podcasts that record after midnight.',
    designPhilosophy:
      'A podcast site should sound like the show: warm, unhurried, a little nocturnal. Amber console lights on near-black, waveforms as the only ornament, and episode art given the wall space a gallery would. The player is the homepage — everything else is the green room.',
    colors: {
      primary: '#e8b04b',
      secondary: '#7c9ec9',
      accent: '#d96c5f',
      neutral: '#2a2c33',
      background: '#191a1f',
      text: '#ecebe6',
    },
    typography: {
      displayFont: 'Nunito',
      bodyFont: 'Nunito',
      scale: '14 / 16 / 18 / 22 / 30 / 44 / 64',
      lineHeights: 'Display 1.12, body 1.65',
      letterSpacing: 'Display -0.005em, timecodes 0.06em',
    },
    components: {
      primary: 'Solid amber #e8b04b, ink text, radius 999px pill, padding 10px 24px, 700',
      secondary: '1px #3a3d47 border, transparent, warm-white text',
      tertiary: 'Amber text link with waveform underline on hover',
      radius: '999px pills, 10px panels',
      hover: 'Amber wash at 12% rises, waveform bar under links draws in, 220ms',
      cards: '#2a2c33 panels, 1px #3a3d47, episode art full-bleed top',
      forms: 'Dark inputs #212228, 1px #3a3d47, amber caret',
      navigation: 'Slim top bar, episode counter as a live badge',
      modals: 'Dimmed to 70% black, panel slides up like a mixing desk fader',
    },
    accent: '#e8b04b',
    stage: '#141519',
    motif: 'wave-section',
    layout: 'editorial',
    useCases: ['Podcast', 'Streaming', 'Music'],
    signatureCss: `
.dv-wave { height: 4px; background: repeating-linear-gradient(90deg, #e8b04b 0 3px, transparent 3px 7px); opacity: .7; }
.dv-card { background: #2a2c33; }
.dv-card:hover { background: color-mix(in srgb, #e8b04b 10%, #2a2c33); }
.dv-pill { border-radius: 999px; }`,
    author: 'Mo Okafor',
    createdAt: '2026-09-16',
    popularity: 81,
    trending: true,
  },
  {
    id: 'quiet-hours',
    name: 'Quiet Hours',
    category: 'Organic',
    tags: ['mental-health', 'therapy', 'calm', 'sage', 'clay'],
    description: 'Therapy-practice calm: sage, clay, and permission to slow down.',
    designPhilosophy:
      'Mental-health software earns trust by not shouting. Quiet Hours borrows the therapy room: warm paper, sage that exhales, clay for the human touches. Type is generous, motion is slow on purpose, and every screen asks one question at a time — because that is how sessions actually work.',
    colors: {
      primary: '#6b8f71',
      secondary: '#a4b8c4',
      accent: '#d8a48f',
      neutral: '#e6e2d8',
      background: '#f2f1ed',
      text: '#33413c',
    },
    typography: {
      displayFont: 'Bitter',
      bodyFont: 'Source Sans 3',
      scale: '15 / 17 / 19 / 23 / 28 / 40 / 56',
      lineHeights: 'Display 1.2, body 1.7, questions 2.2',
      letterSpacing: 'Display 0, labels 0.05em',
    },
    components: {
      primary: 'Solid sage #6b8f71, paper text, radius 12px, padding 12px 28px, 600',
      secondary: '1px #d8d2c4 border, transparent, moss-text',
      tertiary: 'Sage text link, thickens underline over 200ms',
      radius: '12px controls, 14px cards',
      hover: 'Card lifts 1px and border warms, 260ms — nothing snaps',
      cards: 'Rounded 14px, 1px #e0dcd2, leaf glyph corner mark',
      forms: 'Paper inputs on white, 1px #d8d2c4, sage focus ring, huge 14px padding',
      navigation: 'Almost invisible: text links in the header, no bars',
      modals: 'Paper sheet fading in 300ms, questions set like the main page',
    },
    accent: '#6b8f71',
    motif: 'soft-shadows',
    layout: 'centered',
    useCases: ['Mental Health', 'Wellness', 'Health'],
    signatureCss: `
.dv-ask { line-height: 2.2; font-weight: 500; }
.dv-card { border-radius: 14px; }
.dv-leaf::before { content: '❧ '; color: #d8a48f; }
.dv-btn-primary { border-radius: 12px; }`,
    author: 'Wren Halloway',
    createdAt: '2026-09-16',
    popularity: 84,
    trending: true,
  },
  {
    id: 'ever-current',
    name: 'Ever & Current',
    category: 'Playful',
    tags: ['pets', 'shop', 'friendly', 'terracotta', 'cream'],
    description: 'A pet shop with wet-nose energy and shopkeeper warmth.',
    designPhilosophy:
      'Pet people are decorative people — the site should feel like the collar aisle. Terracotta and cream with hand-drawn sticker energy, but the commerce underneath is serious: honest prices, real reviews, and a cart that never loses your place. Playful on the surface, dependable underneath.',
    colors: {
      primary: '#e2725b',
      secondary: '#7ca982',
      accent: '#f2c14e',
      neutral: '#f3e5d4',
      background: '#fff8ef',
      text: '#3d2f2a',
    },
    typography: {
      displayFont: 'Hi Melody',
      bodyFont: 'Fredoka',
      scale: '15 / 17 / 19 / 24 / 32 / 46 / 64',
      lineHeights: 'Display 1.1, body 1.6',
      letterSpacing: 'Display 0, sticker labels 0.04em',
    },
    components: {
      primary: 'Solid terracotta #e2725b, cream text, radius 999px, padding 12px 26px, 600',
      secondary: '2px cocoa border, cream fill, cocoa text, 3px hard shadow',
      tertiary: 'Cocoa text link with paw-print bullet',
      radius: '999px buttons, 16px cards',
      hover: 'Card tilts -1deg with paw sticker reveal, 240ms spring',
      cards: 'Cream cards, 2px cocoa border, 3px cocoa hard shadow, die-cut badges',
      forms: 'Cream inputs, 2px cocoa border, terracotta focus ring',
      navigation: 'Pill nav with a wagging underline on the active item',
      modals: 'Die-cut cream sheet with scalloped top edge',
    },
    accent: '#e2725b',
    motif: 'rotated-stickers',
    layout: 'hero-cards',
    useCases: ['Pets', 'E-commerce', 'Community'],
    signatureCss: `
.dv-card { border: 2px solid #3d2f2a; box-shadow: 3px 3px 0 #3d2f2a; border-radius: 16px; }
.dv-card:hover { transform: rotate(-1deg); }
.dv-sticker { transform: rotate(6deg); background: #f2c14e; border-radius: 999px; padding: 2px 10px; font-weight: 600; }
.dv-btn-primary { border-radius: 999px; }`,
    author: 'Priya Nandakumar',
    createdAt: '2026-09-16',
    popularity: 76,
  },
  {
    id: 'meridian-will',
    name: 'Meridian Will',
    category: 'Professional',
    tags: ['legal', 'estate', 'trust', 'teal', 'bronze'],
    description: 'Estate law with the weight of a ledger and none of the dust.',
    designPhilosophy:
      'Wills and trusts are promises with legal teeth. The design borrows from estate ledgers: deep teal ink, bronze rule-work, columns that balance like a balance sheet. It must feel expensive to be wrong and reassuring to be right — so the tone is measured, the type is serious, and the empathy is in the copy, not the confetti.',
    colors: {
      primary: '#234e52',
      secondary: '#8a6d3b',
      accent: '#b23a48',
      neutral: '#e8e6df',
      background: '#faf9f6',
      text: '#1f2a30',
    },
    typography: {
      displayFont: 'Zilla Slab',
      bodyFont: 'Merriweather',
      scale: '14 / 17 / 19 / 23 / 30 / 44 / 60',
      lineHeights: 'Display 1.18, body 1.7',
      letterSpacing: 'Display 0.005em, small-caps labels 0.1em',
    },
    components: {
      primary: 'Solid teal #234e52, alabaster text, radius 2px, padding 12px 28px, 500',
      secondary: '1px teal border, transparent, teal text',
      tertiary: 'Bronze small-caps link with hairline underline',
      radius: '2px controls — squared like a document, 4px cards',
      hover: 'Bronze rule grows under the control, 200ms',
      cards: 'White documents, 1px #ddd9cd, bronze 1px top rule, drop-cap numerals',
      forms: 'White inputs with underline-only borders — a ledger line',
      navigation: 'Bronze hairline under the header; small-caps practice areas',
      modals: 'Document sheet with a bronze seal corner and hairline border',
    },
    accent: '#234e52',
    motif: 'quote-band',
    layout: 'magazine',
    useCases: ['Legal', 'Insurance', 'Accounting'],
    signatureCss: `
.dv-ledger { border-top: 1px solid #8a6d3b; padding-top: 12px; }
.dv-numeral { font-family: 'Zilla Slab'; font-size: 1.6em; color: #8a6d3b; }
.dv-table-money { font-variant-numeric: tabular-nums; }
.dv-btn-primary { border-radius: 2px; }`,
    author: 'Edmund Grieve',
    createdAt: '2026-09-16',
    popularity: 69,
  },
  {
    id: 'undercroft-games',
    name: 'Undercroft Games',
    category: 'Retro',
    tags: ['gaming', 'indie', 'pixel', 'dungeon', 'arcade'],
    description: 'Indie game studio site with dungeon-crawl pixel soul.',
    designPhilosophy:
      'Indie studios promise worlds, so the site should feel like entering one. Undercroft runs on pixel rules: a strict 8px grid, Silkscreen for anything that wants to feel like a HUD, CRT violet glow on deep dungeon dark. Menus behave like game menus — keyboard first, hover states that chirp (visually), and a health bar instead of a progress bar.',
    colors: {
      primary: '#7c5cff',
      secondary: '#38e0c8',
      accent: '#ff5c8a',
      neutral: '#23253a',
      background: '#12131a',
      text: '#e8e6f7',
    },
    typography: {
      displayFont: 'Silkscreen',
      bodyFont: 'Oxanium',
      scale: '12 / 14 / 16 / 20 / 28 / 40 / 56',
      lineHeights: 'Display 1.3 (pixel needs air), body 1.6',
      letterSpacing: 'HUD labels 0.08em, display 0',
    },
    components: {
      primary: 'Solid violet #7c5cff, dungeon text-shadow glow, radius 0, 2px border, 700',
      secondary: '2px #3a3d5c border, transparent, HUD-white text, radius 0',
      tertiary: 'Aqua text link with blinking caret on hover',
      radius: '0px everywhere — pixel purity',
      hover: 'Glow pulse + 1px inward border shift, 120ms — game-menu speed',
      cards: '#23253a panels, 2px #3a3d5c, notched clip-path corners on featured',
      forms: 'Dark inputs, 2px borders, violet caret, no radius',
      navigation: 'HUD bar: inventory-style slots for nav items, keyboard hints shown',
      modals: 'Dialog box with a nameplate — NPC conversation styling',
    },
    accent: '#7c5cff',
    stage: '#0d0e13',
    motif: 'pixel-grid',
    layout: 'full-bleed',
    useCases: ['Gaming', 'Streaming', 'Community'],
    signatureCss: `
.dv-hud { font-family: 'Silkscreen'; letter-spacing: .08em; }
.dv-card { border: 2px solid #3a3d5c; border-radius: 0; }
.dv-glow { box-shadow: 0 0 14px color-mix(in srgb, #7c5cff 55%, transparent); }
.dv-btn-primary { border-radius: 0; text-shadow: 0 0 8px rgba(0,0,0,.5); }`,
    author: 'Nia Vergroot',
    createdAt: '2026-09-16',
    popularity: 83,
    trending: true,
  },
  {
    id: 'atlas-waypoints',
    name: 'Atlas Waypoints',
    category: 'Minimalism',
    tags: ['travel', 'booking', 'stays', 'sea', 'dune'],
    description: 'Stay-booking with the calm of a well-drawn nautical chart.',
    designPhilosophy:
      'Booking is stressful, so the interface borrows from nautical charts: enough information to be safe, drawn calmly enough to read at a glance. Sea-teal on fog, dune highlights, enormous legible numerals for price and nights. One screen, one decision — dates, then place, then confirm.',
    colors: {
      primary: '#32437b',
      secondary: '#e3a857',
      accent: '#ef6f4c',
      neutral: '#dce8ea',
      background: '#f0f4f5',
      text: '#16323f',
    },
    typography: {
      displayFont: 'Jost',
      bodyFont: 'Be Vietnam Pro',
      scale: '14 / 16 / 18 / 22 / 30 / 44 / 64',
      lineHeights: 'Display 1.1, body 1.65',
      letterSpacing: 'Display -0.01em, prices tabular',
    },
    components: {
      primary: 'Solid chart-navy #32437b, fog text, radius 8px, padding 12px 26px, 600',
      secondary: '1px #b9cdd1 border, transparent, deep-sea text',
      tertiary: 'Sea-teal link with waypoint-dot prefix',
      radius: '8px controls, 12px cards',
      hover: 'Card border deepens and waypoint dot fills, 180ms',
      cards: 'White cards, 1px #d5e2e4, availability waypoint dot',
      forms: 'White inputs, 1px #b9cdd1, sea-teal caret, date squares 40px',
      navigation: 'Chart-rule header: 1px line, uppercase micro-labels',
      modals: 'White chart sheet, hairline border, dimmed chart behind',
    },
    accent: '#32437b',
    motif: 'pill-nav',
    layout: 'split-hero',
    useCases: ['Booking', 'Travel', 'Hotel'],
    signatureCss: `
.dv-waypoint { width: 8px; height: 8px; border-radius: 999px; background: #32437b; display: inline-block; }
.dv-price { font-variant-numeric: tabular-nums; }
.dv-card { border-radius: 12px; }
.dv-chart-rule { border-bottom: 1px solid #b9cdd1; }`,
    author: 'Sena Akerlund',
    createdAt: '2026-09-16',
    popularity: 77,
  },
  {
    id: 'bounty-yard',
    name: 'Bounty Yard',
    category: 'Creative',
    tags: ['marketplace', 'makers', 'no-code', 'trading', 'honest'],
    description: 'A maker marketplace that trades like a farmers market.',
    designPhilosophy:
      'Marketplaces rot when they feel like casinos. Bounty Yard borrows the farmers market: chalk prices, stamp approvals, produce that shows its face. Sellers get real storefronts; buyers get honest scarcity — the counter counts down because the thing is actually going, not because a timer said so.',
    colors: {
      primary: '#cf5b2e',
      secondary: '#1f7a68',
      accent: '#f0b429',
      neutral: '#eee7db',
      background: '#f7f5f0',
      text: '#201d1a',
    },
    typography: {
      displayFont: 'Outfit',
      bodyFont: 'Karla',
      scale: '14 / 16 / 18 / 22 / 30 / 42 / 58',
      lineHeights: 'Display 1.05, body 1.6',
      letterSpacing: 'Display 0.02em uppercase, tags 0.05em',
    },
    components: {
      primary: 'Solid market #cf5b2e, flour text, radius 6px, padding 11px 24px, 700',
      secondary: '2px orchard border, flour fill, orchard text, 2px hard shadow',
      tertiary: 'Trade-green link with stamp-dot bullet',
      radius: '6px buttons, 10px stalls',
      hover: 'Stall lifts 2px with hard shadow growing to 4px, 180ms',
      cards: 'Flour cards, 2px orchard border, chalk price chip, squiggle underline',
      forms: 'Flour inputs, 2px orchard border, market caret',
      navigation: 'Aisle tabs: Produce / Goods / Services, chalk-style active',
      modals: 'Stamp-approved flour sheet, slightly rotated 0.4deg',
    },
    accent: '#cf5b2e',
    motif: 'ticker-marquee',
    layout: 'asymmetric',
    useCases: ['Marketplace', 'No-Code', 'Startup'],
    signatureCss: `
.dv-chalk { background: #201d1a; color: #f7f5f0; border-radius: 4px; padding: 2px 10px; transform: rotate(-1deg); }
.dv-gone { position: absolute; border: 3px solid #b23a48; color: #b23a48; transform: rotate(-12deg); padding: 2px 12px; font-weight: 700; }
.dv-stall { border: 2px solid #201d1a; box-shadow: 2px 2px 0 #201d1a; }
.dv-stall:hover { box-shadow: 4px 4px 0 #201d1a; }`,
    author: 'Cassie Motswari',
    createdAt: '2026-09-16',
    popularity: 74,
  },
  {
    id: 'vow-and-verse',
    name: 'Vow & Verse',
    category: 'Luxury',
    tags: ['wedding', 'events', 'invitations', 'script', 'rose'],
    description: 'Wedding and events: hand-lettered romance with engraved bones.',
    designPhilosophy:
      'A wedding site is an invitation that happens to be a website. Vow & Verse pairs flowing script headlines with engraved-plate structure underneath — rose ink on blush paper, gold-leaf rules, generous margins like a printed program. The romance is in the lettering; the usability is in the grid holding it steady.',
    colors: {
      primary: '#b76e79',
      secondary: '#8d7b68',
      accent: '#d4b26a',
      neutral: '#f1e4e0',
      background: '#fbf7f4',
      text: '#4a3540',
    },
    typography: {
      displayFont: 'Mrs Saint Delafield',
      bodyFont: 'Marcellus',
      scale: '15 / 17 / 19 / 24 / 34 / 52 / 72',
      lineHeights: 'Display 1.0 (script), body 1.75',
      letterSpacing: 'Script 0.02em, engraved labels 0.18em uppercase',
    },
    components: {
      primary: 'Solid rose-gold #b76e79, blush text, radius 999px, padding 12px 32px, 400',
      secondary: '1px #d8c7bd border, blush fill, plum text, gold hairline inside',
      tertiary: 'Gold engraved small-caps link',
      radius: '999px buttons, 2px cards — engraved plates stay square',
      hover: 'Gold hairline brightens 30→60%, 240ms',
      cards: 'Blush plates, 1px gold hairline inset border, generous 32px padding',
      forms: 'Blush inputs with hairline underlines; RSVP fields numbered I. II. III.',
      navigation: 'Engraved small-caps spread with gold dots between items',
      modals: 'Program sheet: blush, double gold hairline, script heading',
    },
    accent: '#b76e79',
    motif: 'serif-italic-hero',
    layout: 'spotlight',
    useCases: ['Wedding', 'Events', 'Hotel'],
    signatureCss: `
.dv-script { font-family: 'Mrs Saint Delafield'; }
.dv-gold-frame { border: 1px solid color-mix(in srgb, #d4b26a 45%, transparent); outline: 1px solid color-mix(in srgb, #d4b26a 25%, transparent); outline-offset: 4px; }
.dv-engraved { letter-spacing: .18em; text-transform: uppercase; font-size: .8em; color: #8d7b68; }
.dv-btn-primary { border-radius: 999px; }`,
    author: 'Rosalind Hale',
    createdAt: '2026-09-16',
    popularity: 80,
  },
]
