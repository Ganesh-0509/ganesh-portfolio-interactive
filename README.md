# Ganesh Kumar T — Interactive Portfolio

A warm, playful, "scrapbook" portfolio for an AI/ML engineer. Cream canvas with
coral + sage + mustard accents, a bold Fraunces serif + handwritten Caveat
accents, highlighter-marker emphasis, a polaroid photo with sticker pills,
scrolling marquees, smooth scrolling, magnetic buttons, and scroll-reveal motion.

**Stack:** React + Vite · Framer Motion · Lenis (smooth scroll). No WebGL — kept
intentionally light (~100KB JS gzipped).

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
[`src/data/content.js`](src/data/content.js). No component edits needed.

Search that file for `TODO:` — each marks a placeholder waiting on a real asset:

| What to add | Where |
|---|---|
| Profile photo | Drop `profile.jpg` in `public/`, set `profile.photo = '/profile.jpg'` |
| Resume PDF | Drop in `public/`, set `profile.resumeUrl = '/your-resume.pdf'` |
| Project screenshots | Drop in `public/`, set each project's `image` |
| Project repo / demo links | Each project's `repo` / `demo` |
| Your personal story | `about.story` (rewrite in your own words) |
| Stats (LeetCode, etc.) | `about.stats` |
| Social links | `socials` (add your X/Twitter or remove it) |
| Contact form backend | `contactFormEndpoint` — paste a [Formspree](https://formspree.io) URL, or leave empty to use a `mailto:` fallback |

## Deploy

The build is fully static (`dist/`). Easiest options:

- **GitHub Pages:** `npm run build`, then publish `dist/`. `vite.config.js` already
  uses `base: './'` so relative paths work under a project URL.
- **Vercel / Netlify:** import the repo, build command `npm run build`, output `dist`.

## Project structure

```
src/
  data/content.js      ← all editable content (start here)
  App.jsx              ← composition of sections
  components/
    Preloader, Cursor, ScrollProgress, Navbar, Marquee
    Hero (polaroid + stickers + marked headline)
    About, Skills (triple-threat + bars), Work, Wins, Contact, Footer
    Magnetic, Reveal, Icons   ← shared building blocks
  lib/hooks.js         ← smooth scroll, active-section, count-up
legacy/                ← the original static HTML/CSS/JS site (kept for reference)
```

Accessibility: respects `prefers-reduced-motion` (disables smooth scroll and
heavy motion). Design inspired by warm, personable scrapbook-style portfolios.
