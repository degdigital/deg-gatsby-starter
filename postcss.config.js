const browserslist = require('browserslist');

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-mixins'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: browserslist(null, {
        env: 'legacy'
      })
    }),
    require('cssnano')
  ]
};
