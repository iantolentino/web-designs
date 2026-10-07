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
    colors: {
      primary: '#0e7490',
      secondary: '#155e75',
      accent: '#14b8a6',
      neutral: '#e6f3f4',
      background: '#fbfdfe',
      text: '#1e3a45',
    },
    typography: {
      displayFont: 'Livvic',
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
