import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
const PROFILE = {
  email: 'tech.rahuljha@gmail.com',
  github: 'https://github.com/rahuljha111',
  linkedin: 'https://www.linkedin.com/in/rahul-jha-711b06395',
};

const skills = [
  { label: 'Backend', items: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy'] },
  { label: 'Data & infrastructure', items: ['PostgreSQL', 'Alembic', 'Redis', 'Docker'] },
  { label: 'Development', items: ['Git', 'Automated testing', 'Debugging', 'React / TypeScript'] },
];

function SectionHeading({ number, eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span>{eyebrow}</div>
      <div>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rahul Jha home">RJ<span>.</span></a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="nav-contact">Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Software engineering · Backend · AI integration</p>
            <h1>Thoughtful systems.<br /><em>Practical</em> engineering.</h1>
            <p className="hero-description">
              I’m Rahul Jha, a Computer Science and Engineering graduate building backend
              systems, data-driven workflows, and useful software for real business problems.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <span aria-hidden="true">GH</span> GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="aside-rule" />
            <p className="aside-label">CURRENT FOCUS</p>
            <p className="aside-main">Backend development<br />and AI integration</p>
            <p className="aside-note">Designing reliable APIs, evolving data models, and improving the way software gets built.</p>
            <div className="aside-bottom"><span>BASED IN</span><strong>Nepal</strong></div>
          </aside>
          <div className="hero-index"><span>PORTFOLIO / 2026</span><span>01 — 05</span></div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading number="01" eyebrow="Experience" title={<>Engineering for<br /><em>real operations.</em></>} intro="My work is centred on the backend: turning business rules into dependable APIs, data models, and workflows." />
            <article className="experience-feature">
              <div className="experience-meta">
                <span className="mono">APR 2026 — PRESENT</span>
                <span className="current-tag"><span className="status-dot" /> Current role</span>
              </div>
              <div className="experience-content">
                <div className="company-line">
                  <div>
                    <h3>Fueleo LLC</h3>
                    <p className="role-title">Backend Development &amp; AI Integration Engineer</p>
                  </div>
                  <span className="company-mark">F.</span>
                </div>
                <p className="experience-summary">
                  Building and maintaining backend capabilities for a multi-tenant ERP platform
                  supporting fuel distribution operations.
                </p>
                <div className="contribution-grid">
                  <div>
                    <span className="contribution-number">01</span>
                    <h4>Backend &amp; APIs</h4>
                    <p>Implementing business logic and REST endpoints with Python, FastAPI, and SQLAlchemy.</p>
                  </div>
                  <div>
                    <span className="contribution-number">02</span>
                    <h4>Data architecture</h4>
                    <p>Evolving PostgreSQL schemas and managing Alembic migrations across tenant databases.</p>
                  </div>
                  <div>
                    <span className="contribution-number">03</span>
                    <h4>Business workflows</h4>
                    <p>Contributing to order management, supplier and terminal operations, inventory flows, scheduling, and data exchange.</p>
                  </div>
                  <div>
                    <span className="contribution-number">04</span>
                    <h4>Reliability &amp; integrations</h4>
                    <p>Investigating production issues, strengthening test coverage, and working on third-party integrations and AI-assisted development.</p>
                  </div>
                </div>
                <div className="stack-line"><span>WORKING STACK</span><p>Python · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Docker · Redis · Git</p></div>
              </div>
            </article>

            <article className="experience-secondary">
              <div className="experience-meta"><span className="mono">TRAINING &amp; INTERNSHIP</span></div>
              <div>
                <h3>CamelQ <span className="location">/ Hyderabad, India</span></h3>
                <p className="role-title">Training &amp; Internship</p>
                <p className="secondary-copy">Early professional experience in a software company environment, building on academic foundations and developing practical engineering habits.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading number="02" eyebrow="Selected projects" title={<>Ideas tested<br /><em>in practice.</em></>} intro="Hackathons have been a way to work with a team, move from an idea to a prototype, and learn under constraints." />
            <div className="project-list">
              <article className="project-card">
                <div className="project-topline"><span className="mono">HACK2SKILL HACKATHON</span><span className="project-index">P / 01</span></div>
                <h3>Decision OS</h3>
                <p>A hackathon project exploring how software can help people organise information and make more considered decisions. The project reflects my interest in translating an open-ended problem into a product concept.</p>
                <div className="project-bottom"><span>Product thinking · Team collaboration · Prototyping</span><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
              </article>
              <article className="project-card">
                <div className="project-topline"><span className="mono">COLLEGE HACKATHONS</span><span className="project-index">P / 02</span></div>
                <h3>Team-based problem solving</h3>
                <p>Participated in college-level hackathon activities, collaborating on ideas and prototypes in time-boxed settings. Specific event details and project links can be added when available.</p>
                <div className="project-bottom"><span>Rapid learning · Collaboration · Problem solving</span><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <SectionHeading number="03" eyebrow="Toolkit & approach" title={<>Tools are useful.<br /><em>Judgement matters.</em></>} intro="I focus on understanding the system and the reason behind a change—not just getting code to run." />
            <div className="toolkit-layout">
              <div className="skill-groups">
                {skills.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
              <div className="ai-note">
                <span className="mono">AI IN MY WORKFLOW</span>
                <h3>Use the leverage.<br /><em>Keep the responsibility.</em></h3>
                <p>I use AI tools to explore unfamiliar code, compare implementation options, draft changes, and accelerate debugging. I treat generated output as a starting point—not authority—and check it against product requirements, existing patterns, tests, and observed behaviour.</p>
                <p>The goal is to learn faster and deliver better work, while staying accountable for the code I ship.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <div className="container">
            <SectionHeading number="04" eyebrow="Education & learning" title={<>A foundation for<br /><em>continuous growth.</em></>} />
            <div className="learning-grid">
              <div className="learning-item">
                <span className="mono">EDUCATION</span>
                <h3>B.Tech — Computer Science &amp; Engineering</h3>
                <p>Guru Nanak Institutions · JNTUH</p>
                <span className="learning-date">2022 — 2026</span>
              </div>
              <div className="learning-item">
                <span className="mono">VIRTUAL EXPERIENCE</span>
                <h3>JPMorgan Chase &amp; Co.</h3>
                <p>Forage virtual experience program</p>
                <span className="learning-date">Certificate / program details to add</span>
              </div>
              <div className="learning-item">
                <span className="mono">COURSE</span>
                <h3>Java Spring Boot Crash Course</h3>
                <p>Telusko · Udemy</p>
                <span className="learning-date">Course completion</span>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-band">
          <div className="container closing-inner">
            <span className="mono">A NOTE ON MY WORK</span>
            <p>I’m motivated by software that solves concrete problems: systems that are understandable, integrations that hold up, and features that make a real workflow better.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">05 / Contact</p>
              <h2>Let’s build something<br /><em>that matters.</em></h2>
              <p className="contact-copy">Open to junior software engineering opportunities, collaboration, and conversations about backend systems and practical AI.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`}><Mail size={17} /> Email <ArrowUpRight size={15} /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
  <span aria-hidden="true">GH</span> GitHub <ArrowUpRight size={15} />
</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
  <span aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={15} />
</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Rahul Jha</span>
        <span>Made with care · React + Vite</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
