const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'custom-neutral-900': '#062630',
        'custom-neutral-700': '#385159',
        'custom-neutral-200': '#E6E1DF',
        'custom-neutral-100': '#FAF5F3',
        'custom-neutral-0': '#FFFFFF',
        'custom-light-salmon-500': '#FEA36F',
        'custom-light-salmon-100': '#FFE2D1',
        'custom-light-salmon-50': '#FFF5EF',
      },
      backgroundImage: {
        'text-gradient':
          'linear-gradient(107deg, #FFA960 -11.37%, #062630 61.84%)',
        gradient: 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
      },
      fontFamily: {
        'martian-mono': 'var(--font-martian-mono)',
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
