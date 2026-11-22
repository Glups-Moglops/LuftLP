import type { CSSProperties } from 'react'
import { img } from '../lib/layout'

/** SVG exported with stroke padding: the box is the shape, the image overflows it. */
export function Glyph({ src, inset = '-5.61% -5.57% -5.61% -5.38%', className = '', style }: {
  src: string
  inset?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <span className={`glyph ${className}`} style={{ inset, ...style }}>
      <img src={img(src)} alt="" decoding="async" />
    </span>
  )
}
