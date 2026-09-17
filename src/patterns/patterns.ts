/**
 * Pattern library — 110 production-grade UI patterns.
 *
 * Each entry is a *layout recipe*, not a screenshot: a unique canvas
 * arrangement (`layout`), optional unique flourishes (`extra`), and a
 * composition of shared, well-behaved blocks (`blocks`). The board renders
 * them with a neutral palette so the structure — not the color — is the
 * thing you browse, and every pattern is a real screen you could ship.
 *
 * `layout` is injected as `.pt-<id> .pt-canvas { … }`, so it must contain
 * declarations only. Uniqueness rule: no two patterns share a canvas
 * arrangement (verified in scripts/verify-patterns.cjs).
 */

import { canvasFor } from './layouts'

export type PatternFamily = 'marketing' | 'commerce' | 'app' | 'content' | 'forms' | 'data' | 'social' | 'system'

export type PtKind =
  | 'nav'
  | 'sidebar'
  | 'breadcrumb'
  | 'tabs'
  | 'toolbar'
  | 'filters'
  | 'pager'
  | 'steps'
  | 'head'
  | 'hero'
  | 'split'
  | 'stats'
  | 'kpis'
  | 'cards'
  | 'list'
  | 'media'
  | 'gallery'
  | 'quote'
  | 'logos'
  | 'cta'
  | 'footer'
  | 'table'
  | 'chart'
  | 'kanban'
  | 'calendar'
  | 'timeline'
  | 'activity'
  | 'profile'
  | 'settings'
  | 'inbox'
  | 'members'
  | 'feed'
  | 'products'
  | 'pricing'
  | 'reviews'
  | 'form'
  | 'auth'
  | 'booking'
  | 'player'
  | 'tracklist'
  | 'comments'
  | 'chat'
  | 'faq'
  | 'code'
  | 'empty'
  | 'map'
  | 'status'
  | 'changelog'
  | 'banner'
  | 'toast'
  | 'heatmap'
  | 'skeleton'

export interface PtBlock {
  k: PtKind
  /** Heading shown above / inside the block. */
  title?: string
  /** Supporting line of copy. */
  sub?: string
  /** Repeat count for generated items (cards, rows, bars…). */
  n?: number
  /** Column count for grids inside the block. */
  cols?: number
  /** Literal item labels (contextual copy for the block). */
  items?: string[]
  /** Table rows: first cell is emphasized. */
  rows?: string[][]
  /** Status tone for badges/banners. */
  tone?: 'brand' | 'ok' | 'warn' | 'bad'
  /** Presentation variant consumed by the block renderer. */
  v?: 'stack' | 'grid' | 'wide' | 'tall' | 'center' | 'flat' | 'dark' | 'compact' | 'aside' | 'inline' | 'media-text'
}

export interface PatternDef {
  id: string
  name: string
  family: PatternFamily
  blurb: string
  tags: string[]
  /** Unique canvas arrangement — declarations only. */
  layout: string
  /** Optional unique flourishes scoped to `.pt-<id>`. */
  extra?: string
  blocks: PtBlock[]
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

const M = 'marketing' as const
const C = 'commerce' as const
const A = 'app' as const
const T = 'content' as const
const F = 'forms' as const
const D = 'data' as const
const S = 'social' as const
const Y = 'system' as const

export const PATTERNS: PatternDef[] = [
  /* ============================ MARKETING (18) ============================ */
  {
    id: 'hero-split-proof',
    name: 'Split hero with proof strip',
    family: M,
    blurb: 'Two-column hero, trust logos immediately under the fold, three-up feature row.',
    tags: ['hero', 'logos', 'features'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:24px; padding:20px;',
    extra: '.pt-split { grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr); }',
    blocks: [
      { k: 'nav' },
      { k: 'split', title: 'Ship the page you actually designed.', sub: 'A component library, not a theme. Every state is specified.', items: ['No credit card', 'Free 14 days', 'Cancel anytime'], v: 'grid' },
      { k: 'logos', sub: 'Trusted by' },
      { k: 'cards', title: 'Why teams switch', cols: 3, n: 3, v: 'grid' },
      { k: 'cta', title: 'Start building today.', sub: 'One prompt, one system, zero slop.' },
      { k: 'footer' },
    ],
  },
  {
    id: 'hero-centered-shot',
    name: 'Centered hero with product shot',
    family: M,
    blurb: 'Centered messaging, a large app screenshot, then hard numbers.',
    tags: ['hero', 'screenshot', 'metrics'],
    layout: 'display:flex; flex-direction:column; align-items:center; gap:22px; padding:24px 20px; text-align:center;',
    extra: '.pt-media { width:100%; } .pt-cards { width:100%; text-align:left; }',
    blocks: [
      { k: 'nav' },
      { k: 'head', title: 'One system. Every surface.', sub: 'Design, marketing, and product finally speak the same language.', v: 'center' },
      { k: 'media', v: 'wide' },
      { k: 'stats', items: ['98% ship faster', '4.9★ avg rating', '12k+ teams', '6 tokens to learn'], cols: 4 },
      { k: 'cards', cols: 3, n: 3, v: 'grid' },
      { k: 'footer' },
    ],
  },
  {
    id: 'hero-fullbleed-overlap',
    name: 'Full-bleed hero with overlap panel',
    family: M,
    blurb: 'Edge-to-edge visual with a content panel that lifts over the image.',
    tags: ['full-bleed', 'overlap', 'hero'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:0; padding:0;',
    extra: '.pt-canvas > *:not(.pt-hero):not(.pt-nav) { margin:0 20px; } .pt-hero { border-radius:0; min-height:230px; } .pt-canvas > .pt-card:first-of-type { margin-top:-46px; }',
    blocks: [
      { k: 'nav', v: 'flat' },
      { k: 'hero', title: 'Built for the long haul.', sub: 'Enterprise-grade foundations without enterprise-grade ceremony.', v: 'wide' },
      { k: 'cards', title: 'Everything in the box', cols: 2, n: 4, v: 'grid' },
      { k: 'stats', items: ['99.99% uptime', '24/7 support', 'SOC 2 Type II'], cols: 3 },
      { k: 'cta', title: 'Talk to a human.', sub: 'Thirty minutes, no slides.' },
    ],
  },
  {
    id: 'bento-feature-grid',
    name: 'Bento feature grid',
    family: M,
    blurb: 'Mixed-size tile grid that gives the strongest feature the most space.',
    tags: ['bento', 'features', 'grid'],
    layout: 'display:grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap:14px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 4; } .pt-cards > :nth-child(1) { grid-column: span 2; grid-row: span 2; } .pt-canvas > .pt-cta { grid-column: span 4; } .pt-nav { grid-column: span 4; }',
    blocks: [
      { k: 'nav' },
      { k: 'head', title: 'Small surface, big ideas.' },
      { k: 'cards', cols: 2, n: 5, v: 'grid' },
      { k: 'cta', title: 'See it in the playground.' },
    ],
  },
  {
    id: 'alternating-zigzag',
    name: 'Alternating zig-zag features',
    family: M,
    blurb: 'Feature rows that flip sides down the page — the classic long-form explainer.',
    tags: ['zig-zag', 'features', 'explainer'],
    layout: 'display:flex; flex-direction:column; gap:26px; padding:20px;',
    extra: '.pt-canvas > .pt-split:nth-of-type(even) { direction: rtl; } .pt-canvas > .pt-split:nth-of-type(even) > * { direction: ltr; }',
    blocks: [
      { k: 'nav', v: 'flat' },
      { k: 'head', title: 'Three moves, one workflow.', v: 'center' },
      { k: 'split', title: 'Design once', sub: 'Tokens move from spec to code with nothing lost in translation.', v: 'grid' },
      { k: 'split', title: 'Review in context', sub: 'Screens arrive staged, labeled, and diffable.', v: 'grid' },
      { k: 'split', title: 'Ship weekly', sub: 'The system absorbs the change so your team does not.', v: 'grid' },
      { k: 'cta', title: 'Read the method.' },
    ],
  },
  {
    id: 'logo-cloud-wall',
    name: 'Logo cloud with testimonial wall',
    family: M,
    blurb: 'Dense social proof: client marks above a masonry of short quotes.',
    tags: ['logos', 'testimonials', 'proof'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-logos, .pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-cards { grid-column: span 3; } .pt-cards { grid-template-columns: repeat(3, minmax(0,1fr)); }',
    blocks: [
      { k: 'logos', sub: 'In production at' },
      { k: 'head', title: 'What teams say after a quarter.' },
      { k: 'cards', cols: 3, n: 6, v: 'grid' },
      { k: 'cta', title: 'Join them.' },
    ],
  },
  {
    id: 'pricing-three-tier',
    name: 'Three-tier pricing page',
    family: M,
    blurb: 'Recommended tier lifted and outlined; FAQ closes the page.',
    tags: ['pricing', 'tiers', 'faq'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:20px; padding:20px;',
    extra: '.pt-pricing > :nth-child(2) { transform: translateY(-10px); border-color: var(--p-brand); border-width: 2px; }',
    blocks: [
      { k: 'nav' },
      { k: 'head', title: 'Pricing that survives Procurement.', v: 'center' },
      { k: 'pricing', n: 3 },
      { k: 'faq', items: ['Do unused seats roll over?', 'How does annual billing work?', 'What happens at the end of a trial?'] },
      { k: 'footer' },
    ],
  },
  {
    id: 'pricing-matrix',
    name: 'Pricing with feature matrix',
    family: M,
    blurb: 'Plans as columns in a comparison table rather than three floating cards.',
    tags: ['pricing', 'matrix', 'compare'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-table-wrap { overflow-x: auto; }',
    blocks: [
      { k: 'head', title: 'Compare every plan side by side.' },
      { k: 'table', title: 'Plans', items: ['Solo', 'Studio', 'Agency'], rows: [['Seats', '1', '10', 'Unlimited'], ['Token sets', '1', '5', 'Unlimited'], ['Shared libraries', '—', '✓', '✓'], ['Review workflows', '—', '—', '✓'], ['Audit log', '—', '✓', '✓'], ['Support', 'Community', 'Priority', 'Dedicated']] },
      { k: 'cta', title: 'Need something custom?', sub: 'We invoice annually and sign your paperwork.' },
    ],
  },
  {
    id: 'faq-two-column',
    name: 'Two-column FAQ with sticky intro',
    family: M,
    blurb: 'Left column holds the pitch and stays put; right column is a full Q&A list.',
    tags: ['faq', 'sticky', 'columns'],
    layout: 'display:grid; grid-template-columns: minmax(0,0.8fr) minmax(0,1.2fr); gap:28px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { position: sticky; top: 12px; }',
    blocks: [
      { k: 'head', title: 'Questions, answered plainly.', sub: 'If it is not here, the docs probably have it.' },
      { k: 'faq', items: ['Is this a theme or a specification?', 'Can we change the colors?', 'How does dark mode work?', 'What does adoption cost a team?', 'Do you support right-to-left?', 'Is there a Figma file?'] },
    ],
  },
  {
    id: 'cta-band-inline-form',
    name: 'Conversion band with inline form',
    family: M,
    blurb: 'Dark band that takes the email inline — no navigation, no second page.',
    tags: ['cta', 'form', 'band'],
    layout: 'display:flex; flex-direction:column; gap:16px; padding:20px;',
    extra: '.pt-banner { padding: 22px; } .pt-banner .pt-row { flex-wrap: wrap; }',
    blocks: [
      { k: 'nav' },
      { k: 'cards', title: 'Everything you need, nothing you do not', cols: 3, n: 3, v: 'grid' },
      { k: 'form', title: 'Get the starter kit', sub: 'One email a month. Unsubscribe in one click.', v: 'inline' },
      { k: 'footer' },
    ],
  },
  {
    id: 'newsletter-benefits',
    name: 'Newsletter capture with benefit list',
    family: M,
    blurb: 'Split layout: benefit bullets left, single-field capture right.',
    tags: ['newsletter', 'signup', 'split'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.2fr) minmax(0,0.8fr); gap:26px; align-items:center; padding:20px;',
    extra: '.pt-canvas > .pt-form { align-self: stretch; justify-content: center; }',
    blocks: [
      { k: 'list', title: 'What lands in your inbox', items: ['One teardown of a real design system', 'A new pattern, explained in 200 words', 'Occasional tooling notes we actually use'], v: 'compact' },
      { k: 'form', title: 'Subscribe', sub: '8,400 designers already read it.', v: 'stack' },
    ],
  },
  {
    id: 'waitlist-countdown',
    name: 'Launch waitlist with countdown',
    family: M,
    blurb: 'Scarcity done tastefully: timer tiles, position in line, single field.',
    tags: ['waitlist', 'countdown', 'launch'],
    layout: 'display:flex; flex-direction:column; align-items:center; gap:20px; padding:20px;',
    extra: '.pt-stats { justify-content: center; }',
    blocks: [
      { k: 'head', title: 'Doors open in', v: 'center' },
      { k: 'stats', items: ['04 days', '11 hours', '22 minutes', '09 seconds'], cols: 4 },
      { k: 'form', title: 'Reserve your seat', sub: 'You are #1,284 in line.', v: 'inline' },
      { k: 'list', title: 'What early access includes', items: ['Full token export', 'Every component spec', 'Direct line to the team'], v: 'grid' },
    ],
  },
  {
    id: 'case-study-results',
    name: 'Case study with result metrics',
    family: M,
    blurb: 'Client story told as problem, work, outcome — with the numbers in the open.',
    tags: ['case-study', 'metrics', 'story'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap:20px; padding:20px;',
    extra: '.pt-canvas > .pt-head, .pt-canvas > .pt-stats, .pt-canvas > .pt-quote { grid-column: span 2; } .pt-canvas > .pt-list { grid-column: span 1; }',
    blocks: [
      { k: 'head', title: 'How Northwind halved review cycles.' },
      { k: 'media', v: 'wide' },
      { k: 'list', title: 'The brief', items: ['Three product lines, three dialects', 'Reviews took five rounds', 'No shared tokens'], v: 'compact' },
      { k: 'stats', items: ['−52% review rounds', '2.4× release pace', '9 → 1 component sets'], cols: 3 },
      { k: 'quote', title: 'The system argues for us now.' },
    ],
  },
  {
    id: 'metrics-first-landing',
    name: 'Metrics-first landing page',
    family: M,
    blurb: 'Leads with the numbers — proof before pitch.',
    tags: ['metrics', 'landing', 'proof'],
    layout: 'display:grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-kpis { grid-column: span 6; } .pt-canvas > .pt-head { grid-column: span 4; } .pt-canvas > .pt-cards { grid-column: span 2; } .pt-canvas > .pt-cta { grid-column: span 6; }',
    blocks: [
      { k: 'kpis', items: ['$48.2k MRR', '12,043 users', '1.9% churn', '98% faster'], cols: 4 },
      { k: 'head', title: 'Infrastructure for teams that measure things.' },
      { k: 'cards', cols: 1, n: 3, v: 'stack' },
      { k: 'cta', title: 'Start with the free tier.' },
    ],
  },
  {
    id: 'docs-home-search',
    name: 'Documentation home with search',
    family: M,
    blurb: 'Search-led docs landing with grouped entry points and a support rail.',
    tags: ['docs', 'search', 'home'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 230px; gap:24px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; } .pt-canvas > .pt-cards { grid-column: span 1; }',
    blocks: [
      { k: 'head', title: 'How can we help?', sub: 'Search 148 pages of tokens, components, and recipes.' },
      { k: 'toolbar', title: 'Search the docs', v: 'compact' },
      { k: 'cards', title: 'Start here', cols: 2, n: 4, v: 'grid' },
      { k: 'list', title: 'Popular', items: ['Token naming', 'Dark mode', 'Contrast rules', 'Type scale'], v: 'aside' },
    ],
  },
  {
    id: 'changelog-timeline',
    name: 'Changelog timeline',
    family: M,
    blurb: 'Release notes as a dated vertical rail with version tags.',
    tags: ['changelog', 'timeline', 'releases'],
    layout: 'display:grid; grid-template-columns: 120px minmax(0,1fr); gap:6px 22px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; } .pt-changelog { display: contents; }',
    blocks: [
      { k: 'head', title: 'Changelog' },
      { k: 'changelog', items: ['3.4.0 — Component kit grows to 46', '3.3.2 — Contrast fixes in four palettes', '3.3.0 — Sidebar shell, 4-up gallery', '3.2.0 — Pattern library, 110 layouts'] },
    ],
  },
  {
    id: 'public-roadmap',
    name: 'Public roadmap columns',
    family: M,
    blurb: 'Now / next / later board that doubles as a marketing promise.',
    tags: ['roadmap', 'kanban', 'public'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-kanban { grid-template-columns: repeat(3, minmax(0,1fr)); }',
    blocks: [
      { k: 'head', title: 'What we are building next.', sub: 'Updated monthly. Shipped items move left.' },
      { k: 'kanban', cols: 3, n: 6, v: 'wide' },
      { k: 'form', title: 'Vote on the next one', v: 'inline' },
    ],
  },
  {
    id: 'status-page',
    name: 'Status page with uptime bars',
    family: M,
    blurb: 'Service health, ninety-day bars, and an incident log.',
    tags: ['status', 'uptime', 'incidents'],
    layout: 'display:grid; grid-template-columns: 200px minmax(0,1fr); gap:20px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'All systems operational.' },
      { k: 'status', items: ['API', 'Dashboard', 'Exports', 'Webhooks'], v: 'stack' },
      { k: 'timeline', title: 'Recent incidents', items: ['Elevated latency on exports — resolved', 'Webhook retries delayed — resolved', 'Scheduled maintenance complete'] },
    ],
  },

  /* ============================ COMMERCE (16) ============================ */
  {
    id: 'product-grid-filter-rail',
    name: 'Product grid with filter rail',
    family: C,
    blurb: 'Sticky filter sidebar, four-up catalog, and a page strip.',
    tags: ['catalog', 'filters', 'grid'],
    layout: 'display:grid; grid-template-columns: 190px minmax(0,1fr); gap:20px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-filters { position: sticky; top: 10px; } .pt-canvas > .pt-pager { grid-column: span 2; }',
    blocks: [
      { k: 'filters', title: 'Filters', items: ['Category', 'Price', 'Color', 'Size', 'Rating'], v: 'aside' },
      { k: 'products', n: 8, cols: 4 },
      { k: 'pager', title: '1 2 3 … 24' },
    ],
  },
  {
    id: 'product-detail-gallery',
    name: 'Product detail with gallery',
    family: C,
    blurb: 'Large gallery, buy box, tabbed detail, and a related row.',
    tags: ['product', 'gallery', 'buy-box'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.15fr) minmax(0,0.85fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-tabs, .pt-canvas > .pt-products, .pt-canvas > .pt-reviews { grid-column: span 2; }',
    blocks: [
      { k: 'gallery', n: 4 },
      { k: 'form', title: 'Field Jacket — Olive', sub: '$248 · In stock', items: ['Size S', 'Size M', 'Size L'], v: 'stack' },
      { k: 'tabs', items: ['Description', 'Materials', 'Shipping', 'Returns'] },
      { k: 'products', title: 'Completes the look', n: 4, cols: 4 },
      { k: 'reviews', n: 3 },
    ],
  },
  {
    id: 'cart-summary-drawer',
    name: 'Cart with sticky summary',
    family: C,
    blurb: 'Line items on the left, a summary panel that follows the scroll.',
    tags: ['cart', 'summary', 'sticky'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.4fr) minmax(0,0.6fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-card:last-child { position: sticky; top: 10px; }',
    blocks: [
      { k: 'list', title: 'Your bag (3)', items: ['Field Jacket · Olive · M', 'Wool Scarf · Charcoal', 'Leather Belt · 34'], v: 'wide' },
      { k: 'pricing', title: 'Order summary', n: 1, v: 'compact' },
    ],
  },
  {
    id: 'checkout-stepper',
    name: 'Checkout with stepper',
    family: C,
    blurb: 'Three-step checkout with the order recap pinned beside the form.',
    tags: ['checkout', 'steps', 'payment'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.3fr) 260px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-steps { grid-column: span 2; } .pt-canvas > .pt-card:last-child { position: sticky; top: 10px; }',
    blocks: [
      { k: 'steps', items: ['Information', 'Shipping', 'Payment'], v: 'wide' },
      { k: 'form', title: 'Shipping address', sub: 'We ship to 42 countries.', v: 'stack' },
      { k: 'pricing', title: 'Summary', n: 1, v: 'compact' },
    ],
  },
  {
    id: 'order-tracking',
    name: 'Order tracking timeline',
    family: C,
    blurb: 'Horizontal progress, delivery map, and a scan-by-scan history.',
    tags: ['tracking', 'logistics', 'map'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-timeline { max-height: 190px; overflow: hidden; }',
    blocks: [
      { k: 'steps', items: ['Ordered', 'Packed', 'In transit', 'Out for delivery'], v: 'wide' },
      { k: 'map' },
      { k: 'timeline', title: 'Scan history', items: ['Arrived at regional hub — 06:12', 'Departed sorting center — 22:40', 'Label created — 14:05'] },
    ],
  },
  {
    id: 'category-mosaic',
    name: 'Category mosaic tiles',
    family: C,
    blurb: 'Uneven tile mosaic that lets one category dominate the fold.',
    tags: ['categories', 'mosaic', 'nav'],
    layout: 'display:grid; grid-template-columns: repeat(6, minmax(0,1fr)); grid-auto-rows: 92px; gap:12px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 6; } .pt-cards > :nth-child(1) { grid-column: span 4; grid-row: span 2; } .pt-cards > :nth-child(2) { grid-column: span 2; } .pt-cards > :nth-child(3) { grid-column: span 2; } .pt-cards > :nth-child(4) { grid-column: span 2; } .pt-cards > :nth-child(5) { grid-column: span 4; }',
    blocks: [
      { k: 'head', title: 'Shop by category' },
      { k: 'cards', cols: 3, n: 5, v: 'tall' },
    ],
  },
  {
    id: 'flash-sale-countdown',
    name: 'Flash sale with countdown',
    family: C,
    blurb: 'Urgency handled with a band, a timer, and a tight product row.',
    tags: ['sale', 'urgency', 'countdown'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:20px;',
    extra: '.pt-banner { background: var(--p-bad); }',
    blocks: [
      { k: 'banner', title: '48-hour flash sale — extra 30% off outerwear' },
      { k: 'stats', items: ['06 hours', '42 minutes', '18 seconds'], cols: 3 },
      { k: 'products', n: 4, cols: 4 },
      { k: 'cta', title: 'Sale ends when the timer does.' },
    ],
  },
  {
    id: 'subscription-picker',
    name: 'Subscription plan picker',
    family: C,
    blurb: 'Cadence toggle above three plans, with delivery notes underneath.',
    tags: ['subscription', 'plans', 'cadence'],
    layout: 'display:flex; flex-direction:column; align-items:center; gap:18px; padding:20px;',
    extra: '.pt-tabs { align-self: center; } .pt-pricing { width: 100%; }',
    blocks: [
      { k: 'head', title: 'Choose your cadence', v: 'center' },
      { k: 'tabs', items: ['Monthly', 'Every 2 months', 'Quarterly'] },
      { k: 'pricing', n: 3, v: 'compact' },
      { k: 'faq', items: ['Can I pause a delivery?', 'How is shipping calculated?'] },
    ],
  },
  {
    id: 'compare-two-products',
    name: 'Compare two products',
    family: C,
    blurb: 'Head-to-head spec table with a verdict card at the top.',
    tags: ['compare', 'specs', 'table'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:20px;',
    extra: '.pt-table td:first-child { font-weight: 700; }',
    blocks: [
      { k: 'split', title: 'Aero vs Meridian', sub: 'Two flagship models, one table.', v: 'grid' },
      { k: 'table', items: ['Aero', 'Meridian'], rows: [['Battery', '18 h', '26 h'], ['Weight', '240 g', '310 g'], ['ANC', 'Adaptive', 'Hybrid'], ['Warranty', '2 years', '3 years'], ['Price', '$349', '$429']] },
      { k: 'cta', title: 'Still stuck? Take the quiz.' },
    ],
  },
  {
    id: 'wishlist-board',
    name: 'Wishlist board',
    family: C,
    blurb: 'Saved items with a price-drop column and an empty slot as a nudge.',
    tags: ['wishlist', 'saved', 'empty'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-empty { grid-column: span 3; }',
    blocks: [
      { k: 'head', title: 'Saved for later (4)' },
      { k: 'products', n: 3, cols: 3, v: 'tall' },
      { k: 'empty', title: 'Nothing else saved', sub: 'Tap the heart on any product to keep it here.' },
    ],
  },
  {
    id: 'store-locator',
    name: 'Store locator',
    family: C,
    blurb: 'Map beside a scrollable result list with opening hours.',
    tags: ['locator', 'map', 'list'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr); gap:18px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Find a store near you' },
      { k: 'map' },
      { k: 'list', title: '4 stores within 15 km', items: ['Northgate — open until 21:00', 'Harbour Row — open until 20:00', 'Old Mill — closed today', 'Riverside — open until 19:00'], v: 'compact' },
    ],
  },
  {
    id: 'coupon-deal-stack',
    name: 'Coupon and deal stack',
    family: C,
    blurb: 'Punch-card style offers with terms small enough to read.',
    tags: ['coupons', 'deals', 'offers'],
    layout: 'display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:14px; padding:20px;',
    extra: '.pt-canvas > .pt-head, .pt-canvas > .pt-cta { grid-column: span 2; } .pt-cards > .pt-card { border-style: dashed; }',
    blocks: [
      { k: 'head', title: 'Four ways to save this week' },
      { k: 'cards', cols: 2, n: 4, v: 'grid' },
      { k: 'cta', title: 'Apply at checkout — codes stack once.' },
    ],
  },
  {
    id: 'loyalty-tiers',
    name: 'Loyalty tier ladder',
    family: C,
    blurb: 'Progress toward the next tier with a perks breakdown.',
    tags: ['loyalty', 'tiers', 'progress'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-steps .pt-step { flex-direction: column; align-items: flex-start; gap: 4px; }',
    blocks: [
      { k: 'steps', items: ['Bronze', 'Silver', 'Gold', 'Onyx'], v: 'wide' },
      { k: 'kpis', items: ['1,240 points', '760 to Gold', '4 perks active'], cols: 3 },
      { k: 'list', title: 'Gold unlocks', items: ['Free express shipping', 'Early access drops', 'Concierge returns'], v: 'grid' },
    ],
  },
  {
    id: 'gift-finder-quiz',
    name: 'Gift finder quiz',
    family: C,
    blurb: 'Three quick questions, then a curated result rail.',
    tags: ['quiz', 'guided', 'gifting'],
    layout: 'display:grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Find the right gift in three taps' },
      { k: 'form', title: 'Who is it for?', v: 'stack' },
      { k: 'products', title: 'Picked for you', n: 4, cols: 2 },
    ],
  },
  {
    id: 'size-guide',
    name: 'Size guide',
    family: C,
    blurb: 'Tabbed measurement table with a how-to-measure aside.',
    tags: ['sizing', 'table', 'help'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.4fr) minmax(0,0.6fr); gap:20px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-tabs { grid-column: span 2; }',
    blocks: [
      { k: 'tabs', items: ['Tops', 'Bottoms', 'Footwear', 'Kids'] },
      { k: 'table', items: ['Size', 'Chest', 'Waist'], rows: [['XS', '86 cm', '70 cm'], ['S', '92 cm', '76 cm'], ['M', '98 cm', '82 cm'], ['L', '104 cm', '88 cm'], ['XL', '110 cm', '94 cm']] },
      { k: 'list', title: 'How to measure', items: ['Chest at the fullest point', 'Waist at the natural crease', 'Measure over light clothing'], v: 'aside' },
    ],
  },
  {
    id: 'marketplace-sellers',
    name: 'Marketplace seller listing',
    family: C,
    blurb: 'Vendor cards with ratings above a filtered product feed.',
    tags: ['marketplace', 'vendors', 'ratings'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-members { grid-template-columns: repeat(4, minmax(0,1fr)); }',
    blocks: [
      { k: 'toolbar', title: 'Search vendors' },
      { k: 'members', title: 'Featured makers', n: 4, cols: 4 },
      { k: 'products', n: 8, cols: 4 },
      { k: 'pager', title: '1 2 3 … 12' },
    ],
  },

  /* ============================ APP & DASHBOARD (18) ============================ */
  {
    id: 'analytics-dashboard',
    name: 'Analytics dashboard',
    family: A,
    blurb: 'Sidebar shell, four KPIs, one large chart, and a customer table.',
    tags: ['dashboard', 'analytics', 'shell'],
    layout: 'display:grid; grid-template-columns: 172px minmax(0,1fr); gap:18px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-side { grid-row: span 4; position: sticky; top: 10px; }',
    blocks: [
      { k: 'sidebar', items: ['Overview', 'Analytics', 'Projects', 'Billing', 'Settings'] },
      { k: 'kpis', items: ['MRR $48.2k', 'Users 12,043', 'Churn 1.9%', 'NPS 62'], cols: 4 },
      { k: 'chart', title: 'Revenue, last 12 weeks' },
      { k: 'table', title: 'Top customers', items: ['Customer', 'Plan', 'MRR'], rows: [['Nimbus Labs', 'Team', '$299'], ['Ferro & Co', 'Pro', '$99'], ['Halcyon', 'Starter', '$0']] },
    ],
  },
  {
    id: 'kpi-wall-trends',
    name: 'KPI wall with trend sparklines',
    family: A,
    blurb: 'Six metrics in a wall, each with its own direction and delta.',
    tags: ['kpis', 'sparkline', 'metrics'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-chart { grid-column: span 3; }',
    blocks: [
      { k: 'head', title: 'This week at a glance' },
      { k: 'kpis', items: ['Sessions 84.2k', 'Signups 1,204', 'Activation 62%', 'ARPU $41', 'Refunds 0.4%', 'Latency 118ms'], cols: 3 },
      { k: 'chart', title: 'Sessions by day' },
    ],
  },
  {
    id: 'admin-table-bulk',
    name: 'Admin table with bulk actions',
    family: A,
    blurb: 'Selection-aware table: bulk bar appears, row actions live in a menu.',
    tags: ['admin', 'table', 'bulk'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-toolbar { justify-content: space-between; }',
    blocks: [
      { k: 'toolbar', title: 'Users' },
      { k: 'banner', title: '3 rows selected — export, tag, or suspend' },
      { k: 'table', items: ['Name', 'Role', 'Status', 'Last seen'], rows: [['M. Chen', 'Owner', 'Active', '2h ago'], ['K. Ito', 'Editor', 'Active', '1d ago'], ['A. Duval', 'Viewer', 'Invited', '—'], ['R. Osei', 'Editor', 'Suspended', '5d ago']] },
      { k: 'pager', title: '1 2 3 … 9' },
    ],
  },
  {
    id: 'kanban-board-shell',
    name: 'Kanban board in an app shell',
    family: A,
    blurb: 'Four-lane delivery board with card metadata and swimlane labels.',
    tags: ['kanban', 'board', 'delivery'],
    layout: 'display:grid; grid-template-columns: 150px minmax(0,1fr); gap:16px; align-items:start; padding:18px;',
    extra: '.pt-kanban { grid-template-columns: repeat(4, minmax(0,1fr)); }',
    blocks: [
      { k: 'sidebar', items: ['Board', 'Backlog', 'Roadmap', 'Reports'] },
      { k: 'kanban', cols: 4, n: 8, v: 'wide' },
    ],
  },
  {
    id: 'calendar-agenda',
    name: 'Month calendar with agenda',
    family: A,
    blurb: 'Month grid beside a day agenda, with events visible on the grid.',
    tags: ['calendar', 'agenda', 'scheduling'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.35fr) minmax(0,0.65fr); gap:18px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-calendar { } .pt-canvas > .pt-list { position: sticky; top: 10px; }',
    blocks: [
      { k: 'calendar', title: 'September 2026' },
      { k: 'list', title: 'Thursday, 17', items: ['09:00 Design review', '11:30 Token sync', '14:00 Customer call', '16:30 Ship 3.4'], v: 'compact' },
    ],
  },
  {
    id: 'inbox-reading-pane',
    name: 'Inbox with reading pane',
    family: A,
    blurb: 'Message list on the left, full message and reply box on the right.',
    tags: ['inbox', 'master-detail', 'email'],
    layout: 'display:grid; grid-template-columns: 96px 260px minmax(0,1fr); gap:14px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-side { grid-row: span 2; }',
    blocks: [
      { k: 'sidebar', items: ['Inbox', 'Sent', 'Drafts', 'Archive'] },
      { k: 'inbox', title: 'Inbox (12)', n: 6 },
      { k: 'chat', title: 'Re: Token naming', v: 'wide' },
    ],
  },
  {
    id: 'settings-section-nav',
    name: 'Settings with section navigation',
    family: A,
    blurb: 'Vertical section rail beside grouped preference rows.',
    tags: ['settings', 'preferences', 'rail'],
    layout: 'display:grid; grid-template-columns: 180px minmax(0,1fr); gap:24px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-side { position: sticky; top: 10px; }',
    blocks: [
      { k: 'sidebar', items: ['Profile', 'Security', 'Billing', 'Notifications', 'Danger zone'] },
      { k: 'settings', title: 'Notifications', items: ['Product updates', 'Security alerts', 'Weekly digest', 'Mentions'], v: 'stack' },
    ],
  },
  {
    id: 'profile-overview',
    name: 'User profile overview',
    family: A,
    blurb: 'Identity header, stat strip, and an activity feed.',
    tags: ['profile', 'identity', 'activity'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:18px;',
    extra: '.pt-canvas > .pt-profile { padding: 20px; }',
    blocks: [
      { k: 'profile', title: 'Ada Duval', sub: 'Design systems lead · Marseille', v: 'wide' },
      { k: 'kpis', items: ['148 tokens', '46 components', '12 systems', '9 reviews'], cols: 4 },
      { k: 'feed', title: 'Recent activity', n: 4 },
    ],
  },
  {
    id: 'team-directory',
    name: 'Team directory',
    family: A,
    blurb: 'Searchable people grid with role and presence.',
    tags: ['directory', 'people', 'search'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-members { grid-template-columns: repeat(4, minmax(0,1fr)); }',
    blocks: [
      { k: 'toolbar', title: 'Search people' },
      { k: 'members', n: 8, cols: 4 },
      { k: 'pager', title: '1 2 … 6' },
    ],
  },
  {
    id: 'audit-log-filters',
    name: 'Audit log with filters',
    family: A,
    blurb: 'Filter chips above a dense, timestamped event table.',
    tags: ['audit', 'log', 'filters'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-table td:nth-child(3) { font-family: monospace; }',
    blocks: [
      { k: 'filters', title: 'Filter events', items: ['All', 'Auth', 'Billing', 'Members', 'API'], v: 'inline' },
      { k: 'table', items: ['Actor', 'Action', 'Target', 'When'], rows: [['M. Chen', 'member.invite', 'k.ito@…', '2m ago'], ['System', 'backup.complete', 'db-prod', '1h ago'], ['K. Ito', 'token.rotate', 'sk_live_…', '3h ago'], ['A. Duval', 'plan.change', 'Studio → Agency', '1d ago']] },
      { k: 'pager', title: '1 2 3 … 40' },
    ],
  },
  {
    id: 'permissions-matrix',
    name: 'Roles and permissions matrix',
    family: A,
    blurb: 'Capability rows against role columns with inline toggles.',
    tags: ['roles', 'permissions', 'matrix'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-table td:not(:first-child) { text-align: center; }',
    blocks: [
      { k: 'tabs', items: ['Members', 'Roles', 'Permissions', 'SSO'] },
      { k: 'table', items: ['Capability', 'Viewer', 'Editor', 'Admin'], rows: [['Read tokens', '✓', '✓', '✓'], ['Edit tokens', '—', '✓', '✓'], ['Publish system', '—', '—', '✓'], ['Manage billing', '—', '—', '✓'], ['Delete workspace', '—', '—', '✓']] },
      { k: 'cta', title: 'Save changes' },
    ],
  },
  {
    id: 'integrations-toggles',
    name: 'Integration cards with toggles',
    family: A,
    blurb: 'Connected apps as cards, each with status and an enable switch.',
    tags: ['integrations', 'apps', 'toggles'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; padding:18px;',
    extra: '.pt-canvas > .pt-head, .pt-canvas > .pt-filters { grid-column: span 3; }',
    blocks: [
      { k: 'head', title: 'Integrations' },
      { k: 'filters', items: ['All', 'Connected', 'Available'], v: 'inline' },
      { k: 'cards', cols: 3, n: 6, v: 'grid' },
    ],
  },
  {
    id: 'api-key-management',
    name: 'API key management',
    family: A,
    blurb: 'Key table with scopes, last-used timestamps, and a create panel.',
    tags: ['api', 'keys', 'security'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.3fr) minmax(0,0.7fr); gap:20px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'API keys', sub: 'Secrets are shown once. Rotate on a schedule.' },
      { k: 'table', items: ['Name', 'Scopes', 'Last used'], rows: [['Production', 'read write', '4m ago'], ['CI pipeline', 'read', '2h ago'], ['Staging', 'read write', '—']] },
      { k: 'form', title: 'Create a key', v: 'stack' },
    ],
  },
  {
    id: 'webhook-deliveries',
    name: 'Webhook deliveries',
    family: A,
    blurb: 'Delivery attempts with response codes and a payload preview.',
    tags: ['webhooks', 'events', 'payload'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-code { max-height: 150px; }',
    blocks: [
      { k: 'table', title: 'Recent deliveries', items: ['Event', 'Endpoint', 'Code', 'Duration'], rows: [['design.published', '/hooks/designs', '200', '84ms'], ['design.published', '/hooks/retry', '500', '2.4s'], ['member.invited', '/hooks/team', '200', '61ms']] },
      { k: 'code', title: 'Payload' },
    ],
  },
  {
    id: 'billing-invoices',
    name: 'Billing and invoices',
    family: A,
    blurb: 'Plan status, spend metrics, invoice table, and payment method.',
    tags: ['billing', 'invoices', 'payments'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-canvas > .pt-card:last-child { display: flex; flex-direction: row; align-items: center; gap: 14px; }',
    blocks: [
      { k: 'kpis', items: ['Current plan Agency', 'Next charge $249', 'Seats 24 / 30'], cols: 3 },
      { k: 'table', title: 'Invoices', items: ['Invoice', 'Date', 'Amount', 'Status'], rows: [['INV-0417', 'Sep 01', '$249.00', 'Paid'], ['INV-0388', 'Aug 01', '$249.00', 'Paid'], ['INV-0361', 'Jul 01', '$199.00', 'Refunded']] },
      { k: 'list', title: 'Payment method', items: ['Visa ending 4242 — expires 09/28'], v: 'wide' },
    ],
  },
  {
    id: 'usage-quota-meters',
    name: 'Usage and quota meters',
    family: A,
    blurb: 'Resource consumption with meters, reset dates, and upgrade nudges.',
    tags: ['usage', 'quota', 'meters'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-card:last-child { border-color: var(--p-accent); }',
    blocks: [
      { k: 'kpis', items: ['Storage 68%', 'Seats 92%', 'API calls 34%', 'Builds 51%'], cols: 4 },
      { k: 'list', title: 'Consumption this cycle', items: ['Storage — 68 GB of 100 GB', 'Seats — 11 of 12', 'API calls — 1.7M of 5M', 'Build minutes — 512 of 1000'], v: 'wide' },
      { k: 'cta', title: 'Approaching a limit? Add a pack.' },
    ],
  },
  {
    id: 'onboarding-checklist',
    name: 'Onboarding checklist',
    family: A,
    blurb: 'Progress bar, ordered tasks, and a help rail for the first-run flow.',
    tags: ['onboarding', 'checklist', 'first-run'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 230px; gap:20px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Get set up in four steps' },
      { k: 'list', title: 'Your checklist', items: ['Import your tokens', 'Invite two teammates', 'Connect a repository', 'Publish your first page'], v: 'wide' },
      { k: 'list', title: 'Need a hand?', items: ['Watch the 6-minute tour', 'Read the quickstart', 'Book an onboarding call'], v: 'aside' },
    ],
  },
  {
    id: 'command-palette-page',
    name: 'Command palette page',
    family: A,
    blurb: 'The full-screen palette: recent commands, grouped results, keyboard hints.',
    tags: ['command', 'palette', 'keyboard'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-canvas > .pt-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); }',
    blocks: [
      { k: 'toolbar', title: 'Type a command' },
      { k: 'list', title: 'Recent', items: ['Copy design prompt ⌃⇧C', 'Toggle layout L', 'Export CSS variables E', 'Save to favorites F'], v: 'grid' },
      { k: 'code', title: 'Shortcut reference' },
    ],
  },
  {
    id: 'global-search-results',
    name: 'Global search results',
    family: A,
    blurb: 'Grouped results across entity types with match highlighting and filters.',
    tags: ['search', 'results', 'grouped'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-list .pt-list-row:first-child { border-color: var(--p-brand); }',
    blocks: [
      { k: 'toolbar', title: 'Search “token”' },
      { k: 'filters', items: ['Everything', 'Designs', 'Components', 'Docs'], v: 'inline' },
      { k: 'list', title: 'Designs (12)', items: ['Minimalist Tech — monochrome tokens', 'Swiss Editorial — grid and order', 'Soft Mono — developer docs'], v: 'wide' },
      { k: 'list', title: 'Docs (4)', items: ['Token naming rules', 'Contrast minimums'], v: 'wide' },
    ],
  },

  /* ============================ CONTENT & EDITORIAL (14) ============================ */
  {
    id: 'article-sticky-toc',
    name: 'Article with sticky table of contents',
    family: T,
    blurb: 'Reading column beside a TOC that tracks your position.',
    tags: ['article', 'toc', 'reading'],
    layout: 'display:grid; grid-template-columns: minmax(0,0.26fr) minmax(0,0.74fr); gap:26px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-breadcrumb { grid-column: span 2; } .pt-canvas > .pt-list { position: sticky; top: 12px; } .pt-canvas > .pt-split { grid-column: span 2; }',
    blocks: [
      { k: 'breadcrumb', items: ['Journal', 'Craft', 'Token naming'] },
      { k: 'list', items: ['Why names beat numbers', 'The five-value rule', 'Scaling into themes', 'Renaming without pain'], v: 'aside' },
      { k: 'split', title: 'Why names beat numbers', sub: 'A token you cannot say out loud is a token nobody reuses.', v: 'grid' },
      { k: 'quote', title: 'If you need a legend, you have already failed.' },
      { k: 'list', title: 'Continue reading', items: ['Contrast without fear', 'Motion with restraint'], v: 'grid' },
    ],
  },
  {
    id: 'editorial-two-column',
    name: 'Two-column editorial article',
    family: T,
    blurb: 'Newspaper-style columns with a drop cap and a pulled quote.',
    tags: ['editorial', 'columns', 'print'],
    layout: 'display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:22px; padding:20px;',
    extra: '.pt-canvas > .pt-head, .pt-canvas > .pt-media, .pt-canvas > .pt-quote, .pt-canvas > .pt-footer { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'The quiet rebellion against sameness', sub: 'Issue 04 · Craft' },
      { k: 'media', v: 'wide' },
      { k: 'list', items: ['Design systems promised consistency and delivered beige. The correction is already underway, and it does not require a new tool.'], v: 'wide' },
      { k: 'list', items: ['Teams that ship distinctive work share one habit: they write the rules down before they break them.'], v: 'wide' },
      { k: 'quote', title: 'Consistency is character, repeated.' },
      { k: 'footer' },
    ],
  },
  {
    id: 'blog-index-featured',
    name: 'Blog index with featured post',
    family: T,
    blurb: 'One large featured story above a three-up recent grid.',
    tags: ['blog', 'index', 'featured'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:20px; padding:20px;',
    extra: '.pt-canvas > .pt-split { border-color: var(--p-brand); }',
    blocks: [
      { k: 'head', title: 'Journal' },
      { k: 'split', title: 'Naming things you will rename', sub: 'A practical method for tokens that survive a rebrand.', v: 'media-text' },
      { k: 'cards', cols: 3, n: 3, v: 'grid' },
      { k: 'pager', title: '1 2 … 14' },
    ],
  },
  {
    id: 'magazine-cover-grid',
    name: 'Magazine cover grid',
    family: T,
    blurb: 'Masthead, cover story, and a dense article index around it.',
    tags: ['magazine', 'masthead', 'grid'],
    layout: 'display:grid; grid-template-columns: repeat(5, minmax(0,1fr)); grid-auto-rows: 96px; gap:12px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 5; border-bottom: 3px double var(--p-ink); padding-bottom: 10px; } .pt-cards > :nth-child(1) { grid-column: span 3; grid-row: span 3; } .pt-cards > :nth-child(2) { grid-column: span 2; } .pt-cards > :nth-child(3) { grid-column: span 2; } .pt-cards > :nth-child(4) { grid-column: span 2; grid-row: span 2; }',
    blocks: [
      { k: 'head', title: 'THE LEDGER · Issue 41' },
      { k: 'cards', cols: 4, n: 4, v: 'tall' },
      { k: 'list', items: ['Letters', 'Classifieds', 'Weather'], v: 'inline' },
    ],
  },
  {
    id: 'gallery-exhibition',
    name: 'Exhibition gallery',
    family: T,
    blurb: 'Artwork grid with a details rail and wall-label typography.',
    tags: ['gallery', 'exhibition', 'art'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 210px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; } .pt-canvas > .pt-gallery { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Works on paper', sub: 'Until 12 December · Rooms 1–4' },
      { k: 'gallery', n: 6 },
      { k: 'list', title: 'Details', items: ['Free entry', 'Open 10:00–18:00', 'Closed Mondays'], v: 'aside' },
    ],
  },
  {
    id: 'photo-story-captions',
    name: 'Photo story with captions',
    family: T,
    blurb: 'Full-bleed images alternating with short caption columns.',
    tags: ['photo', 'story', 'captions'],
    layout: 'display:flex; flex-direction:column; gap:20px; padding:20px;',
    extra: '.pt-canvas > .pt-media:nth-of-type(odd) { margin-left: -20px; margin-right: -20px; border-radius: 0; }',
    blocks: [
      { k: 'head', title: 'Eleven days on the coast' },
      { k: 'media', v: 'wide' },
      { k: 'list', items: ['Day one: the fog did not lift until noon, which suited everyone fine.'], v: 'wide' },
      { k: 'media', v: 'wide' },
      { k: 'list', items: ['Day six: the boat came back empty and nobody minded.'], v: 'wide' },
      { k: 'quote', title: 'We took fewer photographs and kept more days.' },
    ],
  },
  {
    id: 'podcast-episode-page',
    name: 'Podcast episode page',
    family: T,
    blurb: 'Player, waveform, chapter list, and show notes.',
    tags: ['podcast', 'player', 'chapters'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 250px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-player { grid-column: span 2; } .pt-canvas > .pt-code { max-height: 160px; }',
    blocks: [
      { k: 'player', title: 'Episode 42 — Tokens are a management tool' },
      { k: 'tracklist', title: 'Chapters', items: ['00:00 Cold open', '02:14 Naming wars', '14:40 The five-value rule', '31:05 Adoption without mandate', '48:12 Listener questions'] },
      { k: 'code', title: 'Transcript excerpt' },
    ],
  },
  {
    id: 'podcast-show-index',
    name: 'Podcast show index',
    family: T,
    blurb: 'Show header with subscribe actions above a long episode list.',
    tags: ['podcast', 'episodes', 'subscribe'],
    layout: 'display:grid; grid-template-columns: 200px minmax(0,1fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-profile { grid-column: span 2; }',
    blocks: [
      { k: 'profile', title: 'The Design Vault', sub: 'Weekly conversations about systems that hold up.', v: 'wide' },
      { k: 'list', title: 'Latest episodes', items: ['#42 Tokens are a management tool', '#41 Naming things you will rename', '#40 The five-value rule', '#39 Adopting without a mandate', '#38 Motion with restraint'], v: 'compact' },
      { k: 'tracklist', title: 'Most played', items: ['#12 Why beige wins', '#22 Contrast without fear', '#31 Ship the page you designed'] },
    ],
  },
  {
    id: 'video-watch-page',
    name: 'Video watch page',
    family: T,
    blurb: 'Player with metadata, an up-next rail, and a comment thread.',
    tags: ['video', 'watch', 'comments'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 260px; gap:20px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-comments { grid-column: span 2; }',
    blocks: [
      { k: 'media', v: 'wide' },
      { k: 'tracklist', title: 'Up next', items: ['Building a token pipeline', 'Typography for interfaces', 'Motion, slower than you think'] },
      { k: 'comments', n: 2, v: 'wide' },
    ],
  },
  {
    id: 'news-home-sections',
    name: 'News home with sections',
    family: T,
    blurb: 'Lead story, secondary stack, and a three-column section band.',
    tags: ['news', 'home', 'lead'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:18px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-split { grid-column: span 3; }',
    blocks: [
      { k: 'head', title: 'The Daily System' },
      { k: 'split', title: 'Lead: the case for boring infrastructure', sub: 'Excitement is a deadline problem, not a design goal.', v: 'media-text' },
      { k: 'cards', cols: 3, n: 3, v: 'grid' },
      { k: 'list', title: 'More from today', items: ['Markets steady after a nervous week', 'A quieter way to run a review', 'The tool that replaced three'], v: 'wide' },
    ],
  },
  {
    id: 'long-read-pull-quotes',
    name: 'Long read with pull quotes',
    family: T,
    blurb: 'Single narrow measure with frequent pull quotes to break the wall.',
    tags: ['long-read', 'pull-quote', 'measure'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:20px; padding:20px 34px; max-width:520px; margin:0 auto;',
    extra: '.pt-quote { font-size: 15px; }',
    blocks: [
      { k: 'head', title: 'The five-value rule', sub: 'A short argument against the fourth shade of grey.' },
      { k: 'list', items: ['Every spacing scale eventually grows a value that exists to fix one broken screen. That value is the beginning of the end.'], v: 'wide' },
      { k: 'quote', title: 'If the fix needs a new number, the problem is upstream.' },
      { k: 'list', items: ['The teams with the calmest systems are not the ones with the best discipline. They are the ones with the fewest decisions left to make.'], v: 'wide' },
      { k: 'list', items: ['Stop at four. Rename them. Never negotiate.'], v: 'wide' },
    ],
  },
  {
    id: 'book-author-page',
    name: 'Book author page',
    family: T,
    blurb: 'Cover beside a chapter list, with a pull quote from the reviews.',
    tags: ['book', 'author', 'chapters'],
    layout: 'display:grid; grid-template-columns: 220px minmax(0,1fr); gap:24px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-quote { grid-column: span 2; }',
    blocks: [
      { k: 'media', v: 'tall' },
      { k: 'list', title: 'Contents', items: ['1. Start with the page', '2. Naming things', '3. The five-value rule', '4. Contrast without fear', '5. Shipping the system'], v: 'compact' },
      { k: 'quote', title: 'The clearest book on design systems I have read.' },
    ],
  },
  {
    id: 'docs-article-sidebar',
    name: 'Docs article with sidebar nav',
    family: T,
    blurb: 'Persistent section nav, article body, and prev/next pagination.',
    tags: ['docs', 'sidebar', 'article'],
    layout: 'display:grid; grid-template-columns: 200px minmax(0,1fr); gap:26px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-side { position: sticky; top: 10px; }',
    blocks: [
      { k: 'sidebar', items: ['Quickstart', 'Tokens', 'Components', 'Theming', 'Changelog'] },
      { k: 'breadcrumb', items: ['Docs', 'Components', 'Buttons'] },
      { k: 'code', title: 'Install' },
      { k: 'list', title: 'On this page', items: ['Anatomy', 'Variants', 'Accessibility', 'Do and do not'], v: 'aside' },
      { k: 'pager', title: '← Inputs · Tables →' },
    ],
  },
  {
    id: 'recipe-ingredients-steps',
    name: 'Recipe with ingredients and steps',
    family: T,
    blurb: 'Ingredients rail that stays visible while you work through the method.',
    tags: ['recipe', 'steps', 'rail'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 250px; gap:24px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; } .pt-canvas > .pt-card:first-of-type { grid-column: span 2; } .pt-canvas > .pt-list { position: sticky; top: 12px; }',
    blocks: [
      { k: 'head', title: 'Slow-braised short rib', sub: 'Serves 4 · 3 hours mostly unattended' },
      { k: 'media', v: 'wide' },
      { k: 'list', title: 'Method', items: ['Season and sear on all sides', 'Sweat the aromatics in the same pan', 'Deglaze, then braise covered at 150°C', 'Rest 20 minutes before slicing'], v: 'wide' },
      { k: 'list', title: 'Ingredients', items: ['1.4 kg short rib', '2 onions', '4 cloves garlic', '500 ml stock', '2 tbsp tomato paste'], v: 'aside' },
    ],
  },

  /* ============================ FORMS & FLOWS (12) ============================ */
  {
    id: 'signin-split',
    name: 'Sign in split screen',
    family: F,
    blurb: 'Brand panel beside a minimal credential form — the classic.',
    tags: ['auth', 'signin', 'split'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap:0; padding:0; min-height:340px;',
    extra: '.pt-canvas > .pt-media { border-radius: 0; min-height: 100%; } .pt-canvas > .pt-card { border: none; border-radius: 0; justify-content: center; padding: 26px; }',
    blocks: [
      { k: 'media', v: 'tall' },
      { k: 'auth', title: 'Welcome back', sub: 'Sign in to your workspace.', v: 'stack' },
    ],
  },
  {
    id: 'signup-multi-step',
    name: 'Multi-step signup',
    family: F,
    blurb: 'Stepper, one question per screen, and a reassurance footer.',
    tags: ['signup', 'wizard', 'steps'],
    layout: 'display:grid; grid-template-columns: 240px minmax(0,1fr); gap:0; padding:0; min-height:320px;',
    extra: '.pt-canvas > .pt-list { padding: 22px; border-right: 1px solid var(--p-line); background: var(--p-surface); } .pt-canvas > .pt-card { border: none; border-radius: 0; padding: 26px; }',
    blocks: [
      { k: 'list', items: ['1 Account', '2 Workspace', '3 Invite team', '4 Pick a plan'], v: 'compact' },
      { k: 'form', title: 'Create your workspace', sub: 'You can rename it later.', v: 'stack' },
    ],
  },
  {
    id: 'password-reset',
    name: 'Password reset',
    family: F,
    blurb: 'One field, one action, and an explicit security note.',
    tags: ['password', 'auth', 'minimal'],
    layout: 'display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; padding:34px 20px; min-height:300px;',
    extra: '.pt-canvas > * { width: min(360px, 100%); }',
    blocks: [
      { k: 'head', title: 'Reset your password', sub: 'We will email a single-use link.', v: 'center' },
      { k: 'form', v: 'stack' },
      { k: 'list', items: ['The link expires in 30 minutes.', 'We never email your password.'], v: 'compact' },
    ],
  },
  {
    id: 'otp-verification',
    name: 'OTP verification',
    family: F,
    blurb: 'Six-cell code entry with a resend timer and a fallback method.',
    tags: ['otp', '2fa', 'verify'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:30px 20px; max-width:420px; margin:0 auto;',
    extra: '.pt-input { letter-spacing: 0.5em; justify-content: center; }',
    blocks: [
      { k: 'head', title: 'Enter the six-digit code', sub: 'Sent to •••• 4821', v: 'center' },
      { k: 'form', v: 'inline' },
      { k: 'list', items: ['Resend in 0:24', 'Use a recovery code instead'], v: 'inline' },
    ],
  },
  {
    id: 'contact-map-form',
    name: 'Contact with map',
    family: F,
    blurb: 'Form beside a map with office details — the page every agency needs.',
    tags: ['contact', 'map', 'form'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap:20px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Talk to us' },
      { k: 'form', title: 'Send a message', v: 'stack' },
      { k: 'map' },
    ],
  },
  {
    id: 'survey-questionnaire',
    name: 'Multi-question survey',
    family: F,
    blurb: 'Question progress, one scale, and a free-text box.',
    tags: ['survey', 'research', 'scale'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:24px 20px; max-width:520px; margin:0 auto;',
    extra: '.pt-form .pt-check { padding: 9px 11px; border: 1px solid var(--p-line); border-radius: 8px; }',
    blocks: [
      { k: 'steps', items: ['3 of 12'], v: 'inline' },
      { k: 'form', title: 'How easy was it to find what you needed?', sub: 'Question 3 of 12', items: ['Very easy', 'Easy', 'Neutral', 'Difficult', 'Very difficult'], v: 'stack' },
      { k: 'pager', title: '← Back · Next →' },
    ],
  },
  {
    id: 'appointment-booking',
    name: 'Appointment booking',
    family: F,
    blurb: 'Calendar, available slots, and a confirmation step.',
    tags: ['booking', 'slots', 'calendar'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-list { position: sticky; top: 10px; }',
    blocks: [
      { k: 'calendar', title: 'Pick a date' },
      { k: 'list', title: 'Available', items: ['09:00 — available', '10:30 — available', '13:00 — booked', '15:30 — available'], v: 'compact' },
      { k: 'form', title: 'Your details', v: 'inline' },
    ],
  },
  {
    id: 'restaurant-reservation',
    name: 'Restaurant reservation',
    family: F,
    blurb: 'Party size, date, and time chips above a policies note.',
    tags: ['reservation', 'restaurant', 'chips'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-media { min-height: 120px; } .pt-form { gap: 14px; }',
    blocks: [
      { k: 'media', v: 'wide' },
      { k: 'form', title: 'Reserve a table', items: ['1 guest', '2 guests', '4 guests', '6+ guests'], v: 'stack' },
      { k: 'list', title: 'Before you book', items: ['Tables held for 15 minutes', 'Larger parties by phone', 'Dietary notes welcome'], v: 'grid' },
    ],
  },
  {
    id: 'donation-amounts',
    name: 'Donation with amount presets',
    family: F,
    blurb: 'Preset amounts, impact copy, and a progress bar toward the goal.',
    tags: ['donation', 'nonprofit', 'amounts'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 240px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Fund the next cohort' },
      { k: 'form', title: 'Choose an amount', items: ['$25', '$50', '$100', '$250'], v: 'stack' },
      { k: 'stats', items: ['68% of goal', '1,204 donors', '11 days left'], cols: 1 },
    ],
  },
  {
    id: 'invoice-payment',
    name: 'Invoice detail with payment',
    family: F,
    blurb: 'Itemised invoice beside a payment panel with methods.',
    tags: ['invoice', 'payment', 'detail'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.2fr) minmax(0,0.8fr); gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-table { align-self: start; }',
    blocks: [
      { k: 'head', title: 'Invoice INV-0417', sub: 'Due 30 September 2026' },
      { k: 'table', items: ['Description', 'Qty', 'Amount'], rows: [['Design system license', '1', '$1,200.00'], ['Component kit', '2', '$300.00'], ['Onboarding workshop', '1', '$450.00'], ['Tax (12%)', '—', '$234.00']] },
      { k: 'form', title: 'Pay now', items: ['Card ending 4242', 'Bank transfer', 'Purchase order'], v: 'stack' },
    ],
  },
  {
    id: 'identity-verification',
    name: 'Identity verification flow',
    family: F,
    blurb: 'Document upload, selfie check, and a live status panel.',
    tags: ['kyc', 'upload', 'status'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 240px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-steps { grid-column: span 2; }',
    blocks: [
      { k: 'steps', items: ['Details', 'Document', 'Selfie', 'Review'], v: 'wide' },
      { k: 'form', title: 'Upload your ID', sub: 'Passport, licence, or national ID.', v: 'stack' },
      { k: 'status', title: 'Status', items: ['Details — verified', 'Document — in review', 'Selfie — pending'], v: 'stack' },
    ],
  },
  {
    id: 'job-application',
    name: 'Job application',
    family: F,
    blurb: 'Role summary beside the application form, with an EEO note.',
    tags: ['jobs', 'apply', 'hiring'],
    layout: 'display:grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap:26px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-list:first-of-type { position: sticky; top: 10px; }',
    blocks: [
      { k: 'list', title: 'Design Systems Engineer', items: ['Remote · Europe', 'Full time', '€72–96k', 'Reports to Head of Design'], v: 'aside' },
      { k: 'form', title: 'Apply', sub: 'Takes about eight minutes.', v: 'stack' },
    ],
  },

  /* ============================ DATA (12) ============================ */
  {
    id: 'feature-comparison-matrix',
    name: 'Feature comparison matrix',
    family: D,
    blurb: 'Wide sticky-header matrix for products or plans.',
    tags: ['matrix', 'compare', 'sticky'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-table th:first-child, .pt-table td:first-child { position: sticky; left: 0; background: var(--p-bg); }',
    blocks: [
      { k: 'table', title: 'Capability matrix', items: ['Capability', 'Free', 'Pro', 'Team', 'Agency'], rows: [['Seats', '1', '3', '10', '∞'], ['Token sets', '1', '3', '10', '∞'], ['Version history', '7 days', '30 days', '1 year', '∞'], ['SSO', '—', '—', '✓', '✓'], ['Audit log', '—', '—', '✓', '✓'], ['SLA', '—', '—', '99.5%', '99.95%']] },
      { k: 'cta', title: 'Pick a column and go.' },
    ],
  },
  {
    id: 'financial-statement',
    name: 'Financial statement table',
    family: D,
    blurb: 'Tabbed statements with a chart above and totals fixed at the bottom.',
    tags: ['finance', 'statement', 'totals'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-table tbody tr:last-child td { font-weight: 780; border-top: 2px solid var(--p-ink); }',
    blocks: [
      { k: 'tabs', items: ['Income', 'Balance', 'Cash flow'] },
      { k: 'chart', title: 'Operating cash, 12 months' },
      { k: 'table', items: ['Line item', 'Q1', 'Q2', 'Q3'], rows: [['Revenue', '$412k', '$448k', '$501k'], ['Cost of revenue', '$118k', '$124k', '$131k'], ['Gross profit', '$294k', '$324k', '$370k'], ['Operating expenses', '$201k', '$214k', '$228k'], ['Net income', '$93k', '$110k', '$142k']] },
    ],
  },
  {
    id: 'crm-pipeline-table',
    name: 'CRM pipeline table',
    family: D,
    blurb: 'Deal stage, owner, value, and win probability with weighted totals.',
    tags: ['crm', 'deals', 'pipeline'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-kpis .pt-card:nth-child(2) { border-color: var(--p-brand); }',
    blocks: [
      { k: 'kpis', items: ['Pipeline $1.24M', 'Weighted $612k', 'Win rate 31%', 'Cycle 42 days'], cols: 4 },
      { k: 'table', items: ['Deal', 'Stage', 'Owner', 'Value', 'Prob.'], rows: [['Nimbus Labs', 'Negotiation', 'M. Chen', '$240k', '70%'], ['Ferro & Co', 'Proposal', 'K. Ito', '$96k', '45%'], ['Halcyon', 'Discovery', 'A. Duval', '$310k', '20%'], ['Delta Group', 'Contract', 'R. Osei', '$128k', '90%']] },
    ],
  },
  {
    id: 'leaderboard-table',
    name: 'Leaderboard table',
    family: D,
    blurb: 'Ranked rows with movement indicators and a timeframe switch.',
    tags: ['leaderboard', 'ranking', 'scores'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-table td:first-child { font-weight: 800; font-variant-numeric: tabular-nums; }',
    blocks: [
      { k: 'tabs', items: ['This week', 'This month', 'All time'] },
      { k: 'table', items: ['#', 'Player', 'Points', 'Streak'], rows: [['1', 'northwind', '12,480', '14'], ['2', 'kai.ito', '11,905', '9'], ['3', 'duval', '11,120', '6'], ['4', 'osei', '9,880', '3'], ['5', 'chen', '9,410', '11']] },
    ],
  },
  {
    id: 'weekly-schedule-grid',
    name: 'Weekly schedule grid',
    family: D,
    blurb: 'Seven-column week with time rows and blocks that span vertically.',
    tags: ['schedule', 'week', 'time-grid'],
    layout: 'display:grid; grid-template-columns: repeat(7, minmax(0,1fr)); grid-auto-rows: 34px; gap:4px; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 7; } .pt-calendar { grid-column: span 7; grid-template-columns: repeat(7, minmax(0,1fr)); }',
    blocks: [
      { k: 'head', title: 'Week of 14 September' },
      { k: 'calendar' },
      { k: 'list', items: ['Design review · Mon 09:00', 'Token sync · Wed 11:30', 'Ship 3.4 · Thu 16:30'], v: 'inline' },
    ],
  },
  {
    id: 'inventory-table',
    name: 'Inventory table with stock signals',
    family: D,
    blurb: 'SKU table with reorder thresholds and inline stock badges.',
    tags: ['inventory', 'stock', 'sku'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-table tr:nth-child(2) td { background: color-mix(in srgb, var(--p-accent) 12%, transparent); }',
    blocks: [
      { k: 'toolbar', title: 'Inventory' },
      { k: 'table', items: ['SKU', 'Product', 'On hand', 'Reorder at'], rows: [['FJ-OLV-M', 'Field Jacket', '128', '40'], ['WS-CHR', 'Wool Scarf', '12', '25'], ['LB-34', 'Leather Belt', '64', '20'], ['CT-GRY-L', 'Cotton Tee', '0', '30']] },
      { k: 'pager', title: '1 2 3 … 18' },
    ],
  },
  {
    id: 'invoice-list-status',
    name: 'Invoice list with status filters',
    family: D,
    blurb: 'Filter chips, status badges, and a totals footer.',
    tags: ['invoices', 'status', 'finance'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-filters { justify-content: flex-start; }',
    blocks: [
      { k: 'filters', items: ['All 128', 'Paid 96', 'Open 24', 'Overdue 8'], v: 'inline' },
      { k: 'table', items: ['Invoice', 'Client', 'Due', 'Amount', 'Status'], rows: [['INV-0417', 'Northwind', 'Sep 30', '$1,734', 'Open'], ['INV-0416', 'Ferro & Co', 'Sep 22', '$980', 'Paid'], ['INV-0415', 'Halcyon', 'Sep 12', '$420', 'Overdue'], ['INV-0414', 'Delta Group', 'Sep 08', '$2,150', 'Paid']] },
      { k: 'stats', items: ['Open $14,208', 'Overdue $1,622', 'Paid this month $38,410'], cols: 3 },
    ],
  },
  {
    id: 'audit-timeline-filtered',
    name: 'Audit timeline with filters',
    family: D,
    blurb: 'Narrow filter rail beside a chronological event rail.',
    tags: ['audit', 'timeline', 'filters'],
    layout: 'display:grid; grid-template-columns: 170px minmax(0,1fr); gap:22px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-filters { position: sticky; top: 10px; }',
    blocks: [
      { k: 'filters', title: 'Narrow by', items: ['Actor', 'Action', 'Date range', 'Severity'], v: 'aside' },
      { k: 'timeline', title: 'Events', items: ['K. Ito rotated a production key', 'System completed nightly backup', 'A. Duval changed the plan', 'M. Chen invited two members', 'System flagged 3 contrast issues'] },
    ],
  },
  {
    id: 'report-builder-panes',
    name: 'Report builder panes',
    family: D,
    blurb: 'Fields, rows, values, and a live preview in four panes.',
    tags: ['report', 'builder', 'panes'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; padding:18px;',
    extra: '.pt-canvas > .pt-table { grid-column: span 3; } .pt-filters { flex-direction: column; align-items: stretch; }',
    blocks: [
      { k: 'filters', title: 'Fields', items: ['Region', 'Channel', 'Quarter', 'Segment'], v: 'aside' },
      { k: 'filters', title: 'Rows', items: ['Region'], v: 'aside' },
      { k: 'filters', title: 'Values', items: ['Revenue', 'Sessions'], v: 'aside' },
      { k: 'table', title: 'Preview', items: ['Region', 'Revenue', 'Sessions'], rows: [['North', '$412k', '84.2k'], ['South', '$318k', '61.4k'], ['East', '$501k', '92.8k'], ['West', '$264k', '48.1k']] },
    ],
  },
  {
    id: 'activity-heatmap',
    name: 'Activity heatmap',
    family: D,
    blurb: 'Grid heatmap with legend and a weekday breakdown rail.',
    tags: ['heatmap', 'activity', 'grid'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 200px; gap:20px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-head, .pt-canvas > .pt-list { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Contribution activity' },
      { k: 'heatmap' },
      { k: 'list', title: 'By weekday', items: ['Monday — 148', 'Tuesday — 162', 'Wednesday — 171', 'Thursday — 155'], v: 'aside' },
    ],
  },
  {
    id: 'conversion-funnel',
    name: 'Conversion funnel',
    family: D,
    blurb: 'Stage-by-stage funnel with drop-off percentages.',
    tags: ['funnel', 'conversion', 'stages'],
    layout: 'display:grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap:12px; align-items:end; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 5; } .pt-canvas > .pt-chart { grid-column: span 5; } .pt-canvas > .pt-list { grid-column: span 5; }',
    blocks: [
      { k: 'head', title: 'Visit → activation' },
      { k: 'chart', title: 'Funnel stages' },
      { k: 'list', items: ['Landing 100%', 'Signup 42%', 'Activated 26%', 'Team 11%', 'Paid 4.8%'], v: 'inline' },
    ],
  },
  {
    id: 'cohort-retention-grid',
    name: 'Cohort retention grid',
    family: D,
    blurb: 'Cohorts as rows, weeks as columns, intensity as cell fill.',
    tags: ['cohort', 'retention', 'grid'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:14px; padding:18px;',
    extra: '.pt-table td:not(:first-child) { text-align: center; font-variant-numeric: tabular-nums; }',
    blocks: [
      { k: 'table', title: 'Retention by signup week', items: ['Cohort', 'W1', 'W2', 'W3', 'W4'], rows: [['Aug 04', '100%', '68%', '54%', '48%'], ['Aug 11', '100%', '72%', '58%', '51%'], ['Aug 18', '100%', '74%', '61%', '—'], ['Aug 25', '100%', '79%', '—', '—']] },
      { k: 'list', items: ['Median W4 retention 50% · up 4 points quarter over quarter.'], v: 'wide' },
    ],
  },

  /* ============================ SOCIAL (9) ============================ */
  {
    id: 'social-feed-composer',
    name: 'Social feed with composer',
    family: S,
    blurb: 'Compose box at the top of a chronological feed with a sidebar of shortcuts.',
    tags: ['feed', 'composer', 'social'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 220px; gap:22px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-form { order: -1; }',
    blocks: [
      { k: 'form', title: 'Share an update', v: 'inline' },
      { k: 'feed', title: 'Following', n: 4 },
      { k: 'list', title: 'Shortcuts', items: ['Bookmarks', 'Lists', 'Drafts'], v: 'aside' },
    ],
  },
  {
    id: 'forum-thread',
    name: 'Forum thread with replies',
    family: S,
    blurb: 'Original post, nested replies, and a related-topics rail.',
    tags: ['forum', 'thread', 'replies'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 220px; gap:22px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-breadcrumb { grid-column: span 2; }',
    blocks: [
      { k: 'breadcrumb', items: ['Community', 'Design systems', 'Naming'] },
      { k: 'comments', title: 'Thread', n: 4, v: 'wide' },
      { k: 'list', title: 'Related', items: ['Token naming rules', 'Stop at four values', 'Dark mode as a pair'], v: 'aside' },
    ],
  },
  {
    id: 'community-members-grid',
    name: 'Community member grid',
    family: S,
    blurb: 'Member cards with contribution counts and follow actions.',
    tags: ['members', 'community', 'cards'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-members { grid-template-columns: repeat(3, minmax(0,1fr)); }',
    blocks: [
      { k: 'toolbar', title: 'Members' },
      { k: 'members', n: 6, cols: 3 },
      { k: 'pager', title: '1 2 … 8' },
    ],
  },
  {
    id: 'events-listing',
    name: 'Events listing',
    family: S,
    blurb: 'Date rail, event cards, and a filter bar — meetups and conferences.',
    tags: ['events', 'listing', 'dates'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-cards { grid-template-columns: repeat(2, minmax(0,1fr)); }',
    blocks: [
      { k: 'filters', items: ['All', 'This week', 'Online', 'Free'], v: 'inline' },
      { k: 'cards', cols: 2, n: 4, v: 'grid' },
      { k: 'pager', title: '1 2 3' },
    ],
  },
  {
    id: 'event-detail-agenda',
    name: 'Event page with agenda',
    family: S,
    blurb: 'Hero banner, speaker list, hour-by-hour agenda, and a ticket bar.',
    tags: ['event', 'agenda', 'tickets'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:20px; padding:0;',
    extra: '.pt-canvas > *:not(.pt-hero) { margin-inline: 20px; } .pt-hero { border-radius: 0; margin: 0; min-height: 180px; }',
    blocks: [
      { k: 'hero', title: 'Systems Conf 2026', sub: 'Two days, four tracks, one very good coffee bar.', v: 'wide' },
      { k: 'members', title: 'Speakers', n: 4, cols: 4 },
      { k: 'list', title: 'Day one', items: ['09:00 Doors and coffee', '10:00 Keynote — the case for boring', '13:00 Workshop: token pipelines', '16:00 Panel: adoption without mandate'], v: 'wide' },
      { k: 'banner', title: 'Tickets from €180 — early bird ends Friday' },
    ],
  },
  {
    id: 'profile-match-cards',
    name: 'Match cards stack',
    family: S,
    blurb: 'Overlapping card stack with decision actions below.',
    tags: ['matching', 'cards', 'stack'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; place-items:center; padding:24px;',
    extra: '.pt-canvas > .pt-profile { width: min(300px, 100%); box-shadow: var(--p-shadow); }',
    blocks: [
      { k: 'profile', title: 'Ada, 32', sub: 'Designer · Lyon · 4 km away', v: 'tall' },
      { k: 'list', items: ['Pass', 'Save', 'Connect'], v: 'inline' },
    ],
  },
  {
    id: 'messaging-two-pane',
    name: 'Messaging two-pane',
    family: S,
    blurb: 'Thread list beside the conversation, with composer pinned at the bottom.',
    tags: ['messaging', 'chat', 'panes'],
    layout: 'display:grid; grid-template-columns: 220px minmax(0,1fr); gap:0; padding:0; min-height:340px;',
    extra: '.pt-canvas > .pt-inbox { border-right: 1px solid var(--p-line); } .pt-canvas > .pt-chat { padding: 16px; } .pt-chat .pt-input { margin-top: auto; }',
    blocks: [
      { k: 'inbox', n: 6 },
      { k: 'chat', title: 'Kai Ito', v: 'wide' },
    ],
  },
  {
    id: 'notification-center',
    name: 'Notification center',
    family: S,
    blurb: 'Grouped notifications with per-channel delivery settings.',
    tags: ['notifications', 'settings', 'groups'],
    layout: 'display:grid; grid-template-columns: minmax(0,1.25fr) minmax(0,0.75fr); gap:20px; align-items:start; padding:18px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Notifications' },
      { k: 'activity', title: 'Today', n: 5 },
      { k: 'settings', title: 'Delivery', items: ['Email', 'Push', 'Digest', 'Mentions only'], v: 'stack' },
    ],
  },
  {
    id: 'review-wall',
    name: 'Review wall',
    family: S,
    blurb: 'Rating summary above a masonry of customer reviews.',
    tags: ['reviews', 'ratings', 'wall'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:18px;',
    extra: '.pt-reviews { grid-template-columns: repeat(3, minmax(0,1fr)); }',
    blocks: [
      { k: 'kpis', items: ['4.9 average', '1,204 reviews', '94% recommend', '312 with photos'], cols: 4 },
      { k: 'reviews', n: 6, cols: 3 },
      { k: 'cta', title: 'Write a review' },
    ],
  },

  /* ============================ SYSTEM & UTILITY (10) ============================ */
  {
    id: 'page-not-found',
    name: '404 page',
    family: Y,
    blurb: 'Oversized error numeral with useful exits instead of a dead end.',
    tags: ['404', 'error', 'wayfinding'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; place-items:center; padding:40px 24px; text-align:center;',
    extra: '.pt-head .pt-h1 { font-size: 64px; letter-spacing: -0.06em; }',
    blocks: [
      { k: 'head', title: '404', sub: 'That page moved, retired, or never existed.', v: 'center' },
      { k: 'list', items: ['Browse designs', 'Pattern library', 'Component kit', 'Contact support'], v: 'inline' },
      { k: 'form', title: 'Or search for it', v: 'inline' },
    ],
  },
  {
    id: 'maintenance-mode',
    name: 'Maintenance page',
    family: Y,
    blurb: 'Status notice, live progress, and an email-me-when-ready field.',
    tags: ['maintenance', 'status', 'notify'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:34px 22px; place-items:center; text-align:center;',
    extra: '.pt-canvas > * { width: min(480px, 100%); }',
    blocks: [
      { k: 'head', title: 'Back at 14:00 UTC', sub: 'We are migrating storage. Nothing is lost, just briefly unavailable.', v: 'center' },
      { k: 'status', items: ['Database migration', 'File re-index', 'Cache warm-up'], v: 'stack' },
      { k: 'form', title: 'Email me when it is up', v: 'inline' },
    ],
  },
  {
    id: 'empty-state-variants',
    name: 'Empty state variants',
    family: Y,
    blurb: 'First-run, filtered-out, and error empties side by side.',
    tags: ['empty', 'states', 'onboarding'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-empty:nth-of-type(3) { border-color: var(--p-bad); }',
    blocks: [
      { k: 'head', title: 'Three ways a screen can be empty' },
      { k: 'empty', title: 'No designs yet', sub: 'Start from a template or import tokens.' },
      { k: 'empty', title: 'No results', sub: 'Loosen the filters to see more.' },
      { k: 'empty', title: 'Could not load', sub: 'The registry timed out. Retrying in 5s.' },
    ],
  },
  {
    id: 'loading-skeletons',
    name: 'Loading skeletons',
    family: Y,
    blurb: 'Skeletons that mirror the real layout so the swap is invisible.',
    tags: ['skeleton', 'loading', 'perceived'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:20px;',
    extra: '.pt-skeleton { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; }',
    blocks: [
      { k: 'skeleton', cols: 3, n: 3 },
      { k: 'skeleton', n: 2, v: 'wide' },
    ],
  },
  {
    id: 'error-state-gallery',
    name: 'Error state gallery',
    family: Y,
    blurb: 'Inline, banner, field, and blocking errors in one place.',
    tags: ['errors', 'states', 'ux'],
    layout: 'display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Error vocabulary' },
      { k: 'banner', title: 'Service degraded — retries are automatic', tone: 'warn' },
      { k: 'toast', title: 'Copy failed — select and copy manually', tone: 'bad' },
      { k: 'form', title: 'Inline validation', sub: 'Card number is 15 digits, expected 16.', tone: 'bad', v: 'stack' },
      { k: 'empty', title: 'Blocking failure', sub: 'We could not reach the registry. Nothing was changed.' },
    ],
  },
  {
    id: 'consent-banners',
    name: 'Consent and banner patterns',
    family: Y,
    blurb: 'Cookie bar, upgrade nag, and offline notice — the three banners everyone needs.',
    tags: ['consent', 'banners', 'gdpr'],
    layout: 'display:flex; flex-direction:column; gap:14px; padding:20px;',
    extra: '.pt-banner:nth-of-type(2) { background: var(--p-brand); } .pt-banner:nth-of-type(3) { background: var(--p-surface); color: var(--p-ink); border: 1px solid var(--p-line); }',
    blocks: [
      { k: 'banner', title: 'We use two cookies. Both keep the preview alive.' },
      { k: 'banner', title: 'You are on the Free plan — 3 of 5 exports used.' },
      { k: 'banner', title: 'Offline. Changes are saved locally and will sync.' },
    ],
  },
  {
    id: 'search-no-results',
    name: 'Search with no results',
    family: Y,
    blurb: 'Zero-result screen that recovers with suggestions and a fallback action.',
    tags: ['search', 'empty', 'recovery'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:18px; padding:22px;',
    extra: '.pt-canvas > .pt-empty { background: var(--p-surface); }',
    blocks: [
      { k: 'form', title: 'Search “brutalist pastel”', v: 'inline' },
      { k: 'empty', title: 'No matches for “brutalist pastel”', sub: 'These two aesthetics rarely travel together — try one at a time.' },
      { k: 'list', title: 'Try instead', items: ['Brutalism (11 designs)', 'Pastel Playful', 'Monochrome systems'], v: 'grid' },
    ],
  },
  {
    id: 'migration-checklist',
    name: 'Migration and upgrade checklist',
    family: Y,
    blurb: 'Version diff, ordered tasks, and a rollback safety note.',
    tags: ['migration', 'upgrade', 'checklist'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr) 230px; gap:22px; align-items:start; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 2; }',
    blocks: [
      { k: 'head', title: 'Upgrade to 4.0', sub: 'Twelve breaking changes, all mechanical.' },
      { k: 'list', title: 'Do these in order', items: ['Rename --color-* to --dv-*', 'Replace Button radius tokens', 'Update chart imports', 'Re-run the contrast audit'], v: 'wide' },
      { k: 'status', title: 'Rollback', items: ['Backup taken 2m ago', 'Two releases retained'], v: 'stack' },
    ],
  },
  {
    id: 'offline-retry',
    name: 'Offline and retry screen',
    family: Y,
    blurb: 'Connection state, retry affordance, and what still works offline.',
    tags: ['offline', 'retry', 'pwa'],
    layout: 'display:grid; grid-template-columns: minmax(0,1fr); gap:16px; padding:26px 20px; max-width:460px; margin:0 auto;',
    extra: '.pt-canvas > .pt-banner { background: var(--p-accent); color: #1a1200; }',
    blocks: [
      { k: 'banner', title: 'You are offline' },
      { k: 'list', title: 'Available offline', items: ['Recently opened designs', 'Cached prompts', 'Saved favorites'], v: 'grid' },
      { k: 'form', title: 'Retry', sub: 'Last attempt 12 seconds ago.', v: 'inline' },
    ],
  },
  {
    id: 'permission-prompts',
    name: 'Permission prompts',
    family: Y,
    blurb: 'Notification, location, and storage requests written so people say yes.',
    tags: ['permissions', 'prompts', 'trust'],
    layout: 'display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; padding:20px;',
    extra: '.pt-canvas > .pt-head { grid-column: span 3; } .pt-canvas > .pt-cta { grid-column: span 3; }',
    blocks: [
      { k: 'head', title: 'Ask for nothing you cannot justify' },
      { k: 'cards', cols: 3, n: 3, v: 'grid' },
      { k: 'cta', title: 'All optional. All revocable.' },
    ],
  },

  /* ====================== WAVE 3 (14 new recipes) ====================== */
  {
    id: 'webinar-registration',
    name: 'Webinar registration page',
    family: M,
    blurb: 'Event pitch, social proof, and a form that never leaves the fold.',
    tags: ['webinar', 'event', 'registration', 'b2b'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:24px; padding:24px 22px; max-width:760px; margin:0 auto;',
    blocks: [
      { k: 'head', title: 'Shipping design tokens in a legacy codebase', sub: 'Live session · Thursday 16:00 UTC · 45 minutes + Q&A.' },
      { k: 'stats', n: 3, items: ['4,800 registered', '92% watch live', '38 languages'] },
      { k: 'form', title: 'Reserve a seat', sub: 'We send one reminder and the replay link. Nothing else.' },
      { k: 'faq', items: ['Will it be recorded?', 'Is there a certificate?', 'Can I submit questions early?'] },
    ],
  },
  {
    id: 'app-download-banner',
    name: 'App download switcher',
    family: M,
    blurb: 'Platform badges, feature reminder, and social proof above the fold.',
    tags: ['mobile', 'app', 'download', 'switcher'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:22px; padding:22px 20px;',
    extra: '.pt-i0{background:var(--p-brand); color:#fff;} .pt-i1 .pt-media{min-height:180px;}',
    blocks: [
      { k: 'banner', title: 'The app is the whole product — this site is just its lobby' },
      { k: 'split', title: 'One app, four platforms', sub: 'Offline-first, 12 MB, no account required to try.', v: 'media-text' },
      { k: 'logos', sub: 'Featured by' },
      { k: 'footer' },
    ],
  },
  {
    id: 'gift-card-builder',
    name: 'Gift card builder',
    family: C,
    blurb: 'Amount picker, live card preview, and a delivery date on one screen.',
    tags: ['gift-card', 'configurator', 'gifting'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:22px 20px;',
    extra: '.pt-i2{background:var(--p-brand); color:#fff;} .pt-i2 .pt-sub{color:rgba(255,255,255,.8);}',
    blocks: [
      { k: 'head', title: 'Build their gift card', sub: 'Pick an amount, write a note, choose the day it lands.' },
      { k: 'form', title: 'Amount & note', items: ['$25', '$50', '$100', 'Custom'] },
      { k: 'cards', cols: 1, n: 1, v: 'tall' },
      { k: 'cta', title: 'Delivers by email or print-at-home PDF.' },
    ],
  },
  {
    id: 'rental-availability',
    name: 'Rental availability board',
    family: C,
    blurb: 'Calendar of open weeks beside a filterable unit list.',
    tags: ['rental', 'calendar', 'availability', 'booking'],
    layout: 'display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr); grid-template-areas:"month month" "units filters"; gap:18px; align-items:start; padding:20px;',
    extra: '.pt-i0{grid-area:month;} .pt-i1{grid-area:units;} .pt-i2{grid-area:filters; position:sticky; top:10px;}',
    blocks: [
      { k: 'calendar', title: 'August — three weeks open' },
      { k: 'list', title: 'Available units', items: ['Studio · Aug 3–9', 'Loft · Aug 10–16', 'Cabin · Aug 17–23'], v: 'wide' },
      { k: 'filters', title: 'Refine', items: ['Any length', '1 week', '2+ weeks'], v: 'aside' },
    ],
  },
  {
    id: 'accessibility-statement',
    name: 'Accessibility statement',
    family: A,
    blurb: 'Conformance level, known issues, and a working feedback channel.',
    tags: ['a11y', 'compliance', 'statement', 'trust'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:26px 22px; max-width:720px; margin:0 auto;',
    extra: '.pt-i2 .pt-list-row{align-items:flex-start;}',
    blocks: [
      { k: 'tabs', items: ['Conformance', 'Known issues', 'Feedback', 'Enforcement'] },
      { k: 'list', title: 'WCAG 2.2 AA — audited June 2026', items: ['Perceivable: captions on all video', 'Operable: full keyboard paths', 'Understandable: plain-language error text', 'Robust: tested with NVDA and VoiceOver'], v: 'wide' },
      { k: 'status', title: 'Known issues', items: ['Chart exports lack alt text', 'PDF invoices partially tagged'] },
      { k: 'footer' },
    ],
  },
  {
    id: 'feature-request-board',
    name: 'Feature request board',
    family: A,
    blurb: 'Public triage: requested, planned, building, shipped.',
    tags: ['roadmap', 'requests', 'kanban', 'public'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:20px;',
    extra: '.pt-i0{border-bottom:none; padding-bottom:0;} .pt-i1{grid-template-columns:repeat(4,minmax(0,1fr));} .pt-i2{border-top:none;}',
    blocks: [
      { k: 'toolbar' },
      { k: 'kanban', cols: 4, n: 8 },
      { k: 'comments', title: 'Latest from the team', n: 2 },
    ],
  },
  {
    id: 'glossary-index',
    name: 'Glossary index',
    family: T,
    blurb: 'A–Z jump bar, searchable terms, and a definitions table.',
    tags: ['glossary', 'reference', 'dictionary', 'docs'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:22px 20px;',
    blocks: [
      { k: 'toolbar' },
      { k: 'list', title: 'Jump to', items: ['A', 'B', 'C', 'D–F', 'G–K', 'L–R', 'S–Z'], v: 'inline' },
      { k: 'table', title: 'Terms', items: ['Term', 'Definition', 'See also'], rows: [['Access key', 'A keyboard shortcut bound to a control', 'Focus'], ['Design token', 'A named, reusable design decision', 'Theming'], ['Focus trap', 'Keeps Tab inside a modal', 'Dialog']] },
    ],
  },
  {
    id: 'transcript-reader',
    name: 'Transcript reader',
    family: T,
    blurb: 'Synced transcript beside the player, with topic jump links.',
    tags: ['transcript', 'player', 'accessibility', 'podcast'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:22px 20px; max-width:820px; margin:0 auto;',
    extra: '.pt-i1 .pt-list-row{border-left:2px solid transparent;} .pt-i1 .pt-list-row:first-child{border-left-color:var(--p-brand);}',
    blocks: [
      { k: 'player', title: 'Ep. 42 — Tokens are a language' },
      { k: 'list', title: 'Transcript', items: ['00:00 — Why naming beats documenting', '08:32 — The four-value spacing scale', '19:05 — Migrating a legacy theme', '36:44 — Q&A: versioning tokens'], v: 'wide' },
      { k: 'comments', title: 'Listener notes', n: 2 },
    ],
  },
  {
    id: 'refund-request-flow',
    name: 'Refund request flow',
    family: F,
    blurb: 'A three-step request with status receipt and a calm undo.',
    tags: ['refund', 'support', 'flow', 'steps'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:24px 22px; max-width:560px; margin:0 auto;',
    extra: '.pt-i3{position:sticky; bottom:0;}',
    blocks: [
      { k: 'steps', items: ['Order', 'Reason', 'Review'] },
      { k: 'form', title: 'What went wrong?', items: ['Arrived damaged', 'Not as described', 'Changed my mind'] },
      { k: 'status', title: 'What happens next', items: ['Decision within 24h', 'Refund to original card'] },
      { k: 'toast', title: 'Request submitted — undo within 1 hour' },
    ],
  },
  {
    id: 'team-invitation',
    name: 'Team invitation screen',
    family: F,
    blurb: 'Invite form, pending list, and seat count in one panel.',
    tags: ['invite', 'team', 'onboarding', 'seats'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:26px 22px; max-width:620px; margin:0 auto;',
    blocks: [
      { k: 'head', title: 'Invite your team', sub: 'You have 12 of 15 seats in use.' },
      { k: 'form', title: 'Send invites', v: 'inline' },
      { k: 'members', cols: 4, n: 4 },
      { k: 'toast', title: '3 invites sent · 2 accepted' },
    ],
  },
  {
    id: 'ab-test-results',
    name: 'A/B test results',
    family: D,
    blurb: 'KPI deltas, daily trend, and a decision-ready variant table.',
    tags: ['experiment', 'ab-test', 'results', 'analytics'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-i2 td:nth-child(2), .pt-i2 td:nth-child(3){font-variant-numeric:tabular-nums; text-align:center;}',
    blocks: [
      { k: 'kpis', cols: 4, n: 4, items: ['Lift +8.4%', 'Visitors 41,206', 'P-value 0.012', 'Runtime 14 days'] },
      { k: 'chart', title: 'Conversion rate by day' },
      { k: 'table', title: 'Variants', items: ['Variant', 'Rate', 'Lift'], rows: [['Control', '3.10%', '—'], ['B · new hero', '3.36%', '+8.4%'], ['C · social proof', '3.21%', '+3.5%']] },
    ],
  },
  {
    id: 'dm-request-inbox',
    name: 'Message request inbox',
    family: S,
    blurb: 'Request list, live conversation, and participant details.',
    tags: ['dm', 'inbox', 'requests', 'messaging'],
    layout: 'display:grid; grid-template-columns:230px minmax(0,1fr) 210px; grid-template-areas:"requests convo info"; gap:14px; align-items:start; padding:18px;',
    extra: '.pt-i0{grid-area:requests; position:sticky; top:10px;} .pt-i1{grid-area:convo;} .pt-i2{grid-area:info;}',
    blocks: [
      { k: 'inbox', title: 'Requests', n: 4 },
      { k: 'chat', title: 'K. Ito' },
      { k: 'members', cols: 2, n: 2 },
    ],
  },
  {
    id: 'event-photo-wall',
    name: 'Event photo wall',
    family: S,
    blurb: 'Masonry gallery, live feed, and pager for the archive.',
    tags: ['photos', 'gallery', 'event', 'archive'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    extra: '.pt-i0{grid-template-columns:repeat(6,minmax(0,1fr));}',
    blocks: [
      { k: 'gallery', cols: 6, n: 6 },
      { k: 'feed', title: 'Tagged by attendees', n: 3 },
      { k: 'pager', title: '1 2 3 … 9' },
    ],
  },
  {
    id: 'keyboard-shortcuts-sheet',
    name: 'Keyboard shortcuts sheet',
    family: Y,
    blurb: 'Every shortcut, grouped, printable, and searchable.',
    tags: ['shortcuts', 'keyboard', 'help', 'reference'],
    layout: 'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:24px 22px; max-width:640px; margin:0 auto;',
    extra: '.pt-i1 td:last-child{text-align:right; font-variant-numeric:tabular-nums;}',
    blocks: [
      { k: 'toolbar' },
      { k: 'table', title: 'Shortcuts', items: ['Action', 'Keys'], rows: [['Open command palette', '⌃ ⇧ C'], ['Save to favorites', 'F'], ['Toggle layout', 'L'], ['Export tokens', 'E']] },
      { k: 'toast', title: 'Press ? anywhere in the app' },
    ],
  },
]

/** Patterns grouped by family, in family order. */
export function patternsByFamily(): { family: PatternFamily; label: string; blurb: string; items: PatternDef[] }[] {
  return PATTERN_FAMILIES.map((f) => ({
    family: f.id,
    label: f.label,
    blurb: f.blurb,
    items: PATTERNS.filter((p) => p.family === f.id),
  }))
}

/**
 * Scope a block of declarations to one pattern.
 *
 * Extras are written compactly — several rules on a single line — so every
 * selector has to be prefixed individually. Prefixing only the first one
 * would leak classes like `.pt-i3` across the whole library, which is exactly
 * the bug this guards against.
 */
function scopeTo(decls: string, id: string): string {
  const prefix = `.pt-${id}`
  return decls
    .split('}')
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((rule) => {
      const brace = rule.indexOf('{')
      if (brace === -1) return ''
      const selectors = rule
        .slice(0, brace)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => (s.startsWith(prefix) ? s : `${prefix} ${s}`))
      return `${selectors.join(', ')}{${rule.slice(brace + 1).trim()}}`
    })
    .filter(Boolean)
    .join('\n')
}

/**
 * The complete, memo-friendly stylesheet for the library.
 *
 * Every block root carries `pt-i{index}`, so a canvas arrangement can pin
 * blocks to grid areas without the renderer knowing anything about it.
 */
export function buildPatternCss(): string {
  return PATTERNS.map((p) => {
    const { layout, extra } = canvasFor(p)
    const parts = [`.pt-${p.id} .pt-canvas { ${layout} }`]
    if (extra) parts.push(scopeTo(extra, p.id))
    return parts.join('\n')
  }).join('\n')
}

/** Number of patterns in the library. */
export const PATTERN_COUNT = PATTERNS.length
