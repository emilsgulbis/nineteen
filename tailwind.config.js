// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#eceff7',
          300: '#4b4e60',
          500: '#2f3244',
          700: '#252839',
          900: '#141824',
          default: '#1bb3d8'
        },

        green: {
          100: '#82b9aa',
          200: '#70b4a1',
          default: '#00cd2b'
        },

        orange: {
          default: '#ffb444',
          500: '#ffac30'
        },

        salmon: {
          default: '#ff6955',
          500: '#ff5f4a'
        },

        progress: {
          0: '#fb4b4b',
          20: '#ffa879',
          40: '#ffc163',
          60: '#feff5c',
          80: '#c0ff33'
        }
      },

      width: {
        '50px': '50px',
        '450px': '450px',
        '200px': '200px'
      },

      height: {
        '50px': '50px',
      },

      spacing: {
        'sm': '4px'
      },

      fontSize: {
        '2xs': '.5rem'
      }
    }
  },
  variants: {}
}
