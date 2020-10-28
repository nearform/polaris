

[![Logo][logo-img]][docs]

# Polaris

Polaris is Nearform's framework React Native app builder that allows simultaneous development of web, iOS and Android applications.

Polaris is a curated set of libraries, tools, and conventions assembled together to allow developers to focus on their app's functionality instead of spending hours picking and choosing different libraries and approaches. It aims to provide the necessary tools
to create native mobile apps and web apps with a single codebase.

## Quick start

```bash
$ git clone git@github.com:nearform/polaris.git
$ cd polaris
$ npm install
$ npm start
```

## Internationalisation support

Polaris uses [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/) packages to provide internationalisation support.

For every language supported, a JSON file containing all the translated labels is defined in the `lang/` folder:

```JSON
// lang/en.json
{
  "home": {
    "title": "Home Screen",
    "today": "Today is {{date, do MMM yyyy}}"
  }
}
```

To insert a label in a React component, use the `useTranslation` hook and the `t` function provided by [react-i18next](https://react.i18next.com/latest/usetranslation-hook):

```JSX
...
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("home:title")}</Text>
      <Text>{t("home:today", { date: new Date() })}</Text>
    </View>
  );
};
```

In the example above, you can see how the library also provides support for date formatting and internationalisation using [date-fns](https://date-fns.org/) package. You can define date's format in the JSON file and pass the date object to the `t` function.

`useTranslation` is available in all components, including Jest tests where it behaves as normal but defaults to the "`cimode`" language code. In Jest, `t` simply returns the (relatively stable) key and language-specific JSON translations are not loaded.

## Routing

Polaris uses [React Navigation](https://reactnavigation.org/) in Native (Android and iOS), and [React Router DOM](https://reactrouter.com/web/guides/quick-start) in Web. This allows all platforms to be given fully-featured, robust platform-appropriate routing without compromises.

[React Navigation is developing Web routing features](https://reactnavigation.org/docs/web-support/), so it may be possible to drop React Router DOM, but currently (Summer 2020) these features are "experimental" and not ready for production.

To ease development, Polaris provides cross-platform components, hooks and utilities for common routing and navigation operations:

#### /routes

Default export is an array of route objects following this example shape:

```
  {
    path: '/users/:id/edit', // string with any URL params prefaced `:`
    name: 'user:edit', // string or lookup for useTranslation, see Internationalisation Support
                       // this may include param placeholders like {:key} e.g. 'Edit user {:id}'
    menuIndex: 5, // number, if defined, main nav elements will include a link and sort by this
    View: UserEditView, // View component, if defined, this will be rendered when the route matches
    redirectTo: '/users' // String, if defined, matches will redirect to this path.
                         // One of View or redirectTo should be defined
  }
```

Routes for all platforms in `routes.common.js`, native-only routes in `routes.native.js` and web-only routes in `routes.web.js`.

Named exports are:

- `defaultPath`: string of the default path e.g. `/`
- `routeShape`: [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) `shape` for route objects as above

Here is an example turning a route's name into a translated title, applying any params:

```
import { useTranslation } from 'react-i18next';
import usePlatformLocation from 'hooks/usePlatformLocation
import { replaceParams } from 'utils/paths'

...
// Inside a component or hook
const { t } = useTranslation()
const { currentRoute, params } = usePlatformLocation()
const currentTitle = replaceParams(t(currentRoute.name), params)
```

#### /components/templates/routes

Handles platform-specific routing and renders the appropriate `View` of the chosen route. All components and hooks below should be used inside this.

#### `Link({ path:string (required), title:string (required), params:object (optional), ...props })`

Renders a `<a>` link on Web and a `TouchableOpacity` on Native. `title` is the text displayed to the user in the link. Other props such as `style` are passed through.

Where a path contains params, pass the _template_ to `path` and a keyed object to `params`, for example:

```
  <Link path="/users/:id/edit" params={{ id: 5 }} style={/* passed through */} />
```

#### `LinkButton({ path:string (required), params:object (optional), ...props })`

Same as `Link` but renders as a button.

#### usePlatformLocation()

Returns `{ currentRoute, params }`:

- `currentRoute` is the current route object as defined in `/routes` above
- `params` matches the output of `usePlatformParams` below

#### usePlatformParams()

Returns an object of key:value pairs of params in the current location.

Query string params in an URL, such as `?sort=id&direction=asc`, are stored as a nested object of key:value pairs under the key `queryParams`. For example, this params object, with a path `/list/:type/`, would give a web URL `/list/products?search=cars&sort=price`, with all these params available in Web and Native:

```
  {
    type: 'products`,
    queryParams: {
      search: 'cars',
      sort: 'price'
    }
  }
```

#### usePlatformNavigation()

Returns an object of functions memoized with `useCallback`, `{ navigate, setParams, replaceParams }`:

- `navigate( path:string, params:object (optional) )`: navigates to the given location, applying any provided params
- `setParams( params )`: shallow-merges the provided params object with the location's current params
- `replaceParams( params )`: applies the provided params object, and sets any currently-defined params not defined in the new params object to `null`.

## Atomic Design for UI Components

Polaris has Atomic Design structure for its UI components.

Atomic Design is inspired by chemistry. Just as all matter is made out of atoms that combine to form molecules, which in turn make up more complex organisms. Atomic Design involves breaking an application down into its basic components and then working up from there to create an application layout.

With Atomic Design, you use predefined atoms to create the more complex components and it is easy to see which components are being used for different parts of the application. This reduces the likelihood of writing duplicate code.

There are **5 distinct levels** in atomic design:

#### 1. Atoms

Basic building blocks. Applied to interfaces, atoms are simplest HTML tags, such as a form Label, an Input, Checkbox or a Button.

#### 2. Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of application design. Form label, Input or Button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

**Atoms** and **molecules** should not usually include business logic such as links and event handlers. They are declarative and lifeless scaffolding with no business logic. They are brought to life inside organisms.

#### 3. Organisms

Molecules are building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an application interface. Building up from molecules to organisms encourages creating standalone, portable, reusable components.

#### 4. Templates

Templates consist mostly of groups of organisms stitched together to form reusable layouts.

#### 5. Views

Views are specific instances of content for templates. A placeholder is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

Atomic design provides a clear methodology for crafting design systems. Clients and developers are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

Atomic design allows us to roll out higher quality, more consistent, reusable and understandable components' UI faster.

## CI

Polaris has a simple continuous integration pipeline built in with [Github Actions](https://docs.github.com/en/actions) that lints, run tests and builds js bundles for each target. Note that GitHub has a [free plan](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) included for every account type and you shouldn't be billed for additional usage until a spending limit has been set for the account.

To adjust the pipeline see [integration.yml file](.github/workflows/integration.yml).

## Push Notifications

Polaris supports both native and web push notifications.

Native push notifications:

- only supported on real devices, so it's not possible to test on a simulator
- currently routed through Expo servers, although it's possible to send them through a custom node server if needed due to security, similar to web push notifications
- to get the example working, you need to login with an Expo account on the computer with `expo login -u <username> -p <password>`

Web push notifications:

- not yet supported out of the box with Expo, so we shipped a workaround with a custom node server
- first create a .env for storing [VAPID](https://tools.ietf.org/html/draft-ietf-webpush-vapid-04) keys with `npm run create:env`
- generate VAPID keys with `npm run push:generate:web` and save them in the .env file created in previous step
- run the node server with `npm run push:server:start`
- restart expo build process and you should be able to run the example

## Storybook integration

Polaris has Storybook integration for developing UI components separately in isolation environment, as an individual piece. This is useful tool for faster development and quicker iteration. Also, it's good to serve as a guide so we don't recreate a component someone else has done. The latter contributes to reusability.

#### Create stories for native and web platform

Storybook integrates with Polaris and offers an easy solution to present the UI components on both native and web platforms. To create a new story you would need to create a subfolder called `stories` inside your component folder. Then use different filenames to target different platforms where you want to develop, view or test your components.

For example:

```bash
src/components/atoms/button
  - [▼] stories
    - button.stories.common.js
    - button.stories.native.js
    - button.stories.web.js
  - index.jsx
```

Storybook will read all files inside the `stories` folders and use them in Storybook explorer UI:

- `*.stories.native.js` file(s) will be used inside react storybook for Native platform `ios` and `android`.
- `*.stories.web.js` files(s) will be used inside react storybook for Web
- `*.stories.common.js` file(s) will be use to common stories for components that share same properties and functionality on all platforms native and web.

Stories in `.native.js` and `.common.js` must use `storiesOf` format due to `@storybook/react-native`. `.web.js` files may use the more declarative CSF format.

It is also not possible to use the `@storybooks/addon-docs` plugin as it is not compatible with `@storybook/react-native`. To work around this there is a custom set of components in `storybook/story-components` to facilitate documentation that works in both storiesOf and CSF formats. See the `src/components/atoms/button/stories/button.stories.common.js` for example usage.

Theme and routing are automatically added to the story when decorating a story with a story page. To define linked screens use a `screens` prop in `StoryPage` and then reference the screen in the `path` of the `Link` components. See the `atoms/link` story for an example.

#### Run storybook configuration and settings

Storybook's configuration and support files located inside `/storybook` folder in root of Polaris.

`/storybook/storybook-components` - Storybook **web** stories decorators files used to wrap stories components and present them with better visuals inside explorer UI.

`/storybook/.storybook-web` - Storybook react for **web** configuration and support files

`/storybook` - Storybook **native** configuration and support files

`/storybook/storybook-components-native` - Storybook **native** stories decorators files used to wrap stories components and present them inside explorer UI.

#### Run storybook for native and web platform

In Polaris you can run Storybook' stories for components separately on its own platform Native (ios, android) and Web.

##### Storybook Web (Browser)

On Web, it runs the standard Storybook Explorer Interface with npm command:

```bash
$ npm run storybook:web
```

After it runs, browser will open storybook's url at `http://localhost:9001`

##### Storybook Native (iOS, Android)

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
