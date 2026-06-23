import { tripleThreat } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="chapter">
          <span className="kicker">What I do</span>
        </div>

        <Reveal>
          <h2 className="section-title">Three disciplines, <em>one</em> craft.</h2>
        </Reveal>

        <div className="disc-grid">
          {tripleThreat.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="disc">
              <h3 className="disc-title">{t.title}</h3>
              <p className="disc-blurb muted">{t.blurb}</p>
              <ul className="disc-stack">
                {t.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
