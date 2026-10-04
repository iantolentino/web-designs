/* collect-picks — turn a `palette-check --pick` transcript into final palettes.
 *
 *   node scripts/collect-picks.cjs <spec.json> <picks.txt> <out.json>
 *
 * The spec supplies the base palette for each design; the picks transcript
 * supplies the chosen primary. Result: id → six tokens ready to paste into a
 * wave row.
 */
const fs = require('fs')

const [specPath, picksPath, outPath] = process.argv.slice(2)
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'))
const picks = fs.readFileSync(picksPath, 'utf8')

const out = {}
let missed = 0
for (const e of spec) {
  const m = picks.match(new RegExp(`^\\s*[✓~]\\s+${e.id}\\s+\\S+\\s+→\\s+(#[0-9a-fA-F]{6})`, 'm'))
  if (!m) {
    console.log(`MISS ${e.id}`)
    missed++
    continue
  }
  out[e.id] = [m[1], e.base[1], e.base[2], e.base[3], e.base[4], e.base[5]]
}
fs.writeFileSync(outPath, JSON.stringify(out, null, 1))
console.log(`final palettes for ${Object.keys(out).length} designs (${missed} missed)`)
for (const [k, v] of Object.entries(out)) console.log(`${k.padEnd(18)}${v.join(' ')}`)
