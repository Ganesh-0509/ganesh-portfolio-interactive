import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/content'
import Reveal from './Reveal'

const filters = ['All', 'AI/ML', 'Web', 'Full Stack']
const EASE = [0.22, 1, 0.36, 1]

function Project({ p, n }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`feature ${n % 2 ? 'feature--alt' : ''}`}
    >
      <a className="feature-figure" href={p.demo || p.repo} target="_blank" rel="noreferrer" aria-label={p.title}>
        {p.image
          ? <img src={p.image} alt={p.title} loading="lazy" />
          : <div className="feature-ph"><span className="serif">{p.title}</span></div>}
      </a>

      <div className="feature-text">
        <span className="feature-idx mono">{String(n + 1).padStart(2, '0')}</span>
        <h3 className="feature-title">{p.title}</h3>
        <p className="feature-blurb muted">{p.blurb}</p>
        <p className="feature-tech mono">{p.tech.join('  ·  ')}</p>
        <div className="feature-links">
          {p.repo && <a className="tlink" href={p.repo} target="_blank" rel="noreferrer">Code <span className="arr">↗</span></a>}
          {p.demo && <a className="tlink tlink--accent" href={p.demo} target="_blank" rel="noreferrer">Live <span className="arr">↗</span></a>}
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="chapter">
          <span className="kicker">Selected work</span>
          <span className="kicker"><span className="idx">03</span> / 06</span>
        </div>

        <div className="work-head">
          <Reveal><h2 className="section-title">Things I’ve <em>built</em> &amp; shipped.</h2></Reveal>
          <Reveal delay={0.08} className="work-filters mono">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter ${filter === f ? 'filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </Reveal>
        </div>

        <motion.div layout className="feature-list">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => <Project key={p.title} p={p} n={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
