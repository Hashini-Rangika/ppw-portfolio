import Navbar from "../components/Navbar";
import { useState } from "react";

const highlights = [
  {
    icon: "🎓",
    label: "Education",
    value: "BSc in Information Technology – SLIIT",
  },
  {
    icon: "⚡",
    label: "Core Skills",
    value: "MERN Stack · JavaScript · React · Node.js",
  },
  {
    icon: "🛠",
    label: "Projects",
    value: "Full-stack web applications & systems",
  },
  { icon: "📜", label: "Certifications", value: "Python · PHP · JavaScript" },
  {
    icon: "🤝",
    label: "Soft Skills",
    value: "Communication · Teamwork · Problem-solving",
  },
];

export default function CV() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
           <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cv-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* Background */
        .bg-layer { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.2; animation: floatOrb 12s ease-in-out infinite; }
        .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, #4c1d95, transparent 70%); top: -180px; left: -140px; }
        .orb-2 { width: 450px; height: 450px; background: radial-gradient(circle, #1e3a8a, transparent 70%); bottom: -100px; right: -80px; animation-delay: -5s; }
        .orb-3 { width: 250px; height: 250px; background: radial-gradient(circle, #9d174d, transparent 70%); top: 60%; left: 60%; opacity: 0.1; animation-delay: -8s; }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-24px) scale(1.04); }
        }
        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Layout */
        .cv-wrap {
          position: relative; z-index: 1;
          max-width: 860px; margin: 0 auto;
          padding: 148px 24px 100px;
          display: flex; flex-direction: column; align-items: center;
        }

        /* Header */
        .page-header { text-align: center; margin-bottom: 48px; animation: fadeUp .8s ease both; }
        .eyebrow {
          display: inline-block; font-size: .7rem; letter-spacing: .2em;
          text-transform: uppercase; color: rgba(167,139,250,.75); font-weight: 500; margin-bottom: 14px;
        }
        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800; line-height: .94; letter-spacing: -.04em;
          background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,.45));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 14px;
        }
        .page-desc {
          font-size: .9rem; line-height: 1.72; color: rgba(255,255,255,.4);
          max-width: 460px; margin: 0 auto; font-style: italic;
        }

        /* Download button */
        .btn-wrap { margin: 40px 0 56px; animation: fadeUp .8s ease both; animation-delay: .15s; }
        .download-btn {
          position: relative; display: inline-flex; align-items: center; gap: 14px;
          padding: 16px 38px; background: transparent; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: .88rem; font-weight: 500;
          letter-spacing: .02em; text-decoration: none; border-radius: 16px;
          border: 1px solid rgba(255,255,255,.14); overflow: hidden;
          transition: all .4s cubic-bezier(.16,1,.3,1); cursor: pointer;
        }
        .download-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          opacity: 0; transition: opacity .4s ease; border-radius: 15px;
        }
        .download-btn:hover {
          border-color: transparent; transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 60px rgba(124,58,237,.4), 0 0 0 1px rgba(124,58,237,.3);
        }
        .download-btn:hover::before { opacity: 1; }
        .btn-inner { position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; }
        .btn-icon {
          width: 38px; height: 38px; border-radius: 11px;
          background: rgba(255,255,255,.1); display: flex; align-items: center;
          justify-content: center; font-size: 1.1rem;
          transition: all .3s ease;
        }
        .download-btn:hover .btn-icon { background: rgba(255,255,255,.2); transform: translateY(2px); }
        .btn-meta { text-align: left; }
        .btn-label { display: block; font-size: .88rem; font-weight: 500; }
        .btn-sub { display: block; font-size: .72rem; color: rgba(255,255,255,.4); margin-top: 1px; }

        /* Highlights card */
        .cv-card {
          width: 100%; padding: 36px 40px; border-radius: 22px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          position: relative; overflow: hidden;
          animation: fadeUp .8s ease both; animation-delay: .25s;
          transition: all .4s cubic-bezier(.16,1,.3,1);
        }
        .cv-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #2563eb, #be185d);
          border-radius: 22px 22px 0 0;
        }
        .cv-card:hover { border-color: rgba(139,92,246,.2); box-shadow: 0 28px 70px rgba(0,0,0,.45); transform: translateY(-4px); }

        .card-head {
          display: flex; align-items: center; gap: 16px;
          padding-bottom: 28px; margin-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .avatar {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem;
          flex-shrink: 0;
        }
        .avatar-info {}
        .avatar-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; }
        .avatar-role { font-size: .78rem; color: rgba(255,255,255,.38); margin-top: 3px; }

        .card-label {
          font-size: .68rem; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(167,139,250,.6); font-weight: 500; margin-bottom: 20px;
        }
        .highlights { display: flex; flex-direction: column; gap: 14px; }
        .h-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 16px; border-radius: 12px;
          background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.05);
          transition: all .3s ease;
        }
        .h-row:hover { background: rgba(139,92,246,.07); border-color: rgba(139,92,246,.18); }
        .h-icon { font-size: 1.05rem; width: 22px; flex-shrink: 0; margin-top: 1px; }
        .h-text {}
        .h-label { font-size: .68rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.28); font-weight: 500; margin-bottom: 3px; }
        .h-value { font-size: .86rem; color: rgba(255,255,255,.65); line-height: 1.4; }

        /* Watermark */
        .cv-watermark {
          position: absolute; right: 24px; bottom: -18px;
          font-family: 'Syne', sans-serif; font-size: 8rem; font-weight: 800;
          color: rgba(255,255,255,.022); letter-spacing: -.04em; pointer-events: none; line-height: 1;
        }

        /* Divider */
        .divider-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, rgba(167,139,250,.5), transparent);
          margin: 0 auto 48px;
          animation: fadeUp .8s ease both; animation-delay: .2s;
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className='cv-root'>
        <div className='bg-layer'>
          <div className='orb orb-1' />
          <div className='orb orb-2' />
          <div className='orb orb-3' />
        </div>
        <div className='grid-bg' />
        <Navbar />

        <div className='cv-wrap'>
          {/* ── Header ── */}
          <div className='page-header'>
            <div className='eyebrow'>✦ Resume</div>
            <h1 className='page-title'>My CV</h1>
            <p className='page-desc'>
              My CV highlights my academic background, technical skills, and
              project experience — demonstrating readiness for internship and
              professional opportunities in the IT industry.
            </p>
          </div>

          {/* ── Download button ── */}
          <div className='btn-wrap'>
            <a
              href='/cv.pdf'
              download
              className='download-btn'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className='btn-inner'>
                <div className='btn-icon'>{hovered ? "⬇" : "📄"}</div>
                <div className='btn-meta'>
                  <span className='btn-label'>Download CV</span>
                  <span className='btn-sub'>PDF · Updated 2024</span>
                </div>
              </div>
            </a>
          </div>

          <div className='divider-line' />

          {/* ── CV Highlights card ── */}
          <div className='cv-card'>
            <div className='card-head'>
              <div className='avatar'>H</div>
              <div className='avatar-info'>
                <div className='avatar-name'>Hashini</div>
                <div className='avatar-role'>
                  IT Undergraduate · SLIIT · MERN Stack Developer
                </div>
              </div>
            </div>

            <p className='card-label'>CV Overview</p>
            <div className='highlights'>
              {highlights.map((h) => (
                <div className='h-row' key={h.label}>
                  <span className='h-icon'>{h.icon}</span>
                  <div className='h-text'>
                    <div className='h-label'>{h.label}</div>
                    <div className='h-value'>{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className='cv-watermark'>CV</div>
          </div>
        </div>
      </div>
    </>
  );
}
