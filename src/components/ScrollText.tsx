import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { img } from '../lib/layout'

/** A word, a pill-shaped photo, a bold word, or a line break. */
export type Tok = string | { img: string } | { b: string }

function Tk({ t, i, n, p }: { t: Tok; i: number; n: number; p: MotionValue<number> }) {
  const a = i / n
  const b = (i + 1) / n
  const o = useTransform(p, [a, b], [0.16, 1])
  const s = useTransform(p, [a, b], [0.4, 1])
  if (t === '\n') return <br />
  if (typeof t === 'object' && 'img' in t)
    return <motion.span className="pill-img" style={{ opacity: o, scaleX: s }}><img src={img(t.img)} alt="" loading="lazy" decoding="async" /></motion.span>
  const bold = typeof t === 'object'
  return <motion.span className={bold ? 'b' : undefined} style={{ opacity: o }}>{bold ? t.b : t} </motion.span>
}

/** Text that fills in word by word as it scrolls through the viewport. */
export function ScrollText({ tokens, className }: { tokens: Tok[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'end 0.6'] })
  return (
    <div ref={ref} className={className}>
      {tokens.map((t, i) => (
        <Tk key={i} t={t} i={i} n={tokens.length} p={scrollYProgress} />
      ))}
    </div>
  )
}
