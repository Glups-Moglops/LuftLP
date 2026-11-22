import { Float } from '../components/Float'
import { Glyph } from '../components/Glyph'
import { Reveal } from '../components/Reveal'
import { centre, img } from '../lib/layout'
import './accessibility.css'

export function Accessibility() {
  return (
    <section className="acc sec" aria-labelledby="acc-h">
      <div className="acc-card">
        <Reveal className="acc-copy">
          <span className="tag">Accessibility first</span>
          <h2 id="acc-h">Want to build your own fidget?</h2>
          <p>While we offer our official ready-to-use fidget device, Luft is designed to be accessible to everyone. We provide free open-source hardware schematics and DIY guides so anyone can build their own clicker at home.</p>
        </Reveal>
        <Reveal className="illo" scale={0.85} y={0}>
          {[1, 2, 3, 4].map((n) => (
            <img key={n} className={`ring r${n}`} src={img(`ring${n}.svg`)} alt="" loading="lazy" />
          ))}
          <div className="umb"><Glyph src="umbrella-icon.svg" /></div>
          <Float className="pill white" r={4} d={6} pos={centre([0, 0], [164.1, 80])}>Free open-source schematics</Float>
          <Float className="pill sky" r={-3} d={7} delay={-2} pos={centre([0, 0], [441.9, 454.2])}>DIY guides</Float>
        </Reveal>
        <Reveal className="acc-btn"><a className="btn light" href="#community">Explore the DIY guides</a></Reveal>
      </div>
    </section>
  )
}
