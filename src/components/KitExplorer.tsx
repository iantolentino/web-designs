import { useMemo, useState } from 'react'
import { useStore } from '../store'
import { useCatalog } from '../catalog'
import { CATEGORY_ACCENT } from '../types'
import { themeOf, onColor } from '../designs/theme'
import { useCasesOf } from '../designs/usecases'
import { ComponentKit, KIT_GROUPS, KIT_ITEMS, type KitGroupId } from './ComponentKit'

/**
 * Component kit explorer.
 *
 * Pick any design system and see the full kit rendered from its tokens. The
 * kit never changes — that is the demonstration: one vocabulary, one
 * implementation, and the identity comes entirely from the token block.
 */
export function KitExplorer() {
  const kitDesignId = useStore((s) => s.kitDesignId)
  const setKitDesignId = useStore((s) => s.setKitDesignId)
  const kitGroup = useStore((s) => s.kitGroup)
  const toggleKitGroup = useStore((s) => s.toggleKitGroup)
  const kitSearch = useStore((s) => s.kitSearch)
  const setKitSearch = useStore((s) => s.setKitSearch)
  const openDesign = useStore((s) => s.openDesign)

  const [compareId, setCompareId] = useState<string | null>(null)

  // The catalog is loaded lazily (src/catalog.ts); until it lands this view
  // renders a small waiting state instead of throwing on an empty list.
  const systems = useCatalog((s) => s.systems)
  const design = (kitDesignId ? systems.find((x) => x.id === kitDesignId) : undefined) ?? systems[0]
  const compare = compareId ? systems.find((x) => x.id === compareId) : undefined

  const t = useMemo(() => (design ? themeOf(design) : null), [design])
  const counts = useMemo(() => {
    const m = new Map<string, number>()
    for (const item of KIT_ITEMS) m.set(item.group, (m.get(item.group) ?? 0) + 1)
    return m
  }, [])

  const shown = useMemo(() => {
    const q = kitSearch.trim().toLowerCase()
    const byGroup = KIT_ITEMS.filter((i) => !kitGroup || i.group === kitGroup)
    return q ? byGroup.filter((i) => i.name.toLowerCase().includes(q) || i.id.includes(q)) : byGroup
  }, [kitSearch, kitGroup])

  if (!design || !t) {
    return <div className="view-fallback">Loading the component kit…</div>
  }

  return (
    <div className="kit-explorer">
      <section className="kit-explorer-bar">
        <div className="kit-explorer-identity">
          <span className="kit-explorer-swatch" style={{ background: t.primary }} aria-hidden />
          <div>
            <h3 className="kit-explorer-name">{design.name}</h3>
            <p className="kit-explorer-meta">
              <span
                className="kit-explorer-cat"
                style={{ background: CATEGORY_ACCENT[design.category], color: onColor(CATEGORY_ACCENT[design.category]) }}
              >
                {design.category}
              </span>
              {design.typography.displayFont} + {design.typography.bodyFont} · radius {design.components.radius} ·{' '}
              {useCasesOf(design).slice(0, 3).join(', ')}
            </p>
          </div>
        </div>

        <div className="kit-explorer-controls">
          <label className="kit-explorer-select">
            <span>Design</span>
            <select value={design.id} onChange={(e) => setKitDesignId(e.target.value)} aria-label="Design system">
              {systems.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </label>

          <label className="kit-explorer-select">
            <span>Compare with</span>
            <select
              value={compareId ?? ''}
              onChange={(e) => setCompareId(e.target.value || null)}
              aria-label="Compare with another design system"
            >
              <option value="">None</option>
              {systems.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </label>

          <button className="kit-explorer-open" onClick={() => openDesign(design.id)}>
            Open full preview
          </button>
        </div>

        <div className="kit-explorer-filters">
          <label className="kit-explorer-search">
            <span aria-hidden>⌕</span>
            <input
              type="search"
              placeholder="Filter components…"
              value={kitSearch}
              onChange={(e) => setKitSearch(e.target.value)}
              aria-label="Filter components"
            />
          </label>
          <button
            className={`kit-chip ${kitGroup === null ? 'on' : ''}`}
            onClick={() => kitGroup && toggleKitGroup(kitGroup)}
          >
            All <span>{KIT_ITEMS.length}</span>
          </button>
          {KIT_GROUPS.map((g) => (
            <button
              key={g.id}
              className={`kit-chip ${kitGroup === g.id ? 'on' : ''}`}
              onClick={() => toggleKitGroup(g.id)}
              title={g.blurb}
            >
              {g.label} <span>{counts.get(g.id) ?? 0}</span>
            </button>
          ))}
          <span className="kit-explorer-count">{shown.length} shown</span>
        </div>
      </section>

      <div className={`kit-compare ${compare ? 'on' : ''}`}>
        <div className="kit-compare-pane">
          <ComponentKit d={design} group={kitGroup as KitGroupId | null} search={kitSearch} />
        </div>
        {compare && (
          <div className="kit-compare-pane">
            <ComponentKit d={compare} group={kitGroup as KitGroupId | null} search={kitSearch} />
          </div>
        )}
      </div>
    </div>
  )
}
