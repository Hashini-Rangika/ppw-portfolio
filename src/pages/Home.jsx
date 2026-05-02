import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";

export default function Home() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
    "JavaScript",
  ];

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          cursor: none;
        }

        /* Background */
        .bg-orbs {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, #6d28d9, transparent 70%);
          top: -200px; left: -150px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #1d4ed8, transparent 70%);
          bottom: -150px; right: -100px;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #be185d, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -5s;
          opacity: 0.2;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* Grid noise texture */
        .noise-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
        }

        /* Grid lines */
        .grid-lines {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Custom cursor */
        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(167,139,250,0.6);
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.12s ease;
          mix-blend-mode: difference;
        }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #a78bfa;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.05s ease;
        }

        /* Hero section */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 60px;
          text-align: center;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(167,139,250,0.8);
          border: 1px solid rgba(167,139,250,0.2);
          background: rgba(139,92,246,0.08);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 32px;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.1s;
        }

        .eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-name {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: clamp(3.5rem, 10vw, 7.5rem);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.04em;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.2s;
          margin-bottom: 8px;
        }

        .name-plain { color: #fff; }

        .name-gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 40%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.02em;
          margin-top: 16px;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.3s;
        }

        .hero-divider {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(167,139,250,0.6), transparent);
          margin: 40px auto;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.4s;
        }

        .hero-desc {
          max-width: 480px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.5s;
        }

        /* CTA buttons */
        .cta-row {
          display: flex;
          gap: 12px;
          margin-top: 36px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.6s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          border: none;
          border-radius: 12px;
          text-decoration: none;
          cursor: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,58,237,0.4); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          text-decoration: none;
          cursor: none;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
          color: #fff;
        }

        /* Skills pills */
        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 48px;
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.7s;
        }

        .skill-pill {
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }

        .skill-pill:hover {
          background: rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.3);
          color: #a78bfa;
          transform: translateY(-2px);
        }

        /* Cards section */
        .cards-section {
          position: relative;
          z-index: 1;
          padding: 0 24px 100px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          text-align: center;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(167,139,250,0.6);
          margin-bottom: 40px;
          font-weight: 500;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .card {
          position: relative;
          padding: 32px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          animation: fadeUp 0.8s ease both;
        }

        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }

        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(139,92,246,0.08), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(139,92,246,0.25);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.15);
        }

        .card:hover::before, .card:hover::after { opacity: 1; }

        .card-icon {
          font-size: 1.8rem;
          margin-bottom: 16px;
          display: block;
        }

        .card-number {
          position: absolute;
          top: 24px;
          right: 28px;
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.03);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .card-title {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          position: relative;
        }

        .card-body {
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
          position: relative;
        }

        /* Scroll indicator */
        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          animation: fadeUp 1s ease both;
          animation-delay: 1s;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(167,139,250,0.5), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className='home-root'>
        {/* Cursor */}
        <div className='cursor-ring' ref={cursorRef} />
        <div className='cursor-dot' ref={cursorDotRef} />

        {/* Background */}
        <div className='bg-orbs'>
          <div className='orb orb-1' />
          <div className='orb orb-2' />
          <div className='orb orb-3' />
        </div>
        <div className='noise-overlay' />
        <div className='grid-lines' />

        <Navbar />

        {/* Hero */}
        <section className='hero'>
          <div className='hero-eyebrow'>
            <div className='eyebrow-dot' />
            IT Undergraduate · SLIIT
          </div>

          <h1 className='hero-name'>
            <div className='name-plain'>I'm</div>
            <div className='name-gradient'>Hashini</div>
          </h1>

          <p className='hero-subtitle'>
            Future Software Engineer & MERN Stack Developer
          </p>

          <div className='hero-divider' />

          <p className='hero-desc'>
            I am an IT undergraduate at SLIIT with a strong passion for software
            development and building modern web applications. I specialize in
            MERN stack technologies and enjoy solving real-world problems
            through innovative and user-friendly solutions. I am continuously
            improving my technical and professional skills to become a
            successful software engineer in the future.
          </p>

          <div className='cta-row'>
            <a href='/cv' className='btn-primary'>
              <span>View My CV</span>
              <span>→</span>
            </a>
            <a href='/journal' className='btn-secondary'>
              Read Journal
            </a>
          </div>

          <div className='skills-row'>
            {skills.map((s) => (
              <span key={s} className='skill-pill'>
                {s}
              </span>
            ))}
          </div>

          <div className='scroll-hint'>
            <div className='scroll-line' />
            scroll
          </div>
        </section>

        {/* Cards */}
        <section className='cards-section'>
          <p className='section-label'>About Me</p>
          <div className='cards-grid'>
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
              <div className='card' key={title}>
                <span className='card-icon'>{icon}</span>
                <div className='card-number'>{num}</div>
                <h2 className='card-title'>{title}</h2>
                <p className='card-body'>{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
