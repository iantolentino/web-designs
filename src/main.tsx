import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { loadCatalog } from './catalog'
import './app.css'
import './components/minisite.css'
// kit.css and patterns.css belong to lazily-loaded surfaces (ComponentKit,
// PatternView) — they are imported there so the entry CSS stays small.

// Start the catalog request *before* the first render: the shell paints from
// its own markup while the design data (~300 kB gzipped) streams in behind it,
// so first paint never waits on the catalog.
void loadCatalog()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Offline-first: cache the shell (stale-while-revalidate), hashed assets and
// fonts (cache-first). Prod-only so dev/HMR is untouched; after the page is
// interactive so registration never competes with startup.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js').catch(() => {
      /* offline support is a bonus — never break the app over it */
    })
  })
}
