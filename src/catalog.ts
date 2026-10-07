import { create } from 'zustand'
import type { DesignSystem } from './types'
import { primeUseCaseIndex } from './designs/usecases'

/**
 * The catalog registry.
 *
 * The design data (`src/designs/*`) is the largest thing this app ships — more
 * than three quarters of the entry bundle — but the shell (topbar, sidebar,
 * search, theme) has no use for it until the first card is on screen. So the
 * data module is loaded through a dynamic `import()` right after startup:
 * the shell paints immediately, the catalog streams in behind it, and the
 * main thread never blocks on parsing ~1 MB of JavaScript before first paint.
 *
 * Every consumer reads the catalog from this small store (zustand, already a
 * dependency) instead of importing the data module directly, which is what
 * keeps it out of the entry chunk. Nothing else changes: once `ready` is true
 * the store holds the same array the data module exports.
 *
 * Scripts (verify/audit) run outside the browser and cannot await a dynamic
 * import before their assertions, so they call `registerCatalog` with the
 * statically imported systems and everything downstream behaves identically.
 */

interface CatalogState {
  systems: DesignSystem[]
  byId: Map<string, DesignSystem>
  ready: boolean
  failed: boolean
}

export const useCatalog = create<CatalogState>(() => ({
  systems: [],
  byId: new Map(),
  ready: false,
  failed: false,
}))

/** Install a catalog directly — used by the build-time verification scripts. */
export function registerCatalog(systems: DesignSystem[]): void {
  useCatalog.setState({ systems, byId: new Map(systems.map((d) => [d.id, d])), ready: true, failed: false })
}

let inflight: Promise<void> | null = null

/**
 * Fetch the design catalog. Idempotent: the first call starts the import, every
 * later call (and every hover prefetch) joins the same promise.
 */
export function loadCatalog(): Promise<void> {
  if (inflight) return inflight
  inflight = import('./designs')
    .then((m) => {
      registerCatalog(m.DESIGN_SYSTEMS)
      // Build the website-type index now, synchronously.
      //
      // This used to be a dynamic import, on the theory that the index could be
      // warmed "off the critical path". It could not: App, Sidebar, Preview and
      // the kit explorer all import this module statically, so Vite never split
      // it out and the request ran on the same tick anyway.
      //
      // Synchronous is also the correct behaviour. Filtering consults the index
      // on the very next render, and the top-up pass *mutates* each design's
      // derived website types — so a filter that ran before the index existed
      // would return a different set than the same filter run after it.
      primeUseCaseIndex()
    })
    .catch((err) => {
      console.error('[design-vault] catalog failed to load', err)
      useCatalog.setState({ failed: true })
      inflight = null
    })
  return inflight
}

/** Synchronous read for event handlers (non-reactive callers). */
export function systemsOf(): DesignSystem[] {
  return useCatalog.getState().systems
}

/** Look a design up by id (undefined until the catalog lands). */
export function designById(id: string | null | undefined): DesignSystem | undefined {
  return id ? useCatalog.getState().byId.get(id) : undefined
}
