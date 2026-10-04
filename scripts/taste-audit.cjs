/* Taste audit — find designs that *feel* the same, not just designs that are
 * byte-identical.
 *
 * scripts/audit-designs.cjs catches exact collisions (same type pair + motif +
 * radius + depth, same six-token palette, same name, same hero). This script is
 * the next pass: it measures proximity.
 *
 *   node scripts/taste-audit.cjs
 *
 * It reports:
 *   1. palette near-pairs — ΔE in CIELAB space between primaries and between
 *      full six-token palettes
 *   2. type-pair reuse — pairs shared by two or more designs
 *   3. structure reuse — designs sharing the same motif + layout + radius + depth
 *   4. prose near-duplicates — token Jaccard over description + philosophy
 *   5. a combined "samescore" leaderboard of the most similar design pairs
 *
 * Thresholds are deliberately conservative: the catalog is allowed to reuse a
 * font or a motif (that is how systems get a family resemblance), it just is
 * not allowed to reuse a *combination* that reads as the same page twice.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const read = (p) => fs.readFileSync(p, 'utf8')

/* ---------- runtime data through the same esbuild door as the audit ---------- */

const heroMap = new Map(
  [...read('src/components/MiniSite.tsx').matchAll(/case '([^']+)': return <>([\s\S]*?)<\/>/g)].map(
    (m) => [m[1], m[2].replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').trim()],
  ),
)

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-taste-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')
const abs = (p) => path.resolve(p).replace(/\\/g, '/')

fs.writeFileSync(
  entry,
  `import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'

const HERO = ${JSON.stringify(Object.fromEntries(heroMap))}

const radiusNum = (r) => {
  const m = (r || '').match(/(\\d+)px/)
  return m ? m[1] : /999|pill/i.test(r || '') ? '999' : '0'
}
const depth = (d) => {
  const s = (d.components.cards + ' ' + d.components.hover).toLowerCase()
  if (/no shadow|none at rest|depth from borders/.test(s)) return 'flat'
  if (/glow/.test(s)) return 'glow'
  if (/hard|offset/.test(s)) return 'hard'
  if (/soft|lift/.test(s)) return 'soft'
  return 'mixed'
}

console.log(JSON.stringify({
  count: DESIGN_SYSTEMS.length,
  designs: DESIGN_SYSTEMS.map((d) => ({
    id: d.id,
    name: d.name,
    category: d.category,
    hero: (d.hero ?? HERO[d.id] ?? '').split('*').join(''),
    display: d.typography.displayFont,
    body: d.typography.bodyFont,
    motif: d.motif,
    layout: d.layout,
    radius: radiusNum(d.components.radius),
    depth: depth(d),
    colors: d.colors,
    motion: d.motion.transitions,
    prose: [d.description, d.designPhilosophy, d.designDetails].join(' '),
    components: Object.values(d.components).join(' '),
  })),
}))`,
)

let data
try {
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  data = JSON.parse(execSync(`node "${bundle}"`, { encoding: 'utf8' }))
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}

const ds = data.designs

/* ---------- colour maths (sRGB → CIELAB, ΔE76) ---------- */

const hexRgb = (h) => {
  const n = (h || '#000000').replace('#', '')
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
}
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
function lab(hex) {
  const [r, g, b] = hexRgb(hex).map(toLinear)
  const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722
  const z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116)
  const [fx, fy, fz] = [f(x), f(y), f(z)]
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]
}
const deltaE = (a, b) => {
  const [l1, a1, b1] = lab(a)
  const [l2, a2, b2] = lab(b)
  return Math.sqrt((l1 - l2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2)
}
const KEYS = ['primary', 'secondary', 'accent', 'neutral', 'background', 'text']
const paletteDistance = (p, q) =>
  KEYS.reduce((sum, k) => sum + deltaE(p[k], q[k]), 0) / KEYS.length

/* ---------- prose similarity ---------- */

const STOP = new Set('a an the and or of for to in on is are was were be been with without that this it its as at by from into over under not no so than then them they their there here which who whom whose what when where why how all any both each few more most other some such only own same too very can will just should now'.split(' '))
const tokens = (s) =>
  new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  )
const jaccard = (a, b) => {
  const A = tokens(a)
  const B = tokens(b)
  if (!A.size || !B.size) return 0
  let inter = 0
  for (const w of A) if (B.has(w)) inter++
  return inter / (A.size + B.size - inter)
}

/* ---------- pairwise scoring ---------- */

const MIN_PRIMARY_DE = 12 // below this two primaries read as the same color
const MIN_PALETTE_DE = 10 // below this two palettes read as the same scheme

const pairs = []
for (let i = 0; i < ds.length; i++) {
  for (let j = i + 1; j < ds.length; j++) {
    const a = ds[i]
    const b = ds[j]
    const dPrimary = deltaE(a.colors.primary, b.colors.primary)
    const dPalette = paletteDistance(a.colors, b.colors)
    const sameType = a.display === b.display && a.body === b.body
    const sameStructure = a.motif === b.motif && a.layout === b.layout && a.radius === b.radius && a.depth === b.depth
    const prose = jaccard(a.prose, b.prose)
    const heroSim = jaccard(a.hero, b.hero)

    let score = 0
    if (dPrimary < MIN_PRIMARY_DE) score += (MIN_PRIMARY_DE - dPrimary) * 1.2
    if (dPalette < MIN_PALETTE_DE) score += (MIN_PALETTE_DE - dPalette) * 1.5
    if (sameType) score += 14
    if (sameStructure) score += 26
    if (a.motif === b.motif) score += 4
    if (a.layout === b.layout) score += 5
    if (a.depth === b.depth) score += 2
    if (prose > 0.34) score += (prose - 0.34) * 90
    if (heroSim > 0.5) score += (heroSim - 0.5) * 30

    if (score >= 10) pairs.push({ a: a.id, b: b.id, score, dPrimary, dPalette, sameType, sameStructure, prose, heroSim })
  }
}
pairs.sort((x, y) => y.score - x.score)

/* ---------- aggregate tables ---------- */

const groupBy = (keyFn) => {
  const m = new Map()
  for (const d of ds) {
    const k = keyFn(d)
    if (!m.has(k)) m.set(k, [])
    m.get(k).push(d.id)
  }
  return [...m.entries()].filter(([, v]) => v.length > 1).sort((a, b) => b[1].length - a[1].length)
}

const typeDupes = groupBy((d) => `${d.display} + ${d.body}`)
const structureDupes = groupBy((d) => `${d.motif} · ${d.layout} · r${d.radius} · ${d.depth}`)

console.log(`\nTaste audit — ${data.count} systems\n${'='.repeat(52)}`)

const fmt = (n, digits = 1) => Number(n).toFixed(digits)
const head = (n, title) => console.log(`\n${n}. ${title}\n${'-'.repeat(52)}`)

/* 1 — palette proximity */
head(1, `Palette proximity (ΔE; primary < ${MIN_PRIMARY_DE}, palette avg < ${MIN_PALETTE_DE})`)
const paletteFlags = pairs.filter((p) => p.dPrimary < MIN_PRIMARY_DE || p.dPalette < MIN_PALETTE_DE)
if (!paletteFlags.length) console.log('   ✅ no palette pair is too close')
else {
  paletteFlags.sort((x, y) => x.dPrimary - y.dPrimary)
  console.log('   closest primaries:')
  for (const p of paletteFlags.slice(0, 20)) {
    console.log(`   ${fmt(p.dPrimary).padStart(6)} primary / ${fmt(p.dPalette).padStart(6)} avg  ${p.a} ↔ ${p.b}`)
  }
  paletteFlags.sort((x, y) => x.dPalette - y.dPalette)
  console.log('   closest palettes:')
  for (const p of paletteFlags.slice(0, 15)) {
    console.log(`   ${fmt(p.dPalette).padStart(6)} avg / ${fmt(p.dPrimary).padStart(6)} primary  ${p.a} ↔ ${p.b}`)
  }
  console.log(`   … ${paletteFlags.length} flagged pair(s) total`)
}

/* 2 — type-pair reuse */
head(2, 'Type-pair reuse')
if (!typeDupes.length) console.log('   ✅ every design has its own display+body pairing')
else for (const [pair, ids] of typeDupes.slice(0, 20)) console.log(`   ×${ids.length}  ${pair}\n         ${ids.join(', ')}`)

/* 3 — structure reuse */
head(3, 'Structure reuse (motif + layout + radius + depth)')
for (const [combo, ids] of structureDupes.slice(0, 30)) console.log(`   ×${ids.length}  ${combo}\n         ${ids.join(', ')}`)
console.log(`   distinct structure combos: ${new Set(ds.map((d) => `${d.motif}|${d.layout}|${d.radius}|${d.depth}`)).size}/${ds.length}`)

/* 4 — prose near-duplicates */
head(4, 'Prose near-duplicates (token Jaccard > 0.34)')
const proseFlags = pairs.filter((p) => p.prose > 0.34).sort((x, y) => y.prose - x.prose)
if (!proseFlags.length) console.log('   ✅ no two designs describe themselves the same way')
else for (const p of proseFlags.slice(0, 15)) console.log(`   ${fmt(p.prose, 2)}  ${p.a} ↔ ${p.b}`)

/* 5 — leaderboard */
head(5, 'Most-similar pairs (combined score)')
for (const p of pairs.slice(0, 20)) {
  const reasons = []
  if (p.sameStructure) reasons.push('same structure')
  if (p.sameType) reasons.push('same type pairing')
  if (p.dPrimary < MIN_PRIMARY_DE) reasons.push(`primary ΔE ${fmt(p.dPrimary)}`)
  if (p.dPalette < MIN_PALETTE_DE) reasons.push(`palette ΔE ${fmt(p.dPalette)}`)
  if (p.prose > 0.34) reasons.push(`prose ${fmt(p.prose, 2)}`)
  console.log(`   ${fmt(p.score).padStart(5)}  ${p.a} ↔ ${p.b}   (${reasons.join(', ')})`)
}

/* ---------- optional detail dump for targeted ids ---------- */

const idsArg = process.argv.find((a) => a.startsWith('--ids='))
if (idsArg) {
  const wanted = idsArg.slice('--ids='.length).split(',')
  console.log(`\nDetail — ${wanted.length} id(s)\n${'='.repeat(52)}`)
  for (const id of wanted) {
    const d = ds.find((x) => x.id === id)
    if (!d) { console.log(`   ${id}: NOT FOUND`); continue }
    console.log(`\n   ${d.id} · ${d.name} · ${d.category}`)
    console.log(`     structure  ${d.motif} · ${d.layout} · r${d.radius} · ${d.depth}`)
    console.log(`     type       ${d.display} + ${d.body}`)
    console.log(`     palette    ${KEYS.map((k) => `${k}:${d.colors[k]}`).join(' ')}`)
  }
  process.exit(0)
}

/* ---------- verdict ---------- */

const hardFlags = pairs.filter((p) => p.sameStructure).length
const softFlags = pairs.filter((p) => !p.sameStructure && p.score >= 18).length
console.log(`\n${'='.repeat(52)}`)
console.log(`Pairs at identical structure: ${hardFlags}`)
console.log(`Suspicious pairs (score ≥ 18, different structure): ${softFlags}`)
console.log(`Distinct primaries: ${new Set(ds.map((d) => d.colors.primary)).size}/${data.count}`)
console.log(`Distinct palettes:  ${new Set(ds.map((d) => KEYS.map((k) => d.colors[k]).join('|'))).size}/${data.count}`)
console.log(`Distinct type pairs: ${new Set(ds.map((d) => `${d.display}|${d.body}`)).size}/${data.count}`)
console.log(`Distinct structures: ${new Set(ds.map((d) => `${d.motif}|${d.layout}|${d.radius}|${d.depth}`)).size}/${data.count}`)

