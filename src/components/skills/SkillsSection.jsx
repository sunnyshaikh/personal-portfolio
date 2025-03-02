import React from "react";
import SkillCard from "./SkillCard";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaNpm,
  FaGlobe,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMui,
  SiSocketdotio,
  SiReactrouter,
  SiReactquery,
  SiReacttable,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#888" },
        { name: "Mongoose", icon: <SiMongodb />, color: "#00ED64" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Material UI", icon: <SiMui />, color: "#0073E6" },
      ],
    },
  ];

  const otherSkills = [
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
        { name: "NPM", icon: <FaNpm />, color: "#C53635" },
        { name: "React Router", icon: <SiReactrouter />, color: "#F44250" },
        { name: "React Query", icon: <SiReactquery />, color: "#FF4154" },
        { name: "React Table", icon: <SiReacttable />, color: "#226CE9" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
        { name: "Firebase", icon: <FaDatabase />, color: "#FFCA28" },
        { name: "REST API", icon: <FaGlobe />, color: "#61DAFB" },
        { name: "Web Socket", icon: <SiSocketdotio />, color: "#61DAFB" },
        { name: "Testing", icon: <FaTerminal />, color: "#FF6C37" },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
          {/* other skills */}
          {otherSkills.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    isOther
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
