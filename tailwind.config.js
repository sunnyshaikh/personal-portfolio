/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "80px",
        },
        screens: {
          sm: "375px",
          md: "768px",
          lg: "1200px",
        },
      },
    },
  },
  plugins: [],
};
