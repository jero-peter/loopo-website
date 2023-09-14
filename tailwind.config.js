/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './*.html',
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors :{
        'primary': '#111827',
        'tert' : '#00204c',
      },
      fontFamily :{
        'space': ['Space Grotesk']
      },
      lineHeight: {
        '12': '3rem',
        'zero': '0',
      },
      scale: {
        '175': '1.75',
      },
      spacing: {
        '24': '6rem',
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatx: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 1s ease-in-out forwards',
        floatx: 'floatx 1s ease-in-out forwards',
        fadein: 'fadein 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}