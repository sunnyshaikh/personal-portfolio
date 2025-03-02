import React, { useState } from "react";

const SkillCard = ({ name, icon, color, isOther = false }) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform:
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "all 0.1s ease",
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 6;
    const rotateY = (centerX - x) / 6;

    setTiltStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-800/10 to-gray-800/50 rounded-xl p-1 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
      style={{
        ...tiltStyle,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${isOther ? "text-xl" : "text-4xl"} mb-4`}
        style={{
          transform: "translateZ(50px)",
          color: color,
        }}
      >
        {icon}
      </div>
      <p
        style={{ transform: "translateZ(20px)" }}
        className={`text-white font-medium text-center ${isOther && "text-sm"}`}
      >
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
