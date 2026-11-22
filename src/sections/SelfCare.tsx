import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { BtChip, OkChip } from '../components/Chips'
import { Float } from '../components/Float'
import { Reveal } from '../components/Reveal'
import { at, centre, img } from '../lib/layout'
import './selfcare.css'

/** One word of the big desktop headline, sliding in from its side. */
function Word({ side, delay, d, text, tone }: { side: 'l' | 'r'; delay: number; d: [number, number, number?]; text: string; tone: 'navy' | 'lite' }) {
  return (
    <Reveal className={`a sc ${side} ${tone}`} style={at([0, 0], d)} x={side === 'l' ? -160 : 160} y={0} delay={delay}>{text}</Reveal>
  )
}

export function SelfCare() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rot = useTransform(scrollYProgress, [0.15, 0.5], [0, -5.5])
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])
  return (
    <section className="selfcare sec" ref={ref} aria-label="Self care, self knowledge, and safe space">
      <div className="stage">
        <div className="dsk">
          <Word side="l" delay={0} d={[0, 270, 770]} text="self care," tone="navy" />
          <Word side="r" delay={0.1} d={[1340, 270]} text="self" tone="lite" />
          <Word side="l" delay={0.15} d={[0, 440, 770]} text="knowledge," tone="lite" />
          <Word side="r" delay={0.25} d={[1340, 440]} text="and" tone="navy" />
          <Word side="l" delay={0.3} d={[0, 610, 770]} text="safe" tone="navy" />
          <Word side="r" delay={0.4} d={[1340, 610]} text="space." tone="lite" />
        </div>
        <div className="mob">
          {(['self care,', 'self knowledge,', 'and safe space.'] as const).map((t, i) => (
            <Reveal key={t} className={`a sc l ${i === 1 ? 'lite' : 'navy'}`} style={at([24, 40 + i * 48], [0, 0])} x={-60} y={0} delay={i * 0.12}>{t}</Reveal>
          ))}
        </div>

        <Float still className="ph" pos={centre([217.4, 432.8, 230], [1035.8, 566.4, 480])}>
          <motion.img src={img('phone-selfcare.webp')} alt="The Luft weather log screen" style={{ rotate: rot, y }} loading="lazy" />
        </Float>

        <Float r={10} d={7} pos={centre([54.2, 242.7, 87.7], [270.1, 177.3, 114.6])}>
          <img src={img('face-a.svg')} alt="" loading="lazy" />
        </Float>
        <Float className="dsk" r={-8} d={8} delay={-2} pos={centre([0, 0], [1756, 364.6, 91.8])}>
          <img src={img('face-b.svg')} alt="" loading="lazy" />
        </Float>
        <Float className="dsk" r={-6} d={6} delay={-1} pos={centre([0, 0], [508.4, 961, 69.8])}>
          <img src={img('face-c.svg')} alt="" loading="lazy" />
        </Float>
        <Float r={-3} d={6.5} pos={centre([264.3, 208.3], [1431.7, 166.2])}>
          <BtChip fs={[17, 25.5]} />
        </Float>
        <Float r={0} d={7.5} delay={-3} pos={centre([85.5, 575.1, 196], [277, 857.7, 257.5])}>
          <img src={img('stat-total.png')} alt="Total clicks: 104" loading="lazy" />
        </Float>
        <Float r={3} d={7} delay={-2} pos={centre([216.8, 713], [1513.8, 906.5])}>
          <OkChip fs={[14, 22.4]} />
        </Float>
      </div>
    </section>
  )
}
