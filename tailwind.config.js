/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navbar': ['Raleway', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slowslideIn: {
          '0%': {
            backgroundPosition: '100% 0',
          },
          '100%': {
            backgroundPosition: '0 0',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        slowslideIn: 'bgslideIn 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
