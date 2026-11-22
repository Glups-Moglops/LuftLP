import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { BtChip, OkChip } from '../components/Chips'
import { Cloud } from '../components/Cloud'
import { Float } from '../components/Float'
import { Reveal } from '../components/Reveal'
import { at, centre, img } from '../lib/layout'
import '../components/badge.css'
import './cta.css'

export function Cta() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], [120, 0])
  return (
    <section className="cta sec" aria-labelledby="cta-h">
      <div className="stage">
        <Cloud m={[-170, 220, 420, 130]} d={[1458, 267, 860, 250]} mi="-23.08% -7.14%" di="-40% -11.63%" src={['m-cloud-a.svg', 'cloud1.svg']} />
        <Cloud slow m={[190, 170, 420, 130]} d={[-340, 416, 800, 240]} mi="-23.08% -7.14%" di="-41.67% -12.5%" src={['m-cloud-a.svg', 'cloud2.svg']} />
        <Reveal className="a cta-h" style={at([20, 64, 353], [180, 140, 1560])}>
          <h2 id="cta-h">Coming Soon to the App Store</h2>
        </Reveal>
        <Reveal className="a cta-p" style={at([46.5, 168, 300], [460, 276, 1000])} delay={0.1}>
          <p>Notice your triggers. Process your emotions. Avoid overwhelm.</p>
        </Reveal>
        <Reveal className="a badge" style={at([65.54, 242, 261.93, 77.76], [778.11, 348, 363.79, 108])} delay={0.2}>
          <a href="#early" aria-label="Download on the App Store, coming soon. Get early access"><img src={img('appstore-badge.png')} alt="" /></a>
        </Reveal>
        <motion.div className="a cta-phone" style={{ ...at([61.5, 351.76, 270, 618.3], [683.1, 521, 553.4, 1267.1]), y }}>
          <img src={img('phone-cta.webp')} alt="The Luft weather log screen" loading="lazy" />
        </motion.div>
        <Float r={7.6} d={6} pos={centre([108.9, 704.8], [551.4, 741.9])}>
          <OkChip fs={[14, 20.8]} />
        </Float>
        <Float r={-12} d={7} delay={-2} pos={centre([288.5, 587.8, 178], [495.8, 904.9, 232])}>
          <img src={img('stat-total.png')} alt="Total clicks: 104" loading="lazy" />
        </Float>
        <Float className="dsk" r={-2} d={6.5} delay={-1} pos={centre([0, 0], [1383, 733.7])}>
          <BtChip fs={[0, 23.8]} />
        </Float>
        <Float className="dsk" r={0} d={8} delay={-4} pos={centre([0, 0], [1339.5, 909.6, 357])}>
          <img src={img('banner-sunny.png')} alt="Sunny inner weather banner" loading="lazy" />
        </Float>
        <Cloud m={[-140, 616, 460, 160]} d={[600, 1090, 860, 260]} mi="-22.5% -7.83%" di="-13.85% -4.19%" src={['m-cloud-b.svg', 'cloud3.svg']} />
        <Cloud slow m={[110, 646, 420, 150]} d={[-260, 1030, 1000, 300]} mi="-24% -8.57%" di="-12% -3.6%" src={['m-cloud-c.svg', 'cloud4.svg']} />
        <Cloud m={[220, 606, 360, 160]} d={[1220, 1020, 1000, 300]} mi="-22.5% -10%" di="-12% -3.6%" src={['m-cloud-d.svg', 'cloud4.svg']} />
      </div>
    </section>
  )
}
