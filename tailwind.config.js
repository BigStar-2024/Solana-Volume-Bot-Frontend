/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}"
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
      backgroundImage: {
        'bot-pattern': "url('\img/bot-bg.png')",
        'button-gradient': 'linear-gradient(170.24deg, #F5B30D 18.16%, #8F6808 110.68%)',
      }
    },
  },
  plugins: [],
}

