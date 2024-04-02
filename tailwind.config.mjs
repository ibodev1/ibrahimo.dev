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

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: palette
    }
  },
  plugins: []
};
