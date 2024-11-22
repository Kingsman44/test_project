/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        fadeInUp: 'fadeInUp 1s ease-out',
        countUp: 'countUp 2s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': {
            textShadow: '0 0 20px #a855f7, 0 0 30px #a855f7, 0 0 40px #a855f7',
          },
          '100%': {
            textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
          },
        },
      },
    },
  },
  plugins: [],
}