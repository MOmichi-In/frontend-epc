/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Admin
        primary: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A5F',
        },
        accent: '#2E86AB',
        // Landing
        gold:             '#D4AF37',
        'gold-dark':      '#B8860B',
        'bg-light':       '#F9F6F0',
        'bg-dark':        '#1A1A1A',
        charcoal:         '#222222',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}