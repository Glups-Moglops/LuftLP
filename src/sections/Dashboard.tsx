import { Float } from '../components/Float'
import { Rail } from '../components/Rail'
import { Reveal } from '../components/Reveal'
import { Tilt } from '../components/Tilt'
import { centre, img } from '../lib/layout'
import './dashboard.css'

export function Dashboard() {
  return (
    <section className="dash sec" id="features" aria-labelledby="dash-h">
      <div className="dash-row">
        <Reveal className="dash-copy">
          <h2 id="dash-h">Visual Dashboard & Heatmaps</h2>
          <p>Track your peak click times, daily highs and lows, and stimming patterns on intuitive hourly graphs and heatmaps.</p>
        </Reveal>

        <Reveal className="dash-art dsk" y={60}>
          <Tilt className="c still tilt" style={centre([0, 0], [498, 318, 502])} max={4}>
            <img src={img('chart-card.webp')} alt="The click chart card with a morning, noon and night heatmap" loading="lazy" />
          </Tilt>
          <Float r={-6} d={7} pos={centre([0, 0], [152.4, 259.2, 257.5])}>
            <img src={img('stat-total.png')} alt="Total clicks: 104" loading="lazy" />
          </Float>
          <Float r={0} d={8} delay={-3} pos={centre([0, 0], [850.5, 424.9, 234.5])}>
            <img src={img('stat-most.png')} alt="Most clicks at 12 pm" loading="lazy" />
          </Float>
        </Reveal>

        <div className="mob">
          <Rail className="tiles" dots={false}>
            <div className="tile"><img src={img('dash-chart.webp')} alt="The click chart card" loading="lazy" /></div>
            <div className="tile stack">
              <img src={img('banner-sunny.png')} alt="Sunny inner weather banner" loading="lazy" />
              <img src={img('stat-total.png')} alt="Total clicks: 104" loading="lazy" />
              <img src={img('stat-most.png')} alt="Most clicks at 12 pm" loading="lazy" />
            </div>
          </Rail>
        </div>
      </div>

      <Reveal className="privacy" y={50}>
        <span id="privacy" className="anchor" />
        <img className="app-icon" src={img('app-icon.svg')} alt="" loading="lazy" />
        <h3>Your personal data stays yours.</h3>
        <p>Luft values your privacy above all else. Your fidget data, logs, and journal entries are stored locally on your device and are visible only to you.</p>
      </Reveal>
    </section>
  )
}
