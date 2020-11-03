module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.jsx', './src/pages/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: '#fec7d7',
      secondary: '#d9d4e7',
      tertiary: '#a786df',
      black: '#0e172c',
      white: '#fffffe',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
