const configuration = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    browserName: 'chrome'
  }
}

const options = {
  url: 'http://localhost:19006'
}

module.exports = { configuration, options }
