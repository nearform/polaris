const alias = require('./aliases.config.js')

module.exports = api => {
  api.cache(false)
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          'inline-dotenv',
          [
            require.resolve('babel-plugin-module-resolver'),
            {
              alias
            }
          ]
        ]
      },
      production: {
        plugins: [
          'inline-dotenv',
          [
            require.resolve('babel-plugin-module-resolver'),
            {
              alias
            }
          ]
        ]
      }
    }
  }
}
