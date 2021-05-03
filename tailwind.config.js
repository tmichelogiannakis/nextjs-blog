module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'post-grid': 'repeat(auto-fill, minmax(20rem, 1fr))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
