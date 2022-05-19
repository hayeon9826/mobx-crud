module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts']
  },
  theme: {
    extend: {}
  },
  plugins: []
};
