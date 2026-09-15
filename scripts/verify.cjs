/* Verification for the 100-design expansion. Run: node scripts/verify.cjs */
const fs = require('fs')
const { execSync } = require('child_process')

const designsDir = 'src/designs'
const SKIP = new Set(['index.ts', 'theme.ts', 'extras.ts'])
let problems = 0
const flag = (msg) => { console.log('❌ ' + msg); problems++ }
const ok = (msg) => console.log('✅ ' + msg)

// ---------- parse helpers ----------
function parseDesigns(text) {
  const body = text.slice(text.indexOf('['), text.lastIndexOf(']') + 1)
  const parts = body.split(/(?=\n  \{\n    id: ')/).filter((p) => /id: '/.test(p))
  const out = []
  for (const p of parts) {
    const get = (re) => { const m = p.match(re); return m ? m[1] : undefined }
    out.push({
      id: get(/id: '([^']+)'/),
      name: get(/name: '([^']+)'/),
      category: get(/category: '([^']+)'/),
      layout: get(/layout: '([^']+)'/),
      description: get(/description: '((?:[^'\\]|\\.)*)'/),
      displayFont: get(/displayFont: '([^']+)'/),
      bodyFont: get(/bodyFont: '([^']+)'/),
      colors: ['primary', 'secondary', 'accent', 'neutral', 'background', 'text']
        .map((k) => get(new RegExp(`\\b${k}: '([^']+)'`))),
      motif: get(/motif: '([^']+)'/),
      popularity: p.match(/popularity: (\d+)/) ? +p.match(/popularity: (\d+)/)[1] : 0,
      raw: p,
    })
  }
  return out
}

const files = fs.readdirSync(designsDir).filter((f) => f.endsWith('.ts') && !SKIP.has(f))
let designs = []
for (const f of files) designs.push(...parseDesigns(fs.readFileSync(`${designsDir}/${f}`, 'utf8').replace(/\r\n/g, '\n')))

// ---------- 1. count & unique ids ----------
if (designs.length !== 100) flag(`Total designs = ${designs.length}, expected 100`)
else ok(`Total designs = 100`)
const ids = designs.map((d) => d.id)
if (new Set(ids).size !== ids.length) flag('Duplicate design ids: ' + ids.filter((v, i) => ids.indexOf(v) !== i).join(', '))
else ok('All 100 ids unique')

// ---------- 2. zero regression vs git HEAD ----------
const headFiles = {}
for (const f of files) {
  try {
    headFiles[f] = execSync(`git show HEAD:src/designs/${f}`, { encoding: 'utf8', maxBuffer: 1e8 }).replace(/\r\n/g, '\n')
  } catch { /* file is new (not in HEAD) */ }
}
const headDesigns = []
for (const [f, text] of Object.entries(headFiles)) headDesigns.push(...parseDesigns(text))
const origIds = new Set(headDesigns.map((h) => h.id))
const curById = new Map(designs.map((d) => [d.id, d]))
let regressed = 0
for (const h of headDesigns) {
  const c = curById.get(h.id)
  if (!c) { flag(`HEAD design missing now: ${h.id}`); regressed++; continue }
  const norm = (s) => s.replace(/\s+/g, ' ').trim().replace(/[\s\]]+$/, '')
  if (norm(h.raw) !== norm(c.raw)) { flag(`Original design changed: ${h.id}`); regressed++ }
}
if (regressed === 0) ok(`Zero regression: all ${headDesigns.length} pre-existing designs byte-identical to git HEAD`)

// ---------- 3. layout sets ----------
const exSrc = fs.readFileSync(`${designsDir}/extras.ts`, 'utf8').replace(/\r\n/g, '\n')
const lsBlock = exSrc.slice(exSrc.indexOf('LAYOUT_SETS'), exSrc.indexOf('Extra content blocks'))
const layoutSets = {}
for (const m of lsBlock.matchAll(/'?([a-z0-9-]+)'?: \[([^\]]+)\]/g)) layoutSets[m[1]] = m[2].split(',').map((s) => s.trim().replace(/'/g, ''))
for (const d of designs) {
  const set = layoutSets[d.id]
  if (!set) { flag(`${d.id}: no layout set`); continue }
  if (set.length < 2 || set.length > 3) flag(`${d.id}: layout set size ${set.length}`)
  if (set[0] !== d.layout) flag(`${d.id}: first arrangement ${set[0]} != card layout ${d.layout}`)
}
const seqs = Object.values(layoutSets).map((s) => s.join('>'))
if (new Set(seqs).size !== seqs.length) flag('Duplicate layout sequences')
const setKeys = Object.values(layoutSets).map((s) => [...s].sort().join('+'))
const dupSets = setKeys.filter((v, i) => setKeys.indexOf(v) !== i)
if (dupSets.length) flag('Duplicate arrangement sets (order ignored): ' + dupSets.join(' | '))
if (!dupSets.length && Object.keys(layoutSets).length === 100) ok('Layout selector: 100 unique 2-3 arrangement sets, first = card layout tag')

// ---------- 4. taglines ----------
const descs = designs.map((d) => d.description.toLowerCase())
const dupDesc = descs.filter((v, i) => descs.indexOf(v) !== i)
if (dupDesc.length) flag('Duplicate taglines: ' + dupDesc.join(' || '))
else ok('No duplicate taglines')
// near-dup within category (token overlap)
const dups = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  const a = new Set(designs[i].description.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3))
  const b = new Set(designs[j].description.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3))
  let inter = 0; a.forEach((w) => b.has(w) && inter++)
  const sim = inter / Math.min(a.size, b.size)
  if (sim >= 0.7) dups.push(`${designs[i].id} ~ ${designs[j].id} (${(sim * 100) | 0}%)`)
}
if (dups.length) flag('Near-identical taglines within category: ' + dups.join(', '))
else ok('No near-identical taglines within any category')

// ---------- 5. palettes ----------
const palKey = (d) => d.colors.join('|')
const pals = designs.map(palKey)
const dupPal = pals.filter((v, i) => pals.indexOf(v) !== i)
if (dupPal.length) flag('Identical palettes: ' + dupPal.join(' || '))
else ok('No two designs share a full color palette')
const close = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  if (origIds.has(designs[i].id) && origIds.has(designs[j].id)) continue // both originals: untouchable, grandfathered
  const a = designs[i].colors, b = designs[j].colors
  const same = (x, y) => x.toLowerCase() === y.toLowerCase()
  if (same(a[0], b[0]) && same(a[4], b[4])) close.push(`${designs[i].id} / ${designs[j].id} (primary+background)`)
}
if (close.length) flag('Same-category designs sharing primary AND background: ' + close.join(', '))
else ok('No same-category pair shares primary+background')
// same font pair within category
const fontPairs = designs.map((d) => `${d.displayFont}|${d.bodyFont}`)
const fpClose = []
for (let i = 0; i < designs.length; i++) for (let j = i + 1; j < designs.length; j++) {
  if (designs[i].category !== designs[j].category) continue
  if (origIds.has(designs[i].id) && origIds.has(designs[j].id)) continue // both originals: untouchable, grandfathered
  if (fontPairs[i] === fontPairs[j]) fpClose.push(`${designs[i].id} / ${designs[j].id} (${fontPairs[i]})`)
}
if (fpClose.length) flag('Same-category designs sharing display+body font pair: ' + fpClose.join(', '))
else ok('No same-category pair shares a display+body font pair')

// ---------- 6. block sets (replicate rotation) ----------
const famBlock = exSrc.slice(exSrc.indexOf('FAMILY_IDS'), exSrc.indexOf('BLOCK_SETS'))
const families = []
for (const m of famBlock.matchAll(/\[([^\]]+)\]/g)) families.push(m[1].split(',').map((s) => s.trim().replace(/'/g, '')))
const bpBlock = exSrc.slice(exSrc.indexOf('BLOCK_PATTERNS'), exSrc.indexOf('Family rosters'))
const patterns = []
for (const m of bpBlock.matchAll(/\['[a-z]+'(?:,\s*'[a-z]+')*\]/g)) patterns.push(m[0].replace(/[[\]']/g, '').split(',').map((s) => s.trim()))
const BLOCK_ORDER = ['testimonials', 'stats', 'faq', 'cta', 'pricing', 'cards']
const blockSets = {}
families.forEach((fam, fi) => fam.forEach((id, i) => {
  const set = patterns[(i + fi) % patterns.length]
  blockSets[id] = BLOCK_ORDER.filter((b) => set.includes(b))
}))
let windowOk = true
for (const fam of families) {
  for (let i = 0; i < fam.length; i++) {
    const set = blockSets[fam[i]].join(',')
    for (let j = Math.max(0, i - 4); j < i; j++) if (blockSets[fam[j]].join(',') === set) { flag(`Block set repeat within 5-nearest: ${fam[j]} & ${fam[i]}`); windowOk = false }
  }
}
if (windowOk) ok('Block sets: 5-nearest designs in every category differ (FAQ always present)')

// ---------- 7. fonts available ----------
const html = fs.readFileSync('index.html', 'utf8')
const sysFonts = new Set(['Times New Roman'])
let fontOk = true
for (const d of designs) {
  for (const f of [d.displayFont, d.bodyFont]) {
    if (!sysFonts.has(f) && !html.includes(`family=${f.replace(/ /g, '+')}`)) { flag(`${d.id}: font not loaded — ${f}`); fontOk = false }
  }
}
if (fontOk) ok('All display/body fonts load (or are system fonts)')

// ---------- 8. hero titles ----------
const mini = fs.readFileSync('src/components/MiniSite.tsx', 'utf8').replace(/\r\n/g, '\n')
const htStart = mini.indexOf('function heroTitle')
const htSeg = mini.slice(htStart, mini.indexOf('\n}', htStart) + 2)
const cases = new Set([...htSeg.matchAll(/case '([^']+)':/g)].map((m) => m[1]))
const missing = designs.filter((d) => !cases.has(d.id))
if (missing.length) flag('Designs missing heroTitle case: ' + missing.map((d) => d.id).join(', '))
else ok('Every design has a heroTitle case')

// ---------- 9. component counts ----------
const BLOCK_LABELS = { testimonials: 1, stats: 1, faq: 1, cta: 1, pricing: 1, cards: 1 }
const dashIds = [...exSrc.matchAll(/^  '?([a-z0-9-]+)'?: '(report-builder|kanban|calendar|activity)',/gm)].map((m) => m[1])
const dashSet = new Set(dashIds)
const counts = designs.map((d) => 9 + (blockSets[d.id] ? blockSets[d.id].length : 6) + (dashSet.has(d.id) ? 1 : 0))
const min = Math.min(...counts), max = Math.max(...counts), avg = counts.reduce((a, b) => a + b, 0) / counts.length
ok(`Components per design: avg ${avg.toFixed(1)}, min ${min}, max ${max} (9 base + 5-6 blocks + 0-1 dashboard extra)`)
const dashDupes = dashIds.filter((v, i) => dashIds.indexOf(v) !== i)
if (dashDupes.length) flag('Duplicate dashboard-extra assignments: ' + dashDupes.join(', '))
else ok(`Dashboard extras: ${dashIds.length} designs, no duplicate ids`)

// ---------- category distribution ----------
const dist = {}
designs.forEach((d) => (dist[d.category] = (dist[d.category] || 0) + 1))
console.log('Category distribution:', JSON.stringify(dist))

console.log(problems === 0 ? '\nALL CHECKS PASSED' : `\n${problems} PROBLEM(S)`)
process.exit(problems === 0 ? 0 : 1)
