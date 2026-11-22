import { motion } from 'motion/react'
import { ease } from '../lib/motion'

/** Words rise out of a mask, one after another. */
export function RiseWords({ text, delay = 0, step = 0.07 }: { text: string; delay?: number; step?: number }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i}>
          <span className="mask">
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: delay + i * step, ease }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </>
  )
}
