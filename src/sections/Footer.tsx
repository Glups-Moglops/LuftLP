import { Logo } from '../components/Logo'
import { Links } from '../components/nav/NavLinks'
import { Reveal } from '../components/Reveal'
import { Signup } from './Signup'
import './footer.css'

export function Footer() {
  return (
    <footer className="foot" id="early">
      <Reveal className="foot-card" y={50}>
        <div className="brand">
          <Logo />
          <p>Weather the storm.</p>
        </div>
        <nav className="foot-links" aria-label="Footer"><Links /></nav>
        <div className="early">
          <h2>Get early access</h2>
          <Signup />
        </div>
      </Reveal>
    </footer>
  )
}
