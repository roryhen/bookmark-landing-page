const presetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    presetEnv({
      features: {
        "custom-properties": false,
        "nesting-rules": true,
        "media-query-ranges": true,
        "has-pseudo-class": true,
      },
    }),
  ],
};
