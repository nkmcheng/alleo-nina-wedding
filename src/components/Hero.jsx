import useCountdown from '../hooks/useCountdown.js'
import heroImg from '../assets/hero.jpg'

const WEDDING_ISO = '2027-02-06T11:00:00+08:00'

const pad = (n) => String(n).padStart(2, '0')

export default function Hero({ motif }) {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_ISO)

  return (
    <header
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${motif?.art?.hero ?? heroImg})` }}
    >
      <div className="hero-inner">
        <p className="hero-eyebrow">Together with their families</p>
        <h1>
          Alleo <span className="amp">&amp;</span> Nina
        </h1>
        <p className="hero-script">are getting married in the Tagaytay hills</p>
        <div className="date-line">
          <span className="dash" />
          <span>Saturday · 06 February 2027</span>
          <span className="dash" />
        </div>
        <div className="countdown" aria-label="Countdown to the wedding">
          <div className="cd-cell">
            <div className="cd-num">{days}</div>
            <div className="cd-label">Days</div>
          </div>
          <div className="cd-cell">
            <div className="cd-num">{pad(hours)}</div>
            <div className="cd-label">Hours</div>
          </div>
          <div className="cd-cell">
            <div className="cd-num">{pad(minutes)}</div>
            <div className="cd-label">Minutes</div>
          </div>
          <div className="cd-cell">
            <div className="cd-num">{pad(seconds)}</div>
            <div className="cd-label">Seconds</div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#details">
        Scroll ↓
      </a>
    </header>
  )
}
