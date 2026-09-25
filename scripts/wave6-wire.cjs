/*
 * wave6-wire.cjs — wires the wave-6 design systems into everything that is
 * keyed by design id, and audits the whole catalogue for the quality rules the
 * README promises. Idempotent: run it after adding entries to wave6.ts.
 *
 *   node scripts/wave6-wire.cjs
 *
 *  1. index.ts          — import + spread wave6Designs
 *  2. extras.ts         — LAYOUT_SETS for every design (unique, even unordered,
 *                         first element = the design's card layout), new ids
 *                         appended to their category's FAMILY_IDS roster,
 *                         dashboard extras for dashboard-layout designs
 *  3. MiniSite.tsx      — heroTitle cases for new ids (HERO map below)
 *  4. audit             — palettes, taglines, fonts, layout sets, hero coverage
 */
const fs = require('fs')
const path = require('path')

const SKIP = new Set(['index.ts', 'theme.ts', 'extras.ts', 'usecases.ts'])
const LAYOUTS = ['hero-cards', 'split-hero', 'magazine', 'dashboard', 'centered', 'editorial', 'asymmetric', 'full-bleed', 'spotlight', 'manifesto']

/** Bespoke hero headlines for wave-6 ids (falls back to the design name). */
const HERO = {
  'tide-clock': 'High water <em>arrives 04:12.</em>',
  'wafer-line': 'Etch depth, <em>in control.</em>',
  'marble-run': 'Where does the <em>ball go?</em>',
  'watch-room': 'Twelve jewels, <em>one owner.</em>',
  'quarry-face': 'HONED GREY, <em>3.4 TONNES.</em>',
  'contour-sheet': 'Slope <em>18%</em>, drainage east.',
  'tare-weight': '248.61 <em>G.</em>',
  'null-set': '—',
  'brick-course': 'Running bond, <em>no cuts wasted.</em>',
  'aphelion': 'Burn complete, <em>aphelion rising.</em>',
  'footnote-press': 'On the <em>quiet</em> parts. <sup>[42]</sup>',
  'haggle-market': 'BRASS POTS, <em>MAKE ME AN OFFER</em>',
  'overprint': 'Ink lands <em>where it lands.</em>',
  'all-of-it': 'Continued from <em>page twelve.</em>',
  'sirens-parade': 'THE BRASS <em>DISTRICT</em>',
  'clutter-core': 'Still <em>mid-idea.</em>',
  'bell-foundry': 'POUR, THEN <em>WAIT.</em>',
  'wind-tunnel': '1.42 kN of <em>drag.</em>',
  'concrete-pour': 'Slump <em>75 mm.</em>',
  'static-fence': 'PER METRE, <em>NOT PER PANEL.</em>',
  'private-vault': 'Deposited <em>1998.</em> Never opened.',
  'vault-of-letters': 'Edition <em>ninety</em> of ninety.',
  'cellar-index': 'Barolo, <em>one case left.</em>',
  'goldsmiths-lane': 'Nine carat, <em>set by hand.</em>',
  'mud-kitchen': 'Mud pie, <em>five stars.</em>',
  'pigeon-post': 'Dear Sam, <em>meet at the shed.</em>',
  'slime-lab': 'Stretch it to <em>400%.</em>',
  'kart-klub': 'Lap <em>41.28</em>, then the argument starts.',
  'dino-dig': 'A tooth, and <em>half a jaw.</em>',
  'fax-machine': 'Order 4471: <em>received.</em>',
  'betamax-rental': 'Two nights, <em>be kind, rewind.</em>',
  'diner-placemat': 'Two eggs, <em>any way.</em>',
  'soviet-control': 'PLAN <em>118%</em> MET.',
  'cb-radio': 'Channel <em>19</em>, you got a copy?',
  'mycelium-net': 'Everything is <em>connected underground.</em>',
  'seed-vault': 'Barley, <em>stored at −18.0 °C.</em>',
  'lichen-index': 'Count the <em>lichen</em>, read the air.',
  'abyssal-drift': 'Four thousand metres, <em>no sunlight.</em>',
  'termite-mound': 'Cooled by <em>chimneys.</em>',
  'grid-dispatch': 'Frequency <em>50.01 Hz.</em>',
  'tower-approach': 'Strips in, <em>sequence out.</em>',
  'underwriter-desk': 'Flood loading <em>+18.5%.</em>',
  'cold-chain': 'Excursions <em>0 of 214.</em>',
  'deed-office': 'Parcel 4471, <em>on record.</em>',
  'cyanotype-lab': 'Reverse-out, <em>no silver.</em>',
  'letterpress-crash': 'Ink too deep, <em>press it anyway.</em>',
  'stop-motion-bench': 'Twelve frames, <em>one second.</em>',
  'grid-paper': 'Sketch first, <em>then the vector.</em>',
  'binaural-room': 'Left and right, <em>forty degrees apart.</em>',
  'zoetrope': 'One revolution, <em>fourteen frames.</em>',
  // Backfill for pre-existing designs that fell back to their name.
  'lunar-climate': 'Earth science, <em>measured calmly.</em>',
  'arco-grid': 'Ruled by the <em>grid.</em>',
  'tondo-ceramics': 'Thrown on the <em>wheel.</em>',
  'sable-supper': 'Supper, <em>after dark.</em>',
  'blau-index': 'Indexes, tables, <em>trust.</em>',
  'beacon-petition': 'SIGN IT, THEN <em>SHOUT IT.</em>',
  'poster-press': 'Deep ink bite, <em>heavy slab.</em>',
  'inkwell-zine': 'Photocopied, <em>stapled, out.</em>',
  'scriptorium-sips': 'Monastery rules, <em>modern pours.</em>',
  'film-journal': 'Frames drawn <em>by hand.</em>',
  'punto-playcafe': 'Coffee, and <em>nobody minds.</em>',
  'neon-arcade': 'One more <em>coin.</em>',
  'cartogrid': 'Records as <em>terrain.</em>',
  'echo-loft': 'Recorded <em>after midnight.</em>',
  'quiet-hours': 'Permission to <em>slow down.</em>',
  'ever-current': 'Wet noses, <em>warm welcomes.</em>',
  'meridian-will': 'Estate law, <em>without the dust.</em>',
  'undercroft-games': 'Roll for <em>initiative.</em>',
  'atlas-waypoints': 'Booked, <em>charted, calm.</em>',
  'bounty-yard': 'Traded like a <em>market stall.</em>',
  'vow-and-verse': 'Two names, <em>one line.</em>',
  'signal-spire': 'On-chain, <em>on the record.</em>',
  'maison-mode': 'One garment <em>per breath.</em>',
  'iron-cadence': 'Heavy type, <em>one short whistle.</em>',
  'aperture-notes': 'A contact sheet <em>you can read.</em>',
  'async-rally': 'Distributed work, <em>no beige.</em>',
  'kennel-and-co': 'Wet noses, <em>zero baby-talk.</em>',
  'mutual-aid-press': 'Grassroots, <em>zero gloss.</em>',
  'studio-copperplate': 'Stations, <em>not sections.</em>',
  'parcel-and-key': 'Listings with a <em>surveyor’s patience.</em>',
  'deadline-gazette': 'Filed at <em>midnight.</em>',
  'cosmo-explorers': 'Learning at <em>escape velocity.</em>',
  'tensor-atlas': 'Papers shipped as <em>products.</em>',
  'gilded-hour': 'An invitation, <em>weighed in the hand.</em>',
}

const read = (p) => fs.readFileSync(p, 'utf8')
const write = (p, s) => fs.writeFileSync(p, s)
const nlOf = (s) => (s.includes('\r\n') ? '\r\n' : '\n')

/* ---------- parse every design entry in src/designs ---------- */

function entries(src) {
  const norm = src.replace(/\r\n/g, '\n')
  const body = norm.slice(norm.indexOf('['), norm.lastIndexOf(']') + 1)
  return body.split(/(?=\n  \{\n    id: ')/).filter((p) => /\bid: '[a-z0-9-]+'/.test(p))
}

const designs = []
for (const f of fs.readdirSync('src/designs').filter((f) => f.endsWith('.ts') && !SKIP.has(f)).sort()) {
  for (const b of entries(read(path.join('src/designs', f)))) {
    const one = (re) => {
      const m = b.match(re)
      return m ? m[1] : null
    }
    designs.push({
      file: f,
      id: one(/\bid: '([^']+)'/),
      name: one(/\bname: '([^']+)'/),
      category: one(/\bcategory: '([^']+)'/),
      layout: one(/\blayout: '([a-z-]+)'/),
      description: one(/\bdescription: '((?:[^'\\]|\\.)*)'/),
      displayFont: one(/\bdisplayFont: '([^']+)'/),
      bodyFont: one(/\bbodyFont: '([^']+)'/),
      colors: ['primary', 'secondary', 'accent', 'neutral', 'background', 'text'].map((k) => {
        const m = b.match(new RegExp('\\b' + k + ": '(#[0-9a-fA-F]{3,8})'"))
        return m ? m[1].toLowerCase() : null
      }),
      popularity: b.match(/\bpopularity: (\d+)/) ? +b.match(/\bpopularity: (\d+)/)[1] : 50,
      useCases: (() => {
        const m = b.match(/useCases: \[([^\]]+)\]/)
        return m ? m[1].split(',').map((s) => s.trim().replace(/'/g, '')).filter(Boolean) : []
      })(),
    })
  }
}

const wave6 = designs.filter((d) => d.file === 'wave6.ts')
const byId = new Map(designs.map((d) => [d.id, d]))
const newIds = new Set(wave6.map((d) => d.id))
console.log(`parsed ${designs.length} designs (${wave6.length} from wave6.ts)`)

/* ---------- 1. index.ts ---------- */

{
  const p = 'src/designs/index.ts'
  const raw = read(p)
  const nl = nlOf(raw)
  if (!raw.includes("from './wave6'")) {
    let next = raw.replace(
      `import { wave5Designs } from './wave5'`,
      `import { wave5Designs } from './wave5'${nl}import { wave6Designs } from './wave6'`,
    )
    next = next.replace(
      `  ...wave5Designs,`,
      `  ...wave5Designs,${nl}  ...wave6Designs,`,
    )
    write(p, next)
    console.log('index.ts: registered wave6Designs')
  } else console.log('index.ts: already registered')
}

/* ---------- 2. extras.ts ---------- */

const EX = 'src/designs/extras.ts'

function layoutSetsOf(raw) {
  const start = raw.indexOf('export const LAYOUT_SETS')
  const open = raw.indexOf('{', start)
  const close = raw.indexOf(`${nlOf(raw)}}`, open)
  const block = raw.slice(open, close)
  const out = new Map()
  for (const m of block.matchAll(/'?([a-z0-9-]+)'?:\s*\[([^\]]+)\]/g)) {
    out.set(m[1], m[2].split(',').map((s) => s.trim().replace(/'/g, '')))
  }
  return { start, open, close, block, out }
}

function wireExtras() {
  let raw = read(EX)
  const nl = nlOf(raw)
  const { open, close, out: existing } = layoutSetsOf(raw)
  const used = new Set([...existing.values()].map((s) => [...s].sort().join('+')))
  const added = []
  const seqOf = (s) => s.join('>')

  const pick = (first) => {
    if (!LAYOUTS.includes(first)) return null
    const rest = LAYOUTS.filter((l) => l !== first)
    const ok = (s) => !used.has([...s].sort().join('+'))
    for (const a of rest) if (ok([first, a])) return [first, a]
    for (let i = 0; i < rest.length; i++) for (let j = i + 1; j < rest.length; j++) if (ok([first, rest[i], rest[j]])) return [first, rest[i], rest[j]]
    for (let i = 0; i < rest.length; i++) for (let j = i + 1; j < rest.length; j++) for (let k = j + 1; k < rest.length; k++)
      if (ok([first, rest[i], rest[j], rest[k]])) return [first, rest[i], rest[j], rest[k]]
    return null
  }

  for (const d of designs) {
    if (existing.has(d.id)) continue
    const set = pick(d.layout)
    if (!set) throw new Error(`no unique arrangement set left for ${d.id}`)
    used.add([...set].sort().join('+'))
    existing.set(d.id, set)
    added.push([d.id, set, d.layout])
  }

  if (added.length) {
    const groups = new Map()
    for (const [id, set, layout] of added) {
      if (!groups.has(layout)) groups.set(layout, [])
      groups.get(layout).push(`  '${id}': [${set.map((s) => `'${s}'`).join(', ')}],`)
    }
    const body = ['', '  /* — later waves (added by scripts/wave6-wire.cjs) — */']
    for (const layout of LAYOUTS) if (groups.has(layout)) {
      body.push(`  // first: ${layout} (${groups.get(layout).length})`, ...groups.get(layout))
    }
    const insert = body.join(nl)
    raw = raw.slice(0, close) + insert + raw.slice(close)
    write(EX, raw)
    console.log(`extras.ts: +${added.length} LAYOUT_SETS entries (first = card layout, unique unordered)`)
  } else console.log('extras.ts: LAYOUT_SETS already complete')

  /* FAMILY_IDS: append new ids to their category roster (existing indexes untouched) */
  raw = read(EX)
  const lines = raw.split(nl)
  const famStart = lines.findIndex((l) => l.includes('const FAMILY_IDS'))
  const famEnd = lines.findIndex((l, i) => i > famStart && l.trim() === ']')
  const perCat = new Map()
  for (const d of wave6) {
    if (!perCat.has(d.category)) perCat.set(d.category, [])
    perCat.get(d.category).push(d.id)
  }
  let touched = 0
  for (let i = famStart; i <= famEnd; i++) {
    const m = lines[i].match(/^\s*\/\/\s*(\w+)\s*$/)
    if (!m || !perCat.has(m[1])) continue
    const fresh = perCat.get(m[1]).filter((id) => !lines[i + 1].includes(`'${id}'`))
    if (!fresh.length) continue
    if (!lines[i + 1].trim().endsWith('],')) throw new Error(`unexpected family line: ${lines[i + 1].slice(0, 40)}`)
    lines[i + 1] = lines[i + 1].replace(/,\s*\],$/, `, ${fresh.map((id) => `'${id}'`).join(', ')}],`)
    touched += fresh.length
  }
  if (touched) {
    write(EX, lines.join(nl))
    console.log(`extras.ts: ${touched} ids appended to FAMILY_IDS rosters (block-set rotation)`)
  } else console.log('extras.ts: FAMILY_IDS already covers wave 6')

  /* DASH_EXTRAS for new dashboard-layout designs */
  raw = read(EX)
  const dashIds = [...raw.matchAll(/^  '?([a-z0-9-]+)'?: '(report-builder|kanban|calendar|activity)',/gm)].map((m) => m[1])
  const dashSet = new Set(dashIds)
  const ROT = ['report-builder', 'kanban', 'calendar', 'activity']
  const need = wave6.filter((d) => d.layout === 'dashboard' && !dashSet.has(d.id))
  if (need.length) {
    const last = dashIds[dashIds.length - 1]
    const lastExtra = raw.match(new RegExp(`'?${last}'?: '([a-z-]+)'`))
    let k = Math.max(0, ROT.indexOf(lastExtra ? lastExtra[1] : ROT[0]))
    const add = need.map((d) => {
      k = (k + 1) % ROT.length
      return `  '${d.id}': '${ROT[k]}',`
    })
    const anchor = `${nl}}${nl}${nl}export function getDashExtra`
    if (!raw.includes(anchor)) throw new Error('DASH_EXTRAS anchor not found')
    raw = raw.replace(anchor, `${nl}${add.join(nl)}${anchor}`)
    write(EX, raw)
    console.log(`extras.ts: +${need.length} dashboard extras`)
  } else console.log('extras.ts: no new dashboard extras needed')
}

wireExtras()

/* ---------- 3. MiniSite.tsx hero cases ---------- */

{
  const p = 'src/components/MiniSite.tsx'
  const raw = read(p)
  const nl = nlOf(raw)
  const have = new Set([...raw.matchAll(/case '([a-z0-9-]+)':/g)].map((m) => m[1]))
  const missing = designs.filter((d) => !have.has(d.id) && HERO[d.id])
  if (missing.length) {
    const lines = missing.map((d) => `    case '${d.id}': return <>${HERO[d.id]}</>`)
    const anchor = `${nl}    default: return <>{d.name}</>`
    if (!raw.includes(anchor)) throw new Error('heroTitle default anchor not found')
    write(p, raw.replace(anchor, `${nl}${lines.join(nl)}${anchor}`))
    console.log(`MiniSite.tsx: +${missing.length} heroTitle cases`)
  } else console.log('MiniSite.tsx: hero cases already present')
}

/* ---------- 4. audit ---------- */

let problems = 0
const flag = (m) => { console.log('❌ ' + m); problems++ }

const catOf = (d) => d.category
const dup = (arr) => arr.filter((v, i) => arr.indexOf(v) !== i)

const pal = designs.map((d) => d.colors.join('|'))
const dupPal = dup(pal)
if (dupPal.length) flag('duplicate palettes: ' + dupPal.join(' | '))
else console.log(`✅ ${designs.length} distinct palettes`)

const descs = designs.map((d) => (d.description || '').toLowerCase())
const dupDesc = dup(descs)
if (dupDesc.length) flag('duplicate taglines: ' + dupDesc.join(' | '))
else console.log('✅ taglines all unique')

const near = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  const a = new Set((designs[i].description || '').toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3))
  const b = new Set((designs[j].description || '').toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3))
  let inter = 0
  a.forEach((w) => b.has(w) && inter++)
  if (inter / Math.min(a.size, b.size) >= 0.7) near.push(`${designs[i].id} ~ ${designs[j].id}`)
}
if (near.length) flag('near-identical taglines: ' + near.join(', '))
else console.log('✅ no near-identical taglines inside a category')

const closePB = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  if (designs[i].colors[0] === designs[j].colors[0] && designs[i].colors[4] === designs[j].colors[4])
    closePB.push(`${designs[i].id} / ${designs[j].id}`)
}
if (closePB.length) flag('same-category designs sharing primary+background: ' + closePB.join(', '))
else console.log('✅ no same-category primary+background clash')

const closeFont = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  if (!(newIds.has(designs[i].id) || newIds.has(designs[j].id))) continue // pre-existing pairs are grandfathered
  if (designs[i].displayFont === designs[j].displayFont && designs[i].bodyFont === designs[j].bodyFont)
    closeFont.push(`${designs[i].id} / ${designs[j].id}`)
}
if (closeFont.length) flag('new design repeats a same-category font pair: ' + closeFont.join(', '))
else console.log('✅ no wave-6 design repeats a same-category font pair')

/* useCases must be real website types — guard against Category values sneaking in */
const typesSrc = read('src/types.ts')
const ucBlock = typesSrc.slice(typesSrc.indexOf('export const USE_CASES'), typesSrc.indexOf('export type UseCase'))
const USE_CASES = new Set([...ucBlock.matchAll(/'([^']+)'/g)].map((m) => m[1]))
const badUse = []
for (const d of wave6) {
  if (!d.useCases.length) { badUse.push(`${d.id}: no useCases`); continue }
  for (const u of d.useCases) if (!USE_CASES.has(u)) badUse.push(`${d.id}: '${u}' is not a website type`)
}
if (badUse.length) flag('invalid useCases: ' + badUse.join('; '))
else console.log('✅ every wave-6 useCase is a real website type')

const html = read('index.html')
const sysFonts = new Set(['Times New Roman'])
const badFonts = []
for (const d of designs) for (const f of [d.displayFont, d.bodyFont]) {
  if (!f || sysFonts.has(f)) continue
  if (!html.includes(`family=${f.replace(/ /g, '+')}`)) badFonts.push(`${d.id}: ${f}`)
}
if (badFonts.length) flag('fonts not loaded in index.html: ' + [...new Set(badFonts)].join(', '))
else console.log('✅ every display/body font is loaded (or a system face)')

const sets = layoutSetsOf(read(EX)).out
const missingSets = designs.filter((d) => !sets.has(d.id)).map((d) => d.id)
if (missingSets.length) flag('designs with no arrangement set: ' + missingSets.join(', '))
else console.log(`✅ all ${designs.length} designs have an arrangement set`)
const wrongFirst = designs.filter((d) => sets.has(d.id) && sets.get(d.id)[0] !== d.layout).map((d) => d.id)
if (wrongFirst.length) flag('arrangement set does not start with card layout: ' + wrongFirst.join(', '))
else console.log('✅ every arrangement set starts with the card layout tag')
const sigs = [...sets.entries()].map(([id, s]) => [id, [...s].sort().join('+')])
const dupSigs = dup(sigs.map(([, s]) => s))
if (dupSigs.length) flag('duplicate arrangement sets (unordered): ' + dupSigs.join(' | '))
else console.log(`✅ ${sigs.length} arrangement sets all unique even unordered`)
const sizes = new Set([...sets.values()].map((s) => s.length))
console.log(`   arrangement set sizes in use: ${[...sizes].sort().join(', ')}`)
const stray = [...sets.keys()].filter((id) => !byId.has(id))
if (stray.length) flag('arrangement sets for unknown ids: ' + stray.join(', '))

const mini = read('src/components/MiniSite.tsx')
const heroCases = new Set([...mini.slice(mini.indexOf('function heroTitle'), mini.indexOf('\n}', mini.indexOf('function heroTitle'))).matchAll(/case '([a-z0-9-]+)':/g)].map((m) => m[1]))
const heroMissing = designs.filter((d) => !heroCases.has(d.id)).map((d) => d.id)
console.log(`   heroTitle coverage: ${designs.length - heroMissing.length}/${designs.length}` + (heroMissing.length ? ` (falls back to name for: ${heroMissing.join(', ')})` : ''))

console.log(problems ? `\n${problems} PROBLEM(S)` : '\nAll wave-6 wiring and quality checks passed.')
process.exit(problems ? 1 : 0)
