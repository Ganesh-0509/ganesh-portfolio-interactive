import { motion } from 'framer-motion'
import { wins } from '../data/content'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Wins() {
  return (
    <section id="wins" className="section wins">
      <div className="container">
        <div className="chapter">
          <span className="kicker">Highlights</span>
        </div>

        <Reveal><h2 className="section-title">Proof of <em>work</em>.</h2></Reveal>

        <div className="wins-grid">
          {wins.map((w, i) => (
            <motion.article
              key={w.title}
              className="wincard"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 2) * 0.08 }}
            >
              <div className="wincard-img">
                <img src={w.image} alt={w.title} loading="lazy" />
                <span className="wincard-medal" aria-hidden="true">{w.medal}</span>
              </div>
              <div className="wincard-body">
                <div className="wincard-meta mono">
                  <span>{w.year}</span>
                  {w.chip && <span className="wincard-chip">{w.chip}</span>}
                </div>
                <h3 className="wincard-title">{w.title}</h3>
                <p className="wincard-desc muted">{w.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
