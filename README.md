# Ganesh Kumar T — Interactive Portfolio

A clean, editorial portfolio for an AI/ML engineer. Cream canvas with coral /
sage / mustard accents, a high-contrast Fraunces display serif over Inter body
text and JetBrains Mono meta labels, chapter-numbered sections (01–06),
scroll-reveal motion, smooth scrolling, and a scripted mini-assistant chatbot.

**Stack:** React 18 + Vite · Framer Motion · Lenis (smooth scroll). No WebGL —
kept intentionally light.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> **Note for this machine:** the C: drive was full during setup, so npm's cache
> was redirected to D:. If `npm install` fails with `ENOSPC`, free up C: space or
> run `npm install --cache D:/npm-cache`.

## Where to edit your content

**Everything you'll want to change lives in one file:**
[`src/data/content.js`](src/data/content.js). Every component reads from it, so
there are no component edits for routine content changes.

| What to add / change | Where |
|---|---|
| Profile photo | Drop `profile.jpg` in `public/`, referenced by `profile.photo` |
| Resume PDF | Drop in `public/`, referenced by `profile.resumeUrl` |
| Project screenshots | Drop in `public/`, set each project's `image` |
| Project repo / demo links + tags | Each entry in the `projects` array |
| Story, stats, "triple threat" disciplines | `about`, `tripleThreat` |
| Skills (names only — surfaced in the chatbot) | `skills` |
| Achievements | `wins` |
| Social links | `socials` |
| Contact form backend | `contactFormEndpoint` — a [Formspree](https://formspree.io) URL, or empty for a `mailto:` fallback |

The chatbot's keyword/intent matching lives separately in
[`src/lib/chatbot.js`](src/lib/chatbot.js) (fully scripted — no LLM, no API key).
Add per-project keyword aliases there in the `ALIASES` map.

## Deploy

The build is fully static (`dist/`). This repo ships a GitHub Actions workflow
(`.github/workflows/`) that builds and publishes to **GitHub Pages** on every
push to `main`. `vite.config.js` uses `base: './'` so relative asset paths work
under a project URL (`https://user.github.io/repo/`).

> Social-preview (`og:image` / `twitter:image`) tags in `index.html` use
> **absolute** URLs pointing at the GitHub Pages site — update the host there if
> you move to a custom domain.

Vercel / Netlify also work: build command `npm run build`, output `dist`.

## Project structure

```
index.html             ← <head>, fonts, social-preview meta
src/
  data/content.js      ← all editable content (start here)
  lib/
    chatbot.js          ← scripted assistant: intents + project aliases
    hooks.js            ← smooth scroll, active-section, count-up
  App.jsx              ← composition of sections
  main.jsx             ← React entry
  index.css, App.css   ← global styles + section styles
  components/
    Preloader, Navbar
    Hero, About, Skills, Work, Wins, Contact, Footer
    ChatBot             ← floating scripted assistant
    Reveal              ← shared scroll-reveal wrapper
public/                ← images, resume PDF, favicon
legacy/                ← the original static HTML/CSS/JS site (kept for reference)
```

Accessibility: respects `prefers-reduced-motion` (disables Lenis smooth scroll
and shortens chat-typing delays). Active-section nav highlighting uses an
`IntersectionObserver`.
