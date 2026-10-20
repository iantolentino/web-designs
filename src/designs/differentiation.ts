import type { DesignSystem } from '../types'

/**
 * Last-mile differentiation for identity copy.
 *
 * Re-theming the duplicated wave concepts (scripts/generate-unique-concepts.cjs)
 * gives every design its own business, but a handful of hand-authored designs
 * still share a hero line or a one-sentence description. This pass walks the
 * assembled catalog once and gives the second, third, … occurrence a line built
 * from that design's own name and tags.
 *
 * Visual fields are never touched. The pass is deterministic: same catalog in,
 * same copy out, so previews and thumbnails stay stable between builds.
 */

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

const CATEGORY_ADJ: Record<string, string> = {
  Minimalism: 'quiet, restrained',
  Maximalism: 'layered, loud',
  Brutalism: 'structural, unadorned',
  Luxury: 'considered, generous',
  Playful: 'hands-on, bright',
  Retro: 'period-correct, warm',
  Organic: 'grounded, natural',
  Professional: 'rigorous, plain-spoken',
  Creative: 'expressive, editorial',
  Print: 'tactile, ink-led',
  Futuristic: 'forward-looking, precise',
}

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s)

const tagPhrase = (d: DesignSystem) => {
  const t = d.tags.filter(Boolean)
  if (t.length >= 3) return `${t[0]}, ${t[1]} and ${t[2]}`
  if (t.length === 2) return `${t[0]} and ${t[1]}`
  return t[0] ?? 'the work'
}

const HERO_TEMPLATES = [
  (d: DesignSystem) => `${d.name} makes ${d.tags[0] ?? 'the work'} feel intentional.`,
  (d: DesignSystem) => `${d.name} keeps ${d.tags[0] ?? 'the work'} and ${d.tags[1] ?? 'the craft'} on the same page.`,
  (d: DesignSystem) => `${d.name} gives ${d.tags[0] ?? 'the work'} a clearer shape.`,
  (d: DesignSystem) => `${d.name} treats ${d.tags[0] ?? 'the work'} as the whole argument.`,
  (d: DesignSystem) => `${d.name} proves ${d.tags[0] ?? 'the work'} can be legible.`,
  (d: DesignSystem) => `${d.name} puts ${d.tags[0] ?? 'the work'} before the decoration.`,
]

const DESC_TEMPLATES = [
  (d: DesignSystem) => `${d.name} is a ${CATEGORY_ADJ[d.category] ?? 'complete'} system for ${tagPhrase(d)}.`,
  (d: DesignSystem) => `A ${CATEGORY_ADJ[d.category] ?? 'complete'} system for ${tagPhrase(d)}, built around ${d.name}.`,
  (d: DesignSystem) => `${cap(tagPhrase(d))}, arranged as a ${CATEGORY_ADJ[d.category] ?? 'complete'} system for ${d.name}.`,
  (d: DesignSystem) => `${d.name} turns ${tagPhrase(d)} into a ${CATEGORY_ADJ[d.category] ?? 'complete'} design language.`,
]

export function differentiateDesigns(list: DesignSystem[]): DesignSystem[] {
  const heroes = new Set<string>()
  const descriptions = new Set<string>()

  return list.map((d) => {
    let hero = d.hero ?? ''
    let description = d.description ?? ''

    if (!hero.trim() || heroes.has(norm(hero))) {
      for (let i = 0; i < 24; i++) {
        const candidate = HERO_TEMPLATES[(i + d.id.length) % HERO_TEMPLATES.length](d)
        if (!heroes.has(norm(candidate))) {
          hero = candidate
          break
        }
      }
      /* Name is unique after the concept pass, but keep a hard guarantee. */
      if (heroes.has(norm(hero))) hero = `${d.name}: ${hero}`
      if (!hero.trim()) hero = `${d.name} makes the work feel intentional.`
    }

    if (!description.trim() || descriptions.has(norm(description))) {
      for (let i = 0; i < 24; i++) {
        const candidate = DESC_TEMPLATES[(i + d.tags.length) % DESC_TEMPLATES.length](d)
        if (!descriptions.has(norm(candidate))) {
          description = candidate
          break
        }
      }
      if (descriptions.has(norm(description))) description = `${d.name} — ${description}`
      if (!description.trim()) description = `${d.name} is a complete system for ${tagPhrase(d)}.`
    }

    heroes.add(norm(hero))
    descriptions.add(norm(description))
    if (hero === d.hero && description === d.description) return d
    return { ...d, hero, description }
  })
}
