import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

/** Leans towards the mouse pointer (3D tilt with springs). Touch input is ignored. */
export function Tilt({ children, className, style, max = 7 }: { children: ReactNode; className?: string; style?: CSSProperties; max?: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 140, damping: 16 }
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), spring)
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), spring)
  return (
    <motion.div
      className={className}
      style={{ ...style, rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
