/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#CDA274',
    },
    fontFamily: {
      'DM': ['DM Serif Display' ,'serif'],
      'jost': ['Jost', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
