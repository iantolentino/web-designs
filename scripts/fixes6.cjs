/* Wave-10b: uniqueness pass over legacy designs.
 *
 * The taste audit (scripts/taste-audit.cjs) found three kinds of soft
 * duplication that the byte-level audit could not see:
 *
 *   1. structure collisions — designs sharing motif + layout + radius + depth
 *   2. chromatic duplicates — the same signature color as another design's
 *      primary (exact golds, pinks, reds, blues)
 *   3. type-pair repeats — five designs shipping IBM Plex Sans + IBM Plex Sans
 *
 * This script edits ONLY within the target design's own block, so a hex that
 * several designs share (antique gold, brick red) can be re-inked for one
 * design without touching the others.
 *
 *   node scripts/fixes6.cjs --inspect=soft-mono,refined-brutalism
 *   node scripts/fixes6.cjs --dry
 *   node scripts/fixes6.cjs
 */
const fs = require('fs')
const path = require('path')

const read = (p) => fs.readFileSync(p, 'utf8')
const write = (p, s) => fs.writeFileSync(p, s)

/** The slice of a design file that belongs to one design object. */
function blockOf(src, id) {
  const start = src.indexOf(`id: '${id}',`)
  if (start < 0) return null
  // Next top-level object in the array, or end of file.
  const nextObj = src.slice(start + 1).search(/\n  \{\s*\n    id: '/)
  const end = nextObj < 0 ? src.length : start + 1 + nextObj
  return { start, end, text: src.slice(start, end) }
}

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const inspectArg = args.find((a) => a.startsWith('--inspect='))

if (inspectArg) {
  const ids = inspectArg.slice('--inspect='.length).split(',')
  for (const f of fs.readdirSync('src/designs').filter((x) => x.endsWith('.ts'))) {
    const src = read(path.join('src/designs', f))
    for (const id of ids) {
      const b = blockOf(src, id)
      if (!b) continue
      const d = (b.text.match(/displayFont: '([^']+)'/) || [])[1]
      const body = (b.text.match(/bodyFont: '([^']+)'/) || [])[1]
      const det = (b.text.match(/designDetails:\s*\n?\s*'([^']*)'/) || [])[1] || ''
      console.log(`\n${id}  (${f})`)
      console.log(`  display: ${d}\n  body:    ${body}`)
      console.log(`  motif:   ${(b.text.match(/motif: (M\()?'([^']+)'/) || [])[2]}`)
      console.log(`  details: ${det.slice(0, 240)}`)
      console.log(`  colors:  ${(b.text.match(/colors: \{([\s\S]*?)\}/) || [])[1].replace(/\s+/g, ' ')}`)
    }
  }
  process.exit(0)
}

/* ---------------- the edit table ---------------- */

const HEX = [
  // structure/identity de-duplication (see notes in each line)
  ['src/designs/luxury.ts', 'dark-luxury', '#d4af37', '#e7cf9f'], // champagne, not deco gold
  ['src/designs/urban.ts', 'pop-comics', '#e63946', '#ef4b1b'], // comic orange-red
  ['src/designs/creative.ts', 'abstract-art', '#e63946', '#b5173c'], // crimson, blue stays
  ['src/designs/craft.ts', 'inkwell-zine', '#2b44ff', '#5333d6'], // violet ink
  ['src/designs/craft.ts', 'arco-grid', '#e8590c', '#0e7490'], // cyan, not kiln orange
  ['src/designs/wave6.ts', 'private-vault', '#c9a227', '#8f6b3a'], // bronze, not gothic gold
  ['src/designs/craft.ts', 'film-journal', '#c0392b', '#8a5a3b'], // sepia, not pulp red
  ['src/designs/futuristic.ts', 'atompunk', '#e63317', '#e07a00'], // atomic orange
  ['src/designs/playful.ts', 'doodle-desk', '#2563eb', '#6d28d9'], // violet ink
  ['src/designs/wave6.ts', 'kart-klub', '#c62828', '#ff4d1a'], // racing orange
  ['src/designs/professional.ts', 'corporate-blue', '#1d4ed8', '#1b2f8a'], // deeper navy
]

const MOTIFS = [
  ['src/designs/brutalism.ts', 'steel-plant', "motif: 'mono-labels',", "motif: 'corner-brackets',"],
  ['src/designs/wave6.ts', 'seed-vault', "motif: 'mono-labels',", "motif: 'leaf-divider',"],
  ['src/designs/wave9.ts', 'flight-deck', "motif: 'mono-labels',", "motif: 'scanlines',"],
  ['src/designs/luxury.ts', 'dark-luxury', "motif: 'serif-italic-hero',", "motif: 'glow-pulse',"],
  ['src/designs/playful.ts', 'gumball', "motif: 'rotated-stickers',", "motif: 'halftone-dots',"],
  ['src/designs/playful.ts', 'toybox-round', "motif: 'soft-shadows',", "motif: 'big-stat-row',"],
  ['src/designs/professional.ts', 'clinic-warm', "motif: 'soft-shadows',", "motif: 'leaf-divider',"],
  ['src/designs/wave5.ts', 'maison-mode', "motif: 'serif-italic-hero',", "motif: 'tape-labels',"],
  ['src/designs/wave5.ts', 'studio-copperplate', "motif: 'dashed-borders',", "motif: 'ledger-rules',"],
  ['src/designs/craft.ts', 'lunar-climate', "motif: 'big-stat-row',", "motif: 'isometric-lattice',"],
  ['src/designs/creative.ts', 'foundry-type', "motif: 'mono-labels',", "motif: 'outline-type',"],
  ['src/designs/craft.ts', 'film-journal', "motif: 'grain-overlay',", "motif: 'tape-labels',"],
  ['src/designs/wave8.ts', 'weather-bureau', "motif: 'swiss-grid',", "motif: 'scanlines',"],
  ['src/designs/wave6.ts', 'grid-dispatch', "motif: 'mono-labels',", "motif: 'swiss-grid',"],
  ['src/designs/wave8.ts', 'marble-atelier', "motif: 'outline-type',", "motif: 'paper-cut',"],
  ['src/designs/wave8.ts', 'espionage-console', "motif: 'tape-labels',", "motif: 'scanlines',"],
  ['src/designs/brutalism.ts', 'refined-brutalism', "M('swiss-grid')", "M('corner-brackets')"],
]

const TYPES = [
  // break the IBM Plex Sans + IBM Plex Sans ×5 group
  ['src/designs/minimalism.ts', 'soft-mono', "displayFont: 'IBM Plex Sans'", "displayFont: 'IBM Plex Mono'"],
  ['src/designs/brutalism.ts', 'refined-brutalism', "displayFont: 'IBM Plex Sans'", "displayFont: 'Archivo Black'"],
  ['src/designs/professional.ts', 'tech-corporate', "displayFont: 'IBM Plex Sans'", "displayFont: 'Familjen Grotesk'"],
  ['src/designs/urban.ts', 'blueprint-tech', "displayFont: 'IBM Plex Sans'", "displayFont: 'Chakra Petch'"],
  ['src/designs/historical.ts', 'clinical-care', "displayFont: 'IBM Plex Sans'", "displayFont: 'Livvic'"],
  // break Fraunces + Karla ×4 — solar-punk and riso-flood get new displays
  ['src/designs/wave8.ts', 'solar-punk', "displayFont: 'Fraunces'", "displayFont: 'Young Serif'"],
  ['src/designs/maximalism.ts', 'riso-flood', "displayFont: 'Fraunces'", "displayFont: 'Bricolage Grotesque'"],
  // break Fraunces + IBM Plex Sans ×3
  ['src/designs/luxury.ts', 'dark-luxury', "displayFont: 'Fraunces'", "displayFont: 'Bodoni Moda'"],
  // break Playfair Display + Source Sans 3 ×3
  ['src/designs/wave5.ts', 'deadline-gazette', "displayFont: 'Playfair Display'", "displayFont: 'DM Serif Display'"],
  // break Baloo 2 + Nunito ×3
  ['src/designs/wave5.ts', 'async-rally', "displayFont: 'Baloo 2'", "displayFont: 'Outfit'"],
  // break Cormorant Garamond + EB Garamond ×3
  ['src/designs/wave5.ts', 'gilded-hour', "displayFont: 'Cormorant Garamond'", "displayFont: 'Marcellus'"],
]

/* Round 2 — palette neighbours still inside the taste threshold. */
const HEX2 = [
  ['src/designs/maximalism.ts', 'collision-course', '#ff5da2', '#f72585'], // magenta, not the other pink
  ['src/designs/wave8.ts', 'noir-dossier', '#1c1a17', '#33261c'], // warm brown-black dossier ink
  ['src/designs/craft.ts', 'arco-grid', '#0e7490', '#3730a3'], // indigo, not clinical teal
  ['src/designs/elemental.ts', 'ink-wash', '#1c1a17', '#23292e'], // blue-black sumi ink
  ['src/designs/wave9.ts', 'auction-house', '#f7f5f1', '#f1ece2'], // older gallery paper
  ['src/designs/wave9.ts', 'auction-house', '#ebe6dc', '#e2dacb'],
  ['src/designs/homestyle.ts', 'frontier-western', '#b33a2c', '#7d3320'], // dusted oxblood, not lantern lacquer
  ['src/designs/wave9.ts', 'philatelic-album', '#b5372f', '#7a2231'], // stamp maroon
  ['src/designs/wave6.ts', 'zoetrope', '#e2d9c8', '#ddd9d2'], // cooler stock, away from goldsmith brown
  ['src/designs/wave6.ts', 'zoetrope', '#f3efe7', '#f1f0ec'],
  ['src/designs/wave6.ts', 'deed-office', '#e7e0d2', '#e6e3da'], // greyer registry paper
  ['src/designs/wave6.ts', 'deed-office', '#f6f2ea', '#f4f2ed'],
]

function applyTable(table, label) {
  let changes = 0
  for (const [file, id, from, to] of table) {
    const src = read(file)
    const b = blockOf(src, id)
    if (!b) {
      console.log(`  !! ${id} not found in ${file}`)
      continue
    }
    const hits = b.text.split(from).length - 1
    if (!hits) {
      console.log(`  -- ${id}: "${from}" not present (already fixed?)`)
      continue
    }
    const nextText = b.text.split(from).join(to)
    const next = src.slice(0, b.start) + nextText + src.slice(b.end)
    if (!dry) write(file, next)
    console.log(`  ok ${id}: "${from}" → "${to}" (${hits}×)`)
    changes += hits
  }
  console.log(`${label}: ${changes} replacement(s)${dry ? ' (dry run)' : ''}`)
  return changes
}

applyTable(HEX, 'Hex re-inks')
applyTable(HEX2, 'Hex re-inks (round 2)')
applyTable(MOTIFS, 'Motif swaps')
applyTable(TYPES, 'Type-pair swaps')
