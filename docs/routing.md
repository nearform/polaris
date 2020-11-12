# Routing

NOTE: [React Navigation is developing Web routing features](https://reactnavigation.org/docs/web-support/), so in the future it may be possible to drop React Router DOM, but currently (November 2020) these features are "experimental".

Polaris uses [React Navigation](https://reactnavigation.org/) in Native (Android and iOS), and [React Router DOM](https://reactrouter.com/web/guides/quick-start) in Web. This allows all platforms to be given fully-featured, robust platform-appropriate routing without compromises.

To ease development, Polaris provides cross-platform components, hooks and utilities for common routing and navigation operations:

## /routes

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

### /components/templates/routes

Handles platform-specific routing and renders the appropriate `View` of the chosen route. All components and hooks below should be used inside this.

### `Link({ path:string (required), title:string (required), params:object (optional), ...props })`

Renders a `<a>` link on Web and a `TouchableOpacity` on Native. `title` is the text displayed to the user in the link. Other props such as `style` are passed through.

Where a path contains params, pass the _template_ to `path` and a keyed object to `params`, for example:

```
  <Link path="/users/:id/edit" params={{ id: 5 }} style={/* passed through */} />
```

### `LinkButton({ path:string (required), params:object (optional), ...props })`

Same as `Link` but renders as a button.

### usePlatformLocation()

Returns `{ currentRoute, params }`:

- `currentRoute` is the current route object as defined in `/routes` above
- `params` matches the output of `usePlatformParams` below

### usePlatformParams()

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

### usePlatformNavigation()

Returns an object of functions memoized with `useCallback`, `{ navigate, setParams, replaceParams }`:

- `navigate( path:string, params:object (optional) )`: navigates to the given location, applying any provided params
- `setParams( params )`: shallow-merges the provided params object with the location's current params
- `replaceParams( params )`: applies the provided params object, and sets any currently-defined params not defined in the new params object to `null`.
