const presetEnv = require('postcss-preset-env')
const postcssGlobalData = require('@csstools/postcss-global-data')

module.exports = {
  plugins: [
    postcssGlobalData({
      files: [require.resolve('open-props/media')],
    }),
    presetEnv({
      stage: false,
      autoprefixer: false,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    }),
  ],
}
