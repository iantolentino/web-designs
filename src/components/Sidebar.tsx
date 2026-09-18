import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore, type QuickFilter, type View } from '../store'
import { DESIGN_SYSTEMS } from '../designs'
import { CATEGORY_ORDER, categoryAccent } from '../designs/theme'
import { useCaseStats } from '../designs/usecases'
import { USE_CASE_GROUPS, USE_CASE_ICON, type Category, type UseCase } from '../types'
import { PATTERNS, PATTERN_FAMILIES } from '../patterns/patterns'
import { KIT_GROUPS, KIT_SIZE } from './ComponentKit'

const QUICK_FILTERS: { key: QuickFilter; label: string }[] = [
  { key: 'popular', label: 'Most popular' },
  { key: 'latest', label: 'Latest added' },
  { key: 'trending', label: 'Trending now' },
]

const VIEWS: { id: View; label: string; icon: string; blurb: string }[] = [
  { id: 'designs', label: 'Design systems', icon: '◈', blurb: `${DESIGN_SYSTEMS.length} complete systems` },
  { id: 'patterns', label: 'Pattern library', icon: '▤', blurb: `${PATTERNS.length} production layouts` },
  { id: 'components', label: 'Component kit', icon: '⬡', blurb: `${KIT_SIZE} components per design` },
]

export function Sidebar({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
  const view = useStore((s) => s.view)
  const setView = useStore((s) => s.setView)
  const sidebarOpen = useStore((s) => s.sidebarOpen)
  const toggleSidebar = useStore((s) => s.toggleSidebar)

  const searchQuery = useStore((s) => s.searchQuery)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const selectedCategory = useStore((s) => s.selectedCategory)
  const toggleCategory = useStore((s) => s.toggleCategory)
  const selectedUseCase = useStore((s) => s.selectedUseCase)
  const toggleUseCase = useStore((s) => s.toggleUseCase)
  const quickFilter = useStore((s) => s.quickFilter)
  const setQuickFilter = useStore((s) => s.setQuickFilter)
  const clearFilters = useStore((s) => s.clearFilters)
  const favorites = useStore((s) => s.favorites)

  const patternSearch = useStore((s) => s.patternSearch)
  const setPatternSearch = useStore((s) => s.setPatternSearch)
  const patternFamily = useStore((s) => s.patternFamily)
  const togglePatternFamily = useStore((s) => s.togglePatternFamily)

  const kitDesignId = useStore((s) => s.kitDesignId)
  const setKitDesignId = useStore((s) => s.setKitDesignId)
  const kitGroup = useStore((s) => s.kitGroup)
  const toggleKitGroup = useStore((s) => s.toggleKitGroup)
  const kitSearch = useStore((s) => s.kitSearch)
  const setKitSearch = useStore((s) => s.setKitSearch)

  const favOnly = useStore((s) => s.favOnly)
  const toggleFavOnly = useStore((s) => s.toggleFavOnly)
  const [typePickerOpen, setTypePickerOpen] = useState(false)
  const [typeQuery, setTypeQuery] = useState('')
  const typeRef = useRef<HTMLDivElement>(null)

  const stats = useMemo(() => {
    const map = new Map(useCaseStats().map((s) => [s.useCase, s.count]))
    return map
  }, [])

  const patternCounts = useMemo(() => {
    const m = new Map<string, number>()
    for (const p of PATTERNS) m.set(p.family, (m.get(p.family) ?? 0) + 1)
    return m
  }, [])

  // Close the type picker on outside click / Escape.
  useEffect(() => {
    if (!typePickerOpen) return
    const onDown = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypePickerOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTypePickerOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [typePickerOpen])

  const groupedTypes = useMemo(() => {
    const q = typeQuery.trim().toLowerCase()
    return USE_CASE_GROUPS.map((g) => ({
      ...g,
      items: g.items.filter((u) => !q || u.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0)
  }, [typeQuery])

  const activeFilterCount =
    Number(!!searchQuery) + Number(!!selectedCategory) + Number(!!selectedUseCase) +
    Number(!!quickFilter) + Number(favOnly) + Number(patternFamily ? 1 : 0) +
    Number(!!patternSearch) + Number(!!kitGroup)

  const searchValue =
    view === 'designs' ? searchQuery : view === 'patterns' ? patternSearch : kitSearch
  const setSearch =
    view === 'designs' ? setSearchQuery : view === 'patterns' ? setPatternSearch : setKitSearch

  const searchPlaceholder =
    view === 'designs'
      ? 'Search systems, tags, philosophy…'
      : view === 'patterns'
        ? `Search ${PATTERNS.length} layouts…`
        : `Search ${KIT_SIZE} components…`

  return (
    <>
      <div
        className={`sidebar-scrim ${sidebarOpen ? 'on' : ''}`}
        onClick={() => toggleSidebar(false)}
        aria-hidden
      />
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} aria-label="Vault navigation">
        <div className="sidebar-head">
          <h1 className="brand">
            The Design <em>Vault</em>
          </h1>
          <button
            className="sidebar-close"
            onClick={() => toggleSidebar(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>
        <p className="sidebar-tag">
          {DESIGN_SYSTEMS.length} design systems · {PATTERNS.length} patterns · zero AI slop
        </p>

        <label className="sidebar-search">
          <span aria-hidden>⌕</span>
          <input
            className="search-input"
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
          {searchValue && (
            <button onClick={() => setSearch('')} aria-label="Clear search" className="sidebar-search-clear">
              ✕
            </button>
          )}
        </label>

        <nav className="sidebar-views" aria-label="Views">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              className={`sidebar-view ${view === v.id ? 'on' : ''}`}
              onClick={() => setView(v.id)}
              aria-current={view === v.id}
            >
              <span className="sidebar-view-ic" aria-hidden>{v.icon}</span>
              <span className="sidebar-view-text">
                <strong>{v.label}</strong>
                <em>{v.blurb}</em>
              </span>
              {view === v.id && <span className="sidebar-view-dot" aria-hidden />}
            </button>
          ))}
        </nav>

        <div className="sidebar-scroll">
          {view === 'designs' && (
            <>
              <section className="sidebar-block">
                <h2 className="sidebar-h">Website type</h2>
                <div className="type-picker" ref={typeRef}>
                  <button
                    className={`type-trigger ${selectedUseCase ? 'on' : ''}`}
                    onClick={() => setTypePickerOpen((o) => !o)}
                    aria-expanded={typePickerOpen}
                    aria-haspopup="listbox"
                  >
                    <span aria-hidden>{selectedUseCase ? USE_CASE_ICON[selectedUseCase as UseCase] : '◆'}</span>
                    <span className="type-trigger-label">
                      {selectedUseCase ?? 'Any website type'}
                    </span>
                    {selectedUseCase ? (
                      <span
                        className="type-trigger-clear"
                        role="button"
                        tabIndex={0}
                        aria-label="Clear website type"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleUseCase(selectedUseCase)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.stopPropagation()
                            toggleUseCase(selectedUseCase)
                          }
                        }}
                      >
                        ✕
                      </span>
                    ) : (
                      <span className="type-trigger-caret" aria-hidden>▾</span>
                    )}
                  </button>

                  {typePickerOpen && (
                    <div className="type-panel" role="listbox" aria-label="Website type">
                      <div className="type-panel-search">
                        <input
                          autoFocus
                          type="search"
                          placeholder={`Filter ${stats.size} types…`}
                          value={typeQuery}
                          onChange={(e) => setTypeQuery(e.target.value)}
                          aria-label="Filter website types"
                        />
                      </div>
                      <div className="type-panel-list">
                        {groupedTypes.map((g) => (
                          <div key={g.label} className="type-group">
                            <span className="type-group-label">{g.label}</span>
                            {g.items.map((u) => {
                              const n = stats.get(u) ?? 0
                              const on = selectedUseCase === u
                              return (
                                <button
                                  key={u}
                                  role="option"
                                  aria-selected={on}
                                  className={`type-item ${on ? 'on' : ''}`}
                                  onClick={() => {
                                    toggleUseCase(u)
                                    setTypePickerOpen(false)
                                  }}
                                >
                                  <span className="type-item-ic" aria-hidden>{USE_CASE_ICON[u]}</span>
                                  <span className="type-item-label">{u}</span>
                                  <span className="type-item-n">{n}</span>
                                </button>
                              )
                            })}
                          </div>
                        ))}
                        {groupedTypes.length === 0 && (
                          <p className="type-empty">No website type matches “{typeQuery}”.</p>
                        )}
                      </div>
                      <div className="type-panel-foot">
                        <span>{stats.size} types · every one filters to real designs</span>
                      </div>
                    </div>
                  )}
                </div>
                {selectedUseCase && (
                  <button className="sidebar-mini-link" onClick={() => toggleUseCase(selectedUseCase)}>
                    Clear type filter
                  </button>
                )}
              </section>

              <section className="sidebar-block">
                <h2 className="sidebar-h">Categories</h2>
                <div className="sidebar-list">
                  {CATEGORY_ORDER.map((c: Category) => {
                    const count = DESIGN_SYSTEMS.filter((d) => d.category === c).length
                    return (
                      <button
                        key={c}
                        className={`sidebar-item ${selectedCategory === c ? 'on' : ''}`}
                        onClick={() => toggleCategory(c)}
                      >
                        <span className="sidebar-dot" style={{ background: categoryAccent(c) }} />
                        <span className="sidebar-item-label">{c}</span>
                        <span className="sidebar-item-n">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </section>

              <section className="sidebar-block">
                <h2 className="sidebar-h">Sort &amp; saved</h2>
                <div className="sidebar-list">
                  {QUICK_FILTERS.map(({ key, label }) => (
                    <button
                      key={key}
                      className={`sidebar-item ${quickFilter === key ? 'on' : ''}`}
                      onClick={() => setQuickFilter(key)}
                    >
                      <span className="sidebar-item-label">{label}</span>
                      <span className="sidebar-item-n">{quickFilter === key ? 'on' : ''}</span>
                    </button>
                  ))}
                  <button className={`sidebar-item ${favOnly ? 'on' : ''}`} onClick={toggleFavOnly}>
                    <span className="sidebar-item-label">♥ Favorites only</span>
                    <span className="sidebar-item-n">{favorites.length}</span>
                  </button>
                </div>
              </section>
            </>
          )}

          {view === 'patterns' && (
            <section className="sidebar-block">
              <h2 className="sidebar-h">Families</h2>
              <div className="sidebar-list">
                {PATTERN_FAMILIES.map((f) => (
                  <button
                    key={f.id}
                    className={`sidebar-item ${patternFamily === f.id ? 'on' : ''}`}
                    onClick={() => togglePatternFamily(f.id)}
                    title={f.blurb}
                  >
                    <span className="sidebar-item-label">{f.label}</span>
                    <span className="sidebar-item-n">{patternCounts.get(f.id) ?? 0}</span>
                  </button>
                ))}
              </div>
              <p className="sidebar-note">
                Every layout is a unique canvas arrangement — grid areas, stacks, rails, and overlaps —
                composed from shared production blocks.
              </p>
            </section>
          )}

          {view === 'components' && (
            <>
              <section className="sidebar-block">
                <h2 className="sidebar-h">Design</h2>
                <select
                  className="sidebar-select"
                  value={kitDesignId ?? DESIGN_SYSTEMS[0].id}
                  onChange={(e) => setKitDesignId(e.target.value)}
                  aria-label="Design system for the component kit"
                >
                  {CATEGORY_ORDER.map((c) => (
                    <optgroup key={c} label={c}>
                      {DESIGN_SYSTEMS.filter((d) => d.category === c).map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <p className="sidebar-note">
                  The kit is identical everywhere. Only the tokens change — which is the whole point.
                </p>
              </section>
              <section className="sidebar-block">
                <h2 className="sidebar-h">Component groups</h2>
                <div className="sidebar-list">
                  {KIT_GROUPS.map((g) => (
                    <button
                      key={g.id}
                      className={`sidebar-item ${kitGroup === g.id ? 'on' : ''}`}
                      onClick={() => toggleKitGroup(g.id)}
                      title={g.blurb}
                    >
                      <span className="sidebar-item-label">{g.label}</span>
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>

        <div className="sidebar-foot">
          {activeFilterCount > 0 && (
            <button
              className="sidebar-clear"
              onClick={() => {
                clearFilters()
                if (patternFamily) togglePatternFamily(patternFamily)
                if (kitGroup) toggleKitGroup(kitGroup)
                setPatternSearch('')
                setKitSearch('')
              }}
            >
              Clear {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''}
            </button>
          )}
          <button
            className="sidebar-theme"
            onClick={onToggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span aria-hidden>{theme === 'light' ? '☾' : '☀'}</span>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <p className="sidebar-keys">
            <kbd>/</kbd> search · <kbd>Esc</kbd> close · <kbd>←</kbd><kbd>→</kbd> navigate
          </p>
        </div>
      </aside>
    </>
  )
}
