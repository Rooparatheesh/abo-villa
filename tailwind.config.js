/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#f2f8f5',
          100: '#e1f0e9',
          200: '#c3e1d3',
          300: '#97cbb4',
          400: '#64af8f',
          500: '#419372',
          600: '#31765c',
          700: '#285e4a',
          800: '#234b3c',
          900: '#1b3a2f',
          950: '#0e201a',
        },
        earth: {
          50: '#fdfaf6',
          100: '#f9f3eb',
          200: '#f2e5d5',
          300: '#e7d1b8',
          400: '#d7b494',
          500: '#ca9b75',
          600: '#be8662',
          700: '#9e6c4e',
          800: '#805742',
          900: '#684838',
          950: '#38241c',
        },
        terracotta: {
          DEFAULT: '#c25e3f',
          hover: '#a84e32',
          light: '#fdf4f0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(14, 32, 26, 0.45), rgba(14, 32, 26, 0.75)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
