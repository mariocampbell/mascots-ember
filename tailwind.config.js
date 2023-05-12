/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        ember: '#BD3122',
        'burnt-ember': '#9B2918',
        blue: '#1E719B',
        'light-blue': '#74B0CE',
        yellow: '#FBC840',
        'ember-black': '#212121',
        'ember-gray': '#817F7F',
        'faint-gray': '#EFEBEA',
        linen: '#FDF7F6',
        'ember-white': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
