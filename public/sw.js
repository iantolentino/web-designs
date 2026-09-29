/*
 * The Design Vault — offline-first service worker.
 *
 * Three independent strategies, no build step (this file is copied verbatim
 * from public/ by Vite, so it must never import hashed asset names):
 *
 *  - Navigation requests (the app shell document): network-first, cache
 *    fallback. The document is ~3 kB and its response also updates the cached
 *    copy; serving it from cache first would be faster by one round trip but
 *    actively wrong after a deploy — a stale document references hashed
 *    assets the new release has already deleted, which is a blank page. With
 *    the network gone the cached shell answers immediately, which is where
 *    the offline-first win actually lives.
 *  - /assets/ requests (Vite emits content-hashed filenames): cache-first.
 *    A hash change IS a new file, so entries are immutable and never pruned.
 *  - Google Fonts (fonts.googleapis.com / fonts.gstatic.com): cache-first
 *    with versioned buckets keyed by the requested CSS URL, so font files
 *    are always paired with the stylesheet that references them.
 *
 * Bumping CACHE (e.g. after changing the shell's non-hashed dependencies)
 * starts a fresh cache generation; the activate handler deletes the old one.
 */
const MANIFEST = /*__PRECACHE__*/[]
// Cache generation is derived from the manifest contents: a new build emits a
// new sw.js (bytes change → the browser reinstalls) whose precache list hashes
// to a fresh cache name. activate() then deletes the previous generation, so
// shell and assets can never mix across deploys.
const CACHE = 'dv-' + hashKey(JSON.stringify(MANIFEST))

// Where the hashed build assets live, *relative to this worker*. The production
// build is served from a sub-path (/web-designs/), so a hard-coded '/assets/'
// test would miss every asset request there and let them fall through to the
// network — which is exactly what offline mode cannot do.
const ASSETS_PREFIX = new URL('assets/', self.location.href).pathname

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      // cache:'reload' bypasses the HTTP cache so the precache always holds
      // the bytes the server actually deployed for this build.
      await Promise.all(
        MANIFEST.map(async (u) => {
          const res = await fetch(u, { cache: 'reload' })
          if (res && res.ok) await cache.put(u, res)
        }),
      )
      await self.skipWaiting()
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(
        names.filter((n) => n.startsWith('dv-') && n !== CACHE).map((n) => caches.delete(n)),
      )
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)

  // 1) App shell: network-first with a cached fallback.
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE)
        // Relative keys, not absolute: the production build is served from a
        // sub-path, and a service worker resolves these against its own URL.
        const cachedShell = async () =>
          (await caches.match(req, { ignoreSearch: true, ignoreVary: true })) ||
          (await caches.match('./', { ignoreVary: true })) ||
          (await caches.match('./index.html', { ignoreVary: true }))
        try {
          const res = await fetch(req)
          if (res && res.ok) {
            await cache.put('./', res.clone())
            return res
          }
          return (await cachedShell()) || res
        } catch {
          return (await cachedShell()) || offlineFallback()
        }
      })(),
    )
    return
  }

  // 2) Content-hashed build assets: cache-first, immutable.
  if (url.origin === self.location.origin && url.pathname.startsWith(ASSETS_PREFIX)) {
    event.respondWith(
      (async () => {
        const hit = await caches.match(req, { ignoreVary: true })
        if (hit) return hit
        const res = await fetch(req)
        if (res && res.ok) {
          const cache = await caches.open(CACHE)
          cache.put(req, res.clone())
        }
        return res
      })(),
    )
    return
  }

  // 3) Google Fonts: cache-first. The css2 sheet and its gstatic woff2 files
  //    are bucketed by the sheet URL so files always match the CSS version.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      (async () => {
        const hit = await caches.match(req, { ignoreVary: true })
        if (hit) return hit
        const res = await fetch(req)
        if (res && (res.ok || res.type === 'opaque')) {
          const bucket =
            url.hostname === 'fonts.googleapis.com' ? url.pathname + url.search : req.url
          const cache = await caches.open(CACHE + '-fonts-' + hashKey(bucket))
          cache.put(req, res.clone())
        }
        return res
      })(),
    )
    return
  }
})

function hashKey(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return Math.abs(h).toString(36)
}
function offlineFallback() {
  return new Response(
    '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
      '<body style="font-family:system-ui;display:grid;place-items:center;min-height:100vh;margin:0;background:#141118;color:#f4f1ea">' +
      '<p>You are offline and this page has not been cached yet.</p>',
    { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  )
}
