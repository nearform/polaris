[![Logo][logo-img]][docs]

Polaris is Nearform's framework React Native app builder that uses [Expo](https://expo.io) for rapid prototyping and simultaneous development of web, iOS and Android applications.

Polaris has been designed to take on the "heavy lifting" of complicated tasks such as autherisation, internationalisation, [push notifications](/docs/pushNotifications.md), etc. These are tasks that take time to set up and wire into every project, will always be required but do not add specific, measurable product value. By using Polaris you get time to work on what makes your app different, rather than spending time on the construction.

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

## Authentication

Polaris includes an authentication example via [Auth0](https://auth0.com/). To connect to your Auth0 app you need to:

- Create your own native application on Auth0
- Log in with your expo account via expo cli
- Add the AppSession's auth URL to `Allowed Callback URLs` on Auth0. Each Expo user has it's own URL for different projects, the basic structure of this URL is `https://auth.expo.io/@your-username/your-expo-app-slug`. You can read more about the format [here](https://docs.expo.io/versions/latest/sdk/auth-session/#it-makes-redirect-url-allowlists-easier-to). For web you need to add your environment url.
- Replace environment variables in .env file with your Auth0 client ID and domain.

## Unit testing with Jest

Polaris uses [Expo's "Universal" jest presets](https://blog.expo.io/testing-universal-react-native-apps-with-jest-and-expo-113b4bf9cc44), [@testing-library](https://testing-library.com/docs/intro) and some custom test utils to run unit tests in Web, Android and iOS Jest environments. In most cases, it should be possible using these to write one test file that works on all platforms.

Test files suffixed `.test.js` or `.test.jsx` will be run in all platforms. To target a platform with a test file, add the platform name _after_ the `.test`, for example, `.test.web.js`, `.test.native.js`, `.test.android.js` and `.test.ios.js`.

#### @testing-library

Import from `utils/test-utils` and Polaris will take from [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) for web tests and from [@testing-library/react-native](https://testing-library.com/docs/native-testing-library/intro) for iOS and Android, for example:

```js
import { render, cleanup, act, within } from 'utils/test-utils'
// from @testing-library/react on web and @testing-library/react-native on native

afterEach(cleanup) // this is recommended for all tests

describe('Some component', () => {
  it('contains three accessible links', () => {
    const { getAllByRole } = render(<SomeComponent />)
    // gets by accessibilityRole on native and aria-role on web
    const links = getAllByRole('link')
    expect(links).toHaveLength(3)
  })
})
```

#### Renderers

Polaris includes two renderers to use in place of `@testing-library`'s `render` for components with special requirements, also exported from `utils/test-utils`:

##### `renderWithContext(element, renderOptions)`

Renders the element inside the same contexts and setup as the main app. `renderOptions` are optional and passed to the underlying `render` call.

Required for any component using theming or i18n.

```js
import { renderWithContext } from 'utils/test-utils/'

// In test...
const {
  /* same as @testing-library render */
} = renderWithContext(<SomeComponent />)
```

##### `renderAsRoute(element, { renderOptions, routeOptions: { additionalRoutes, ...routeProps } })`

Plugs the component into Polaris's routing system, then renders the `Route` switcher component, wrapped in contexts like `renderWithContext`, selecting this component as the active route. In Jest on Native, React Navigation navigators are swapped in Webpack for `BareNavigator`, a custom navigator with no UI to avoid failures on importing native navigation elements.

Both `routeOptions` and `renderOptions` are optional and usually not required. `renderOptions` are passed to the underlying `render`. `routeOptions` are passed to `Route` as props except for `additionalRoutes` which is an optional array of `route` objects added to the generated routes array after this rendered component.

Required for any component using routing hooks, such as any component containing links.

```js
import { renderWithContext } from 'utils/test-utils/'

// In test...
const {
  /* same as @testing-library render */
} = renderAsRoute(SomeComponent)
```

#### Platform utils

In some cases, @testing-library/react and @testing-library/react-native differ and Polaris offers cross-platform helpers. These are also all exported from `utils/test-utils`:

##### `queryAllDescendents(element, { value:string, nativeProp:string, webAttr:string, matchType:string })`

Unifies `nativeElement.findAll()` & `domElement.querySelectorAll()`, for ad hoc lookups where none of @testing-library's `within(element).queryAllBy*`methods are suitable. For example:

```js
import { queryAllDescendents } from 'utils/test-utils/'

// In test...
const idsStartWith_test = queryAllDescendents(element, {
  nativeProp: 'nativeID',
  webAttr: 'id',
  value: 'test',
  matchType: '^'
})
```

##### `getAttrOrProp(element, name:string)`

Unifies `nativeElement.getProp()` & `domElement.getAttribute()`. If the name differs between platforms, a ternary can be used, for example:

```js
import { getAttrOrProp } from 'utils/test-utils/'

// In test...
const id = getAttrOrProp(element, Platform.OS === 'web' ? 'id' : 'nativeID')
```

##### `prettyOutput(element)`

Unifies `prettyPrint(nativeElement)` & `prettyDOM(domElement)`. Useful for inspecting what is being rendered in each platform during debugging.

For example, this outputs the entire render in a readable format, once per platform:

```js
import { prettyOutput } from 'utils/test-utils/'

// In test...
const { container } = render(<SomeComponent />)
console.log(prettyOutput(container))
```

##### `firePressEvent(element)`

Unifies native `fireEvent.press` and web `fireEvent.click`. If the event changes state, run this in an async `act` like this:

```js
import { prettyOutput } from 'utils/test-utils/';

describe('Some component', () => {
  it('handles some click or press of some component', async () => {
    // Note we're in an async `it` callback function
    await act(async () => await firePressEvent(element));
```

## End-to-end web testing

Polaris uses [Cypress](https://www.cypress.io/) to define and run end-to-end tests for the web application.

Execute the Expo web application before starting any test:

```sh
npm run web
```

Then you can run the test in two different modes, silently with:

```sh
npm run e2e:web:run
```

or interactively using [Cypress test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):

```sh
npm run e2e:web:open
```

[logo-img]: docs/img/Polaris_logo.svg
[docs]: https://nf-polaris.netlify.com/#/
