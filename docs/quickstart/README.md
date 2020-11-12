# ![logo]

# Quick Start Guide

Polaris is easy to install and run. We encourage developers to install Polaris locally themselves - it is easy to navigate, start and stop. Before starting, let's ensure you have all of the prerequisites installed.

You need the latest stable version of Expo. This is straightforward to install and does not require any special setup.

## Clone and install the Source Repository

```bash
$ git clone git@github.com:nearform/polaris.git
$ cd polaris
$ npm install
$ npm start
```

You will be able to run the applicaiton through expo on your desktop, or, via the QR code, on your mobile device.

SUGGESTION - be good to have a "create polaris app" script option that would allow developer to pick out which of the components that are used (such as "Do you want camera integration y/n?")

![polaris-homepage]

### Run storybook for native and web platform

In Polaris you can run [Storybook's](storybook.md) stories for components separately on its own platform Native (ios, android) and Web.

#### Storybook Web (Browser)

On Web, it runs the standard Storybook Explorer Interface with npm command:

```bash
$ npm run storybook:web
```

After it runs, browser will open storybook's url at `http://localhost:9001`

![storybook-homepage]

#### Storybook Native (iOS, Android)

On Native it runs the Storybook Native Explorer Interface:

for `ios` run:

```bash
$ npm run storybook:ios
```

for `android` run:

```bash
$ npm run storybook:android
```

After it runs, Storybook Explorer Application will open on the native device or on the simulator/emulator.

## SVGs

Be aware that imported SVGs are automatically converted to normal React components. This is possible via `react-native-svg-transformer` library on native and `@svgr/webpack` loader on web. If you are interested in how the generated component looks like, head over to the [svgr documentation](https://react-svgr.com/docs/getting-started/).

So to render an svg, simply import it:

```
import Logo from 'assets/logos/logo.svg';
```

and treat it like a normal React component:

```
<Logo width={200} height={50} fill="#2165e3" title="Logo" />
```

Note that props on the svg component are forwarded to the root `<svg>` element.

<!-- Images -->

[logo]: ../img/Polaris_logo.svg
[polaris-homepage]: ../img/homescreen.jpg
[storybook-homepage]: ../img/storybook.jpg
