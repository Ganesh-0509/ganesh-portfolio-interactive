import { motion } from 'framer-motion'
import { skills, tripleThreat } from '../data/content'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="chapter">
          <span className="kicker">What I do</span>
          <span className="kicker"><span className="idx">02</span> / 06</span>
        </div>

        <Reveal>
          <h2 className="section-title">Three disciplines, <em>one</em> craft.</h2>
        </Reveal>

        <div className="disc-grid">
          {tripleThreat.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="disc">
              <span className="disc-idx mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="disc-title">{t.title}</h3>
              <p className="disc-blurb muted">{t.blurb}</p>
            </Reveal>
          ))}
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
            >
              <span className="skill-name">{s.name}</span>
              <span className="skill-track">
                <motion.span
                  className="skill-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: s.level / 100 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.1 + i * 0.04 }}
                />
              </span>
              <span className="skill-pct mono">{s.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
