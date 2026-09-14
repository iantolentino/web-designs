import { create } from 'zustand'
import type { Category, DeviceMode, PreviewTab, UseCase } from './types'

export type QuickFilter = 'popular' | 'latest' | 'trending'

interface VaultState {
  searchQuery: string
  selectedCategory: Category | null
  selectedUseCase: UseCase | null
  quickFilter: QuickFilter | null
  selectedId: string | null
  previewTab: PreviewTab
  device: DeviceMode
  favorites: string[]
  toast: string | null
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

export const useStore = create<VaultState>((set, get) => ({
  searchQuery: '',
  selectedCategory: null,
  selectedUseCase: null,
  quickFilter: null,
  selectedId: null,
  previewTab: 'live',
  device: 'desktop',
  favorites: loadFavorites(),
  toast: null,
  setSearchQuery: (q) => set({ searchQuery: q }),
  toggleCategory: (c) =>
    set((s) => ({ selectedCategory: s.selectedCategory === c ? null : c })),
  toggleUseCase: (u) =>
    set((s) => ({ selectedUseCase: s.selectedUseCase === u ? null : u })),
  setQuickFilter: (f) =>
    set((s) => ({ quickFilter: s.quickFilter === f ? null : f })),
  clearFilters: () =>
    set({ searchQuery: '', selectedCategory: null, quickFilter: null, selectedUseCase: null }),
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
