/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url('./assets/background-stars.svg')",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
      },
    },
  },
  plugins: [],
};
