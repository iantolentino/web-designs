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
  logistics: [
    'The dispatch board, the manifest and the invoice finally agree.',
    'Drivers read the same status the customer does. Fewer phone calls.',
    'Every handoff keeps its timestamp, which is the whole argument.',
  ],
  manufacturing: [
    'The spec sheet and the shop floor now share one vocabulary.',
    'Tolerance tables read like drawings, not like forms.',
    'Batch records survive a real audit without a rebuild.',
  ],
  energy: [
    'Generation, usage and outages finally sit on one page.',
    'The grid report reads like a newspaper, not a spreadsheet.',
    'Field crews can read it in sunlight on a phone.',
  ],
  agriculture: [
    'The harvest calendar is the homepage, and it should be.',
    'Market weights, crate counts and seed notes all agree.',
    'The farm finally looks like the place it actually is.',
  ],
  architecture: [
    'Plans, sections and site notes share one quiet grid.',
    'The project index reads like a portfolio, not a filing cabinet.',
    'Clients understand the drawings before the meeting starts.',
  ],
  sport: [
    'The session timetable is the most-used page on the site.',
    'Results, coaches and programmes finally read as one club.',
    'Athletes find their next session in two taps.',
  ],
  community: [
    'The notice board carries real deadlines and still looks human.',
    'Volunteer shifts, donations and stories share one voice.',
    'Neighbours actually read the updates now.',
  ],
  consulting: [
    'Case notes and findings read like prose, not like decks.',
    'The engagement timeline is legible to clients and to us.',
    'Workshop outputs land on the site the same week.',
  ],
  music: [
    'Releases, credits and tour dates finally share a spine.',
    'The catalogue reads like a record sleeve, not a database.',
    'Artists can update their own page without breaking the type.',
  ],
  family: [
    'Parents find the timetable, the fees and the form in one place.',
    'The play programme reads as friendly without going soft.',
    'Drop-off details are legible at the school gate.',
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
  [/\b(freight|logistics|dispatch|warehouse|warehousing|routing|cargo|fleet|pallet)\b/i, 'logistics'],
  [/\b(factory|manufactur|production|machining|fabricat|tolerance)\b/i, 'manufacturing'],
  [/\b(energy|grid|solar|utilities|kilowatt|generation)\b/i, 'energy'],
  [/\b(farm|harvest|soil|crops|growers|orchard|dairy|agricultur)\b/i, 'agriculture'],
  [/\b(architecture|buildings|interiors|architects|sections|site notes)\b/i, 'architecture'],
  [/\b(training|fitness|athletes|sports|teams|coaching)\b/i, 'sport'],
  [/\b(community|mutual aid|volunteers|volunteer|charity|giving)\b/i, 'community'],
  [/\b(strategy|advisory|consulting|workshops|engagements)\b/i, 'consulting'],
  [/\b(music|album|band|sound|musicians|artists|releases)\b/i, 'music'],
  [/\b(kids|family|toys|childcare|playtime|parents)\b/i, 'family'],
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
  [/\b(news|press|magazine|journal|broadsheet|editorial|zine|publishing|blog|review|film|cinema|podcast|broadcast)\b/i, 'media'],
  [/\b(gov|council|civic|archive|notary|legal|law|court|library|history|heritage|observatory|survey|geological)\b/i, 'civic'],
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
  [/\b(freight|logistics|dispatch|warehouse|cargo|fleet|pallet)\b/i, ['Dispatch', 'Routes', 'Depots', 'Track a load']],
  [/\b(factory|manufactur|machining|fabricat|tolerance|production)\b/i, ['Capabilities', 'Materials', 'Facilities', 'Request a quote']],
  [/\b(energy|grid|solar|utilities|kilowatt|generation)\b/i, ['Generation', 'Grid', 'Projects', 'Usage']],
  [/\b(farm|harvest|soil|crops|growers|orchard|dairy|agricultur)\b/i, ['Produce', 'Growing', 'Markets', 'Visit the farm']],
  [/\b(architecture|buildings|interiors|architects)\b/i, ['Projects', 'Practice', 'Process', 'Enquire']],
  [/\b(training|fitness|athletes|sports|coaching)\b/i, ['Programmes', 'Coaches', 'Results', 'Join a session']],
  [/\b(community|mutual aid|volunteers|charity|giving)\b/i, ['Programmes', 'Volunteer', 'Stories', 'Donate']],
  [/\b(strategy|advisory|consulting|workshops|engagements)\b/i, ['Services', 'Cases', 'Insights', 'Talk to us']],
  [/\b(music|album|band|musicians|releases)\b/i, ['Releases', 'Artists', 'Studio', 'Listen']],
  [/\b(kids|family|toys|childcare|playtime|parents)\b/i, ['Play', 'Programmes', 'Parties', 'Visit']],
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

/* Bank keys mirror the order of the four arrays. The primary website type is
   a stronger signal than any single tag: a music school should read as a
   school even though "music" is one of its tags. */
const NAV_KEYS: VoiceKey[] = [
  'logistics', 'manufacturing', 'energy', 'agriculture', 'architecture',
  'sport', 'community', 'consulting', 'music', 'family',
  'retail', 'food', 'hospitality', 'creative', 'wellness',
  'events', 'ops', 'finance', 'media', 'learning',
  'civic', 'pets', 'media',
]
const CTA_KEYS: VoiceKey[] = [
  'logistics', 'manufacturing', 'energy', 'agriculture', 'architecture',
  'sport', 'community', 'consulting', 'music', 'family',
  'retail', 'food', 'hospitality', 'wellness', 'events',
  'ops', 'finance', 'creative', 'media', 'learning',
  'civic', 'pets', 'ops', 'family',
]
const TIER_KEYS: VoiceKey[] = [
  'logistics', 'manufacturing', 'energy', 'agriculture', 'architecture',
  'sport', 'community', 'consulting', 'music', 'family',
  'pets', 'food', 'retail', 'hospitality', 'wellness',
  'events', 'ops', 'finance', 'creative', 'media',
  'learning', 'civic', 'family',
]
const PERK_KEYS: VoiceKey[] = [
  'logistics', 'manufacturing', 'energy', 'agriculture', 'architecture',
  'sport', 'community', 'consulting', 'music', 'family',
  'pets', 'food', 'retail', 'hospitality', 'wellness',
  'events', 'ops', 'finance', 'creative', 'media',
  'learning', 'civic', 'family',
]

const USE_CASE_VOICE: Record<string, VoiceKey> = {
  Logistics: 'logistics',
  Manufacturing: 'manufacturing',
  Automotive: 'manufacturing',
  Energy: 'energy',
  Agriculture: 'agriculture',
  Architecture: 'architecture',
  Construction: 'architecture',
  'Real Estate': 'architecture',
  Sports: 'sport',
  Fitness: 'sport',
  Community: 'community',
  Consulting: 'consulting',
  Agency: 'consulting',
  Music: 'music',
  Podcast: 'media',
  Kids: 'family',
  Gaming: 'family',
  Education: 'learning',
  'E-learning': 'learning',
  University: 'learning',
  News: 'media',
  Publishing: 'media',
  'Film & TV': 'media',
  Streaming: 'media',
  Hotel: 'hospitality',
  Travel: 'hospitality',
  Booking: 'hospitality',
  'E-commerce': 'retail',
  Marketplace: 'retail',
  Grocery: 'retail',
  Fashion: 'retail',
  'Developer Tools': 'ops',
  'AI/ML': 'ops',
  SaaS: 'ops',
  'DevOps & Cloud': 'ops',
  Cybersecurity: 'ops',
  'Data & Analytics': 'ops',
  CRM: 'ops',
  Productivity: 'ops',
  'Remote Work': 'ops',
  Startup: 'ops',
  Restaurant: 'food',
  'Coffee Shop': 'food',
  'Art Gallery': 'creative',
  Photography: 'creative',
  Portfolio: 'creative',
  'Design Tools': 'creative',
  Government: 'civic',
  Legal: 'civic',
  Nonprofit: 'community',
  Health: 'wellness',
  'Mental Health': 'wellness',
  Wellness: 'wellness',
  'Beauty & Spa': 'wellness',
  Fintech: 'finance',
  Banking: 'finance',
  Insurance: 'finance',
  Accounting: 'finance',
  Pets: 'pets',
  Events: 'events',
  Wedding: 'events',
}

/** Prefer the bank for the primary website type; fall back to tag matching. */
function pickBank<T>(
  banks: [RegExp, T][],
  keys: VoiceKey[],
  preferred: VoiceKey | undefined,
  haystack: string,
): T | undefined {
  if (preferred) {
    const i = keys.indexOf(preferred)
    if (i >= 0) return banks[i]?.[1]
  }
  return banks.find(([re]) => re.test(haystack))?.[1]
}

/** CTA pairs — primary + secondary per voice family. */
const CTA_BANKS: [RegExp, [string, string]][] = [
  [/\b(freight|logistics|dispatch|warehouse|cargo|fleet|pallet)\b/i, ['Track a shipment', 'See the network']],
  [/\b(factory|manufactur|machining|fabricat|tolerance|production)\b/i, ['Request a quote', 'Tour the floor']],
  [/\b(energy|grid|solar|utilities|kilowatt|generation)\b/i, ['See the projects', 'Read the report']],
  [/\b(farm|harvest|soil|crops|growers|orchard|dairy|agricultur)\b/i, ['See what\u2019s growing', 'Plan a visit']],
  [/\b(architecture|buildings|interiors|architects)\b/i, ['See the projects', 'Start a brief']],
  [/\b(training|fitness|athletes|sports|coaching)\b/i, ['Join a session', 'Meet the coaches']],
  [/\b(community|mutual aid|volunteers|charity|giving)\b/i, ['Get involved', 'See the programmes']],
  [/\b(strategy|advisory|consulting|workshops|engagements)\b/i, ['Start a conversation', 'Read the cases']],
  [/\b(music|album|band|musicians|releases)\b/i, ['Listen now', 'See the roster']],
  [/\b(kids|family|toys|childcare|playtime|parents)\b/i, ['Plan a visit', 'See the programme']],
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
  [/\b(freight|logistics|dispatch|warehouse|cargo|fleet|pallet)\b/i, [['Single shipment', 'on quote'], ['Business', 'monthly'], ['Fleet', 'contract']]],
  [/\b(factory|manufactur|machining|fabricat|tolerance|production)\b/i, [['Sample part', 'free'], ['Batch', 'on quote'], ['Production', 'contract']]],
  [/\b(energy|grid|solar|utilities|kilowatt|generation)\b/i, [['Home', 'free'], ['Commercial', 'on quote'], ['Industrial', 'contract']]],
  [/\b(farm|harvest|soil|crops|growers|orchard|dairy|agricultur)\b/i, [['Market box', '18'], ['Weekly share', '32/wk'], ['Restaurant', 'on account']]],
  [/\b(architecture|buildings|interiors|architects)\b/i, [['Consultation', 'free'], ['Concept', 'from 2k'], ['Full build', 'on quote']]],
  [/\b(training|fitness|athletes|sports|coaching)\b/i, [['Drop-in', '12'], ['Monthly', '48/mo'], ['Season', '180']]],
  [/\b(community|mutual aid|volunteers|charity|giving)\b/i, [['Volunteer', 'free'], ['Member', '8/mo'], ['Patron', '25/mo']]],
  [/\b(strategy|advisory|consulting|workshops|engagements)\b/i, [['Brief', 'free'], ['Sprint', '6k'], ['Retainer', 'monthly']]],
  [/\b(music|album|band|musicians|releases)\b/i, [['Single', '1.29'], ['Album', '9'], ['Membership', '5/mo']]],
  [/\b(kids|family|toys|childcare|playtime|parents)\b/i, [['Drop-in', '6'], ['Term', '48'], ['Party', '120']]],
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
  [/\b(freight|logistics|dispatch|warehouse|cargo|fleet|pallet)\b/i, [['Live tracking', 'Proof of delivery', 'One invoice'], ['Scheduled lanes', 'Customs handled', 'Named contact'], ['Dedicated fleet', 'API feed', 'Quarterly review']]],
  [/\b(factory|manufactur|machining|fabricat|tolerance|production)\b/i, [['Material spec', 'Tolerance check', 'Sample'], ['Batch pricing', 'QA report', 'Lead times'], ['Dedicated line', 'Tooling', 'Volume terms']]],
  [/\b(energy|grid|solar|utilities|kilowatt|generation)\b/i, [['Usage dashboard', 'One bill', 'Outage alerts'], ['Site survey', 'Load plan', 'Priority repair'], ['Metering', 'Reports', 'Account engineer']]],
  [/\b(farm|harvest|soil|crops|growers|orchard|dairy|agricultur)\b/i, [['Weekly box', 'Seasonal picks', 'Farm notes'], ['Choose contents', 'Home delivery', 'Recipe cards'], ['Standing order', 'Invoicing', 'Crate returns']]],
  [/\b(architecture|buildings|interiors|architects)\b/i, [['Site visit', 'Feasibility notes', 'Moodboard'], ['Concept plan', 'Materials list', 'Planning advice'], ['Full drawings', 'Site oversight', 'Handover file']]],
  [/\b(training|fitness|athletes|sports|coaching)\b/i, [['Taster session', 'Kit loan', 'Progress notes'], ['Weekly sessions', 'Coach check-in', 'Recovery plan'], ['Season plan', 'Testing days', 'Travel kit']]],
  [/\b(community|mutual aid|volunteers|charity|giving)\b/i, [['Open events', 'Notice board', 'Neighbour list'], ['Monthly meetups', 'Working groups', 'Vote'], ['Named fund', 'Reports', 'Site visits']]],
  [/\b(strategy|advisory|consulting|workshops|engagements)\b/i, [['Discovery call', 'Notes', 'Reading list'], ['Workshop', 'Findings', 'Roadmap'], ['Embedded team', 'Weekly review', 'Handover']]],
  [/\b(music|album|band|musicians|releases)\b/i, [['Stream', 'Liner notes', 'Mailing list'], ['Download', 'Artwork', 'Early access'], ['Full catalogue', 'Studio notes', 'Credits']]],
  [/\b(kids|family|toys|childcare|playtime|parents)\b/i, [['Drop-in play', 'Snack', 'Carer on site'], ['Term pass', 'Holiday clubs', 'Progress notes'], ['Private party', 'Room hire', 'Catering']]],
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

export interface PageVoice {
  articles: { tag: string; title: string; dek: string }[]
  feature: { tag: string; title: string; body: string }
  essay: { lead: string; pull: string; body: string; aside: string[]; closing: string }
  steps: { n: string; title: string; body: string }[]
  spotlight: { k: string; v: string }[]
  bento: { cap: string; tiles: { title: string; body: string }[]; wideTitle: string; wideBody: string; stats: { v: string; label: string }[] }
  mosaic: { cap: string; method: string[]; tiles: { title: string; body: string }[]; quote: string }
  film: { frames: string[]; notes: { k: string; v: string }[] }
  map: { facts: [string, string][]; rows: [string, string, string][]; legend: [string, string] }
  field: { entries: [string, string, string][]; checks: string[] }
  receipt: { items: [string, string][]; thanks: string }
  catalog: { filters: string[]; items: string[] }
  docs: { groups: [string, string[]][]; toc: string[] }
  manifesto: { words: string[]; signoff: string }
  headings: string[]
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
  /** Per-design page copy for the layout bodies. */
  page: PageVoice
}

/** Perk rows for a given tier index, from the matched bank. */
export function voicePerks(p: VoicePack, i: number): string[] {
  const rows = p.tierPerks
  return rows[i % rows.length]
}

/** Per-design page copy. Every line carries the design's name or its own tags,
 *  so two pages can share an arrangement without sharing a sentence. */
function pagePack(d: DesignSystem): PageVoice {
  const tags = (d.tags.length ? d.tags : ['craft', 'detail', 'rhythm']).map((x) => x.replace(/-/g, ' '))
  const t = (i: number) => tags[i % tags.length]
  const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s)
  const first = d.designPhilosophy.split('.')[0]
  return {
    articles: [
      { tag: 'Feature', title: `${d.name} and the ${t(0)} question`, dek: `The ${t(0)} work, documented in public and argued in plain language.` },
      { tag: 'Opinion', title: `Why ${t(1)} is the whole brief`, dek: `${cap(t(1))} is not a feature. It is the reason the rest can stay quiet.` },
      { tag: 'Inside', title: `A day at the ${t(2)} desk`, dek: `How ${d.name} keeps ${t(2)} honest from first note to final page.` },
    ],
    feature: {
      tag: 'Cover story',
      title: `${cap(t(0))}, without the theatre`,
      body: `${first}. The ${t(1)} work is shown, not summarised — which is why ${d.name} reads as a place rather than a pitch.`,
    },
    essay: {
      lead: `The first thing ${d.name} fixes is the argument. ${cap(t(0))} and ${t(1)} finally share a page, and the page does not flinch.`,
      pull: `“${cap(t(0))} is not a feature. It is the reason the rest of the system can stay quiet.”`,
      body: `Every token in ${d.name} exists because something else would be worse. The scale has seven steps because six cramped and eight wandered. The ${t(1)} accent appears exactly where your eye needs a handhold, and nowhere else.`,
      aside: [`${cap(t(0))} as the primary verb`, `${cap(t(1))} kept visible`, `Six colors, no unnamed greys`, `Motion that confirms, never performs`],
      closing: `Adoption was the test. The ${t(2)} team shipped pages that looked art-directed without a designer in the room — and the designers finally had time for the work only they could do.`,
    },
    steps: [
      { n: '01', title: `Map the ${t(0)}`, body: `Start with the one ${t(0)} decision everything else depends on. ${d.name} makes it explicit before a single component is drawn.` },
      { n: '02', title: `Set the ${t(1)} rhythm`, body: `One spacing unit, one type scale, one accent rule. The ${t(1)} pages inherit the rhythm instead of inventing it.` },
      { n: '03', title: `Ship the ${t(2)} page`, body: `Publish it. ${d.name} holds the page together, so the ${t(2)} work stays the point.` },
    ],
    spotlight: [
      { k: 'Spec', v: `${cap(t(0))} named, ${t(1)} drawn — ${d.name} leaves nothing to taste.` },
      { k: 'Scale', v: `Seven type steps for ${t(2)}, one spacing unit, zero exceptions granted.` },
      { k: 'Stay', v: `The ${t(0)} team still on it a year later. The churn is elsewhere.` },
    ],
    bento: {
      cap: `${cap(t(0))} in four minutes`,
      tiles: [
        { title: 'Tokens first', body: `${cap(t(0))}, ${t(1)} and ${t(2)} all derive from six named colors.` },
        { title: 'States included', body: `Hover, focus, empty and error for every ${t(0)} control.` },
      ],
      wideTitle: `${cap(t(0))}, placed with intent`,
      wideBody: `${first}.`,
      stats: [
        { v: '12k+', label: `teams on ${t(0)}` },
        { v: '4.9★', label: `${t(1)} rating` },
        { v: '6', label: 'tokens to learn' },
      ],
    },
    mosaic: {
      cap: `${cap(t(0))} in production since 2021`,
      method: [`Decide the ${t(0)} voice`, `Fix the ${t(1)} unit`, `Name every ${t(2)} token`, `Write the ${t(0)} rules down`],
      tiles: [
        { title: 'Six colors, no exceptions', body: `Every ${t(0)} surface, border and accent in ${d.name} derives from the same six tokens.` },
        { title: 'States, drawn', body: `Every ${t(1)} state, including the ones nobody screenshots.` },
      ],
      quote: `${first}.`,
    },
    film: {
      frames: [`${cap(t(0))}, establishing`, `${cap(t(1))}, available light`, `${cap(t(2))} close-up`, `The ${t(0)} detail`, `Last frame, unposed`],
      notes: [
        { k: 'Exposure', v: `${cap(t(0))} rendered one stop under, then printed down.` },
        { k: 'Grain', v: `Fine grain, kept for the ${t(1)} texture.` },
        { k: 'Cut', v: `Straight cuts — the ${t(2)} sequence never dissolves.` },
      ],
    },
    map: {
      facts: [['Route', cap(t(0))], ['Scale', '1 : 25 000'], ['Edition', `${cap(t(1))}, revised`]],
      rows: [
        [`${cap(t(0))} quay`, '1.2 km', 'Sheltered, all tide'],
        [`${cap(t(1))} lock`, '3.4 km', `Heritage, ${t(2)} access`],
        [`${cap(t(2))} mole`, '5.8 km', 'Exposed in easterlies'],
      ],
      legend: [cap(t(0)), cap(t(1))],
    },
    field: {
      entries: [
        ['07:40', `${cap(t(0))} check`, `Measured against the ${t(0)} baseline set in spring.`],
        ['11:05', `${cap(t(1))} count`, `Dense by eye; the ${t(1)} ledger agrees.`],
        ['15:20', `${cap(t(2))} note`, `Dark, loose, two earthworms — a good sign.`],
        ['18:00', 'Weather', `Rain by evening, as the ${t(0)} schedule promised.`],
      ],
      checks: [`Tag the ${t(0)}`, `Photograph the ${t(1)}`, `File the ${t(2)} sheet`],
    },
    receipt: {
      items: [
        [`${cap(t(0))} \u2014 line 01`, '12.00'],
        [`${cap(t(1))} \u2014 line 02`, '8.50'],
        [`${cap(t(2))} \u2014 line 03`, '24.00'],
      ],
      thanks: `${first}. Filed under ${t(0)}.`,
    },
    catalog: {
      filters: ['All', cap(t(0)), cap(t(1)), 'Archive'],
      items: [0, 1, 2, 3, 4, 5].map((i) => `${cap(t(i))} ${String(i + 1).padStart(2, '0')}`),
    },
    docs: {
      groups: [
        ['Start here', [`Install ${d.name}`, `First ${t(0)} page`, 'Concepts']],
        ['Guides', [cap(t(1)), cap(t(2)), 'Motion']],
        ['Reference', ['Tokens', 'Components', 'Changelog']],
      ],
      toc: ['Install', `The ${t(0)} rules`, 'Next steps'],
    },
    manifesto: {
      words: [`No ${t(0)} theatre`, `No ${t(1)} defaults`, `No ${t(2)} apologies`],
      signoff: `${d.name}, a design system by ${d.author}`,
    },
    headings: [`Built for ${t(0)}`, `The ${t(1)} method`, `Everything ${t(2)} needs`],
  }
}

/**
 * Build the voice pack for a design. Falls through rules → category →
 * defaults, so nothing renders without a complete pack.
 */
export function voicePack(d: DesignSystem): VoicePack {
  // The preview prose (`designDetails`) is not consulted: it ships in its own
  // chunk, so a voice would otherwise depend on whether a preview had opened.
  // Identity, tags, website types and category carry the same signals.
  // Primary website type only: secondary use-cases are related categories, not
  // the design's own vocabulary, and previously let "E-commerce" or
  // "Publishing" hijack a freight or school page's nav and testimonials.
  const haystack = `${d.name} ${d.tags.join(' ')} ${d.useCases[0] ?? ''} ${d.category}`
  const seed = voiceHash(d.id)
  const preferred = USE_CASE_VOICE[d.useCases[0] ?? '']

  const voiceKey: VoiceKey =
    preferred ??
    VOICE_RULES.find(([re]) => re.test(haystack))?.[1] ??
    CATEGORY_VOICE[d.category] ??
    'default'
  const quotes = VOICE_QUOTES[voiceKey] ?? VOICE_QUOTES.default

  const nav = pickBank(NAV_BANKS, NAV_KEYS, preferred, haystack) ?? DEFAULT_NAV
  const cta = pickBank(CTA_BANKS, CTA_KEYS, preferred, haystack) ?? DEFAULT_CTA
  const tiers = pickBank(TIER_BANKS, TIER_KEYS, preferred, haystack) ?? DEFAULT_TIERS
  const perks = pickBank(PERK_BANKS, PERK_KEYS, preferred, haystack) ?? DEFAULT_PERKS

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
    page: pagePack(d),
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
