const wdio = require('webdriverio');

const args = process.argv.slice(2);
let config = require('./config.android');
if (args.length > 0 && args[0] === 'ios') {
  config = require('./config.ios');
}

const test = async () => {
  const client = await wdio.remote(config);
  await client.pause(3000);

  const settingsButton = await client.$('~go-to-settings');
  await settingsButton.click();

  await client.pause(2000);

  const languageSelector = await client.$('~language-selector');
  await languageSelector.click();

  const italianLanguage = await client.$('~Italiano');
  await italianLanguage.click();

  await client.pause(3000);
  const languageSelectorLabel = await client.$('~language-selector-label');
  // FIXME: add an assertion
  console.log(`Label: <${await languageSelectorLabel.getValue()}>`);
};

test();
