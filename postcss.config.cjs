const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      stage: false,
      autoprefixer: false,
      features: {
        'nesting-rules': true,
        'media-query-ranges': true,
        'has-pseudo-class': true,
        'custom-media-queries': true,
      },
    }),
  ],
}
