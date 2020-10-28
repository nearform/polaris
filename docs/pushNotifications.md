# Push Notifications

Polaris supports both native and web push notifications.

## Native push notifications:

Native push notifications are only supported on real devices, so it's not possible to test on a simulator.

- currently routed through Expo servers, although it's possible to send them through a custom node server if needed due to security, similar to web push notifications
- to get the example working, you need to login with an Expo account on the computer with `expo login -u <username> -p <password>`

## Web push notifications:

Web push notifications are not yet supported out of the box with Expo, so we shipped a workaround with a custom node server.

- first create a .env for storing [VAPID](https://tools.ietf.org/html/draft-ietf-webpush-vapid-04) keys with `npm run create:env`
- generate VAPID keys with `npm run push:generate:web` and save them in the .env file created in previous step
- run the node server with `npm run push:server:start`
- restart expo build process and you should be able to run the example
