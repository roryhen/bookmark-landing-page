const presetEnv = require('postcss-preset-env')
const globalData = require('@csstools/postcss-global-data')
const jitProps = require('postcss-jit-props')

module.exports = {
  plugins: [
    globalData({
      files: [require.resolve('open-props/media')],
    }),
    jitProps({
      files: [require.resolve('open-props/style')],
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
