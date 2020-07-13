const wdio = require('webdriverio');
const path = require('path');

const apkFileName = 'polaris-f2c0a0a88f914637b458b600ac7aa795-signed.apk';
const appAbsPath = path.normalize(`${__dirname}/../${apkFileName}`);
const androidEmulator = 'Nexus_5_API_29';

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: 'Android Emulator',
    app: appAbsPath,
    avd: androidEmulator
  }
};

console.log(JSON.stringify(opts.capabilities));

const main = async () => {
  const client = await wdio.remote(opts);
  const context = await client.getContext();
  console.log(`Context = <${context}>`);
  const secsToWait = 3;
  console.log(`Wait ${secsToWait} secs...`);
  await client.pause(secsToWait * 1000);
  console.log('done!');

  const el1 = await client.$('~go-to-settings');
  el1.click();

  console.log(`Wait ${2} secs...`);
  await client.pause(2 * 1000);
  console.log('done!');

  const el2 = await client.$('~language-selector');
  console.log('before click');
  await client.pause(3 * 1000);
  console.log(`is el2 enabled = ${await el2.isEnabled()}`);
  // console.log(`is focused = ${await el2.isFocused()}`);
  // console.log(`is selected = ${await el2.isSelected()}`);
  console.log('before click');
  await client.pause(3 * 1000);
  el2.click();
  await client.pause(3 * 1000);
  console.log('after click');

  console.log(`Wait ${3} secs...`);
  await client.pause(3 * 1000);
  console.log('done!');
  // const el3 = await client.$(
  //   '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]'
  // );
  // el3.click();

  //   await client.deleteSession();
};

main();
