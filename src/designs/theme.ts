import { CATEGORY_ACCENT, CATEGORY_ORDER, type Category, type DesignSystem } from '../types'

export { CATEGORY_ACCENT, CATEGORY_ORDER }

export interface Theme {
  bg: string
  surface: string
  text: string
  muted: string
  display: string
  body: string
  primary: string
  secondary: string
  accent: string
  onPrimary: string
}

export function themeOf(d: DesignSystem): Theme {
  return {
    bg: d.colors.background,
    surface: d.colors.neutral,
    text: d.colors.text,
    muted: withAlpha(d.colors.text, 0.62),
    display: d.typography.displayFont,
    body: d.typography.bodyFont,
    primary: d.colors.primary,
    secondary: d.colors.secondary,
    accent: d.colors.accent,
    onPrimary: onColor(d.colors.primary),
  }
}

export function onColor(hex: string): string {
  return contrast(hex, '#111111') > contrast('#ffffff', hex) ? '#111111' : '#ffffff'
}

/** Convert #rrggbb to rgba(...) with alpha 0..1 */
export function withAlpha(hex: string, a: number): string {
  const c = hex.replace('#', '')
  const n = c.length === 3 ? c.split('').map((ch) => ch + ch).join('') : c
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function contrast(a: string, b: string): number {
  const L = (hex: string) => {
    const c = hex.replace('#', '')
    const n = c.length === 3 ? c.split('').map((ch) => ch + ch).join('') : c
    const f = (i: number) => {
      const v = parseInt(n.slice(i, i + 2), 16) / 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    }
    return 0.2126 * f(0) + 0.7152 * f(2) + 0.0722 * f(4)
  }
  const l1 = L(a)
  const l2 = L(b)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export function categoryAccent(c: Category): string {
  return CATEGORY_ACCENT[c]
}

export function categoriesOf(d: DesignSystem): Category[] {
  return [d.category]
}

export function sortSystems(
  systems: DesignSystem[],
  quick: string | null,
): DesignSystem[] {
  const arr = [...systems]
  if (quick === 'popular') arr.sort((a, b) => b.popularity - a.popularity)
  else if (quick === 'latest') arr.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  else if (quick === 'trending')
    arr.sort((a, b) => Number(!!b.trending) - Number(!!a.trending) || b.popularity - a.popularity)
  return arr
}
