const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{pages,components,app,reports,forms}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#F64A4A',
        'custom-orange': '#FB7C58',
        'custom-yellow': '#F8CD65',
        'custom-neon-green': '#A4FFAF',
        'custom-almost-white': '#E6E5EA',
        'custom-grey': '#817D92',
        'custom-dark-grey': '#24232C',
        'custom-very-dark-grey': '#18171F',
      },
      fontFamily: {
        'jet-brains-mono': 'var(--font-jet-brains-mono)',
      },
    },
  },
  plugins: [],
};
