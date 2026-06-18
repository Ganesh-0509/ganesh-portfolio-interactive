import { motion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// SplitText — "soft-blur-in" reveal (Apple keynote signature). Per-word fade +
// upward drift + blur lift. Spec: 900ms, 25ms stagger, easeOutExpo-ish curve.
// Reused by the hero headline and tagline so the reveal rhythm is consistent.
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1]

export const blurContainer = (delay = 0, stagger = 0.045) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
})

export const blurWord = {
  hidden: { opacity: 0, y: 16, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
}

// A motion word that respects the parent's stagger. Inline-block so blur + y read.
export function Word({ children, className = '' }) {
  return (
    <motion.span variants={blurWord} className={className} style={{ display: 'inline-block', willChange: 'transform, filter' }}>
      {children}
    </motion.span>
  )
}

// Plain-string convenience: splits on spaces and reveals word-by-word.
export default function SplitText({ text, active, delay = 0, stagger = 0.04, className = '', as = 'p' }) {
  const M = motion[as] || motion.p
  return (
    <M
      className={className}
      variants={blurContainer(delay, stagger)}
      initial="hidden"
      animate={active ? 'show' : 'hidden'}
    >
      {text.split(' ').map((w, i) => (
        <Word key={i}>
          {w}
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </Word>
      ))}
    </M>
  )
}
