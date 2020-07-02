const alias = require('../../aliases.config.js');

module.exports = ({ config }) => {
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.json', '.web.js', '.web.ts', '.web.tsx', '.web.jsx', '.jsx'];

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
    'react-native': 'react-native-web'
  };

  return config;
};
