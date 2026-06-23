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
          <span className="kicker"><span className="idx">05</span> / 06</span>
        </div>

        <Reveal><h2 className="section-title">Proof of <em>work</em>.</h2></Reveal>

        <div className="honors">
          {wins.map((w, i) => (
            <motion.div
              key={w.title}
              className="honor"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
            >
              <span className="honor-idx mono">{String(i + 1).padStart(2, '0')}</span>
              <div className="honor-body">
                <div className="honor-head">
                  <h3 className="honor-title">{w.title}</h3>
                  {w.badge && <span className="honor-badge mono">{w.badge}</span>}
                </div>
                <p className="honor-detail muted">{w.detail}</p>
              </div>
              <span className="honor-year mono">{w.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
