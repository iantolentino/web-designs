import { useEffect, useMemo, useState } from 'react'
import { useStore, type QuickFilter } from './store'
import { DESIGN_SYSTEMS } from './designs'
import { CATEGORY_ORDER, sortSystems, categoryAccent } from './designs/theme'
import type { Category } from './types'
import { USE_CASES } from './types'
import { Gallery } from './components/Gallery'
import { Preview } from './components/Preview'
import { useToast, useUrlSync, useKeyboardShortcuts } from './hooks'

const QUICK_FILTERS: { key: QuickFilter; label: string }[] = [
  { key: 'popular', label: '★ Most Popular' },
  { key: 'latest', label: '◷ Latest Added' },
  { key: 'trending', label: '▲ Trending' },
]

const USE_CASE_ICONS: Record<string, string> = {  SaaS: '⬡', Agency: '◈', Portfolio: '◐', 'E-commerce': '◍', Restaurant: '✿', Music: '♪', Fintech: '$', Health: '✚', Education: '✎', 'Real Estate': '⌂',
  Travel: '✈', Gaming: '♟', News: '❏', Events: '★', Nonprofit: '♥',
  'AI/ML': '◈', Crypto: '◈', Fashion: '✂', Fitness: '✦', Kids: '●',
  Productivity: '✓', Photography: '◉',
}

export default function App() {
  useUrlSync()
  useKeyboardShortcuts()
  const { toast } = useToast()

  const searchQuery = useStore((s) => s.searchQuery)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const selectedCategory = useStore((s) => s.selectedCategory)
  const toggleCategory = useStore((s) => s.toggleCategory)
  const quickFilter = useStore((s) => s.quickFilter)
  const setQuickFilter = useStore((s) => s.setQuickFilter)
  const clearFilters = useStore((s) => s.clearFilters)
  const selectedUseCase = useStore((s) => s.selectedUseCase)
  const toggleUseCase = useStore((s) => s.toggleUseCase)
  const selectedId = useStore((s) => s.selectedId)
  const favorites = useStore((s) => s.favorites)
  const [favOnly, setFavOnly] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('design-vault-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('design-vault-theme', theme)
  }, [theme])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    let list = DESIGN_SYSTEMS.filter((d) => {
      if (selectedCategory && d.category !== selectedCategory) return false
      if (selectedUseCase && !d.useCases.includes(selectedUseCase)) return false
      if (favOnly && !favorites.includes(d.id)) return false
      if (!q) return true
      const haystack = [d.name, d.category, d.description, d.designPhilosophy, ...d.tags, ...d.useCases]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
    if (quickFilter) list = sortSystems(list, quickFilter)
    else list = [...list].sort((a, b) => b.popularity - a.popularity)
    return list
  }, [searchQuery, selectedCategory, quickFilter, favOnly, favorites, selectedUseCase])

  const previewIds = filtered.map((d) => d.id)
  const hasActiveFilters = !!(searchQuery || selectedCategory || quickFilter || favOnly || selectedUseCase)
  const [useCaseOpen, setUseCaseOpen] = useState(false)

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="brand-row">
            <h1 className="brand">
              The Design <em>Vault</em>
            </h1>
            <span className="brand-sub">
              {DESIGN_SYSTEMS.length} production-grade design systems · zero AI slop
            </span>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-pressed={theme === 'dark'}
            >
              <span aria-hidden>{theme === 'light' ? '☾' : '☀'}</span>
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </button>
          </div>

          <div className="search-wrap">
            <span className="search-icon" aria-hidden>⌕</span>
            <input
              className="search-input"
              type="search"
              placeholder="Search designs, categories, tags… (press / to focus)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search design systems"
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                ✕
              </button>
            )}
          </div>

          <div className="usecase-bar">
            <span className="usecase-label">Building a:</span>
            <button
              className={`usecase-trigger ${selectedUseCase ? 'active' : ''}`}
              onClick={() => setUseCaseOpen((o) => !o)}
              aria-expanded={useCaseOpen}
            >
              {selectedUseCase ? `${USE_CASE_ICONS[selectedUseCase] ?? '◆'} ${selectedUseCase}` : 'Choose a website type…'} ▾
            </button>
            {selectedUseCase && (
              <span className="usecase-count">
                {DESIGN_SYSTEMS.filter((d) => d.useCases.includes(selectedUseCase)).length} matches
              </span>
            )}
            {useCaseOpen && (
              <>
                <div className="usecase-backdrop" onClick={() => setUseCaseOpen(false)} />
                <div className="usecase-menu" role="listbox" aria-label="Website type">
                  {USE_CASES.map((u) => {
                    const n = DESIGN_SYSTEMS.filter((d) => d.useCases.includes(u)).length
                    return (
                      <button
                        key={u}
                        role="option"
                        aria-selected={selectedUseCase === u}
                        className={`usecase-item ${selectedUseCase === u ? 'active' : ''} ${n === 0 ? 'empty' : ''}`}
                        onClick={() => { toggleUseCase(u); setUseCaseOpen(false) }}
                      >
                        <span className="usecase-ic" aria-hidden>{USE_CASE_ICONS[u] ?? '◆'}</span>
                        {u}
                        <span className="usecase-n">{n}</span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}
          </div>

          <div className="chip-row" role="group" aria-label="Filter by category">
            {CATEGORY_ORDER.map((c: Category) => {
              const count = DESIGN_SYSTEMS.filter((d) => d.category === c).length
              return (
                <button
                  key={c}
                  className={`chip ${selectedCategory === c ? 'active' : ''}`}
                  onClick={() => toggleCategory(c)}
                >
                  <span className="dot" style={{ background: categoryAccent(c) }} />
                  {c}
                  <span className="chip-count">{count}</span>
                </button>
              )
            })}
            <span style={{ width: 10 }} />
            {QUICK_FILTERS.map(({ key, label }) => (
              <button
                key={key}
                className={`chip chip-quick ${quickFilter === key ? 'active' : ''}`}
                onClick={() => setQuickFilter(key)}
              >
                {label}
              </button>
            ))}
            <button
              className={`chip chip-quick ${favOnly ? 'active' : ''}`}
              onClick={() => setFavOnly((f) => !f)}
            >
              ♥ Favorites{favorites.length ? ` (${favorites.length})` : ''}
            </button>
            {hasActiveFilters && (
              <button className="clear-btn" onClick={() => { clearFilters(); setFavOnly(false) }}>
                Clear all
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="result-meta">
        <span className="result-count">
          <strong>{filtered.length}</strong> of {DESIGN_SYSTEMS.length} designs
          {selectedCategory && <> · {selectedCategory}</>}
          {selectedUseCase && <> · for {selectedUseCase}</>}
          {quickFilter && <> · {QUICK_FILTERS.find((f) => f.key === quickFilter)?.label}</>}
        </span>
        {favOnly && <span className="fav-filter-note">Showing favorites only</span>}
      </div>

      <Gallery systems={filtered} />

      <footer className="app-footer">
        <strong>The Design Vault</strong> — reference real design systems, copy the prompt, kill AI slop.
        Shortcuts: <strong>/</strong> search · <strong>Esc</strong> close/clear · <strong>←/→</strong> navigate ·{' '}
        <strong>Ctrl+Shift+C</strong> copy prompt
      </footer>

      {selectedId && <Preview ids={previewIds} />}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <span className="check">✓</span> {toast.replace('✓ ', '')}
        </div>
      )}
    </>
  )
}
