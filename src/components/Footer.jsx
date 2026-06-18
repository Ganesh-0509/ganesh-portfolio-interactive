import { profile, socials } from '../data/content'
import { scrollToId } from '../lib/hooks'

export default function Footer() {
  const year = 2026
  const links = socials.filter((s) => s.url)
  return (
    <footer className="footer">
      <div className="container">
        <hr className="rule" />
        <div className="footer-top">
          <button className="footer-back tlink" onClick={() => scrollToId('home')}>↑ Back to top</button>
          <nav className="footer-socials mono">
            {links.map((s) => (
              <a key={s.name} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="tlink">{s.name}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-name serif">{profile.name}</span>
          <span className="footer-note mono">Designed &amp; built in Chennai · © {year}</span>
        </div>
      </div>
    </footer>
  )
}
