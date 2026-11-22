import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/belanosima/400.css'
import '@fontsource/belanosima/600.css'
import '@fontsource-variable/inter/index.css'
import './styles/base.css'
import './styles/buttons.css'
import './styles/motion.css'
import App from './App'

// clientWidth excludes the scrollbar, so the 1920px design scales to exactly the visible width
const setVw = () => document.documentElement.style.setProperty('--vw', `${document.documentElement.clientWidth}px`)
setVw()
addEventListener('resize', setVw)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
