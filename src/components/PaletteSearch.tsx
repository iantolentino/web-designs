import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../store'
import { useCatalog } from '../catalog'
import { PATTERNS } from '../patterns/patterns'
import { KIT_ITEMS, KIT_GROUPS } from './ComponentKit'
import { PATTERN_FAMILIES } from '../meta'
import { copyText, copyDesignPrompt } from '../hooks'

type Kind = 'action' | 'design' | 'pattern' | 'component'

interface Result {
  key: string
  kind: Kind
  icon: string
  label: string
  sub: string
  run: () => void
  /** Extra words that should match, without being displayed. */
  extra?: string
}

const KIND_LABEL: Record<Kind, string> = {
  action: 'Actions',
  design: 'Design systems',
  pattern: 'Patterns',
  component: 'Components',
}

/**
 * Cheap, predictable scoring: exact prefix beats word-start, word-start beats
 * substring, substring beats a subsequence ("splhro" → "split hero"). Anything
 * that fails all four is dropped.
 */
function score(q: string, label: string, extra = ''): number {
  const l = label.toLowerCase()
  const x = extra.toLowerCase()
  if (l.startsWith(q)) return 100
  if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(l)) return 80
  const at = l.indexOf(q)
  if (at > -1) return 60 - Math.min(at, 30)
  const atx = x.indexOf(q)
  if (atx > -1) return 40 - Math.min(atx, 20)
  // subsequence
  let i = 0
  for (const ch of q) {
    i = l.indexOf(ch, i)
    if (i === -1) return -1
    i += 1
  }
  return 15
}

/**
 * The palette's index and UI.
 *
 * Designs come from the already-warm catalog store; patterns and the component
 * kit are pulled in with this chunk. Results are grouped by surface and the
 * whole list is keyboard-driven — arrow keys, Enter, Escape.
 */
export function PaletteSearch({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const systems = useCatalog((s) => s.systems)
  const selectedId = useStore((s) => s.selectedId)

  const run = useMemo(() => {
    const s = () => useStore.getState()
    return {
      design: (id: string) => {
        s().openDesign(id)
        onClose()
      },
      pattern: (search: string) => {
        s().setPatternSearch(search)
        s().setView('patterns')
        onClose()
      },
      component: (search: string) => {
        s().setKitSearch(search)
        s().setView('components')
        onClose()
      },
      view: (v: 'designs' | 'patterns' | 'components') => {
        s().setView(v)
        onClose()
      },
    }
  }, [onClose])

  const actionResults = useMemo<Result[]>(() => {
    const st = () => useStore.getState()
    const list: Result[] = [
      {
        key: 'a-surprise',
        kind: 'action',
        icon: '✦',
        label: 'Surprise me — open a random design',
        sub: 'Rolls the whole catalog',
        run: () => {
          if (!systems.length) return
          const pick = systems[Math.floor(Math.random() * systems.length)]
          run.design(pick.id)
        },
      },
      {
        key: 'a-patterns',
        kind: 'action',
        icon: '▤',
        label: 'Go to the pattern library',
        sub: 'Layout recipes, by family',
        run: () => run.view('patterns'),
      },
      {
        key: 'a-kit',
        kind: 'action',
        icon: '⬡',
        label: 'Go to the component kit',
        sub: 'Every component, re-skinned per design',
        run: () => run.view('components'),
      },
      {
        key: 'a-favs',
        kind: 'action',
        icon: '♥',
        label: 'Show favorites only',
        sub: 'Your saved systems',
        run: () => {
          st().setView('designs')
          if (!st().favOnly) st().toggleFavOnly()
          onClose()
        },
      },
      {
        key: 'a-clear',
        kind: 'action',
        icon: '✕',
        label: 'Clear all filters',
        sub: 'Search, category, type, sorting',
        run: () => {
          st().clearFilters()
          st().setPatternSearch('')
          st().setKitSearch('')
          onClose()
        },
      },
      {
        key: 'a-link',
        kind: 'action',
        icon: '🔗',
        label: 'Copy a link to this page',
        sub: 'Filters and open preview included',
        run: async () => {
          const ok = await copyText(window.location.href)
          st().showToast(ok ? '✓ Permalink copied' : '✗ Copy failed')
          onClose()
        },
      },
    ]
    if (selectedId) {
      const d = systems.find((x) => x.id === selectedId)
      list.unshift({
        key: 'a-prompt',
        kind: 'action',
        icon: '⧉',
        label: `Copy the ${d?.name ?? 'selected'} prompt`,
        sub: 'Tokens, components, rules, motion',
        run: () => {
          void copyDesignPrompt(selectedId)
          onClose()
        },
      })
    }
    return list
  }, [systems, selectedId, run, onClose])

  const familyLabel = useMemo(() => {
    const m = new Map<string, string>()
    for (const f of PATTERN_FAMILIES) m.set(f.id, f.label)
    return m
  }, [])

  const groupLabel = useMemo(() => {
    const m = new Map<string, string>()
    for (const g of KIT_GROUPS) m.set(g.id, g.label)
    return m
  }, [])

  const results = useMemo<Result[]>(() => {
    const query = q.trim().toLowerCase()
    if (!query) {
      // Empty state: the productive way in — actions, then the catalog's best.
      const top = [...systems].sort((a, b) => b.popularity - a.popularity).slice(0, 5)
      return [
        ...actionResults,
        ...top.map((d) => ({
          key: `d-${d.id}`,
          kind: 'design' as Kind,
          icon: '◈',
          label: d.name,
          sub: `${d.category} · ${d.description}`,
          extra: `${d.tags.join(' ')} ${d.typography.displayFont} ${d.typography.bodyFont} ${d.id}`,
          run: () => run.design(d.id),
        })),
      ]
    }

    const scored: { r: Result; s: number }[] = []
    for (const a of actionResults) {
      const s = score(query, a.label, a.sub)
      if (s > -1) scored.push({ r: a, s: s + 30 }) // actions are cheap to run — nudge them up
    }
    for (const d of systems) {
      const s = score(query, d.name, `${d.id} ${d.category} ${d.tags.join(' ')} ${d.description} ${d.designPhilosophy}`)
      if (s > -1)
        scored.push({
          r: {
            key: `d-${d.id}`,
            kind: 'design',
            icon: '◈',
            label: d.name,
            sub: `${d.category} · ${d.description}`,
            run: () => run.design(d.id),
          },
          s,
        })
    }
    for (const p of PATTERNS) {
      const s = score(query, p.name, `${p.id} ${p.blurb} ${p.tags.join(' ')} ${familyLabel.get(p.family) ?? p.family}`)
      if (s > -1)
        scored.push({
          r: {
            key: `p-${p.id}`,
            kind: 'pattern',
            icon: '▤',
            label: p.name,
            sub: `${familyLabel.get(p.family) ?? p.family} · ${p.blurb}`,
            run: () => run.pattern(p.name),
          },
          s,
        })
    }
    for (const c of KIT_ITEMS) {
      const s = score(query, c.name, `${c.id} ${c.group} ${groupLabel.get(c.group) ?? ''}`)
      if (s > -1)
        scored.push({
          r: {
            key: `c-${c.id}`,
            kind: 'component',
            icon: '⬡',
            label: c.name,
            sub: groupLabel.get(c.group) ?? c.group,
            run: () => run.component(c.name),
          },
          s,
        })
    }
    return scored
      .sort((a, b) => b.s - a.s)
      .slice(0, 30)
      .map((x) => x.r)
  }, [q, systems, actionResults, run, familyLabel, groupLabel])

  const shown = q.trim() ? results : results.slice(0, 12)

  useEffect(() => setActive(0), [q])
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  // Keep the highlighted row in view while arrowing through the list.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('.palette-item.on')?.scrollIntoView({ block: 'nearest' })
  }, [active, shown])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, shown.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      shown[active]?.run()
    } else if (e.key === 'Tab') {
      e.preventDefault()
    }
  }

  // Group headers are rendered inline by watching the kind change between rows.
  let lastKind: Kind | null = null

  return (
    <>
      <div className="palette-head">
        <span className="palette-icon" aria-hidden>⌘</span>
        <input
          ref={inputRef}
          className="palette-input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={shown[active] ? `palette-${shown[active].key}` : undefined}
          placeholder="Search designs, patterns, components, or run a command…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        <kbd className="palette-esc">esc</kbd>
      </div>

      <div className="palette-list" id="palette-list" role="listbox" ref={listRef}>
        {shown.map((r, i) => {
          const header = r.kind !== lastKind ? KIND_LABEL[r.kind] : null
          lastKind = r.kind
          return (
            <div key={r.key}>
              {header && <p className="palette-group">{header}</p>}
              <button
                id={`palette-${r.key}`}
                role="option"
                aria-selected={i === active}
                className={`palette-item ${i === active ? 'on' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={r.run}
              >
                <span className="palette-item-ic" aria-hidden>{r.icon}</span>
                <span className="palette-item-text">
                  <strong>{r.label}</strong>
                  <em>{r.sub}</em>
                </span>
                {r.kind === 'design' && <span className="palette-item-go">Open ↵</span>}
              </button>
            </div>
          )
        })}
        {shown.length === 0 && (
          <p className="palette-empty">
            Nothing matches “{q}”. Try a category (<em>Luxury</em>), a type (<em>Fintech</em>), a font (
            <em>Bricolage</em>), or a component (<em>dropzone</em>).
          </p>
        )}
      </div>

      <div className="palette-foot">
        <span>
          <kbd>↑</kbd> <kbd>↓</kbd> move · <kbd>↵</kbd> run · <kbd>esc</kbd> close
        </span>
        <span>
          {PATTERNS.length} patterns · {KIT_ITEMS.length} components · {systems.length} designs
        </span>
      </div>
    </>
  )
}
