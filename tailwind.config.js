/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backdropBlur: {
        xs: "1px",
      },
      backgroundImage: {
        "nav-overlay": "url('/src/assets/rectangle-top.png')",
      },
    },
  },
  plugins: [],
};
