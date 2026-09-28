import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './app.css'
import './components/minisite.css'
// kit.css and patterns.css belong to lazily-loaded surfaces (ComponentKit,
// PatternView) — they are imported there so the entry CSS stays small.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
