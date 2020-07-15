const path = require('path');

const iosAppAbsPath = path.normalize(`${__dirname}/../build/polaris.app`);
const simulator = 'iPhone 11';

const configuration = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: simulator,
    app: iosAppAbsPath
  }
};

module.exports = configuration;
