import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const TimelineItem = ({ year, title, institution, description }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <div className="mb-8 flex w-full">
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full bg-gradient-to-b from-indigo-500 to-indigo-800" />
        <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full">
          <FaGraduationCap className="w-4 h-4 text-white" />
        </div>
      </div>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: "transform 0.1s ease-out",
        }}
        className="bg-gradient-to-br from-gray-800/10 to-gray-800/50 p-6 rounded-lg shadow-xl w-full transform hover:scale-[1.02] transition-transform"
      >
        <span className="text-indigo-400 text-sm font-semibold">{year}</span>
        <h3 className="text-white text-xl font-bold mt-2">{title}</h3>
        <h4 className="text-indigo-300 font-medium mt-1">{institution}</h4>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
