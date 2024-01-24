/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors: {
        green: '#c6e78e',
        'color-green': "#588600",
        'border-green': "#96d600",
        red: "#fd3824",
        grey: "#cccccc",
        'grey-text': "#bbbbbb"
      },
    },
  },
  plugins: [],
}


