import { Glyph } from './Glyph'
import './marquee.css'

/** The scrolling "WEATHER THE STORM" strip between sections. */
export function Marquee({ tone }: { tone: 'sky' | 'navy' }) {
  const group = (k: string) => (
    <div className="mq-group" key={k} aria-hidden={k === 'b'}>
      {Array.from({ length: 6 }, (_, n) => (
        <span className="mq-item" key={n}>
          <span>WEATHER THE STORM</span>
          <span className="mq-umb">
            <Glyph src={tone === 'sky' ? 'divider-umbrella.svg' : 'umbrella-icon-chip.svg'} />
          </span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`mq ${tone}`} role="presentation">
      <div className="mq-track">
        {group('a')}
        {group('b')}
      </div>
    </div>
  )
}
