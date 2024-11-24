/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C6D7',
        secondary: '#1A76CF',
        accent: '#88D700',
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};