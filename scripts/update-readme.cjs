/*
 * update-readme.cjs — keeps README prose in step with the catalogue.
 * Run: node scripts/update-readme.cjs
 * Fails loudly if an anchor is missing, so stale prose is never silently kept.
 */
const fs = require('fs')

const p = 'README.md'
let raw = fs.readFileSync(p, 'utf8')
const nl = raw.includes('\r\n') ? '\r\n' : '\n'
let s = raw.replace(/\r\n/g, '\n')

const SUBS = [
  ['design-system showcase: **134 curated', 'design-system showcase: **184 curated'],
  ['| **Design systems** | 134 systems as live thumbnails', '| **Design systems** | 184 systems as live thumbnails'],
  ['### Design systems (100)', '### Design systems (184)'],
  ['| **Component kit** | The 53-component kit rendered for any design', '| **Component kit** | The 70-component kit rendered for any design'],
  ['all 62 kit components themed by that design alone', 'all 70 kit components themed by that design alone'],
  ['in every one of the 134 systems. Groups:', 'in every one of the 184 systems. Groups:'],
  ['**Inputs & actions** (13) · **Selection & toggles** (8) · **Feedback & status** (10) ·\n**Data display** (10) · **Navigation** (7) · **Overlays & media** (14)',
   '**Inputs & actions** (17) · **Selection & toggles** (10) · **Feedback & status** (11) ·\n**Data display** (11) · **Navigation** (7) · **Overlays & media** (14)'],
  ['# 17 category files + registry', '# 19 category files + registry'],
  ['so 100 previews can coexist without style bleed', 'so 184 previews can coexist without style bleed'],
  ['so 100 scaled pages\nstay cheap', 'so 184 scaled pages\nstay cheap'],
  ['an arrangement switcher (2–3 layout archetypes per design)', 'an arrangement switcher (2–4 layout archetypes per design)'],
  ['4. Add a `LAYOUT_SETS` entry in `designs/extras.ts` so the arrangement switcher has options.',
   '4. Add a `LAYOUT_SETS` entry in `designs/extras.ts` so the arrangement switcher has options\n   (2–4 arrangements; the **first must equal the design\'s card `layout` tag**).\n5. Run `node scripts/wave6-wire.cjs`. It wires the id into the registry, the arrangement sets,\n   the block-set rotation, and the mini-site hero titles, and it fails the run on duplicate\n   palettes, near-identical taglines, same-category type or palette clashes, invalid website\n   types, missing arrangement sets, or fonts that are not loaded in `index.html`.'],
]

let problems = 0
for (const [from, to] of SUBS) {
  if (!s.includes(from)) {
    console.log(`❌ anchor not found: ${from.slice(0, 70)}`)
    problems++
    continue
  }
  s = s.replace(from, to)
}
if (!problems) {
  fs.writeFileSync(p, s.replace(/\n/g, nl))
  console.log(`✅ README updated (${SUBS.length} anchors)`)
}
process.exit(problems ? 1 : 0)
