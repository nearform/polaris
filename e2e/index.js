const wdio = require("webdriverio");

const args = process.argv.slice(2);

config = require("./config.ios");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const test = async () => {
  //TODO: Needs an imporvement, wait appium is started
  await sleep(10000);
  const client = await wdio.remote(config);
  await client.pause(3000);

  const welcomeMessageText = await client.$("~welcome");

  console.log(`Message: <${await welcomeMessageText.getValue()}>`);
  await client.deleteSession();
};

test();
