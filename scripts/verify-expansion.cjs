/* Verification for the sidebar / patterns / component-kit expansion.
 * Run: node scripts/verify-expansion.cjs
 *
 * Checks the invariants this expansion is supposed to guarantee:
 *   1. every design carries a 20+ component kit
 *   2. the website-type catalog is fully wired (types ⇄ icons ⇄ groups)
 *   3. every website type filters to a real, non-empty set of designs
 *   4. the pattern library ships 100+ unique layout recipes, most of them
 *      genuinely multi-track
 *   5. no per-pattern CSS leaks outside its own pattern (the scoping bug)
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

let problems = 0
const flag = (m) => { console.log('❌ ' + m); problems++ }
const ok = (m) => console.log('✅ ' + m)

const read = (p) => fs.readFileSync(p, 'utf8')

/* ---------- 1. component kit ---------- */

const kitSrc = read('src/components/ComponentKit.tsx')
const kitItems = kitSrc.match(/\{ id: '[^']+', name: '[^']+', group: '[a-z]+', Comp: \w+ \}/g) || []
if (kitItems.length >= 20) ok(`component kit ships ${kitItems.length} components (requirement: 20+ per design)`)
else flag(`component kit only ships ${kitItems.length} components (requirement: 20+)`)

const kitIds = kitItems.map((i) => i.match(/id: '([^']+)'/)[1])
if (new Set(kitIds).size === kitIds.length) ok('kit component ids are unique')
else flag('kit component ids contain duplicates')

/* ---------- 2. website-type wiring ---------- */

const typesSrc = read('src/types.ts')
const useCasesBlock = typesSrc.slice(typesSrc.indexOf('export const USE_CASES'), typesSrc.indexOf('export type UseCase'))
const useCases = [...useCasesBlock.matchAll(/'([^']+)'/g)].map((m) => m[1])

const iconBlock = typesSrc.slice(typesSrc.indexOf('export const USE_CASE_ICON'), typesSrc.indexOf('export interface ComponentSpec'))
const iconKeys = [...iconBlock.matchAll(/^\s{2}(?:'([^']+)'|([A-Za-z][\w &/-]*?)):/gm)].map((m) => m[1] || m[2])

const missingIcons = useCases.filter((u) => !iconKeys.includes(u))
const strayIcons = iconKeys.filter((u) => !useCases.includes(u))
if (!missingIcons.length && !strayIcons.length) ok(`all ${useCases.length} website types have an icon and nothing is stray`)
else flag(`icon map mismatch — missing: [${missingIcons.join(', ')}] stray: [${strayIcons.join(', ')}]`)

const groupBlock = typesSrc.slice(typesSrc.indexOf('export const USE_CASE_GROUPS'), typesSrc.indexOf('export const USE_CASE_ICON'))
const grouped = [...groupBlock.matchAll(/'([^']+)'/g)].map((m) => m[1]).filter((x) => useCases.includes(x))
const groupedSet = new Set(grouped)
if (grouped.length === useCases.length && groupedSet.size === useCases.length)
  ok(`all ${useCases.length} website types are grouped exactly once in the sidebar picker`)
else
  flag(
    `group coverage mismatch — grouped ${groupedSet.size}/${useCases.length}` +
      (grouped.length !== groupedSet.size ? ' (duplicate entries present)' : ''),
  )
if (useCases.length >= 40) ok(`website-type catalog expanded to ${useCases.length} options`)
else flag(`website-type catalog only has ${useCases.length} options`)

/* ---------- 3–5. runtime invariants (bundled through esbuild) ---------- */

/**
 * Whether an arrangement is genuinely multi-track. Counts the canvas itself
 * plus any block placement the arrangement hands to its children (named grid
 * areas, column spans, or `display: contents` promotion).
 */
function isStructured(layout, extra) {
  // Only the arrangement matters when counting tracks — the extras below add
  // their own evidence for placement.
  const tracksIn = (css) => {
    let n = (css.match(/minmax\(/g) || []).length
    const rep = css.match(/repeat\((\d+)/)
    if (rep) n = Math.max(n, Number(rep[1]))
    if (/grid-template-areas/.test(css)) n = Math.max(n, 2)
    if (/flex-direction:\s*row/.test(css)) n = Math.max(n, 2)
    return n
  }
  const n = Math.max(tracksIn(layout), tracksIn(extra || ''))
  if (extra && /grid-area:|grid-column:\s*(span|auto|\d)|display:\s*contents/.test(extra)) return true
  return n >= 2
}


const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-verify-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')
const abs = (p) => path.resolve(p).replace(/\\/g, '/')

fs.writeFileSync(
  entry,
  `import { USE_CASES } from '${abs('src/types')}'
import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'
import { useCaseStats } from '${abs('src/designs/usecases')}'
import { PATTERNS, buildPatternCss } from '${abs('src/patterns/patterns')}'
import { canvasFor } from '${abs('src/patterns/layouts')}'

const canvas = PATTERNS.map((p) => canvasFor(p).layout)

console.log(JSON.stringify({
  useCases: USE_CASES,
  designCount: DESIGN_SYSTEMS.length,
  designIds: DESIGN_SYSTEMS.map((d) => d.id),
  stats: useCaseStats(),
  patternCount: PATTERNS.length,
  patternIds: PATTERNS.map((p) => p.id),
  recipes: PATTERNS.map((p, i) => canvas[i] + ' || ' + p.blocks.map((b) => b.k).join('>')),
  canvases: canvas,
  extras: PATTERNS.map((p) => canvasFor(p).extra ?? ''),
  css: buildPatternCss(),
}))\n`,
)

try {
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  const data = JSON.parse(execSync(`node "${bundle}"`, { encoding: 'utf8' }))
  const { stats, patternCount, patternIds, recipes, canvases, extras, css, designCount } = data

  const empty = stats.filter((s) => s.count === 0)
  if (!empty.length) ok(`every website type filters to designs (smallest bucket: ${Math.min(...stats.map((s) => s.count))})`)
  else flag(`website types with no matching design: ${empty.map((s) => s.useCase).join(', ')}`)

  if (stats.length === data.useCases.length) ok(`all ${stats.length} website types resolve through the derived index`)
  else flag(`index covers ${stats.length} of ${data.useCases.length} website types`)

  if (patternCount >= 100) ok(`pattern library ships ${patternCount} layouts (requirement: 100+)`)
  else flag(`pattern library only ships ${patternCount} layouts (requirement: 100+)`)

  if (new Set(patternIds).size === patternCount) ok('pattern ids are unique')
  else flag('pattern ids contain duplicates')

  const uniqueRecipes = new Set(recipes).size
  if (uniqueRecipes === patternCount) ok(`all ${patternCount} layout recipes (arrangement + composition) are unique`)
  else flag(`only ${uniqueRecipes}/${patternCount} layout recipes are unique`)

  const structured = canvases.filter((l, i) => isStructured(l, extras[i])).length
  if (structured >= 60) ok(`${structured}/${patternCount} patterns use a genuine multi-track arrangement`)
  else flag(`only ${structured}/${patternCount} patterns use a multi-track arrangement`)

  const unscoped = css.split('\n').filter((line) => line.trim() && !line.trim().startsWith('.pt-'))
  if (!unscoped.length) ok('no per-pattern CSS leaks outside its own pattern')
  else flag(`${unscoped.length} unscoped CSS rule(s), e.g. ${unscoped[0].slice(0, 80)}`)

  const ids = new Set(data.designIds)
  if (ids.size === designCount) ok(`${designCount} design systems indexed with unique ids`)
  else flag('duplicate design ids detected')
} catch (err) {
  flag(`bundled invariants could not run: ${err.message}`)
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}

console.log(problems ? `\n${problems} problem(s) found.` : '\nAll checks passed.')
process.exit(problems ? 1 : 0)
