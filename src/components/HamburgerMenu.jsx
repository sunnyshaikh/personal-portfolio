import React from "react";
import { RiMenuFill } from "react-icons/ri";

const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 transition-all duration-300 group"
      aria-label="Toggle menu"
    >
      <RiMenuFill
        className={`w-6 h-6 text-gray-300 transition-transform duration-300 group-hover:scale-110 ${
          !isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
