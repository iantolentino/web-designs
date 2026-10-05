/**
 * Shell metadata.
 *
 * The sidebar and header display three counts — designs, patterns, components —
 * and describe each surface with a family/group list. Those strings are needed
 * on *every* view, but their sources of truth are heavy:
 *
 *   patterns/patterns.ts     ~123 kB of recipes + built CSS
 *   ComponentKit.tsx         ~109 kB of specimen components
 *
 * Importing them just to render a number put both squarely in the initial
 * bundle, on a route that may never open them. So the lightweight descriptions
 * live here instead, and `scripts/verify-expansion.cjs` asserts these two
 * counts against the real registries so they can never drift.
 */

export type PatternFamily =
  | 'marketing'
  | 'commerce'
  | 'app'
  | 'content'
  | 'forms'
  | 'data'
  | 'social'
  | 'system'

export type KitGroupId = 'actions' | 'selection' | 'feedback' | 'data' | 'nav' | 'overlays'

/** Total designs in the catalog — asserted against DESIGN_SYSTEMS.length.
 *
 * The catalog itself is loaded lazily (src/catalog.ts), so the shell renders
 * counts from here until the data lands.
 */
export const DESIGN_COUNT = 550

/** Total patterns in the library — asserted against PATTERNS.length. */
export const PATTERN_COUNT = 153

/** Total components in the kit — asserted against KIT_ITEMS.length. */
export const KIT_COUNT = 110

/**
 * Patterns per family — asserted against PATTERNS at build time. The sidebar
 * shows these counts next to every family, so they must live in the shell
 * without importing the library itself.
 */
export const PATTERN_FAMILY_COUNTS: Record<PatternFamily, number> = {
  marketing: 23,
  commerce: 24,
  app: 25,
  content: 19,
  forms: 17,
  data: 19,
  social: 14,
  system: 12,
}

export const PATTERN_FAMILIES: { id: PatternFamily; label: string; blurb: string }[] = [
  { id: 'marketing', label: 'Landing & marketing', blurb: 'Heroes, proof, pricing, and conversion surfaces.' },
  { id: 'commerce', label: 'Commerce & product', blurb: 'Catalogs, product detail, cart, and checkout flows.' },
  { id: 'app', label: 'Product & dashboard', blurb: 'Application shells, admin tables, and settings.' },
  { id: 'content', label: 'Content & editorial', blurb: 'Articles, galleries, media, and long reads.' },
  { id: 'forms', label: 'Forms & flows', blurb: 'Auth, booking, surveys, and multi-step capture.' },
  { id: 'data', label: 'Tables & data', blurb: 'Matrices, pipelines, schedules, and reports.' },
  { id: 'social', label: 'Social & community', blurb: 'Feeds, threads, members, and messaging.' },
  { id: 'system', label: 'System & utility', blurb: 'Empty, error, loading, and consent screens.' },
]

export const KIT_GROUPS: { id: KitGroupId; label: string; blurb: string }[] = [
  { id: 'actions', label: 'Inputs & actions', blurb: 'Buttons, fields, and every entry point a page needs.' },
  { id: 'selection', label: 'Selection & toggles', blurb: 'Choices, preferences, and rating controls.' },
  { id: 'feedback', label: 'Feedback & status', blurb: 'Progress, alerts, loading, and empty states.' },
  { id: 'data', label: 'Data display', blurb: 'Tables, lists, metrics, and code surfaces.' },
  { id: 'nav', label: 'Navigation', blurb: 'Wayfinding from breadcrumb to command palette.' },
  { id: 'overlays', label: 'Overlays & media', blurb: 'Modals, sheets, popovers, uploads, and chat.' },
]
