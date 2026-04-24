/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'system-ui', 'sans-serif'],
      },
      colors: {
        'pastel-pink': '#FFDEE9',
        'pastel-mint': '#B5FFFC',
        'pastel-lavender': '#E0C3FC',
        'pastel-peach': '#FFECD2',
        'cute-pink': '#FF6B9D',
        'cute-purple': '#9B59B6',
        'cute-blue': '#74B9FF',
      },
      animation: {
        'bounce-custom': 'bounce 0.6s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'pulse-heart': 'pulse-heart 0.8s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'wave': 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'pulse-heart': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(30deg)' },
          '75%': { transform: 'rotate(-30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}