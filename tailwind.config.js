/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(44, 57, 232, 1)',
        secondary: 'rgba(0, 65, 82, 1) ',
        footer: 'rgba(31, 43, 48, 1)',
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1rem"
        }
      },
      fontFamily: {
        'libre400': ['LibreFranklin-Regular', 'sans-serif'],
        'libre700': ['LibreFranklin-Bold', 'sans-serif'],
        'libre800': ['LibreFranklin-ExtraBold', 'sans-serif'],
        'heebo400': ['Heebo-Regular', 'sans-serif'],
        'heebo700': ['Heebo-Bold', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('../src/assets/hero_bg.png')",
        'partner': "url('../src/assets/partner_bg.png')",
        'servise': "url('../src/assets/servise_bg.png')",
        'map': "url('../src/assets/map.png')",
      }
    },
  },
  plugins: [],
}

