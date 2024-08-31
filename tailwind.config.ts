import type { Config } from 'tailwindcss';
import getPalette from 'tailwindcss-palette-generator';

const palette = getPalette([
  {
    name: 'primary',
    color: '#00ADB5'
  },
  {
    name: 'secondary',
    color: '#393E46'
  },
  {
    name: 'dark',
    color: '#222831'
  },
  {
    name: 'light',
    color: '#EEEEEE'
  }
]);

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
