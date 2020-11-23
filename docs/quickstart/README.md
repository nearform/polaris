![Logo][logo]

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

Follow the onscreen instructions that will allow you to run the Polaris applicaiton through [Expo] on your desktop, or, via the QR code, on your mobile device.

![polaris-homepage]

## Storybook

In Polaris you can run [Storybook's](polaris_UI.md) stories for components separately on its own Platform Native (iOs, Android) and Web.

### Storybook Web (Browser)

On Web, it runs the standard Storybook Explorer Interface with npm command:

```bash
$ npm run storybook:web
```

After it runs, browser will open storybook's url at `http://localhost:9001`

![storybook-homepage]

### Storybook Native (iOS, Android)

On Native it runs the Storybook Native Explorer Interface:

for `iOs` run:

```bash
$ npm run storybook:ios
```

for `Android` run:

```bash
$ npm run storybook:android
```

After it runs, use [Expo] on your iOs or Android device to access Storybook Explorer Application will open or use the simulator/emulator instructions as shown on screen.

## End-to-end web Testing

Polaris uses [Cypress] to define and run end-to-end tests for the web application.

1. Start the Expo web application:

```sh
npm run web
```

2. Then you can run the tests either, silently with:

```sh
npm run e2e:web:run
```

or interactively using [Cypress test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):

```sh
npm run e2e:web:open
```

## Push Notifications

Polaris supports both native and web push notifications.

### Native push notifications:

Native push notifications are only supported on real devices, so it's not possible to test on a simulator.

- currently routed through Expo servers, although it's possible to send them through a custom node server if needed due to security, similar to web push notifications
- to get the example working, you need to login with an Expo account on the computer with `expo login -u <username> -p <password>`

### Web push notifications:

Web push notifications are not yet supported out of the box with Expo, so we shipped a workaround with a custom node server.

- first create a .env for storing [VAPID](https://tools.ietf.org/html/draft-ietf-webpush-vapid-04) keys with `npm run create:env`
- generate VAPID keys with `npm run push:generate:web` and save them in the .env file created in previous step
- run the node server with `npm run push:server:start`
- restart expo build process and you should be able to run the example

# Further Information

- [Authentication](../authentication.md)
- [Database integration](../databases.md)
- [Dev Ops](..//devops)
- [Internationalisation](../internationalisation.md)
- [Routing](../routing.md)
- [Testing](../testing.md)
- [UI elements](../polaris_UI.md)

<!-- Images -->

[logo]: ../img/Polaris_logo.svg
[polaris-homepage]: ../img/homescreen.jpg
[storybook-homepage]: ../img/storybook.jpg

<!-- External links -->

[cypress]: https://www.cypress.io/
[expo]: https://expo.io
