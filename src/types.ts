export type Category =
  | 'Minimalism'
  | 'Maximalism'
  | 'Brutalism'
  | 'Luxury'
  | 'Playful'
  | 'Retro'
  | 'Organic'
  | 'Professional'
  | 'Creative'

export type Motif =
  | 'serif-italic-hero'
  | 'underline-accent'
  | 'mono-labels'
  | 'grain-overlay'
  | 'gradient-hero'
  | 'pixel-grid'
  | 'soft-shadows'
  | 'hard-shadows'
  | 'rotated-stickers'
  | 'big-stat-row'
  | 'swiss-grid'
  | 'quote-band'
  | 'ticker-marquee'
  | 'pill-nav'
  | 'leaf-divider'
  | 'wave-section'
  | 'numbered-steps'
  | 'glow-pulse'
  | 'dashed-borders'
  | 'editorial-columns'

export type DeviceMode = 'desktop' | 'tablet' | 'mobile'
export type PreviewTab = 'live' | 'components' | 'code' | 'details'

export type Layout =
  | 'hero-cards'
  | 'split-hero'
  | 'magazine'
  | 'dashboard'
  | 'centered'
  | 'editorial'
  | 'asymmetric'
  | 'full-bleed'
  | 'spotlight'
  | 'manifesto'

export const LAYOUT_LABEL: Record<Layout, string> = {
  'hero-cards': 'Hero + Feature Cards',
  'split-hero': 'Split Hero',
  magazine: 'Magazine',
  dashboard: 'Dashboard',
  centered: 'Centered',
  editorial: 'Editorial',
  asymmetric: 'Asymmetric',
  'full-bleed': 'Full-bleed',
  spotlight: 'Spotlight',
  manifesto: 'Manifesto',
}

/**
 * Every website type the vault can filter by. The first block is the original
 * 22; everything after it is the expanded catalog, grouped below for the
 * sidebar dropdown. Keep this list flat and `as const` so `UseCase` stays a
 * literal union the design data is checked against.
 */
export const USE_CASES = [
  // — original set
  'SaaS',
  'Agency',
  'Portfolio',
  'E-commerce',
  'Restaurant',
  'Music',
  'Fintech',
  'Health',
  'Education',
  'Real Estate',
  'Travel',
  'Gaming',
  'News',
  'Events',
  'Nonprofit',
  'AI/ML',
  'Crypto',
  'Fashion',
  'Fitness',
  'Kids',
  'Productivity',
  'Photography',
  // — software & tech
  'Developer Tools',
  'DevOps & Cloud',
  'Cybersecurity',
  'Data & Analytics',
  'No-Code',
  'Design Tools',
  // — business & money
  'Banking',
  'Insurance',
  'Accounting',
  'Legal',
  'Consulting',
  // — work & teams
  'Project Management',
  'CRM',
  'HR & Recruiting',
  'Remote Work',
  'Startup',
  // — commerce
  'Marketplace',
  'Grocery',
  'Subscription Box',
  // — creative & media
  'Art Gallery',
  'Podcast',
  'Film & TV',
  'Publishing',
  // — learning & community
  'E-learning',
  'University',
  'Community',
  // — lifestyle
  'Hotel',
  'Booking',
  'Coffee Shop',
  'Beauty & Spa',
  'Wedding',
  'Pets',
  // — health & wellness
  'Clinic',
  'Mental Health',
  'Wellness',
  // — industry & places
  'Architecture',
  'Construction',
  'Automotive',
  'Logistics',
  'Manufacturing',
  'Energy',
  'Agriculture',
  // — play & events
  'Sports',
  'Streaming',
  // — civic
  'Government',
] as const

export type UseCase = (typeof USE_CASES)[number]

/** Grouped layout of `USE_CASES` for the sidebar dropdown. */
export const USE_CASE_GROUPS: { label: string; items: UseCase[] }[] = [
  {
    label: 'Software & tech',
    items: ['SaaS', 'Developer Tools', 'AI/ML', 'DevOps & Cloud', 'Cybersecurity', 'Data & Analytics', 'No-Code', 'Design Tools'],
  },
  {
    label: 'Business & money',
    items: ['Fintech', 'Banking', 'Crypto', 'Insurance', 'Accounting', 'Legal', 'Consulting'],
  },
  {
    label: 'Work & teams',
    items: ['Productivity', 'Project Management', 'CRM', 'HR & Recruiting', 'Remote Work', 'Startup'],
  },
  {
    label: 'Commerce',
    items: ['E-commerce', 'Marketplace', 'Grocery', 'Subscription Box'],
  },
  {
    label: 'Creative & media',
    items: ['Portfolio', 'Agency', 'Photography', 'Art Gallery', 'Music', 'Podcast', 'Film & TV', 'Publishing'],
  },
  {
    label: 'Learning & community',
    items: ['Education', 'E-learning', 'University', 'Kids', 'Community', 'Nonprofit'],
  },
  {
    label: 'Lifestyle & travel',
    items: ['Travel', 'Hotel', 'Booking', 'Restaurant', 'Coffee Shop', 'Fashion', 'Beauty & Spa', 'Wedding', 'Pets'],
  },
  {
    label: 'Health & wellness',
    items: ['Health', 'Clinic', 'Mental Health', 'Fitness', 'Wellness'],
  },
  {
    label: 'Industry & places',
    items: ['Real Estate', 'Architecture', 'Construction', 'Automotive', 'Logistics', 'Manufacturing', 'Energy', 'Agriculture'],
  },
  {
    label: 'Play & events',
    items: ['Gaming', 'Sports', 'Events', 'Streaming', 'News'],
  },
  {
    label: 'Civic',
    items: ['Government'],
  },
]

/** Compact glyph per website type — used by the picker and the result header. */
export const USE_CASE_ICON: Record<UseCase, string> = {
  SaaS: '⬡',
  'Developer Tools': '⌘',
  'AI/ML': '✦',
  'DevOps & Cloud': '☁',
  Cybersecurity: '⛨',
  'Data & Analytics': '▤',
  'No-Code': '⧉',
  'Design Tools': '✎',
  Fintech: '◈',
  Banking: '$',
  Crypto: '⬢',
  Insurance: '⛉',
  Accounting: '∑',
  Legal: '§',
  Consulting: '◎',
  Productivity: '✓',
  'Project Management': '▦',
  CRM: '◔',
  'HR & Recruiting': '☺',
  'Remote Work': '⌂',
  Startup: '▲',
  'E-commerce': '◍',
  Marketplace: '⊞',
  Grocery: '❋',
  'Subscription Box': '☑',
  Portfolio: '◐',
  Agency: '◈',
  Photography: '◉',
  'Art Gallery': '❖',
  Music: '♪',
  Podcast: '◍',
  'Film & TV': '▷',
  Publishing: '≡',
  Education: '✎',
  'E-learning': '◫',
  University: '⌂',
  Kids: '●',
  Community: '❍',
  Nonprofit: '♥',
  Travel: '✈',
  Hotel: '⌗',
  Booking: '▣',
  Restaurant: '✿',
  'Coffee Shop': '☕',
  Fashion: '✂',
  'Beauty & Spa': '✧',
  Wedding: '❥',
  Pets: '❉',
  Health: '✚',
  Clinic: '✜',
  'Mental Health': '☯',
  Fitness: '✦',
  Wellness: '❀',
  'Real Estate': '⌂',
  Architecture: '◲',
  Construction: '▨',
  Automotive: '◈',
  Logistics: '⇄',
  Manufacturing: '⚙',
  Energy: '⚡',
  Agriculture: '✿',
  Gaming: '♟',
  Sports: '◉',
  Events: '★',
  Streaming: '▶',
  News: '❏',
  Government: '⛨',
}

export interface ComponentSpec {
  /** Main CTA button */
  primary: string
  /** Ghost / secondary button */
  secondary: string
  /** Text-only button */
  tertiary: string
  /** Button corner radius */
  radius: string
  /** Button hover treatment */
  hover: string
  cards: string
  forms: string
  navigation: string
  modals: string
}

export interface Spacing {
  baseUnit: string
  marginScale: string
  paddingScale: string
  grid: string
}

export interface Motion {
  pageLoad: string
  hoverStates: string
  transitions: string
  scroll?: string
}

export interface Colors {
  primary: string
  secondary: string
  accent: string
  neutral: string
  background: string
  text: string
}

export interface Typography {
  displayFont: string
  bodyFont: string
  scale: string
  lineHeights: string
  letterSpacing: string
}

export interface DesignSystem {
  id: string
  name: string
  category: Category
  tags: string[]
  description: string
  designPhilosophy: string
  designDetails: string
  colors: Colors
  typography: Typography
  components: ComponentSpec
  spacing: Spacing
  motion: Motion
  accessibility: string
  responsive: string
  codeExample: string
  /** Curated accent the shell UI uses around this design */
  accent: string
  /** Optional deep background for the preview stage */
  stage?: string
  motif: Motif
  /** Page layout archetype for the live preview */
  layout: Layout
  /** Website types this design suits */
  useCases: UseCase[]
  /** Extra per-design CSS (signature effects); injected only in preview + thumbs */
  signatureCss: string
  author: string
  createdAt: string
  popularity: number
  trending?: boolean
}

export const CATEGORY_ORDER: Category[] = [
  'Minimalism',
  'Maximalism',
  'Brutalism',
  'Luxury',
  'Playful',
  'Retro',
  'Organic',
  'Professional',
  'Creative',
]

export const CATEGORY_ACCENT: Record<Category, string> = {
  Minimalism: '#3ecfb2',
  Maximalism: '#ff5c8a',
  Brutalism: '#ffd166',
  Luxury: '#d4b26a',
  Playful: '#4cc9f0',
  Retro: '#ff6b35',
  Organic: '#7bb661',
  Professional: '#6f9bff',
  Creative: '#c77dff',
}
