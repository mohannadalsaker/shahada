/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#1B1C1E",
        "primary-dark": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
