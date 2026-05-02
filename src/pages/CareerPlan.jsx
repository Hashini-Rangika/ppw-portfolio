import Navbar from "../components/Navbar";

const milestones = [
  {
    phase: "Short Term",
    period: "2024 – 2025",
    icon: "◎",
    accent: "#7c3aed",
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
    period: "2025 – 2027",
    icon: "◈",
    accent: "#2563eb",
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
    period: "2027 – 2030",
    icon: "✦",
    accent: "#be185d",
    goals: [
      "Become a senior software engineer",
      "Lead development teams and projects",
      "Design scalable enterprise applications",
      "Contribute to innovative technology solutions",
    ],
    status: "Vision",
  },
];

export default function CareerPlan() {
  return (
    <div className='min-h-screen bg-[#060612] text-white p-6'>
      <Navbar />

      <div className='max-w-5xl mx-auto mt-24'>
        {/* Title */}
        <h1 className='text-4xl font-bold text-center mb-6'>
          Career Development Plan
        </h1>

        {/* Career Objective */}
        <div className='bg-white/5 p-6 rounded-xl border border-white/10 mb-10'>
          <h2 className='text-xl font-semibold mb-2'>Career Objective</h2>
          <p className='text-gray-400'>
            My goal is to become a skilled full-stack software engineer
            specializing in modern web technologies. I aim to develop innovative
            and user-friendly applications that solve real-world problems.
            Through my academic journey and the PPW module, I have developed
            both technical and professional skills such as communication,
            business writing, and interview preparation, which support my future
            career growth.
          </p>
        </div>

        {/* Roadmap */}
        <div className='grid md:grid-cols-3 gap-6'>
          {milestones.map((m, i) => (
            <div
              key={i}
              className='bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition'
            >
              <h2 className='text-lg font-semibold mb-2'>{m.phase}</h2>
              <p className='text-sm text-gray-400 mb-4'>{m.period}</p>

              <ul className='space-y-2 text-sm text-gray-300'>
                {m.goals.map((g, index) => (
                  <li key={index}>• {g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className='mt-12'>
          <h2 className='text-xl font-semibold mb-4'>
            Skills Development Plan
          </h2>

          <ul className='text-gray-400 space-y-2'>
            <li>
              • Technical Skills: React, Node.js, MongoDB, Cloud Computing
            </li>
            <li>• Soft Skills: Communication, teamwork, leadership</li>
            <li>• Continuous learning through online courses and projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
