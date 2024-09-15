/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#034B02',

        'secondary': {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
        },
        black: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
        },
        gray: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
        }
        },
        
    },
  },
  fontFamily: {
    pthin: ['Poppins-Thin', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  plugins: [],
}

