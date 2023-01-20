/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        "display-serif": ["garamond-premier-pro-display", "serif"],
        "display-sans": ["neue-haas-grotesk-display", "sans-serif"],
        heading: ["poppins", "sans-serif"],
        body: ["garamond-premier-pro", "serif"],
      },
      colors: {
        tan: "#F6F1EC",
        "gray-lightest": "#ECECEC",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& *");
    }),
  ],
};
