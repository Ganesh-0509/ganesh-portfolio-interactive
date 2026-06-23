import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/content'
import { scrollToId, useActiveSection } from '../lib/hooks'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => { setOpen(false); scrollToId(id) }

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); go('home') }}>
          Ganesh Kumar T
        </a>

        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'nav-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(l.id) }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-link nav-link--cta" onClick={(e) => { e.preventDefault(); go('contact') }}>
            Contact
          </a>
        </nav>

        <button
          className={`nav-burger ${open ? 'nav-burger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>
    </motion.header>
  )
}
