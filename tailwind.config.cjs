/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display-serif': ['garamond-premier-pro-display', 'serif'],
        'display-sans': ['neue-haas-grotesk-display', 'sans-serif'],
        'heading': ['poppins', 'sans-serif'],
        'body': ['garamond-premier-pro', 'serif'],
      },
      colors: {
        tan: '#F6F1EC',
        'gray-lightest': '#ECECEC',
      }
    },
  },
  plugins: [],
}
