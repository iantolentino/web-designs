import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { useStore, type QuickFilter } from './store'
import { DESIGN_SYSTEMS } from './designs'
import { sortSystems } from './designs/theme'
import { matchesUseCase, useCasesOf } from './designs/usecases'
import { USE_CASE_ICON, type UseCase } from './types'
import { Gallery } from './components/Gallery'
import { Sidebar } from './components/Sidebar'
import { PATTERN_COUNT, KIT_COUNT, PATTERN_FAMILIES, type PatternFamily } from './meta'
import { useToast, useUrlSync, useKeyboardShortcuts } from './hooks'

// Each of these is a full surface (or a ~110 kB component library) that the
// gallery-first landing page has no use for — split them out of the initial
// bundle and fetch only when the user actually opens them.
const Preview = lazy(() => import('./components/Preview').then((m) => ({ default: m.Preview })))
const PatternBoard = lazy(() => import('./patterns/PatternView').then((m) => ({ default: m.PatternBoard })))
const KitExplorer = lazy(() => import('./components/KitExplorer').then((m) => ({ default: m.KitExplorer })))

const ViewFallback = ({ label }: { label: string }) => (
  <div style={{ padding: 60, textAlign: 'center', color: '#777' }}>Loading {label}…</div>
)

const QUICK_LABEL: Record<QuickFilter, string> = {
  popular: 'Most popular',
  latest: 'Latest added',
  trending: 'Trending now',
}

const VIEW_TITLE = {
  designs: {
    h: 'Design systems',
    p: 'Complete, opinionated systems — tokens, components, motion, and the rules that hold them together.',
  },
  patterns: {
    h: 'Pattern library',
    p: `${PATTERN_COUNT} production-grade layouts and styles. Each is a unique arrangement of shared, practical UI blocks.`,
  },
  components: {
    h: 'Component kit',
    p: `${KIT_COUNT} interactive components, re-skinned for every design system by nothing but its tokens.`,
  },
} as const

export default function App() {
  useUrlSync()
  useKeyboardShortcuts()
  const { toast } = useToast()

  const view = useStore((s) => s.view)
  const toggleSidebar = useStore((s) => s.toggleSidebar)

  const searchQuery = useStore((s) => s.searchQuery)
  const selectedCategory = useStore((s) => s.selectedCategory)
  const selectedUseCase = useStore((s) => s.selectedUseCase)
  const quickFilter = useStore((s) => s.quickFilter)
  const favorites = useStore((s) => s.favorites)
  const favOnly = useStore((s) => s.favOnly)
  const selectedId = useStore((s) => s.selectedId)

  const patternSearch = useStore((s) => s.patternSearch)
  const patternFamily = useStore((s) => s.patternFamily)

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('design-vault-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('design-vault-theme', theme)
  }, [theme])

  /**
   * Design filtering. Website types resolve through the derived index, so
   * every option in the sidebar picker yields a real, non-empty result set.
   */
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    const list = DESIGN_SYSTEMS.filter((d) => {
      if (selectedCategory && d.category !== selectedCategory) return false
      if (selectedUseCase && !matchesUseCase(d, selectedUseCase)) return false
      if (favOnly && !favorites.includes(d.id)) return false
      if (!q) return true
      const haystack = [
        d.name,
        d.category,
        d.description,
        d.designPhilosophy,
        d.designDetails,
        d.layout,
        ...d.tags,
        ...useCasesOf(d),
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
    return sortSystems(list, quickFilter)
  }, [searchQuery, selectedCategory, quickFilter, favOnly, favorites, selectedUseCase])

  const previewIds = useMemo(() => filtered.map((d) => d.id), [filtered])
  const hasActiveFilters =
    !!(searchQuery || selectedCategory || quickFilter || favOnly || selectedUseCase)
  const meta = VIEW_TITLE[view]

  return (
    <div className="app-shell">
      <Sidebar theme={theme} onToggleTheme={() => setTheme((c) => (c === 'light' ? 'dark' : 'light'))} />

      <div className="app-main">
        <header className="topbar">
          <button className="sidebar-toggle" onClick={() => toggleSidebar(true)} aria-label="Open navigation">
            ☰
          </button>
          <div className="topbar-text">
            <h2 className="topbar-title">{meta.h}</h2>
            <p className="topbar-sub">{meta.p}</p>
          </div>

          <div className="topbar-meta">
            {view === 'designs' && (
              <>
                <span className="result-count">
                  <strong>{filtered.length}</strong> of {DESIGN_SYSTEMS.length} designs
                </span>
                {selectedCategory && <span className="meta-chip">{selectedCategory}</span>}
                {selectedUseCase && (
                  <span className="meta-chip">
                    <span aria-hidden>{USE_CASE_ICON[selectedUseCase as UseCase]}</span> {selectedUseCase}
                  </span>
                )}
                {quickFilter && <span className="meta-chip">{QUICK_LABEL[quickFilter]}</span>}
                {favOnly && <span className="meta-chip">♥ Favorites</span>}
                {hasActiveFilters && <span className="topbar-hint">Clear filters from the sidebar</span>}
              </>
            )}
            {view === 'patterns' && (
              <>
                <span className="result-count">
                  <strong>{PATTERN_COUNT}</strong> layouts · {PATTERN_FAMILIES.length} families
                </span>
                {patternFamily && (
                  <span className="meta-chip">
                    {PATTERN_FAMILIES.find((f) => f.id === patternFamily)?.label ?? patternFamily}
                  </span>
                )}
              </>
            )}
            {view === 'components' && (
              <span className="result-count">
                <strong>{KIT_COUNT}</strong> components × {DESIGN_SYSTEMS.length} designs
              </span>
            )}
          </div>
        </header>

        {view === 'designs' && <Gallery systems={filtered} />}
        {view === 'patterns' && (
          <Suspense fallback={<ViewFallback label="pattern library" />}>
            <PatternBoard search={patternSearch} family={patternFamily as PatternFamily | null} />
          </Suspense>
        )}
        {view === 'components' && (
          <Suspense fallback={<ViewFallback label="component kit" />}>
            <KitExplorer />
          </Suspense>
        )}

        <footer className="app-footer">
          <strong>The Design Vault</strong> — reference real systems, borrow real layouts, copy the prompt, kill
          AI slop.
          <br />
          Shortcuts: <kbd>/</kbd> search · <kbd>Esc</kbd> close/clear · <kbd>←</kbd>/<kbd>→</kbd> navigate ·{' '}
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> copy prompt
        </footer>
      </div>

      {selectedId && (
        <Suspense fallback={<ViewFallback label="preview" />}>
          <Preview ids={previewIds} />
        </Suspense>
      )}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <span className="check">✓</span> {toast.replace('✓ ', '')}
        </div>
      )}
    </div>
  )
}
