import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, FileText, Github, Linkedin, Mail, Menu, MoveUpRight, Sparkles, X } from 'lucide-react'

const project = {
  name: 'TeamFlow',
  live: 'https://team-flow-project-liart.vercel.app',
  github: 'https://github.com/amansingh7475/Team-Flow-Project',
  description: 'A team collaboration and project management app that brings work, visibility, and momentum into one shared space.',
  details: 'Authentication, workspaces, role-based access control, tasks, notifications, and real-time functionality for teams that move fast.',
  tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
}

const skills = ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Mongoose', 'Socket.IO', 'REST APIs', 'Git & GitHub', 'Tailwind CSS']
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [typed, setTyped] = useState('')
  const prefersReduced = useReducedMotion()
  const roles = ['Full Stack Developer', 'Product Engineer', 'Problem Solver']

  useEffect(() => {
    if (prefersReduced) { setTyped(roles[0]); return }
    let role = 0, index = 0, deleting = false
    const timer = window.setInterval(() => {
      const current = roles[role]
      if (!deleting) { index++; setTyped(current.slice(0, index)); if (index === current.length) deleting = true }
      else { index--; setTyped(current.slice(0, index)); if (index === 0) { deleting = false; role = (role + 1) % roles.length } }
    }, deleting ? 55 : 105)
    return () => window.clearInterval(timer)
  }, [prefersReduced])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -60% 0px' })
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' }) }

  return <div className="site-shell">
    <div className="noise" aria-hidden="true" />
    <div className="cursor-glow" aria-hidden="true" />
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => go('home')} aria-label="Back to home"><span className="brand-mark">AS</span><span>Aman Singh</span></button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['home', 'about', 'work', 'projects', 'contact'].map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => go(item)}>{item}</button>)}
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>Let's talk <ArrowUpRight size={16} /></a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse" /> Available for new opportunities</motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="hero-kicker">Hello, I’m</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .75 }}>Aman<span className="lime">.</span></motion.h1>
          <motion.div className="typed-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}><span className="slash">/</span> {typed}<span className="caret">_</span></motion.div>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}>I build thoughtful digital experiences where clean interfaces meet reliable, real-world systems.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .95 }}><a className="button button-primary" href="#projects" onClick={(e) => { e.preventDefault(); go('projects') }}>View projects <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>Contact me</a><a className="button button-ghost resume-button" href="/AmanResume.pdf" download>Download resume <ArrowUpRight size={16} /></a></motion.div>
          <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}><span>Based in India</span><span className="meta-line" /><span>Open to remote</span></motion.div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-glow" /><div className="code-card"><div className="code-top"><span /><span /><span /><small>aman.tsx</small></div><pre><code><i>const</i> <b>build</b> = {'{'}<br />  craft: <em>“with intent”</em>,<br />  ship: <em>true</em>,<br />  iterate: <em>true</em><br />{'}'};</code></pre></div><div className="float-chip chip-one"><Sparkles size={15} /> shipping ideas</div><div className="float-chip chip-two">&lt; /&gt; + ♥</div></div>
        <div className="scroll-cue"><span /> scroll to explore</div>
      </section>

      <section id="about" className="section container about"><Reveal><SectionHeading eyebrow="01 / About" title={'Curious by nature.\nIntentional by craft.'} copy="I’m a full stack developer who enjoys turning complex problems into calm, useful products. From the first sketch to the last API request, I care about the details that make software feel effortless." /></Reveal><Reveal className="about-grid" delay={.1}><div className="about-card quote-card"><span className="quote-mark">“</span><p>Great software is not just functional. It gives people a little more clarity and a little less friction.</p><span className="quote-line" /></div><div className="about-copy"><p>I work across the stack, with a soft spot for interfaces that feel alive and backends that quietly do their job.</p><div className="mini-facts"><div><strong>01</strong><span>Systems<br />thinking</span></div><div><strong>02</strong><span>Product<br />mindset</span></div><div><strong>03</strong><span>Constant<br />learning</span></div></div></div></Reveal></section>

      <section id="skills" className="section container skills"><Reveal><SectionHeading eyebrow="02 / Toolkit" title={'Tools I use to bring\nideas to life.'} /></Reveal><Reveal className="skill-list" delay={.1}>{skills.map((skill, i) => <motion.div className="skill-pill" key={skill} whileHover={{ y: -5, borderColor: 'rgba(215,255,100,.6)' }} transition={{ type: 'spring', stiffness: 300 }}><span>0{i + 1}</span>{skill}</motion.div>)}</Reveal></section>

      <section id="work" className="section container work"><Reveal><SectionHeading eyebrow="03 / Journey" title="The path so far." copy="A growing collection of experiences, experiments, and lessons in building for the web." /></Reveal><Reveal className="timeline" delay={.1}><div className="timeline-item"><span className="timeline-dot active-dot" /><div><span className="timeline-date">Currently</span><h3>Full Stack Developer</h3><p>Building full-stack web experiences with a focus on thoughtful UX, solid architecture, and continuous improvement.</p><span className="timeline-note">More details coming soon</span></div></div><div className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-date">Education</span><h3>Computer Science &amp; Engineering</h3><p>Academic background and foundational learning that shaped my approach to problem-solving.</p><span className="timeline-note">Add institution and dates</span></div></div></Reveal></section>

      <section id="projects" className="section container projects"><Reveal><div className="project-heading"><SectionHeading eyebrow="04 / Selected work" title={'A closer look at\nwhat I’m building.'} /><span className="project-count">01 / 01</span></div></Reveal><Reveal delay={.1}><article className="project-card"><div className="project-visual"><div className="visual-grid" /><div className="app-window"><div className="app-head"><span className="app-logo">T</span><div className="app-head-lines"><i /><i /></div><span className="app-avatar">A</span></div><div className="app-body"><div className="app-side"><i /><i /><i /><i /></div><div className="app-main"><div className="app-main-top"><span>Good morning, Aman</span><b>+ Add task</b></div><div className="task-stats"><i /><i /><i /></div><div className="task-row"><span /><i /><em /><strong /></div><div className="task-row second"><span /><i /><em /><strong /></div></div></div></div><div className="visual-badge">Built for teams <Check size={14} /></div></div><div className="project-info"><div className="project-label"><span>Featured project</span><span>2024 — present</span></div><h3>{project.name}</h3><p>{project.description}</p><p className="project-detail">{project.details}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.live} target="_blank" rel="noreferrer" className="button button-primary">Live demo <ArrowUpRight size={16} /></a><a href={project.github} target="_blank" rel="noreferrer" className="button button-dark"><Github size={16} /> Source code</a></div></div></article></Reveal></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><Reveal><SectionHeading eyebrow="05 / Get in touch" title={'Have an idea?\nLet’s make it real.'} copy="I’m always open to hearing about new projects, creative collaborations, or a good conversation about the web." /><div className="contact-actions"><a className="contact-link contact-email" href="mailto:amanrajput8460@gmail.com"><Mail size={19} /><span>amanrajput8460@gmail.com</span><ArrowUpRight size={16} /></a><a className="contact-link contact-linkedin" href="https://www.linkedin.com/in/aman-singh-a64149251/" target="_blank" rel="noreferrer"><Linkedin size={19} /><span>LinkedIn profile</span><ArrowUpRight size={16} /></a><a className="contact-link contact-github" href="https://github.com/your-username" target="_blank" rel="noreferrer"><Github size={19} /><span>GitHub profile</span><ArrowUpRight size={16} /></a><div className="resume-wrap"><motion.a className="resume-card" href="/AmanResume.pdf" target="_blank" rel="noreferrer" whileHover={{ y: -7, boxShadow: '0 18px 45px rgba(0,0,0,.28)' }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}><span className="resume-preview"><img src="/AmanResume-preview.png" alt="First page preview of Aman Singh's resume" /></span><span className="resume-card-footer"><FileText size={17} /><span>AmanResume.pdf</span><ArrowUpRight size={15} /></span></motion.a><a className="resume-download" href="/AmanResume.pdf" download><span>Download Resume</span><ArrowUpRight size={15} /></a></div></div></Reveal></div></section>
    </main>

    <footer className="footer container"><div><button className="brand" onClick={() => go('home')}><span className="brand-mark">AS</span><span>Aman Singh</span></button><p>Designed &amp; developed with curiosity.</p></div><div className="footer-right"><span>© {new Date().getFullYear()} Aman Singh</span><button className="back-top" onClick={() => go('home')} aria-label="Back to top"><MoveUpRight size={18} /></button></div></footer>
  </div>
}

export default App
