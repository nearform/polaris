const path = require('path')

module.exports = {
  src: './src',
  components: './src/components',
  store: './src/store',
  utils: './src/utils',
  constants: './src/constants',
  assets: './src/assets',
  services: './src/services',
  routes: './src/routes',
  storybook: './storybook',
  appRoot: path.resolve(
    __dirname,
    process.env.RUN_STORYBOOK ? './storybook' : './src/App'
  )
}
