import { create } from 'zustand'
import type { Category, Colors, DeviceMode, PreviewTab, UseCase } from './types'

export type QuickFilter = 'popular' | 'latest' | 'trending'

/** The three top-level surfaces the sidebar switches between. */
export type View = 'designs' | 'patterns' | 'components'

/** Website types can be stacked — a design must satisfy every selected one. */
interface VaultState {
  view: View
  searchQuery: string
  selectedCategory: Category | null
  selectedUseCase: UseCase | null
  quickFilter: QuickFilter | null
  selectedId: string | null
  previewTab: PreviewTab
  device: DeviceMode
  favorites: string[]
  favOnly: boolean
  toast: string | null
  sidebarOpen: boolean
  /** Pattern library filters */
  patternSearch: string
  patternFamily: string | null
  /** Component kit explorer filters */
  kitDesignId: string | null
  kitGroup: string | null
  kitSearch: string
  /** Per-design color overrides — the design keeps its structure, you keep the ink. */
  paletteOverrides: Record<string, Partial<Colors>>
  setView: (v: View) => void
  toggleSidebar: (v?: boolean) => void
  setSearchQuery: (q: string) => void
  toggleCategory: (c: Category) => void
  toggleUseCase: (u: UseCase) => void
  setQuickFilter: (f: QuickFilter | null) => void
  clearFilters: () => void
  openDesign: (id: string) => void
  closeDesign: () => void
  navigate: (dir: 1 | -1, ids: string[]) => void
  setPreviewTab: (t: PreviewTab) => void
  setDevice: (d: DeviceMode) => void
  toggleFavorite: (id: string) => void
  showToast: (msg: string) => void
  toggleFavOnly: () => void
  setPatternSearch: (q: string) => void
  togglePatternFamily: (f: string) => void
  setKitDesignId: (id: string) => void
  toggleKitGroup: (g: string) => void
  setKitSearch: (q: string) => void
  setPaletteToken: (id: string, key: keyof Colors, value: string) => void
  mergePalette: (id: string, colors: Partial<Colors>) => void
  resetPalette: (id: string) => void
}

const FAV_KEY = 'dv-favorites'
function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAV_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}
function persistFavorites(favs: string[]) {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs))
  } catch {
    /* ignore */
  }
}

const PALETTE_KEY = 'dv-palettes'
function loadPalettes(): Record<string, Partial<Colors>> {
  try {
    const raw = localStorage.getItem(PALETTE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, Partial<Colors>>) : {}
  } catch {
    return {}
  }
}
function persistPalettes(palettes: Record<string, Partial<Colors>>) {
  try {
    localStorage.setItem(PALETTE_KEY, JSON.stringify(palettes))
  } catch {
    /* ignore */
  }
}

export const useStore = create<VaultState>((set, get) => ({
  view: 'designs',
  searchQuery: '',
  selectedCategory: null,
  selectedUseCase: null,
  quickFilter: null,
  selectedId: null,
  previewTab: 'live',
  device: 'desktop',
  favorites: loadFavorites(),
  favOnly: false,
  toast: null,
  sidebarOpen: false,
  patternSearch: '',
  patternFamily: null,
  kitDesignId: null,
  kitGroup: null,
  kitSearch: '',
  paletteOverrides: loadPalettes(),
  setView: (v) => set({ view: v, sidebarOpen: false }),
  toggleFavOnly: () => set((s) => ({ favOnly: !s.favOnly })),
  toggleSidebar: (v) => set((s) => ({ sidebarOpen: v ?? !s.sidebarOpen })),
  setPatternSearch: (q) => set({ patternSearch: q }),
  togglePatternFamily: (f) =>
    set((s) => ({ patternFamily: s.patternFamily === f ? null : f })),
  setKitDesignId: (id) => set({ kitDesignId: id }),
  toggleKitGroup: (g) => set((s) => ({ kitGroup: s.kitGroup === g ? null : g })),
  setKitSearch: (q) => set({ kitSearch: q }),
  setPaletteToken: (id, key, value) =>
    set((s) => {
      const palettes = { ...s.paletteOverrides, [id]: { ...s.paletteOverrides[id], [key]: value } }
      persistPalettes(palettes)
      return { paletteOverrides: palettes }
    }),
  mergePalette: (id, colors) =>
    set((s) => {
      const palettes = { ...s.paletteOverrides, [id]: { ...s.paletteOverrides[id], ...colors } }
      persistPalettes(palettes)
      return { paletteOverrides: palettes }
    }),
  resetPalette: (id) =>
    set((s) => {
      if (!s.paletteOverrides[id]) return s
      const palettes = { ...s.paletteOverrides }
      delete palettes[id]
      persistPalettes(palettes)
      return { paletteOverrides: palettes }
    }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  toggleCategory: (c) =>
    set((s) => ({ selectedCategory: s.selectedCategory === c ? null : c })),
  toggleUseCase: (u) =>
    set((s) => ({ selectedUseCase: s.selectedUseCase === u ? null : u })),
  setQuickFilter: (f) =>
    set((s) => ({ quickFilter: s.quickFilter === f ? null : f })),
  clearFilters: () =>
    set({ searchQuery: '', selectedCategory: null, quickFilter: null, selectedUseCase: null, favOnly: false }),
  openDesign: (id) => set({ selectedId: id, previewTab: 'live' }),
  closeDesign: () => set({ selectedId: null }),
  navigate: (dir, ids) => {
    const { selectedId } = get()
    if (!ids.length) return
    const i = selectedId ? ids.indexOf(selectedId) : -1
    const next = ids[(i + dir + ids.length) % ids.length]
    set({ selectedId: next })
  },
  setPreviewTab: (t) => set({ previewTab: t }),
  setDevice: (d) => set({ device: d }),
  toggleFavorite: (id) =>
    set((s) => {
      const favorites = s.favorites.includes(id)
        ? s.favorites.filter((f) => f !== id)
        : [...s.favorites, id]
      persistFavorites(favorites)
      return { favorites }
    }),
  showToast: (msg) => set({ toast: msg }),
}))
