import type { ReactNode } from 'react'
import { CountUp } from '../components/CountUp'
import { Glyph } from '../components/Glyph'
import { Rail } from '../components/Rail'
import { Reveal } from '../components/Reveal'
import { ScrollText, type Tok } from '../components/ScrollText'
import { img } from '../lib/layout'
import './problem.css'

const words = (s: string, b = false): Tok[] => s.split(' ').map((w) => (b ? { b: w } : w))

// The statement wraps differently on phone and desktop, so each frame gets its own line breaks.
const statement: { desktop: Tok[]; phone: Tok[] } = {
  desktop: [...words('Like atmospheric pressure'), { img: 'inline1.webp' }, ...words('before a storm,'), '\n', { img: 'inline2.webp' }, ...words('micro-tensions stack-up invisibly.')],
  phone: [...words('Like atmospheric pressure'), '\n', { img: 'inline1.webp' }, ...words('before a storm,'), '\n', ...words('micro-tensions stack-up'), '\n', ...words('invisibly.'), { img: 'inline2.webp' }],
}
const closing = [...words('Luft helps you recognize how those little things tie into your emotions'), '\n', '—', ...words('so you can catch the shift before the downpour.', true)]

function Card({ cls, i, children }: { cls: string; i: number; children: ReactNode }) {
  return (
    <Reveal className={`card ${cls}`} delay={i * 0.12} y={70}>
      {children}
    </Reveal>
  )
}

export function Problem() {
  return (
    <section className="problem sec" aria-labelledby="problem-h">
      <Reveal className="p-head">
        <h2 id="problem-h">Overwhelm rarely comes out of nowhere.</h2>
        <p>In busy lives and sensory-heavy spaces, it can feel like anxiety hits out of thin air. The truth? We’re often just missing the subtle signals along the way.</p>
      </Reveal>
      <Rail className="stats" dots={false}>
        <Card cls="navy" i={0}>
          <div className="big"><CountUp to={91} /></div>
          <div className="copy">
            <p>of adults in the UK experience high levels of stress every day.</p>
            <small>Burnout Report 2026, YouGov UK</small>
          </div>
          <div className="pill-photo"><img src={img('pexels-pill.webp')} alt="People crossing a rainy street under umbrellas" loading="lazy" /></div>
        </Card>
        <Card cls="storm" i={1}>
          <img className="cover" src={img('storm.webp')} alt="" loading="lazy" />
          <div className="umb"><Glyph src="storm-umbrella.svg" /></div>
        </Card>
        <Card cls="sky" i={2}>
          <div className="big"><CountUp to={78} /></div>
          <div className="copy">
            <p>of neurodivergent people experience overload in the workplace.</p>
            <small>Birkbeck, University of London with Neurodiversity in Business (NiB), 2024</small>
          </div>
        </Card>
      </Rail>
      <div className="statement">
        <ScrollText className="st dsk" tokens={statement.desktop} />
        <ScrollText className="st mob" tokens={statement.phone} />
        <ScrollText className="st-close" tokens={closing} />
      </div>
    </section>
  )
}
