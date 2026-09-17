import { useEffect, useRef } from 'react'
import { useStore } from './store'
import { DESIGN_SYSTEMS, getDesign } from './designs'
import { buildDesignPrompt } from './prompt'

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
  const d = getDesign(id)
  if (!d) return false
  const ok = await copyText(buildDesignPrompt(d))
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

/** Reflect selected design in the URL for shareable links (?design=slug). */
export function useUrlSync() {
  const selectedId = useStore((s) => s.selectedId)

  useEffect(() => {
    const url = new URL(window.location.href)
    if (selectedId) url.searchParams.set('design', selectedId)
    else url.searchParams.delete('design')
    window.history.replaceState(null, '', url)
  }, [selectedId])

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('design')
    if (param && getDesign(param)) {
      useStore.getState().openDesign(param)
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

      if (e.key === 'Escape') {
        if (s.selectedId) s.closeDesign()
        else if (s.sidebarOpen) s.toggleSidebar(false)
        else if (s.searchQuery || s.selectedCategory || s.quickFilter || s.selectedUseCase || s.favOnly)
          s.clearFilters()
        return
      }

      if (s.selectedId) {
        if (e.key === 'ArrowRight' && !inInput) {
          s.navigate(1, DESIGN_SYSTEMS.map((d) => d.id))
          e.preventDefault()
        } else if (e.key === 'ArrowLeft' && !inInput) {
          s.navigate(-1, DESIGN_SYSTEMS.map((d) => d.id))
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
