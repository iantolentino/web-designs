/*
 * wave7-wire.cjs — wires wave-7 pattern chunks into the library and audits them.
 *
 *   node scripts/wave7-wire.cjs 1      # reads scripts/chunks/wave7-{p1,c1,r1}.ts
 *
 *  - appends PatternDefs to PATTERNS in patterns/patterns.ts
 *  - inserts multi-column arrangements into CANVAS and stacked rhythms into
 *    RHYTHM in patterns/layouts.ts
 *  - audits: unique ids, every new pattern arranged exactly once, block kinds
 *    that exist in the renderer, valid families, and no duplicate arrangement
 */
const fs = require('fs')

const batch = process.argv[2]
if (!batch) {
  console.error('usage: node scripts/wave7-wire.cjs <batch-number>')
  process.exit(1)
}

const P = 'src/patterns/patterns.ts'
const L = 'src/patterns/layouts.ts'
const read = (p) => fs.readFileSync(p, 'utf8')
const write = (p, s) => fs.writeFileSync(p, s)

const chunk = (kind) => {
  const p = `scripts/chunks/wave7-${kind}${batch}.ts`
  return fs.existsSync(p) ? read(p) : ''
}

const idOf = (entry) => {
  const m = entry.match(/id: '([a-z0-9-]+)'/)
  return m ? m[1] : null
}

/** Split a chunk of object-literal entries (or map entries) on blank lines. */
const entriesOf = (text) =>
  text
    .split(/\n\s*\n/)
    .map((s) => s.replace(/\/\*[\s\S]*?\*\//g, '').trim())
    .filter((s) => /\S/.test(s))

const patternsChunk = chunk('p')
const canvasChunk = chunk('c')
const rhythmChunk = chunk('r')

/* ---------- 1. PATTERNS ---------- */

const patSrc = read(P)
const existingPatIds = new Set([...patSrc.matchAll(/id: '([a-z0-9-]+)'/g)].map((m) => m[1]))
const patternEntries = entriesOf(patternsChunk).filter((e) => idOf(e))
const newPatterns = patternEntries.filter((e) => !existingPatIds.has(idOf(e)))
if (newPatterns.length) {
  const anchor = `\n]\n\n/** Patterns grouped by family, in family order. */`
  if (!patSrc.includes(anchor)) throw new Error('PATTERNS end anchor not found')
  const indent = (e) => e.split('\n').map((l, i) => (i === 0 ? '  ' + l.trim() : l)).join('\n')
  const bodies = newPatterns.map((e) => indent(e.trimEnd()) + (e.trimEnd().endsWith(',') ? '' : ','))
  for (const b of bodies) {
    if (!/^  \{\n    id: '[a-z0-9-]+',$/m.test(b)) throw new Error(`chunk entry malformed:\n${b.slice(0, 90)}`)
  }
  const body = ['', `  /* ==================== WAVE 7 · BATCH ${batch} ==================== */`, '', ...bodies, ''].join('\n')
  const next = patSrc.replace(anchor, body + anchor)
  for (const b of bodies) {
    const id = b.match(/id: '([a-z0-9-]+)'/)[1]
    const n = (next.match(new RegExp(`id: '${id}',`, 'g')) || []).length
    if (n !== 1) throw new Error(`insertion would leave ${id} appearing ${n} times`)
  }
  write(P, next)
  console.log(`patterns.ts: +${newPatterns.length} patterns`)
} else console.log('patterns.ts: batch already present')

/* ---------- 2. layouts.ts (CANVAS + RHYTHM) ---------- */

{
  let src = read(L)
  const existingCanvas = new Set([...src.matchAll(/^  '([a-z0-9-]+)': \[/gm)].map((m) => m[1]))

  const insertIntoMap = (source, mapName, chunkText, closeAnchor) => {
    const entries = entriesOf(chunkText).filter((e) => {
      const id = e.match(/^'([a-z0-9-]+)':\s*\[/)
      return id && !existingCanvas.has(id[1]) && !new RegExp(`^  '${id[1]}':`, 'm').test(source.slice(source.indexOf(`export const ${mapName}`)))
    })
    if (!entries.length) return { source, added: 0 }
    const close = source.indexOf(closeAnchor)
    if (close === -1) throw new Error(`${mapName} close anchor not found`)
    const body = ['', `  /* ---- wave 7 · batch ${batch} ---- */`, '', ...entries.map((e) => e.split('\n').map((l) => (l.trim() ? '  ' + l.trim() : l)).join('\n')), ''].join('\n')
    return { source: source.slice(0, close) + body + source.slice(close), added: entries.length }
  }

  const canvasAnchor = `\n}\n\n/**\n * Rhythm and density for the stacked-section patterns.`
  let res = insertIntoMap(src, 'CANVAS', canvasChunk, canvasAnchor)
  src = res.source
  const canvasAdded = res.added

  const rhythmAnchor = `\n}\n\n/** The canvas arrangement for a pattern, preferring the refined entry. */`
  res = insertIntoMap(src, 'RHYTHM', rhythmChunk, rhythmAnchor)
  src = res.source
  const rhythmAdded = res.added

  if (canvasAdded || rhythmAdded) {
    write(L, src)
    console.log(`layouts.ts: +${canvasAdded} CANVAS, +${rhythmAdded} RHYTHM`)
  } else console.log('layouts.ts: batch already present')
}

/* ---------- 3. audit ---------- */

let problems = 0
const flag = (m) => { console.log('❌ ' + m); problems++ }
const ok = (m) => console.log('✅ ' + m)

const src = read(P)
const layouts = read(L)

/* block kinds the renderer understands */
const unionSlice = src.slice(src.indexOf('export type PtKind'), src.indexOf('export interface PtBlock'))
const KINDS = new Set([...unionSlice.matchAll(/'([a-z]+)'/g)].map((m) => m[1]))
const FAMILIES = new Set([...src.slice(src.indexOf('PatternFamily ='), src.indexOf('export type PtKind')).matchAll(/'([a-z]+)'/g)].map((m) => m[1]))

const patternsBlock = src.slice(src.indexOf('export const PATTERNS'))
const allEntryTexts = patternsBlock.split(/(?=\n  \{\n    id: ')/).filter((t) => /id: '[a-z0-9-]+'/.test(t))
const ids = allEntryTexts.map(idOf)
const dup = ids.filter((v, i) => ids.indexOf(v) !== i)
if (dup.length) flag('duplicate pattern ids: ' + [...new Set(dup)].join(', '))
else ok(`${ids.length} pattern ids unique`)

const badKind = []
const badFamily = []
for (const t of allEntryTexts) {
  const id = idOf(t)
  for (const m of t.matchAll(/\{ k: '([a-z]+)'/g)) if (!KINDS.has(m[1])) badKind.push(`${id}: ${m[1]}`)
  const fam = t.match(/family: ([A-Z])/)
  if (!fam) badFamily.push(`${id}: no family constant`)
  else if (!/const [A-Z] = '/.test(src) || !FAMILIES.size) badFamily.push(`${id}: family constants missing`)
}
if (badKind.length) flag('unknown block kinds: ' + [...new Set(badKind)].join(', '))
else ok('every block kind exists in the renderer (no new renderers needed)')
if (badFamily.length) flag('family problems: ' + badFamily.join(', '))

/* every batch pattern must be arranged exactly once, in the right map */
const canvasIds = new Set([...layouts.slice(layouts.indexOf('export const CANVAS'), layouts.indexOf('export const RHYTHM')).matchAll(/^  '([a-z0-9-]+)': \[/gm)].map((m) => m[1]))
const rhythmIds = new Set([...layouts.slice(layouts.indexOf('export const RHYTHM'), layouts.indexOf('export function canvasFor')).matchAll(/^  '([a-z0-9-]+)': \[/gm)].map((m) => m[1]))
const batchIds = (chunk('p') ? entriesOf(chunk('p')) : []).map(idOf).filter(Boolean)
const unarranged = batchIds.filter((id) => !canvasIds.has(id) && !rhythmIds.has(id))
const doubleArranged = batchIds.filter((id) => canvasIds.has(id) && rhythmIds.has(id))
if (unarranged.length) flag('patterns with no arrangement entry: ' + unarranged.join(', '))
if (doubleArranged.length) flag('patterns arranged twice (CANVAS and RHYTHM): ' + doubleArranged.join(', '))
if (!unarranged.length && !doubleArranged.length) ok(`all ${batchIds.length} batch patterns carry exactly one arrangement (${batchIds.filter((i) => canvasIds.has(i)).length} multi-column, ${batchIds.filter((i) => rhythmIds.has(i)).length} rhythm)`)

/* arrangement strings used by this batch must be distinct from each other and
 * must not repeat an arrangement already in the library (pre-existing entries
 * do share stacked rhythms, which is legitimate; new ones must not). */
const allArr = [...layouts.matchAll(/^\s*(?:'([a-z0-9-]+)'): \[\n\s*'([^']+)',/gm)].map((m) => ({ id: m[1], css: m[2] }))
const batchArr = allArr.filter((a) => batchIds.includes(a.id))
const foreign = allArr.filter((a) => !batchIds.includes(a.id))
const clashes = batchArr.filter((a) => foreign.some((f) => f.css === a.css) || batchArr.filter((b) => b.css === a.css).length > 1)
if (clashes.length) flag('batch arrangement duplicates an existing/new arrangement: ' + clashes.map((c) => c.id).join(', '))
else ok(`${batchArr.length} batch arrangements unique against all ${allArr.length} in the library`)

console.log(problems ? `\n${problems} PROBLEM(S)` : '\nWave-7 batch wired and audited. Now run: npm run verify && npm run typecheck')
process.exit(problems ? 1 : 0)
