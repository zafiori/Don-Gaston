/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A0522D', // Sienna
        secondary: '#8B4513', // SaddleBrown
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem', 
        }
      }
    },
  },
  plugins: [],
}

