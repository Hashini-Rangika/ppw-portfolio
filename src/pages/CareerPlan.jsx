import Navbar from "../components/Navbar";

const milestones = [
  {
    phase: "Short Term",
    period: "2022 – 2026",
    icon: "◎",
    num: "01",
    accent: "#7c3aed",
    lightAccent: "#a78bfa",
    statusClass: "status-active",
    goals: [
      "Complete degree successfully with strong academic results",
      "Gain internship experience in software development",
      "Improve MERN stack and build real-world projects",
      "Learn cloud technologies such as Azure",
    ],
    status: "In Progress",
  },
  {
    phase: "Medium Term",
    period: "2026 – 2028",
    icon: "◈",
    num: "02",
    accent: "#2563eb",
    lightAccent: "#60a5fa",
    statusClass: "status-planned",
    goals: [
      "Work as a full-stack developer",
      "Gain industry experience in real projects",
      "Improve system design and problem-solving skills",
      "Contribute to team-based development projects",
    ],
    status: "Planned",
  },
  {
    phase: "Long Term",
    period: "2028 – 2030",
    icon: "✦",
    num: "03",
    accent: "#be185d",
    lightAccent: "#f472b6",
    statusClass: "status-vision",
    goals: [
      "Become a senior software engineer",
      "Lead development teams and projects",
      "Design scalable enterprise applications",
      "Contribute to innovative technology solutions",
    ],
    status: "Vision",
  },
];

const skillGroups = [
  {
    category: "Technical Skills",
    icon: "⚡",
    accent: "#7c3aed",
    items: [
      { name: "React & Next.js", level: 78 },
      { name: "Node.js & Express", level: 72 },
      { name: "MongoDB & SQL", level: 68 },
      { name: "Cloud (Azure / AWS)", level: 50 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "◎",
    accent: "#2563eb",
    items: [
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 82 },
      { name: "Leadership", level: 65 },
      { name: "Problem-solving", level: 80 },
    ],
  },
];

export default function CareerPlan() {
  return (
    <>
      <style>{`
           
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}


        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .career-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .bg-layer {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
        }
        .orb {
          position: absolute; border-radius: 50%; filter: blur(100px);
          opacity: 0.18; animation: floatOrb 12s ease-in-out infinite;
        }
        .orb-1 { width: 650px; height: 650px; background: radial-gradient(circle, #4c1d95, transparent 70%); top: -220px; left: -160px; }
        .orb-2 { width: 450px; height: 450px; background: radial-gradient(circle, #1e3a8a, transparent 70%); bottom: -120px; right: -80px; animation-delay: -5s; }
        .orb-3 { width: 280px; height: 280px; background: radial-gradient(circle, #9d174d, transparent 70%); top: 55%; left: 55%; opacity: 0.12; animation-delay: -9s; }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-28px) scale(1.04); }
        }

        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .career-wrap {
          position: relative; z-index: 1;
          max-width: 1060px; margin: 0 auto;
          padding: 148px 24px 100px;
        }

        /* Header */
        .page-header { text-align: center; margin-bottom: 72px; animation: fadeUp .8s ease both; }
        .eyebrow {
          display: inline-block; font-size: .7rem; letter-spacing: .2em;
          text-transform: uppercase; color: rgba(167,139,250,.75); font-weight: 500; margin-bottom: 14px;
        }
        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.6rem, 6.5vw, 5rem);
          font-weight: 800; line-height: .95; letter-spacing: -.03em;
          background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,.45));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .page-sub { margin-top: 14px; font-size: .88rem; font-style: italic; color: rgba(255,255,255,.32); }

        /* Objective */
        .objective-card {
          position: relative; padding: 36px 40px; border-radius: 22px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          margin-bottom: 60px; overflow: hidden;
          animation: fadeUp .8s ease both; animation-delay: .1s;
          transition: all .4s cubic-bezier(.16,1,.3,1);
        }
        .objective-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #2563eb, #be185d);
          border-radius: 22px 22px 0 0;
        }
        .objective-card:hover { border-color: rgba(139,92,246,.22); box-shadow: 0 24px 60px rgba(0,0,0,.45); transform: translateY(-4px); }
        .obj-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .7rem; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: #a78bfa; margin-bottom: 14px;
        }
        .obj-dot { width: 6px; height: 6px; border-radius: 50%; background: #a78bfa; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.25} }
        .obj-text { font-size: .9rem; line-height: 1.78; color: rgba(255,255,255,.5); }
        .obj-watermark {
          position: absolute; right: 32px; bottom: -16px;
          font-family: 'Syne', sans-serif; font-size: 7rem; font-weight: 800;
          color: rgba(255,255,255,.025); letter-spacing: -.04em; pointer-events: none; line-height: 1;
        }

        /* Section label */
        .section-label {
          font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(167,139,250,.6); font-weight: 500; margin-bottom: 28px;
          animation: fadeUp .8s ease both; animation-delay: .18s;
        }

        /* Phase cards */
        .phases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 18px; margin-bottom: 72px; }
        .phase-card {
          position: relative; padding: 32px; border-radius: 20px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          overflow: hidden; transition: all .4s cubic-bezier(.16,1,.3,1);
          animation: fadeUp .8s ease both;
        }
        .phase-card:nth-child(1) { animation-delay: .2s; }
        .phase-card:nth-child(2) { animation-delay: .28s; }
        .phase-card:nth-child(3) { animation-delay: .36s; }
        .phase-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; border-radius: 20px 20px 0 0; opacity: .85;
        }
        .phase-card:hover { transform: translateY(-8px); box-shadow: 0 30px 70px rgba(0,0,0,.5); }

        .phase-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .phase-icon-wrap { display: flex; flex-direction: column; gap: 6px; }
        .phase-icon { font-size: 1.6rem; line-height: 1; }
        .phase-num { font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 800; color: rgba(255,255,255,.18); letter-spacing: .05em; }

        .status-badge { font-size: .63rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; padding: 3px 11px; border-radius: 100px; }
        .status-active  { background: rgba(124,58,237,.2);  color: #a78bfa; border: 1px solid rgba(124,58,237,.32); }
        .status-planned { background: rgba(37,99,235,.2);   color: #60a5fa; border: 1px solid rgba(37,99,235,.32);  }
        .status-vision  { background: rgba(190,24,93,.2);   color: #f472b6; border: 1px solid rgba(190,24,93,.32);  }

        .phase-title { font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 800; letter-spacing: -.02em; margin-bottom: 4px; }
        .phase-period { font-size: .73rem; color: rgba(255,255,255,.28); letter-spacing: .05em; margin-bottom: 22px; }
        .goals-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .goal-item { display: flex; gap: 10px; align-items: flex-start; font-size: .83rem; line-height: 1.55; color: rgba(255,255,255,.48); }
        .goal-tick { width: 17px; height: 17px; border-radius: 5px; flex-shrink: 0; margin-top: 1px; display: flex; align-items: center; justify-content: center; font-size: .58rem; font-weight: 700; }

        /* Skills */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .skills-block {
          padding: 30px; border-radius: 18px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          transition: all .4s cubic-bezier(.16,1,.3,1);
          animation: fadeUp .8s ease both; animation-delay: .4s;
        }
        .skills-block:hover { border-color: rgba(139,92,246,.2); transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,.4); }
        .skills-block-header { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .skills-block-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1rem; }
        .skills-block-title { font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; }
        .skill-row { margin-bottom: 16px; }
        .skill-row:last-child { margin-bottom: 0; }
        .skill-meta { display: flex; justify-content: space-between; margin-bottom: 7px; }
        .skill-name { font-size: .82rem; color: rgba(255,255,255,.65); }
        .skill-pct { font-family: 'Syne', sans-serif; font-size: .78rem; font-weight: 700; color: rgba(255,255,255,.28); }
        .skill-track { height: 3px; background: rgba(255,255,255,.06); border-radius: 100px; overflow: hidden; }
        .skill-fill { height: 100%; border-radius: 100px; animation: fillBar 1.3s cubic-bezier(.16,1,.3,1) both; animation-delay: .6s; }
        @keyframes fillBar { from { width: 0 !important; } }

        .also-learn {
          margin-top: 40px; padding: 24px 28px; border-radius: 16px;
          background: rgba(139,92,246,.06); border: 1px solid rgba(139,92,246,.15);
          font-size: .84rem; line-height: 1.7; color: rgba(255,255,255,.45);
          animation: fadeUp .8s ease both; animation-delay: .5s;
        }
        .also-learn strong { color: rgba(167,139,250,.9); font-weight: 500; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className='career-root'>
        <div className='bg-layer'>
          <div className='orb orb-1' />
          <div className='orb orb-2' />
          <div className='orb orb-3' />
        </div>
        <div className='grid-bg' />
        <Navbar />

        <div className='career-wrap'>
          {/* ── Header ── */}
          <div className='page-header'>
            <div className='eyebrow'>✦ Strategic Roadmap</div>
            <h1 className='page-title'>Career Development Plan</h1>
            <p className='page-sub'>
              A structured vision for professional growth
            </p>
          </div>

          {/* ── Career Objective ── */}
          <div className='objective-card'>
            <div className='obj-label'>
              <div className='obj-dot' /> Career Objective
            </div>
            <p className='obj-text'>
              My goal is to become a skilled full-stack software engineer
              specialising in modern web technologies. I aim to develop
              innovative, user-friendly applications that solve real-world
              problems. Through my academic journey and the PPW module, I have
              developed both technical and professional skills — including
              communication, business writing, and interview preparation — which
              support my long-term career growth.
            </p>
            <div className='obj-watermark'>GOAL</div>
          </div>

          {/* ── Phases ── */}
          <p className='section-label'>Development Phases</p>
          <div className='phases-grid'>
            {milestones.map((m, i) => (
              <div
                className='phase-card'
                key={m.phase}
                style={{ borderColor: `${m.accent}22` }}
              >
                <style>{`.phases-grid .phase-card:nth-child(${i + 1})::after { background: linear-gradient(90deg, ${m.accent}, transparent); }`}</style>
                <div className='phase-top'>
                  <div className='phase-icon-wrap'>
                    <span className='phase-icon'>{m.icon}</span>
                    <span className='phase-num'>{m.num}</span>
                  </div>
                  <span className={`status-badge ${m.statusClass}`}>
                    {m.status}
                  </span>
                </div>
                <h2 className='phase-title'>{m.phase}</h2>
                <p className='phase-period'>{m.period}</p>
                <ul className='goals-list'>
                  {m.goals.map((g) => (
                    <li className='goal-item' key={g}>
                      <span
                        className='goal-tick'
                        style={{
                          background: `${m.accent}22`,
                          color: m.lightAccent,
                        }}
                      >
                        ✓
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Skills ── */}
          <p className='section-label'>Skills Development Plan</p>
          <div className='skills-grid'>
            {skillGroups.map((sg) => (
              <div className='skills-block' key={sg.category}>
                <div className='skills-block-header'>
                  <div
                    className='skills-block-icon'
                    style={{
                      background: `${sg.accent}20`,
                      border: `1px solid ${sg.accent}35`,
                    }}
                  >
                    {sg.icon}
                  </div>
                  <span className='skills-block-title'>{sg.category}</span>
                </div>
                {sg.items.map((sk) => (
                  <div className='skill-row' key={sk.name}>
                    <div className='skill-meta'>
                      <span className='skill-name'>{sk.name}</span>
                      <span className='skill-pct'>{sk.level}%</span>
                    </div>
                    <div className='skill-track'>
                      <div
                        className='skill-fill'
                        style={{
                          width: `${sk.level}%`,
                          background: `linear-gradient(90deg, ${sg.accent}, ${sg.accent}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className='also-learn'>
            <strong>Continuous Learning</strong> — Expanding knowledge through
            online courses, personal projects, open-source contributions, and
            industry certifications to stay current with evolving technologies
            and best practices.
          </div>
        </div>
      </div>
    </>
  );
}
