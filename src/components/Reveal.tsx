import { motion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'
import { ease } from '../lib/motion'

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, style, delay = 0, y = 48, x = 0, scale = 1 }: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  y?: number
  x?: number
  scale?: number
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
