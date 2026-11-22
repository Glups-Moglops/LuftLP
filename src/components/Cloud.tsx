import { Glyph } from './Glyph'
import { at, type Box } from '../lib/layout'

/** A drifting cloud/ellipse with a phone and a desktop drawing, placed in design pixels. */
export function Cloud({ m, d, mi, di, src, slow }: {
  m: Box
  d: Box
  mi: string
  di: string
  src: [mobile: string, desktop: string]
  slow?: boolean
}) {
  return (
    <div className={slow ? 'a drift slow' : 'a drift'} style={at(m, d)}>
      <Glyph className="mob" src={src[0]} inset={mi} />
      <Glyph className="dsk" src={src[1]} inset={di} />
    </div>
  )
}
