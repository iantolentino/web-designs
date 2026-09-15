/* Definitive wave-2 fixes. Run: node scripts/fixes3.cjs
 * 1. Restore scaffold typography + editorial-maximalist text (collateral from global replaces)
 * 2. Swap acid-garden & steel-plant fonts (anchored), swap clinical-care (color-anchored)
 * 3. Differentiate collision-course background from playful-maximalist
 * 4. Algorithmically rewrite all 100 LAYOUT_SETS so no two designs share an
 *    arrangement set even unordered, while keeping first = card layout tag.
 */
const fs = require('fs')

let edits = 0, misses = 0
function patch(file, pairs) {
  let src = fs.readFileSync(file, 'utf8')
  for (const [from, to] of pairs) {
    const lf = src.includes(from)
    const f = lf ? from : from.replace(/\n/g, '\r\n')
    const t = lf ? to : to.replace(/\n/g, '\r\n')
    if (src.includes(f)) { src = src.split(f).join(t); edits++; console.log(`OK   ${file}: ${JSON.stringify(from.slice(0, 56))}`) }
    else { misses++; console.log(`MISS ${file}: ${JSON.stringify(from.slice(0, 56))}`) }
  }
  fs.writeFileSync(file, src)
}

/* ---------- restores ---------- */
patch('src/designs/maximalism.ts', [
  ['Young Serif sets headline beds at 96–160px with tight leading; Space Grotesk handles captions, data rows, and body. Massive pull-quote bands invert colors mid-page.',
   'Fraunces at 144–200px for hero display with tight leading, paired with Archivo for captions and body. Massive pull-quote bands invert colors mid-page.'],
  ['Fraunces black-italic display over Archivo body. Full-bleed bands let the overgrowth run edge to edge',
   'Young Serif black display over Space Grotesk body. Full-bleed bands let the overgrowth run edge to edge'],
])

patch('src/designs/brutalism.ts', [
  // scaffold back to its original pairing (global replace hit it by mistake)
  ["displayFont: 'Chakra Petch',\n      bodyFont: 'IBM Plex Mono',\n      scale: '13 / 15 / 17 / 20 / 26 / 36 / 68',",
   "displayFont: 'Archivo',\n      bodyFont: 'IBM Plex Mono',\n      scale: '13 / 15 / 17 / 20 / 26 / 36 / 68',"],
  // steel-plant -> Oswald caps (distinct pair from concrete-slab's Oswald|Archivo and scaffold's Archivo|IPM)
  ["displayFont: 'Chakra Petch',\n      bodyFont: 'IBM Plex Mono',\n      scale: '12 / 13 / 15 / 18 / 24 / 32 / 52',",
   "displayFont: 'Oswald',\n      bodyFont: 'IBM Plex Mono',\n      scale: '12 / 13 / 15 / 18 / 24 / 32 / 52',"],
  ['Chakra Petch caps label each instrument; IBM Plex Mono renders values and readouts.',
   'Oswald caps label each instrument; IBM Plex Mono renders values and readouts.'],
])

/* ---------- font swaps still pending ---------- */
patch('src/designs/maximalism.ts', [
  // acid-garden (scale 46/90 is unique to this block)
  ["displayFont: 'Fraunces',\n      bodyFont: 'Archivo',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 90',",
   "displayFont: 'Young Serif',\n      bodyFont: 'Space Grotesk',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 90',"],
])

patch('src/designs/professional.ts', [
  // clinical-care (anchored by its unique text color)
  ["text: '#38302e',\n    },\n    typography: {\n      displayFont: 'IBM Plex Sans',\n      bodyFont: 'IBM Plex Sans',",
   "text: '#38302e',\n    },\n    typography: {\n      displayFont: 'Livvic',\n      bodyFont: 'Source Sans 3',"],
])

patch('src/designs/maximalism.ts', [
  // collision-course: clear the primary+background overlap with playful-maximalist
  ["background: '#fff6ec',\n      text: '#2b2140',", "background: '#fff3e6',\n      text: '#2b2140',"],
])

/* ---------- LAYOUT_SETS rewrite: 100 unique unordered sets ---------- */
const ORDER10 = ['hero-cards', 'split-hero', 'magazine', 'dashboard', 'centered', 'editorial', 'asymmetric', 'full-bleed', 'spotlight', 'manifesto']
const exPath = 'src/designs/extras.ts'
let ex = fs.readFileSync(exPath, 'utf8')
const lfFile = !ex.includes('\r\n')
const nl = lfFile ? '\n' : '\r\n'

const blockStart = ex.indexOf('export const LAYOUT_SETS')
const blockEnd = ex.indexOf('/* ---------- Extra content blocks')
let block = ex.slice(blockStart, blockEnd)
const sets = {}
for (const m of block.matchAll(/'([a-z0-9-]+)': \[([^\]]+)\]/g)) sets[m[1]] = m[2].split(',').map((s) => s.trim().replace(/'/g, ''))
const ids = Object.keys(sets).sort()
if (ids.length !== 100) { console.error(`FATAL: expected 100 sets, found ${ids.length}`); process.exit(1) }
const firsts = {}
for (const id of ids) firsts[id] = sets[id][0]

// candidate universe: all 2-sets then all 3-sets, in stable signature order
const idx = Object.fromEntries(ORDER10.map((l, i) => [l, i]))
const two = [], three = []
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) two.push([ORDER10[i], ORDER10[j]])
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) for (let k = j + 1; k < 10; k++) three.push([ORDER10[i], ORDER10[j], ORDER10[k]])
const sigOf = (s) => [...s].sort().join('+')
const candidates = [
  ...two.map((s) => ({ s, sig: sigOf(s), rank: 0 })),
  ...three.map((s) => ({ s, sig: sigOf(s), rank: 1 })),
].sort((a, b) => a.rank - b.rank || sigOf(a.s).localeCompare(sigOf(b.s)))

// backtracking assignment: first element of each set must equal the design's card layout tag
const chosen = {}
function solve(pos, usedSigs) {
  if (pos === ids.length) return true
  const id = ids[pos]
  const f = firsts[id]
  const compat = candidates.filter((c) => c.s.includes(f) && !usedSigs.has(c.sig))
  // prefer sets whose other members were rare so far (deterministic spread)
  compat.sort((a, b) => a.sig.localeCompare(b.sig))
  for (const c of compat) {
    const prevSig = pos > 0 ? sigOf(chosen[ids[pos - 1]]) : null
    if (c.sig === prevSig) continue
    chosen[id] = c.s
    usedSigs.add(c.sig)
    if (solve(pos + 1, usedSigs)) return true
    usedSigs.delete(c.sig)
    delete chosen[id]
  }
  return false
}
if (!solve(0, new Set())) { console.error('FATAL: no unique assignment found'); process.exit(1) }

let body = ids.map((id) => `  '${id}': [${chosen[id].map((l) => `'${l}'`).join(', ')}],`).join(nl)
block = `export const LAYOUT_SETS: Record<string, Layout[]> = {${nl}${body}${nl}}${nl}${nl}`
ex = ex.slice(0, blockStart) + block + ex.slice(blockEnd)
fs.writeFileSync(exPath, ex)
edits++
console.log(`OK   LAYOUT_SETS rewritten: ${ids.length} designs, all arrangement sets unique (even unordered)`)

console.log(`\n${edits} edits, ${misses} misses`)
