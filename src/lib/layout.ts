import type { CSSProperties } from 'react'

export const img = (n: string) => `/img/${n}`

export type Box = [number, number, number?, number?]

const vars = (p: string, [x, y, w, h]: Box) => ({
  [`--${p}x`]: x,
  [`--${p}y`]: y,
  ...(w !== undefined && { [`--${p}w`]: w }),
  ...(h !== undefined && { [`--${p}h`]: h }),
})

/** Position in design pixels. m = mobile frame (393 wide), d = desktop frame (1920 wide). Used with the `.a` class. */
export const at = (m: Box, d: Box): CSSProperties => ({ ...vars('m', m), ...vars('', d) }) as CSSProperties

const cv = (p: string, [x, y, w, h]: Box) => ({
  [`--${p}cx`]: x,
  [`--${p}cy`]: y,
  ...(w !== undefined && { [`--${p}w`]: w }),
  ...(h !== undefined && { [`--${p}h`]: h }),
})

/** Same, but x/y are the element's centre (tilted, floating pieces). Used with the `.c` class. */
export const centre = (m: Box, d: Box): CSSProperties => ({ ...cv('m', m), ...cv('', d) }) as CSSProperties
