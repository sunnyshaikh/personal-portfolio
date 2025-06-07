import { CiStar } from "react-icons/ci";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Blogify from "../assets/projects-ss/blogify.png";
import SortingVisual from "../assets/projects-ss/sorting-visual.png";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack blog application with secured authentication and authorization system with JWT and Bcrypt js.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: Blogify,
    github: "https://github.com/sunnyshaikh/blogify",
    live: "https://blogifymern.netlify.app/",
    featured: true,
  },
  {
    title: "Sorting Visualizer",
    description:
      "A web app built with JavaScript which shows various sorting algorithms in animation.",
    tech: ["Javascript", "Promises"],
    image: SortingVisual,
    github: "https://github.com/sunnyshaikh/sorting-visualizer",
    live: "https://sunnyshaikh.github.io/sorting-visualizer/",
    featured: true,
  },
  {
    title: "Task Management",
    description:
      "Collaborative task management tool with real-time updates and team analytics.",
    tech: ["React", "Firebase", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts.",
    tech: ["React", "Weather API", "Charts.js"],
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com",
  },
];

const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      className="container min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <CiStar className="text-blue-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
        </div>
        <p className="text-gray-400 mb-8">Some of my notable works</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Other Projects</h2>
        <p className="text-gray-400 mb-8">More of my work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
