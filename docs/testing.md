# Testing in Polaris

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
