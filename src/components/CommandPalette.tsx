import { lazy, Suspense, useEffect } from 'react'
import { useStore } from '../store'

// The palette's index spans all three surfaces, so it drags in the pattern
// library and the kit registry — two of the largest modules in the app. It is
// therefore its own chunk, fetched the first time ⌘K is pressed.
const PaletteSearch = lazy(() => import('./PaletteSearch').then((m) => ({ default: m.PaletteSearch })))

/**
 * Global command palette (⌘K / Ctrl+K).
 *
 * One field that reaches every surface — 216 designs, the pattern library, the
 * component kit — plus the handful of actions you would otherwise hunt for in
 * the sidebar. This shell stays tiny so it can live in the entry chunk; the
 * search index arrives with the first keypress.
 */
export function CommandPalette() {
  const paletteOpen = useStore((s) => s.paletteOpen)
  const setPalette = useStore((s) => s.setPalette)

  useEffect(() => {
    if (!paletteOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [paletteOpen])

  if (!paletteOpen) return null

  return (
    <div className="palette-backdrop" onClick={() => setPalette(false)}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Search the whole vault"
        onClick={(e) => e.stopPropagation()}
      >
        <Suspense fallback={<p className="palette-loading">Building the search index…</p>}>
          <PaletteSearch onClose={() => setPalette(false)} />
        </Suspense>
      </div>
    </div>
  )
}
