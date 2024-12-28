const VerticalMail = () => {
  return (
    <div
      className="cursor-vertical-text text-2xl hover:text-indigo-300 hover:-translate-y-1 transition"
      style={{ writingMode: "vertical-rl" }}
    >
      <a href="mailto:altafalamshaikh55@gmail.com">
        altafalamshaikh55@gmail.com
      </a>
    </div>
  );
};

export default VerticalMail;
