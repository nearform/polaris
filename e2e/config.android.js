const path = require('path');

const appAbsPath = path.normalize(`${__dirname}/../polaris.apk`);
const emulator = 'Nexus_5_API_29';

const configuration = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: 'Android Emulator',
    app: appAbsPath,
    avd: emulator
  }
};

module.exports = configuration;
