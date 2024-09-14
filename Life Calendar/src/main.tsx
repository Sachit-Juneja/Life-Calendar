import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './web-app.tsx'
import './web-app.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
