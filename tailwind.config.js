/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_bg: "#083344", 
        secondary_bg: "#0E748B", 
        primary: "#FFFFF0", 
        secondary: "#08B9D2",
      },
      backgroundImage: {
        hero: "url('./src/assets/images/bg-light.jpg')", // Ensure correct path
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1), 0 -3px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    // Add any additional plugins here if needed
  ],
});
