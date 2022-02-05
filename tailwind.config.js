module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '1440px',
    },
    colors: {
      'gray03': '#FAFAFB',
      'purple01': '#464462',
      'white01': '#FFFFFF',
      'orange01': '#EF7B1B',
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
