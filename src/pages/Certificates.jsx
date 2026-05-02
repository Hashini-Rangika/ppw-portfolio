import Navbar from "../components/Navbar";

const certs = [
  {
    title: "Python for Beginners",
    issuer: "Online Learning Platform",
    year: "2023",
    icon: "🐍",
    desc: "Completed a comprehensive course covering programming fundamentals, data structures, and algorithmic thinking using Python.",
    color: "#7c3aed",
    skills: ["Python", "OOP", "Algorithms"],
  },
  {
    title: "PHP & MySQL Development",
    issuer: "Web Dev Academy",
    year: "2023",
    icon: "🐘",
    desc: "Learned backend development fundamentals including server-side scripting, database integration, and CRUD operations.",
    color: "#2563eb",
    skills: ["PHP", "MySQL", "REST APIs"],
  },
  {
    title: "JavaScript Essentials",
    issuer: "Codecademy",
    year: "2024",
    icon: "⚡",
    desc: "Mastered core JavaScript concepts including ES6+, async programming, DOM manipulation, and modern development practices.",
    color: "#d97706",
    skills: ["ES6+", "Async/Await", "DOM"],
  },
  {
    title: "React Foundations",
    issuer: "Meta / Coursera",
    year: "2024",
    icon: "⚛",
    desc: "Built a solid understanding of React architecture, hooks, state management, and component-driven UI development.",
    color: "#0891b2",
    skills: ["React", "Hooks", "JSX"],
  },
];

export default function Certificates() {
  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        * { box-sizing: border-box; }

        .certs-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .bg-certs {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .orb-ce {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.2;
        }

        .orb-ce1 { width: 500px; height: 500px; background: radial-gradient(circle, #6d28d9, transparent 70%); top: -100px; right: -150px; }
        .orb-ce2 { width: 400px; height: 400px; background: radial-gradient(circle, #0c4a6e, transparent 70%); bottom: -50px; left: -100px; }

        .certs-container {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          padding: 140px 24px 100px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeUp 0.8s ease both;
        }

        .page-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(167,139,250,0.7);
          margin-bottom: 16px;
          font-weight: 500;
        }

        .page-title {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.5));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          margin-top: 16px;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.35);
          font-style: italic;
        }

        /* Stats row */
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 64px;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.1s;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-num {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 2px;
        }

        /* Grid */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .cert-card {
          position: relative;
          padding: 32px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          animation: fadeUp 0.8s ease both;
          cursor: default;
        }

        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:nth-child(4) { animation-delay: 0.4s; }

        .cert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        /* Watermark icon */
        .cert-watermark {
          position: absolute;
          bottom: -20px;
          right: -10px;
          font-size: 8rem;
          opacity: 0.04;
          pointer-events: none;
          line-height: 1;
        }

        .cert-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .cert-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .cert-year {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }

        .cert-title-c {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .cert-issuer {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          margin-bottom: 14px;
          letter-spacing: 0.02em;
        }

        .cert-desc {
          font-size: 0.84rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
          margin-bottom: 20px;
        }

        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cert-skill-tag {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .cert-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          color: #fff;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }

        .cert-card:hover .cert-badge {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className='certs-root'>
        <div className='bg-certs'>
          <div className='orb-ce orb-ce1' />
          <div className='orb-ce orb-ce2' />
        </div>

        <Navbar />

        <div className='certs-container'>
          <div className='page-header'>
            <div className='page-eyebrow'>✦ Credentials</div>
            <h1 className='page-title'>Certificates</h1>
            <p className='page-subtitle'>
              Skills validated through continuous learning
            </p>
          </div>

          <div className='stats-row'>
            <div className='stat-item'>
              <div className='stat-num'>4+</div>
              <div className='stat-label'>Certificates</div>
            </div>
            <div className='stat-item'>
              <div className='stat-num'>2</div>
              <div className='stat-label'>Years Learning</div>
            </div>
            <div className='stat-item'>
              <div className='stat-num'>12+</div>
              <div className='stat-label'>Skills Acquired</div>
            </div>
          </div>

          <div className='certs-grid'>
            {certs.map((c) => (
              <div
                className='cert-card'
                key={c.title}
                style={{ borderColor: `${c.color}20` }}
              >
                <div className='cert-watermark'>{c.icon}</div>
                <div className='cert-top'>
                  <div
                    className='cert-icon-wrap'
                    style={{
                      background: `${c.color}15`,
                      borderColor: `${c.color}30`,
                    }}
                  >
                    {c.icon}
                  </div>
                  <span className='cert-year'>{c.year}</span>
                </div>
                <h2 className='cert-title-c'>{c.title}</h2>
                <p className='cert-issuer'>📍 {c.issuer}</p>
                <p className='cert-desc'>{c.desc}</p>
                <div className='cert-skills'>
                  {c.skills.map((sk) => (
                    <span
                      key={sk}
                      className='cert-skill-tag'
                      style={{
                        background: `${c.color}18`,
                        border: `1px solid ${c.color}35`,
                        color: `${c.color}cc`,
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
