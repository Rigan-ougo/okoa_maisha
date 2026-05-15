import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiMysql,
  SiLaravel,
  SiMongodb,
} from "react-icons/si";

import { useState, useEffect } from "react";
import "./App.scss";



/* =========================
   SKILLS
========================= */
const skills = [
  {
    name: "PHP",
    icon: <FaPhp />,
    pct: 87,
    desc: "Backends, APIs, CMS",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    pct: 88,
    desc: "ES6+, DOM, async",
  },
  {
    name: "React",
    icon: <FaReact />,
    pct: 95,
    desc: "Hooks, SPA, state",
  },
  {
    name: "HTML/CSS",
    icon: (
      <div className="stack-icons">
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    pct: 100,
    desc: "Responsive, animations",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    pct: 80,
    desc: "NoSQL, aggregation, Mongoose",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    pct: 80,
    desc: "Schemas, queries",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    pct: 75,
    desc: "MVC, Eloquent",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    pct: 72,
    desc: "Express APIs",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    pct: 85,
    desc: "Version control",
  },
];

/* =========================
   PROJECTS
========================= */
const projects = [
  {
    title: "Hospital Management System",
    desc: "A comprehensive system for managing hospital operations, including patient records, appointments, and inventory.",
    tags: ["React", "Java", "MySQL"],
    year: "2025",
    live: "https://medilink-public.vercel.app/",
  },
  {
    title: "ShopEase Commerce",
    desc: "E-commerce system with M-Pesa integration.",
    tags: ["PHP", "JavaScript", "API"],
    year: "2024",
    live: null,
  },
  {
    title: "Community Disaster Response System",
    desc: "A platform for coordinating disaster response efforts in local communities.",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2025",
    live: "https://desastersystem.onrender.com/citizen",
  },
];

/* =========================
   NAV + CONTACTS
========================= */
const navItems = ["Home", "Skills", "Projects", "Contact"];

const contacts = [
  {
    icon: <FaEnvelope />,
    name: "Email",
    sub: "riganougo@email.com",
    link: "mailto:riganougo@email.com",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    sub: "linkedin.com/in/rigan-ougo",
    link: "https://linkedin.com/in/rigan-ougo",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    sub: "github.com/Rigan-ougo",
    link: "https://github.com/Rigan-ougo",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    sub: "+254 111330050",
    link: "https://wa.me/254111330050",
  },
];

export default function App() {
  const [active, setActive] = useState("Home");
  const [blink, setBlink] = useState(true);
  const [hoverSkill, setHoverSkill] = useState(null);
  const [hoverProject, setHoverProject] = useState(null);
  const [hoverContact, setHoverContact] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  /* BLINK */
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(t);
  }, []);

  /* THEME */
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">

      {/* SCROLL BAR */}
      <div
        className="scroll-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAV */}
      <nav className="nav">
        <div
          className="nav-logo"
          onClick={() => scrollTo("Home")}
        >
          R<span>.</span>OUGO
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-btn ${
                active === item ? "active" : ""
              }`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button
          className="nav-cta"
          onClick={() => scrollTo("Contact")}
        >
          Hire Me
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="hero-tag">
          <span className={`dot ${blink ? "on" : ""}`} />
          Available for work
        </div>

        <h1 className="hero-name">
          Rigan <span>Ougo</span>
        </h1>

        <p className="hero-role">
          Full-Stack Developer
        </p>

        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => scrollTo("Projects")}
          >
            View Work
          </button>

          <button
            className="btn-secondary"
            onClick={() => scrollTo("Contact")}
          >
            Contact
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`skill-card ${
                hoverSkill === i ? "active" : ""
              }`}
              onMouseEnter={() => setHoverSkill(i)}
              onMouseLeave={() => setHoverSkill(null)}
            >
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-card ${
                hoverProject === i ? "active" : ""
              }`}
              onMouseEnter={() => setHoverProject(i)}
              onMouseLeave={() => setHoverProject(null)}
              onClick={() =>
                p.live && window.open(p.live, "_blank")
              }
              style={{
                cursor: p.live ? "pointer" : "default",
              }}
            >
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-year">
                {p.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="contact-grid">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className={`contact-card ${
                hoverContact === i ? "active" : ""
              }`}
              onMouseEnter={() => setHoverContact(i)}
              onMouseLeave={() => setHoverContact(null)}
            >
              <div className="contact-icon">{c.icon}</div>
              <div>
                <h4>{c.name}</h4>
                <p>{c.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Rigan Ougo — Full-Stack Developer
      </footer>

    </div>
  );
}