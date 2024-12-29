import React from "react";
import TimelineItem from "./EducationTimelineItem";

const educationData = [
  {
    year: "2020 - 2023",
    title: "Master of Computer Science",
    institution: "Pune University",
    description:
      "Specialized in Web Development technologies focusing on React, Node, Express, MongoDB and SQL.",
  },
  {
    year: "2017 - 2020",
    title: "Bachelor of Science in Computer Science",
    institution: "Pune University",
    description:
      "Core computer science curriculum with emphasis on software engineering and data structures. Graduated with honors.",
  },
  {
    year: "2015 - 2017",
    title: "Higher Secondary School",
    institution: "AKI's Poona College",
    description:
      "Foundation courses in programming fundamentals, web development, and database management.",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fadeIn">
        Educational Journey
      </h2>
      <div className="relative">
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            institution={item.institution}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
