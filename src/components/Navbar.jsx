import React from "react";

const menu = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Education" },
  { id: 4, title: "Projects" },
  { id: 5, title: "Contact" },
];

const Navbar = () => {
  return (
    <header className="container fixed top-0 left-[50%] translate-x-[-50%] z-10 pt-5">
      <ul className="flex items-center justify-center gap-4 border border-gray-700 py-2 px-4 w-max m-auto rounded-xl bg-gradient-to-tr from-black/10 to-black/50 backdrop-blur-md">
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className="inline-block py-2 px-3 text-gray-300 hover:text-indigo-300 transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
