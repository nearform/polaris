const wdio = require('webdriverio');

const args = process.argv.slice(2);
let config = require('./config.android');
if (args.length > 0 && args[0] === 'ios') {
  config = require('./config.ios');
}

const test = async () => {
  // Init the client and wait 3 seconds the the app starts
  const client = await wdio.remote(config);
  await client.pause(3000);

  // Search the "go to settings" button in the home screen and click it
  const settingsButton = await client.$('~go-to-settings');
  await settingsButton.click();

  // Wait 2 seconds for the Settings page to load
  await client.pause(2000);

  // Search the language picker and open it
  const languageSelector = await client.$('~language-selector');
  await languageSelector.click();

  // Select the Italian language
  // FIXME: this only works on iOS, and Android it doesn't find the item
  const italianLanguage = await client.$('~Italiano');
  await italianLanguage.click();

  // Wait 3 seconds that the screen updates the labels
  await client.pause(3000);

  // Get the picker's labal
  const languageSelectorLabel = await client.$('~language-selector-label');

  // This should print the Italian translation of the label
  console.log(`Label: <${await languageSelectorLabel.getValue()}>`);

  // TODO: add an assertion to check the label translation and complete the test
};

test();
