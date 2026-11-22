import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { ease } from '../../lib/motion'
import { LINKS } from './links'

/** Full-screen phone menu that opens with a circular reveal from the burger. */
export function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ clipPath: 'circle(0% at calc(100% - 32px) 36px)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 32px) 36px)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 32px) 36px)' }}
          transition={{ duration: 0.6, ease }}
        >
          <button className="close" aria-label="Close menu" onClick={onClose} autoFocus><i /><i /></button>
          <nav>
            {LINKS.map(([t, h], i) => (
              <motion.a
                key={h}
                href={h}
                onClick={onClose}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease }}
              >
                {t}
              </motion.a>
            ))}
            <motion.a className="btn" href="#early" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
              Get early access
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
