const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app,forms,reports}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#030303',
        'custom-medium-brown': '#7A746E',
        'custom-light-cream': '#FFF7F0',
        'custom-galactic-blue': '#755CDE',
        'custom-summer-yellow': '#F6A560',
        'custom-pink': '#F39E9E',
        'custom-light-red': '#EB7565',
        'custom-cyan': '#61C4B7',
        'custom-dark-purple': '#552049',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
