/**
 * Per-design voice packs for the live preview.
 *
 * The old preview said the same thing on every design — "Work / Studio /
 * Journal / Contact", "98% ship faster", "$0 / $12 / $29" — only the colors
 * changed. Everything in here is derived from the design's own tags,
 * use-cases, category, and author, so a kennel site talks like a kennel and a
 * trading floor talks like a trading floor. Deterministic: same design in,
 * same copy out.
 */

import type { DesignSystem } from '../types'

/** A small bank of first-person quotes per voice family. */
const VOICE_QUOTES: Record<string, string[]> = {
  pets: [
    'The adoption cards read like file folders, and honestly that is what they are.',
    'Our vet-record tables finally look like something a clinic would trust.',
    'Three clicks from a photo of a dog to a booked meet-and-greet.',
  ],
  food: [
    'The menu reads like it was letterpressed this morning.',
    'We put the recipe cards straight into the design and nobody noticed the join.',
    'The hours block is a stamp now. People screenshot it.',
  ],
  finance: [
    'The ledger tables align decimals the way our old terminal did — on purpose.',
    'Compliance read the palette documentation and signed off in one meeting.',
    'Numbers first, decoration never. The system made that a rule, not a fight.',
  ],
  wellness: [
    'Booking a session feels like the first breath of the class.',
    'The palette does the calming before a single word loads.',
    'Our schedule reads like a timetable, not a sales page.',
  ],
  creative: [
    'Portfolio pages build themselves out of the catalog arrangement.',
    'Clients pick a case study, not a template — the system made that natural.',
    'The gallery layout frames work better than our old slideshow did.',
  ],
  events: [
    'The lineup block sold more tickets than our old hero ever did.',
    'Schedule, map, wristband stripes — the poster practically folds itself.',
    'The film-strip arrangement is doing our photo coverage for us.',
  ],
  ops: [
    'The status board replaced three spreadsheets and one group chat.',
    'On-call loves it: the alert amber only ever means one thing.',
    'Our runbook pages render straight out of the docs shell.',
  ],
  retail: [
    'The catalog grid carries the whole shop — filters, pager, stock badges.',
    'Product plates, price rules, low-stock flags: all one vocabulary.',
    'Checkout lost two steps and the cart badge finally matches the brand.',
  ],
  learning: [
    'The lesson pages read like a well-set textbook, homework included.',
    'Course cards, syllabus tables, quiz forms — one kit covers all of it.',
    'Students screenshot the timetable block. That never happened before.',
  ],
  hospitality: [
    'Room cards carry the rate, the availability dot, and the mood in one plate.',
    'The booking calendar matches the palette so guests trust it.',
    'Our concierge notes render as field notes now. Guests notice.',
  ],
  civic: [
    'The notice board layout survives real clerks and real deadlines.',
    'Every table survives print, which is the actual requirement.',
    'Forms read as official without reading as hostile.',
  ],
  media: [
    'The masthead carries the issue, the article grid carries the argument.',
    'Pull quotes from our archive land without extra styling.',
    'The film-strip coverage block is doing our photo essays for us.',
  ],
  default: [
    'The rules did the arguing so the team did not have to.',
    'We stopped debating shades and started shipping pages.',
    'New pages already look art-directed. That is the system working.',
  ],
}

type VoiceKey = keyof typeof VOICE_QUOTES

/** Which quote bank a design draws from, keyed off tags + use-cases. */
const VOICE_RULES: [RegExp, VoiceKey][] = [
  [/\b(pet|dog|cat|vet|kennel|puppy|animal|grooming|adoption)\b/i, 'pets'],
  [/\b(coffee|cafe|menu|bakery|recipe|kitchen|food|harvest|grocery|deli|pantry|brew|restaurant|diner|milk.?bar|pizza|taco|butcher|bistro|cream|confectionery)\b/i, 'food'],
  [/\b(bank|fintech|ledger|invoice|accounting|tax|payroll|trading|money|payment|underwriting|insurance|audit|expense|treasury|capital)\b/i, 'finance'],
  [/\b(yoga|wellness|spa|therapy|mindful|meditation|retreat|salon|beauty|skincare|clinic|mental|calm|breathe|pilates|self.?care)\b/i, 'wellness'],
  [/\b(portfolio|gallery|atelier|studio|museum|art|foundry|typography|inspiration|creative)\b/i, 'creative'],
  [/\b(festival|concert|event|events|gig|tour|lineup|party|inflatables|wedding|fundraiser|duck.?race|circus|expedition)\b/i, 'events'],
  [/\b(dashboard|analytics|status|ops|devops|infrastructure|monitor|control.?room|terminal|server|uptime|deploy|logistics|dispatch)\b/i, 'ops'],
  [/\b(shop|store|catalog|commerce|product|marketplace|retail|market.?stall|classified|listing|vinyl|records)\b/i, 'retail'],
  [/\b(courses|lesson|school|academy|learning|education|study|campus|university|tutor|curriculum|classroom)\b/i, 'learning'],
  [/\b(hotel|stay|hostel|resort|booking|suite|lobby|concierge|room|travel|itinerary|atlas|waypoints)\b/i, 'hospitality'],
  [/\b(gov|council|civic|archive|notary|legal|law|court|library|history|heritage|observatory|survey|geological)\b/i, 'civic'],
  [/\b(news|press|magazine|journal|broadsheet|editorial|zine|publishing|blog|review|film|cinema|podcast|broadcast)\b/i, 'media'],
]

const CATEGORY_VOICE: Record<string, VoiceKey> = {
  Professional: 'ops',
  Luxury: 'retail',
  Minimalism: 'creative',
  Creative: 'creative',
  Playful: 'events',
  Organic: 'food',
  Retro: 'media',
  Brutalism: 'ops',
  Maximalism: 'events',
}

/** Nav vocabularies by family — picked per design. */
const NAV_BANKS: [RegExp, string[]][] = [
  [/\b(shop|store|commerce|marketplace|retail|vinyl|market.?stall|classified|listing|grocery|butcher|deli|confectionery|records)\b/i, ['Shop', 'Lookbook', 'Stockists', 'Cart (2)']],
  [/\b(restaurant|cafe|menu|bakery|coffee|kitchen|deli|diner|bistro|cream|milk.?bar|pizza|taco|recipe|harvest)\b/i, ['Menu', 'Our story', 'Find us', 'Book a table']],
  [/\b(hotel|stay|hostel|resort|booking|suite|travel|itinerary|atlas|waypoints|tour|expedition)\b/i, ['Stays', 'Routes', 'Journal', 'Availability']],
  [/\b(portfolio|gallery|atelier|art|foundry|typography|design|museum|studio)\b/i, ['Work', 'Archive', 'About', 'Commission']],
  [/\b(clinic|care|medical|vet|patient|mental|wellness|yoga|spa|therapy|salon|beauty|skincare)\b/i, ['Care', 'Team', 'Stories', 'Book now']],
  [/\b(festival|gig|concert|event|events|lineup|party|inflatables|wedding|duck.?race|circus|radio)\b/i, ['Lineup', 'Tickets', 'Map', 'Get passes']],
  [/\b(docs|developer|blueprint|terminal|code|api|infrastructure|devops|status|monitor)\b/i, ['Docs', 'Changelog', 'Status', 'Console']],
  [/\b(bank|fintech|ledger|trading|money|invoice|payroll|insurance|underwriting|audit|treasury)\b/i, ['Accounts', 'Reports', 'Security', 'Open an account']],
  [/\b(news|press|magazine|journal|broadsheet|zine|editorial|publishing|blog)\b/i, ['Latest', 'Issues', 'Archive', 'Subscribe']],
  [/\b(school|academy|courses|learning|education|campus|university|study)\b/i, ['Courses', 'Syllabus', 'Faculty', 'Enrol']],
  [/\b(gov|council|civic|archive|notary|legal|law|court|heritage|observatory|survey|geological|records)\b/i, ['Services', 'Notices', 'Records', 'Contact desk']],
  [/\b(pet|dog|cat|vet|kennel|animal|adoption|grooming|puppy)\b/i, ['Adopt', 'Services', 'Stories', 'Meet them']],
  [/\b(podcast|radio|aircheck|waveform|broadcast)\b/i, ['Episodes', 'Archive', 'About', 'Listen']],
]

const DEFAULT_NAV = ['Work', 'Studio', 'Journal', 'Contact']

/** CTA pairs — primary + secondary per voice family. */
const CTA_BANKS: [RegExp, [string, string]][] = [
  [/\b(shop|store|commerce|marketplace|retail|vinyl|listing|classified)\b/i, ['Shop new arrivals', 'Browse the archive']],
  [/\b(restaurant|cafe|menu|bakery|coffee|kitchen|deli|diner|bistro|cream|milk.?bar|recipe|harvest)\b/i, ['See the menu', 'Book a table']],
  [/\b(booking|hotel|stay|hostel|resort|suite|travel|itinerary|atlas|waypoints)\b/i, ['Check availability', 'See the routes']],
  [/\b(clinic|care|medical|vet|patient|mental|wellness|yoga|spa|therapy|salon|beauty|skincare)\b/i, ['Book an appointment', 'Meet the team']],
  [/\b(festival|gig|concert|events|lineup|party|inflatables|wedding|duck.?race|circus|tickets)\b/i, ['Get passes', 'See the lineup']],
  [/\b(docs|developer|blueprint|terminal|code|api|infrastructure|devops|status|monitor)\b/i, ['Read the docs', 'Open the console']],
  [/\b(bank|fintech|ledger|trading|money|invoice|payroll|insurance|underwriting|audit|treasury)\b/i, ['Open an account', 'See the rates']],
  [/\b(portfolio|gallery|atelier|art|foundry|typography|design|museum)\b/i, ['View the work', 'Start a project']],
  [/\b(news|press|magazine|journal|broadsheet|zine|editorial|publishing|blog)\b/i, ['Read the issue', 'Subscribe']],
  [/\b(school|academy|courses|learning|education|campus|university|study)\b/i, ['Browse courses', 'Meet the faculty']],
  [/\b(gov|council|civic|archive|notary|legal|law|court|heritage|observatory|survey)\b/i, ['Find a service', 'Read the notices']],
  [/\b(pet|dog|cat|vet|kennel|animal|adoption|grooming|puppy)\b/i, ['Meet the animals', 'Book a visit']],
  [/\b(dashboard|analytics|status|ops|devops|monitor|control.?room|server|uptime|deploy)\b/i, ['Open the board', 'View runbooks']],
  [/\b(game|arcade|toy|play|kids|craft|puppet|cartoon|comic)\b/i, ['Start playing', 'Meet the cast']],
]

const DEFAULT_CTA: [string, string] = ['Get started', 'Learn more']

/** Kickers for the hero: one per category, so the opener already differs. */
const CATEGORY_KICKER: Record<string, string> = {
  Minimalism: 'A quiet system for',
  Maximalism: 'A loud, layered system for',
  Brutalism: 'A structural system for',
  Luxury: 'A considered system for',
  Playful: 'A hands-on system for',
  Retro: 'A period-correct system for',
  Organic: 'A grounded, organic system for',
  Professional: 'A rigorous system for',
  Creative: 'An expressive system for',
}

/** Tier names + prices for pricing blocks, per voice family. */
const TIER_BANKS: [RegExp, [string, string][]][] = [
  [/\b(pet|dog|cat|vet|kennel|animal|adoption|grooming)\b/i, [['Single visit', '45'], ['Care plan', '19/mo'], ['Whole family', '39/mo']]],
  [/\b(restaurant|cafe|menu|bakery|coffee|kitchen|deli|diner|bistro|cream)\b/i, [['Flat white', '4.20'], ['Lunch set', '16'], ['Feast menu', '42/head']]],
  [/\b(shop|store|commerce|marketplace|retail|vinyl|listing)\b/i, [['Standard', 'free'], ['Member', '9/mo'], ['Trade', '24/mo']]],
  [/\b(booking|hotel|stay|hostel|resort|suite|travel|itinerary|atlas|waypoints)\b/i, [['One night', '129'], ['Long stay', '99/night'], ['Whole house', '340/night']]],
  [/\b(clinic|care|medical|vet|patient|mental|wellness|yoga|spa|therapy|salon)\b/i, [['Drop-in', '18'], ['Monthly', '42/mo'], ['Programme', '120/term']]],
  [/\b(festival|gig|concert|events|lineup|party|inflatables|wedding|duck.?race|circus|tickets)\b/i, [['Day pass', '35'], ['Weekend', '89'], ['Crew of four', '299']]],
  [/\b(docs|developer|blueprint|terminal|code|api|infrastructure|devops|status|monitor)\b/i, [['Read-only', 'free'], ['Team', '16/mo'], ['Fleet', '60/mo']]],
  [/\b(bank|fintech|ledger|trading|money|invoice|payroll|insurance|underwriting|audit|treasury)\b/i, [['Personal', 'free'], ['Business', '14/mo'], ['Treasury', '49/mo']]],
  [/\b(portfolio|gallery|atelier|art|foundry|typography|design|museum)\b/i, [['Postcard', '6'], ['Print', '38'], ['Commission', 'from 240']]],
  [/\b(news|press|magazine|journal|broadsheet|zine|editorial|publishing|blog)\b/i, [['Daily', 'free'], ['Weekend edition', '6/wk'], ['Annual', '99/yr']]],
  [/\b(school|academy|courses|learning|education|campus|university|study)\b/i, [['Taster', 'free'], ['Term', '180'], ['Full year', '540']]],
  [/\b(gov|council|civic|archive|notary|legal|law|court|heritage|observatory|survey)\b/i, [['Lookup', 'free'], ['Certified copy', '12'], ['Bulk records', 'per schedule']]],
  [/\b(game|arcade|toy|play|kids|craft|puppet|cartoon|comic)\b/i, [['Free play', 'free'], ['Season pass', '12'], ['Club kit', '30']]],
]

const DEFAULT_TIERS: [string, string][] = [
  ['Starter', 'free'],
  ['Studio', '18/mo'],
  ['Org', '49/mo'],
]

/** Tier-perk lines below the price, per voice family. */
const PERK_BANKS: [RegExp, string[][]][] = [
  [/\b(pet|dog|cat|vet|kennel|animal|adoption|grooming)\b/i, [['Meet-and-greet', 'Vet-checked', 'Take-home kit'], ['Home check', 'Vaccines up to date', 'Support line'], ['Training taster', 'Photo album', 'Lifetime advice']]],
  [/\b(restaurant|cafe|menu|bakery|coffee|kitchen|deli|diner|bistro|cream)\b/i, [['Counter seat', 'Daily bake', 'Refills'], ['Two courses', 'House wine', 'No service charge'], ['Chef\u2019s table', 'Tasting menu', 'Sommelier picks']]],
  [/\b(shop|store|commerce|marketplace|retail|vinyl|listing)\b/i, [['Free returns', 'Member prices', 'Wishlist'], ['Early access', 'Gift wrap', 'Free shipping'], ['Trade prices', 'Net-30 terms', 'Account manager']]],
  [/\b(booking|hotel|stay|hostel|resort|suite|travel|itinerary|atlas|waypoints)\b/i, [['Late checkout', 'Local map', 'Breakfast'], ['Room upgrade', 'Harbour view', 'Late checkout'], ['Whole house', 'Chef night', 'Skiff included']]],
  [/\b(clinic|care|medical|vet|patient|mental|wellness|yoga|spa|therapy|salon)\b/i, [['Single session', 'Intake call', 'Notes kept'], ['Weekly slot', 'Progress notes', 'Message access'], ['Full programme', 'Reviews each term', 'Partner sessions']]],
  [/\b(festival|gig|concert|events|lineup|party|inflatables|wedding|duck.?race|circus|tickets)\b/i, [['Gate entry', 'Cloakroom', 'Set times'], ['Both days', 'Campsite', 'Poster included'], ['Backstage tour', 'Merch bundle', 'Photo pit']]],
  [/\b(docs|developer|blueprint|terminal|code|api|infrastructure|devops|status|monitor)\b/i, [['Community answers', 'Public roadmap', 'Status page'], ['Audit log', 'SSO', 'Priority fixes'], ['On-prem', 'SLA', 'Named engineer']]],
  [/\b(bank|fintech|ledger|trading|money|invoice|payroll|insurance|underwriting|audit|treasury)\b/i, [['Fee-free card', 'Instant notifications', 'Savings pot'], ['Multi-user', 'CSV export', 'Accountant access'], ['API access', 'Dedicated support', 'Treasury sweeps']]],
  [/\b(portfolio|gallery|atelier|art|foundry|typography|design|museum)\b/i, [['Digital catalogue', 'Studio visits', 'Newsletter'], ['Framing advice', 'Editions list', 'Preview nights'], ['Plinth & lighting', 'Installation', 'Resale register']]],
  [/\b(news|press|magazine|journal|broadsheet|zine|editorial|publishing|blog)\b/i, [['Today\u2019s edition', 'Newsletters', 'Comments'], ['Weekend paper', 'Crosswords', 'Archive access'], ['Licence for teams', 'API access', 'Print edition']]],
  [/\b(school|academy|courses|learning|education|campus|university|study)\b/i, [['Sample lesson', 'Reading list', 'Community'], ['Live seminars', 'Marked assignments', 'Office hours'], ['Full curriculum', 'Mentor', 'Certificate']]],
  [/\b(gov|council|civic|archive|notary|legal|law|court|heritage|observatory|survey)\b/i, [['Search the index', 'Opening hours', 'Guidance notes'], ['Certified copies', 'Stamped forms', 'Phone line'], ['Bulk requests', 'Formal delivery', 'Scheduled visits']]],
  [/\b(game|arcade|toy|play|kids|craft|puppet|cartoon|comic)\b/i, [['Core deck', 'Daily challenge', 'Stickers'], ['Everything unlocked', 'No ads', 'Cloud saves'], ['Club events', 'Merch drop', 'Leaderboard']]],
]

const DEFAULT_PERKS: string[][] = [
  ['1 workspace', 'Core token set', 'Community answers'],
  ['Unlimited projects', 'Priority support', 'Custom domain'],
  ['Shared libraries', 'Review workflows', 'Onboarding kit'],
]

const OPS_KPI: [string, string, string][] = [
  ['Uptime', '99.98%', '+0.02%'],
  ['p95 latency', '212ms', '−8ms'],
  ['Deploys today', '14', 'on schedule'],
  ['Open incidents', '0', '35d clean'],
]

const GROWTH_KPI: [string, string, string][] = [
  ['Active accounts', '12,043', '+3.1%'],
  ['Conversion', '4.6%', '+0.4%'],
  ['Refunds', '0.8%', '−0.2%'],
  ['NPS', '62', '+5'],
]

const DESK_KPI: [string, string, string][] = [
  ['Bookings this week', '38', '+6'],
  ['Response time', '1.4h', '−0.3h'],
  ['Repeat rate', '71%', '+4%'],
  ['Waitlist', '22', 'steady'],
]

/**
 * Deterministic hash — FNV-1a. Same design in, same copy out, every render.
 */
export function voiceHash(s: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h
}

/** Pick index `(seed + spin) % n` — deterministic with a design-specific spin. */
function pick<T>(arr: T[], seed: number, spin = 0): T {
  return arr[(seed + spin) % arr.length]
}

export interface VoicePack {
  /** Hero kicker, category-flavored. */
  kicker: string
  /** Nav links; the first renders as the active item. */
  nav: string[]
  /** Primary + secondary CTA pair. */
  cta: [string, string]
  /** Three stat figures with labels. */
  stats: [string, string][]
  /** Tier names + prices for pricing blocks. */
  tiers: [string, string][]
  /** Tier perk rows (one row per tier), for pricing blocks. */
  tierPerks: string[][]
  /** Three testimonials: quote, attribution, avatar initial. */
  quotes: { q: string; a: string; i: string }[]
  /** Dashboard sidebar items, heading, action and KPI row. */
  dash: { items: string[]; heading: string; action: string; kpis: [string, string, string][] }
  /** Form heading, submit label, tertiary link, success line. */
  form: { heading: string; submit: string; tertiary: string; ok: string }
  /** Extra meta line for footers / receipts / ledgers. */
  meta: string
  /** Short action for the nav button. */
  navAction: string
}

/** Perk rows for a given tier index, from the matched bank. */
export function voicePerks(p: VoicePack, i: number): string[] {
  const rows = p.tierPerks
  return rows[i % rows.length]
}

/**
 * Build the voice pack for a design. Falls through rules → category →
 * defaults, so nothing renders without a complete pack.
 */
export function voicePack(d: DesignSystem): VoicePack {
  // The preview prose (`designDetails`) is not consulted: it ships in its own
  // chunk, so a voice would otherwise depend on whether a preview had opened.
  // Identity, tags, website types and category carry the same signals.
  const haystack = `${d.id} ${d.name} ${d.tags.join(' ')} ${d.useCases.join(' ')} ${d.category}`
  const seed = voiceHash(d.id)

  const voiceKey: VoiceKey =
    VOICE_RULES.find(([re]) => re.test(haystack))?.[1] ??
    CATEGORY_VOICE[d.category] ??
    'default'
  const quotes = VOICE_QUOTES[voiceKey] ?? VOICE_QUOTES.default

  const nav = NAV_BANKS.find(([re]) => re.test(haystack))?.[1] ?? DEFAULT_NAV
  const cta = CTA_BANKS.find(([re]) => re.test(haystack))?.[1] ?? DEFAULT_CTA
  const tiers = TIER_BANKS.find(([re]) => re.test(haystack))?.[1] ?? DEFAULT_TIERS
  const perks = PERK_BANKS.find(([re]) => re.test(haystack))?.[1] ?? DEFAULT_PERKS

  const kpis: [string, string, string][] =
    voiceKey === 'ops' ? OPS_KPI
    : voiceKey === 'finance' || voiceKey === 'retail' ? GROWTH_KPI
    : DESK_KPI

  const initials = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'J.', 'K.', 'L.', 'M.', 'N.', 'R.', 'S.', 'T.']
  const roles = ['Founder', 'Head of Product', 'Lead Engineer', 'Studio Director', 'Practice Manager', 'Shop Owner', 'Programme Lead', 'Editor', 'Operations Lead']

  return {
    kicker: `${CATEGORY_KICKER[d.category] ?? 'A design system for'} ${d.useCases[0]?.toLowerCase() ?? 'modern teams'}`,
    nav,
    cta,
    stats: [
      [pick(['41%', '43%', '47%', '52%'], seed), `fewer review rounds on ${d.name}`],
      [pick(['6', '7', '8'], seed, 1), 'tokens to learn, start to ship'],
      [pick(['1,400+', '2,600+', '3,900+'], seed, 2), `pages shipped on ${d.name}`],
    ],
    tiers,
    tierPerks: perks,
    quotes: quotes.map((q, i) => ({
      q,
      a: `${pick(initials, seed, i)}, ${pick(roles, seed, i + 3)} — ${d.useCases[0] ?? 'the field'}`,
      i: d.name.charAt(0).toUpperCase(),
    })),
    dash: {
      items: dashItemsFor(voiceKey),
      heading: dashHeadingFor(voiceKey),
      action: dashActionFor(voiceKey),
      kpis,
    },
    form: {
      heading: formHeadingFor(voiceKey),
      submit: cta[0],
      tertiary: pick(['Just browsing →', 'Read first →', 'See pricing →', 'Not today →'], seed, 5),
      ok: formOkFor(voiceKey),
    },
    meta: `${d.category.toUpperCase()} · EST. 2026 · ${d.author.toUpperCase()}`,
    navAction: navActionFor(voiceKey),
  }
}

function navActionFor(key: VoiceKey): string {
  switch (key) {
    case 'food': return 'Book a table'
    case 'events': return 'Get tickets'
    case 'retail': return 'Shop'
    case 'hospitality': return 'Book now'
    case 'wellness': return 'Book now'
    case 'learning': return 'Enrol'
    case 'finance': return 'Open account'
    case 'civic': return 'Services'
    case 'media': return 'Subscribe'
    case 'pets': return 'Adopt'
    case 'creative': return 'Commission'
    case 'ops': return 'Console'
    default: return 'Sign up'
  }
}

/** Sidebar items for the dashboard arrangement, per voice family. */
function dashItemsFor(key: VoiceKey): string[] {
  switch (key) {
    case 'finance': return ['Accounts', 'Ledger', 'Invoices', 'Runs', 'Audit log']
    case 'retail': return ['Storefront', 'Orders', 'Inventory', 'Customers', 'Payouts']
    case 'events': return ['Sales', 'Check-ins', 'Lineup', 'Staffing', 'Settlement']
    case 'food': return ['Today', 'Orders', 'Prep list', 'Suppliers', 'Till']
    case 'hospitality': return ['Tonight', 'Stays', 'Rooms', 'Housekeeping', 'Rates']
    case 'learning': return ['Courses', 'Cohorts', 'Assignments', 'Marking', 'Reports']
    case 'wellness': return ['Today', 'Clients', 'Sessions', 'Notes', 'Billing']
    case 'civic': return ['Notices', 'Records', 'Requests', 'Fees', 'Registry']
    case 'media': return ['Issues', 'Drafts', 'Embargoed', 'Publishing', 'Archive']
    case 'creative': return ['Briefs', 'Projects', 'Files', 'Approvals', 'Invoices']
    case 'pets': return ['Adoptions', 'Animals', 'Vet log', 'Volunteers', 'Donations']
    default: return ['Overview', 'Signals', 'Runs', 'Alerts', 'Settings']
  }
}

function dashHeadingFor(key: VoiceKey): string {
  switch (key) {
    case 'finance': return 'Ledger'
    case 'retail': return 'Storefront'
    case 'events': return 'Box office'
    case 'food': return 'Service'
    case 'hospitality': return 'Front desk'
    case 'learning': return 'This term'
    case 'wellness': return 'Today'
    case 'civic': return 'Notices'
    case 'media': return 'Press room'
    case 'creative': return 'Studio'
    case 'pets': return 'Adoptions'
    default: return 'Operations'
  }
}

function dashActionFor(key: VoiceKey): string {
  switch (key) {
    case 'finance': return '+ Post entry'
    case 'retail': return '+ New listing'
    case 'events': return '+ Open the till'
    case 'food': return '+ Seat a party'
    case 'hospitality': return '+ Check in'
    case 'learning': return '+ New cohort'
    case 'wellness': return '+ Book session'
    case 'civic': return '+ Log a notice'
    case 'media': return '+ Start a draft'
    case 'creative': return '+ New brief'
    case 'pets': return '+ New arrival'
    default: return '+ New report'
  }
}

function formHeadingFor(key: VoiceKey): string {
  switch (key) {
    case 'food': return 'Get the weekly menu'
    case 'events': return 'First to know'
    case 'retail': return 'Back in stock alerts'
    case 'hospitality': return 'Hold a room'
    case 'wellness': return 'Request a slot'
    case 'learning': return 'Prospectus, posted'
    case 'finance': return 'Talk to the desk'
    case 'civic': return 'Request the pack'
    case 'media': return 'Get the next issue'
    case 'pets': return 'Adoption enquiry'
    case 'creative': return 'Start a brief'
    default: return 'Join the list'
  }
}

function formOkFor(key: VoiceKey): string {
  switch (key) {
    case 'food': return 'You\u2019re on the list — menu lands Fridays.'
    case 'events': return 'You\u2019re in — set times follow at doors.'
    case 'retail': return 'Noted — we\u2019ll flag you when it lands.'
    case 'hospitality': return 'Room held for 48 hours.'
    case 'wellness': return 'Requested — we confirm by evening.'
    case 'learning': return 'Posted — allow three days for the mail.'
    case 'finance': return 'Received — the desk replies within a day.'
    case 'civic': return 'Logged — reference number follows.'
    case 'media': return 'Subscribed — next issue is Friday.'
    case 'pets': return 'Got it — a human calls you today.'
    case 'creative': return 'Brief received — expect three questions back.'
    default: return 'Welcome aboard — check your inbox.'
  }
}
