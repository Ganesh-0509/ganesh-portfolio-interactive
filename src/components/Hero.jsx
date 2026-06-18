import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { scrollToId } from '../lib/hooks'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero({ loaded }) {
  // Editorial reveal: opacity + a small rise, staggered. No spring, no bounce.
  const rise = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { delay, duration: 0.9, ease: EASE },
  })

  return (
    <section id="home" className="hero">
      <div className="container">
        {/* masthead meta line */}
        <motion.div className="hero-meta" {...rise(0.1)}>
          <span className="kicker">AI Engineer — BTech ’28</span>
          <span className="kicker">{profile.location} · 2026</span>
        </motion.div>
        <motion.hr className="rule" {...rise(0.15)} />

        <div className="hero-grid">
          <div className="hero-lede">
            <motion.h1 className="display hero-title" {...rise(0.25)}>
              I don’t just study&nbsp;AI<span className="hero-period">.</span>
              <br />I <em>build</em> with it.
            </motion.h1>

            <motion.p className="hero-tagline" {...rise(0.4)}>
              {profile.tagline}
            </motion.p>

            <motion.div className="hero-roles" {...rise(0.5)}>
              {profile.roles.join('  /  ')}
            </motion.div>

            <motion.div className="hero-actions" {...rise(0.58)}>
              <button className="tlink tlink--accent" onClick={() => scrollToId('work')}>
                Selected work <span className="arr">→</span>
              </button>
              <a className="tlink" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Résumé <span className="arr">↗</span>
              </a>
            </motion.div>
          </div>

          {/* portrait as an editorial figure */}
          <motion.figure
            className="hero-figure"
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.35, duration: 1, ease: EASE }}
          >
            <div className="hero-portrait">
              {profile.photo
                ? <img src={profile.photo} alt={profile.name} />
                : <div className="hero-portrait-ph" />}
            </div>
            <figcaption className="kicker">
              <span className="idx">Fig.01</span> &nbsp;{profile.name} — Chennai
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <motion.button
        className="hero-scroll kicker"
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Scroll ↓
      </motion.button>
    </section>
  )
}
