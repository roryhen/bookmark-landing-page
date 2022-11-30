const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      stage: false,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
        'media-query-ranges': true,
        'has-pseudo-class': true,
        'custom-media-queries': true,
      },
    }),
  ],
}
