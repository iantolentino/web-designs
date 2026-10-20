import type { DesignSystem, PageSectionKind, PageStructure } from '../types'
import { layoutSetFor } from './extras'

/**
 * Structural differentiation.
 *
 * A catalog can have a thousand token sets and still look like twenty layouts
 * recolored. This module gives every design its own page skeleton: one of the
 * opener arrangements, a page chrome, a nav rhythm, and — most importantly — a
 * unique five-section content sequence drawn from eighteen section kinds.
 *
 * The sequence is assigned with a bijective permutation walk:
 *
 *   18P5 = 1,028,160 possible ordered sequences
 *   rank = (index * 7919 + 12345) mod 18P5
 *
 * 7919 is prime and shares no factor with 18P5, so the first 1,000 indexes
 * produce 1,000 distinct sequences. The signature includes the rest of the
 * structural choices, and `assignStructures` still resolves collisions for
 * safety. Typography, color, motif, radius and signature CSS are untouched.
 */

export const PAGE_SECTIONS: PageSectionKind[] = [
  'features',
  'split',
  'stats',
  'quote',
  'pricing',
  'testimonials',
  'faq',
  'cta',
  'form',
  'essay',
  'steps',
  'gallery',
  'table',
  'timeline',
  'catalog',
  'bento',
  'logos',
  'team',
]

const SECTION_COUNT = 5
const SEQUENCE_TOTAL = permutationCount(PAGE_SECTIONS.length, SECTION_COUNT)
const WALK = 7919
const OFFSET = 12345

function permutationCount(n: number, k: number): number {
  let out = 1
  for (let i = 0; i < k; i++) out *= n - i
  return out
}

function hashString(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Unrank an ordered k-permutation. rank must be in [0, P(n,k)). */
function unrankSequence(rank: number, k: number): PageSectionKind[] {
  const pool = [...PAGE_SECTIONS]
  const out: PageSectionKind[] = []
  let rest = rank
  for (let i = 0; i < k; i++) {
    const picksLeft = k - i - 1
    const block = permutationCount(pool.length - 1, picksLeft)
    const pick = Math.floor(rest / block)
    rest %= block
    out.push(pool.splice(pick, 1)[0])
  }
  return out
}

function structureForRank(d: DesignSystem, rank: number, salt = 0): PageStructure {
  const h = (hashString(d.id) + Math.imul(salt, 2654435761)) >>> 0
  const lh = (hashString(`${d.id}:layout`) + Math.imul(salt, 2246822519)) >>> 0
  const arrangements = layoutSetFor(d)
  const openerLayout = arrangements[lh % arrangements.length]
  const sections = unrankSequence(rank % SEQUENCE_TOTAL, SECTION_COUNT)
  const opener = h % 8
  const chrome = (h >>> 4) % 6
  const nav = (h >>> 8) % 6
  const footer = (h >>> 12) % 4
  const rhythm = (h >>> 16) % 6
  const columns = 2 + ((h >>> 20) % 3)
  const card = (h >>> 23) % 4
  return {
    layout: d.layout,
    openerLayout,
    opener,
    chrome,
    nav,
    footer,
    rhythm,
    columns,
    card,
    sections,
    signature: [
      d.layout,
      openerLayout,
      `o${opener}`,
      `c${chrome}`,
      `n${nav}`,
      `f${footer}`,
      `r${rhythm}`,
      `x${columns}`,
      `k${card}`,
      sections.join('>'),
    ].join('|'),
  }
}

/** The part of the signature a visitor sees before scrolling. */
export function topScreenKey(s: PageStructure): string {
  return `${s.openerLayout}|o${s.opener}|c${s.chrome}|n${s.nav}`
}

/**
 * Assign a structure to every design. The walk makes the section sequence
 * unique by construction; the set is a final guard in case two ranks are ever
 * used for the same design or a future change narrows the section pool.
 */
export function assignStructures(list: DesignSystem[]): DesignSystem[] {
  const used = new Set<string>()
  const usedTops = new Set<string>()
  const usedSequences = new Set<string>()
  return list.map((d, index) => {
    let salt = 0
    let structure = structureForRank(d, index * WALK + OFFSET)
    while (
      used.has(structure.signature) ||
      usedTops.has(topScreenKey(structure)) ||
      usedSequences.has(structure.sections.join('>'))
    ) {
      salt += 1
      structure = structureForRank(d, index * WALK + OFFSET + salt * WALK, salt)
    }
    used.add(structure.signature)
    usedTops.add(topScreenKey(structure))
    usedSequences.add(structure.sections.join('>'))
    return { ...d, structure }
  })
}

/** Read the assigned structure, or derive a deterministic fallback. */
export function pageStructure(d: DesignSystem): PageStructure {
  return d.structure ?? structureForRank(d, hashString(d.id) % SEQUENCE_TOTAL)
}
