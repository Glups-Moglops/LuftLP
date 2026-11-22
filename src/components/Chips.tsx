import type { CSSProperties } from 'react'
import { img } from '../lib/layout'
import './chips.css'

const Chevron = () => (
  <svg className="chev" viewBox="0 0 12 8" aria-hidden>
    <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Font sizes in design pixels: [phone frame, desktop frame]. */
type Fs = [number, number]
const size = (fs: Fs) => ({ '--mfs': fs[0], '--fs': fs[1] }) as CSSProperties

/** "Fidget connected" pill, copied from the app UI and floated around the phone mockups. */
export function BtChip({ fs }: { fs: Fs }) {
  return (
    <span className="chip bt" style={size(fs)}>
      <img src={img('dot-green.svg')} alt="" />
      Fidget connected
      <Chevron />
    </span>
  )
}

export const OkChip = ({ fs }: { fs: Fs }) => (
  <span className="chip ok" style={size(fs)}>your fidget is connected!</span>
)
