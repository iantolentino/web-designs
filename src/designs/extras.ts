import type { Layout } from '../types'

/**
 * Wave-2 configuration layer — PURE ADDITION.
 * Every design (existing 51 + new 49) gets:
 *  - a layout-selector arrangement set (2-3 arrangements; first = its card layout tag)
 *  - an extra-blocks set (5-6 blocks; FAQ always included)
 *  - dashboard designs get exactly one extra dashboard component
 * No existing design data is modified — this file only adds per-id configuration
 * that the detail view reads. All sets were checked for uniqueness (see
 * scripts/verify.cjs): no two designs share a layout sequence; block sets rotate
 * so nearest designs never repeat; dashboard extras never repeat within 3 same-family rows.
 */

/* ---------- Layout selector arrangement sets (all 100 unique sequences) ---------- */

export const LAYOUT_SETS: Record<string, Layout[]> = {
  // Arrangement sets: 100 unique even when order is ignored (verified in scripts/verify.cjs).
  // First arrangement always equals the design's card layout tag; grouped below by that tag.
  // — first: hero-cards (22)
  'abstract-art': ['hero-cards', 'centered', 'editorial'],
  'atompunk': ['hero-cards', 'dashboard', 'manifesto'],
  'baroque-punk': ['hero-cards', 'dashboard', 'spotlight'],
  'canopy-lodge': ['hero-cards', 'dashboard', 'full-bleed'],
  'collision-course': ['hero-cards', 'asymmetric', 'dashboard'],
  'cottagecore': ['hero-cards', 'dashboard', 'editorial'],
  'desert-modern': ['hero-cards', 'centered', 'dashboard'],
  'festival-vivid': ['hero-cards', 'magazine', 'manifesto'],
  'frontier-western': ['hero-cards', 'magazine', 'spotlight'],
  'graffiti-street': ['hero-cards', 'full-bleed', 'magazine'],
  'gumball': ['hero-cards', 'asymmetric', 'magazine'],
  'illustration-heavy': ['hero-cards', 'editorial', 'magazine'],
  'neon-maximalist': ['hero-cards', 'centered', 'magazine'],
  'pastel-playful': ['hero-cards', 'dashboard', 'magazine'],
  'playful-maximalist': ['hero-cards', 'manifesto', 'split-hero'],
  'rainbow-playful': ['hero-cards', 'split-hero', 'spotlight'],
  'raw-brutalism': ['hero-cards', 'full-bleed', 'split-hero'],
  'riot-xerox': ['hero-cards', 'asymmetric', 'split-hero'],
  'seventies-sunburst': ['hero-cards', 'editorial', 'split-hero'],
  'vaporwave': ['hero-cards', 'centered', 'split-hero'],
  'web1-brutalism': ['hero-cards', 'dashboard', 'split-hero'],
  'y2k-retro': ['hero-cards', 'magazine', 'split-hero'],
  // — first: split-hero (17)
  'bounce-house': ['split-hero', 'manifesto', 'spotlight'],
  'briefcase-slate': ['split-hero', 'full-bleed', 'manifesto'],
  'brut-sunbelt': ['split-hero', 'editorial', 'manifesto'],
  'cassette-deck': ['split-hero', 'asymmetric', 'spotlight'],
  'clinic-warm': ['split-hero', 'full-bleed', 'spotlight'],
  'clinical-care': ['split-hero', 'magazine', 'manifesto'],
  'corporate-blue': ['split-hero', 'centered', 'spotlight'],
  'deep-current': ['split-hero', 'asymmetric', 'manifesto'],
  'ink-house': ['split-hero', 'centered', 'magazine'],
  'minimalist-luxury': ['split-hero', 'asymmetric', 'editorial'],
  'minimalist-tech': ['split-hero', 'dashboard', 'magazine'],
  'nature-inspired': ['split-hero', 'asymmetric', 'full-bleed'],
  'nordic-hygge': ['split-hero', 'centered', 'manifesto'],
  'obsidian-atelier': ['split-hero', 'asymmetric', 'magazine'],
  'pearl-hotel': ['split-hero', 'full-bleed', 'magazine'],
  'tide-pool': ['split-hero', 'dashboard', 'spotlight'],
  'toybox-round': ['split-hero', 'dashboard', 'manifesto'],
  // — first: magazine (16)
  'bold-luxury': ['magazine', 'full-bleed', 'spotlight'],
  'botanical': ['magazine', 'full-bleed', 'manifesto'],
  'broadsheet-press': ['magazine', 'asymmetric', 'manifesto'],
  'confetti-brew': ['magazine', 'centered', 'full-bleed'],
  'editorial-maximalist': ['magazine', 'centered', 'dashboard'],
  'geometric-art': ['magazine', 'editorial', 'manifesto'],
  'harvest-table': ['magazine', 'split-hero', 'spotlight'],
  'ledger-raw': ['magazine', 'asymmetric', 'spotlight'],
  'memphis-pop': ['magazine', 'centered', 'editorial'],
  'mosaic-max': ['magazine', 'dashboard', 'editorial'],
  'opera-box': ['magazine', 'dashboard', 'spotlight'],
  'pop-comics': ['magazine', 'asymmetric', 'editorial'],
  'refined-brutalism': ['magazine', 'asymmetric', 'dashboard'],
  'sticker-storm': ['magazine', 'centered', 'spotlight'],
  'studio-noir': ['magazine', 'asymmetric', 'centered'],
  'swiss-editorial': ['magazine', 'dashboard', 'manifesto'],
  // — first: dashboard (13)
  'arcade-pop': ['dashboard', 'centered', 'full-bleed'],
  'blueprint-tech': ['dashboard', 'full-bleed', 'magazine'],
  'campus-lms': ['dashboard', 'full-bleed', 'spotlight'],
  'civic-trust': ['dashboard', 'asymmetric', 'spotlight'],
  'cyberpunk-retro': ['dashboard', 'asymmetric', 'manifesto'],
  'ledger-fintech': ['dashboard', 'full-bleed', 'manifesto'],
  'soft-mono': ['dashboard', 'asymmetric', 'split-hero'],
  'startup-serious': ['dashboard', 'editorial', 'manifesto'],
  'steel-plant': ['dashboard', 'full-bleed', 'split-hero'],
  'system-cool': ['dashboard', 'asymmetric', 'full-bleed'],
  'tactical-hud': ['dashboard', 'editorial', 'split-hero'],
  'tech-corporate': ['dashboard', 'centered', 'spotlight'],
  'terminal-ops': ['dashboard', 'centered', 'split-hero'],
  // — first: centered (11)
  'art-deco': ['centered', 'asymmetric', 'hero-cards'],
  'art-nouveau': ['centered', 'magazine', 'manifesto'],
  'biophilic': ['centered', 'full-bleed', 'split-hero'],
  'champagne-noir': ['centered', 'dashboard', 'manifesto'],
  'dark-luxury': ['centered', 'asymmetric', 'editorial'],
  'linen-quiet': ['centered', 'editorial', 'full-bleed'],
  'moss-and-stone': ['centered', 'hero-cards', 'spotlight'],
  'neo-gothic': ['centered', 'full-bleed', 'hero-cards'],
  'scaffold': ['centered', 'asymmetric', 'dashboard'],
  'storybook-night': ['centered', 'asymmetric', 'split-hero'],
  'zen-minimal': ['centered', 'editorial', 'split-hero'],
  // — first: editorial (9)
  'dark-academia': ['editorial', 'split-hero', 'spotlight'],
  'dial-up': ['editorial', 'asymmetric', 'dashboard'],
  'foundry-type': ['editorial', 'dashboard', 'full-bleed'],
  'glacier-air': ['editorial', 'asymmetric', 'hero-cards'],
  'heritage-linen': ['editorial', 'hero-cards', 'manifesto'],
  'ink-wash': ['editorial', 'dashboard', 'spotlight'],
  'ivory-gallery': ['editorial', 'centered', 'dashboard'],
  'vintage-print': ['editorial', 'magazine', 'spotlight'],
  'wabi-sabi': ['editorial', 'magazine', 'split-hero'],
  // — first: asymmetric (4)
  'collage-cut': ['asymmetric', 'hero-cards', 'spotlight'],
  'doodle-desk': ['asymmetric', 'full-bleed', 'magazine'],
  'graphite-focus': ['asymmetric', 'hero-cards', 'manifesto'],
  'riso-flood': ['asymmetric', 'full-bleed', 'hero-cards'],
  // — first: full-bleed (3)
  'acid-garden': ['full-bleed', 'editorial', 'hero-cards'],
  'audio-wave': ['full-bleed', 'editorial', 'split-hero'],
  'monolith-black': ['full-bleed', 'editorial', 'magazine'],
  // — first: spotlight (3)
  'jelly-toy': ['spotlight', 'hero-cards', 'manifesto'],
  'puppet-theater': ['spotlight', 'full-bleed', 'hero-cards'],
  'velvet-loud': ['spotlight', 'editorial', 'hero-cards'],
  // — first: manifesto (2)
  'concrete-slab': ['manifesto', 'centered', 'hero-cards'],
  'skate-zine': ['manifesto', 'full-bleed', 'hero-cards'],
}

/* ---------- Extra content blocks (FAQ always present) ---------- */

export type BlockId = 'testimonials' | 'stats' | 'faq' | 'cta' | 'pricing' | 'cards'

export const BLOCK_LABEL: Record<BlockId, string> = {
  testimonials: 'Testimonials',
  stats: 'Stats band',
  faq: 'FAQ',
  cta: 'CTA banner',
  pricing: 'Pricing',
  cards: 'Card grid',
}

/** Canonical display order inside the Blocks section. */
const BLOCK_ORDER: BlockId[] = ['testimonials', 'stats', 'faq', 'cta', 'pricing', 'cards']

/** Six patterns — five curated sets (each drops one optional block; FAQ never dropped) + the full 6. */
const BLOCK_PATTERNS: BlockId[][] = [
  ['testimonials', 'stats', 'faq', 'cta', 'cards'], // no pricing
  ['testimonials', 'stats', 'faq', 'cta', 'pricing'], // no card grid
  ['testimonials', 'faq', 'cta', 'pricing', 'cards'], // no stats
  ['stats', 'faq', 'cta', 'pricing', 'cards'], // no testimonials
  ['testimonials', 'stats', 'faq', 'pricing', 'cards'], // no CTA
  ['testimonials', 'stats', 'faq', 'cta', 'pricing', 'cards'], // full set
]

/**
 * Family rosters in registry order. Patterns rotate with a per-family offset so
 * consecutive members never share a pattern and the two members distance 6 apart
 * in one family repeat only at the boundary — the 5 nearest designs in a category
 * always differ. Verified in scripts/verify.cjs.
 */
const FAMILY_IDS: string[][] = [
  // Minimalism
  ['minimalist-tech', 'zen-minimal', 'swiss-editorial', 'soft-mono', 'ink-wash', 'nordic-hygge', 'wabi-sabi', 'graphite-focus', 'linen-quiet', 'system-cool', 'ivory-gallery'],
  // Maximalism
  ['playful-maximalist', 'neon-maximalist', 'editorial-maximalist', 'festival-vivid', 'baroque-punk', 'collision-course', 'sticker-storm', 'velvet-loud', 'mosaic-max', 'acid-garden', 'riso-flood'],
  // Brutalism
  ['raw-brutalism', 'refined-brutalism', 'web1-brutalism', 'tactical-hud', 'concrete-slab', 'riot-xerox', 'steel-plant', 'brut-sunbelt', 'monolith-black', 'ledger-raw', 'scaffold'],
  // Luxury
  ['minimalist-luxury', 'dark-luxury', 'bold-luxury', 'neo-gothic', 'art-deco', 'dark-academia', 'champagne-noir', 'pearl-hotel', 'opera-box', 'obsidian-atelier', 'heritage-linen'],
  // Playful
  ['pastel-playful', 'rainbow-playful', 'toybox-round', 'pop-comics', 'gumball', 'doodle-desk', 'bounce-house', 'storybook-night', 'arcade-pop', 'jelly-toy', 'confetti-brew'],
  // Retro
  ['vintage-print', 'memphis-pop', 'y2k-retro', 'cyberpunk-retro', 'broadsheet-press', 'atompunk', 'vaporwave', 'frontier-western', 'cassette-deck', 'seventies-sunburst', 'dial-up'],
  // Organic
  ['nature-inspired', 'biophilic', 'botanical', 'deep-current', 'desert-modern', 'cottagecore', 'moss-and-stone', 'tide-pool', 'canopy-lodge', 'glacier-air', 'harvest-table'],
  // Professional
  ['corporate-blue', 'startup-serious', 'tech-corporate', 'blueprint-tech', 'clinical-care', 'ledger-fintech', 'briefcase-slate', 'campus-lms', 'clinic-warm', 'terminal-ops', 'civic-trust'],
  // Creative
  ['abstract-art', 'geometric-art', 'illustration-heavy', 'ink-house', 'graffiti-street', 'art-nouveau', 'studio-noir', 'collage-cut', 'foundry-type', 'puppet-theater', 'audio-wave', 'skate-zine'],
]

const BLOCK_SETS: Record<string, BlockId[]> = {}
FAMILY_IDS.forEach((family, fi) => {
  family.forEach((id, i) => {
    const patternIndex = (i + fi) % BLOCK_PATTERNS.length
    const set = BLOCK_PATTERNS[patternIndex]
    BLOCK_SETS[id] = BLOCK_ORDER.filter((b) => set.includes(b))
  })
})

export function getBlockSet(id: string): BlockId[] {
  return BLOCK_SETS[id] ?? ['testimonials', 'stats', 'faq', 'cta', 'pricing', 'cards']
}

/* ---------- Dashboard extras (one per dashboard-capable design) ---------- */

export type DashExtra = 'report-builder' | 'kanban' | 'calendar' | 'activity'

export const DASH_EXTRA_LABEL: Record<DashExtra, string> = {
  'report-builder': 'Report builder',
  kanban: 'Kanban board',
  calendar: 'Calendar',
  activity: 'Activity feed',
}

export const DASH_EXTRAS: Record<string, DashExtra> = {
  'soft-mono': 'report-builder',
  'tactical-hud': 'activity',
  'cyberpunk-retro': 'kanban',
  'startup-serious': 'calendar',
  'tech-corporate': 'report-builder',
  'blueprint-tech': 'kanban',
  'system-cool': 'calendar',
  'steel-plant': 'activity',
  'ledger-fintech': 'report-builder',
  'campus-lms': 'kanban',
  'terminal-ops': 'activity',
  'civic-trust': 'calendar',
  // Wave-2 additions (family-rotation rule re-checked: no repeat within 3 rows)
  'corporate-blue': 'activity',
  'briefcase-slate': 'calendar',
  'broadsheet-press': 'report-builder',
  'cassette-deck': 'calendar',
  'dial-up': 'activity',
  'desert-modern': 'calendar',
  'canopy-lodge': 'kanban',
  'arcade-pop': 'kanban',
  'geometric-art': 'calendar',
  'graffiti-street': 'activity',
  'foundry-type': 'report-builder',
  'audio-wave': 'calendar',
}

export function getDashExtra(id: string): DashExtra | undefined {
  return DASH_EXTRAS[id]
}
