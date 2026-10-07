import type { DesignDetails } from '../types'
import { derivedDetails } from './build'

/**
 * Preview prose, loaded on demand.
 *
 * The six fields in `DesignDetails` are read by nothing on the gallery or
 * thumbnail path — only the Preview's Details/Code tabs and the prompt copier.
 * In the hand-authored design files they are ~1.2 kB of literal prose each, and
 * they used to ride in the catalog chunk that every first paint waits on: a
 * third of the largest asset in the build for text most visitors never open.
 *
 * So they live in a separate module (`./details`), fetched the first time a
 * preview opens. Designs built through `sys()`/`row()` never had literals —
 * their prose is derived from the seed by build.ts — so this module answers for
 * both cases behind one call:
 *
 *   table[id]      → authored prose, once `loadDetails()` has resolved
 *   derivedDetails → derived prose, available immediately
 *
 * `detailsOf` therefore returns `undefined` only for authored designs whose
 * chunk has not arrived yet, which is what the preview's loading state covers.
 */

let table: Record<string, DesignDetails> | null = null
let inflight: Promise<void> | null = null

/** Prose for one design, or undefined until the authored table has loaded. */
export function detailsOf(id: string): DesignDetails | undefined {
  return table?.[id] ?? derivedDetails(id)
}

/** True once the authored table is available. */
export function detailsReady(): boolean {
  return table !== null
}

/**
 * Fetch the authored prose. Idempotent — every later call joins the same
 * request — and failures are non-fatal: the preview shows its loading state
 * rather than breaking.
 */
export function loadDetails(): Promise<void> {
  if (inflight) return inflight
  inflight = import('./details')
    .then((m) => {
      table = m.DESIGN_DETAILS
    })
    .catch((err) => {
      console.error('[design-vault] preview details failed to load', err)
      inflight = null
    })
  return inflight
}
