import React from "react";
import SkillsSection from "../components/skills/SkillsSection";

const Skills = () => {
  return (
    <section className="bg-gray-950" id="skills">
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-100">
          My Skills
        </h2>
        <SkillsSection />
      </div>
    </section>
  );
};

export default Skills;
