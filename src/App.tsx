import { MotionConfig } from 'motion/react'
import { useState } from 'react'
import { Marquee } from './components/Marquee'
import { Menu } from './components/nav/Menu'
import { Sticky } from './components/nav/Sticky'
import { Accessibility } from './sections/Accessibility'
import { Creators } from './sections/Creators'
import { Cta } from './sections/Cta'
import { Dashboard } from './sections/Dashboard'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { How } from './sections/How'
import { Problem } from './sections/Problem'
import { SelfCare } from './sections/SelfCare'

export default function App() {
  const [menu, setMenu] = useState(false)
  const open = () => setMenu(true)
  return (
    <MotionConfig reducedMotion="user">
      <Sticky onMenu={open} />
      <Menu open={menu} onClose={() => setMenu(false)} />
      <main>
        <Hero onMenu={open} />
        <Marquee tone="sky" />
        <Problem />
        <SelfCare />
        <How />
        <Dashboard />
        <Accessibility />
        <Creators />
        <Marquee tone="navy" />
        <Cta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
