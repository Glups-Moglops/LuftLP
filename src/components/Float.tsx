import type { CSSProperties, ReactNode } from 'react'

/**
 * A piece centred on `pos` (see `centre()` in lib/layout).
 * Floats up and down by default; `still` keeps it put.
 */
export function Float({ pos, r = 0, d = 6, delay, still, className, children }: {
  pos: CSSProperties
  r?: number
  d?: number
  delay?: number
  still?: boolean
  className?: string
  children: ReactNode
}) {
  const style = still
    ? pos
    : ({ ...pos, '--r': `${r}deg`, '--d': `${d}s`, ...(delay !== undefined && { '--delay': `${delay}s` }) } as CSSProperties)
  return <div className={['c', still ? 'still' : 'float', className].filter(Boolean).join(' ')} style={style}>{children}</div>
}
