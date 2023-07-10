module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('precss'),
    require('postcss-preset-env')({
      stage: 1,
    }),
  ],
};
