import './nav.css'
import { LINKS } from './links'

export function Links({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {LINKS.map(([t, h]) => (
        <a key={h} href={h} onClick={onClick}>{t}</a>
      ))}
    </>
  )
}

export function Burger({ onClick }: { onClick: () => void }) {
  return (
    <button className="burger" aria-label="Open menu" onClick={onClick}>
      <i /><i /><i />
    </button>
  )
}
