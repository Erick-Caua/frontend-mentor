/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Rubik:["Rubik", "serif"],
      }
    },
    colors: {
      SoftBlue:'hsl(var(--SoftBlue))',
      SoftRed:'hsl(var(--SoftRed))',
      GrayishBlue:'hsl(var(--GrayishBlue))',
      VeryDarkBlue:'hsl(var(--VeryDarkBlue))',
      VeryDarkBlueNav:'hsl(var(--VeryDarkBlueNav))',
      'white': '#ffffff',
      'white-50': '#f8fafc',
      transparent: 'transparent',
    },
  },
  plugins: [],
}

