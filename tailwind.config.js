const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['oswald', 'sans-serif'],
        'odibee': ['"odibee sans"', 'sans-serif'],
        'bebas': ['"bebas neue"', 'sans-serif'],
        'staatliches': ['staatliches', 'sans-serif'],
        'philosopher': ['philosopher', 'sans-serif'],
        'sansita': ['sansita', 'sans-serif']
      },
      colors:{
        'Tgray': colors.trueGray,
  
      }
    },
    
  },
  variants: {
    extend: {
        backdropBlur: ['hover', 'focus'],
        display: ["group-hover"],
        opacity: ["group-hover"],
        translate: ["group-hover"],
        transform: ["group-hover"],
        width: ["group-hover", "hover"],
        height: ["group-hover", "hover"],
        padding: ["group-hover", "hover"],
        animation: ["group-hover", "hover"],
        scale: ["group-hover", "hover"],
    },
  },
  plugins: [],
}
