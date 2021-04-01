const assert = require('assert')

const wdio = require('webdriverio')

const [platform = 'android'] = process.argv.slice(2)

const { configuration, options } = require(`./config.${platform}`)

const test = async () => {
  const client = await wdio.remote(configuration)
  // TODO: a high value here seems necessary to avoid starting the test
  // before the app has started. Also see the config
  await client.pause(50000)

  if (options?.url) {
    await client.url(options.url)
  }

  // TODO: find a way to make this work both for Web and mobile
  const welcomeMessageText = await client.$(
    "//android.widget.TextView[@text='Text for tests']"
  )

  assert.strictEqual('Text for tests', await welcomeMessageText.getText())

  await client.deleteSession()
}

test()
