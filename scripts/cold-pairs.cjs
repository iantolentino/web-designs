/* cold-pairs — availability report for writing new waves without collisions.
 *
 *   node scripts/cold-pairs.cjs            # summary + cold combos
 *   node scripts/cold-pairs.cjs --ids=a,b  # detail for specific designs
 *
 * Prints which display+body pairs are still unused or used once, which fonts
 * are least used, motif/layout counts, and structure combos already taken.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const read = (p) => fs.readFileSync(p, 'utf8')
const heroMap = new Map(
  [...read('src/components/MiniSite.tsx').matchAll(/case '([^']+)': return <>([\s\S]*?)<\/>/g)].map(
    (m) => [m[1], m[2].replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').trim()],
  ),
)

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-cold-'))
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
    hero: (d.hero ?? HERO[d.id] ?? '').split('*').join(''),
    display: d.typography.displayFont,
    body: d.typography.bodyFont,
    motif: d.motif,
    layout: d.layout,
    radius: radiusNum(d.components.radius),
    depth: depth(d),
    colors: d.colors,
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
const KEYS = ['primary', 'secondary', 'accent', 'neutral', 'background', 'text']
const count = (get) => {
  const m = new Map()
  for (const d of ds) m.set(get(d), (m.get(get(d)) || 0) + 1)
  return m
}

/* --check="Sora + Familjen Grotesk;Marcellus + Spectral" — is a type pair free? */
const checkArg = process.argv.find((a) => a.startsWith('--check='))
if (checkArg) {
  const pairCount = count((d) => `${d.display} + ${d.body}`)
  const displayCount = count((d) => d.display)
  const bodyCount = count((d) => d.body)
  const families = [...read('index.html').matchAll(/family=([^:&"]+)/g)]
    .flatMap((m) => decodeURIComponent(m[1]).split('|'))
    .map((s) => s.split(':')[0].replace(/\+/g, ' ').trim())
    .filter(Boolean)
  for (const raw of checkArg.slice(8).replace(/^"|"$/g, '').split(';').filter(Boolean)) {
    const [display, body] = raw.split('+').map((s) => s.trim())
    const key = `${display} + ${body}`
    const miss = [display, body].filter((f) => !families.includes(f))
    const used = pairCount.get(key) || 0
    console.log(
      `${used === 0 && !miss.length ? '✓ free' : used ? `✗ used ×${used}` : '✗ missing font'}  ${key}` +
        `   display:${displayCount.get(display) || 0} body:${bodyCount.get(body) || 0}` +
        (miss.length ? `   NOT IN index.html: ${miss.join(', ')}` : ''),
    )
  }
  process.exit(0)
}

const wantIds = (process.argv.find((a) => a.startsWith('--ids=')) || '').slice(6).split(',').filter(Boolean)
if (wantIds.length) {
  for (const id of wantIds) {
    const d = ds.find((x) => x.id === id)
    if (!d) { console.log(`?? ${id} not found`); continue }
    console.log(`\n${id} · ${d.display} + ${d.body} · ${d.motif} · ${d.layout} · r${d.radius} · ${d.depth}`)
    console.log(`  palette ${KEYS.map((k) => d.colors[k]).join(' ')}`)
  }
  process.exit(0)
}

const pairs = count((d) => `${d.display} + ${d.body}`)
const displays = count((d) => d.display)
const bodies = count((d) => d.body)
const motifs = count((d) => d.motif)
const layouts = count((d) => d.layout)
const structs = count((d) => `${d.motif} · ${d.layout} · r${d.radius} · ${d.depth}`)

// full font list declared in index.html
const families = [...read('index.html').matchAll(/family=([^:&"]+)/g)]
  .flatMap((m) => decodeURIComponent(m[1]).split('|'))
  .map((s) => s.split(':')[0].replace(/\+/g, ' ').trim())
  .filter(Boolean)

console.log(`\n${ds.length} designs · ${pairs.size} type pairs · ${families.length} font families declared\n`)

const cold = []
for (const a of families) for (const b of families) {
  if (a === b) continue
  const k = `${a} + ${b}`
  if (!pairs.has(k)) cold.push(k)
}
console.log(`unused display+body pairs: ${cold.length}  (first 60)`)
for (const c of cold.slice(0, 60)) console.log(`   ${c}`)

const oncePairs = [...pairs].filter(([, n]) => n === 1)
console.log(`\npairs used exactly once: ${oncePairs.length}`)
console.log(`\nleast-used displays: ${[...displays].sort((a, b) => a[1] - b[1]).slice(0, 24).map(([f, n]) => `${f}:${n}`).join('  ')}`)
console.log(`\nleast-used bodies:   ${[...bodies].sort((a, b) => a[1] - b[1]).slice(0, 24).map(([f, n]) => `${f}:${n}`).join('  ')}`)
console.log(`\nmotifs: ${[...motifs].sort((a, b) => a[1] - b[1]).map(([f, n]) => `${f}:${n}`).join('  ')}`)
console.log(`\nlayouts: ${[...layouts].sort((a, b) => a[1] - b[1]).map(([f, n]) => `${f}:${n}`).join('  ')}`)
console.log(`\nstructures used more than once: ${[...structs].filter(([, n]) => n > 1).map(([f, n]) => `${f} ×${n}`).join(' | ') || 'none'}`)
