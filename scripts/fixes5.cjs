/* fixes5: rewrite LAYOUT_SETS with the corrected constraint (first element must EQUAL
 * the design's card layout tag, not merely contain it). Firsts are read from the
 * design data itself (source of truth). Run: node scripts/fixes5.cjs */
const fs = require('fs')

/* firsts from design data */
const SKIP = new Set(['index.ts', 'theme.ts', 'extras.ts'])
const firsts = {}
for (const f of fs.readdirSync('src/designs').filter((f) => f.endsWith('.ts') && !SKIP.has(f))) {
  const src = fs.readFileSync(`src/designs/${f}`, 'utf8').replace(/\r\n/g, '\n')
  for (const m of src.matchAll(/\bid: '([a-z0-9-]+)'[\s\S]*?layout: '([a-z-]+)'/g)) firsts[m[1]] = m[2]
}
if (Object.keys(firsts).length !== 100) { console.error(`FATAL: parsed ${Object.keys(firsts).length} designs`); process.exit(1) }
const ids = Object.keys(firsts).sort()

const ORDER10 = ['hero-cards', 'split-hero', 'magazine', 'dashboard', 'centered', 'editorial', 'asymmetric', 'full-bleed', 'spotlight', 'manifesto']
const sigOf = (s) => [...s].sort().join('+')
const two = [], three = []
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) two.push([ORDER10[i], ORDER10[j]])
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) for (let k = j + 1; k < 10; k++) three.push([ORDER10[i], ORDER10[j], ORDER10[k]])
const candidates = [
  ...two.map((s) => ({ s, sig: sigOf(s), rank: 0 })),
  ...three.map((s) => ({ s, sig: sigOf(s), rank: 1 })),
].sort((a, b) => a.rank - b.rank || sigOf(a.s).localeCompare(sigOf(b.s)))

/* Assignment as bipartite matching: 100 designs ↔ 360 ordered triples ([first, a, b] with
 * {a,b} ⊂ remaining 9). A design may take any triple STARTING with its first layout; each
 * triple serves one design. Kuhn's augmenting paths guarantee a perfect matching if one exists. */
const triples = []
for (const f of ORDER10) {
  const rest = ORDER10.filter((l) => l !== f)
  for (let i = 0; i < rest.length; i++) for (let j = i + 1; j < rest.length; j++) triples.push([f, rest[i], rest[j]])
}
const tripleKey = (t) => [...t].sort().join('+')
/* Candidates are UNORDERED triples containing the design's first layout anywhere;
 * order is reconstructed per design at write-back as [first, ...others]. */
const candByDesign = new Map()
for (const id of ids) {
  candByDesign.set(id, triples.filter((t) => t.includes(firsts[id])).map(tripleKey))
}
/* scarce designs first */
const demand = {}
for (const id of ids) demand[firsts[id]] = (demand[firsts[id]] || 0) + 1
const order = [...ids].sort((a, b) => demand[firsts[a]] - demand[firsts[b]])

const matchTrip = new Map() // tripleKey -> designId
function tryAssign(design, seen) {
  for (const tk of candByDesign.get(design)) {
    if (seen.has(tk)) continue
    seen.add(tk)
    const holder = matchTrip.get(tk)
    if (!holder || tryAssign(holder, seen)) { matchTrip.set(tk, design); return true }
  }
  return false
}
let assigned = 0
for (const id of order) {
  if (!tryAssign(id, new Set())) { console.error(`FATAL: no matching for ${id} — Hall's condition fails`); process.exit(1) }
  assigned++
}
const chosen = {}
for (const [tk, id] of matchTrip) chosen[id] = [firsts[id], ...tk.split('+').filter((l) => l !== firsts[id])]
console.log(`matched ${assigned}/100 designs to distinct triples`)

/* report per-first distribution */
const byFirstCount = {}
for (const id of ids) byFirstCount[firsts[id]] = (byFirstCount[firsts[id]] || 0) + 1
console.log('designs per first layout:', JSON.stringify(byFirstCount))

/* group sets by first for readability */
const groups = {}
for (const id of ids) (groups[firsts[id]] = groups[firsts[id]] || []).push(id)

let ex = fs.readFileSync('src/designs/extras.ts', 'utf8')
const lfFile = !ex.includes('\r\n')
const nl = lfFile ? '\n' : '\r\n'
const blockStart = ex.indexOf('export const LAYOUT_SETS')
const blockEnd = ex.indexOf('/* ---------- Extra content blocks')
const header =
  `export const LAYOUT_SETS: Record<string, Layout[]> = {${nl}` +
  `  // Arrangement sets: 100 unique even when order is ignored (verified in scripts/verify.cjs).${nl}` +
  `  // First arrangement always equals the design's card layout tag; grouped below by that tag.${nl}`
let body = ''
for (const layout of ORDER10) {
  const group = groups[layout] || []
  if (!group.length) continue
  body += `  // — first: ${layout} (${group.length})${nl}`
  for (const id of group) body += `  '${id}': [${chosen[id].map((l) => `'${l}'`).join(', ')}],${nl}`
}
block = header + body + `}${nl}${nl}`
ex = ex.slice(0, blockStart) + block + ex.slice(blockEnd)
fs.writeFileSync('src/designs/extras.ts', ex)
console.log(`LAYOUT_SETS rewritten for ${ids.length} designs — unique unordered sets, first = card layout tag`)
