/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
