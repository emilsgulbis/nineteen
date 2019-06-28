// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      colors: {
        lighter: '#eceff7',
        light: '#4b4e60',
        dark: '#35384c',
        darker: '#252839',
        darkest: '#141824',

        lime: '#27e8a7',
        blue: '#17BEBB',
        salmon: '#FB5012',
        orange: '#ffb444',
      },

      width: {
        '50px': '50px',
        '450px': '450px',
        '320px': '320px',
        '280px': '280px',
        '200px': '200px'
      },

      height: {
        '50px': '50px',
      },

      spacing: {
        'sm': '4px'
      },

      fontSize: {
        '2xs': '.5rem',
        'huge': '8rem'
      },

      screens: {
        'sm-min': {'min': '640px'},
        'sm': {'max': '639px'},
      }
    }
  },
  variants: {}
}
