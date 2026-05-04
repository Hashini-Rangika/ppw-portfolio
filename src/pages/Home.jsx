import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";

const TYPING_WORDS = [
  "MERN Stack Developer",
  "IT Undergraduate · SLIIT",
  "Future Software Engineer",
  "Full-Stack Enthusiast",
];

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "JavaScript",
];

const stats = [
  { num: "3+", label: "Years of Study" },
  { num: "10+", label: "Projects Built" },
  { num: "4+", label: "Certificates" },
  { num: "MERN", label: "Core Stack" },
];

export default function Home() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Custom cursor
  useEffect(() => {
    const move = (e) => {
      cursorRef.current?.style &&
        (cursorRef.current.style.transform = `translate(${e.clientX - 20}px,${e.clientY - 20}px)`);
      cursorDotRef.current?.style &&
        (cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Typing effect
  useEffect(() => {
    const word = TYPING_WORDS[wordIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => {
          setTyped(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 65);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setTyped(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 35);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % TYPING_WORDS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .h-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          cursor: none;
        }

        /* ── Background ── */
        .h-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .h-orb { position: absolute; border-radius: 50%; filter: blur(90px); animation: hFloat 10s ease-in-out infinite; }
        .h-o1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(109,40,217,.45), transparent 70%); top: -250px; left: -200px; }
        .h-o2 { width: 550px; height: 550px; background: radial-gradient(circle, rgba(29,78,216,.4), transparent 70%); bottom: -180px; right: -150px; animation-delay: -4s; }
        .h-o3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(190,24,93,.3), transparent 70%); top: 40%; left: 55%; opacity: .25; animation-delay: -7s; }
        @keyframes hFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-28px) scale(1.04)} }

        .h-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(139,92,246,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(139,92,246,.04) 1px,transparent 1px);
          background-size: 64px 64px;
        }

        /* ── Custom cursor ── */
        .h-cursor-ring {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid rgba(167,139,250,.6); pointer-events: none; z-index: 9999;
          transition: transform .1s ease; mix-blend-mode: difference;
        }
        .h-cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px; border-radius: 50%;
          background: #a78bfa; pointer-events: none; z-index: 9999; transition: transform .05s ease;
        }

        /* ── Main layout ── */
        .h-hero {
          position: relative; z-index: 1;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          max-width: 1180px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }
        @media (max-width: 860px) {
          .h-hero { grid-template-columns: 1fr; padding: 120px 24px 60px; }
          .h-left { order: 2; }
          .h-right { order: 1; display: flex; justify-content: center; }
        }

        /* ── LEFT SIDE ── */
        .h-left { display: flex; flex-direction: column; }

        /* Welcome badge */
        .h-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .68rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(167,139,250,.85); border: 1px solid rgba(167,139,250,.22);
          background: rgba(139,92,246,.09); padding: 6px 16px; border-radius: 100px;
          margin-bottom: 28px; width: fit-content;
          animation: fadeUp .8s ease both; animation-delay: .1s;
        }
        .h-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #a78bfa; animation: bPulse 2s ease-in-out infinite; }
        @keyframes bPulse { 0%,100%{opacity:1} 50%{opacity:.2} }

        /* Name */
        .h-greeting {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 600; color: rgba(255,255,255,.55);
          letter-spacing: .04em; margin-bottom: 4px;
          animation: fadeUp .8s ease both; animation-delay: .15s;
        }
        .h-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 800; line-height: .95; letter-spacing: -.03em;
          margin-bottom: 20px;
          animation: fadeUp .8s ease both; animation-delay: .2s;
        }
        .h-name-first { color: #fff; }
        .h-name-last {
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 45%, #f472b6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Typing subtitle */
        .h-typing-wrap {
          display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
          animation: fadeUp .8s ease both; animation-delay: .25s;
        }
        .h-typing-bar { width: 3px; height: 24px; border-radius: 2px; background: linear-gradient(to bottom, #a78bfa, #60a5fa); flex-shrink: 0; }
        .h-typing-text {
          font-size: clamp(.9rem, 2vw, 1.15rem); font-weight: 400;
          color: rgba(255,255,255,.65); letter-spacing: .01em; min-height: 1.6em;
        }
        .h-cursor-blink {
          display: inline-block; width: 2px; height: 1em; background: #a78bfa;
          margin-left: 2px; vertical-align: text-bottom;
          animation: blink .75s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Focus box */
        .h-focus-box {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px; border-radius: 14px;
          background: rgba(139,92,246,.08); border: 1px solid rgba(139,92,246,.2);
          margin-bottom: 28px;
          animation: fadeUp .8s ease both; animation-delay: .3s;
        }
        .h-focus-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
        .h-focus-text { font-size: .88rem; line-height: 1.7; color: rgba(255,255,255,.55); }
        .h-focus-text strong { color: rgba(167,139,250,.9); font-weight: 500; }

        /* Available badge */
        .h-avail {
          display: inline-flex; align-items: center; gap: 7px; width: fit-content;
          font-size: .7rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          background: rgba(16,185,129,.1); border: 1px solid rgba(16,185,129,.25);
          color: #34d399; padding: 5px 14px; border-radius: 100px; margin-bottom: 32px;
          animation: fadeUp .8s ease both; animation-delay: .35s;
        }
        .h-avail-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: bPulse 1.5s ease-in-out infinite; }

        /* CTA buttons */
        .h-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; animation: fadeUp .8s ease both; animation-delay: .4s; }
        .h-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: #fff; font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 500;
          text-decoration: none; cursor: none; transition: all .3s ease;
          position: relative; overflow: hidden;
        }
        .h-btn-primary::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #8b5cf6, #3b82f6); opacity: 0; transition: opacity .3s ease; }
        .h-btn-primary:hover::before { opacity: 1; }
        .h-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(124,58,237,.4); }
        .h-btn-primary span { position: relative; z-index: 1; }

        .h-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 12px;
          background: transparent; color: rgba(255,255,255,.7);
          font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 500;
          border: 1px solid rgba(255,255,255,.13); text-decoration: none; cursor: none;
          transition: all .3s ease;
        }
        .h-btn-secondary:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.28); transform: translateY(-2px); color: #fff; }

        /* Skills */
        .h-skills { display: flex; flex-wrap: wrap; gap: 7px; animation: fadeUp .8s ease both; animation-delay: .45s; }
        .h-skill {
          padding: 5px 13px; border-radius: 100px; font-size: .73rem; font-weight: 500;
          letter-spacing: .02em; background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09); color: rgba(255,255,255,.5); transition: all .3s ease;
        }
        .h-skill:hover { background: rgba(139,92,246,.15); border-color: rgba(139,92,246,.3); color: #a78bfa; transform: translateY(-2px); }

        /* ── RIGHT SIDE – Photo ── */
        .h-right { display: flex; justify-content: center; align-items: center; }

        .h-photo-wrap {
          position: relative; width: 340px; height: 400px;
          animation: fadeUp .9s ease both; animation-delay: .3s;
          flex-shrink: 0;
        }
        @media (max-width: 860px) { .h-photo-wrap { width: 260px; height: 310px; } }

        /* Glow behind photo */
        .h-photo-glow {
          position: absolute; inset: -30px;
          background: radial-gradient(ellipse at center, rgba(124,58,237,.35) 0%, transparent 70%);
          border-radius: 50%; filter: blur(30px); z-index: 0;
          animation: glowPulse 4s ease-in-out infinite;
        }
        @keyframes glowPulse { 0%,100%{opacity:.6} 50%{opacity:1} }

        /* Decorative ring */
        .h-photo-ring {
          position: absolute; inset: -12px; border-radius: 32px;
          border: 1px solid rgba(139,92,246,.3);
          animation: ringRotate 20s linear infinite; z-index: 0;
        }
        .h-photo-ring::before {
          content: ''; position: absolute; top: -4px; left: 40%;
          width: 8px; height: 8px; border-radius: 50%;
          background: #a78bfa; box-shadow: 0 0 12px #a78bfa;
        }
        @keyframes ringRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .h-photo-inner {
          position: relative; z-index: 1; width: 100%; height: 100%;
          border-radius: 28px; overflow: hidden;
          border: 2px solid rgba(255,255,255,.1);
          box-shadow: 0 32px 80px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.1);
        }
        .h-photo-inner img {
          width: 100%; height: 100%; object-fit: cover; object-position: top center;
          transition: transform .6s cubic-bezier(.16,1,.3,1);
        }
        .h-photo-wrap:hover .h-photo-inner img { transform: scale(1.04); }

        /* Overlay gradient on photo */
        .h-photo-inner::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6,6,18,.7) 0%, transparent 50%);
          z-index: 1;
        }

        /* Floating chips */
        .h-chip {
          position: absolute; z-index: 3;
          display: flex; align-items: center; gap: 7px;
          background: rgba(15,15,30,.85); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.12); border-radius: 12px;
          padding: 8px 14px; font-size: .72rem; font-weight: 600;
          white-space: nowrap; color: #fff;
          box-shadow: 0 8px 32px rgba(0,0,0,.4);
        }
        .h-chip-tl { top: -16px; left: -20px; animation: chipFloat 6s ease-in-out infinite; }
        .h-chip-br { bottom: 28px; right: -24px; animation: chipFloat 6s ease-in-out infinite; animation-delay: -3s; }
        @keyframes chipFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .h-chip-dot { width: 7px; height: 7px; border-radius: 50%; }

        /* ── Stats row ── */
        .h-stats-section {
          position: relative; z-index: 1;
          max-width: 1180px; margin: 0 auto;
          padding: 0 40px 100px;
        }
        @media (max-width: 680px) { .h-stats-section { padding: 0 24px 80px; } }

        .h-stats-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,92,246,.3), transparent); margin-bottom: 48px; }

        .h-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border: 1px solid rgba(255,255,255,.07); border-radius: 20px;
          background: rgba(255,255,255,.02); overflow: hidden;
          margin-bottom: 64px;
        }
        @media (max-width: 560px) { .h-stats-grid { grid-template-columns: repeat(2, 1fr); } }

        .h-stat {
          text-align: center; padding: 28px 16px;
          border-right: 1px solid rgba(255,255,255,.06);
          animation: fadeUp .8s ease both;
        }
        .h-stat:last-child { border-right: none; }
        .h-stat:nth-child(1) { animation-delay: .1s; }
        .h-stat:nth-child(2) { animation-delay: .18s; }
        .h-stat:nth-child(3) { animation-delay: .26s; }
        .h-stat:nth-child(4) { animation-delay: .34s; }
        .h-stat-num {
          font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; letter-spacing: -.04em;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 4px;
        }
        .h-stat-label { font-size: .67rem; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.28); }

        /* About cards */
        .h-section-label { text-align: center; font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(167,139,250,.6); font-weight: 500; margin-bottom: 36px; }
        .h-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }
        .h-card {
          position: relative; padding: 28px 30px; border-radius: 18px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          overflow: hidden; transition: all .4s cubic-bezier(.16,1,.3,1);
          animation: fadeUp .8s ease both;
        }
        .h-card:nth-child(1) { animation-delay: .1s; }
        .h-card:nth-child(2) { animation-delay: .2s; }
        .h-card:nth-child(3) { animation-delay: .3s; }
        .h-card::before { content: ''; position: absolute; inset: 0; border-radius: 18px; background: linear-gradient(135deg, rgba(139,92,246,.08), transparent); opacity: 0; transition: opacity .4s ease; }
        .h-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(167,139,250,.5), transparent); opacity: 0; transition: opacity .4s ease; }
        .h-card:hover { transform: translateY(-6px); border-color: rgba(139,92,246,.25); box-shadow: 0 24px 60px rgba(0,0,0,.5); }
        .h-card:hover::before, .h-card:hover::after { opacity: 1; }
        .h-card-icon { font-size: 1.6rem; margin-bottom: 14px; display: block; }
        .h-card-num { position: absolute; top: 20px; right: 24px; font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: rgba(255,255,255,.03); line-height: 1; }
        .h-card-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 8px; position: relative; }
        .h-card-body { font-size: .85rem; line-height: 1.72; color: rgba(255,255,255,.44); position: relative; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className='h-root'>
        {/* Cursor */}
        <div className='h-cursor-ring' ref={cursorRef} />
        <div className='h-cursor-dot' ref={cursorDotRef} />

        {/* BG */}
        <div className='h-bg'>
          <div className='h-orb h-o1' />
          <div className='h-orb h-o2' />
          <div className='h-orb h-o3' />
        </div>
        <div className='h-grid' />

        <Navbar />

        {/* ── HERO ── */}
        <section className='h-hero'>
          {/* LEFT */}
          <div className='h-left'>
            <div className='h-badge'>
              <div className='h-badge-dot' /> Welcome to my Portfolio
            </div>

            <p className='h-greeting'>Hi, I'm</p>
            <h1 className='h-name'>
              <span className='h-name-first'>Hashini </span>
              <span className='h-name-last'>Wickramasooriya</span>
            </h1>

            {/* Typing */}
            <div className='h-typing-wrap'>
              <div className='h-typing-bar' />
              <span className='h-typing-text'>
                {typed}
                <span className='h-cursor-blink' />
              </span>
            </div>

            {/* Focus */}
            <div className='h-focus-box'>
              <span className='h-focus-icon'>🎯</span>
              <p className='h-focus-text'>
                I focus on <strong>full-stack web development</strong>,{" "}
                <strong>MERN stack technologies</strong>, and{" "}
                <strong>building user-centric solutions</strong> that solve
                real-world problems with clean, modern code.
              </p>
            </div>

            {/* Available */}
            <div className='h-avail'>
              <div className='h-avail-dot' /> Available for Opportunities
            </div>

            {/* CTAs */}
            <div className='h-cta'>
              <a href='/cv' className='h-btn-primary'>
                <span>View My CV</span>
                <span>→</span>
              </a>
              <a href='/journal' className='h-btn-secondary'>
                Read Journal
              </a>
            </div>

            {/* Skills */}
            <div className='h-skills'>
              {skills.map((s) => (
                <span key={s} className='h-skill'>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT – Photo */}
          <div className='h-right'>
            <div className='h-photo-wrap'>
              <div className='h-photo-glow' />
              <div className='h-photo-ring' />

              {/* Floating chips */}
              <div className='h-chip h-chip-tl'>
                <span
                  className='h-chip-dot'
                  style={{ background: "#a78bfa" }}
                />
                IT Undergraduate · SLIIT
              </div>
              <div className='h-chip h-chip-br'>
                <span
                  className='h-chip-dot'
                  style={{ background: "#34d399" }}
                />
                Open to Work
              </div>

              <div className='h-photo-inner'>
                {/* Replace src with your actual photo path */}
                <img
                  src='/src/my.jpeg'
                  alt='Hashini Wickramasooriya'
                  onError={(e) => {
                    // Fallback avatar if image not found
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #4c1d95 0%, #1e3a8a 50%, #0c4a6e 100%)";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.alignItems = "center";
                    e.target.parentElement.style.justifyContent = "center";
                    const initials = document.createElement("div");
                    initials.style.cssText =
                      "font-family:Syne,sans-serif;font-size:5rem;font-weight:800;color:rgba(255,255,255,0.2);";
                    initials.textContent = "HW";
                    e.target.parentElement.appendChild(initials);
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className='h-stats-section'>
          <div className='h-stats-divider' />
          <div className='h-stats-grid'>
            {stats.map((s) => (
              <div className='h-stat' key={s.label}>
                <div className='h-stat-num'>{s.num}</div>
                <div className='h-stat-label'>{s.label}</div>
              </div>
            ))}
          </div>

          {/* About cards */}
          <p className='h-section-label'>About Me</p>
          <div className='h-cards'>
            {[
              {
                icon: "✦",
                num: "01",
                title: "Who I Am",
                body: "An IT undergraduate at SLIIT, passionate about building modern, user-centric web applications with clean code and thoughtful design.",
              },
              {
                icon: "◈",
                num: "02",
                title: "My Background",
                body: "Strong foundation in full-stack development with hands-on experience in the MERN stack, REST APIs, and database architecture.",
              },
              {
                icon: "◎",
                num: "03",
                title: "My Goals",
                body: "To grow into a senior software engineer, leading impactful projects and contributing to the future of technology in Sri Lanka and beyond.",
              },
            ].map(({ icon, num, title, body }) => (
              <div className='h-card' key={title}>
                <span className='h-card-icon'>{icon}</span>
                <div className='h-card-num'>{num}</div>
                <h2 className='h-card-title'>{title}</h2>
                <p className='h-card-body'>{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
