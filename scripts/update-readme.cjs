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
  ['**226 curated, intentionally distinct design', '**500 curated, intentionally distinct design'],
  ['a **90-component kit**', 'a **110-component kit**'],
  ['| **Design systems** | 226 systems as live thumbnails', '| **Design systems** | 500 systems as live thumbnails'],
  ['| **Layout arrangements** | 13 archetypes (incl. Bento, Poster, Catalog);', '| **Layout arrangements** | 21 archetypes (incl. Bento, Poster, Catalog, Docs, Map plate);'],
  ['| **Component kit** | The 90-component kit rendered for any design', '| **Component kit** | The 110-component kit rendered for any design'],
  ['### Design systems (226)', '### Design systems (500)'],
  ['Sixteen arrangements ship today: the original thirteen (hero + cards, split hero, magazine,', 'Twenty-one arrangements ship today: the original thirteen (hero + cards, split hero, magazine,'],
  ["catalog) plus wave 10's **mosaic**, **timeline**, and **split-scroll**. Thirty-three\nmotifs are available, six of them new in wave 10 (moiré rings, isometric lattice, paper cut,\noil slick, ledger rules, stencil mask).",
   "catalog) plus wave 10's **mosaic**, **timeline**, and **split-scroll**, and wave 11's\n**docs**, **film-strip**, **map-plate**, **field-notes**, and **receipt**. Fifty-three\nmotifs are available, twenty of them added in wave 11 (double rule, inset frame, ribbon\nband, stamp seal, ticket stub, blueprint grid, riso offset, glass sheen, torn edge, stitch\nline, lattice weave, vignette, slat shadow, watermark glyph, terrazzo speck, sonar sweep,\nPCB trace, punched card, quilt patch, rivet row)."],
  ['### The component kit (90 components, per design)', '### The component kit (110 components, per design)'],
  ['in every one of the 226 systems. Groups:', 'in every one of the 500 systems. Groups:'],
  ['**Inputs & actions** (17) · **Selection & toggles** (10) · **Feedback & status** (11) ·\n**Data display** (11) · **Navigation** (7) · **Overlays & media** (14)',
   '**Inputs & actions** (28) · **Selection & toggles** (14) · **Feedback & status** (15) ·\n**Data display** (23) · **Navigation** (10) · **Overlays & media** (20)'],
  ['as the catalog grows past 200 systems', 'as the catalog grows past 500 systems'],
  ['├── designs/              # 19 category files + registry + theming + use-case index',
   '├── designs/              # 29 design files + registry + theming + use-case index'],
  ['ComponentKit.tsx  #   53 themed components + the kit board',
   'ComponentKit.tsx  #   110 themed components + the kit board'],
  ['so 226 previews can coexist without style bleed', 'so 500 previews can coexist without style bleed'],
  ['so 226 scaled pages\nstay cheap', 'so 500 scaled pages\nstay cheap'],
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
