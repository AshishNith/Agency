/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c',
        'secondary': '#2d3748',
        'accent': '#4fd1c5',
        'neutral': '#f7fafc',
        'base': '#ffffff',
        'info': '#3182ce',
        'success': '#38a169',
        'warning': '#dd6b20',
        'error': '#e53e3e',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'outline': '0 0 0 3px rgba(66, 153, 225, 0.6)',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      perspective: {
        'default': '1000px',
        '1000': '1000px',
        '2000': '2000px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
      })
    }
  ],
}