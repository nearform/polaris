const path = require('path')

const appPath = path.normalize(path.join(__dirname, '/../../build/polaris.app'))
const simulator = 'iPhone 11'

const configuration = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: simulator,
    app: appPath
  }
}

module.exports = { configuration }
