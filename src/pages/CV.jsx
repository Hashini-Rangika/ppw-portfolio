import Navbar from "../components/Navbar";

export default function CV() {
  return (
    <div className="min-h-screen bg-[#060612] text-white p-6">
      <Navbar />

      <div className="max-w-4xl mx-auto mt-24 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">My CV</h1>

        {/* Description */}
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          My CV highlights my academic background, technical skills, and project experience. 
          It demonstrates my ability to work with modern technologies and my readiness 
          for internship and professional opportunities in the IT industry.
        </p>

        {/* Download Button */}
        <a
          href="/cv.pdf"
          download
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition"
        >
          Download CV
        </a>

        {/* CV Preview Section */}
        <div className="mt-12 bg-white/5 p-6 rounded-xl border border-white/10 text-left">

          <h2 className="text-xl font-semibold mb-4">CV Overview</h2>

          <ul className="text-gray-300 space-y-2">
            <li>• Education: BSc in Information Technology – SLIIT</li>
            <li>• Skills: MERN Stack, JavaScript, React, Node.js</li>
            <li>• Projects: Full-stack web applications and systems</li>
            <li>• Certifications: Python, PHP, JavaScript</li>
            <li>• Soft Skills: Communication, teamwork, problem-solving</li>
          </ul>

        </div>

      </div>
    </div>
  );
}