/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-nav": "calc(100vh - 3.5rem)",
        "editor": "calc(100vh - 6rem)"
      },
      colors: {
        dark_primary: "#10b981",
        dark_background: "#151515",
        dark_text_secondary: "#a3a3a3",
        p_nav: "#222222",
        p_body: "#222222",
        p_border: "#36393F",
        p_text: "#FFF",
      },
    },
  },
  plugins: [],
}