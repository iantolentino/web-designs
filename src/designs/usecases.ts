import type { Category, DesignSystem, UseCase } from '../types'
import { DESIGN_SYSTEMS } from './index'

/**
 * Website-type index.
 *
 * A design declares a handful of `useCases` in its data file, but the catalog
 * now offers 60+ website types — far more than any single design could
 * hand-declare. This module derives the rest: every design is scored against a
 * keyword rule per website type (matched over its id, name, category, tags,
 * description, and philosophy), and any website type that still has too few
 * designs is topped up deterministically from the most popular designs in the
 * categories that suit it.
 *
 * The result: **every** option in the website-type picker filters to a real,
 * non-empty set of designs. Nothing in the design data files is modified.
 */

/** Minimum number of designs a website type should resolve to. */
const MIN_MATCHES = 5

/** Keyword rules for the expanded catalog (methods original 22 keep their authored data). */
const RULES: [UseCase, RegExp][] = [
  ['Developer Tools', /(developer|mono|terminal|code|syntax|\bapi\b|docs|blueprint|engineering|software|readme)/],
  ['DevOps & Cloud', /(infrastructure|\bcloud\b|devops|\bops\b|deploy|uptime|pipeline|server|monitor|control-room|\bhmi\b|on-call)/],
  ['Cybersecurity', /(security|cyber|threat|encrypt|defen[cs]e|military|tactical|shield|audit|firewall|secure)/],
  ['Data & Analytics', /(dashboard|analytic|\bdata\b|chart|metric|report|ledger|\bkpi\b|spreadsheet|studio-ops|graph)/],
  ['No-Code', /(builder|template|no-code|drag-and-drop|block|workspace|launch|make-it)/],
  ['Design Tools', /(design|typography|font|specimen|foundry|component|inspiration|palette|grid-system)/],
  ['Banking', /(bank|finance|fintech|money|payment|credit|wealth|capital|treasury|invest)/],
  ['Insurance', /(insurance|policy|risk|claim|coverage|protect|assurance|underwrit)/],
  ['Accounting', /(ledger|accounting|invoice|\btax\b|bookkeep|expense|payroll|receipt|number)/],
  ['Legal', /(legal|law|attorney|\bcase\b|contract|complian|regulation|\bfirm\b|justice|counsel)/],
  ['Consulting', /(consult|advisory|strategy|strategic|enterprise|professional|partner|briefcase)/],
  ['Project Management', /(project|task|kanban|board|sprint|timeline|roadmap|delivery|milestone|backlog)/],
  ['CRM', /(\bcrm\b|sales|pipeline|contact|customer|\bdeal\b|\blead\b|relationship)/],
  ['HR & Recruiting', /(\bhr\b|recruit|hiring|talent|people|onboard|candidate|employee|payroll|workforce)/],
  ['Remote Work', /(remote|distributed|async|collaborat|workspace|meeting|hybrid|video-call|team-sync)/],
  ['Startup', /(startup|launch|growth|founder|venture|bootstrap|\bmvp\b|seed-round|scale-up)/],
  ['Marketplace', /(marketplace|listing|vendor|seller|\bbid\b|classified|compare|directory|aggregat)/],
  ['Grocery', /(grocery|fresh|produce|food|recipe|farm|harvest|deli|pantry|market-stall)/],
  ['Subscription Box', /(subscription|monthly|membership|plan|tier|crate|recurring|per-month)/],
  ['Art Gallery', /(gallery|\bart\b|museum|exhibit|curat|white-cube|canvas|sculpt|atelier)/],
  ['Podcast', /(podcast|episode|listen|audio|radio|\bshow\b|voice|microphone|waveform)/],
  ['Film & TV', /(film|cinema|movie|\btv\b|screen|cinematic|director|theatre|opera|broadcast)/],
  ['Publishing', /(publish|\bbook\b|library|press|journal|paper|academia|manuscript|editorial|magazine|broadsheet)/],
  ['E-learning', /(course|lesson|curriculum|learn|tutor|quiz|student|study|academy|classroom)/],
  ['University', /(university|campus|academic|faculty|department|lecture|research|alumni|college|semester)/],
  ['Community', /(community|forum|discussion|member|social|club|network|tribe|guild|neighbour)/],
  ['Hotel', /(hotel|hospitality|\broom\b|suite|\bstay\b|resort|lobby|concierge|check-in)/],
  ['Booking', /(booking|reserve|appointment|schedule|calendar|slot|availabilit|reservation|checkout)/],
  ['Coffee Shop', /(coffee|caf[eé]|roast|espresso|brew|bakery|barista|\btea\b|brunch)/],
  ['Beauty & Spa', /(beauty|spa|salon|cosmetic|skin|glow|treatment|ritual|hair|perfume)/],
  ['Wedding', /(wedding|bride|groom|marriage|ceremony|invitation|celebrat|anniversary|registry)/],
  ['Pets', /(\bpet\b|\bdog\b|\bcat\b|\bvet\b|animal|\bpaw\b|puppy|kennel|grooming)/],
  ['Clinic', /(clinic|medical|patient|doctor|diagnos|symptom|treatment|hospital|surgery|nurse)/],
  ['Mental Health', /(therap|counsel|mental|mindful|anxiety|meditat|journalling|mood|calm-mind)/],
  ['Wellness', /(wellness|yoga|breathe|balance|holistic|rejuvenat|retreat|pilates|spa-day|self-care)/],
  ['Architecture', /(architect|blueprint|spatial|facade|structure|concrete|urban|building|plans)/],
  ['Construction', /(construction|contractor|build-site|hazard|scaffold|steel|crane|site-safety|hard-hat)/],
  ['Automotive', /(auto|\bcar\b|vehicle|motor|garage|dealership|racing|motorcycle|drive)/],
  ['Logistics', /(logistic|shipping|freight|delivery|supply-chain|fleet|warehouse|route|\btracking\b|transport)/],
  ['Manufacturing', /(manufactur|factory|plant|assembly|production|machinery|precision|foundry|industrial)/],
  ['Energy', /(energy|solar|\bpower\b|electric|grid|utility|renewable|\boil\b|\bgas\b|battery|volt)/],
  ['Agriculture', /(agri|\bfarm\b|crop|soil|harvest|ranch|grain|livestock|garden|botanic|nature|organic)/],
  ['Sports', /(sport|athlet|match|league|score|training|coach|tournament|stadium|game-day)/],
  ['Streaming', /(stream|watch|video|channel|playlist|live-feed|media|player|on-demand)/],
  ['Government', /(government|public-service|civic|municipal|policy|citizen|permit|official|tax-office)/],
]

/** Category preferences used when a website type needs a deterministic top-up. */
const AFFINITY: Partial<Record<UseCase, Category[]>> = {
  Insurance: ['Professional', 'Minimalism', 'Creative'],
  Legal: ['Professional', 'Luxury', 'Minimalism'],
  Accounting: ['Professional', 'Minimalism', 'Brutalism'],
  Banking: ['Professional', 'Minimalism', 'Luxury'],
  Consulting: ['Professional', 'Luxury', 'Minimalism'],
  'HR & Recruiting': ['Professional', 'Playful', 'Minimalism'],
  CRM: ['Professional', 'Minimalism', 'Brutalism'],
  'Remote Work': ['Minimalism', 'Professional', 'Playful'],
  'Subscription Box': ['Playful', 'Maximalism', 'Organic'],
  Grocery: ['Organic', 'Playful', 'Minimalism'],
  'Coffee Shop': ['Organic', 'Playful', 'Retro'],
  'Beauty & Spa': ['Luxury', 'Minimalism', 'Organic'],
  Wedding: ['Luxury', 'Organic', 'Playful'],
  Pets: ['Playful', 'Organic', 'Creative'],
  Automotive: ['Brutalism', 'Professional', 'Creative'],
  Construction: ['Brutalism', 'Professional', 'Creative'],
  Logistics: ['Professional', 'Brutalism', 'Minimalism'],
  Manufacturing: ['Brutalism', 'Professional', 'Creative'],
  Energy: ['Professional', 'Brutalism', 'Creative'],
  Agriculture: ['Organic', 'Minimalism', 'Retro'],
  University: ['Professional', 'Minimalism', 'Creative'],
  'E-learning': ['Playful', 'Professional', 'Minimalism'],
  Publishing: ['Creative', 'Minimalism', 'Luxury'],
  'Film & TV': ['Retro', 'Luxury', 'Creative'],
  Streaming: ['Creative', 'Maximalism', 'Retro'],
  Sports: ['Brutalism', 'Playful', 'Maximalism'],
  Government: ['Professional', 'Minimalism', 'Brutalism'],
  Clinic: ['Minimalism', 'Professional', 'Organic'],
  'Mental Health': ['Organic', 'Minimalism', 'Creative'],
  Wellness: ['Organic', 'Minimalism', 'Creative'],
  Architecture: ['Brutalism', 'Minimalism', 'Creative'],
  Hotel: ['Luxury', 'Minimalism', 'Organic'],
  Booking: ['Professional', 'Minimalism', 'Playful'],
  'Art Gallery': ['Creative', 'Minimalism', 'Luxury'],
  Podcast: ['Creative', 'Retro', 'Maximalism'],
  Community: ['Playful', 'Creative', 'Maximalism'],
  Marketplace: ['Professional', 'Maximalism', 'Playful'],
  Startup: ['Professional', 'Playful', 'Creative'],
  'No-Code': ['Playful', 'Professional', 'Minimalism'],
  'Design Tools': ['Creative', 'Minimalism', 'Luxury'],
  'Data & Analytics': ['Professional', 'Minimalism', 'Creative'],
  Cybersecurity: ['Professional', 'Creative', 'Brutalism'],
  'DevOps & Cloud': ['Professional', 'Creative', 'Minimalism'],
  'Developer Tools': ['Minimalism', 'Professional', 'Creative'],
}

function haystack(d: DesignSystem): string {
  return [d.id, d.name, d.category, d.tags.join(' '), d.description, d.designPhilosophy]
    .join(' ')
    .toLowerCase()
}

/** Authored + rule-derived website types for one design (order: authored first). */
function derive(d: DesignSystem): UseCase[] {
  const hay = haystack(d)
  const out: UseCase[] = [...d.useCases]
  const seen = new Set<UseCase>(out)
  for (const [useCase, re] of RULES) {
    if (seen.has(useCase)) continue
    if (re.test(hay)) {
      seen.add(useCase)
      out.push(useCase)
    }
  }
  return out
}

/* ---------------- Index + deterministic top-up ---------------- */

const byPopularity = [...DESIGN_SYSTEMS].sort((a, b) => b.popularity - a.popularity)

const memo = new Map<string, UseCase[]>()
function derivedFor(d: DesignSystem): UseCase[] {
  let hit = memo.get(d.id)
  if (!hit) {
    hit = derive(d)
    memo.set(d.id, hit)
  }
  return hit
}

const INDEX: Map<UseCase, string[]> = (() => {
  const index = new Map<UseCase, string[]>()
  const all = RULES.map(([u]) => u)
  for (const u of all) index.set(u, [])
  for (const d of DESIGN_SYSTEMS) {
    for (const u of derivedFor(d)) {
      const list = index.get(u)
      if (list) list.push(d.id)
      else index.set(u, [d.id])
    }
  }
  // Top up thin buckets so no picker option ever filters to nothing.
  for (const [useCase, ids] of index) {
    if (ids.length >= MIN_MATCHES) continue
    const preferred = AFFINITY[useCase]
    const pool = preferred
      ? [...byPopularity].sort((a, b) => {
          const av = preferred.indexOf(a.category)
          const bv = preferred.indexOf(b.category)
          return (av === -1 ? 99 : av) - (bv === -1 ? 99 : bv) || b.popularity - a.popularity
        })
      : byPopularity
    for (const d of pool) {
      if (ids.length >= MIN_MATCHES) break
      if (!ids.includes(d.id)) ids.push(d.id)
    }
    // Keep the derived list honest: reflect the top-up back onto the design.
    for (const id of ids) {
      const d = DESIGN_SYSTEMS.find((x) => x.id === id)
      if (!d) continue
      const list = derivedFor(d)
      if (!list.includes(useCase)) list.push(useCase)
    }
  }
  return index
})()

/** All website types that apply to a design (authored + derived + topped-up). */
export function useCasesOf(d: DesignSystem): UseCase[] {
  return derivedFor(d)
}

/** Number of designs that satisfy a website type. */
export function countForUseCase(u: UseCase): number {
  return INDEX.get(u)?.length ?? 0
}

/** Ids of the designs that satisfy a website type. */
export function idsForUseCase(u: UseCase): string[] {
  return INDEX.get(u) ?? []
}

/** True when a design satisfies a website type. */
export function matchesUseCase(d: DesignSystem, u: UseCase): boolean {
  return derivedFor(d).includes(u)
}

/** Every website type in the catalog, with its match count (sorted by count desc). */
export function useCaseStats(): { useCase: UseCase; count: number }[] {
  return [...INDEX.entries()]
    .map(([useCase, ids]) => ({ useCase, count: ids.length }))
    .sort((a, b) => b.count - a.count || a.useCase.localeCompare(b.useCase))
}
