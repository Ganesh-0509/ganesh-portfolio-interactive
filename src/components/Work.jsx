import { motion } from 'framer-motion'
import { projects } from '../data/content'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

function ProjectCard({ p, n }) {
  const href = p.demo || p.repo
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (n % 2) * 0.08 }}
      className="pcard"
    >
      <a
        className={`pcard-media tone-${p.tone}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={p.title}
      >
        <span className="pcard-chrome" aria-hidden="true"><i /><i /><i /></span>
        {p.image
          ? <img src={p.image} alt={p.title} loading="lazy" />
          : <span className="pcard-ph serif">{p.title}</span>}
      </a>

      <div className="pcard-body">
        <h3 className="pcard-title">{p.title}</h3>
        <p className="pcard-blurb muted">{p.blurb}</p>
        <a className="pcard-link tlink tlink--accent" href={href} target="_blank" rel="noreferrer">
          Read the story <span className="arr">→</span>
        </a>
      </div>
    </motion.article>
  )
}

export default function Work() {
  // The four best — those flagged `featured` in content.js.
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="chapter">
          <span className="kicker">Selected work</span>
          <span className="kicker"><span className="idx">04</span> / 06</span>
        </div>

        <div className="work-head">
          <Reveal><h2 className="section-title">Things I’ve <em>built</em> &amp; shipped.</h2></Reveal>
        </div>

        <div className="pcard-grid">
          {featured.map((p, i) => <ProjectCard key={p.title} p={p} n={i} />)}
        </div>
      </div>
    </section>
  )
}
