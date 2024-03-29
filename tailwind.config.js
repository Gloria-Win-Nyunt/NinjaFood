/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
   
    fontFamily:{
      sans: ['Graphik','sans-serif'],
      honk:['Honk', 'system-ui']
    },
    extend: {},
  },
  plugins: [],
}

