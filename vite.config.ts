import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works at https://<user>.github.io/web-designs/
  base: './',
  server: { port: 5180, strictPort: false, host: true },
  build: { chunkSizeWarningLimit: 1600 },
})
