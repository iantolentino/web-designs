/* Generate src/designs/uniqueConcepts.ts
 *
 *   node scripts/generate-unique-concepts.cjs
 *
 * Wave 20–23 shipped 415 designs built from only 50 business concepts. This
 * script keeps one design per concept and re-themes the rest from the
 * 21-industry pool in scripts/concept-pool.cjs. It rewrites only identity and
 * copy: name, tags, website types, hero line, description, philosophy and
 * accent role. Palette, typography, motif, layout, radius, depth and author stay untouched,
 * so every design keeps the visual identity it already earned.
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execSync } = require('child_process')
const { INDUSTRIES } = require('./concept-pool.cjs')

const abs = (p) => path.resolve(p).replace(/\\/g, '/')
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-concepts-'))
const entry = path.join(tmp, 'entry.ts')
const bundle = path.join(tmp, 'bundle.cjs')

fs.writeFileSync(
  entry,
  `import { DESIGN_SYSTEMS } from '${abs('src/designs/index')}'
console.log(JSON.stringify(DESIGN_SYSTEMS.map((d) => ({
  id: d.id, name: d.name, category: d.category, tags: d.tags,
  useCases: d.useCases, hero: d.hero ?? '', description: d.description,
  createdAt: d.createdAt ?? '',
}))))`,
)

let designs
try {
  execSync(
    `npx esbuild "${entry}" --bundle --platform=node --format=cjs --target=node20 --log-level=error --outfile="${bundle}"`,
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  designs = JSON.parse(execSync(`node "${bundle}"`, { encoding: 'utf8' }))
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}

const ROMAN = /\s+(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII)$/
const WAVE = /-w\d+(-\d+)?$/
const stem = (d) => d.name.replace(ROMAN, '').replace(WAVE, '').trim()

/* Group by the original concept slug carried in the id (rice-house-paper-w21-3
   → rice-house). Using the id keeps the generator idempotent: names may already
   have been re-themed by a previous run. */
const conceptKey = (d) => {
  const m = d.id.match(/^(.*?)-(?:town|paper|care|mover)-w\d+(?:-\d+)?$/)
  return m ? m[1] : stem(d)
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

/* ---------- which designs need a new concept ---------- */
const groups = new Map()
for (const d of designs) {
  const k = conceptKey(d)
  if (!groups.has(k)) groups.set(k, [])
  groups.get(k).push(d)
}
const keep = new Set()
const reTheme = []
for (const [, list] of groups) {
  list.sort((a, b) => a.id.localeCompare(b.id))
  keep.add(list[0].id)
  for (const d of list.slice(1)) reTheme.push(d)
}
reTheme.sort((a, b) => a.id.localeCompare(b.id))
const reThemeIds = new Set(reTheme.map((d) => d.id))

/* ---------- build an interleaved pool: one from each industry, repeatedly ---------- */
const pool = []
for (let i = 0; i < 18; i++) {
  for (const ind of INDUSTRIES) pool.push({ ind, index: i })
}
if (reTheme.length > pool.length) {
  throw new Error(`pool has ${pool.length} concepts but ${reTheme.length} designs need one`)
}

/* ---------- uniqueness helpers ---------- */
const usedNames = new Set(designs.filter((d) => !reThemeIds.has(d.id)).map((d) => norm(d.name)))
const usedHeroes = new Set(designs.filter((d) => !reThemeIds.has(d.id)).map((d) => norm(d.hero)))
const usedDescriptions = new Set(designs.filter((d) => !reThemeIds.has(d.id)).map((d) => norm(d.description)))

const CATEGORY_ADJ = {
  Minimalism: 'quiet, restrained',
  Maximalism: 'layered, loud',
  Brutalism: 'structural, unadorned',
  Luxury: 'considered, generous',
  Playful: 'hands-on, bright',
  Retro: 'period-correct, warm',
  Organic: 'grounded, natural',
  Professional: 'rigorous, plain-spoken',
  Creative: 'expressive, editorial',
  Print: 'tactile, ink-led',
  Futuristic: 'forward-looking, precise',
}

const clean = (s) => s.replace(/\s+/g, ' ').trim()

/* ---------- build overrides ---------- */
const out = []
for (let i = 0; i < reTheme.length; i++) {
  const d = reTheme[i]
  const { ind, index } = pool[i]

  /* Name: pool name, nudged only if it collides with a name that ships. */
  let name = ind.names[index]
  const suffixes = ['Studio', 'Works', 'House', 'Office', 'Collective']
  if (usedNames.has(norm(name))) {
    name = `${name} ${suffixes[i % suffixes.length]}`
  }
  let bump = 2
  while (usedNames.has(norm(name))) {
    name = `${ind.names[index]} ${suffixes[bump % suffixes.length]} ${bump}`
    bump++
  }
  usedNames.add(norm(name))

  /* Tags: industry vocabulary plus the concept's own specialty. */
  const tags = [...new Set([ind.specialties[index], ...ind.tags.split(' ')])].slice(0, 6)

  /* Website types: keep the industry's primary type first, then rotate the
     supporting types so neighbouring designs differ without a freight company
     being filed under E-commerce. */
  const useCases = [ind.useCases[0]]
  for (let k = 1; useCases.length < 3 && k <= ind.useCases.length; k++) {
    const next = ind.useCases[(index + k) % ind.useCases.length]
    if (!useCases.includes(next)) useCases.push(next)
  }

  /* Hero: every template contains {name}, so uniqueness is structural. */
  const heroTpl = ind.heroes[(i * 3 + index) % ind.heroes.length]
  let hero = clean(heroTpl.replace(/\{name\}/g, name))
  if (usedHeroes.has(norm(hero))) {
    hero = `${hero.replace(/\.$/, '')} — ${ind.specialties[index]} handled properly.`
  }
  usedHeroes.add(norm(hero))

  /* Description: the industry's note plus the specialty. Name appears when the
     sentence would otherwise collide with another design in the same industry. */
  const adj = CATEGORY_ADJ[d.category] ?? 'complete'
  const note = ind.notes[(i + index) % ind.notes.length]
  let description = clean(`${note}. A ${adj} system for ${ind.specialties[index]}.`)
  if (usedDescriptions.has(norm(description))) {
    description = clean(`${name}: ${description}`)
  }
  usedDescriptions.add(norm(description))

  /* Philosophy: replace the original concept's craft story so a re-themed
     business does not keep talking about flour, crates or shop counters. */
  const philosophy = clean(
    `${name} treats ${ind.specialties[index]} as a design problem, not a theme. ` +
    `${note}. Every page keeps ${tags[0]} and ${tags[1] ?? tags[0]} visible; the rest can stay quiet.`,
  )

  out.push({
    id: d.id,
    name,
    tags,
    useCases,
    hero,
    description,
    philosophy,
    accentRole: `${ind.specialties[index]} that needs a second look`,
    industry: ind.key,
  })
}

/* ---------- emit ---------- */
const lines = out.map((o) =>
  `  ${JSON.stringify(o.id)}: ${JSON.stringify({
    name: o.name,
    tags: o.tags,
    useCases: o.useCases,
    hero: o.hero,
    description: o.description,
    philosophy: o.philosophy,
    accentRole: o.accentRole,
  })},`,
)

const file = `/**
 * Unique concepts for the designs that wave 20–23 duplicated.
 *
 * GENERATED by scripts/generate-unique-concepts.cjs from
 * scripts/concept-pool.cjs. Do not hand-edit: re-run the generator.
 *
 * ${out.length} designs re-themed across ${new Set(out.map((o) => o.industry)).size} industries.
 * One design per original concept keeps its name; the rest get a different
 * business, different tags, different website types, and their own copy.
 */
import type { UseCase } from '../types'

export interface UniqueConcept {
  name: string
  tags: string[]
  useCases: UseCase[]
  hero: string
  description: string
  philosophy: string
  accentRole: string
}

export const UNIQUE_CONCEPTS: Record<string, UniqueConcept> = {
${lines.join('\n')}
}
`

fs.writeFileSync('src/designs/uniqueConcepts.ts', file)
console.log(`Re-themed ${out.length} designs across ${new Set(out.map((o) => o.industry)).size} industries.`)
const names = new Set(out.map((o) => norm(o.name)))
console.log(`unique re-themed names: ${names.size}/${out.length}`)
console.log(`unique re-themed heroes: ${new Set(out.map((o) => norm(o.hero))).size}/${out.length}`)
console.log(`wrote src/designs/uniqueConcepts.ts`)
