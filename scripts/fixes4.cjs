/* Final fixes. Run: node scripts/fixes4.cjs
 * 1. Restore playful-maximalist background (original value #fff6ec — collision-course keeps #fff3e6)
 * 2. Rewrite LAYOUT_SETS (regex fixed to match unquoted keys) so all 100 arrangement
 *    sets are unique even unordered, first element = card layout tag
 * 3. Load Playfair Display + Baloo 2 (declared by 5 ORIGINAL designs but never linked —
 *    fixes real fallback-font rendering without touching any design data)
 */
const fs = require('fs')

let edits = 0, misses = 0
function patchOne(file, from, to) {
  let src = fs.readFileSync(file, 'utf8')
  const lf = src.includes(from)
  const f = lf ? from : from.replace(/\n/g, '\r\n')
  const t = lf ? to : to.replace(/\n/g, '\r\n')
  if (src.includes(f)) { src = src.split(f).join(t); fs.writeFileSync(file, src); edits++; console.log(`OK   ${file}: ${JSON.stringify(from.slice(0, 52))}`) }
  else { misses++; console.log(`MISS ${file}: ${JSON.stringify(from.slice(0, 52))}`) }
}

/* 1. restore playful-maximalist background (unique anchor via its neutral slot) */
patchOne('src/designs/maximalism.ts',
  "neutral: '#fff6ec',\n      background: '#fff3e6',",
  "neutral: '#fff6ec',\n      background: '#fff6ec',")

/* 2. LAYOUT_SETS algorithmic rewrite — regex now matches unquoted keys too */
const ORDER10 = ['hero-cards', 'split-hero', 'magazine', 'dashboard', 'centered', 'editorial', 'asymmetric', 'full-bleed', 'spotlight', 'manifesto']
const exPath = 'src/designs/extras.ts'
let ex = fs.readFileSync(exPath, 'utf8')
const lfFile = !ex.includes('\r\n')
const nl = lfFile ? '\n' : '\r\n'
const blockStart = ex.indexOf('export const LAYOUT_SETS')
const blockEnd = ex.indexOf('/* ---------- Extra content blocks')
let block = ex.slice(blockStart, blockEnd)
const sets = {}
for (const m of block.matchAll(/'?([a-z0-9-]+)'?: \[([^\]]+)\]/g)) sets[m[1]] = m[2].split(',').map((s) => s.trim().replace(/'/g, ''))
const ids = Object.keys(sets).sort()
if (ids.length !== 100) { console.error(`FATAL: expected 100 sets, found ${ids.length}`); process.exit(1) }
const firsts = {}
for (const id of ids) firsts[id] = sets[id][0]

const sigOf = (s) => [...s].sort().join('+')
const two = [], three = []
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) two.push([ORDER10[i], ORDER10[j]])
for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) for (let k = j + 1; k < 10; k++) three.push([ORDER10[i], ORDER10[j], ORDER10[k]])
const candidates = [
  ...two.map((s) => ({ s, sig: sigOf(s), rank: 0 })),
  ...three.map((s) => ({ s, sig: sigOf(s), rank: 1 })),
].sort((a, b) => a.rank - b.rank || sigOf(a.s).localeCompare(sigOf(b.s)))

const chosen = {}
function solve(pos, used) {
  if (pos === ids.length) return true
  const id = ids[pos]
  const compat = candidates.filter((c) => c.s.includes(firsts[id]) && !used.has(c.sig))
  for (const c of compat) {
    if (pos > 0 && c.sig === sigOf(chosen[ids[pos - 1]])) continue
    chosen[id] = c.s
    used.add(c.sig)
    if (solve(pos + 1, used)) return true
    used.delete(c.sig)
    delete chosen[id]
  }
  return false
}
if (!solve(0, new Set())) { console.error('FATAL: no unique assignment'); process.exit(1) }

let body = ids.map((id) => `  '${id}': [${chosen[id].map((l) => `'${l}'`).join(', ')}],`).join(nl)
block = `export const LAYOUT_SETS: Record<string, Layout[]> = {${nl}${body}${nl}}${nl}${nl}`
ex = ex.slice(0, blockStart) + block + ex.slice(blockEnd)
fs.writeFileSync(exPath, ex)
edits++
console.log(`OK   LAYOUT_SETS rewritten: 100 unique unordered sets, firsts preserved`)

/* 3. fonts: Baloo 2 (variable 400..800) + Playfair Display (variable + italic) */
patchOne('index.html',
  'family=Bebas+Neue&family=Bitter:',
  'family=Baloo+2:wght@400..800&family=Bebas+Neue&family=Bitter:')
patchOne('index.html',
  'family=Permanent+Marker&family=Press+Start+2P',
  'family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P')

console.log(`\n${edits} edits, ${misses} misses`)
