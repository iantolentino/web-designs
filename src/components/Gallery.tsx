import { useEffect, useMemo, useRef, useState, lazy, Suspense } from 'react'
import { useStore } from '../store'
import { CATEGORY_ACCENT } from '../types'
import type { DesignSystem } from '../types'

const MiniSite = lazy(() => import('./MiniSite').then((m) => ({ default: m.MiniSite })))

const PAGE_SIZE = 12

export function DesignCard({ d }: { d: DesignSystem }) {
  const openDesign = useStore((s) => s.openDesign)
  const favorites = useStore((s) => s.favorites)
  const toggleFavorite = useStore((s) => s.toggleFavorite)
  const fav = favorites.includes(d.id)
  const [visible, setVisible] = useState(false)
  const [scale, setScale] = useState(0.32)
  const thumbRef = useRef<HTMLDivElement>(null)
  const scaleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = thumbRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

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
      role="button"
      tabIndex={0}
      onClick={() => openDesign(d.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openDesign(d.id)
        }
      }}
      aria-label={`Open ${d.name} preview`}
    >
      <div className="thumb" ref={thumbRef}>
        {visible && (
          <div className="thumb-scroll" aria-hidden>
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
          <span className="card-cat" style={{ background: CATEGORY_ACCENT[d.category] }}>
            {d.category}
          </span>
          {d.trending && <span className="card-trending">▲ Trending</span>}
        </div>
        <h3 className="card-name">{d.name}</h3>
        <p className="card-desc">{d.description}</p>
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
    </div>
  )
}

export function Gallery({ systems }: { systems: DesignSystem[] }) {
  const [limit, setLimit] = useState(PAGE_SIZE)
  const sentinel = useRef<HTMLDivElement>(null)

  useEffect(() => setLimit(PAGE_SIZE), [systems])

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setLimit((l) => (l < systems.length ? l + PAGE_SIZE : l))
      },
      { rootMargin: '600px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [systems.length])

  const shown = useMemo(() => systems.slice(0, limit), [systems, limit])

  return (
    <>
      <div className="gallery">
        {shown.map((d) => (
          <DesignCard key={d.id} d={d} />
        ))}
        {systems.length === 0 && (
          <div className="empty-state">
            <h3>No designs match</h3>
            <p>Try a different keyword or clear the filters.</p>
          </div>
        )}
        <div ref={sentinel} />
      </div>
    </>
  )
}
