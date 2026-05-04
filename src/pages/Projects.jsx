import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Task Management System",
    desc: "Full MERN stack app with authentication, CRUD, and reports",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your-link"
  },
  {
    title: "Medisync",
    desc: "Healthcare appointment and reminder system",
    tech: ["React", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Foodie App",
    desc: "Cooking learning platform with course management",
    tech: ["Spring Boot", "React"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-white">
        <h1 className="text-4xl mb-6">Projects</h1>

        {projects.map((p, i) => (
          <div key={i} className="mb-6 p-4 border rounded">
            <h2 className="text-xl">{p.title}</h2>
            <p>{p.desc}</p>
            <p>{p.tech.join(", ")}</p>
            <a href={p.link}>View Code</a>
          </div>
        ))}
      </div>
    </>
  );
}