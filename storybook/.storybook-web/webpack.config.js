const { resolve } = require("path");
const { withUnimodules } = require("@expo/webpack-config/addons");
const alias = require('../../aliases.config.js');

module.exports = ({ config }) => {
  config.resolve.alias['@storybook/react-native'] = '@storybook/react';
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            [
              'babel-plugin-module-resolver',
              {
                alias
              }
            ]
          ]
        }
      }
    ]
  });

  return withUnimodules(config, { projectRoot: resolve(__dirname, "../../") });
};
