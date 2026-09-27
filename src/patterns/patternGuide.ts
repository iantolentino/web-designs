import { PATTERN_FAMILIES, type PatternDef, type PatternFamily, type PtKind } from './patterns'

/**
 * Pattern guide — the build notes that turn a pattern from "a nice screenshot"
 * into something an engineer can actually ship.
 *
 * Every line here is *derived* from the pattern's own composition (its blocks,
 * column counts, and family), so all patterns get concrete anatomy, states,
 * responsive rules, and an accessibility checklist without anyone hand-writing
 * metadata per entry. It is a lens over the data that already exists.
 */

export interface AnatomyStep {
  kind: PtKind
  label: string
  note: string
}

export interface PatternGuide {
  /** Ordered walk down the pattern, section by section. */
  anatomy: AnatomyStep[]
  /** What this pattern is for. */
  whenToUse: string[]
  /** Interaction / edge states a build must cover. */
  states: string[]
  /** Layout behaviour across breakpoints. */
  responsive: string[]
  /** Concrete accessibility checks for this composition. */
  a11y: string[]
  /** A hand-off paragraph you could paste into a ticket. */
  handoff: string
}

const KIND_LABEL: Record<PtKind, string> = {
  nav: 'Navigation bar',
  sidebar: 'Side navigation',
  breadcrumb: 'Breadcrumb trail',
  tabs: 'Tab set',
  toolbar: 'Toolbar',
  filters: 'Filter rail',
  pager: 'Pagination',
  steps: 'Step indicator',
  head: 'Page heading',
  hero: 'Hero',
  split: 'Split feature',
  stats: 'Stat band',
  kpis: 'KPI cards',
  cards: 'Card grid',
  list: 'List',
  media: 'Media block',
  gallery: 'Gallery',
  quote: 'Pull quote',
  logos: 'Logo cloud',
  cta: 'Call to action',
  footer: 'Footer',
  table: 'Data table',
  chart: 'Chart',
  kanban: 'Kanban board',
  calendar: 'Calendar',
  timeline: 'Timeline',
  activity: 'Activity feed',
  profile: 'Profile',
  settings: 'Settings list',
  inbox: 'Inbox list',
  members: 'Member grid',
  feed: 'Content feed',
  products: 'Product grid',
  pricing: 'Pricing tiers',
  reviews: 'Review cards',
  form: 'Form',
  auth: 'Sign-in form',
  booking: 'Booking form',
  player: 'Media player',
  tracklist: 'Track list',
  comments: 'Comments',
  chat: 'Chat thread',
  faq: 'FAQ accordion',
  code: 'Code sample',
  empty: 'Empty state',
  map: 'Map',
  status: 'Status list',
  changelog: 'Changelog',
  banner: 'Banner',
  toast: 'Toast',
  heatmap: 'Heatmap',
  skeleton: 'Loading skeleton',
}

const KIND_NOTE: Partial<Record<PtKind, string>> = {
  nav: 'Wordmark, primary links, and the single most important action, sticky at the top.',
  sidebar: 'Persistent section rail; the active item is the only one that carries weight.',
  breadcrumb: 'Orientation for deep navigation — cheap to add, expensive to omit.',
  tabs: 'Sibling views of one subject; one active, always keyboard reachable.',
  toolbar: 'Search plus contextual actions for the collection below.',
  filters: 'Narrowing controls; state must survive a reload to be trustworthy.',
  pager: 'Bounded navigation for long collections.',
  steps: 'Progress through a linear task; completed, current, and upcoming read differently.',
  head: 'The page promise — one headline and one supporting line, nothing else.',
  hero: 'The first screen: value proposition, primary action, zero ambiguity.',
  split: 'Argument beside evidence — copy in one column, proof in the other.',
  stats: 'Three to four hard numbers that make the claim credible.',
  kpis: 'Operational numbers with a trend and a comparison window.',
  cards: 'Equal-weight destinations; each one is a doorway, not a wall of text.',
  list: 'Scannable records; the first cell is the anchor, the last is the status.',
  media: 'Image or video surface; the visual earns its space or it goes.',
  gallery: 'A set of plates where the work — not the chrome — is the subject.',
  quote: 'A single voice, isolated, with attribution close enough to trust.',
  logos: 'Borrowed credibility, quiet enough to not shout.',
  cta: 'The conversion moment; one action, one sentence of reason.',
  footer: 'Legal, secondary navigation, and the last chance to orient.',
  table: 'Dense structured records; alignment and headers do the heavy lifting.',
  chart: 'One question answered visually, with the axis labelled honestly.',
  kanban: 'Work in flight across columns; counts and owners visible per card.',
  calendar: 'Time as a two-dimensional surface; today and scheduled items stand out.',
  timeline: 'Chronology with the most recent event pinned first.',
  activity: 'A running record of what changed, who changed it, and when.',
  profile: 'Identity, role, and the one relationship action that matters.',
  settings: 'Grouped preferences; each row states its effect and its state.',
  inbox: 'Message list with read/unread weight and a compact preview line.',
  members: 'People in a group; role is secondary to face and name.',
  feed: 'Stream of updates where each item carries its own metadata.',
  products: 'Catalog tiles: media, name, price, availability — in that order.',
  pricing: 'Plans compared at a glance; the recommended tier is visually lifted.',
  reviews: 'Individual opinions averaged into a decision aid.',
  form: 'Capture with labels above fields and errors adjacent to their cause.',
  auth: 'The gate: minimal friction, maximum trust, clear recovery path.',
  booking: 'Commitment of a slot — date, time, and party made explicit before submit.',
  player: 'Transport controls with position feedback that never lies.',
  tracklist: 'Ordered selection with the current item marked.',
  comments: 'A thread that preserves reply hierarchy and authorship.',
  chat: 'Turn-taking conversation with clear inbound/outbound distinction.',
  faq: 'Questions in the user\u2019s own words, answers one click away.',
  code: 'Copyable commands; the result of each command stated inline.',
  empty: 'The state before content exists — it should teach, not scold.',
  map: 'Spatial results with pins and a distance affordance.',
  status: 'Service health at a glance, with the degraded item impossible to miss.',
  changelog: 'Dated releases with the breaking change called out loudly.',
  banner: 'A page-level notice that earns its interruption or should not exist.',
  toast: 'Transient confirmation with an undo, gone before it becomes noise.',
  heatmap: 'Density over time; the legend is mandatory, colour alone is not enough.',
  skeleton: 'Structure shown before content arrives, matching the final layout.',
}

/** Conditionals for things that need a real state, not just a happy path. */
const STATE_RULES: { kinds: PtKind[]; states: string[] }[] = [
  { kinds: ['form', 'auth', 'booking'], states: ['Empty fields on first load', 'Inline validation error on blur', 'Success confirmation', 'Submitting / disabled state'] },
  { kinds: ['table', 'list', 'inbox', 'activity', 'feed', 'changelog', 'timeline'], states: ['Empty (no rows yet)', 'Loading skeleton', 'Row hover and focus', 'Long text truncated with a title'] },
  { kinds: ['cards', 'members', 'products', 'gallery', 'reviews', 'pricing', 'kpis', 'stats'], states: ['Fewer items than columns', 'More items than fit (overflow)', 'Hover and focus on each tile'] },
  { kinds: ['nav', 'sidebar', 'tabs', 'toolbar'], states: ['Active item', 'Collapsed / condensed on small screens', 'Keyboard focus ring on every control'] },
  { kinds: ['kanban'], states: ['Empty column', 'Card being dragged', 'Column over its limit'] },
  { kinds: ['calendar', 'booking'], states: ['Day with no availability', 'Selected day', 'Current day'] },
  { kinds: ['player', 'tracklist'], states: ['Paused', 'Playing', 'Ended'] },
  { kinds: ['faq'], states: ['Collapsed', 'Expanded', 'Long answer wrapping'] },
  { kinds: ['empty'], states: ['First run', 'Filtered to zero results', 'Permission denied'] },
  { kinds: ['chart', 'heatmap'], states: ['No data', 'Partial data', 'Legend present'] },
  { kinds: ['map'], states: ['No results in view', 'Selected pin', 'Cluster of nearby pins'] },
  { kinds: ['skeleton'], states: ['Matches final content height to avoid layout shift'] },
  { kinds: ['banner', 'toast'], states: ['Informational', 'Warning', 'Error', 'Dismissed'] },
]

const A11Y_RULES: { kinds: PtKind[]; checks: string[] }[] = [
  { kinds: ['nav', 'sidebar', 'breadcrumb'], checks: ['Wrap primary navigation in a <nav> landmark with an accessible name', 'Provide a visible skip-to-content link before the nav'] },
  { kinds: ['tabs'], checks: ['Implement the ARIA tabs pattern: one tab in the tab order, arrow keys move between them'] },
  { kinds: ['table'], checks: ['Use real <th scope> headers and a <caption>; never fake a table out of divs'] },
  { kinds: ['form', 'auth', 'booking', 'filters', 'settings'], checks: ['Every control has a programmatic label; errors are linked with aria-describedby'] },
  { kinds: ['media', 'gallery', 'products', 'player'], checks: ['Decorative media is aria-hidden; meaningful media carries alt text or a caption'] },
  { kinds: ['kanban', 'calendar'], checks: ['Do not encode state in colour alone; add a text label or icon per item'] },
  { kinds: ['chart', 'heatmap'], checks: ['Provide a text summary or data table equivalent for the chart'] },
  { kinds: ['chat', 'comments', 'feed', 'inbox'], checks: ['Mark new or unread items with visually hidden text, not just weight or colour'] },
  { kinds: ['faq'], checks: ['Use a <button> with aria-expanded for each question; the answer stays in the DOM order'] },
  { kinds: ['toast', 'banner'], checks: ['Announce with role="status" or aria-live; never steal focus for a non-blocking notice'] },
  { kinds: ['empty'], checks: ['The empty state is content, not decoration — give it a heading and a real next action'] },
  { kinds: ['skeleton'], checks: ['Announce loading with aria-busy on the region being replaced'] },
]

function anatomyOf(p: PatternDef): AnatomyStep[] {
  return p.blocks.map((b) => ({
    kind: b.k,
    label: KIND_LABEL[b.k] ?? b.k,
    note: b.title ? `${b.title} — ${KIND_NOTE[b.k] ?? 'Composed section.'}` : KIND_NOTE[b.k] ?? 'Composed section.',
  }))
}

function maxCols(p: PatternDef): number {
  return p.blocks.reduce((m, b) => Math.max(m, b.cols ?? (b.k === 'gallery' ? 6 : 1)), 1)
}

function responsiveOf(p: PatternDef): string[] {
  const out: string[] = []
  const cols = maxCols(p)
  out.push('Breakpoints 640 / 768 / 1024 / 1280; content capped at 1140px with a 24px gutter.')
  if (cols >= 4) {
    out.push(`Grids run up to ${cols} columns — collapse to 2 at 768px and to a single column under 640px.`)
  } else if (cols === 3 || cols === 2) {
    out.push(`Multi-column rows collapse to a single column under 768px; keep the first item above the fold.`)
  } else {
    out.push('Single-column composition — hold the measure between 60 and 75 characters.')
  }
  if (p.blocks.some((b) => b.k === 'sidebar' || b.k === 'filters')) {
    out.push('Side rails become a collapsible sheet or a filter bar above the results on small screens.')
  }
  if (p.blocks.some((b) => b.k === 'table')) {
    out.push('Tables scroll horizontally rather than squashing; pin the first column where useful.')
  }
  if (p.blocks.some((b) => b.k === 'nav')) {
    out.push('The navigation condenses to a menu button; tap targets stay at least 44px.')
  }
  if (p.blocks.some((b) => b.k === 'kanban')) {
    out.push('Kanban columns scroll horizontally; never reflow cards into a vertical list.')
  }
  return out
}

function a11yOf(p: PatternDef): string[] {
  const kinds = new Set(p.blocks.map((b) => b.k))
  const out = [
    'All text meets WCAG AA (4.5:1 body, 3:1 large); focus is a visible 3px ring with 2px offset.',
    'One <h1> per page; headings descend without skipping levels.',
  ]
  for (const rule of A11Y_RULES) {
    if (rule.kinds.some((k) => kinds.has(k))) out.push(...rule.checks)
  }
  if (p.blocks.length > 4) {
    out.push('Wrap each major section in a landmark (<header>, <main>, <section aria-labelledby>, <footer>).')
  }
  return out
}

function statesOf(p: PatternDef): string[] {
  const kinds = new Set(p.blocks.map((b) => b.k))
  const out = ['Default / populated (the happy path)', 'Keyboard focus visible on every interactive element']
  for (const rule of STATE_RULES) {
    if (rule.kinds.some((k) => kinds.has(k))) out.push(...rule.states)
  }
  return Array.from(new Set(out)).slice(0, 8)
}

function whenToUse(p: PatternDef): string[] {
  const fam = PATTERN_FAMILIES.find((f) => f.id === p.family)
  const out: string[] = []
  if (fam) out.push(fam.blurb)
  out.push(`Reach for it when you need ${p.blurb.charAt(0).toLowerCase()}${p.blurb.slice(1)}`)
  const kinds = new Set(p.blocks.map((b) => b.k))
  if (kinds.has('table') || kinds.has('kpis')) out.push('Best once the product has real data — it looks empty without records.')
  if (kinds.has('hero') || kinds.has('head')) out.push('A natural landing surface for a new page or campaign.')
  if (kinds.has('form') || kinds.has('auth')) out.push('Use as a focused task screen; keep it free of competing navigation.')
  if (kinds.has('empty')) out.push('Ship it before the feature has content — the empty state is the first impression.')
  return out
}

export function buildPatternGuide(p: PatternDef): PatternGuide {
  const fam = PATTERN_FAMILIES.find((f) => f.id === p.family)
  const anatomy = anatomyOf(p)
  const kinds = p.blocks.map((b) => KIND_LABEL[b.k] ?? b.k)
  return {
    anatomy,
    whenToUse: whenToUse(p),
    states: statesOf(p),
    responsive: responsiveOf(p),
    a11y: a11yOf(p),
    handoff: `Build the "${p.name}" screen as a ${fam?.label.toLowerCase() ?? p.family} pattern. ` +
      `Compose it top to bottom from: ${kinds.join(', ')}. ` +
      `Cover the listed states before considering it done, and meet the accessibility checks — this composition is dense enough that skipping them shows.`,
  }
}

export { KIND_LABEL }
export type { PatternFamily }
