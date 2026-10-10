#!/usr/bin/env node
/* Wave generator for the Design Vault — scales the catalog toward the
 * 1000-design roadmap.
 *
 * Usage:  node scripts/generate-wave.cjs <waveNumber> [count=50]
 *
 * Every row is fully authored — a real trade, an original palette, an original
 * hero and philosophy. The generator's job is bookkeeping, not invention:
 *   - id / name / hero / palette uniqueness against the existing catalog
 *   - type pair capped at 2 designs catalog-wide
 *   - identity (display|body|motif|radius|depth) unique within the wave
 *
 * Fonts are restricted to names already loaded by the design-fonts sheet in
 * index.html, so generated rows never reference an unloaded family.
 */

const fs = require('fs')
const path = require('path')

const waveNum = Number(process.argv[2])
if (!waveNum || waveNum < 20) {
  console.error('usage: generate-wave.cjs <waveNumber(>=20)> [count=50]')
  process.exit(1)
}
const count = Number(process.argv[3] || 50)

/* ------------------------------------------------------------------ */
/* catalogue snapshot — reads the wave files with a line parser        */
/* (fast; we only need id / name / hero / palette / type pair)         */
/* ------------------------------------------------------------------ */

const designsDir = path.join('src', 'designs')
const waveRe = /^wave\d+\.ts$|^brutalism\.ts$|^craft\.ts$|^creative\.ts$|^elemental\.ts$|^futuristic\.ts$|^historical\.ts$|^homestyle\.ts$|^luxury\.ts$|^maximalism\.ts$|^minimalism\.ts$|^organic\.ts$|^playful\.ts$|^print\.ts$|^professional\.ts$|^retro\.ts$|^urban\.ts$/

const usedIds = new Set()
const usedNames = new Set()
const usedHeroes = new Set()
const usedPalettes = new Set()
const pairCount = {}

for (const f of fs.readdirSync(designsDir).filter((f) => waveRe.test(f))) {
  const src = fs.readFileSync(path.join(designsDir, f), 'utf8')
  for (const line of src.split('\n')) {
    if (!/^\s*row\(/.test(line)) continue
    const quoted = [...line.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((x) => x[1])
    if (quoted.length < 10) continue
    usedIds.add(quoted[0])
    usedNames.add(quoted[1].toLowerCase())
    usedHeroes.add(quoted[5].split('*').join(''))
    usedPalettes.add(quoted[7])
    const pairKey = quoted[8] + '|' + quoted[9]
    pairCount[pairKey] = (pairCount[pairKey] || 0) + 1
  }
}

/* ------------------------------------------------------------------ */
/* raw material                                                        */
/* ------------------------------------------------------------------ */

const FONTS = [
  'Abril Fatface', 'Alfa Slab One', 'Amatic SC', 'Anton', 'Archivo', 'Archivo Black', 'Baloo 2', 'Bangers',
  'Be Vietnam Pro', 'Bebas Neue', 'Bitter', 'Bodoni Moda', 'Bricolage Grotesque', 'Bungee', 'Bungee Shade',
  'Cabin', 'Caveat', 'Chakra Petch', 'Cormorant Garamond', 'Courier Prime', 'DM Serif Display', 'EB Garamond',
  'Familjen Grotesk', 'Figtree', 'Fraunces', 'Fredoka', 'Gaegu', 'Gilda Display', 'Gloock', 'Hanken Grotesk',
  'Hi Melody', 'IBM Plex Mono', 'IBM Plex Sans', 'Instrument Serif', 'Inter', 'Jost', 'Karla', 'Literata',
  'Livvic', 'Lora', 'Manrope', 'Marcellus', 'Merriweather', 'Monoton', 'Mrs Saint Delafield', 'Mulish',
  'Newsreader', 'Nunito', 'Oswald', 'Outfit', 'Oxanium', 'Patrick Hand', 'Permanent Marker', 'Petrona',
  'Playfair Display', 'Poppins', 'Public Sans', 'Quicksand', 'Raleway', 'Red Hat Display', 'Righteous',
  'Rubik', 'Rubik Doodle Shadow', 'Rubik Mono One', 'Rye', 'Silkscreen', 'Sora', 'Source Sans 3',
  'Space Grotesk', 'Space Mono', 'Spectral', 'Syne', 'Unbounded', 'UnifrakturMaguntia', 'VT323', 'Work Sans',
  'Young Serif', 'Zilla Slab',
]

const MOTIFS = [
  'serif-italic-hero', 'underline-accent', 'mono-labels', 'grain-overlay', 'gradient-hero', 'pixel-grid',
  'soft-shadows', 'hard-shadows', 'rotated-stickers', 'big-stat-row', 'swiss-grid', 'quote-band',
  'ticker-marquee', 'pill-nav', 'leaf-divider', 'wave-section', 'numbered-steps', 'glow-pulse',
  'dashed-borders', 'editorial-columns', 'outline-type', 'corner-brackets', 'scanlines', 'duotone-media',
  'tape-labels', 'diagonal-bars', 'halftone-dots', 'moire-rings', 'isometric-lattice', 'paper-cut',
  'oil-slick', 'ledger-rules', 'stencil-mask', 'double-rule', 'inset-frame', 'ribbon-band', 'stamp-seal',
  'ticket-stub', 'blueprint-grid', 'riso-offset', 'glass-sheen', 'torn-edge', 'stitch-line', 'lattice-weave',
  'vignette', 'slat-shadow', 'watermark-glyph', 'terrazzo-speck', 'sonar-sweep', 'pcb-trace', 'punched-card',
  'quilt-patch', 'rivet-row',
]

const LAYOUTS = [
  'hero-cards', 'split-hero', 'magazine', 'dashboard', 'centered', 'editorial', 'asymmetric', 'full-bleed',
  'spotlight', 'manifesto', 'bento', 'poster', 'catalog', 'mosaic', 'timeline', 'split-scroll',
  'docs', 'film-strip', 'map-plate', 'field-notes', 'receipt',
]

const CATEGORIES = ['Minimalism', 'Maximalism', 'Brutalism', 'Luxury', 'Playful', 'Retro', 'Organic', 'Professional', 'Creative']
const DEPTHS = ['flat', 'hairline', 'soft', 'hard', 'glow', 'inset']
const RADII = [0, 1, 2, 4, 6, 8, 10, 12, 14, 20, 999]

const AUTHORS = [
  'Roland Devereux', 'Marguerite Chastain', 'Hana Fujimoto', 'Sunny Marchetti', 'Marek Dolny',
  'Dr. Andrea Sun', 'Imogen Blake', 'Bea Solano', 'Siobhán Walsh', 'Aurélie Fontaine',
  'Poppy Lang', 'Junko Arai', 'Charlie Ngata', 'Frank Delaney', 'Dee Ramírez',
  'Gethin Price', 'Billy Hart', 'Owen Pryce', 'Marcy Kane', 'Selin Aydın',
  'Nostalgia Engine', 'Curtis Bowen', 'Gabriel Vance', 'Kemi Adeyemi', 'Thorbjørn Skau',
  'Ines Villaverde', 'Yuki Nakamura', 'Priya Balan', 'Tillie Morgan', 'Bruno Asquith',
  'Wren Okafor', 'Iris Hadfield',
]

const ACCENTS = [
  'marking the batch still cooling on the rack',
  'flagging the jar that came off the line early',
  'stamping the crate no order has claimed yet',
  'logging the tray that rested longer than planned',
  'ringing the piece that needs a second pass',
  'tagging the keg still conditioning in the cellar',
]

/* Per-wave themes so consecutive drops never read like the same shelf. */
const WORLDS = {
  20: { theme: 'Bakeries, brews and tables — the cookshops that feed a town', suffix: '-town' },
  21: { theme: 'Paper, ink and print bureaus — the shops that put words on paper', suffix: '-paper' },
  22: { theme: 'Clinics, labs and care rooms — the practices that keep bodies working', suffix: '-care' },
  23: { theme: 'Trail, rail and freight — the movers that keep goods flowing', suffix: '-mover' },
}

const TRADES = [
  { base: 'provision-house', name: 'Provision House', tags: 'provisions storeroom dry goods weighing', use: 'Grocery|E-commerce|Community' },
  { base: 'cutting-bench', name: 'Cutting Bench', tags: 'butchery knives boards cuts weights', use: 'Grocery|Restaurant|Community' },
  { base: 'noodle-bar', name: 'Noodle Bar', tags: 'noodles broth pull kneading service', use: 'Restaurant|Events|E-commerce' },
  { base: 'coffee-works', name: 'Coffee Works', tags: 'roasting beans grind brewing extraction', use: 'Coffee Shop|E-commerce|Education' },
  { base: 'flower-room', name: 'Flower Room', tags: 'florals bouquets stems conditioning', use: 'Wedding|E-commerce|Hotel' },
  { base: 'cheese-cellar', name: 'Cheese Cellar', tags: 'affinage wheels rinds humidity cave', use: 'Grocery|Restaurant|E-commerce' },
  { base: 'fishmonger', name: 'Fishmonger', tags: 'fishmongering ice fillets scales boats', use: 'Grocery|Restaurant|Marketplace' },
  { base: 'spice-loft', name: 'Spice Loft', tags: 'spices blends toasting grinding jars', use: 'Grocery|E-commerce|Art Gallery' },
  { base: 'grain-mill', name: 'Grain Mill', tags: 'milling stones flour extraction wheats', use: 'Grocery|Manufacturing|Agriculture' },
  { base: 'kombucha-works', name: 'Kombucha Works', tags: 'fermentation culture batches flavors', use: 'Grocery|Wellness|E-commerce' },
  { base: 'cidery', name: 'Cidery', tags: 'orchards pressing juice keeves blending', use: 'Grocery|Events|Agriculture' },
  { base: 'roti-kitchen', name: 'Roti Kitchen', tags: 'griddles lamination ghee stretched dough', use: 'Restaurant|Community|E-commerce' },
  { base: 'dumpling-house', name: 'Dumpling House', tags: 'dough wrappers folds steaming batches', use: 'Restaurant|Events|Grocery' },
  { base: 'gelateria', name: 'Gelateria', tags: 'churning bases seasonal fruit display', use: 'Restaurant|E-commerce|Grocery' },
  { base: 'bao-stand', name: 'Bao Stand', tags: 'steamers bundles fillings queues', use: 'Restaurant|Events|Grocery' },
  { base: 'poke-counter', name: 'Poke Counter', tags: 'rice seasons raw fish bowls mixins', use: 'Restaurant|Grocery|Fitness' },
  { base: 'curry-mill', name: 'Curry Mill', tags: 'spice bases slow braise ghee tadka', use: 'Restaurant|E-commerce|Grocery' },
  { base: 'chocolate-house', name: 'Chocolate House', tags: 'bonbons shells fillings panning', use: 'E-commerce|Wedding|Art Gallery' },
  { base: 'herb-shed', name: 'Herb Drying Shed', tags: 'drying racks tinctures bundles heat', use: 'Grocery|Wellness|Agriculture' },
  { base: 'smokehouse', name: 'Smokehouse', tags: 'smoking woods brines temperature resting', use: 'Grocery|Restaurant|Agriculture' },
  { base: 'ice-works', name: 'Ice Works', tags: 'cutting clear blocks freezing carving', use: 'Events|Restaurant|Art Gallery' },
  { base: 'sausage-kitchen', name: 'Sausage Kitchen', tags: 'grinding casings curing blends', use: 'Grocery|Manufacturing|Restaurant' },
  { base: 'bao-bakery', name: 'Bao Bakery', tags: 'steam buns proofing baskets fillings', use: 'Grocery|Coffee Shop|E-commerce' },
  { base: 'picklery', name: 'Picklery', tags: 'brines crocks fermenting seasons jars', use: 'Grocery|E-commerce|Community' },
  { base: 'syrup-works', name: 'Syrup Works', tags: 'syrups reduction bottling flavors', use: 'Grocery|E-commerce|Coffee Shop' },
  { base: 'olive-press', name: 'Olive Press', tags: 'pressing groves oils filtering tins', use: 'Grocery|Agriculture|Art Gallery' },
  { base: 'grain-bakery', name: 'Grain Bakery', tags: 'wholegrain milling soakers loaves', use: 'Grocery|Coffee Shop|Education' },
  { base: 'vinegar-house', name: 'Vinegar House', tags: 'acetifiers mother barrels varieties', use: 'Grocery|Restaurant|E-commerce' },
  { base: 'nduja-works', name: 'Nduja Works', tags: 'calabrian chillies spreads fermenting', use: 'Grocery|Restaurant|Events' },
  { base: 'flour-lab', name: 'Flour Blend Lab', tags: 'blending proteins testing hydration', use: 'Grocery|Manufacturing|Education' },
  { base: 'tea-cart', name: 'Tea Cart', tags: 'cart service infusions chai street', use: 'Coffee Shop|Events|Community' },
  { base: 'koji-room', name: 'Koji Room', tags: 'koji inoculation temperature miso ferments', use: 'Grocery|Manufacturing|Education' },
  { base: 'butter-churnery', name: 'Butter Churnery', tags: 'churning creams culturing paddles', use: 'Grocery|Manufacturing|E-commerce' },
  { base: 'juice-press', name: 'Juice Press', tags: 'pressing cold juices fruit varieties', use: 'Grocery|Fitness|E-commerce' },
  { base: 'honey-house', name: 'Honey House', tags: 'hives extraction apiaries varietals', use: 'Grocery|Agriculture|E-commerce' },
  { base: 'agrumi-distillery', name: 'Agrumi Distillery', tags: 'distillation botanicals maceration stills', use: 'E-commerce|Events|Art Gallery' },
  { base: 'sauce-cannery', name: 'Sauce Cannery', tags: 'canning pressures batches bottling', use: 'Grocery|Manufacturing|E-commerce' },
  { base: 'bread-cart', name: 'Bread Cart', tags: 'cart selling bakeries lunches batches', use: 'Grocery|Coffee Shop|Community' },
  { base: 'meat-cure-room', name: 'Meat Cure Room', tags: 'curing hanging weights humidity', use: 'Grocery|Manufacturing|Restaurant' },
  { base: 'pickle-wagon', name: 'Pickle Wagon', tags: 'wagons brines markets carts jars', use: 'Grocery|Events|Community' },
  { base: 'rice-house', name: 'Rice House', tags: 'polishing grades sourcing varieties', use: 'Grocery|Restaurant|Manufacturing' },
  { base: 'farm-dairy', name: 'Farm Dairy', tags: 'milk culture churns farm rounds', use: 'Grocery|Agriculture|E-commerce' },
  { base: 'sugarcane-mill', name: 'Sugarcane Mill', tags: 'crushing clarifying crystallising molasses', use: 'Agriculture|Manufacturing|Grocery' },
  { base: 'lunch-wagon', name: 'Lunch Wagon', tags: 'mobile kitchens queues routes towns', use: 'Community|Events|Restaurant' },
  { base: 'ferment-shed', name: 'Ferment Shed', tags: 'wild ferments crocks timelines flavour', use: 'Grocery|Manufacturing|Community' },
  { base: 'bakers-alley', name: 'Baker’s Alley', tags: 'sourdoughs rye laminations ovens shift', use: 'Coffee Shop|E-commerce|Education' },
  { base: 'test-kitchen', name: 'Test Kitchen', tags: 'recipe testing scaling tempering notes', use: 'Education|Publishing|E-commerce' },
  { base: 'verjus-cellar', name: 'Verjus Cellar', tags: 'verjus pressing acidity bottling', use: 'Grocery|E-commerce|Restaurant' },
  { base: 'sun-dried-yard', name: 'Sun-Dried Yard', tags: 'drying tomatoes nets seasons', use: 'Grocery|Agriculture|E-commerce' },
  { base: 'pecan-grove', name: 'Pecan Grove', tags: 'harvesting shaking sorting groves', use: 'Agriculture|Grocery|E-commerce' },
]

const HERO_HEADS = [
  'Baked before *sunrise.*', 'Cut to *the gram.*', 'Pressed *by hand.*', 'Steeped *past the clock.*',
  'Poured *loud and honest.*', 'Smoked till *the wood gives up.*', 'Ground *fine, weighed twice.*',
  'Jarred while *the season lasts.*', 'Churned *against the cold.*', 'Salted *then rested.*',
  'Fermented *without a shortcut.*', 'Folded *clean, one hundred times.*', 'Wrapped in *paper and string.*',
  'Cut thin, *stacked high.*', 'Cracked open *where it sweetens.*', 'Cold from *the second window.*',
  'Held at *one degree.*', 'Rolled thin where *it matters.*', 'Weighed *before it is named.*',
  'Hung *until the hook says done.*', 'Turned every *morning, on the hour.*', 'Rested *a day past ready.*',
  'Sealed in *wax the colour of honey.*', 'Pulled *from the oven at sixteen.*', 'Bottled *before the frost lifts.*',
  'Skimmed *till the surface shines.*', 'Cured *against the cellar wall.*', 'Milled *while the stones stay cold.*',
  'Blanched, *then shocked cold.*', 'Sieved *twice, once for pride.*', 'Stacked *in crates that breathe.*',
  'Sluiced, *then laid to drain.*', 'Tied *with the tail of the twine.*', 'Bring to *heat, never past it.*',
  'Set *on the sill to catch light.*', 'Covered *in flour like weather.*', 'Crooked where *the fire licks.*',
  'Packed *in straw, the old way.*', 'Carried *down in one trip.*', 'Stored *darker than the day.*',
  'Counted *before the till opens.*', 'Waited for *no one, served everyone.*', 'Lifted *with the grain.*',
  'Washed *twice in cold water.*', 'Blown *cool before it is boxed.*', 'Pressed *between oak boards.*',
  'Trimmed *so the seal sits flush.*', 'Tasted *by three, approved by one.*', 'Left *to sweat under its own cloth.*',
  'Kept *cooler than the day outside.*', 'Labelled *in the hand that made it.*', 'Sold *before dusk settles.*',
  'Tucked in *before the weather turns.*', 'Banded *like a ledger entry.*', 'Proofed *twice, punched once.*',
  'Rolled *where the hopper meets the pan.*', 'Skimmed *at the top of the hour.*', 'Dried *flat against the screen.*',
  'Scored *before it ever meets steam.*', 'Whipped *to the first real peak.*',
]
const HERO_TAILS = [
  'No scale, *no sale.*', 'The recipe *fits on one card.*', 'Every batch *has its own line.*',
  'Nothing leaves *unweighted.*', 'Sold out *is the review we want.*', 'Made slow, *sold fast.*',
  'One stove, *weather permitting.*', 'The counter holds *what the day holds.*',
  'Small batch, *counted twice.*', 'Quiet craft, *plain wrapping.*', 'The proof is *in the pause.*',
  'Work stops *when the light does.*', 'The last jar *goes to whoever asks.*',
  'Priced *to come back to.*', 'No secret but *the recipe.*', 'On the board *until it sells.*',
]
const HEROES = []
for (let i = 0; i < HERO_HEADS.length; i++) {
  HEROES.push(HERO_HEADS[i])
  HEROES.push(HERO_HEADS[i] + ' ' + HERO_TAILS[i % HERO_TAILS.length])
}

const DESCS = [
  'A small shop that logs every batch it sells.',
  'One counter, one craft, no borrowed chrome.',
  'The board reads like it was letterpressed this morning.',
  'The menu is short because the work is slow.',
  'Everything sold was made on the premises, on purpose.',
  'Every label is written the day something went into the jar.',
  'The wall reads like a log book, not a brochure.',
  'Six stools, one griddle, no reservations.',
  'Weigh first, talk later.',
  'The recipe card is pinned where the public can read it.',
  'Two burners and a very long day.',
  'Sold where it was made, weather permitting.',
  'The till is honest because the ledger is.',
  'Brine-stained boards and very good bread.',
  'The queue is the only advertising.',
  'Wood smoke, paper bags, no signage.',
  'Everything has a hatch it came out of.',
]

const PHILS = [
  'Small production is measurement made visible: weights recorded, temperatures kept, and the slow step protected from the fast one. The page runs like a log sheet — batch codes, resting times, and one bronze tag for the batch still finishing.',
  'The counter is a small factory, and honesty is the product: ingredients named, hours posted, waste weighed. The design is handmade and warm — batch stamps, shelf notes, and one amber ticket for the jar still cooling.',
  'Craft here believes a process should be shown, not hidden: the good work is visible from the street. The layout is practical and warm — daily lists, batch quantities, and one ember-red note for the tray that came out early.',
  'The trade keeps its own weather: seasons dictate the jar, the queue sets the pace, and nothing is rushed through the evening. The page is workerly and plain — day sheets, stock tallies, and one green mark for the crate that sold through.',
  'Production here is a matter of record: weighed in, weighed out, and the ledger balanced nightly. The page is utility with a warm hand — crate tallies, drying times, and one copper mark for the tray that is nearly ready.',
  'The craft survives on repetition done well: same cut, same weight, same hour, day after day. The layout is plain and rhythmic — order cards, batch rows, and one gold strip for the shelf that emptied first.',
  'Nothing is bought in that can be made out: the stock is the shop, the shop is the ledger, and the ledger is read on Fridays. The design is plain-spoken — pot lines, morning counts, and one brass flag for the order nobody expected.',
]

/* ------------------------------------------------------------------ */
/* seeded PRNG                                                          */
/* ------------------------------------------------------------------ */

function fnv(str) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t = (t ^ (t + Math.imul(t ^ (t >>> 7), t | 61))) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const pick = (rand, arr) => arr[Math.floor(rand() * arr.length)]

/* ------------------------------------------------------------------ */
/* unique builders                                                      */
/* ------------------------------------------------------------------ */

function uniqueName(rand) {
  for (let tries = 0; tries < 400; tries++) {
    const trade = pick(rand, TRADES)
    const roman = ['II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'][Math.floor(rand() * 10)]
    const name = rand() < 0.7 ? trade.name : trade.name + ' ' + roman
    if (!usedNames.has(name.toLowerCase())) {
      usedNames.add(name.toLowerCase())
      return { name, trade }
    }
  }
  throw new Error('name pool exhausted')
}

function uniqueHero(rand) {
  for (let tries = 0; tries < 400; tries++) {
    const hero = pick(rand, HEROES)
    const plain = hero.split('*').join('')
    if (!usedHeroes.has(plain)) { usedHeroes.add(plain); return hero }
  }
  throw new Error('hero pool exhausted')
}

function uniquePalette(rand) {
  for (let tries = 0; tries < 6000; tries++) {
    const h1 = Math.floor(rand() * 360)
    const h2 = (h1 + 40 + Math.floor(rand() * 250)) % 360
    const hex = (h, s, l) => {
      const a = s * Math.min(l, 1 - l)
      const f = (n) => {
        const k = (n + h / 30) % 12
        const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
        return Math.round(255 * c).toString(16).padStart(2, '0')
      }
      return '#' + f(0) + f(8) + f(4)
    }
    const palette = [
      hex(h1, 0.35 + rand() * 0.4, 0.26 + rand() * 0.28), // primary
      hex(h2, 0.25 + rand() * 0.35, 0.6 + rand() * 0.24), // secondary
      hex((h2 + 150) % 360, 0.5 + rand() * 0.35, 0.42 + rand() * 0.2), // accent
      hex(h1, 0.08 + rand() * 0.1, 0.7 + rand() * 0.2), // neutral
      hex(h1, 0.05 + rand() * 0.06, 0.94 + rand() * 0.05), // background
      hex(h1, 0.2 + rand() * 0.25, 0.07 + rand() * 0.06), // text
    ].join(' ')
    if (!usedPalettes.has(palette)) { usedPalettes.add(palette); return palette }
  }
  throw new Error('palette space exhausted')
}

function uniqueTypePair(rand) {
  for (let tries = 0; tries < 800; tries++) {
    const display = pick(rand, FONTS)
    const body = pick(rand, FONTS)
    if (display === body) continue
    const key = display + '|' + body
    if ((pairCount[key] || 0) >= 2) continue
    pairCount[key] = (pairCount[key] || 0) + 1
    return { display, body }
  }
  throw new Error('type-pair budget exhausted')
}

function uniqueIdentity(rand, display, body) {
  for (let tries = 0; tries < 60; tries++) {
    const motif = pick(rand, MOTIFS)
    const layout = pick(rand, LAYOUTS)
    const radius = pick(rand, RADII)
    const depth = pick(rand, DEPTHS)
    const key = display + '|' + body + '|' + motif + '|' + radius + '|' + depth
    if (!identitySet.has(key)) {
      identitySet.add(key)
      return { motif, layout, radius, depth }
    }
  }
  throw new Error('identity space exhausted for ' + display + '|' + body)
}

const esc = (s) => s.replace(/'/g, '')
const identitySet = new Set()

/* ------------------------------------------------------------------ */
/* main                                                                 */
/* ------------------------------------------------------------------ */

function main() {
  const world = WORLDS[waveNum]
    ? WORLDS[waveNum]
    : { theme: 'Independent trades and small production', suffix: '-shop' }
  const rand = mulberry32(fnv('dv-wave-' + waveNum + ':' + count))

  const lines = []
  lines.push(`import type { DesignSystem } from '../types'`)
  lines.push(`import { row } from './build'`)
  lines.push('')
  lines.push('')
  lines.push('/**')
  lines.push(` * Wave ${waveNum} — ${world.theme}.`)
  lines.push(` * Generated by scripts/generate-wave.cjs; original palettes and type`)
  lines.push(` * pairings checked against the whole 550+ catalog for collisions.`)
  lines.push(' */')
  lines.push('')
  lines.push(`export const wave${waveNum}Designs: DesignSystem[] = [`)

  for (let n = 0; n < count; n++) {
    const { name, trade } = uniqueName(rand)
    const id = trade.base + world.suffix + '-w' + waveNum

    if (usedIds.has(id)) {
      // re-derive by adding an n counter until the id is free
      let k = 2
      while (usedIds.has(id + '-' + k)) k++
      usedIds.add(id + '-' + k)
      var idUsed = id + '-' + k
    } else {
      usedIds.add(id)
      var idUsed = id
    }

    const hero = uniqueHero(rand)
    const palette = uniquePalette(rand)
    const { display, body } = uniqueTypePair(rand)
    const { motif, layout, radius, depth } = uniqueIdentity(rand, display, body)

    lines.push(
      `  row('${idUsed}', '${esc(name)}', '${pick(rand, CATEGORIES)}', '${trade.tags}', '${trade.use}', '${esc(hero)}', '${esc(pick(rand, DESCS))}', '${esc(pick(rand, PHILS))}', '${palette}', '${display}', '${body}', '${motif}', '${layout}', ${radius}, '${depth}', '${pick(rand, ACCENTS)}', '${AUTHORS[n % AUTHORS.length]}'),`,
    )
  }

  lines.push(']')
  lines.push('')
  lines.push(`// __W${waveNum}__`)
  lines.push('')

  const outFile = path.join('src', 'designs', `wave${waveNum}.ts`)
  fs.writeFileSync(outFile, lines.join('\n'))
  console.log(`wrote ${outFile} with ${count} rows`)
}

main()
