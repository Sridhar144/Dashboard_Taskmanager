/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode using class
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c", // Custom dark background color
        darkText: "#e2e8f0", // Custom dark text color
      },
    },
  },
  plugins: [],
};
