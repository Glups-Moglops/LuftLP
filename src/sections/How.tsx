import { motion } from 'motion/react'
import { Rail } from '../components/Rail'
import { Reveal } from '../components/Reveal'
import { img } from '../lib/layout'
import './how.css'

const STEPS = [
  { img: 'step1.webp', alt: 'The chart card with the connected fidget indicator', t: 'Bluetooth Fidget Connection', p: 'A light, portable clicker you can take anywhere. Press intentionally when you feel tension rising to log moments on the go.' },
  { img: 'step2.webp', alt: 'The inner weather slider and mood faces', t: 'Rethink Journaling & Stoplight System', p: 'Log whether discomfort is sensory, emotional, or environmental. Measure feeling intensity with a quick stoplight system and record thoughts without pressure.' },
  { img: 'step3.webp', alt: 'The calendar of past entries and an entry detail', t: 'Weather Forecast History', p: 'Turn past entries into future foresight. Read your historical patterns like a weather report to learn your personal “tells” and prepare for upcoming triggers.' },
]

export function How() {
  return (
    <section className="how sec" id="how" aria-labelledby="how-h">
      <div className="dark">
        <Reveal className="h-head">
          <h2 id="how-h">How it works</h2>
          <p>From a click on your fidget to your own inner forecast, in three steps.</p>
        </Reveal>
        <Rail className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} className="step" delay={i * 0.14} y={80}>
              <div className="crop">
                <motion.img className="shot" src={img(s.img)} alt={s.alt} loading="lazy" whileHover={{ y: -12, scale: 1.03 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} />
              </div>
              <div className="copy">
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            </Reveal>
          ))}
        </Rail>
      </div>
    </section>
  )
}
