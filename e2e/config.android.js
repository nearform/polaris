const path = require('path')

const appPath = path.normalize(path.join(__dirname, '/../build/polaris.apk'))

const configuration = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    app: appPath,
    // TODO: this should ideally be true (which is the default) but it seems
    // the test run can't detect when the app has started for some reason
    appWaitForLaunch: false
  }
}

module.exports = { configuration }
