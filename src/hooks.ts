import { useEffect, useRef } from 'react'
import { useStore } from './store'
import { designById, loadCatalog, systemsOf } from './catalog'
import { buildDesignPrompt } from './prompt'
import { detailsOf, loadDetails } from './designs/previewDetails'
import { CATEGORY_ORDER, USE_CASES, type Category, type UseCase } from './types'

/** Clipboard copy with a legacy fallback. Returns a promise for success. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

/** Auto-dismiss toast after 3s. */
export function useToast() {
  const toast = useStore((s) => s.toast)
  const showToast = useStore((s) => s.showToast)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!toast) return
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => useStore.setState({ toast: null }), 3000)
    return () => window.clearTimeout(timer.current)
  }, [toast, showToast])

  return { toast, showToast }
}

/** Copy a design's prompt to the clipboard with toast feedback. */
export async function copyDesignPrompt(id: string): Promise<boolean> {
  const d = designById(id)
  if (!d) return false
  // The prompt quotes the preview prose, which ships in its own chunk (see
  // src/designs/previewDetails.ts). Ctrl+Shift+C can be the very first thing a
  // user does with a design, so wait for it rather than copying a partial
  // prompt — the toast below only appears once the copy has actually happened.
  if (!detailsOf(id)) {
    useStore.getState().showToast('⧗ Loading design details…')
    await loadDetails()
  }
  const details = detailsOf(id)
  if (!details) {
    useStore.getState().showToast('✗ Design details unavailable — try again')
    return false
  }
  const ok = await copyText(buildDesignPrompt(d, details))
  const store = useStore.getState()
  store.showToast(ok ? '✓ Design prompt copied to clipboard!' : '✗ Copy failed — select and copy manually')
  if (ok) {
    try {
      localStorage.setItem(`dv-prompt-${id}`, '1')
    } catch {
      /* ignore */
    }
  }
  return ok
}

/**
 * Deep links. Every meaningful piece of vault state is reflected in the URL —
 * which surface you are on, the filters you set, the pattern or component you
 * were reading, and the preview that is open — so a link can be sent to a
 * teammate and land them exactly where you were.
 *
 * `design` keeps its original name for backwards compatibility with links
 * already shared out of older builds.
 */
/**
 * The query string as it arrived, captured before React can touch it. The
 * write effect below runs on mount too — reading `location.search` inside the
 * restore effect would see the params it had already stripped.
 */
const INITIAL_PARAMS =
  typeof window === 'undefined' ? null : new URLSearchParams(window.location.search)

export function useUrlSync() {
  const selectedId = useStore((s) => s.selectedId)
  const view = useStore((s) => s.view)
  const searchQuery = useStore((s) => s.searchQuery)
  const selectedCategory = useStore((s) => s.selectedCategory)
  const selectedUseCase = useStore((s) => s.selectedUseCase)
  const patternSearch = useStore((s) => s.patternSearch)
  const patternFamily = useStore((s) => s.patternFamily)
  const kitDesignId = useStore((s) => s.kitDesignId)
  const kitSearch = useStore((s) => s.kitSearch)
  const kitGroup = useStore((s) => s.kitGroup)

  useEffect(() => {
    const url = new URL(window.location.href)
    const put = (key: string, value: string | null | undefined) => {
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
    }
    put('design', selectedId)
    put('view', view === 'designs' ? null : view)
    put('q', searchQuery)
    put('cat', selectedCategory)
    put('type', selectedUseCase)
    put('pattern', patternSearch)
    put('family', patternFamily)
    put('kit', kitSearch)
    put('group', kitGroup)
    put('kitDesign', kitDesignId)
    window.history.replaceState(null, '', url)
  }, [
    selectedId,
    view,
    searchQuery,
    selectedCategory,
    selectedUseCase,
    patternSearch,
    patternFamily,
    kitDesignId,
    kitSearch,
    kitGroup,
  ])

  // Restore once on first paint, before the catalog has necessarily landed.
  useEffect(() => {
    const p = INITIAL_PARAMS
    if (!p) return
    const s = useStore.getState()
    const v = p.get('view')
    if (v === 'designs' || v === 'patterns' || v === 'components') s.setView(v)
    const q = p.get('q')
    if (q) s.setSearchQuery(q)
    const cat = p.get('cat')
    if (cat && (CATEGORY_ORDER as string[]).includes(cat)) s.toggleCategory(cat as Category)
    const type = p.get('type')
    if (type && (USE_CASES as readonly string[]).includes(type)) s.toggleUseCase(type as UseCase)
    const pattern = p.get('pattern')
    if (pattern) s.setPatternSearch(pattern)
    const family = p.get('family')
    if (family) s.togglePatternFamily(family)
    const kit = p.get('kit')
    if (kit) s.setKitSearch(kit)
    const group = p.get('group')
    if (group) s.toggleKitGroup(group)
    const kitDesign = p.get('kitDesign')
    if (kitDesign) s.setKitDesignId(kitDesign)
    const design = p.get('design')
    if (design) {
      // The catalog may still be in flight; open it once the data arrives so a
      // deep link works even on a cold, uncached first visit.
      if (designById(design)) s.openDesign(design)
      else void loadCatalog().then(() => useStore.getState().openDesign(design))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

/** Global keyboard shortcuts. */
export function useKeyboardShortcuts() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = useStore.getState()
      const inInput =
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')

      // ⌘K / Ctrl+K — the one shortcut that has to work everywhere, including
      // with a preview open and with the caret in a field.
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        s.setPalette(!s.paletteOpen)
        return
      }

      if (e.key === 'Escape') {
        if (s.paletteOpen) s.setPalette(false)
        else if (s.selectedId) s.closeDesign()
        else if (s.sidebarOpen) s.toggleSidebar(false)
        else if (s.searchQuery || s.selectedCategory || s.quickFilter || s.selectedUseCase || s.favOnly)
          s.clearFilters()
        return
      }

      if (s.selectedId) {
        if (e.key === 'ArrowRight' && !inInput) {
          s.navigate(1, systemsOf().map((d) => d.id))
          e.preventDefault()
        } else if (e.key === 'ArrowLeft' && !inInput) {
          s.navigate(-1, systemsOf().map((d) => d.id))
          e.preventDefault()
        } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'c') {
          if (s.selectedId) copyDesignPrompt(s.selectedId)
          e.preventDefault()
        }
        return
      }

      if (e.key === '/' && !inInput) {
        e.preventDefault()
        // The search field lives in the sidebar — open it first on narrow screens.
        s.toggleSidebar(true)
        window.requestAnimationFrame(() => {
          document.querySelector<HTMLInputElement>('.search-input')?.focus()
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
