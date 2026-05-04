import Navbar from "../components/Navbar";
import { useState } from "react";

const certs = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Great Learning Academy",
    platform: "Great Learning",
    date: "June 2024",
    image: "/certificates/java.jpeg",
    desc: "Successfully completed the Java Programming course, covering core OOP concepts, problem-solving, and application development using Java.",
    skills: ["Java", "OOP", "Programming"],
    accent: "#b45309",
    light: "#fbbf24",
    glow: "rgba(180,83,9,0.35)",
    icon: "☕",
    verify: "https://verify.mygreatlearning.com/OAMZSAWL",
  },
  {
    id: 2,
    title: "PHP for Beginners",
    issuer: "Great Learning Academy",
    platform: "Great Learning",
    date: "June 2024",
    image: "/certificates/php.jpeg",
    desc: "Learned best practices for server-side scripting, including PHP for dynamic web page generation and basic database interactions.",
    skills: ["PHP", "Backend", "MySQL"],
    accent: "#2563eb",
    light: "#60a5fa",
    glow: "rgba(37,99,235,0.35)",
    icon: "🐘",
    verify: "https://verify.mygreatlearning.com/RBZNRBDV",
  },
  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CODL)",
    platform: "UoM · CODL",
    date: "July 9, 2024",
    image: "/certificates/python.jpeg",
    desc: "Participated in the online learning programme in Python for Beginners, conducted by the Department of Computer Science & Engineering, UoM.",
    skills: ["Python", "Algorithms", "Logic"],
    accent: "#7c3aed",
    light: "#a78bfa",
    glow: "rgba(124,58,237,0.35)",
    icon: "🐍",
    verify: "https://open.uom.lk/verify",
  },
  {
    id: 4,
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jul 17, 2024",
    image: "/certificates/js.jpeg",
    desc: "Completed 6h 14min course mastering JavaScript fundamentals including DOM manipulation, ES6+ features, and dynamic web application development.",
    skills: ["JavaScript", "ES6+", "DOM"],
    accent: "#0891b2",
    light: "#22d3ee",
    glow: "rgba(8,145,178,0.35)",
    icon: "⚡",
    verify: null,
  },
];

export default function Certificates() {
  const [activeImg, setActiveImg] = useState(null); // lightbox

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cr-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* ── Background ── */
        .bg-layer { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .orb { position: absolute; border-radius: 50%; filter: blur(110px); opacity: .17; animation: floatOrb 14s ease-in-out infinite; }
        .o1 { width: 700px; height: 700px; background: radial-gradient(circle, #4c1d95, transparent 70%); top: -220px; right: -180px; }
        .o2 { width: 500px; height: 500px; background: radial-gradient(circle, #0c4a6e, transparent 70%); bottom: -130px; left: -100px; animation-delay: -6s; }
        .o3 { width: 300px; height: 300px; background: radial-gradient(circle, #713f12, transparent 70%); top: 55%; left: 45%; opacity: .1; animation-delay: -10s; }
        @keyframes floatOrb { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.05)} }

        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(139,92,246,.03) 1px,transparent 1px), linear-gradient(90deg,rgba(139,92,246,.03) 1px,transparent 1px);
          background-size: 60px 60px;
        }

        /* ── Layout ── */
        .cr-wrap { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; padding: 148px 24px 100px; }

        /* ── Header ── */
        .cr-header { text-align: center; margin-bottom: 60px; animation: fadeUp .8s ease both; }
        .cr-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .68rem; letter-spacing: .22em; text-transform: uppercase;
          color: rgba(167,139,250,.8); font-weight: 500;
          border: 1px solid rgba(167,139,250,.2); background: rgba(139,92,246,.08);
          padding: 5px 16px; border-radius: 100px; margin-bottom: 20px;
        }
        .cr-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #a78bfa; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.2} }

        .cr-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800; line-height: .93; letter-spacing: -.04em;
          background: linear-gradient(135deg, #fff 35%, rgba(255,255,255,.4));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 16px;
        }
        .cr-subtitle { font-size: .9rem; color: rgba(255,255,255,.35); font-style: italic; }

        /* ── Stats row ── */
        .cr-stats {
          display: flex; justify-content: center; gap: 0; flex-wrap: wrap;
          margin-bottom: 68px; animation: fadeUp .8s ease both; animation-delay: .1s;
          border: 1px solid rgba(255,255,255,.07); border-radius: 18px;
          background: rgba(255,255,255,.02); overflow: hidden;
          max-width: 600px; margin-left: auto; margin-right: auto;
        }
        .cr-stat {
          flex: 1; min-width: 120px; text-align: center;
          padding: 22px 16px;
          border-right: 1px solid rgba(255,255,255,.06);
        }
        .cr-stat:last-child { border-right: none; }
        .cr-stat-num {
          font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; letter-spacing: -.04em;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cr-stat-label { font-size: .65rem; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.26); margin-top: 3px; }

        /* ── Section label ── */
        .cr-section-label {
          font-size: .67rem; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(167,139,250,.6); font-weight: 500; margin-bottom: 28px;
          animation: fadeUp .8s ease both; animation-delay: .15s;
        }

        /* ── Grid ── */
        .cr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        @media (max-width: 680px) { .cr-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .cr-card {
          position: relative;
          border-radius: 22px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          overflow: hidden;
          transition: all .45s cubic-bezier(.16,1,.3,1);
          animation: fadeUp .8s ease both;
          display: flex; flex-direction: column;
        }
        .cr-card:nth-child(1) { animation-delay: .1s; }
        .cr-card:nth-child(2) { animation-delay: .18s; }
        .cr-card:nth-child(3) { animation-delay: .26s; }
        .cr-card:nth-child(4) { animation-delay: .34s; }

        .cr-card:hover {
          transform: translateY(-10px);
        }

        /* ── Image container ── */
        .cr-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          cursor: zoom-in;
          background: rgba(0,0,0,.4);
          flex-shrink: 0;
        }
        .cr-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(6,6,18,.9) 100%);
        }
        .cr-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform .6s cubic-bezier(.16,1,.3,1), filter .4s ease;
          filter: brightness(.85) saturate(.9);
        }
        .cr-card:hover .cr-img {
          transform: scale(1.06);
          filter: brightness(.95) saturate(1.05);
        }

        /* zoom hint overlay */
        .cr-zoom-hint {
          position: absolute;
          bottom: 12px; right: 12px;
          z-index: 2;
          background: rgba(0,0,0,.55);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 8px;
          padding: 4px 10px;
          font-size: .65rem;
          letter-spacing: .06em;
          color: rgba(255,255,255,.6);
          opacity: 0;
          transform: translateY(4px);
          transition: all .3s ease;
        }
        .cr-card:hover .cr-zoom-hint { opacity: 1; transform: translateY(0); }

        /* top accent bar */
        .cr-accent-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 3;
          border-radius: 22px 22px 0 0;
        }

        /* ── Card body ── */
        .cr-body { padding: 24px 26px 22px; display: flex; flex-direction: column; flex: 1; }

        .cr-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 14px;
        }
        .cr-icon-badge {
          width: 44px; height: 44px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,.08);
        }
        .cr-right-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; }
        .cr-platform-badge {
          font-size: .6rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
        }
        .cr-date { font-size: .68rem; color: rgba(255,255,255,.27); }

        .cr-card-title {
          font-family: 'Syne', sans-serif; font-size: 1.05rem;
          font-weight: 800; letter-spacing: -.02em; margin-bottom: 3px;
          line-height: 1.2;
        }
        .cr-card-issuer { font-size: .74rem; color: rgba(255,255,255,.32); margin-bottom: 12px; }
        .cr-card-desc {
          font-size: .82rem; line-height: 1.72; color: rgba(255,255,255,.44);
          margin-bottom: 16px; flex: 1;
        }

        /* skills */
        .cr-skills { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
        .cr-skill {
          font-size: .67rem; font-weight: 500; letter-spacing: .04em;
          padding: 3px 10px; border-radius: 100px;
        }

        /* divider */
        .cr-divider { height: 1px; background: rgba(255,255,255,.06); margin-bottom: 16px; }

        /* footer */
        .cr-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .cr-cert-id {
          font-size: .65rem; color: rgba(255,255,255,.2);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;
        }
        .cr-verify-btn {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .7rem; font-weight: 600; padding: 5px 14px; border-radius: 100px;
          text-decoration: none; border: 1px solid; transition: all .3s ease; flex-shrink: 0;
          letter-spacing: .02em;
        }
        .cr-verify-btn:hover { transform: translateY(-2px); filter: brightness(1.2); }
        .cr-no-verify { font-size: .67rem; color: rgba(255,255,255,.22); font-style: italic; }

        /* ── Lightbox ── */
        .cr-lightbox {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,.88); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; cursor: zoom-out;
          animation: lbFadeIn .25s ease;
        }
        @keyframes lbFadeIn { from{opacity:0} to{opacity:1} }
        .cr-lightbox img {
          max-width: 100%; max-height: 90vh;
          border-radius: 16px;
          box-shadow: 0 40px 120px rgba(0,0,0,.7);
          animation: lbScale .3s cubic-bezier(.16,1,.3,1);
        }
        @keyframes lbScale { from{transform:scale(.92)} to{transform:scale(1)} }
        .cr-lb-close {
          position: fixed; top: 20px; right: 24px;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2);
          color: #fff; font-size: 1.1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all .25s ease;
        }
        .cr-lb-close:hover { background: rgba(255,255,255,.2); transform: scale(1.1); }

        @keyframes fadeUp { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className='cr-root'>
        {/* Background */}
        <div className='bg-layer'>
          <div className='orb o1' />
          <div className='orb o2' />
          <div className='orb o3' />
        </div>
        <div className='grid-bg' />

        <Navbar />

        {/* Lightbox */}
        {activeImg && (
          <div className='cr-lightbox' onClick={() => setActiveImg(null)}>
            <button className='cr-lb-close' onClick={() => setActiveImg(null)}>
              ✕
            </button>
            <img
              src={activeImg.src}
              alt={activeImg.title}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className='cr-wrap'>
          {/* ── Header ── */}
          <div className='cr-header'>
            <div className='cr-eyebrow'>
              <div className='cr-eyebrow-dot' /> Credentials
            </div>
            <h1 className='cr-title'>Certificates</h1>
            <p className='cr-subtitle'>
              Skills validated through continuous, self-driven learning
            </p>
          </div>

          {/* ── Stats ── */}
          <div className='cr-stats' style={{ marginBottom: "60px" }}>
            {[
              { num: "4", label: "Certificates" },
              { num: "3", label: "Platforms" },
              { num: "2024", label: "Year Earned" },
              { num: "10+", label: "Skills" },
            ].map((s) => (
              <div className='cr-stat' key={s.label}>
                <div className='cr-stat-num'>{s.num}</div>
                <div className='cr-stat-label'>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Label ── */}
          <p className='cr-section-label'>All Certificates · 2024</p>

          {/* ── Cards ── */}
          <div className='cr-grid'>
            {certs.map((c) => (
              <div
                className='cr-card'
                key={c.id}
                style={{ borderColor: `${c.accent}28` }}
              >
                {/* Top accent bar */}
                <div
                  className='cr-accent-bar'
                  style={{
                    background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                  }}
                />

                {/* Certificate image */}
                <div
                  className='cr-img-wrap'
                  onClick={() => setActiveImg({ src: c.image, title: c.title })}
                >
                  <img
                    className='cr-img'
                    src={c.image}
                    alt={c.title}
                    loading='lazy'
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background = `${c.accent}18`;
                    }}
                  />
                  <div
                    className='cr-zoom-hint'
                    style={{ borderColor: `${c.accent}40`, color: c.light }}
                  >
                    🔍 View Certificate
                  </div>
                </div>

                {/* Card body */}
                <div className='cr-body'>
                  <div className='cr-card-top'>
                    <div
                      className='cr-icon-badge'
                      style={{
                        background: `${c.accent}18`,
                        borderColor: `${c.accent}30`,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div className='cr-right-meta'>
                      <span
                        className='cr-platform-badge'
                        style={{
                          background: `${c.accent}18`,
                          border: `1px solid ${c.accent}35`,
                          color: c.light,
                        }}
                      >
                        {c.platform}
                      </span>
                      <span className='cr-date'>📅 {c.date}</span>
                    </div>
                  </div>

                  <h2 className='cr-card-title'>{c.title}</h2>
                  <p className='cr-card-issuer'>🏛 {c.issuer}</p>
                  <p className='cr-card-desc'>{c.desc}</p>

                  <div className='cr-skills'>
                    {c.skills.map((sk) => (
                      <span
                        key={sk}
                        className='cr-skill'
                        style={{
                          background: `${c.accent}16`,
                          border: `1px solid ${c.accent}32`,
                          color: c.light,
                        }}
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className='cr-divider' />

                  <div className='cr-footer'>
                    <span className='cr-cert-id'>
                      Certificate of Completion · {c.date}
                    </span>
                    {c.verify ? (
                      <a
                        href={c.verify}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cr-verify-btn'
                        style={{
                          background: `${c.accent}14`,
                          borderColor: `${c.accent}38`,
                          color: c.light,
                        }}
                      >
                        ✓ Verify
                      </a>
                    ) : (
                      <span className='cr-no-verify'>LinkedIn verified</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
