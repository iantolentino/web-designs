/* Design audit — recheck the whole catalog for repetition.
 * Run: node scripts/audit-designs.cjs
 *
 * Reports how *distinct* the 184 systems actually are, so "most of them are
 * repeating" becomes a number instead of a hunch:
 *   1. duplicated design identities (same type pair + motif + radius + depth)
 *   2. duplicated palettes (six identical tokens)
 *   3. duplicated names and hero lines
 *   4. the layout distribution, before and after the curated overrides
 *   5. palette spread (how many distinct primaries actually ship)
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const read = (p) => fs.readFileSync(p, 'utf8')

/* Hero lines live in MiniSite's heroTitle switch, not in the design data. */
const heroMap = new Map(
  [...read('src/components/MiniSite.tsx').matchAll(/case '([^']+)': return <>([\s\S]*?)<\/\>/g)].map(
    (m) => [m[1], m[2].replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').trim()],
  ),
)
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-audit-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')
const abs = (p) => path.resolve(p).replace(/\\/g, '/')

fs.writeFileSync(
  entry,
  `import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'
import { primaryLayout } from '${abs('src/designs/extras')}'

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
    hero: HERO[d.id] ?? '',
    display: d.typography.displayFont,
    body: d.typography.bodyFont,
    motif: d.motif,
    radius: radiusNum(d.components.radius),
    depth: depth(d),
    status: d.layout,
    effective: primaryLayout(d),
    palette: [d.colors.primary, d.colors.secondary, d.colors.accent, d.colors.neutral, d.colors.background, d.colors.text].join('|'),
    primary: d.colors.primary,
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
const groupBy = (keyFn) => {
  const m = new Map()
  for (const d of ds) {
    const k = keyFn(d)
    if (!m.has(k)) m.set(k, [])
    m.get(k).push(d)
  }
  return [...m.entries()].filter(([, v]) => v.length > 1)
}

console.log(`\nDesign audit — ${data.count} systems\n${'='.repeat(46)}`)

const identities = groupBy((d) => `${d.display} · ${d.body} · ${d.motif} · r${d.radius} · ${d.depth}`)
const paletteDupes = groupBy((d) => d.palette)
const nameDupes = groupBy((d) => d.name.toLowerCase())
// Empty heroes are "missing", not duplicates — report them separately.
const heroDupes = groupBy((d) => d.hero.trim()).filter(([k]) => k.length > 0)
const missingHero = ds.filter((d) => !d.hero.trim()).length

const report = (label, groups, total) => {
  const affected = groups.reduce((n, [, v]) => n + v.length, 0)
  const head = groups.length
    ? `⚠️  ${groups.length} group(s) / ${affected} designs · ${label}`
    : `✅ no duplicate ${label}`
  console.log(`\n${head}`)
  if (!groups.length) return
  const worst = [...groups].sort((a, b) => b[1].length - a[1].length).slice(0, 8)
  for (const [k, v] of worst) {
    console.log(`   ×${v.length}  ${v.map((d) => d.id).slice(0, 6).join(', ')}${v.length > 6 ? ' …' : ''}`)
    if (total) console.log(`         ${k}`)
  }
}

report('design identities (type + motif + radius + depth)', identities, true)
report('exact palettes (all six tokens identical)', paletteDupes, true)
report('design names', nameDupes, false)
report('hero lines', heroDupes, false)

/* Layout distribution, before and after overrides */
const tally = (key) => {
  const m = new Map()
  for (const d of ds) m.set(d[key], (m.get(d[key]) ?? 0) + 1)
  return [...m.entries()].sort((a, b) => b[1] - a[1])
}
const fmt = (rows) => rows.map(([k, n]) => `${k}:${n}`).join('  ')
const before = tally('status')
const after = tally('effective')
console.log(`\nLayout distribution (design-declared)\n   ${fmt(before)}`)
console.log(`\nLayout distribution (with curated overrides)\n   ${fmt(after)}`)

const distinctPrimary = new Set(ds.map((d) => d.primary)).size
const distinctMotif = new Set(ds.map((d) => d.motif)).size
const distinctType = new Set(ds.map((d) => `${d.display}|${d.body}`)).size
console.log(`\nHeroes\n   ${data.count - missingHero}/${data.count} designs carry a bespoke hero line${missingHero ? ` (${missingHero} fall back to the design name)` : ''}`)
console.log(`\nVariety\n   distinct primaries: ${distinctPrimary}/${data.count}`)
console.log(`   distinct motifs used: ${distinctMotif}`)
console.log(`   distinct type pairs: ${distinctType}/${data.count}`)

const problems = identities.length + paletteDupes.length + nameDupes.length + heroDupes.length
console.log(`\n${problems ? `${problems} overlap group(s) found — see above.` : 'No overlaps found.'}`)
