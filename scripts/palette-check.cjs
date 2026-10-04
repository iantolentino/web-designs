/* palette-check — pick a re-ink that clears the taste-audit thresholds before
 * you touch the source.
 *
 *   node scripts/palette-check.cjs scripts/candidates.json
 *
 * Input is an array whose entries are either:
 *
 *   { "id": "zine-rack", "candidates": [ ["#be123c", ...6 tokens], ... ] }
 *       → score each hand-written candidate.
 *
 *   { "id": "zine-rack", "hue": [320, 355], "sat": [40, 90] }
 *       → sweep the hue/saturation grid inside that window (keeping the rest of
 *         the design's palette) and print the most distinct options.
 *
 * Thresholds match taste-audit: primary ΔE ≥ 12 and palette-average ΔE ≥ 10
 * against every other design.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')

const specPath = process.argv[2]
if (!specPath) {
  console.error('usage: node scripts/palette-check.cjs <candidates.json>')
  process.exit(1)
}
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'))

/* ---------- load the live catalog ---------- */

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-pal-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')
const abs = (p) => path.resolve(p).replace(/\\/g, '/')

fs.writeFileSync(
  entry,
  `import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'
console.log(JSON.stringify(DESIGN_SYSTEMS.map((d) => ({ id: d.id, colors: d.colors }))))`,
)

let ds
try {
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  ds = JSON.parse(execSync(`node "${bundle}"`, { encoding: 'utf8' }))
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}

/* ---------- colour maths (same as taste-audit: sRGB → CIELAB, ΔE76) ---------- */

const hexRgb = (h) => {
  const n = (h || '#000000').replace('#', '')
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
}
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
function lab(hex) {
  const [r, g, b] = hexRgb(hex).map(toLinear)
  const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505 / 1.08883
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116)
  const [fx, fy, fz] = [f(x), f(y), f(z)]
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]
}
const deltaE = (l1, l2) => Math.sqrt((l1[0] - l2[0]) ** 2 + (l1[1] - l2[1]) ** 2 + (l1[2] - l2[2]) ** 2)
const KEYS = ['primary', 'secondary', 'accent', 'neutral', 'background', 'text']
const paletteDistance = (p, q) => KEYS.reduce((s, k) => s + deltaE(p[k], q[k]), 0) / KEYS.length
const toObj = (arr) => Object.fromEntries(KEYS.map((k, i) => [k, arr[i]]))
const fmt = (n) => Number(n).toFixed(1).padStart(6)

const MIN_PRIMARY = 12
const MIN_PALETTE = 10

/* Every explicit candidate in the spec joins the comparison pool, so a whole
 * new wave validates against the existing catalog *and* against itself. */
const specPool = []
for (const item of spec) {
  for (const [i, arr] of (item.candidates || []).entries()) {
    if (arr.length !== 6) continue
    const colors = toObj(arr)
    specPool.push({ id: `spec:${item.id}#${i + 1}`, lab: Object.fromEntries(KEYS.map((k) => [k, lab(colors[k])])) })
  }
}

/* pre-compute lab for every design so a sweep stays cheap */
const existing = ds.map((d) => ({
  id: d.id,
  lab: Object.fromEntries(KEYS.map((k) => [k, lab(d.colors[k])])),
})).concat(specPool)

const scorePalette = (id, cand) => {
  const candLab = Object.fromEntries(KEYS.map((k) => [k, lab(cand[k])]))
  let bp = { de: Infinity, id: null, hex: null }
  let bPal = { de: Infinity, id: null }
  for (const other of existing) {
    if (other.id === id || other.id.startsWith(`spec:${id}#`)) continue
    const dp = deltaE(candLab.primary, other.lab.primary)
    if (dp < bp.de) bp = { de: dp, id: other.id }
    let sum = 0
    for (const k of KEYS) sum += deltaE(candLab[k], other.lab[k])
    const dPal = sum / KEYS.length
    if (dPal < bPal.de) bPal = { de: dPal, id: other.id }
  }
  return { bp, bPal }
}

/* ---------- HSL helpers for the sweep ---------- */

const hexToHsl = (hex) => {
  const [r, g, b] = hexRgb(hex)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [h * 360, s, l]
}
const hslToHex = (h, s, l) => {
  h = ((h % 360) + 360) % 360
  s = Math.min(1, Math.max(0, s))
  l = Math.min(1, Math.max(0, l))
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  const seg = [
    [c, x, 0], [x, c, 0], [0, c, x], [0, x, c], [x, 0, c], [c, 0, x],
  ][Math.floor(h / 60) % 6]
  return (
    '#' +
    seg
      .map((v) => Math.round((v + m) * 255).toString(16).padStart(2, '0'))
      .join('')
  )
}

/* ---------- run the spec ---------- */

for (const item of spec) {
  /* A design that is not in the catalog yet may supply its own base palette —
   * the sweep then varies only the primary. */
  const current =
    ds.find((d) => d.id === item.id) || (item.base ? { id: item.id, colors: toObj(item.base) } : undefined)
  if (!current) {
    console.log(`\n${item.id}  ⚠ not found and no base palette given\n${'-'.repeat(64)}`)
    continue
  }
  console.log(`\n${item.id}${ds.find((d) => d.id === item.id) ? `  (now ${current.colors.primary})` : `  (new, base ${current.colors.primary})`}\n${'-'.repeat(64)}`)

  if (item.candidates) {
    for (const arr of item.candidates) {
      if (arr.length !== 6) {
        console.log(`   ${arr.join(' ')}  ✗ needs exactly 6 tokens`)
        continue
      }
      const cand = toObj(arr)
      const { bp, bPal } = scorePalette(item.id, cand)
      const mark = bp.de >= MIN_PRIMARY && bPal.de >= MIN_PALETTE ? '✓' : bp.de < MIN_PRIMARY && bPal.de < MIN_PALETTE ? '✗' : '~'
      console.log(
        `  ${mark} ${cand.primary}  primary ΔE ${fmt(bp.de)} → ${bp.id}   palette ΔE ${fmt(bPal.de)} → ${bPal.id}`,
      )
    }
    continue
  }

  if (item.hue) {
    const [h0, h1raw] = item.hue
    /* windows may wrap past 360 (e.g. reds 350 → 10); take the short way round */
    const h1 = h1raw < h0 ? h1raw + 360 : h1raw
    const [s0, s1] = item.sat || [0, 1]
    const base = hslToHex
    const cur = hexToHsl(current.colors.primary)
    const lLo = item.light ? item.light[0] : Math.max(0.08, cur[2] - 0.3)
    const lHi = item.light ? item.light[1] : Math.min(0.92, cur[2] + 0.3)
    const results = []
    const HUE_STEPS = 36
    const L_STEPS = 13
    const S_STEPS = 9
    for (let hi = 0; hi < HUE_STEPS; hi++) {
      const h = h0 + ((h1 - h0) * hi) / (HUE_STEPS - 1)
      for (let li = 0; li < L_STEPS; li++) {
        const l = lLo + ((lHi - lLo) * li) / (L_STEPS - 1)
        for (let si = 0; si < S_STEPS; si++) {
          const s = s0 + ((s1 - s0) * si) / (S_STEPS - 1)
          const hex = base(h, s, l)
          const cand = { ...current.colors, primary: hex }
          const { bp, bPal } = scorePalette(item.id, cand)
          /* normalized margin: how far the candidate clears *both* thresholds */
          results.push({ hex, h, l, s, bp, bPal, min: Math.min(bp.de / MIN_PRIMARY, bPal.de / MIN_PALETTE) })
        }
      }
    }
    results.sort((a, b) => b.min - a.min)

    /* --pick: take the single best option and remember it, so the next entry in
     * the spec is scored against this pick too. Used to plan a whole wave at once. */
    if (process.argv.includes('--pick')) {
      const best = results[0]
      const mark = best.bp.de >= MIN_PRIMARY && best.bPal.de >= MIN_PALETTE ? '✓' : '~'
      console.log(
        `  ${mark} ${item.id.padEnd(18)} ${current.colors.primary} → ${best.hex}` +
          `   primary ΔE ${fmt(best.bp.de)} → ${best.bp.id}   palette ΔE ${fmt(best.bPal.de)} → ${best.bPal.id}`,
      )
      const colors = { ...current.colors, primary: best.hex }
      existing.push({
        id: `spec:${item.id}#pick`,
        lab: Object.fromEntries(KEYS.map((k) => [k, lab(colors[k])])),
      })
      continue
    }

    const seenHue = new Set()
    const top = []
    for (const r of results) {
      const bucket = Math.round(r.h / 12)
      if (seenHue.has(bucket) && top.length < 6) continue
      seenHue.add(bucket)
      top.push(r)
      if (top.length >= 6) break
    }
    for (const r of top) {
      const mark = r.bp.de >= MIN_PRIMARY && r.bPal.de >= MIN_PALETTE ? '✓' : '~'
      console.log(
        `  ${mark} ${r.hex}  h${Math.round(r.h)} s${Math.round(r.s * 100)} l${Math.round(r.l * 100)}` +
          `   primary ΔE ${fmt(r.bp.de)} → ${r.bp.id}   palette ΔE ${fmt(r.bPal.de)} → ${r.bPal.id}`,
      )
    }
  }
}
