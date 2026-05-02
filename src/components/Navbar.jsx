import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/journal", label: "Journal" },
    { to: "/career", label: "Career" },
    { to: "/cv", label: "CV" },
    { to: "/certificates", label: "Certificates" },
  ];

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          font-family: 'Inter', sans-serif;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-inner {
          margin: 12px 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(10, 10, 20, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .nav-inner.scrolled {
          background: rgba(8, 8, 20, 0.85);
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.1);
        }

        .nav-brand {
          font-weight: 700;
letter-spacing: -0.02em;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          padding: 7px 14px;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s ease;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.12);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .nav-link:hover {
          color: rgba(255,255,255,0.9);
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link.active {
          color: #fff;
          background: linear-gradient(135deg, rgba(139,92,246,0.25), rgba(96,165,250,0.15));
          border: 1px solid rgba(139,92,246,0.3);
        }

        .nav-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          margin: 0 auto;
          margin-top: 3px;
          opacity: 0;
          transform: scale(0);
          transition: all 0.25s ease;
        }

        .nav-link.active .nav-dot,
        .nav-link:hover .nav-dot {
          opacity: 1;
          transform: scale(1);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }

        .ham-line {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: calc(100% + 8px);
          left: 24px;
          right: 24px;
          background: rgba(10,10,20,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 16px;
          padding: 12px;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-menu.open {
          display: flex;
          animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className='nav-root'>
        <div className={`nav-inner ${scrolled ? "scrolled" : ""}`}>
          <Link to='/' className='nav-brand'>
            ✦ Hashini
          </Link>

          <div className='nav-links'>
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? "active" : ""}`}
              >
                {label}
                <div className='nav-dot' />
              </Link>
            ))}
          </div>

          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <div
              className='ham-line'
              style={
                menuOpen
                  ? { transform: "rotate(45deg) translate(5px,5px)" }
                  : {}
              }
            />
            <div className='ham-line' style={menuOpen ? { opacity: 0 } : {}} />
            <div
              className='ham-line'
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translate(5px,-5px)" }
                  : {}
              }
            />
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
