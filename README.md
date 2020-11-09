[![Logo][logo-img]][docs]

Polaris is Nearform's framework React Native app builder that uses [Expo](https://expo.io) for rapid prototyping and simultaneous development of web, iOS and Android applications.

Polaris has been designed to take on the "heavy lifting" of complicated tasks such as authentication, internationalisation, [push notifications](/docs/pushNotifications.md), set up of [testing framework](/docts/testing.md) etc. These are tasks that take time to set up and wire into every project, will always be required but do not add specific, measurable product value. By using Polaris you get time to work on what makes your app different, rather than spending time on the construction.

Polaris is an oppinionated curated set of libraries, tools, and conventions assembled together to allow developers to focus on their app's functionality instead of spending hours picking and choosing different libraries and approaches (see [ADRs](/docs/ADRS/README.md)). All decisions that have been made in Polaris have been tried and tested in [production code](https://www.nearform.com/services/accelerators/polaris/).

Polaris uses [Storybook](/docs/storybook.md) integration for developing UI components separately in an isolation environment, as an individual piece. By doing so it allows for faster, independant development of UI components, and acts as a useful reference point to help prevent duplication of work. Polaris adopts Atomic Design Patterns to construct front end components, whiic helps with the development of reusable components.

## CI

Polaris has a simple continuous integration pipeline built in with [Github Actions](https://docs.github.com/en/actions) that lints, run tests and builds js bundles for each target. Note that GitHub has a [free plan](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) included for every account type and you shouldn't be billed for additional usage until a spending limit has been set for the account.

To adjust the pipeline see [integration.yml file](.github/workflows/integration.yml).

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

[logo-img]: docs/img/Polaris_logo.svg
[docs]: https://nf-polaris.netlify.com/#/
