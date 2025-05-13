import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import SmoothScrolling from './components/animation/SmoothScroll.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </StrictMode>,
)
