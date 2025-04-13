import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const menu = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "Education", href: "#education" },
  { id: 3, title: "Skills", href: "#skills" },
  { id: 4, title: "Projects", href: "#projects" },
  { id: 5, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container fixed top-0 left-[50%] translate-x-[-50%] z-10 pt-5">
      <ul className="hidden sm:flex items-center justify-center gap-4 border border-gray-700 py-2 px-4 w-max m-auto rounded-xl bg-gradient-to-tr from-black/10 to-black/50 backdrop-blur-md">
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="inline-block py-2 px-3 text-gray-300 hover:text-indigo-300 transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
      <div
        className={`menu py-5 px-4 lg:hidden bg-[#09090b70] h-screen backdrop-blur-lg w-screen absolute top-0 left-0 transition-all ${
          !isOpen ? "-translate-x-[100%]" : "translate-x-0"
        }`}
      >
        <HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="block py-2 px-3 text-gray-300 hover:text-indigo-300 transition rounded"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
