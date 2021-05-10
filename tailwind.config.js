const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    colors: {
      ...colors,
      primary: {
        50: '#c8b3ce',
        100: '#a07aaa',
        200: '#884c97',
        300: '#843897',
        400: '#732392',
        500: '#5a097a',
        600: '#480264',
        700: '#3d0264'
      }
    },
    minWidth: {
      0: 0,
      40: '10mre',
      full: '100%',
      min: 'min-content',
      max: 'max-content'
    },
    extend: {
      gridTemplateColumns: {
        'post-grid': 'repeat(auto-fill, minmax(20rem, 1fr))'
      },
      lineHeight: {
        initial: 'initial'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
