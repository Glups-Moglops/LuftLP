import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { ease } from '../../lib/motion'
import { Logo } from '../Logo'
import { Burger, Links } from './NavLinks'

/** Floating pill nav that appears once the hero has scrolled away. */
export function Sticky({ onMenu }: { onMenu: () => void }) {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > innerHeight * 0.75))
  return (
    <AnimatePresence>
      {show && (
        <motion.header
          className="stick"
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <a href="#top" aria-label="Luft, back to top"><Logo /></a>
          <nav className="links" aria-label="Primary"><Links /></nav>
          <a className="btn small" href="#early">Get early access</a>
          <Burger onClick={onMenu} />
        </motion.header>
      )}
    </AnimatePresence>
  )
}
