module.exports = {
  purge: {
    enabled: true,
    content: ['./default/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'peseta-green': '#2AB34B',
        'peseta-green-dark': '#209046',
        'gray-darker': '#333333',
        'gray-darkest': '#222222',
        'gray-lighter': '#F5F5F5',
        'gray-light': '#CACACA',
        'teal-gray-dark': '#6C7B7A',
        'teal-gray-darker': '#566868'
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      fontWeight: {
        light: 300,
        medium: 500,
        bold: 700
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}