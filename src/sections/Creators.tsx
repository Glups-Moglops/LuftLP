import { motion } from 'motion/react'
import { Float } from '../components/Float'
import { Reveal } from '../components/Reveal'
import { centre, img } from '../lib/layout'
import { ease } from '../lib/motion'
import './creators.css'

const fanIn = { initial: { rotate: 0, opacity: 0, y: 60 }, viewport: { once: true, margin: '0px 0px -15% 0px' } }

export function Creators() {
  return (
    <section className="creators sec" id="community" aria-labelledby="cre-h">
      <div className="cre-copy">
        <Reveal>
          <h2 id="cre-h">Designed for neurodivergent minds, by neurodivergent creators.</h2>
          <p>Created by four members of the neurodivergent community, Luft turns daily stimming into clear personal insights.</p>
          <p>We’re building Luft in the open—with you. Got an idea for a feature, or a different way to log your tells? Reach out, share your thoughts, and help us make Luft better for everyone.</p>
          <a className="btn" href="#early">Let us know your ideas →</a>
        </Reveal>
      </div>
      <div className="tilt-art">
        <Float still pos={centre([0, 0], [274.7, 457.2])}>
          <motion.div className="pc a1" {...fanIn} whileInView={{ rotate: -8, opacity: 1, y: 0 }} whileHover={{ rotate: -4, y: -10 }} transition={{ duration: 1, ease }}>
            <img src={img('inline2.webp')} alt="Dark waves" loading="lazy" />
          </motion.div>
        </Float>
        <Float still pos={centre([0, 0], [597.2, 694.5])}>
          <motion.div className="pc a2" {...fanIn} whileInView={{ rotate: 6, opacity: 1, y: 0 }} whileHover={{ rotate: 2, y: -10 }} transition={{ duration: 1, delay: 0.2, ease }}>
            <img src={img('photo-street.webp')} alt="A crossing in the rain, full of umbrellas" loading="lazy" />
          </motion.div>
        </Float>
        <Float still pos={centre([0, 0], [319.3, 466.5])}>
          <motion.div className="pc a3" {...fanIn} whileInView={{ rotate: 4, opacity: 1, y: 0 }} whileHover={{ rotate: 1, y: -10 }} transition={{ duration: 1, delay: 0.1, ease }}>
            <p>write down your emotions</p>
            <img src={img('phone-selfcare.webp')} alt="The Luft entry screen" loading="lazy" />
          </motion.div>
        </Float>
      </div>
    </section>
  )
}
