module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#213871',
          50: '#97ACE1',
          100: '#839CDB',
          200: '#5C7DCF',
          300: '#385FC0',
          400: '#2D4C98',
          500: '#213871',
          600: '#1B2E5D',
          700: '#15244A',
          800: '#101B36',
          900: '#0A1122',
        },
        red: {
          DEFAULT: '#EB0028',
          50: '#FFA4B3',
          100: '#FF8FA2',
          200: '#FF6680',
          300: '#FF3E5F',
          400: '#FF153D',
          500: '#EB0028',
          600: '#B8001F',
          700: '#850017',
          800: '#52000E',
          900: '#1F0005',
        },
      },
      borderWidth: {
        20: '20px',
        50: '50px',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
    fontFamily: {
      sans: ['Hurme', 'times'],
    },
  },
  plugins: [],
};
