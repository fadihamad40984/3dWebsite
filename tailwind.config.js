/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for Nebula Automata
        nebula: {
          bg: '#030014', // Deep space blue/black
          primary: '#9d4edd', // Electric purple
          secondary: '#00f3ff', // Cyan neon
          accent: '#ff0055', // Magenta
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'], // For headers
      }
    },
  },
  plugins: [],
}
