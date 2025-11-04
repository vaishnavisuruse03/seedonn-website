/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006b44",
        secondary: "#108474",
        accent: "#109533"
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
}
