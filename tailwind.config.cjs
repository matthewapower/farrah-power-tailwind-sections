/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [{ pattern: /tw-text-(left|center|right|white|black|current)/, variants:['lg'] }],
  prefix: "tw-",
  important: true,
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
        "current": "currentColor"
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& *");
      addVariant("admin", "[data-adminview] &")
    }),
  ],
};
