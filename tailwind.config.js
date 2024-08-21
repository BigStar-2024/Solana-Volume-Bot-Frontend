/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-header": "#8B7533",
        "bg-button": "#F2EBEB52",
        "bg-active": "#4F4B3F"
      },
      fontFamily: {
        'caveat': ['Caveat Brush', 'cursive'], // Add 'cursive' as a fallback
        'spicy': ["Spicy Rice", 'serif']
      },
    },
  },
  plugins: [],
}

