import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ease } from '../lib/motion'

/** Counts from 0 up to `to` the first time it scrolls into view. */
export function CountUp({ to, suffix = '%' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' })
  const reduce = useReducedMotion()
  const [v, setV] = useState(reduce ? to : 0)
  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, to, { duration: 1.8, ease, onUpdate: (l) => setV(Math.round(l)) })
    return () => c.stop()
  }, [inView, reduce, to])
  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden>
        {v}
        {suffix}
      </span>
    </span>
  )
}
