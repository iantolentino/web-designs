import type { DesignSystem } from '../types'

export const historicalDesigns: DesignSystem[] = [
  {
    id: 'wabi-sabi',
    name: 'Wabi Sabi',
    category: 'Minimalism',
    tags: ['kintsugi', 'imperfect', 'earthen', 'faded', 'humane'],
    description: 'Kintsugi calm: faded earth, visible seams, honesty.',
    designPhilosophy:
      'Perfection is suspicious. Wabi-sabi design keeps the seams visible: mismatched neutrals, off-grid alignments of a few degrees, textures that admit wear. It is minimalism that forgives. For wellness, artisan goods, therapy platforms, and anything that wants to feel human rather than optimized.',
    designDetails:
      'Faded clay palette — ash #8c857c, ochre #c2a878, muted moss — on unbleached linen #f4f1ea. EB Garamond display (soft, warm); Karla body. Kintsugi gold seams: thin irregular gradient lines (linear-gradient with stops) that "repair" section breaks. Cards have uneven radii (12px 20px 14px 22px) and offset shadows like paper on paper.',
    colors: {
      primary: '#8c857c',
      secondary: '#c2a878',
      accent: '#9a8873',
      neutral: '#e5dfd3',
      background: '#f4f1ea',
      text: '#3f3a33',
    },
    typography: {
      displayFont: 'EB Garamond',
      bodyFont: 'Karla',
      scale: '13 / 15 / 17 / 21 / 27 / 36 / 52',
      lineHeights: 'Display 1.2, body 1.8',
      letterSpacing: 'Display 0.01em, labels 0.2em uppercase',
    },
    components: {
      primary: 'Solid ash #8c857c, linen text, uneven radius 12px 20px 14px 22px, padding 13px 30px, 500',
      secondary: '1px #c2a878 border, transparent, same radius',
      tertiary: 'Ochre text link with kintsugi underline (gradient) on hover',
      radius: 'Uneven: 12px 20px 14px 22px — deliberately imperfect',
      hover: 'Slow settle 400ms; shadows deepen like paper pressing',
      cards: 'Linen panels with off-center shadows (2px 4px 12px) and visible seam rules',
      forms: 'Underline inputs, warm grey focus, spaced labels',
      navigation: 'Quiet row, active link underlined by a gold seam',
      modals: 'Linen sheet with kintsugi seam down one side',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 48 / 88 / 160',
      paddingScale: '28 / 48 / 72',
      grid: 'Soft 12-col with intentional 1–2% offsets, 1100px',
    },
    motion: {
      pageLoad: 'Content arrives like breath: 700ms fade + 8px settle',
      hoverStates: '400ms settle; nothing springs',
      transitions: 'Slow, forgiving, 400–700ms',
      scroll: 'Sections settle into place (8px overshoot back), no parallax',
    },
    accessibility:
      '#3f3a33 on linen 10.4:1; linen on ash 4.7:1 at 500 weight. Focus 3px ochre outline. Imperfection is in decoration, never in contrast or semantics. Reduced-motion keeps simple fades.',
    responsive:
      'Offsets relax to aligned single column under 760px. Display clamps 2rem→3.25rem. Kintsugi seams persist as horizontal rules. Uneven radii simplify slightly on mobile.',
    codeExample:
      '<section class="teabowl">\n  <h1>Nothing here<br/>is <em>finished.</em></h1>\n  <p>Objects and software, mended with gold.</p>\n  <a class="seam-link" href="#">See the collection</a>\n</section>',
    accent: '#9a8873',
    motif: 'leaf-divider',
    layout: 'editorial',
    useCases: ['Health', 'Portfolio', 'E-commerce'],
    signatureCss: `
.dv-section + .dv-section::before { content: ''; display: block; height: 2px; margin-bottom: 2.5em; background: linear-gradient(90deg, transparent, #c2a878 18%, #8c857c 34%, #c2a878 52%, transparent 88%); }
.dv-card { border-radius: 12px 20px 14px 22px; box-shadow: 2px 4px 12px rgba(63,58,51,.1); }
.dv-hero h1 em { color: #8c857c; }
.dv-hero { text-align: left; padding-left: 6%; }`,
    author: 'Riko Tanaka',
    createdAt: '2026-08-24',
    popularity: 78,
  },
  {
    id: 'art-nouveau',
    name: 'Art Nouveau',
    category: 'Creative',
    tags: ['nouveau', 'muchа', 'whiplash', 'floral', 'orchid'],
    description: 'Mucha frames: whiplash vines, orchid tones, panels.',
    designPhilosophy:
      'The poster as total artwork. Whiplash vine ornaments, halo arches, ornamental type, and a palette of orchid, olive, and faded gilt. Structure and ornament are the same thing — borders bloom, frames grow. For perfumeries, teas, theaters, and brands that want elegance with tendrils.',
    designDetails:
      'Orchid cream #f3ecdf with olive #6b6b3a, muted mauve #9b6b7c, and faded gold. Cormorant Garamond display (italic in flourishes); Karla body. Halo arch behind heroes (radial gradient ring), vine borders via layered radial gradients on edges, ornamental corner fleurons ❦ ✦. Panel cards have arched tops and vine-ruled borders.',
    colors: {
      primary: '#9b6b7c',
      secondary: '#6b6b3a',
      accent: '#b8933e',
      neutral: '#e6dcc6',
      background: '#f3ecdf',
      text: '#3c3529',
    },
    typography: {
      displayFont: 'Cormorant Garamond',
      bodyFont: 'Karla',
      scale: '12 / 15 / 17 / 21 / 27 / 36 / 56',
      lineHeights: 'Display 1.1, body 1.7',
      letterSpacing: 'Display 0.02em, labels 0.2em uppercase',
    },
    components: {
      primary: 'Mauve #9b6b7c solid, cream text, radius 999px 999px 4px 4px (arched), padding 14px 34px, 500',
      secondary: '1px olive border, transparent, arched top',
      tertiary: 'Gold italic serif link with vine underline draw on hover',
      radius: 'Arched: 999px 999px 4px 4px frames; 2px cards',
      hover: 'Vine borders bloom (opacity 0.6→1) 300ms; gold deepens',
      cards: 'Cream panels with arched tops, vine-ruled double borders, corner ✦',
      forms: 'Underline inputs, mauve focus, small-caps labels',
      navigation: 'Arched center wordmark; hairline vines flanking links',
      modals: 'Halo-framed panel with vine corners and gold seal',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '16 / 40 / 80 / 152',
      paddingScale: '24 / 44 / 64',
      grid: 'Tall poster proportion: centered 980px, generous verticals',
    },
    motion: {
      pageLoad: 'Halo arch draws (scaleY) 500ms; vines fade in after',
      hoverStates: '300ms bloom effects; nothing snaps',
      transitions: 'Organic ease-in-out, 300–450ms',
      scroll: 'Vine borders grow along the scroll direction, subtly',
    },
    accessibility:
      '#3c3529 on cream 11.6:1; cream on mauve 5.8:1. Focus 3px mauve outline. Vines and fleurons aria-hidden. Ornaments never carry information.',
    responsive:
      'Arched frames become rounded tops under 640px. Display clamps 2.25rem→3.5rem. Vine borders simplify to double rules on small screens.',
    codeExample:
      '<section class="panneau">\n  <p class="maison">MAISON FLEUVE</p>\n  <h1>Teas of the <em>Evening</em> Garden</h1>\n  <a class="vine-link" href="#">Taste the collection</a>\n</section>',
    accent: '#9b6b7c',
    motif: 'leaf-divider',
    layout: 'centered',
    useCases: ['Fashion', 'E-commerce', 'Events'],
    signatureCss: `
.dv-hero h1 em { font-style: italic; color: #9b6b7c; }
.dv-logo { font-variant: small-caps; letter-spacing: .18em; }
.dv-card { border: 1px solid #b8933e; box-shadow: inset 0 0 0 3px #f3ecdf, inset 0 0 0 4px rgba(184,147,62,.45); border-radius: 999px 999px 4px 4px; }
.dv-section + .dv-section::before { content: '✦ ❦ ✦'; display: block; text-align: center; color: #b8933e; margin-bottom: 1.5em; letter-spacing: .6em; font-size: .85em; }`,
    author: 'Aurélie Fontaine',
    createdAt: '2026-08-31',
    popularity: 80,
  },
  {
    id: 'clinical-care',
    name: 'Clinical Care',
    category: 'Professional',
    tags: ['healthcare', 'medical', 'clean', 'reassuring', 'teal'],
    description: 'Modern healthcare: teal, white, and calm competence.',
    designPhilosophy:
      'Healthcare design patients actually trust. Reassuring teal, generous white, rounded-but-professional forms, and typography that explains rather than impresses. Every state (info, warning, critical) is designed. For clinics, health tech, insurance, and anything where confusion has a cost.',
    designDetails:
      'White canvas, trust teal #0e7490-family, calm mint surfaces, amber warnings, red reserved for critical. IBM Plex Sans (clinical legibility); weights 400–600 only. Cards have 12px radii and colored top status strips. Icons precede every status. Buttons are 6px-radius, 44px minimum height (gloved hands exist).',
    colors: {
      primary: '#0e7490',
      secondary: '#155e75',
      accent: '#14b8a6',
      neutral: '#e6f3f4',
      background: '#fbfdfe',
      text: '#1e3a45',
    },
    typography: {
      displayFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      scale: '13 / 15 / 17 / 20 / 25 / 32 / 44',
      lineHeights: 'Display 1.2, body 1.65',
      letterSpacing: 'Labels 0.06em, display -0.01em',
    },
    components: {
      primary: 'Solid #0e7490, white text, radius 6px, padding 14px 28px (44px min-height), 600',
      secondary: '1px #94c4cf border, white bg, teal text, same metrics',
      tertiary: 'Teal text link with ⇢ arrow slide on hover',
      radius: '6px buttons/inputs, 12px cards',
      hover: '150ms darken; focus rings always visible',
      cards: 'White, 1px #d7e9ed border, colored top status strip (teal/amber/red), radius 12px, padding 24px',
      forms: '44px inputs, 1px borders, visible labels above, teal focus ring',
      navigation: '64px white bar, teal active underline, emergency number right',
      modals: 'Radius 12px with status icon header and clear action hierarchy',
    },
    spacing: {
      baseUnit: '8px',
      marginScale: '8 / 24 / 48 / 96',
      paddingScale: '16 / 24 / 40',
      grid: '12-col 1200px; forms in 2-col with 24px gutters',
    },
    motion: {
      pageLoad: 'Fast fades 200ms — clarity before delight',
      hoverStates: '150ms color shifts only',
      transitions: 'Functional 150–200ms',
      scroll: 'Sticky section anchors; nothing else moves',
    },
    accessibility:
      '#1e3a45 on white 11.9:1; white on teal 5.9:1. Status never color-only: icons + text labels on every alert. Focus 3px teal ring. Tap targets ≥44px. Errors announced via aria-live.',
    responsive:
      'Forms single-column under 640px. Status cards stack with strips intact. Display clamps 1.875rem→2.75rem. Nav condenses; emergency number persists.',
    codeExample:
      '<section class="care">\n  <h1>Your results, <em>explained.</em></h1>\n  <p>Plain-language reports from real clinicians.</p>\n  <div class="status info">◉ Next available: Tomorrow 9:40</div>\n  <button class="btn-care">Book appointment</button>\n</section>',
    accent: '#0e7490',
    motif: 'big-stat-row',
    layout: 'split-hero',
    useCases: ['Health', 'SaaS', 'Nonprofit'],
    signatureCss: `
.dv-card { border-top: 4px solid #14b8a6; }
.dv-card:hover { border-top-color: #0e7490; }
.dv-stat strong { color: #155e75; }
.dv-btn { min-height: 44px; }`,
    author: 'Priya Nair',
    createdAt: '2026-09-07',
    popularity: 79,
  },
  {
    id: 'studio-noir',
    name: 'Studio Noir',
    category: 'Creative',
    tags: ['noir', 'photography', 'monochrome-drama', 'cinematic', 'spotlit'],
    description: 'Spotlit monochrome: film-noir drama for photography.',
    designPhilosophy:
      'A single spotlight in a black room. High-contrast monochrome, dramatic crops, white-on-black typography that whispers and then snaps. Everything defers to the image. For photographers, filmmakers, galleries, and portfolios where the work is the entire argument.',
    designDetails:
      'True black #0a0a0a with silver #d4d4d4 text and a single warm spotlight accent (#e8c47a used once per viewport). Oswald condensed display, tall and cinematic; Karla body. Images get vignette frames (inset box-shadow). Film-strip perforations (repeating gradient) as section dividers. Hover: images scale inside their frames like a slow zoom.',
    colors: {
      primary: '#d4d4d4',
      secondary: '#525252',
      accent: '#e8c47a',
      neutral: '#171717',
      background: '#0a0a0a',
      text: '#ededed',
    },
    typography: {
      displayFont: 'Oswald',
      bodyFont: 'Karla',
      scale: '12 / 14 / 16 / 19 / 24 / 34 / 56',
      lineHeights: 'Display 1.05, body 1.7',
      letterSpacing: 'Display 0.06em uppercase, labels 0.24em',
    },
    components: {
      primary: '1px #d4d4d4 border, transparent, silver text, padding 12px 32px, uppercase 0.14em, fills silver (text black) 250ms',
      secondary: '1px rgba(212,212,212,.35) border, dimmer text',
      tertiary: 'Spotlight-gold text link, fade to full brightness on hover',
      radius: '0 — cinema is square',
      hover: 'Images scale 1.04 inside vignette frames 600ms; buttons fill',
      cards: 'Black frames with inset vignette shadow and caption strip below',
      forms: 'Underline inputs on black, silver focus, spaced uppercase labels',
      navigation: 'Hairline-bottom bar, condensed uppercase links, gold active',
      modals: 'Full-bleed lightbox with silver hairline frame',
    },
    spacing: {
      baseUnit: '16px',
      marginScale: '16 / 48 / 96 / 176',
      paddingScale: '24 / 48 / 80',
      grid: 'Cinema: full-width frames, 1200px text measure 640px',
    },
    motion: {
      pageLoad: 'Fade from black 600ms; images develop (brightness 0.7→1)',
      hoverStates: 'Slow zooms 600ms; quick button fills 250ms',
      transitions: 'Cinematic patience on media, snap on controls',
      scroll: 'Images develop as they enter (brightness ramp); text fades',
    },
    accessibility:
      '#ededed on black 16.9:1; silver on black 13.1:1. Gold spotlight reserved for large elements (7.9:1). Focus 2px silver outline offset 3px. Zoom effects respect reduced-motion (become brightness shifts).',
    responsive:
      'Frames stay full-width; captions overlay on mobile to save space. Display clamps 2rem→3.5rem. Film-strip dividers thin to 8px. Lightbox swallows full screen under 640px.',
    codeExample:
      '<section class="frame">\n  <p class="reel">REEL 03 — SELECTED WORK</p>\n  <h1>LIGHT, <em>SHADOW</em>, TRUTH</h1>\n  <a class="enter" href="#">View the series</a>\n</section>',
    accent: '#e8c47a',
    motif: 'grain-overlay',
    layout: 'magazine',
    useCases: ['Photography', 'Portfolio', 'Fashion'],
    signatureCss: `
.dv-media, .dv-feature-media { box-shadow: inset 0 0 60px rgba(0,0,0,.75); }
.dv-section + .dv-section::before { content: ''; display: block; height: 10px; margin-bottom: 3em; background: repeating-linear-gradient(90deg, #171717 0 8px, #0a0a0a 8px 16px); border-block: 1px solid #262626; }
.dv-hero h1 { text-transform: uppercase; letter-spacing: .06em; }
.dv-hero h1 em { color: #e8c47a; font-style: normal; }`,
    author: 'Camille Roth',
    createdAt: '2026-09-12',
    popularity: 83,
  },
]
