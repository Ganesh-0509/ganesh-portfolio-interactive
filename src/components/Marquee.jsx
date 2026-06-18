// Continuous CSS marquee. `variant`:
//   'bar'  → thin dark strip (top-of-page tagline)
//   'tech' → big italic-serif dark strip (tech stack divider)
export default function Marquee({ items, variant = 'tech', speed = 32, sep = '✦' }) {
  // Duplicate the list so the loop is seamless.
  const row = (
    <div className="marquee-row">
      {items.map((it, i) => (
        <span className="marquee-item" key={i}>
          {it}
          <span className="marquee-sep">{sep}</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`marquee marquee--${variant}`} aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {row}
        {row}
      </div>
    </div>
  )
}
