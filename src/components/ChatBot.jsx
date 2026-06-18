import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getAnswer, greeting } from '../lib/chatbot'

// A floating, fully-static assistant. Answers from portfolio data — no LLM.
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
// Custom four-point "spark" mark — reads as AI, fits the terracotta palette.
function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5c.45 4.2 1.8 6.6 5 8.5-3.2 1.9-4.55 4.3-5 8.5-.45-4.2-1.8-6.6-5-8.5 3.2-1.9 4.55-4.3 5-8.5z" />
      <circle cx="19" cy="4.5" r="1.4" />
    </svg>
  )
}
function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

function Bubble({ m }) {
  return (
    <div className={`chat-msg chat-msg--${m.from}`}>
      <div className="chat-bubble">
        {m.text}
        {m.links?.length > 0 && (
          <div className="chat-links">
            {m.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="chat-link">
                {l.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', ...greeting }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Latest chips come from the most recent bot message.
  const lastBot = [...messages].reverse().find((m) => m.from === 'bot')
  const chips = !typing ? lastBot?.chips || [] : []

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = (raw) => {
    const text = raw.trim()
    if (!text) return
    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...getAnswer(text) }])
      setTyping(false)
    }, reduce ? 120 : 520)
  }

  return (
    <>
      <motion.button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 18 }}
      >
        {open ? <CloseIcon /> : <SparkIcon />}
        {!open && <span className="chat-fab-ping" aria-hidden="true" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Ask about Ganesh"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chat-header">
              <div>
                <span className="chat-title serif">Ganesh's lil’ assistant</span>
                <span className="chat-status"><span className="chat-dot" /> ask me anything ✦</span>
              </div>
              <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close"><CloseIcon /></button>
            </div>

            <div className="chat-body" ref={scrollRef}>
              {messages.map((m, i) => <Bubble key={i} m={m} />)}
              {typing && (
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-bubble chat-typing"><span /><span /><span /></div>
                </div>
              )}

              {chips.length > 0 && (
                <div className="chat-chips">
                  {chips.map((c) => (
                    <button key={c} className="chat-chip" onClick={() => send(c)}>{c}</button>
                  ))}
                </div>
              )}
            </div>

            <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(input) }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask about a project…"
                aria-label="Type your question"
              />
              <button type="submit" className="chat-send" aria-label="Send" disabled={!input.trim()}>
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
