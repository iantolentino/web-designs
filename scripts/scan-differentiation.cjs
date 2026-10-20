/* Design differentiation scan — the "is this really a different design?" pass.
 *
 *   node scripts/scan-differentiation.cjs            # summary + worst clusters
 *   node scripts/scan-differentiation.cjs --json      # full machine-readable report
 *
 * audit-designs.cjs catches exact collisions and taste-audit.cjs catches
 * metadata proximity. This scan looks at what a person actually sees in the
 * gallery:
 *
 *   1. repeated business concepts (name stem minus numeral / wave suffix)
 *   2. repeated taglines, descriptions and philosophy blocks
 *   3. repeated tag sets
 *   4. structural fingerprints (layout + motif + type pair + density + radius)
 *   5. per-category crowding: how many designs in one category share a layout
 *
 * It is deliberately read-only. The output is a worklist.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const abs = (p) => path.resolve(p).replace(/\\/g, '/')
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-scan-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')

fs.writeFileSync(
  entry,
  `import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'
import { DESIGN_DETAILS } from '${abs('src/designs/details')}'
import { derivedDetails } from '${abs('src/designs/build')}'
import { primaryLayout, layoutSetFor } from '${abs('src/designs/extras')}'
const detailsOf = (d) => DESIGN_DETAILS[d.id] ?? derivedDetails(d.id) ?? {}
console.log(JSON.stringify(DESIGN_SYSTEMS.map((d) => ({
  id: d.id,
  name: d.name,
  category: d.category,
  tags: d.tags,
  useCases: d.useCases,
  hero: d.hero ?? '',
  description: d.description,
  philosophy: detailsOf(d).designDetails ?? '',
  spacing: detailsOf(d).spacing?.baseUnit ?? '',
  display: d.typography.displayFont,
  body: d.typography.bodyFont,
  motif: d.motif,
  layout: d.layout,
  primary: primaryLayout(d),
  arrangements: layoutSetFor(d),
  structure: d.structure ? d.structure.signature : '',
  openerLayout: d.structure ? d.structure.openerLayout : '',
  topScreen: d.structure
    ? d.structure.openerLayout + '|o' + d.structure.opener + '|c' + d.structure.chrome + '|n' + d.structure.nav
    : '',
  sections: d.structure ? d.structure.sections : [],
  radius: d.components.radius,
  motion: detailsOf(d).motion?.pageLoad ?? '',
  signature: d.signatureCss ? d.signatureCss.length : 0,
  accentRole: d.accentRole ?? '',
}))))
`,
)

let designs
try {
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  designs = JSON.parse(
    execSync(`node "${bundle}"`, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }),
  )
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}

/* ---------- normalisation ---------- */

const ROMAN = /\s+(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII)$/
const WAVE = /-w\d+(-\d+)?$/
const stem = (d) => d.name.replace(ROMAN, '').replace(WAVE, '').trim()
const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim()

const groupBy = (arr, key) => {
  const m = new Map()
  for (const x of arr) {
    const k = key(x)
    if (!m.has(k)) m.set(k, [])
    m.get(k).push(x)
  }
  return m
}
const report = (title, groups, min = 2) => {
  const rows = [...groups.entries()]
    .filter(([, v]) => v.length >= min)
    .sort((a, b) => b[1].length - a[1].length)
  console.log(`\n${title}`)
  console.log('-'.repeat(title.length))
  if (!rows.length) {
    console.log('  none')
    return
  }
  for (const [k, v] of rows.slice(0, 25)) {
    console.log(`  ${String(v.length).padStart(3)}x  ${k}`)
    console.log(`        ${v.map((d) => d.id).join(', ')}`)
  }
  if (rows.length > 25) console.log(`  … ${rows.length - 25} more groups`)
}

/* ---------- 1. business concepts ---------- */
const stems = groupBy(designs, stem)
const repeatedStems = [...stems.entries()].filter(([, v]) => v.length > 1)

/* ---------- 2. copy ---------- */
const descriptions = groupBy(designs, (d) => norm(d.description))
const philosophies = groupBy(designs, (d) => norm(d.philosophy))
const taglines = groupBy(designs, (d) => norm(d.hero))
const tagSets = groupBy(designs, (d) => d.tags.map(norm).sort().join('|'))

/* ---------- 3. visual structure ---------- */
const visual = groupBy(
  designs,
  (d) => `${d.primary}|${d.motif}|${d.display}+${d.body}|${d.radius}|${d.spacing}|${d.motion}`,
)

/* Structural fingerprint deliberately ignores color, type, motif and radius. */
const structural = groupBy(designs, (d) => d.structure || `missing:${d.id}`)
const topScreens = groupBy(designs, (d) => d.topScreen || `missing:${d.id}`)
const sectionSequences = groupBy(designs, (d) => (d.sections || []).join('>'))

/* ---------- 4. category crowding ---------- */
const crowded = []
for (const [cat, list] of groupBy(designs, (d) => d.category)) {
  const byLayout = groupBy(list, (d) => d.primary)
  for (const [layout, group] of byLayout) {
    crowded.push({ cat, layout, count: group.length, ids: group.map((d) => d.id) })
  }
}
crowded.sort((a, b) => b.count - a.count)

console.log(`Design differentiation scan — ${designs.length} systems`)
console.log('='.repeat(56))
console.log(`unique concepts (name stem):      ${stems.size}/${designs.length}`)
console.log(`  concepts reused:                ${repeatedStems.length} stems, ${repeatedStems.reduce((n, [, v]) => n + v.length, 0)} designs`)
console.log(`unique descriptions:              ${descriptions.size}/${designs.length}`)
console.log(`unique philosophy blocks:         ${philosophies.size}/${designs.length}`)
console.log(`unique hero lines:                ${taglines.size}/${designs.length}`)
console.log(`unique tag sets:                  ${tagSets.size}/${designs.length}`)
console.log(`unique visual fingerprints:       ${visual.size}/${designs.length}`)
console.log(`unique structural signatures:     ${structural.size}/${designs.length}  (color/type/motif ignored)`)
console.log(`unique above-the-fold openers:    ${topScreens.size}/${designs.length}`)
console.log(`unique section sequences:         ${sectionSequences.size}/${designs.length}`)

report('Repeated business concepts (name stem)', new Map(repeatedStems))
report('Repeated descriptions', descriptions)
report('Repeated philosophy blocks', philosophies)
report('Repeated tag sets', tagSets)
report('Same visual fingerprint', visual)
report('Same structural signature (must be none)', structural)
report('Same above-the-fold opener (must be none)', topScreens)
report('Same section sequence (must be none)', sectionSequences)

console.log('\nMost crowded category × layout cells')
console.log('-------------------------------------')
for (const c of crowded.slice(0, 15)) console.log(`  ${String(c.count).padStart(3)}  ${c.cat} / ${c.layout}`)

const serialisable = {
  count: designs.length,
  concepts: { unique: stems.size, repeated: repeatedStems.map(([k, v]) => ({ stem: k, ids: v.map((d) => d.id) })) },
  descriptions: [...descriptions.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ text: k, ids: v.map((d) => d.id) })),
  philosophies: [...philosophies.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ text: k, ids: v.map((d) => d.id) })),
  taglines: [...taglines.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ text: k, ids: v.map((d) => d.id) })),
  visual: [...visual.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ fingerprint: k, ids: v.map((d) => d.id) })),
  structural: [...structural.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ fingerprint: k, ids: v.map((d) => d.id) })),
  topScreens: [...topScreens.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ fingerprint: k, ids: v.map((d) => d.id) })),
  sectionSequences: [...sectionSequences.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => ({ sequence: k, ids: v.map((d) => d.id) })),
  openers: designs.map((d) => ({ id: d.id, openerLayout: d.openerLayout, topScreen: d.topScreen, structure: d.structure })),
  crowded,
}
if (process.argv.includes('--json')) {
  fs.writeFileSync('scripts/differentiation-report.json', JSON.stringify(serialisable, null, 2))
  console.log('\nwrote scripts/differentiation-report.json')
}
