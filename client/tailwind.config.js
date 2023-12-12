/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      '2xl': ['1.5rem', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }]
    }, 
    extend: {
      colors: {
        indigo: '#f5f8fe', 
        blue: '#434ce8'
      }
    },
  },
  plugins: [],
}

