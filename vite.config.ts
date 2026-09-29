import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    {
      // Inject the build's file list into dist/sw.js as the service worker's
      // precache manifest. Hashed asset names change every build, so sw.js
      // bytes change too — which is exactly what triggers the browser to
      // reinstall the worker and start a fresh cache generation.
      //
      // Entries are relative ('./assets/…') rather than absolute ('/assets/…')
      // because the production build is served from a sub-path
      // (https://<user>.github.io/web-designs/). A service worker resolves
      // relative URLs against its own script URL, so the same manifest is
      // correct at the domain root and under any sub-path.
      closeBundle() {
        const files: string[] = ['./', './index.html', './favicon.svg']
        const walk = (dir: string, prefix: string) => {
          for (const e of readdirSync(dir, { withFileTypes: true })) {
            if (e.isDirectory()) walk(join(dir, e.name), prefix + '/' + e.name)
            else files.push(prefix + '/' + e.name)
          }
        }
        walk('dist/assets', './assets')
        const sw = readFileSync('public/sw.js', 'utf8')
        writeFileSync(
          'dist/sw.js',
          sw.replace(
            '/*__PRECACHE__*/[]',
            // Source maps stay server-only: pointless offline, heavy to precache.
            JSON.stringify([...new Set(files)].filter((f) => !f.endsWith('.map'))),
          ),
        )
      },
    },
  ],
  // Relative base so the build works at https://<user>.github.io/web-designs/
  base: './',
  server: { port: 5180, strictPort: false, host: true },
  build: { chunkSizeWarningLimit: 1600, sourcemap: true, target: 'esnext' },
})
