import { Glyph } from './Glyph'
import './logo.css'

export function Logo() {
  return (
    <span className="logo">
      <span className="lm"><Glyph src="logo-mark.svg" /></span>
      <span className="lt">luft</span>
      <span className="ld"><Glyph src="logo-drop.svg" inset="-89.58% -75.38% -54.44% -75.38%" /></span>
    </span>
  )
}
