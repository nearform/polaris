const assert = require('assert')

const wdio = require('webdriverio')

const [platform = 'android'] = process.argv.slice(2)

const { configuration, options } = require(`../config/${platform}`)

const test = async () => {
  const client = await wdio.remote(configuration)

  // Web test requires to load the app in the browser
  if (options?.url) {
    await client.url(options.url)
  }

  // Both selectors find the element containing the 'Text for tests' text
  // TODO: missing iOS selector.
  const selector =
    platform === 'web'
      ? 'div=Text for tests'
      : "//android.widget.TextView[@text='Text for tests']"

  // Instead of wayting different seconds using the pause method,
  // we use `waitForDisplayed`. This function waits until the
  // welcomeMessageText is displayed on the screen or the 10 seconds
  // timeout fires.
  const welcomeMessageText = await client.$(selector)
  await welcomeMessageText.waitForDisplayed({ timeout: 10 * 1000 })

  assert.strictEqual('Text for tests', await welcomeMessageText.getText())

  await client.deleteSession()
}

test()
