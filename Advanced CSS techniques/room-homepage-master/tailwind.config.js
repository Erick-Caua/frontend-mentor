/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        LeagueSpartan:["League Spartan", "sans-serif"],
      }
    },
    
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Isso garante que o reset do Tailwind seja aplicado
  },
}
  
