import { useEffect, useRef, useState } from 'react'

// A soft trailing dot + ring custom cursor. Grows over interactive elements.
// Only active on fine-pointer devices; falls back to the native cursor on touch.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    document.body.classList.add('custom-cursor')
    setHidden(false)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
    }
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const over = (e) => {
      if (e.target.closest('a, button, .magnetic, input, textarea, [data-cursor]')) {
        ring.current?.classList.add('cursor-ring--active')
      }
    }
    const out = (e) => {
      if (e.target.closest('a, button, .magnetic, input, textarea, [data-cursor]')) {
        ring.current?.classList.remove('cursor-ring--active')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.body.classList.remove('custom-cursor')
    }
  }, [])

  if (hidden) return null
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
