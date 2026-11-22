import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Cloud } from '../components/Cloud'
import { Glyph } from '../components/Glyph'
import { Logo } from '../components/Logo'
import { Burger, Links } from '../components/nav/NavLinks'
import { RiseWords } from '../components/RiseWords'
import { at, img } from '../lib/layout'
import { ease } from '../lib/motion'
import '../components/badge.css'
import './hero.css'

export function Hero({ onMenu }: { onMenu: () => void }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const handY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const umbY = useTransform(scrollYProgress, [0, 1], [0, -110])
  return (
    <section className="hero sec" ref={ref} id="top">
      <div className="stage">
        <Cloud m={[200, 300, 520, 160]} d={[1419, 267, 1103, 333.3]} mi="-62.5% -19.23%" di="-30% -9.07%" src={['m-ellipse47.svg', 'ellipse47.svg']} />
        <Cloud slow m={[-120, 880, 420, 150]} d={[-275, 912, 737, 261.3]} mi="-54.35% -19.41%" di="-31.2% -11.06%" src={['m-ellipse46.svg', 'ellipse46.svg']} />
        <motion.div className="a" style={{ ...at([-50, 590, 291.6, 289.3], [201, 267, 583.2, 578.6]), y: umbY }}>
          <motion.div
            className="fill"
            initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease }}
          >
            <div className="fill sway"><Glyph src="umbrella-big.svg" /></div>
          </motion.div>
        </motion.div>
        <motion.div className="a hand" style={{ ...at([-85, 560, 660.3, 495.2], [-39, 37, 1737.6, 1303.2]), y: handY }}>
          <motion.img
            src={img('hand-phone.webp')}
            alt="A hand holding a phone showing the Luft forecast screen"
            width={2200}
            height={1650}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.15, ease }}
          />
        </motion.div>

        <div className="top">
          <a href="#top" aria-label="Luft"><Logo /></a>
          <nav className="links" aria-label="Primary"><Links /></nav>
          <Burger onClick={onMenu} />
        </div>

        <h1 className="a hero-h" style={at([20, 116, 353], [1220, 250, 640])}>
          <RiseWords text="How is your inner weather today?" delay={0.2} />
        </h1>
        <motion.div
          className="a hero-p"
          style={at([20, 298, 353], [1220, 554, 506])}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
        >
          <p className="lead">Your mind’s alert signals are always there— it’s time to learn what they’re telling you.</p>
          <p>Luft combines a bluetooth fidget with smart reflection tools to help you notice triggers, process emotions, and avoid overwhelm.</p>
        </motion.div>
        <motion.a
          className="a badge"
          href="#early"
          aria-label="Download on the App Store, coming soon. Get early access"
          style={at([60.08, 472, 272.84, 81], [1220, 846, 363.79, 108])}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease }}
        >
          <img src={img('appstore-badge.png')} alt="" />
        </motion.a>
      </div>
    </section>
  )
}
