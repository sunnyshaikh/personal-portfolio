import { FaLinkedin, FaInstagram, FaGithub, FaCodepen } from "react-icons/fa";
const social = [
  {
    id: 1,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/altaf-alam-shaikh/",
    icon: <FaLinkedin />,
  },
  { id: 2, title: "Instagram", href: "#", icon: <FaInstagram /> },
  {
    id: 3,
    title: "Github",
    href: "https://github.com/sunnyshaikh",
    icon: <FaGithub />,
  },
  {
    id: 4,
    title: "Codepen",
    href: "https://codepen.io/sunnyshaikh99",
    icon: <FaCodepen />,
  },
];

const SocialIcons = () => {
  return (
    <ul className="flex flex-col gap-7">
      {social.map((item) => (
        <li key={item.id} className="hover:-translate-y-1 transition">
          <a
            href={item.href}
            className="text-2xl hover:text-indigo-300 transition"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
