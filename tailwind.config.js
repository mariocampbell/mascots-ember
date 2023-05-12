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
        'ember-burnt': '#9B2918',
        'ember-blue': '#1E719B',
        'ember-light-blue': '#74B0CE',
        'ember-yellow': '#FBC840',
        'ember-black': '#212121',
        'ember-gray': '#817F7F',
        'ember-faint-gray': '#EFEBEA',
        'ember-linen': '#FDF7F6',
        'ember-white': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
