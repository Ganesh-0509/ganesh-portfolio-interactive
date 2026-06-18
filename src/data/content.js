// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
// Edit this file to update text, projects, skills, links — no component changes
// needed. Anything marked  // TODO:  is a placeholder waiting on a real asset.
// Content compiled from the résumé (Profile.pdf) + project intelligence report.
// ─────────────────────────────────────────────────────────────────────────────

// BASE_URL makes asset links work on GitHub Pages project sites (/repo/) too.
const asset = (file) => import.meta.env.BASE_URL + file

export const profile = {
  name: 'Ganesh Kumar T',
  shortName: 'Ganesh',
  // Handwritten greeting in the hero.
  greeting: "hey, i'm ganesh",
  // Rotating role words under the headline.
  roles: ['Agentic AI Engineer', 'RAG & LLM Systems', 'Full-Stack Builder', 'Problem Solver'],
  // Short, warm one-liner under the headline.
  tagline:
    "AI/ML engineer at Saveetha (CGPA 8.2) building agentic systems, RAG pipelines, and LLM-powered apps. Intel AI Hackathon 2025 winner — 1st of 90+ teams. Chasing agentic / finance-AI internships.",
  location: 'Chennai, Tamil Nadu, India',
  email: 'ganesh957kumar@gmail.com',
  // Confirmed by Ganesh (2026-06-17).
  phone: '+91 78250 83996',
  // Résumé PDF, hosted locally in /public (replaces the old Google Drive link).
  resumeUrl: asset('Ganesh_Kumar_Resume.pdf'),
  // Headshot at /public/profile.jpg (stepwell portrait), framed via CSS object-position.
  photo: asset('profile.jpg'),
}

export const about = {
  story: [
    "I don't just study AI — I build with it. As a second-year AI/ML engineer at Saveetha Engineering College (CGPA 8.2), I build agentic AI systems, RAG pipelines, and LLM-powered applications that solve real problems — not academic exercises.",
    "My work runs on multi-agent orchestration, PGVector RAG with Gemini embeddings, and production workflows with self-reflection loops — Python, FastAPI, React, and the Gemini / OpenAI / Claude APIs. I won the Intel AI Hackathon 2025 (1st of 90+ teams) building a multimodal agentic RAG system. Now I'm looking to contribute to agentic and finance-AI workflows from day one.",
  ],
  stats: [
    { label: 'LeetCode solved', value: 70, suffix: '+' },
    { label: 'Projects shipped', value: 14, suffix: '+' },
    { label: 'AI models used', value: 5, suffix: '+' },
  ],
}

// "The Triple Threat" — three things you do. Each carries the real stack it
// runs on (shown as a typographic keyword list, not skill bars).
export const tripleThreat = [
  {
    title: 'Gen AI & LLMs',
    blurb: 'Orchestrating Gemini, GPT-4o & Claude into agents and assistants that actually ship.',
    stack: ['Gemini', 'GPT-4o', 'Claude', 'LangGraph', 'RAG + PGVector', 'Prompt orchestration'],
  },
  {
    title: 'Computer Vision',
    blurb: 'OpenCV pipelines — from shape-from-shading 3D terrain to bilingual prescription OCR.',
    stack: ['OpenCV', 'Tesseract OCR', 'NumPy / SciPy', 'SHAP', 'Shape-from-shading'],
  },
  {
    title: 'Full-Stack Systems',
    blurb: 'End-to-end builds: FastAPI / Flask backends wired to React & Next.js front-ends.',
    stack: ['React / Next.js', 'FastAPI / Flask', 'PostgreSQL · Supabase', 'TypeScript', 'Python', 'Docker'],
  },
]

export const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 78 },
  { name: 'Data Structures & Algorithms', level: 80 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'HTML5 & CSS3', level: 92 },
  { name: 'SQL', level: 78 },
]

export const projects = [
  {
    title: 'CampusSync Edge',
    blurb:
      'Full-stack AI platform with a production RAG pipeline (Gemini embeddings + PGVector + Redis), hallucination detection, and a RandomForest classifier (82.1% F1) exported to ONNX for edge inference.',
    tags: ['AI/ML', 'Full Stack'],
    tech: ['FastAPI', 'React', 'PGVector', 'Gemini', 'ONNX'],
    tone: 'coral',
    image: asset('campusSync.png'),
    repo: 'https://github.com/Ganesh-0509/CampusSync-Edge',
    demo: '',
    featured: true,
  },
  {
    title: 'Namma Connect',
    blurb:
      'Multi-tenant NGO coordination platform: OCR-classifies field reports (Tamil & English), auto-matches volunteers by skills, proximity and reliability, and escalates SLA breaches — with GPS-verified check-ins.',
    tags: ['AI/ML', 'Full Stack'],
    tech: ['React', 'FastAPI', 'Gemini', 'Supabase', 'OpenCV'],
    tone: 'sage',
    image: asset('namma_connect.png'),
    repo: 'https://github.com/Ganesh-0509/smart-resource-allocation',
    demo: 'https://ngo-app-812651531349.asia-south1.run.app',
    featured: true,
  },
  {
    title: 'JanaNaadi',
    blurb:
      "Real-time public-sentiment platform with a knowledge graph spanning India's 250 MCD wards.",
    tags: ['AI/ML', 'Full Stack'],
    tech: ['FastAPI', 'React', 'D3.js', 'Gemini'],
    tone: 'sky',
    image: asset('jananaadi.png'),
    repo: 'https://github.com/Ganesh-0509/JanaNaadi',
    demo: 'https://jana-naadi.vercel.app/',
    featured: true,
  },
  {
    title: 'ISRO HAVK',
    blurb:
      'Turns flat 2D satellite images into navigable 3D lunar terrain with A* rover path planning.',
    tags: ['AI/ML', 'Full Stack'],
    tech: ['Python', 'Flask', 'OpenCV', 'Babylon.js'],
    tone: 'mustard',
    image: asset('isro-havk.png'),
    repo: 'https://github.com/Ganesh-0509/ISRO-HAVK-Revolutionizing-Lunar-Terrain-Intelligence-for-Space-Missions',
    demo: '',
    featured: false,
  },
  {
    title: 'Bias-Lab',
    blurb:
      'Enterprise AI-fairness platform: upload a dataset and get an 8-stage bias audit — proxy detection, SHAP explainability, counterfactual tests, and Gemini-written mitigation reports. A production-grade UI over what AIF360/Fairlearn leave to code.',
    tags: ['AI/ML', 'Full Stack'],
    tech: ['React', 'FastAPI', 'SHAP', 'Fairlearn', 'Gemini'],
    tone: 'coral',
    image: asset('bias-lab.png'),
    repo: 'https://github.com/Ganesh-0509/Bias-Lab',
    demo: 'https://bias-lab-35890642291.us-central1.run.app',
    featured: true,
  },
  {
    title: 'FinMate',
    blurb:
      'AI finance co-pilot with voice & OCR expense capture, contextual coaching, and gamified, goal-first budgeting built for India. A team build.',
    tags: ['AI/ML', 'Full Stack'],
    tech: ['Next.js', 'TypeScript', 'Gemini', 'Firebase'],
    tone: 'sage',
    image: asset('finmate.png'),
    // Team project — repo lives under teammate Vino's account.
    repo: 'https://github.com/Vino1705/Finmate',
    demo: '',
    featured: false,
  },
]

// "Wins" / receipts — achievements (from the résumé, 2025).
export const wins = [
  { title: 'Intel AI Hackathon 2025', detail: '1st place — 90+ teams (Enterprise360)', year: '2025', emoji: '🏆' },
  { title: 'OpenAI × NxtWave Buildathon', detail: 'State 1st · National Top 10', year: '2025', emoji: '🥇' },
  { title: 'VØID v1 Hackathon — VIT', detail: '2nd Runners-Up · 90 teams', year: '2025', emoji: '🥈' },
]

export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Ganesh-0509' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ganeshkumar-957t/' },
  // X / Twitter removed — no handle exists.
  { name: 'Email', icon: 'mail', url: 'mailto:ganesh957kumar@gmail.com' },
]

// Contact form: posts to Formspree so messages arrive in Ganesh's inbox.
// If emptied, the form falls back to opening a mailto: link.
// NOTE: the FIRST submission triggers a one-time confirmation email from
// Formspree — click that link once to start receiving messages.
export const contactFormEndpoint = 'https://formspree.io/f/xykaazyz'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'What I do' },
  { id: 'work', label: 'Work' },
  { id: 'wins', label: 'Highlights' },
]
