import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Editorial preloader: the name set in serif, a count, and a single hairline
// that draws across the page — then the whole sheet lifts away.
export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let raf
    let start = null
    const duration = 1300
    const tick = (now) => {
      if (start === null) start = now
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 350)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <div className="preloader-row">
        <span className="preloader-name serif">Ganesh Kumar T</span>
        <span className="preloader-count mono">{String(count).padStart(3, '0')}</span>
      </div>
      <div className="preloader-bar"><div className="preloader-bar-fill" style={{ transform: `scaleX(${count / 100})` }} /></div>
    </motion.div>
  )
}
