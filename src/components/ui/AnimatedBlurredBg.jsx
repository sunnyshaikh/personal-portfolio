import React from "react";

const AnimatedBlurredBg = () => {
  return (
    <div
      className="
        absolute w-[360px] h-[240px]
        rounded-full filter blur-[120px]
        top-[50%] left-[50%]
        transition-all duration-1000
      "
      style={{
        animation: "float 20s ease-in-out infinite",
        willChange: "transform, background-color",
      }}
    />
  );
};

export default AnimatedBlurredBg;
