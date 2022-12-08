const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      stage: false,
      autoprefixer: false,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
  ],
}
