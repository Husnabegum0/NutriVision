/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope','sans-serif'],
        poppins: ['Poppins','sans-serif'],
      },
      backdropBlur: { xl: '24px' },
    }
  },
  plugins: [],
}
