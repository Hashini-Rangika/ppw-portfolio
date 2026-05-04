import Navbar from "../components/Navbar";
import { useState } from "react";

const SOCIALS = [
  {
    icon: "✉",
    label: "Email",
    value: "wr.hashini@gmail.com",
    display: "wr.hashini@gmail.com",
    href: "mailto:wr.hashini@gmail.com",
    accent: "#7c3aed",
    light: "#a78bfa",
    desc: "Best for formal enquiries",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Hashini-Rangika",
    display: "github.com/Hashini-Rangika",
    href: "https://github.com/Hashini-Rangika",
    accent: "#2563eb",
    light: "#60a5fa",
    desc: "Check out my projects",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/hashini01/",
    display: "linkedin.com/in/hashini01/",
    href: "https://www.linkedin.com/in/hashini01/",
    accent: "#0891b2",
    light: "#22d3ee",
    desc: "Let's connect professionally",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fires default mailto — replace with your preferred form handler
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:hashini@email.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        .ct { min-height: 100vh; background: #060612; color: #fff; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

        /* ── Background ── */
        .ct-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .ct-orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: ctOrb 12s ease-in-out infinite; }
        .ct-o1 { width: 650px; height: 650px; background: radial-gradient(circle, rgba(109,40,217,.38), transparent 70%); top: -200px; left: -160px; opacity: .22; }
        .ct-o2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(8,145,178,.35), transparent 70%); bottom: -140px; right: -120px; opacity: .2; animation-delay: -5s; }
        .ct-o3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(190,24,93,.28), transparent 70%); top: 45%; left: 50%; opacity: .12; animation-delay: -8s; }
        @keyframes ctOrb { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-24px) scale(1.04)} }

        .ct-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* ── Layout ── */
        .ct-wrap { position: relative; z-index: 1; max-width: 1060px; margin: 0 auto; padding: 140px 24px 100px; }

        /* ── Header ── */
        .ct-hdr { text-align: center; margin-bottom: 64px; animation: ctUp .8s ease both; }
        .ct-ey {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .67rem; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(167,139,250,.85); border: 1px solid rgba(167,139,250,.22);
          background: rgba(139,92,246,.09); padding: 5px 15px; border-radius: 100px;
          margin-bottom: 18px;
        }
        .ct-edot { width: 5px; height: 5px; border-radius: 50%; background: #a78bfa; animation: ctPulse 2s ease-in-out infinite; }
        @keyframes ctPulse { 0%,100%{opacity:1} 50%{opacity:.18} }

        .ct-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800; line-height: .93; letter-spacing: -.04em;
          margin-bottom: 14px;
        }
        .ct-tw { color: #fff; }
        .ct-tg {
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #f472b6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-sub { font-size: .9rem; color: rgba(255,255,255,.34); font-style: italic; max-width: 400px; margin: 0 auto; line-height: 1.65; }

        /* ── Availability chip ── */
        .ct-avail {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: .68rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          background: rgba(16,185,129,.1); border: 1px solid rgba(16,185,129,.28);
          color: #34d399; padding: 5px 14px; border-radius: 100px;
          margin-top: 18px;
        }
        .ct-adot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: ctPulse 1.5s ease-in-out infinite; }

        /* ── Two-column layout ── */
        .ct-main { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start; }
        @media (max-width: 780px) { .ct-main { grid-template-columns: 1fr; } }

        /* ── LEFT: Social cards ── */
        .ct-left { display: flex; flex-direction: column; gap: 14px; }

        .ct-card {
          position: relative; padding: 24px 26px; border-radius: 18px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          overflow: hidden; transition: all .4s cubic-bezier(.16,1,.3,1);
          animation: ctUp .8s ease both; cursor: default;
          display: flex; align-items: center; gap: 18px;
        }
        .ct-card:nth-child(1) { animation-delay: .1s; }
        .ct-card:nth-child(2) { animation-delay: .18s; }
        .ct-card:nth-child(3) { animation-delay: .26s; }

        .ct-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          border-radius: 18px 18px 0 0; opacity: 0; transition: opacity .4s ease;
        }
        .ct-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(0,0,0,.5); }
        .ct-card:hover::before { opacity: 1; }

        .ct-cicon {
          width: 52px; height: 52px; border-radius: 15px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; border: 1px solid rgba(255,255,255,.08);
          transition: transform .3s ease;
        }
        .ct-card:hover .ct-cicon { transform: scale(1.1) rotate(-4deg); }

        .ct-cinfo { flex: 1; min-width: 0; }
        .ct-clabel { font-size: .65rem; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.3); font-weight: 500; margin-bottom: 4px; }
        .ct-cvalue {
          font-family: 'Syne', sans-serif; font-size: .92rem; font-weight: 700;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 3px;
        }
        .ct-cdesc { font-size: .73rem; color: rgba(255,255,255,.3); }

        .ct-cactions { display: flex; gap: 7px; flex-shrink: 0; }
        .ct-cbtn {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .68rem; font-weight: 600; padding: 5px 12px; border-radius: 8px;
          border: 1px solid; text-decoration: none; transition: all .3s ease;
          white-space: nowrap; cursor: pointer; font-family: 'DM Sans', sans-serif;
          background: transparent;
        }
        .ct-cbtn:hover { transform: translateY(-2px); filter: brightness(1.2); }

        /* ── RIGHT: Message form ── */
        .ct-form-card {
          padding: 32px 34px; border-radius: 20px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          position: relative; overflow: hidden;
          animation: ctUp .8s ease both; animation-delay: .14s;
          transition: all .4s cubic-bezier(.16,1,.3,1);
        }
        .ct-form-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #2563eb, #0891b2);
          border-radius: 20px 20px 0 0;
        }
        .ct-form-card:hover { border-color: rgba(139,92,246,.2); box-shadow: 0 24px 60px rgba(0,0,0,.4); }

        .ct-flabel {
          font-size: .67rem; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(167,139,250,.65); font-weight: 500; margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-flabel::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,.06); }

        .ct-fgroup { margin-bottom: 16px; }
        .ct-finput-label { font-size: .72rem; color: rgba(255,255,255,.38); margin-bottom: 7px; display: block; letter-spacing: .04em; }

        .ct-finput, .ct-ftextarea {
          width: 100%; padding: 12px 16px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09);
          border-radius: 12px; color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: .86rem; outline: none; transition: all .3s ease;
          resize: none;
        }
        .ct-finput::placeholder, .ct-ftextarea::placeholder { color: rgba(255,255,255,.22); }
        .ct-finput:focus, .ct-ftextarea:focus {
          border-color: rgba(139,92,246,.45);
          background: rgba(139,92,246,.07);
          box-shadow: 0 0 0 3px rgba(139,92,246,.12);
        }
        .ct-ftextarea { min-height: 120px; }

        .ct-fsubmit {
          width: 100%; padding: 13px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: .86rem; font-weight: 600; border: none; border-radius: 12px;
          cursor: pointer; transition: all .3s ease; position: relative; overflow: hidden;
          letter-spacing: .02em;
        }
        .ct-fsubmit::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          opacity: 0; transition: opacity .3s ease;
        }
        .ct-fsubmit:hover::before { opacity: 1; }
        .ct-fsubmit:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(124,58,237,.4); }
        .ct-fsubmit span { position: relative; z-index: 1; }
        .ct-fsubmit.sent { background: linear-gradient(135deg, #059669, #0891b2); }

        /* ── Bottom note ── */
        .ct-note {
          margin-top: 36px; padding: 20px 24px; border-radius: 14px;
          background: rgba(139,92,246,.06); border: 1px solid rgba(139,92,246,.15);
          font-size: .83rem; line-height: 1.7; color: rgba(255,255,255,.42);
          text-align: center;
          animation: ctUp .8s ease both; animation-delay: .35s;
        }
        .ct-note strong { color: rgba(167,139,250,.9); font-weight: 500; }

        @keyframes ctUp { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className='ct'>
        <div className='ct-bg'>
          <div className='ct-orb ct-o1' />
          <div className='ct-orb ct-o2' />
          <div className='ct-orb ct-o3' />
        </div>
        <div className='ct-grid' />
        <Navbar />

        <div className='ct-wrap'>
          {/* ── Header ── */}
          <div className='ct-hdr'>
            <div className='ct-ey'>
              <div className='ct-edot' />
              Get In Touch
            </div>
            <h1 className='ct-title'>
              <span className='ct-tw'>Contact </span>
              <span className='ct-tg'>Me</span>
            </h1>
            <p className='ct-sub'>
              I'm open to internship opportunities, collaborations, and any
              exciting projects. Feel free to reach out!
            </p>
            <div className='ct-avail'>
              <div className='ct-adot' />
              Available for Opportunities
            </div>
          </div>

          {/* ── Main grid ── */}
          <div className='ct-main'>
            {/* LEFT – Social links */}
            <div className='ct-left'>
              {SOCIALS.map((s) => (
                <div
                  className='ct-card'
                  key={s.label}
                  style={{ borderColor: `${s.accent}24` }}
                >
                  {/* top accent bar via inline style trick */}
                  <style>{`.ct-left .ct-card:nth-child(${SOCIALS.indexOf(s) + 1})::before{background:linear-gradient(90deg,${s.accent},transparent)}`}</style>

                  <div
                    className='ct-cicon'
                    style={{
                      background: `${s.accent}18`,
                      borderColor: `${s.accent}30`,
                    }}
                  >
                    {s.icon}
                  </div>

                  <div className='ct-cinfo'>
                    <div className='ct-clabel'>{s.label}</div>
                    <div className='ct-cvalue' style={{ color: s.light }}>
                      {s.display}
                    </div>
                    <div className='ct-cdesc'>{s.desc}</div>
                  </div>

                  <div className='ct-cactions'>
                    <button
                      className='ct-cbtn'
                      style={{
                        borderColor: `${s.accent}35`,
                        color: s.light,
                        background: `${s.accent}12`,
                      }}
                      onClick={() => copy(s.value, s.label)}
                      title='Copy'
                    >
                      {copied === s.label ? "✓ Copied" : "⧉ Copy"}
                    </button>
                    <a
                      className='ct-cbtn'
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        borderColor: `${s.accent}35`,
                        color: s.light,
                        background: `${s.accent}12`,
                      }}
                    >
                      ↗ Open
                    </a>
                  </div>
                </div>
              ))}

              {/* Extra info card */}
              <div
                className='ct-card'
                style={{
                  borderColor: "rgba(5,150,105,.22)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <style>{`.ct-left .ct-card:nth-child(4)::before{background:linear-gradient(90deg,#059669,transparent)}`}</style>
                <div
                  style={{
                    fontSize: ".68rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(52,211,153,.7)",
                    fontWeight: 600,
                  }}
                >
                  ⚡ Response Time
                </div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  Usually within 24 hours
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "rgba(255,255,255,.38)",
                    lineHeight: 1.6,
                  }}
                >
                  I check my messages regularly and will get back to you as soon
                  as possible. Looking forward to connecting!
                </div>
              </div>
            </div>

            {/* RIGHT – Message form */}
            <div className='ct-form-card'>
              <div className='ct-flabel'>Send a Message</div>

              <form onSubmit={handleSubmit}>
                <div className='ct-fgroup'>
                  <label className='ct-finput-label'>Your Name</label>
                  <input
                    className='ct-finput'
                    name='name'
                    placeholder='e.g. Kavindu Perera'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='ct-fgroup'>
                  <label className='ct-finput-label'>Your Email</label>
                  <input
                    className='ct-finput'
                    name='email'
                    type='email'
                    placeholder='e.g. kavindu@email.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='ct-fgroup'>
                  <label className='ct-finput-label'>Message</label>
                  <textarea
                    className='ct-ftextarea'
                    name='message'
                    placeholder="Hi Hashini, I'd love to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type='submit'
                  className={`ct-fsubmit ${sent ? "sent" : ""}`}
                >
                  <span>{sent ? "✓ Message Sent!" : "Send Message →"}</span>
                </button>
              </form>
            </div>
          </div>

          {/* ── Bottom note ── */}
          <div className='ct-note'>
            <strong>Open to opportunities</strong> — Internships, freelance
            projects, and collaborations. Currently based in Sri Lanka 🇱🇰 and
            available for remote work worldwide.
          </div>
        </div>
      </div>
    </>
  );
}
