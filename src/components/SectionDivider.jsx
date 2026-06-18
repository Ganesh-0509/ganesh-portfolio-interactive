import { motion } from 'framer-motion'

// A hand-drawn squiggle that "draws itself" as it scrolls into view — a warm,
// scrapbook-y seam between sections. Decorative only (aria-hidden).
export default function SectionDivider({ tone = 'coral' }) {
  const stroke = `var(--${tone})`
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="divider-svg">
        <motion.path
          d="M0,20 Q100,2 200,20 T400,20 T600,20 T800,20 T1000,20 T1200,20"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <motion.span
        className="divider-star"
        style={{ color: stroke }}
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        ✦
      </motion.span>
    </div>
  )
}
