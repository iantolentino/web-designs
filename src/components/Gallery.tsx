import { useEffect, useLayoutEffect, useMemo, useRef, useState, lazy, Suspense } from 'react'
import { useStore } from '../store'
import { CATEGORY_ACCENT, LAYOUT_LABEL } from '../types'
import { onColor } from '../designs/theme'
import { prefetchPreview } from '../prefetch'
import type { DesignSystem } from '../types'

const MiniSite = lazy(() => import('./MiniSite').then((m) => ({ default: m.MiniSite })))

/** Rows kept mounted above/below the viewport so fast scrolls never expose a gap. */
const OVERSCAN_ROWS = 5
/** Row-pitch guess used only until a rendered card can be measured. */
const PITCH_FALLBACK = 420

// Idle-time FIFO: one thumbnail mounts per idle slot. A dozen cards entering
// range would otherwise burst into a single multi-hundred-ms style/layout task
// — each full-page MiniSite render stays small enough to keep scrolling smooth.
const mountQueue: (() => void)[] = []
let pumping = false
function enqueueMount(fn: () => void) {
  mountQueue.push(fn)
  pumpMounts()
}
function dequeueMount(fn: () => void) {
  const i = mountQueue.indexOf(fn)
  if (i >= 0) mountQueue.splice(i, 1)
}
function pumpMounts() {
  if (pumping || mountQueue.length === 0) return
  pumping = true
  const run = () => {
    pumping = false
    mountQueue.shift()?.()
    if (mountQueue.length > 0) pumpMounts()
  }
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run, { timeout: 600 })
  } else {
    window.setTimeout(run, 32)
  }
}

export function DesignCard({ d }: { d: DesignSystem }) {
  const openDesign = useStore((s) => s.openDesign)
  const favorites = useStore((s) => s.favorites)
  const toggleFavorite = useStore((s) => s.toggleFavorite)
  const fav = favorites.includes(d.id)
  const [near, setNear] = useState(false)
  const [visible, setVisible] = useState(false)
  const [scale, setScale] = useState(0.32)
  const thumbRef = useRef<HTMLDivElement>(null)
  const scaleRef = useRef<HTMLDivElement>(null)

  // Mount the thumbnail when it nears the viewport, unmount it once it has
  // left again. With 216 designs the gallery can hold every card, but the
  // full-page MiniSite inside each one is expensive — keeping only the
  // near-viewport handful mounted bounds both DOM size and scroll cost.
  useEffect(() => {
    const el = thumbRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => setNear(entries[0].isIntersecting), {
      rootMargin: '400px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Once near the viewport, wait for an idle slot before mounting the
  // MiniSite: first paint must never wait on full-page thumbnail renders,
  // and the FIFO spreads the mounts across frames (lower TBT, earlier TTI).
  const pendingRef = useRef<(() => void) | null>(null)
  useEffect(() => {
    if (!near) {
      setVisible(false)
      if (pendingRef.current) {
        dequeueMount(pendingRef.current)
        pendingRef.current = null
      }
      return
    }
    const fn = () => {
      pendingRef.current = null
      setVisible(true)
    }
    pendingRef.current = fn
    enqueueMount(fn)
    return () => {
      if (pendingRef.current) {
        dequeueMount(pendingRef.current)
        pendingRef.current = null
      }
    }
  }, [near])

  useEffect(() => {
    const el = thumbRef.current
    if (!el) return
    const fit = () => {
      const w = el.clientWidth || 320
      // MiniSite renders at 1000px logical width; scale it down to card width.
      setScale(w / 1000)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      className="design-card"
      // Hovering (or keyboard-focusing) a card is a strong signal the preview
      // is next — warm its chunk now so opening it is instant.
      onPointerEnter={prefetchPreview}
      onFocus={prefetchPreview}
    >
      <div className="thumb" ref={thumbRef}>
        {visible && (
          <div className="thumb-scroll" aria-hidden ref={(el) => el?.setAttribute('inert', '')}>
            <div
              ref={scaleRef}
              className="thumb-scale"
              style={{ transform: `scale(${scale})` }}
            >
              <Suspense fallback={null}>
                <MiniSite d={d} compact />
              </Suspense>
            </div>
            <div className="thumb-fade" />
          </div>
        )}
        <button
          className={`thumb-fav ${fav ? 'on' : ''}`}
          aria-label={fav ? 'Remove from favorites' : 'Save to favorites'}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(d.id)
          }}
        >
          {fav ? '♥' : '♡'}
        </button>
        <span className="thumb-open-hint">Open preview →</span>
      </div>
      <div className="card-body">
        <div className="card-top">
          <span className="card-cat" style={{ background: CATEGORY_ACCENT[d.category], color: onColor(CATEGORY_ACCENT[d.category]) }}>
            {d.category}
          </span>
          {d.trending && <span className="card-trending">▲ Trending</span>}
        </div>
        <h3 className="card-name">{d.name}</h3>
        <p className="card-desc">{d.description}</p>
        <div className="card-layout">▤ {LAYOUT_LABEL[d.layout]}</div>
        <div className="card-meta">
          <span>v{d.createdAt.slice(0, 4)}</span>
          <span>♥ {d.popularity}</span>
          <span className="card-swatches" aria-hidden>
            {[...new Set([d.colors.primary, d.colors.secondary, d.colors.accent, d.colors.background])].map((c) => (
              <span key={c} className="card-swatch" style={{ background: c }} />
            ))}
          </span>
        </div>
      </div>
      {/* Empty overlay button: the card's rich text (including the aria-hidden
          thumbnail) stays out of the accessible name, while keyboard users get
          a native control with a clean label. */}
      <button className="card-open" onClick={() => openDesign(d.id)} aria-label={`Open ${d.name} preview`} />
    </div>
  )
}

type WindowState = { start: number; end: number; cols: number }

export function Gallery({ systems }: { systems: DesignSystem[] }) {
  const [win, setWin] = useState<WindowState>({ start: 0, end: 1, cols: 4 })
  const galleryRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const total = systems.length
  const rows = Math.ceil(total / win.cols)
  // Clamp against rows computed from the last measured column count so a
  // stale window can never produce an empty slice while resize settles.
  const startRow = Math.min(win.start, Math.max(0, rows - 1))
  const endRow = Math.min(win.end, rows)
  const slice = useMemo(
    () => systems.slice(startRow * win.cols, endRow * win.cols),
    [systems, startRow, endRow, win.cols],
  )

  // Virtualization: only the rows near the viewport exist in the DOM. The
  // gallery lays out on fixed grid-auto-rows (app.css), so row pitch is
  // exact and the row-aligned .gallery-vspace spans before/after the slice
  // reproduce a full render's geometry — total height, scroll position, and
  // scrollbar all stay identical, while offscreen cards cost nothing.
  useLayoutEffect(() => {
    const g = galleryRef.current
    if (!g) return
    const update = () => {
      frame.current = 0
      const cs = getComputedStyle(g)
      const columnCount = cs.gridTemplateColumns.split(' ').filter((t) => t.endsWith('px')).length || 4
      const gap = parseFloat(cs.rowGap) || 0
      const first = g.querySelector<HTMLElement>('.design-card')
      // Every card fills its fixed-height grid track, so any rendered card
      // measures the current pitch exactly (track height + row gap).
      const pitch = first ? first.offsetHeight + gap : PITCH_FALLBACK
      const galleryTop = g.getBoundingClientRect().top + window.scrollY
      const rowsTotal = Math.ceil(total / columnCount)
      const viewTop = window.scrollY - galleryTop
      const viewBottom = viewTop + window.innerHeight
      const start = Math.max(
        0,
        Math.min(Math.floor(viewTop / pitch) - OVERSCAN_ROWS, Math.max(0, rowsTotal - 1)),
      )
      const end = Math.max(
        start,
        Math.min(rowsTotal, Math.ceil(viewBottom / pitch) + OVERSCAN_ROWS),
      )
      setWin((w) =>
        w.start === start && w.end === end && w.cols === columnCount
          ? w
          : { start, end, cols: columnCount },
      )
    }
    const schedule = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const ro = new ResizeObserver(schedule)
    ro.observe(g)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      ro.disconnect()
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [total])

  const rowsBelow = rows - endRow

  return (
    <div className="gallery" ref={galleryRef}>
      {startRow > 0 && <div className="gallery-vspace" style={{ gridRow: `span ${startRow}` }} />}
      {slice.map((d) => (
        <DesignCard key={d.id} d={d} />
      ))}
      {rowsBelow > 0 && (
        <div className="gallery-vspace" style={{ gridRow: `span ${rowsBelow}` }} />
      )}
      {total === 0 && (
        <div className="empty-state">
          <h3>No designs match</h3>
          <p>Try a different keyword or clear the filters.</p>
        </div>
      )}
    </div>
  )
}
