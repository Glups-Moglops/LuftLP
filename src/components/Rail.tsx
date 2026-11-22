import { useRef, useState, type ReactNode } from 'react'
import './rail.css'

/** Horizontal snap carousel on phones (with dots), plain grid on desktop (each section styles that). */
export function Rail({ children, className = '', dots = true }: { children: ReactNode[]; className?: string; dots?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [i, setI] = useState(0)
  const go = (n: number) => {
    const el = ref.current
    const c = el?.children[n] as HTMLElement | undefined
    if (el && c) el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' })
  }
  return (
    <>
      <div
        ref={ref}
        className={`rail ${className}`}
        onScroll={(e) => {
          const el = e.currentTarget
          const c = el.children[0] as HTMLElement
          setI(Math.round(el.scrollLeft / (c.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0'))))
        }}
      >
        {children}
      </div>
      {dots && (
        <div className="dots" role="tablist">
          {children.map((_, n) => (
            <button key={n} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => go(n)} />
          ))}
        </div>
      )}
    </>
  )
}
