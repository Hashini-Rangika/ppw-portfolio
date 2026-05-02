import Navbar from "../components/Navbar";

const entries = [
  {
    week: "01",
    title: "Professional Communication",
    date: "Week 1",
    body: "During this week, I learned the importance of effective communication in a professional environment. I improved my ability to express ideas clearly and use appropriate tone in both verbal and written communication.",
    tag: "Communication",
    color: "#7c3aed",
  },
  {
    week: "02",
    title: "Business Writing",
    date: "Week 2",
    body: "I learned how to write professionally in a business context using clear, concise, and formal language. This helped me improve report writing and structured communication.",
    tag: "Writing",
    color: "#2563eb",
  },
  {
    week: "03",
    title: "Email Writing",
    date: "Week 3",
    body: "I developed skills in writing formal emails including proper structure, tone, and clarity. This improved my ability to communicate effectively in professional environments.",
    tag: "Email",
    color: "#be185d",
  },
  {
    week: "04",
    title: "CV Writing",
    date: "Week 4",
    body: "I learned how to create a professional CV by organizing information clearly and highlighting my skills and achievements effectively.",
    tag: "Career",
    color: "#0891b2",
  },
  {
    week: "05",
    title: "Interview Skills",
    date: "Week 5",
    body: "I gained knowledge about interview techniques including confidence, body language, and answering questions effectively, which improved my interview readiness.",
    tag: "Interview",
    color: "#f59e0b",
  },
  {
    week: "06",
    title: "Overall Reflection",
    date: "Final",
    body: "Through the PPW module, I improved my communication, writing, and professional skills. This module helped me prepare for real-world work environments and future career opportunities.",
    tag: "Summary",
    color: "#22c55e",
  },
];

export default function ReflectiveJournal() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

        * { box-sizing: border-box; }

        .journal-root {
          min-height: 100vh;
          background: #060612;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .bg-orbs-j {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .orb-j {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.25;
        }

        .orb-j1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -100px; right: -100px;
        }

        .orb-j2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #be185d, transparent 70%);
          bottom: 0; left: -50px;
        }

        .grid-lines-j {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .journal-container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 140px 24px 80px;
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

        /* Timeline */
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-line {
          position: absolute;
          left: 48px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.1), transparent);
        }

        .timeline-entry {
          display: flex;
          gap: 32px;
          padding: 32px 0;
          animation: fadeUp 0.7s ease both;
          position: relative;
        }

        .timeline-entry:nth-child(1) { animation-delay: 0.1s; }
        .timeline-entry:nth-child(2) { animation-delay: 0.2s; }
        .timeline-entry:nth-child(3) { animation-delay: 0.3s; }
        .timeline-entry:nth-child(4) { animation-delay: 0.4s; }

        .timeline-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 96px;
          flex-shrink: 0;
        }

        .week-node {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
letter-spacing: -0.02em;
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .timeline-entry:hover .week-node {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(139,92,246,0.4);
        }

        .week-label {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-top: 8px;
          font-weight: 500;
        }

        .journal-card {
          flex: 1;
          padding: 28px 32px;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .journal-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .journal-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(139,92,246,0.06), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .journal-card:hover {
          transform: translateX(6px);
          border-color: rgba(139,92,246,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        .journal-card:hover::before,
        .journal-card:hover::after { opacity: 1; }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .card-title-j {
          font-weight: 700;
letter-spacing: -0.02em;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          position: relative;
          z-index: 1;
        }

        .card-tag {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          color: rgba(255,255,255,0.8);
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .card-body-j {
          font-size: 0.88rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          position: relative;
          z-index: 1;
        }

        .card-footer {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.2);
          position: relative;
          z-index: 1;
        }

        .footer-line {
          height: 1px;
          flex: 1;
          background: rgba(255,255,255,0.06);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className='journal-root'>
        <div className='bg-orbs-j'>
          <div className='orb-j orb-j1' />
          <div className='orb-j orb-j2' />
        </div>
        <div className='grid-lines-j' />

        <Navbar />

        <div className='journal-container'>
          <div className='page-header'>
            <div className='page-eyebrow'>✦ Professional Development</div>
            <h1 className='page-title'>Reflective Journal</h1>
            <p className='page-subtitle'>
              Weekly growth, documented with intention
            </p>
          </div>

          <div className='timeline'>
            <div className='timeline-line' />
            {entries.map((entry) => (
              <div className='timeline-entry' key={entry.week}>
                <div className='timeline-left'>
                  <div
                    className='week-node'
                    style={{
                      background: `linear-gradient(135deg, ${entry.color}cc, ${entry.color}66)`,
                    }}
                  >
                    {entry.week}
                  </div>
                  <div className='week-label'>{entry.date}</div>
                </div>

                <div className='journal-card'>
                  <style>{`
                    .journal-card[data-week="${entry.week}"]::before {
                      background: linear-gradient(90deg, transparent, ${entry.color}80, transparent);
                    }
                  `}</style>
                  <div className='card-top'>
                    <h2 className='card-title-j'>{entry.title}</h2>
                    <span
                      className='card-tag'
                      style={{
                        background: `${entry.color}22`,
                        border: `1px solid ${entry.color}44`,
                        color:
                          entry.color === "#7c3aed"
                            ? "#a78bfa"
                            : entry.color === "#2563eb"
                              ? "#60a5fa"
                              : entry.color === "#be185d"
                                ? "#f472b6"
                                : "#22d3ee",
                      }}
                    >
                      {entry.tag}
                    </span>
                  </div>
                  <p className='card-body-j'>{entry.body}</p>
                  <div className='card-footer'>
                    <span>{entry.date}</span>
                    <div className='footer-line' />
                    <span>PPW Module</span>
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
