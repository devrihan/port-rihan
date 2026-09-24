import { useState, useEffect, useRef } from "react";

const CV_LINK = "https://drive.google.com/file/d/your-cv-id/view";

const projects = [
  {
    id: "01",
    title: "Track N Trash",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
    year: "2025",
    desc: "Smart city waste collection system with real-time GPS tracking, Google Maps route optimization, backend APIs, and IoT-based bin-fill detection.",
    link: "https://github.com/orgs/Track-N-Trash-Tech/dashboard",
    accent: "#b8ff57",
  },
  {
    id: "02",
    title: "Supply Chain Optimization Platform",
    tags: ["Python", "FastAPI", "React", "TypeScript", "TailwindCSS"],
    year: "2025",
    desc: "Full-stack platform for supply chain inventory optimization and load balancing, with cost optimization, interactive dashboards, and GenAI-powered insights.",
    link: "https://github.com/devrihan/cog-front",
    accent: "#57d4ff",
  },
  {
    id: "03",
    title: "DocLLM",
    tags: ["Python", "Streamlit", "LangChain", "Ollama", "RAG"],
    year: "2025",
    desc: "AI-powered document assistant that lets users upload documents and query their content using natural language with context-aware RAG responses.",
    link: "https://github.com/devrihan/DocLLM",
    accent: "#ff7a57",
  },
  {
    id: "04",
    title: "AutodocAi",
    tags: ["TypeScript", "Python", "TailwindCSS", "PostgreSQL "],
    year: "2026",
    desc: "Full-stack application designed to automate the creation of professional documents. By leveraging Google's Gemini AI and Supabase, it allows users to generate structured Word documents and PowerPoint presentations from simple text prompts.",
    link: "https://github.com/devrihan/AutoDOC-AI",
    accent: "#a200ff",
  },
];

const skills = {
  Languages: ["Python", "JavaScript", "Java", "C++", "C"],
  FullStack: [
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "TypeScript",
    "SQL",
    "MongoDB",
    "REST APIs",
  ],
  AI_ML: [
    "ML Algorithms",
    "Deep Learning",
    "Computer Vision",
    "LLM",
    "GenAI",
    "RAG",
    "Prompt Engineering",
  ],
  Analytics: [
    "Excel",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
  ],
  CloudDevOps: ["AWS", "Git", "Docker", "Kubernetes"],
};

const experience = [
  {
    company: "Inferentics",
    role: "Software Developer",
    period: "Jul 2026 — Present",
    desc: "Working as a Software Developer on the Core Engineering team, contributing across frontend and backend development, automated testing, system architecture, and production engineering.",
  },
  {
    company: "ClearTax",
    role: "Operations Intern",
    period: "May 2025 — Jul 2025",
    desc: "Prepared internal automation scripts to streamline routine operational workflows. Conducted customer data analysis and client handling, providing insights that improved conversion strategies. Automated data preparation processes in Excel and BI tools, reducing manual reporting time by 20%.",
  },
  {
    company: "Aptifyr",
    role: "Technical Lead (Founding Team)",
    period: "Feb 2024 — May 2025",
    desc: "Created internal web apps using Node.js and Express.js to streamline workshop registration and data management. Integrated automated email and communication workflows using APIs, improving response efficiency by 40%. Led a 5-member cross-functional team coordinating workshop execution, technical setup, and data analysis operations.",
  },
  {
    company: "Indian Railways",
    role: "Fullstack Engineer Intern",
    period: "May 2024 — Jul 2024",
    desc: "Extracted and analyzed complaint resolution data using SQL and Python to identify trends and enhance service quality. Developed and deployed a Complaint Management System using Node.js, Express.js, and MongoDB, reducing manual complaint handling time by 30%. Integrated secure authentication, file uploads, and role-based dashboards for admins and employees.",
  },
];

const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sept 2022 — May 2026",
    detail:
      "Vellore, India. Bachelor of Technology in Computer Science and Engineering.",
  },
];

const certifications = [
  {
    name: "GenAI Fundamentals",
    issuer: "Databricks Academy",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 15,
            color: "#b8ff57",
            letterSpacing: "0.04em",
          }}
        >
          devrihan
        </span>

        <div className="flex items-center gap-7 md:gap-10">
          {["work", "experience", "skills", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 13,
                fontWeight: 600,
                color: "#d8d8d8",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              className="hidden md:inline transition-colors duration-200 hover:text-[#e8e8e8]"
            >
              {s}
            </a>
          ))}

          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 12,
              fontWeight: 700,
              color: "#080808",
              background: "#b8ff57",
              padding: "8px 16px",
              borderRadius: 4,
              boxShadow: "0 0 22px rgba(184,255,87,0.18)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            className="hover:opacity-80"
          >
            CV ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const COLS = 14;
    const ROWS = 10;

    const POINTS: {
      x: number;
      y: number;
      ox: number;
      oy: number;
      phase: number;
      speed: number;
    }[] = [];

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    for (let r = 0; r <= ROWS; r++) {
      for (let c = 0; c <= COLS; c++) {
        POINTS.push({
          x: 0,
          y: 0,
          ox: c / COLS,
          oy: r / ROWS,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.4,
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      t += 0.006;

      for (const p of POINTS) {
        const wave = Math.sin(t * p.speed + p.phase) * 0.018;
        const wave2 = Math.cos(t * p.speed * 0.7 + p.phase + 1.2) * 0.012;

        p.x = (p.ox + wave) * W();
        p.y = (p.oy + wave2) * H();
      }

      const stride = COLS + 1;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const tl = POINTS[r * stride + c];
          const tr = POINTS[r * stride + c + 1];
          const bl = POINTS[(r + 1) * stride + c];
          const br = POINTS[(r + 1) * stride + c + 1];

          const cx = (tl.x + tr.x + bl.x + br.x) / 4;
          const cy = (tl.y + tr.y + bl.y + br.y) / 4;

          const distCenter = Math.sqrt(
            (cx / W() - 0.5) ** 2 + (cy / H() - 0.5) ** 2,
          );

          const glow = Math.max(0, 1 - distCenter * 2.2);

          const pulse = (Math.sin(t * 0.8 + c * 0.3 + r * 0.5) + 1) / 2;

          ctx.beginPath();
          ctx.moveTo(tl.x, tl.y);
          ctx.lineTo(tr.x, tr.y);
          ctx.lineTo(br.x, br.y);
          ctx.lineTo(bl.x, bl.y);
          ctx.closePath();

          const alpha = glow * pulse * 0.06;

          ctx.fillStyle = `rgba(184,255,87,${alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(tl.x, tl.y);
          ctx.lineTo(tr.x, tr.y);
          ctx.lineTo(br.x, br.y);
          ctx.lineTo(bl.x, bl.y);
          ctx.closePath();

          const lineAlpha = 0.04 + glow * 0.1 + pulse * 0.04;

          ctx.strokeStyle = `rgba(184,255,87,${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      for (const p of POINTS) {
        const dx = p.ox - 0.5;
        const dy = p.oy - 0.5;

        const dist = Math.sqrt(dx * dx + dy * dy);

        const glow =
          Math.max(0, 1 - dist * 2) * ((Math.sin(t * 1.2 + p.phase) + 1) / 2);

        if (glow < 0.05) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(184,255,87,${glow * 0.5})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

function Hero() {
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <HeroMesh />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080808 100%)",
        }}
      />

      <div
        className="relative flex flex-col justify-end pb-20 px-6 md:px-10 max-w-6xl mx-auto pt-28"
        style={{ minHeight: "100vh" }}
      >
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#b8ff57",
                display: "inline-block",
                boxShadow: "0 0 8px #b8ff57",
              }}
            />

            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 13,
                fontWeight: 600,
                color: "#b8ff57",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Software Developer · 2026
            </span>
          </div>

          <h1
            style={{
              fontFamily: "JetBrains Mono",
              fontWeight: 300,
              fontSize: "clamp(3rem, 9vw, 8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#e8e8e8",
              marginBottom: "1.5rem",
            }}
          >
            Rihan Akhtar
            <span
              style={{
                color: "#b8ff57",
                opacity: tick ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              _
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p
              style={{
                fontFamily: "Outfit",
                fontWeight: 300,
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "#d4d4d4",
                lineHeight: 1.55,
                maxWidth: 620,
              }}
            >
              Building full-stack, AI/ML, and data-driven products
              <br />
              with a focus on solving real-world problems.
            </p>

            <div className="flex gap-6 md:ml-auto">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/devrihan",
                },
                {
                  label: "LinkedIn",
                  href: "#",
                },
                {
                  label: "CV",
                  href: CV_LINK,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 15,
                    color: "#444",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                  className="transition-colors duration-200 hover:text-[#b8ff57]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "#1e1e1e",
            width: "100%",
          }}
        />
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span
      style={{
        fontFamily: "JetBrains Mono",
        fontSize: 14,
        fontWeight: 600,
        color: "#f0f0f0",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex items-baseline justify-between mb-16">
        <SectionLabel>Selected Work</SectionLabel>

        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 12,
            color: "#8c8c8c",
          }}
        >
          {projects.length} projects
        </span>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{
          border: "1px solid #1a1a1a",
          background: "#1a1a1a",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === p.id ? "#11151a" : "#0b0b0d",
              padding: "2rem",
              border: `1px solid ${hovered === p.id ? p.accent + "35" : "#19191d"}`,
              boxShadow:
                hovered === p.id ? `0 18px 50px ${p.accent}10` : "none",
              cursor: "pointer",
              transition: "background 0.25s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: p.accent,
                opacity: hovered === p.id ? 1 : 0,
                transition: "opacity 0.25s",
              }}
            />

            <div className="flex items-start justify-between mb-4">
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  color: "#333",
                }}
              >
                {p.id}
              </span>

              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  color: "#777",
                  letterSpacing: "0.06em",
                }}
              >
                {p.year}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "Outfit",
                fontWeight: 500,
                fontSize: "1.2rem",
                color: hovered === p.id ? p.accent : "#c8c8c8",
                transition: "color 0.25s",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontFamily: "Outfit",
                fontSize: "0.9rem",
                color: "#a8a8a8",
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: 9,
                      padding: "2px 7px",
                      border: `1px solid ${
                        hovered === p.id ? p.accent + "40" : "#1e1e1e"
                      }`,
                      color: hovered === p.id ? p.accent : "#777",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "color 0.25s, border-color 0.25s",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 14,
                  color: hovered === p.id ? p.accent : "#2a2a2a",
                  transition: "color 0.25s, transform 0.25s",
                  display: "inline-block",
                  transform: hovered === p.id ? "translate(3px,-3px)" : "none",
                }}
              >
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div
        style={{
          height: 1,
          background: "#1a1a1a",
          marginBottom: "4rem",
        }}
      />

      <div className="grid grid-cols-12 gap-8 mb-20">
        <div className="col-span-12 md:col-span-3 md:sticky md:top-20 self-start">
          <SectionLabel>Experience</SectionLabel>

          <div
            style={{
              marginTop: "1.5rem",
              fontFamily: "Outfit",
              fontSize: "0.95rem",
              color: "#a0a0a0",
              lineHeight: 1.6,
            }}
          >
            Click any role
            <br />
            to expand
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          {experience.map((job, i) => (
            <div
              key={job.company}
              onClick={() => setOpen(open === job.company ? null : job.company)}
              style={{
                borderTop: "1px solid #1a1a1a",
                borderBottom:
                  i === experience.length - 1 ? "1px solid #1a1a1a" : "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  padding: "1.5rem 0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    marginTop: 6,
                    flexShrink: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: open === job.company ? "#b8ff57" : "#1e1e1e",
                    border: "1px solid #333",
                    transition: "background 0.2s",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                    <div
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "1.05rem",
                        color: "#e8e8e8",
                      }}
                    >
                      {job.company}
                    </div>

                    <div
                      style={{
                        fontFamily: "JetBrains Mono",
                        fontSize: 10,
                        color: "#888",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {job.period}
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: 11,
                      color: "#b8ff57",
                      letterSpacing: "0.04em",
                      marginBottom: open === job.company ? "0.75rem" : 0,
                    }}
                  >
                    {job.role}
                  </div>

                  <div
                    style={{
                      maxHeight: open === job.company ? 300 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Outfit",
                        fontSize: "0.92rem",
                        color: "#b0b0b0",
                        lineHeight: 1.75,
                        fontWeight: 300,
                        paddingBottom: "1rem",
                      }}
                    >
                      {job.desc}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 14,
                    flexShrink: 0,
                    transition: "transform 0.25s, color 0.25s",
                    transform: open === job.company ? "rotate(45deg)" : "none",
                    color: open === job.company ? "#b8ff57" : "#333",
                  }}
                >
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 md:col-span-3">
          <SectionLabel>Education</SectionLabel>
        </div>

        <div className="col-span-12 md:col-span-9">
          {education.map((edu) => (
            <div
              key={edu.school}
              style={{
                background: "#0d0d0d",
                border: "1px solid #1a1a1a",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: "#57d4ff",
                }}
              />

              <div style={{ paddingLeft: "0.75rem" }}>
                <div
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 10,
                    color: "#57d4ff",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {edu.period}
                </div>

                <div
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#e8e8e8",
                    marginBottom: "0.3rem",
                  }}
                >
                  {edu.school}
                </div>

                <div
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 11,
                    color: "#57d4ff",
                    marginBottom: "0.75rem",
                  }}
                >
                  {edu.degree}
                </div>

                <p
                  style={{
                    fontFamily: "Outfit",
                    fontSize: "0.88rem",
                    color: "#a0a0a0",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {edu.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:ml-[25%] md:pl-8">
        <a
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "JetBrains Mono",
            fontSize: 11,
            color: "#080808",
            background: "#b8ff57",
            padding: "10px 20px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          className="hover:opacity-80"
        >
          Download full CV ↗
        </a>

        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            color: "#2a2a2a",
          }}
        >
          PDF · Google Drive
        </span>
      </div>
    </section>
  );
}

function About() {
  const codeLines = [
    { line: "1", t: "keyword", v: "const " },
    { line: "1", t: "name", v: "rihan" },
    { line: "1", t: "op", v: " = {" },

    { line: "2", t: "key", v: "  role" },
    { line: "2", t: "op", v: ": " },
    { line: "2", t: "str", v: '"Software Developer"' },
    { line: "2", t: "op", v: "," },

    { line: "3", t: "key", v: "  education" },
    { line: "3", t: "op", v: ": " },
    { line: "3", t: "str", v: '"B.Tech CSE"' },
    { line: "3", t: "op", v: "," },

    { line: "4", t: "key", v: "  stack" },
    { line: "4", t: "op", v: ": " },
    { line: "4", t: "str", v: '"Full Stack + AI/ML"' },
    { line: "4", t: "op", v: "," },

    { line: "5", t: "key", v: "  focus" },
    { line: "5", t: "op", v: ": " },
    { line: "5", t: "str", v: '"Building products"' },

    { line: "6", t: "op", v: "}" },
  ];

  const colors: Record<string, string> = {
    keyword: "#c957ff",
    name: "#57d4ff",
    op: "#555",
    key: "#b8ff57",
    str: "#ff9a57",
    num: "#57d4ff",
  };

  const grouped = codeLines.reduce<Record<string, typeof codeLines>>(
    (acc, t) => {
      (acc[t.line] = acc[t.line] || []).push(t);
      return acc;
    },
    {},
  );

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div
        style={{
          height: 1,
          background: "#1a1a1a",
          marginBottom: "4rem",
        }}
      />

      <div className="grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-5">
          <div className="mb-6">
            <SectionLabel>About</SectionLabel>
          </div>

          <p
            style={{
              fontFamily: "Outfit",
              fontSize: "1.15rem",
              color: "#777",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: "1.25rem",
            }}
          >
            I'm a Computer Science and Engineering graduate from Vellore
            Institute of Technology, focused on building full-stack
            applications, AI-powered systems, and data-driven products.
          </p>

          <p
            style={{
              fontFamily: "Outfit",
              fontSize: "1.05rem",
              color: "#a8a8a8",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: "1.25rem",
            }}
          >
            My experience spans software development, automation, analytics,
            AI/ML, and technical product development. I enjoy turning real-world
            problems into practical software solutions.
          </p>

          <p
            style={{
              fontFamily: "Outfit",
              fontSize: "1rem",
              color: "#8f8f8f",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Interested in full-stack development, AI/ML, GenAI, data analytics,
            and building useful products.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div
            style={{
              background: "#0d0d0d",
              border: "1px solid #1a1a1a",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#111",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {["#ff6057", "#ffbd2e", "#28c840"].map((c) => (
                <span
                  key={c}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: c,
                    display: "inline-block",
                    opacity: 0.7,
                  }}
                />
              ))}

              <span
                style={{
                  marginLeft: 8,
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  color: "#333",
                }}
              >
                profile.ts
              </span>
            </div>

            <div
              style={{
                padding: "1.5rem",
                fontFamily: "JetBrains Mono",
                fontSize: "0.82rem",
                lineHeight: 2,
              }}
            >
              {Object.entries(grouped).map(([ln, tokens]) => (
                <div key={ln} style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#2a2a2a",
                      minWidth: 28,
                      userSelect: "none",
                    }}
                  >
                    {ln}
                  </span>

                  <span>
                    {tokens.map((tok, i) => (
                      <span
                        key={i}
                        style={{
                          color: colors[tok.t],
                        }}
                      >
                        {tok.v}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-px mt-px"
            style={{ background: "#1a1a1a" }}
          >
            {[
              {
                k: "Current",
                v: "Software Developer",
              },
              {
                k: "Location",
                v: "Bangalore, India",
              },
              {
                k: "Education",
                v: "B.Tech CSE",
              },
              {
                k: "Focus",
                v: "Full Stack + AI",
              },
            ].map((item) => (
              <div
                key={item.k}
                style={{
                  background: "#080808",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 9,
                    color: "#333",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {item.k}
                </div>

                <div
                  style={{
                    fontFamily: "Outfit",
                    fontSize: "0.9rem",
                    color: "#777",
                  }}
                >
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState("Languages");

  const tabs = Object.keys(skills);

  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div
        style={{
          height: 1,
          background: "#1a1a1a",
          marginBottom: "4rem",
        }}
      />

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-10">
        <SectionLabel>Tech Stack</SectionLabel>

        <div
          className="flex flex-wrap gap-0"
          style={{ border: "1px solid #1a1a1a" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                padding: "6px 14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                border: "none",
                background: activeTab === tab ? "#b8ff57" : "transparent",
                color: activeTab === tab ? "#080808" : "#444",
                transition: "background 0.15s, color 0.15s",
                borderLeft: tab !== tabs[0] ? "1px solid #1a1a1a" : "none",
              }}
            >
              {tab === "FullStack"
                ? "Full Stack"
                : tab === "AI_ML"
                  ? "AI / ML"
                  : tab === "CloudDevOps"
                    ? "Cloud / DevOps"
                    : tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills[activeTab as keyof typeof skills].map((item, i) => (
          <div
            key={item}
            className="group"
            style={{
              background: "#0d0d0d",
              border: "1px solid #1a1a1a",
              padding: "1rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "default",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "#b8ff5740";
              (e.currentTarget as HTMLDivElement).style.background = "#0f0f0f";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
              (e.currentTarget as HTMLDivElement).style.background = "#0d0d0d";
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                color: "#b8ff57",
                opacity: 0.4,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <span
              style={{
                fontFamily: "Outfit",
                fontSize: "0.95rem",
                color: "#c0c0c0",
                fontWeight: 400,
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "4rem",
          overflow: "hidden",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          padding: "0.75rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            animation: "ticker 18s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[
            ...Object.values(skills).flat(),
            ...Object.values(skills).flat(),
          ].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#2a2a2a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              {item}

              <span
                style={{
                  color: "#b8ff57",
                  margin: "0 0.5rem",
                }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div
        style={{
          height: 1,
          background: "#1a1a1a",
          marginBottom: "4rem",
        }}
      />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <SectionLabel>Certifications</SectionLabel>
        </div>

        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              style={{
                background: "linear-gradient(145deg, #101014 0%, #0b0b0d 100%)",
                border: "1px solid #202028",
                padding: "1.5rem",
                boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  color: "#b8ff57",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#e8e8e8",
                  lineHeight: 1.4,
                  marginBottom: "0.75rem",
                }}
              >
                {cert.name}
              </div>

              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  color: "#999",
                  letterSpacing: "0.04em",
                }}
              >
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          background: "#b8ff57",
          padding: "5rem 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7">
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  color: "#3a6600",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Let's work together
              </div>

              <h2
                style={{
                  fontFamily: "JetBrains Mono",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color: "#080808",
                }}
              >
                Got a project?
                <br />
                Say hello._
              </h2>
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
              <a
                href="mailto:rihanswork@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "JetBrains Mono",
                  fontSize: "0.875rem",
                  background: "#080808",
                  color: "#b8ff57",
                  padding: "14px 20px",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                className="hover:opacity-80"
              >
                <span>rihanswork@gmail.com</span>
                <span>→</span>
              </a>

              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "JetBrains Mono",
                  fontSize: "0.875rem",
                  color: "#080808",
                  background: "transparent",
                  border: "1px solid #3a6600",
                  padding: "14px 20px",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                className="hover:!bg-[#080808] hover:!text-[#b8ff57] hover:!border-[#080808]"
              >
                <span>Download CV</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#050505",
          padding: "2rem 0",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              color: "#2a2a2a",
              letterSpacing: "0.04em",
            }}
          >
            © 2026 SK Rihan Akhtar
          </span>

          <div className="flex gap-6">
            <a
              href="https://github.com/devrihan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#2a2a2a",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              className="hover:!text-[#b8ff57]"
            >
              GitHub
            </a>

            <a
              href="#"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#2a2a2a",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              className="hover:!text-[#b8ff57]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:rihanswork@gmail.com"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#2a2a2a",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              className="hover:!text-[#b8ff57]"
            >
              Email
            </a>
          </div>

          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              color: "#1a1a1a",
            }}
          >
            Built by hand
          </span>
        </div>
      </div>
    </section>
  );
}

const globalStyles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: #080808;
    color: #f0f0f0;
    font-family: Outfit, sans-serif;
  }
  ::selection {
    background: #b8ff57;
    color: #080808;
  }
  a { -webkit-tap-highlight-color: transparent; }
  @keyframes ticker {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <div
        style={{
          background:
            "radial-gradient(circle at 12% 8%, rgba(184,255,87,0.055), transparent 24%), radial-gradient(circle at 88% 38%, rgba(87,212,255,0.045), transparent 22%), radial-gradient(circle at 45% 82%, rgba(162,0,255,0.035), transparent 25%), #080808",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Nav />
        <Hero />
        <Work />
        <Experience />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
