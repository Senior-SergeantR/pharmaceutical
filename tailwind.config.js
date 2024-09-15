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
  fontSize: {
    sm: '0.8rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },
  fontFamily: {
    pthin: ['Poppins-Thin', 'sans-serif'],
    pextralight: ['Poppins-ExtraLight', 'sans-serif'],
    plight: ['Poppins-Light', 'sans-serif'],
    pregular: ['Poppins-Regular', 'sans-serif'],
    pmedium: ['Poppins-Medium', 'sans-serif'],
    psemibold: ['Poppins-SemiBold', 'sans-serif'],
    pbold: ['Poppins-Bold', 'sans-serif'],
    pblack: ['Poppins-Black', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  plugins: [],
}

