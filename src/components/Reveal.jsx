import { motion } from 'framer-motion'

// Fade + rise into view when scrolled to. Used across sections for a calm,
// consistent editorial reveal rhythm.
export default function Reveal({ children, delay = 0, y = 16, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </M>
  )
}
