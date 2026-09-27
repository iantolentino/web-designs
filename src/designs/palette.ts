import type { Colors, DesignSystem } from '../types'

/**
 * Palette engine.
 *
 * Every design ships with a fixed six-token palette, but a palette is the one
 * part of a system people legitimately want to make their own. This module
 * lets the preview keep the design's *structure, type, and rhythm* while
 * swapping the ink:
 *
 *   - curated presets that read well on any layout,
 *   - `harmonizeFrom(primary)` — give us one color, we derive the other five
 *     so they stay coherent (secondary hue-rotated, accent complementary,
 *     surfaces tinted to match),
 *   - per-token overrides, applied by `applyPalette`.
 *
 * Nothing here mutates a DesignSystem; overrides are merged into a copy so the
 * shipped data stays canonical.
 */

export type ColorKey = keyof Colors
export const COLOR_KEYS: ColorKey[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'background',
  'text',
]

export const COLOR_LABEL: Record<ColorKey, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  accent: 'Accent',
  neutral: 'Neutral / surface',
  background: 'Background',
  text: 'Text',
}

/* ============================ color math ============================ */

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n))
}

export function normalizeHex(input: string): string | null {
  const raw = input.trim().replace(/^#/, '')
  if (/^[0-9a-fA-F]{3}$/.test(raw)) {
    return `#${raw.split('').map((c) => c + c).join('').toLowerCase()}`
  }
  if (/^[0-9a-fA-F]{6}$/.test(raw)) return `#${raw.toLowerCase()}`
  return null
}

export function isValidHex(input: string): boolean {
  return normalizeHex(input) !== null
}

function hexToRgb(hex: string): [number, number, number] {
  const n = (normalizeHex(hex) ?? '#000000').slice(1)
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)]
}

function rgbToHex(r: number, g: number, b: number): string {
  const to = (v: number) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}

function toHsl(hex: string): [number, number, number] {
  const [r0, g0, b0] = hexToRgb(hex).map((v) => v / 255) as [number, number, number]
  const max = Math.max(r0, g0, b0)
  const min = Math.min(r0, g0, b0)
  const l = (max + min) / 2
  let h = 0
  let s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r0) h = (g0 - b0) / d + (g0 < b0 ? 6 : 0)
    else if (max === g0) h = (b0 - r0) / d + 2
    else h = (r0 - g0) / d + 4
    h /= 6
  }
  return [h * 360, s, l]
}

function fromHsl(h: number, s: number, l: number): string {
  const hue = ((h % 360) + 360) % 360 / 360
  const sat = clamp(s, 0, 1)
  const lig = clamp(l, 0, 1)
  if (sat === 0) {
    const v = Math.round(lig * 255)
    return rgbToHex(v, v, v)
  }
  const q = lig < 0.5 ? lig * (1 + sat) : lig + sat - lig * sat
  const p = 2 * lig - q
  const channel = (t: number) => {
    let tt = t
    if (tt < 0) tt += 1
    if (tt > 1) tt -= 1
    if (tt < 1 / 6) return p + (q - p) * 6 * tt
    if (tt < 1 / 2) return q
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6
    return p
  }
  return rgbToHex(channel(hue + 1 / 3) * 255, channel(hue) * 255, channel(hue - 1 / 3) * 255)
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }) as [number, number, number]
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrastRatio(a: string, b: string): number {
  const l1 = relativeLuminance(a)
  const l2 = relativeLuminance(b)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export function isDark(hex: string): boolean {
  return relativeLuminance(hex) < 0.22
}

/** Ink that stays legible on a given fill. */
export function readableOn(hex: string): string {
  return contrastRatio(hex, '#ffffff') >= contrastRatio(hex, '#111111') ? '#ffffff' : '#111111'
}

/* ============================ harmonize ============================ */

/** A grounded random primary — vivid enough to lead, never neon soup. */
export function randomPrimary(dark: boolean): string {
  const hue = Math.floor(Math.random() * 360)
  const sat = 0.5 + Math.random() * 0.35
  return fromHsl(hue, sat, dark ? 0.66 : 0.44)
}

/** A coherent palette around a fresh random hue. */
export function randomPalette(dark: boolean): Colors {
  return harmonizeFrom(randomPrimary(dark), dark)
}

/**
 * Derive a coherent six-token palette from a single primary color while
 * keeping the design's light/dark character (driven by its background).
 * Surfaces are tinted toward the primary hue so the result feels considered
 * rather than assembled.
 */
export function harmonizeFrom(primary: string, dark: boolean): Colors {
  const [h, s, l] = toHsl(primary)
  const sat = clamp(s, 0.35, 0.9)
  const secondary = fromHsl(h + 28, clamp(sat * 0.85, 0.3, 0.8), clamp(l + 0.08, 0.28, 0.68))
  const accent = fromHsl(h - 42, clamp(sat * 1.05, 0.45, 0.95), clamp(l + 0.12, 0.42, 0.72))
  if (dark) {
    return {
      primary,
      secondary,
      accent,
      neutral: fromHsl(h, 0.16, 0.13),
      background: fromHsl(h, 0.2, 0.07),
      text: fromHsl(h, 0.1, 0.95),
    }
  }
  return {
    primary,
    secondary,
    accent,
    neutral: fromHsl(h, 0.24, 0.95),
    background: fromHsl(h, 0.3, 0.985),
    text: fromHsl(h, 0.34, 0.1),
  }
}

/* ============================ presets ============================ */

export interface PalettePreset {
  id: string
  name: string
  /** Preferred surface regime — used to sort presets against a design. */
  mode: 'light' | 'dark'
  colors: Colors
}

export const PALETTE_PRESETS: PalettePreset[] = [
  {
    id: 'paper-ink',
    name: 'Paper & ink',
    mode: 'light',
    colors: { primary: '#1f2933', secondary: '#52606d', accent: '#c2410c', neutral: '#f1f3f5', background: '#fbfbf9', text: '#111418' },
  },
  {
    id: 'cobalt',
    name: 'Cobalt',
    mode: 'light',
    colors: { primary: '#1d4ed8', secondary: '#3b82f6', accent: '#f59e0b', neutral: '#eef2ff', background: '#f8faff', text: '#101322' },
  },
  {
    id: 'sage',
    name: 'Sage',
    mode: 'light',
    colors: { primary: '#256d4f', secondary: '#4f8f6b', accent: '#b7791f', neutral: '#eef4ec', background: '#f7faf5', text: '#16241b' },
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    mode: 'light',
    colors: { primary: '#b4532a', secondary: '#d98b5f', accent: '#1f6f78', neutral: '#f7ece5', background: '#fdf7f3', text: '#2a1a12' },
  },
  {
    id: 'rose-quartz',
    name: 'Rose quartz',
    mode: 'light',
    colors: { primary: '#be3455', secondary: '#e07a94', accent: '#6d3d8f', neutral: '#fbeef1', background: '#fff8fa', text: '#2b1620' },
  },
  {
    id: 'midnight',
    name: 'Midnight',
    mode: 'dark',
    colors: { primary: '#7c9cff', secondary: '#4a5b8c', accent: '#5eead4', neutral: '#1b2030', background: '#0e1220', text: '#eef1fb' },
  },
  {
    id: 'charcoal-amber',
    name: 'Charcoal & amber',
    mode: 'dark',
    colors: { primary: '#f5a524', secondary: '#b8860b', accent: '#7dd3fc', neutral: '#26241f', background: '#17150f', text: '#f7f3e8' },
  },
  {
    id: 'deep-teal',
    name: 'Deep teal',
    mode: 'dark',
    colors: { primary: '#2dd4bf', secondary: '#0f766e', accent: '#f0abfc', neutral: '#132625', background: '#081413', text: '#e6fffb' },
  },
  {
    id: 'plum-night',
    name: 'Plum night',
    mode: 'dark',
    colors: { primary: '#c084fc', secondary: '#7e4bb0', accent: '#fcd34d', neutral: '#241a2e', background: '#140e1c', text: '#f6eefc' },
  },
  {
    id: 'mono-slate',
    name: 'Mono slate',
    mode: 'dark',
    colors: { primary: '#d4d8de', secondary: '#8b929c', accent: '#60a5fa', neutral: '#22262c', background: '#14171b', text: '#f2f4f7' },
  },
]

/** Presets that match a design's own light/dark character, best first. */
export function presetsFor(dark: boolean): PalettePreset[] {
  return [...PALETTE_PRESETS].sort(
    (a, b) => Number(b.mode === (dark ? 'dark' : 'light')) - Number(a.mode === (dark ? 'dark' : 'light')),
  )
}

/* ============================ apply ============================ */

/** Merge an override onto a design, keeping every non-color field intact. */
export function applyPalette(d: DesignSystem, override: Partial<Colors> | undefined): DesignSystem {
  if (!override || Object.keys(override).length === 0) return d
  const colors: Colors = { ...d.colors, ...override }
  return { ...d, colors, accent: colors.accent }
}

/** A CSS-pasteable token block for the current (possibly overridden) palette. */
export function paletteToCss(colors: Colors): string {
  return `:root {\n${COLOR_KEYS.map((k) => `  --color-${k}: ${colors[k]};`).join('\n')}\n}\n`
}
