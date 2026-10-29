import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, Database, FileText, Github, Layers3, Linkedin, Mail, Menu, MoveUpRight, Palette, Sparkles, X } from 'lucide-react'

const project = {
  name: 'TeamFlow',
  live: 'https://team-flow-project-liart.vercel.app',
  github: 'https://github.com/amansingh7475/Team-Flow-Project',
  description: 'A team collaboration and project management app that brings work, visibility, and momentum into one shared space.',
  details: 'Authentication, workspaces, role-based access control, tasks, notifications, and real-time functionality for teams that move fast.',
  tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
}

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`
const simpleIcon = (name: string, color: string) => `https://cdn.simpleicons.org/${name}/${color}`
const skillGroups = [
  { title: 'Core & Frontend', items: [{ name: 'HTML5', logo: devicon('html5/html5-original.svg') }, { name: 'CSS3', logo: devicon('css3/css3-original.svg') }, { name: 'JavaScript', logo: devicon('javascript/javascript-original.svg') }, { name: 'TypeScript', logo: devicon('typescript/typescript-original.svg') }, { name: 'React', logo: devicon('react/react-original.svg') }, { name: 'Redux', logo: devicon('redux/redux-original.svg') }, { name: 'Tailwind CSS', logo: devicon('tailwindcss/tailwindcss-original.svg') }, { name: 'Material UI', logo: devicon('materialui/materialui-original.svg') }] },
  { title: 'Backend & Data', items: [{ name: 'Node.js', logo: devicon('nodejs/nodejs-original.svg') }, { name: 'Express.js', logo: simpleIcon('express', '999999') }, { name: 'MongoDB', logo: devicon('mongodb/mongodb-original.svg') }, { name: 'Mongoose', logo: simpleIcon('mongoose', '880000') }, { name: 'PostgreSQL', logo: devicon('postgresql/postgresql-original.svg') }, { name: 'Socket.IO', logo: simpleIcon('socketdotio', 'ffffff') }, { name: 'REST APIs', logo: simpleIcon('fastapi', '009688') }, { name: 'Amazon S3', logo: '/skill-icons/s3.png' }] },
  { title: 'Tools & Workflow', items: [{ name: 'Git', logo: devicon('git/git-original.svg') }, { name: 'GitHub', logo: simpleIcon('github', 'ffffff') }, { name: 'VS Code', logo: devicon('vscode/vscode-original.svg') }, { name: 'ChatGPT', logo: '/skill-icons/chatgpt.webp' }, { name: 'Chrome', logo: devicon('chrome/chrome-original.svg') }, { name: 'Impress', logo: simpleIcon('libreofficeimpress', 'D83B01') }, { name: 'MongoDB Compass', logo: devicon('mongodb/mongodb-original.svg') }, { name: 'Postman', logo: devicon('postman/postman-original.svg') }] },
]
const experienceItems = [
  { title: 'Frontend Development', stack: 'React.js, Redux, Formik with Yup', date: '2024 — Present', icon: Code2, side: 'left', points: ['Advanced skills in React.js for building dynamic web applications.', 'Expertise in Redux for efficient state management.', 'Experience with Formik and Yup for seamless form handling and validation.', 'Applied Flux architecture to enhance data flow and maintainability.', 'Implemented advanced architectural patterns for scalable applications.', 'These are just a few of the many libraries and patterns used in frontend development.'] },
  { title: 'UI Designing', stack: 'Material UI, Framer Motion, Tailwind CSS, SCSS', date: '2024 — Present', icon: Palette, side: 'right', points: ['Proficient in Material UI for creating modern and responsive user interfaces.', 'Expertise in Framer Motion for crafting smooth and interactive animations.', 'Skillful use of Tailwind CSS to streamline and enhance UI styling.', 'Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.', 'Ability to create responsive layouts for diverse screen sizes and devices.', 'Prioritizing user experience and usability in UI design projects.'] },
  { title: 'Backend Development', stack: 'Node.js, Express.js, MongoDB, Mongoose, PostgreSQL', date: '2024 — Present', icon: Database, side: 'left', points: ['Proficient in Node.js for building robust and scalable server-side applications.', 'Strong command of Express.js for creating RESTful APIs and routing.', 'Experience using MongoDB and Mongoose, including indexing for efficient data modeling, storage, and retrieval.', 'Strategies for optimizing application performance and scalability.', 'Integration of AWS S3 for secure and scalable file storage and retrieval.', 'Skillful use of Postman for API testing, validation, and documentation.', 'Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code.', 'Application of Clean Architecture principles for modular and testable codebases.', 'Implementation of security measures, including authorization and authentication mechanisms to protect data.', 'Expertise in error handling, debugging, and performance optimization.'] },
  { title: 'Full Stack Developer', stack: 'React, TypeScript, Node.js, Express.js, MongoDB', date: 'Currently', icon: Layers3, side: 'right', points: ['Building full-stack web experiences with a focus on thoughtful UX and solid architecture.', 'Taking ideas from interface to API, database, and production-ready implementation.', 'Continuously learning and improving through practical product work.'] },
]
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
          {['home', 'work', 'projects', 'contact'].map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => go(item)}>{item}</button>)}
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

      <section id="about" className="section container about"><div className="about-top"><Reveal><SectionHeading eyebrow="01 / Overview" title={'Building with purpose.\nSolving with code.'} copy="I’m a full stack developer with 1+ year of experience building and improving web applications. I enjoy turning ideas into clean, functional, and user-friendly digital experiences using React, Next.js, Node.js, Express.js, and MongoDB. From crafting responsive interfaces to developing reliable APIs and managing databases, I focus on writing maintainable code, solving real-world problems, and continuously learning new technologies to build better products." /></Reveal><Reveal delay={.1}><div className="about-card quote-card"><span className="quote-mark">“</span><p>Great software is not just functional. It gives people a little more clarity and a little less friction.</p><span className="quote-line" /></div></Reveal></div><Reveal className="about-copy" delay={.16}><p>I work across the stack, with a soft spot for interfaces that feel alive and backends that quietly do their job.</p><div className="mini-facts"><div><strong>01</strong><span>Systems<br />thinking</span></div><div><strong>02</strong><span>Product<br />mindset</span></div><div><strong>03</strong><span>Constant<br />learning</span></div></div></Reveal></section>

      <section id="skills" className="section container skills"><Reveal><SectionHeading eyebrow="02 / Toolkit" title={'Tools I use to bring\nideas to life.'} /></Reveal><Reveal className="skill-groups" delay={.1}>{skillGroups.map((group) => <div className="skill-group" key={group.title}><span className="skill-group-title">{group.title}</span><div className="skill-list">{group.items.map((skill, i) => <motion.div className="skill-pill" key={skill.name} whileHover={{ y: -5, borderColor: 'rgba(215,255,100,.6)', backgroundColor: 'rgba(215,255,100,.06)' }} transition={{ type: 'spring', stiffness: 300 }}><span>{String(i + 1).padStart(2, '0')}</span><img className="skill-logo" src={skill.logo} alt="" aria-hidden="true" />{skill.name}</motion.div>)}</div></div>)}</Reveal></section>

      <section id="work" className="section container work"><Reveal><SectionHeading eyebrow="03 / Journey" title="What I have done so far" copy="A growing collection of experiences, experiments, and lessons in building for the web." /></Reveal><Reveal className="experience-timeline" delay={.1}>{experienceItems.map((item, index) => { const Icon = item.icon; return <div className={`experience-item ${item.side}`} key={item.title}><div className="experience-card"><div className="experience-card-head"><span className="timeline-date">{item.date}</span><span className="experience-number">0{index + 1}</span></div><h3>{item.title}</h3><h4>{item.stack}</h4><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div><div className="experience-marker"><Icon size={22} /></div><span className="experience-date">{item.date}</span></div> })}</Reveal></section>

      <section id="projects" className="section container projects"><Reveal><div className="project-heading"><SectionHeading eyebrow="04 / Selected work" title={'A closer look at\nwhat I’m building.'} /><span className="project-count">01 / 01</span></div></Reveal><Reveal delay={.1}><article className="project-card"><div className="project-visual"><div className="visual-grid" /><div className="app-window"><div className="app-head"><span className="app-logo">T</span><div className="app-head-lines"><i /><i /></div><span className="app-avatar">A</span></div><div className="app-body"><div className="app-side"><i /><i /><i /><i /></div><div className="app-main"><div className="app-main-top"><span>Good morning, Aman</span><b>+ Add task</b></div><div className="task-stats"><i /><i /><i /></div><div className="task-row"><span /><i /><em /><strong /></div><div className="task-row second"><span /><i /><em /><strong /></div></div></div></div><div className="visual-badge">Built for teams <Check size={14} /></div></div><div className="project-info"><div className="project-label"><span>Featured project</span><span>2024 — present</span></div><h3>{project.name}</h3><p>{project.description}</p><p className="project-detail">{project.details}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.live} target="_blank" rel="noreferrer" className="button button-primary">Live demo <ArrowUpRight size={16} /></a><a href={project.github} target="_blank" rel="noreferrer" className="button button-dark"><Github size={16} /> Source code</a></div></div></article></Reveal></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><Reveal><SectionHeading eyebrow="05 / Get in touch" title={'Have an idea?\nLet’s make it real.'} copy="I’m always open to hearing about new projects, creative collaborations, or a good conversation about the web." /><div className="contact-actions"><a className="contact-link contact-email" href="mailto:amanrajput8460@gmail.com"><Mail size={19} /><span>amanrajput8460@gmail.com</span><ArrowUpRight size={16} /></a><a className="contact-link contact-linkedin" href="https://www.linkedin.com/in/aman-singh-a64149251/" target="_blank" rel="noreferrer"><Linkedin size={19} /><span>LinkedIn profile</span><ArrowUpRight size={16} /></a><a className="contact-link contact-github" href="https://github.com/amansingh7475" target="_blank" rel="noreferrer"><Github size={19} /><span>GitHub profile</span><ArrowUpRight size={16} /></a><div className="resume-wrap"><motion.a className="resume-card" href="/AmanResume.pdf" target="_blank" rel="noreferrer" whileHover={{ y: -7, boxShadow: '0 18px 45px rgba(0,0,0,.28)' }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}><span className="resume-preview"><img src="/AmanResume-preview.png" alt="First page preview of Aman Singh's resume" /></span><span className="resume-card-footer"><FileText size={17} /><span>AmanResume.pdf</span><ArrowUpRight size={15} /></span></motion.a><a className="resume-download" href="/AmanResume.pdf" download><span>Download Resume</span><ArrowUpRight size={15} /></a></div></div></Reveal></div></section>
    </main>

    <footer className="footer container"><div><button className="brand" onClick={() => go('home')}><span className="brand-mark">AS</span><span>Aman Singh</span></button><p>Designed &amp; developed with curiosity.</p></div><div className="footer-right"><span>© {new Date().getFullYear()} Aman Singh</span><button className="back-top" onClick={() => go('home')} aria-label="Back to top"><MoveUpRight size={18} /></button></div></footer>
  </div>
}

export default App
