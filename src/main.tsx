import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Clicker from './clicker.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Clicker />
  </StrictMode>,
)
