import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { about } from '../data/content'
import { useCountUp } from '../lib/hooks'
import Reveal from './Reveal'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <span className="stat-value serif">{n}<span className="terra">{suffix}</span></span>
      <span className="stat-label mono">{label}</span>
    </div>
  )
}

export default function About() {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true, margin: '-20% 0px' })

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="chapter">
          <span className="kicker">About</span>
          <span className="kicker"><span className="idx">01</span> / 06</span>
        </div>

        <div className="about-grid">
          <div className="about-body">
            <Reveal>
              <p className="lead about-lead">
                I don’t just study AI — I build with it. I turn messy problems into
                systems that <em className="terra">actually ship</em>.
              </p>
            </Reveal>
            {about.story.map((p, i) => (
              <Reveal key={i} delay={0.06 * (i + 1)}>
                <p className="about-para">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="about-stats" ref={statsRef}>
            {about.stats.map((s) => (
              <Stat key={s.label} {...s} start={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
