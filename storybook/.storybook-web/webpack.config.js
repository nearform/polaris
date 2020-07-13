const alias = require('../../aliases.config.js');
const path = require('path');

module.exports = ({ config }) => {
  config.resolve.extensions = ['.js', '.json', '.web.js', '.web.jsx', '.jsx'];

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

  config.resolve.alias = {
    '@storybook/react-native': '@storybook/react',
    'react-native': 'react-native-web'
  };

  return config;
};
