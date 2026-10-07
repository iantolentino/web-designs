/* Extract the preview-only prose fields out of the design data.
 *
 * Run: node scripts/extract-details.cjs          (dry run — measure only)
 *      node scripts/extract-details.cjs --apply  (rewrite + write details file)
 *
 * This is a **one-time split**, already applied. It exists so the change is
 * reproducible and reviewable, not as a build step. After it ran, the six
 * fields live in src/designs/details.ts, which became the source of truth for
 * those records — so re-running `--apply` finds no literals to remove and would
 * happily overwrite the file with an empty table. It therefore refuses to write
 * when it extracted nothing.
 *
 * The six fields below are read only by the Preview's Details/Code tabs and the
 * prompt copier — nothing on the gallery or thumbnail path touches them. In the
 * hand-authored design files they are ~1.2 kB of literal prose per design, and
 * they ride in the catalog chunk that every first paint waits on. This codemod
 * moves them into src/designs/details.ts, which is imported only when a preview
 * tab actually opens.
 *
 * Safety: the runtime values are the source of truth. Every property removed
 * from a source file is compared against the value the module produced before
 * the rewrite, keyed by design id, and the run aborts on any mismatch. Removal
 * is driven by a tolerant scanner (string literals with escapes, brace-matched
 * object literals) rather than a naive regex, and because the fields are then
 * dropped from the DesignSystem type, `tsc` independently fails if any
 * property was left behind.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const KEYS = ['designDetails', 'codeExample', 'accessibility', 'responsive', 'spacing', 'motion']
const APPLY = process.argv.includes('--apply')

const abs = (p) => path.resolve(p).replace(/\\/g, '/')

/** Bundle a module to CJS and return whatever it exports. */
function load(...imports) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-extract-'))
  const entry = path.join(tmp, 'entry.ts')
  const bundle = path.join(tmp, 'bundle.cjs')
  const names = imports.map((i, n) => `M${n}`)
  const outFile = path.join(tmp, 'out.json')
  fs.writeFileSync(
    entry,
    imports.map((i, n) => `import * as M${n} from '${abs(i)}'`).join('\n') +
      `\nimport { writeFileSync } from 'node:fs'\n` +
      `writeFileSync(${JSON.stringify(outFile)}, JSON.stringify([${names.map((n) => `${n}`).join(',')}]))`,
  )
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  // The catalog is ~1.1 MB of JSON — far past execSync's stdout buffer, so the
  // bundle writes to disk and we read it back.
  execSync(`node "${bundle}"`, { stdio: ['ignore', 'ignore', 'inherit'] })
  return JSON.parse(fs.readFileSync(outFile, 'utf8'))
}

/* ---------------- tolerant property scanner ---------------- */

/** End index (exclusive) of a JS value starting at `i`. */
function scanValue(src, i) {
  const c = src[i]
  if (c === "'" || c === '"' || c === '`') {
    const quote = c
    i++
    while (i < src.length) {
      if (src[i] === '\\') i += 2
      else if (src[i] === quote) return i + 1
      else i++
    }
    throw new Error(`unterminated ${quote} literal at ${i}`)
  }
  if (c === '{' || c === '[') {
    const open = c
    const close = open === '{' ? '}' : ']'
    let depth = 0
    while (i < src.length) {
      const ch = src[i]
      if (ch === "'" || ch === '"' || ch === '`') {
        i = scanValue(src, i)
        continue
      }
      if (ch === open) depth++
      else if (ch === close) {
        depth--
        if (depth === 0) return i + 1
      }
      i++
    }
    throw new Error(`unbalanced ${open} at ${i}`)
  }
  // bare token (number, identifier, template-free expression): up to , or EOL
  while (i < src.length && src[i] !== ',' && src[i] !== '\n') i++
  return i
}

/**
 * Remove every `\n    <key>: <value>,` property from `src`, returning the new
 * source plus the removed values keyed by field in document order.
 *
 * Long values are wrapped onto the following line by prettier, so the value
 * starts after the newline and its indentation rather than after the colon.
 */
function strip(src, key) {
  const re = new RegExp(`^    ${key}:`, 'gm')
  const found = []
  let out = ''
  let cursor = 0
  let m
  while ((m = re.exec(src)) !== null) {
    // Only a property of the design object: `:` followed by space or newline.
    const after = src[re.lastIndex]
    if (after !== ' ' && after !== '\n' && after !== '\r') continue
    const keyStart = m.index
    // include the leading newline so no blank line is left behind
    const start = keyStart === 0 ? 0 : src[keyStart - 1] === '\n' ? keyStart - 1 : keyStart
    let v = re.lastIndex
    while (v < src.length && /\s/.test(src[v])) v++
    const valueEnd = scanValue(src, v)
    let end = valueEnd
    while (end < src.length && (src[end] === ' ' || src[end] === '\t')) end++
    if (src[end] === ',') end++
    out += src.slice(cursor, start)
    found.push(src.slice(v, valueEnd))
    cursor = end
    re.lastIndex = end
  }
  out += src.slice(cursor)
  return { out, found }
}

/** Evaluate a scanned JS literal/object expression from our own source. */
const evaluate = (text) => Function(`"use strict"; return (${text})`)()
const last = (t) => t.split('.').pop().replace(/\.ts$/, '')

/* ---------------- main ---------------- */

const designDir = path.resolve('src/designs')
const [indexMod] = load(path.join(designDir, 'index'))
const systems = indexMod.DESIGN_SYSTEMS

// index.ts concatenates the category files (not the wave files), so the raw
// wave/category modules are scanned directly and the index only for reference.
const files = fs
  .readdirSync(designDir)
  .filter((f) => /\.ts$/.test(f) && !['index.ts', 'build.ts', 'extras.ts', 'palette.ts', 'theme.ts', 'usecases.ts'].includes(f))
  .sort()

const registry = {}
const keyCounts = {}
const perFileIds = {}
let removedProps = 0
let removedChars = 0
const report = []

for (const file of files) {
  const p = path.join(designDir, file)
  // Normalise to LF before scanning. The working tree is checked out CRLF
  // (core.autocrlf=true) while the index stores LF, so rewriting LF keeps the
  // diff to the removed properties and nothing else — and a removal that
  // started at a `\n` would otherwise strand a `\r` on the previous line.
  const src = fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n')
  const original = fs.readFileSync(p, 'utf8')
  // sys()/row() files author *seeds*, whose keys also sit at this indent (a
  // Seed has its own `motion:` and `components:`), so they are never scanned.
  // Their designs derive every one of these fields at runtime instead.
  if (/\b(sys|row)\(/.test(src) || !KEYS.some((k) => src.includes(`    ${k}:`))) {
    report.push([file, 0, 0])
    continue
  }
  // Designs declared in this file, in source order.
  const [loaded] = load(p)
  const list = Object.values(loaded).find(Array.isArray)
  if (!list || !list.length) throw new Error(`${file}: no design array found`)
  perFileIds[file] = list.map((d) => d.id)

  let out = src
  for (const key of KEYS) {
    const res = strip(out, key)
    if (res.found.length === 0) continue
    const ids = perFileIds[file]
    if (res.found.length !== ids.length) {
      throw new Error(
        `${file}: ${key} found ${res.found.length}x but file declares ${ids.length} designs — scanner needs review`,
      )
    }
    keyCounts[key] = (keyCounts[key] ?? 0) + res.found.length
    res.found.forEach((raw, i) => {
      const id = ids[i]
      const value = evaluate(raw)
      const expected = list[i][key]
      if (JSON.stringify(value) !== JSON.stringify(expected)) {
        throw new Error(`${file}: ${id}.${key} mismatch — scanned value disagrees with the module's own value`)
      }
      registry[id] = registry[id] || {}
      registry[id][key] = value
      removedProps++
      removedChars += raw.length
    })
    out = res.out
  }
  if (APPLY && out !== src) fs.writeFileSync(p, out, 'utf8')
  report.push([file, perFileIds[file].length, original.replace(/\r\n/g, '\n').length - out.length])
}

// Category files are re-exported through index.ts; a design may be declared in
// a category file *and* referenced by a wave module, so key by id and de-dupe.
const known = new Set(systems.map((d) => d.id))
const missing = [...known].filter((id) => !registry[id])
const stray = Object.keys(registry).filter((id) => !known.has(id))

console.log(`files scanned:      ${files.length}`)
console.log(`designs in catalog: ${known.size}`)
console.log(`props removed:      ${removedProps}`)
console.log(`source chars saved: ${removedChars} (${(removedChars / 1024).toFixed(1)} kB)`)
console.log(`registry entries:   ${Object.keys(registry).length}`)
console.log(
  `per key:            ${KEYS.map((k) => `${k}=${keyCounts[k] ?? 0}`).join(' ')}`,
)
console.log(`designs already derived (no literals): ${missing.length}`)
if (stray.length) console.log(`!! registry ids not in catalog: ${stray.join(', ')}`)

if (APPLY) {
  const body = Object.keys(registry)
    .map((id) => {
      const fields = KEYS.filter((k) => registry[id][k] !== undefined)
        .map((k) => `    ${k}: ${JSON.stringify(registry[id][k])},`)
        .join('\n')
      return `  ${JSON.stringify(id)}: {\n${fields}\n  },`
    })
    .join('\n')
  if (removedProps === 0) {
    console.error('refusing to write: no literal preview prose found to extract.')
    console.error('The split has already been applied — src/designs/details.ts is now the')
    console.error('source of truth for those records and must not be regenerated empty.')
    process.exit(1)
  }

  const header = `/* The preview prose for every hand-authored design.
 *
 * These six fields are read only by the Preview's Details/Code tabs and the
 * prompt copier, so they live here — a module fetched when a preview opens —
 * instead of riding in the catalog chunk that every first paint waits on.
 * Designs built through sys()/row() derive theirs from the seed instead (see
 * src/designs/build.ts) and are absent here; src/designs/previewDetails.ts
 * answers for both cases behind one call.
 *
 * Moved here once by scripts/extract-details.cjs, which is why the shape is
 * mechanical. This file is now the source of truth for these records — edit it
 * directly (the splitter refuses to run again).
 */
import type { DesignDetails } from '../types'

export const DESIGN_DETAILS: Record<string, DesignDetails> = {
`
  fs.writeFileSync(path.join(designDir, 'details.ts'), `${header}${body}\n}\n`)
  console.log('wrote src/designs/details.ts')
} else {
  console.log('\n(dry run — pass --apply to rewrite sources)')
}
