const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      stage: false,
      autoprefixer: false,
      importFrom: require.resolve('open-props/media'),
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    }),
  ],
}
