/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pDark: '#0a1620',
        primary: '#d96340',
        pBackg: '#333a43',
        sBackg: '#59686e',
        primary: '#dfdede',
        secondary: '#e55c31',
        lGreen: '#4a9285 ',
        green: '#115a4c',
        brown: '#63382e',
      },
      backgroundColor: {
        // 'light-bg': '#59686e',
        'light-bg': '#111D2B',
        'dark-bg': '#0a1620',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
