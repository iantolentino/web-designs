import type {
  Category,
  Colors,
  ComponentSpec,
  DesignDetails,
  DesignSystem,
  Layout,
  Motion,
  Motif,
  Spacing,
  Typography,
  UseCase,
} from '../types'
import { contrastRatio, readableOn } from './palette'

/**
 * Seed builder — how the catalog scales past a few hundred systems without
 * every entry restating the same mechanical prose.
 *
 * A wave file authors what actually differs between designs — name, colors,
 * type pairing, motif, arrangement, hero, and the philosophy that explains the
 * whole thing — and this module derives the rest the way a design-system
 * engineer would: contrast numbers computed from the real palette, control
 * specs from the radius/depth character, spacing from the density, motion from
 * a named profile, and a stage tint that is parameterized by the design's own
 * colors. Vocabulary rotates deterministically by id hash, so two seeds never
 * receive the same phrasing in the same slot.
 *
 * The uniqueness invariants are checked by scripts/audit-designs.cjs and
 * scripts/taste-audit.cjs: no repeated palettes, no repeated structure combos,
 * no repeated heroes, no type pairing shared by more than two designs.
 */

export type Depth = 'flat' | 'hairline' | 'soft' | 'hard' | 'glow' | 'inset'
export type Density = 'airy' | 'regular' | 'compact'
export type MotionProfile = 'calm' | 'mechanical' | 'spring' | 'cinematic' | 'instant' | 'drift' | 'ceremonial' | 'analog'

export interface Seed {
  id: string
  name: string
  category: Category
  tags: string[]
  useCases: UseCase[]
  /** Hero line with *emphasis* markers for the accent italic. */
  hero: string
  /** The card tagline — one sentence, shown everywhere the design appears. */
  description: string
  /** Two-to-four sentences on what the system believes. */
  philosophy: string
  colors: Colors
  display: string
  body: string
  motif: Motif
  layout: Layout
  /** Control radius in px; 999 for the pill. */
  radius: number
  depth: Depth
  /** What the accent is reserved for — used in details + a11y notes. */
  accentRole: string
  author: string
  /** Defaults to a hash-stable 70–94 so the gallery ranking stays varied. */
  popularity?: number
  density?: Density
  motion?: MotionProfile
  createdAt?: string
  trending?: boolean
  /** Extra per-design CSS appended after the generated stage recipe. */
  signature?: string
  /** Optional bespoke overrides — used sparingly, where the recipe would lie. */
  details?: string
  stage?: string
  cardRadius?: number
  cta?: string
  components?: Partial<ComponentSpec>
}

/* ---------- deterministic rotation ---------- */

function hash(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

const pick = <T,>(arr: T[], n: number): T => arr[n % arr.length]

/* ---------- palette helpers ---------- */

const pct = (a: number): string => `${Math.round(a * 100)}%`
const ink = (c: string): string => `${c}${Math.round(0.13 * 255).toString(16).padStart(2, '0')}` // 13% ink
const fade = (hex: string, a: number): string => `${hex}${Math.round(a * 255).toString(16).padStart(2, '0')}`

export function radiusLabel(r: number): string {
  if (r >= 999) return '999px pill'
  if (r === 0) return '0 — square'
  return `${r}px`
}

const cardRadiusOf = (s: Seed): number => (s.cardRadius ?? (s.radius >= 999 ? 24 : Math.min(28, Math.max(4, Math.round(s.radius * 1.6)))))

/* ---------- depth vocabulary ---------- */

const CARD_STYLE: Record<Depth, (s: Seed) => string> = {
  flat: (s) => `Flat cards, ${cardRadiusOf(s)}px radius, 1px ${ink(s.colors.text)} border, no shadow at rest, 24px padding`,
  hairline: (s) => `Paper cards, ${cardRadiusOf(s)}px radius, 1px ${ink(s.colors.text)} rule, depth from borders only, 26px padding`,
  soft: (s) => `Soft cards, ${cardRadiusOf(s)}px radius, 1px ${ink(s.colors.text)} border, soft 0 10px 26px ${fade(s.colors.text, 0.08)} shadow, 24px padding`,
  hard: (s) => `Block cards, ${cardRadiusOf(s)}px radius, 2px ${s.colors.text} border, hard 4px 4px 0 ${s.colors.text} offset, 22px padding`,
  glow: (s) => `Lit cards, ${cardRadiusOf(s)}px radius, 1px ${fade(s.colors.background, 0.18)} border, glow 0 16px 44px ${fade(s.colors.primary, 0.32)}, 26px padding`,
  inset: (s) => `Recessed cards, ${cardRadiusOf(s)}px radius, inset 0 0 0 1px ${fade(s.colors.primary, 0.25)} ring, no outer shadow, 24px padding`,
}

const CTA_STYLE: Record<Depth, (s: Seed) => string> = {
  flat: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, no shadow`,
  hairline: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, 1px ${ink(s.colors.text)} outline`,
  soft: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, soft 0 6px 18px ${fade(s.colors.primary, 0.3)}`,
  hard: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, 2px ${s.colors.text} border, hard 3px 3px 0 ${s.colors.text}`,
  glow: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, glow 0 0 26px ${fade(s.colors.primary, 0.5)}`,
  inset: (s) => `Solid ${s.colors.primary}, ${readableOn(s.colors.primary)} text, ${radiusLabel(s.radius)}, inset 0 -2px 0 ${fade(s.colors.text, 0.2)}`,
}

const HOVER_LINES = [
  'Lift 2px with a warmer shadow, 180ms ease-out',
  'Background shifts one tone, 120ms linear',
  'Rule draws 1px to 100%, 200ms ease-out',
  'Sheen travels across the surface, 380ms ease-out',
  'Hard offset grows 4 → 6px, 100ms linear',
  'Glow widens by 8px, 240ms ease-out',
  'Surface tint deepens 6%, 160ms ease-out',
  'Underline slides in from the left, 220ms cubic-bezier(.2,.8,.2,1)',
  'Nothing moves — the fill swaps in place, 90ms linear',
  'Scale settles 1.02 → 1, 300ms spring',
]

const SECONDARY_STYLES: ((s: Seed) => string)[] = [
  (s) => `1px ${fade(s.colors.text, 0.3)} border, transparent, ${s.colors.text} text`,
  (s) => `Solid ${s.colors.neutral}, ${s.colors.text} text, ${radiusLabel(s.radius)}`,
  (s) => `1px ${fade(s.colors.primary, 0.5)} border, transparent, ${s.colors.primary} text`,
  (s) => `Solid ${s.colors.secondary}, ${readableOn(s.colors.secondary)} text, ${radiusLabel(s.radius)}`,
]

const INPUT_STYLES = [
  (s: Seed) => `${s.density === 'compact' ? 36 : 44}px inputs, 1px ${ink(s.colors.text)} rule, ${s.colors.primary} focus ring 2px`,
  (s: Seed) => `Filled inputs on ${fade(s.colors.neutral, 0.55)}, ${radiusLabel(s.radius)}, ${s.colors.primary} focus rule`,
  (s: Seed) => `Ruled inputs — bottom border only, 1px ${ink(s.colors.text)}, ${s.colors.primary} focus underline 2px`,
  (s: Seed) => `${s.density === 'compact' ? 34 : 42}px inputs with a 1px ${fade(s.colors.text, 0.16)} frame and an inner ${fade(s.colors.background, 0.5)} well`,
]

const NAV_STYLES = [
  'Quiet bar on the page ground with a hairline underline',
  'Floating bar with a blurred backing and a soft edge',
  'Solid bar in the neutral tone with square nav cells',
  'Transparent bar; the wordmark carries the weight',
  'Split bar — identity left, actions right, a rule between',
]

const MODAL_STYLES = [
  (s: Seed) => `Sheet with a ruled header and a ${s.colors.primary} accent mark`,
  (s: Seed) => `Rounded panel, 1px edge, backdrop at 55% ${s.colors.text}`,
  (s: Seed) => `Bordered slab with a ${s.colors.accent} header strip`,
  (s: Seed) => `Soft panel that rises 12px on open, shadow at 18%`,
  (s: Seed) => `Full-bleed sheet on mobile, centered card above 900px`,
]

/* ---------- motion vocabulary ---------- */

const MOTION_PROFILES: Record<MotionProfile, Motion> = {
  calm: {
    pageLoad: 'One fade of the whole page, 280ms, once',
    hoverStates: 'Tone shift and a 2px lift, 200ms ease-out',
    transitions: 'Opacity and transform only, 200ms ease',
    scroll: 'Sections settle once at 18%, 6px travel',
  },
  mechanical: {
    pageLoad: 'Rows click in top-down, 90ms apart',
    hoverStates: 'Hard shift, 80ms linear',
    transitions: 'Background, border, and transform, steps(2)',
    scroll: 'Nothing animates on scroll — the page is a machine, not a showreel',
  },
  spring: {
    pageLoad: 'Cards bounce in with a 6px overshoot, 220ms each, 60ms apart',
    hoverStates: 'Offset growth and a 4% squash, 140ms ease-out',
    transitions: 'Transform only — this system never cross-fades',
    scroll: 'Sections pop once, no travel',
  },
  cinematic: {
    pageLoad: 'Media fades up while type tracks in 10px, 520ms',
    hoverStates: 'Slow glow bloom, 340ms ease-out',
    transitions: 'Opacity, transform, and filter, 340ms',
    scroll: 'Sections parallax 12px and settle, once',
  },
  instant: {
    pageLoad: 'No load animation — the page is simply there',
    hoverStates: 'Fill swap, 60ms linear',
    transitions: 'Background and color only',
    scroll: 'No scroll choreography by principle',
  },
  drift: {
    pageLoad: 'Type drifts up 14px and settles, 600ms ease-out',
    hoverStates: 'Soft 3px reveal, 300ms ease',
    transitions: 'Transform and opacity, 300ms ease',
    scroll: 'Slow 20px drift per section, once',
  },
  ceremonial: {
    pageLoad: 'Elements rise 8px and settle, 480ms, 70ms apart',
    hoverStates: 'Gold-family sheen travels, 420ms ease-out',
    transitions: 'Opacity and box-shadow, 420ms ease',
    scroll: 'Sections fade once at 20%, no travel',
  },
  analog: {
    pageLoad: 'The page resolves like a print, 400ms, once',
    hoverStates: 'Ink darkens one step, 110ms linear',
    transitions: 'Color and border only',
    scroll: 'Nothing moves on scroll — paper does not animate',
  },
}

/* ---------- spacing by density ---------- */

const SPACING: Record<Density, (n: number) => Spacing> = {
  airy: (n) => ({
    baseUnit: '8px',
    marginScale: pick(['16 / 40 / 80 / 128 / 176', '20 / 48 / 96 / 152 / 208', '16 / 48 / 88 / 144 / 192'], n),
    paddingScale: pick(['20 / 36 / 56 / 88', '24 / 44 / 72 / 104', '22 / 40 / 64 / 96'], n),
    grid: pick(['12-column, 1140px max, 32px gutter', '12-column, 1100px max, 36px gutter', '12-column, 1200px max, 28px gutter'], n),
  }),
  regular: (n) => ({
    baseUnit: '4px',
    marginScale: pick(['12 / 24 / 48 / 80 / 128', '16 / 28 / 56 / 96 / 144', '12 / 28 / 52 / 88 / 136'], n),
    paddingScale: pick(['16 / 28 / 44 / 68', '18 / 30 / 48 / 76', '16 / 26 / 42 / 64'], n),
    grid: pick(['12-column, 1200px max, 24px gutter', '12-column, 1220px max, 20px gutter', '12-column, 1180px max, 26px gutter'], n),
  }),
  compact: (n) => ({
    baseUnit: '4px',
    marginScale: pick(['8 / 16 / 32 / 56 / 96', '8 / 20 / 40 / 64 / 104', '10 / 18 / 36 / 60 / 100'], n),
    paddingScale: pick(['12 / 20 / 32 / 52', '14 / 22 / 36 / 56', '12 / 18 / 30 / 48'], n),
    grid: pick(['12-column, 1240px max, 18px gutter', '12-column, 1280px max, 16px gutter', '12-column, 1220px max, 20px gutter'], n),
  }),
}

/* ---------- typography ---------- */

const MONO = /mono|courier|consolas|menlo/i

function typographyFor(s: Seed): Typography {
  const d = s.density ?? 'regular'
  const scale = d === 'airy'
    ? pick(['15 / 17 / 19 / 24 / 32 / 44 / 62', '16 / 18 / 20 / 26 / 34 / 46 / 64'], hash(s.id))
    : d === 'compact'
      ? pick(['12 / 13 / 15 / 17 / 22 / 29 / 40', '13 / 14 / 16 / 18 / 23 / 30 / 42'], hash(s.id))
      : pick(['14 / 16 / 18 / 22 / 28 / 38 / 52', '14 / 16 / 18 / 22 / 30 / 40 / 56'], hash(s.id))
  const display = MONO.test(s.display)
  return {
    displayFont: s.display,
    bodyFont: s.body,
    scale,
    lineHeights: display
      ? 'Display 1.1, body 1.6, labels 1.4'
      : d === 'airy'
        ? 'Display 1.08, body 1.7'
        : pick(['Display 1.1, body 1.62', 'Display 1.06, body 1.66', 'Display 1.12, body 1.58'], hash(s.id)),
    letterSpacing: MONO.test(s.display)
      ? 'Labels 0.1em uppercase; body 0; figures tabular'
      : pick([
          'Display -0.02em; labels 0.16em uppercase',
          'Display -0.01em; labels 0.2em uppercase; body 0.005em',
          'Display -0.025em; labels 0.14em uppercase',
          'Display 0; labels 0.22em uppercase; body -0.005em',
        ], Math.floor(hash(s.id) / 3)),
  }
}
/* ---------- accessibility, computed from the real palette ---------- */

function accessibilityFor(s: Seed): string {
  const c = s.colors
  const fmt = (n: number) => `${n.toFixed(1)}:1`
  const body = contrastRatio(c.text, c.background)
  const primary = contrastRatio(c.primary, c.background)
  const onPrimary = contrastRatio(readableOn(c.primary), c.primary)
  const accent = contrastRatio(c.accent, c.background)
  const notes: string[] = [
    `Ink ${fmt(body)} on the page ground; primary ${fmt(primary)}; accent ${fmt(accent)}.`,
  ]
  if (onPrimary < 4.5) notes.push(`${readableOn(c.primary)} on ${c.primary} is ${fmt(onPrimary)} — primary is used for fills and large type, never small body copy.`)
  else notes.push(`Primary carries ${readableOn(c.primary)} text at ${fmt(onPrimary)}.`)
  if (contrastRatio(c.accent, c.background) < 4.5) notes.push(`The accent is never the sole carrier of meaning — it always sits beside a word.`)
  else notes.push(`The accent may carry meaning and is still paired with a label. ${s.accentRole}.`)
  const focus = s.depth === 'hard' || s.radius === 0
    ? `Focus is a ${s.radius === 0 ? 3 : 2}px ${c.primary} outline with no offset.`
    : `Focus is a 2px ${c.primary} outline offset 2px.`
  notes.push(focus)
  if (s.motion === 'cinematic' || s.motion === 'spring' || s.motion === 'ceremonial') notes.push('Scroll and load choreography is disabled under prefers-reduced-motion.')
  return notes.join(' ')
}

/* ---------- responsive notes ---------- */

const RESPONSIVE_STEPS: Record<Density, string> = {
  airy: 'Whitespace compresses 176 → 80 → 40 as the viewport narrows; the type scale holds four steps; nothing reflows into columns under 720px.',
  regular: 'The grid steps 12 → 8 → 4 columns; cards stack below 860px; display type clamps between 28 and 56px.',
  compact: 'Density is preserved at every width — gaps shrink, type never does; tables scroll inside their own container below 760px.',
}

/* ---------- stage tints: one per hash bucket, parameterized by palette ---------- */

const STAGE_TINTS: ((s: Seed, n: number) => string)[] = [
  (s) => `.dv-stage { background: radial-gradient(120% 80% at 50% 0%, ${fade(s.colors.primary, 0.16)} 0%, ${s.colors.background} 62%); }`,
  (s) => `.dv-stage { background: linear-gradient(180deg, ${fade(s.colors.neutral, 0.7)} 0%, ${s.colors.background} 40%); }`,
  (s) => `.dv-stage { background: radial-gradient(80% 60% at 82% 4%, ${fade(s.colors.secondary, 0.22)} 0%, ${s.colors.background} 60%); }`,
  (s, n) => `.dv-stage { background-image: repeating-linear-gradient(${n % 2 ? 135 : 45}deg, ${fade(s.colors.primary, 0.05)} 0 2px, transparent 2px 18px), linear-gradient(${s.colors.background}, ${s.colors.background}); }`,
  (s) => `.dv-stage { background: conic-gradient(from 210deg at 12% -10%, ${fade(s.colors.accent, 0.18)}, transparent 40%), ${s.colors.background}; }`,
  (s) => `.dv-stage { background: radial-gradient(100% 70% at 50% 110%, ${fade(s.colors.primary, 0.2)} 0%, transparent 55%), ${s.colors.background}; }`,
  (s) => `.dv-stage { background: linear-gradient(200deg, ${fade(s.colors.primary, 0.12)}, transparent 45%), linear-gradient(20deg, ${fade(s.colors.accent, 0.1)}, transparent 40%), ${s.colors.background}; }`,
  (s) => `.dv-stage { background-image: radial-gradient(${fade(s.colors.primary, 0.14)} 1.2px, transparent 1.6px); background-size: 26px 26px; background-color: ${s.colors.background}; }`,
]

/** Per-motif flourish, colorized from the design's own palette. */
const MOTIF_EXTRA: Partial<Record<Motif, (s: Seed) => string>> = {
  'serif-italic-hero': (s) => `.dv-hero h1 em, .dv-ed-head h1 em { font-style: italic; color: ${s.colors.primary}; }`,
  'underline-accent': (s) => `.dv-hero h1 em { text-decoration: underline; text-decoration-color: ${s.colors.accent}; text-decoration-thickness: 3px; text-underline-offset: 5px; font-style: normal; }`,
  'gradient-hero': (s) => `.dv-hero h1, .dv-bleed-title { background: linear-gradient(96deg, ${s.colors.primary}, ${s.colors.accent}); -webkit-background-clip: text; background-clip: text; }`,
  'corner-brackets': (s) => `.dv-card { border-radius: 0 !important; } .dv-kicker { border-left: 3px solid ${s.colors.primary}; padding-left: .6em; }`,
  'glow-pulse': (s) => `.dv-btn-primary { box-shadow: 0 0 24px ${fade(s.colors.primary, 0.5)}; }`,
  'hard-shadows': (s) => `.dv-card, .dv-btn { box-shadow: 4px 4px 0 ${s.colors.text} !important; }`,
  'soft-shadows': (s) => `.dv-card { box-shadow: 0 12px 32px ${fade(s.colors.text, 0.1)} !important; }`,
  'outline-type': (s) => `.dv-hero h1 em { -webkit-text-stroke: 2px ${s.colors.primary}; color: transparent; font-style: normal; }`,
  'editorial-columns': (s) => `.dv-hero h1 em { font-style: italic; color: ${s.colors.primary}; } .dv-ed-pull { border-color: ${s.colors.accent}; }`,
  'ticker-marquee': (s) => `.dv-marquee { color: ${s.colors.primary}; }`,
  'pill-nav': (s) => `.dv-nav { border-radius: 999px; background: ${fade(s.colors.neutral, 0.6)}; }`,
  'grain-overlay': (s) => `.dv-stage::after { opacity: .5; mix-blend-mode: multiply; }`,
  'duotone-media': (s) => `.dv-media, .dv-fake-ui { background: linear-gradient(150deg, ${s.colors.primary}, ${s.colors.secondary}) !important; }`,
  'halftone-dots': (s) => `.dv-hero h1 em { color: ${s.colors.primary}; }`,
  'moire-rings': (s) => `.dv-card { background: ${fade(s.colors.neutral, 0.5)}; }`,
  'isometric-lattice': (s) => `.dv-card { transform: translateZ(0); box-shadow: 0 2px 0 ${fade(s.colors.text, 0.2)}; }`,
  'paper-cut': (s) => `.dv-card { box-shadow: 0 1px 0 ${fade(s.colors.text, 0.12)}, 0 14px 24px ${fade(s.colors.text, 0.08)} !important; }`,
  'oil-slick': (s) => `.dv-btn-primary { box-shadow: 0 10px 30px ${fade(s.colors.primary, 0.4)}; }`,
  'ledger-rules': (s) => `.dv-hero h1 em { text-decoration: underline; text-decoration-color: ${s.colors.accent}; text-underline-offset: 4px; }`,
  'stencil-mask': (s) => `.dv-kicker { background: ${s.colors.text}; color: ${s.colors.background}; padding: .2em .6em; display: inline-block; }`,
  'double-rule': (s) => `.dv-hero h1 em { border-bottom: 2px double ${s.colors.primary}; font-style: normal; }`,
  'inset-frame': (s) => `.dv-section { padding-inline: 2.4em; } .dv-hero h1 em { color: ${s.colors.primary}; }`,
  'ribbon-band': (s) => `.dv-hero h1 em { color: ${s.colors.primary}; font-style: italic; }`,
  'stamp-seal': (s) => `.dv-card::after { color: ${s.colors.primary}; border-color: ${s.colors.primary}; }`,
  'ticket-stub': (s) => `.dv-card { border-left-color: ${fade(s.colors.primary, 0.6)} !important; }`,
  'blueprint-grid': (s) => `.dv-hero h1 em { color: ${s.colors.primary}; } .dv-card { border-radius: 0 !important; }`,
  'riso-offset': (s) => `.dv-card { border-radius: 0 !important; }`,
  'glass-sheen': (s) => `.dv-nav { backdrop-filter: blur(9px); background: ${fade(s.colors.background, 0.6)}; }`,
  'torn-edge': (s) => `.dv-card { border-radius: 0 !important; }`,
  'stitch-line': (s) => `.dv-hero h1 em { border-bottom: 2px dashed ${s.colors.primary}; font-style: normal; }`,
  'lattice-weave': (s) => `.dv-card:nth-child(2n) { border-color: ${fade(s.colors.accent, 0.5)}; }`,
  'vignette': (s) => `.dv-hero h1 em { color: ${s.colors.accent}; font-style: italic; }`,
  'slat-shadow': (s) => `.dv-hero h1 em { color: ${s.colors.primary}; font-style: normal; }`,
  'watermark-glyph': (s) => `.dv-card { border-radius: 0 !important; }`,
  'terrazzo-speck': (s) => `.dv-card { border-radius: 0 !important; }`,
  'sonar-sweep': (s) => `.dv-kicker { color: ${s.colors.accent}; }`,
  'pcb-trace': (s) => `.dv-kicker { font-family: ui-monospace, 'SF Mono', Menlo, monospace; }`,
  'punched-card': (s) => `.dv-hero h1 em { color: ${s.colors.primary}; }`,
  'quilt-patch': (s) => `.dv-card { border-radius: 2px !important; }`,
  'rivet-row': (s) => `.dv-card { border-radius: 0 !important; }`,
}

function signatureFor(s: Seed): string {
  const n = hash(s.id)
  const tint = pick(STAGE_TINTS, n)(s, n)
  const extra = MOTIF_EXTRA[s.motif]?.(s) ?? ''
  return [tint, extra, s.signature ?? ''].filter(Boolean).join('\n')
}
/* ---------- component specs ---------- */

function componentsFor(s: Seed): ComponentSpec {
  const n = hash(s.id)
  const c = s.colors
  return {
    primary: CTA_STYLE[s.depth](s),
    secondary: pick(SECONDARY_STYLES, n)(s),
    tertiary: pick(
      [
        `${c.primary} link with a 1px rule that draws on hover`,
        `${c.accent} link, underlined, no button chrome`,
        `${c.primary} underlined link; an arrow follows on hover`,
        `${c.text} link with a ${c.primary} highlighter swipe`,
      ],
      Math.floor(n / 7),
    ),
    radius: `${radiusLabel(s.radius)} controls, ${cardRadiusOf(s)}px cards`,
    hover: pick(HOVER_LINES, Math.floor(n / 11)),
    cards: CARD_STYLE[s.depth](s),
    forms: pick(INPUT_STYLES, Math.floor(n / 13))(s),
    navigation: pick(NAV_STYLES, Math.floor(n / 17)),
    modals: pick(MODAL_STYLES, Math.floor(n / 19))(s),
    ...s.components,
  }
}

/* ---------- details prose ---------- */

function detailsFor(s: Seed): string {
  if (s.details) return s.details
  const c = s.colors
  const n = hash(s.id)
  const opens = [
    `${s.name} runs on a ${c.background} ground: ${c.primary} as the load-bearing colour, ${c.accent} ${s.accentRole}, and ${c.text} for text.`,
    `The palette is six tokens deep — ${c.primary} leads, ${c.secondary} supports, ${c.accent} ${s.accentRole} — all set on ${c.background} with ${c.text} ink.`,
    `${c.background} paper, ${c.text} ink, ${c.primary} for anything that acts, ${c.accent} ${s.accentRole}.`,
  ]
  const type = [
    `${s.display} sets the display voice against ${s.body} for body copy.`,
    `Type is a two-voice arrangement: ${s.display} for display, ${s.body} underneath.`,
    `${s.display} carries the headlines; ${s.body} does the reading.`,
  ]
  const structure = [
    `Surfaces follow one ${s.depth} rule, controls sit at ${radiusLabel(s.radius)}, and the ${s.density ?? 'regular'} rhythm holds from 390 to 1440.`,
    `Controls are ${radiusLabel(s.radius)}, depth is ${s.depth} and consistent, and spacing is a single ${s.density ?? 'regular'} unit rather than a menu.`,
  ]
  return `${pick(opens, n)} ${pick(type, Math.floor(n / 5))} ${pick(structure, Math.floor(n / 23))}`
}

/* ---------- the builder ---------- */

const stripMarkers = (hero: string): string => hero.replace(/\*/g, '')

const DEFAULT_MOTIONS: MotionProfile[] = ['calm', 'mechanical', 'spring', 'cinematic', 'instant', 'drift', 'ceremonial', 'analog']

/**
 * Seeds, kept so the preview prose can be derived on demand.
 *
 * `sys()` used to compute the six detail fields eagerly for every seeded
 * design — ~2.5 kB of derived strings each, built at module load for 324
 * designs that nothing reads until one of them is previewed. The seed is
 * retained instead and the prose is derived on first read.
 */
const SEEDS = new Map<string, Seed>()
const DETAIL_CACHE = new Map<string, DesignDetails>()

/**
 * Compact row format for high-volume waves.
 *
 * The order is fixed and documented so a row reads like a ledger line:
 *
 *   id, name, category, tags, useCases (| separated), hero, description,
 *   philosophy, colors (six hexes, space separated: primary secondary accent
 *   neutral background text), display, body, motif, layout, radius, depth,
 *   accentRole, author, extras?
 *
 * `extras` carries the occasional non-default: density, motion, popularity,
 * trending, signature.
 */
export interface RowExtras {
  dens?: Density
  mot?: MotionProfile
  pop?: number
  trend?: boolean
  sig?: string
  cta?: string
}

export function row(
  id: string,
  name: string,
  category: Category,
  tags: string,
  useCases: string,
  hero: string,
  description: string,
  philosophy: string,
  colors: string,
  display: string,
  body: string,
  motif: Motif,
  layout: Layout,
  radius: number,
  depth: Depth,
  accentRole: string,
  author: string,
  extras: RowExtras = {},
): DesignSystem {
  const [primary, secondary, accent, neutral, background, text] = colors.split(' ')
  return sys({
    id,
    name,
    category,
    tags: tags.split(' '),
    useCases: useCases.split('|') as UseCase[],
    hero,
    description,
    philosophy,
    colors: { primary, secondary, accent, neutral, background, text },
    display,
    body,
    motif,
    layout,
    radius,
    depth,
    accentRole,
    author,
    density: extras.dens,
    motion: extras.mot,
    popularity: extras.pop,
    trending: extras.trend,
    signature: extras.sig,
    cta: extras.cta,
  })
}

function codeExampleFor(s: Seed): string {
  return `<section class="${s.id}">\n  <h1>${stripMarkers(s.hero)}</h1>\n  <p>${s.description}</p>\n  <button class="btn-${s.id}">${s.cta ?? 'Start'}</button>\n</section>`
}

export function sys(s: Seed): DesignSystem {
  const n = hash(s.id)
  const c = s.colors
  SEEDS.set(s.id, s)
  return {
    id: s.id,
    name: s.name,
    category: s.category,
    tags: s.tags,
    description: s.description,
    designPhilosophy: s.philosophy,
    colors: c,
    typography: typographyFor(s),
    components: componentsFor(s),
    accent: c.accent,
    stage: s.stage,
    motif: s.motif,
    layout: s.layout,
    hero: s.hero,
    useCases: s.useCases,
    signatureCss: signatureFor(s),
    author: s.author,
    createdAt: s.createdAt ?? '2026-10-03',
    popularity: s.popularity ?? 70 + (n % 25),
    trending: s.trending,
  }
}

/**
 * Preview prose for a seeded design, derived on first read and memoised.
 *
 * Returns undefined for designs whose prose is authored rather than derived —
 * those live in the lazily-imported src/designs/details.ts table.
 */
export function derivedDetails(id: string): DesignDetails | undefined {
  const hit = DETAIL_CACHE.get(id)
  if (hit) return hit
  const s = SEEDS.get(id)
  if (!s) return undefined
  const n = hash(id)
  const density = s.density ?? 'regular'
  const out: DesignDetails = {
    designDetails: detailsFor(s),
    codeExample: codeExampleFor(s),
    accessibility: accessibilityFor(s),
    responsive: RESPONSIVE_STEPS[density],
    spacing: SPACING[density](n),
    motion: MOTION_PROFILES[s.motion ?? pick(DEFAULT_MOTIONS, n)],
  }
  DETAIL_CACHE.set(id, out)
  return out
}

