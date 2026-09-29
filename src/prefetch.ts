/**
 * Intent prefetching.
 *
 * Every heavy surface in the vault is already code-split, which means the first
 * click on it pays for a download. These helpers let the *intent* pay instead:
 * hovering a card, a view button, or a palette result warms the chunk that the
 * click would need, so the surface opens with no loading state at all.
 *
 * Each loader is memoised, so hovering forty cards starts exactly one request
 * per chunk. Failures are ignored — a prefetch must never surface an error, and
 * the real import will retry if the user actually opens the surface.
 */

function once(load: () => Promise<unknown>): () => void {
  let started: Promise<unknown> | null = null
  return () => {
    if (!started) started = load().catch(() => undefined)
  }
}

/** Preview modal + the full-page MiniSite it renders. */
export const prefetchPreview = once(() => Promise.all([import('./components/Preview'), import('./components/MiniSite')]))

/** The pattern library board (the largest lazy chunk). */
export const prefetchPatterns = once(() => import('./patterns/PatternView'))

/** The component kit explorer + the kit itself. */
export const prefetchKit = once(() => Promise.all([import('./components/KitExplorer'), import('./components/ComponentKit')]))

/** Warm whichever surface a view button points at. */
export function prefetchView(view: 'designs' | 'patterns' | 'components'): void {
  if (view === 'patterns') prefetchPatterns()
  else if (view === 'components') prefetchKit()
  else prefetchPreview()
}
