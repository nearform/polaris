# Polaris

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

To insert a label in a React component, use the `useTranslation` hook and the `t` function provideded by [react-i18next](https://react.i18next.com/latest/usetranslation-hook):

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

## CI

Polaris has a simple continuous integration pipeline built in with [Github Actions](https://docs.github.com/en/actions) that lints, run tests and builds js bundles for each target. Note that GitHub has a [free plan](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) included for every account type and you shouldn't be billed for additional usage until a spending limit has been set for the account.

To adjust the pipeline see [integration.yml file](.github/workflows/integration.yml).

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

## Routing

Polaris uses [React Navigation](https://reactnavigation.org/) in Native (Android and iOS), and [React Router DOM](https://reactrouter.com/web/guides/quick-start) in Web. This allows all platforms to be given fully-featured, robust platform-appropriate routing without comprimises. 

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

Renders a `<a>` link on Web and a `TouchableOpacity` on Native. `title` is the text displayed to the user in the link; on web, a html `title` attr is generated from the matching route's `name`. Other props such as `style` are passed through. 

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

Query string params in a URL, such as `?sort=id&direction=asc`, are stored as nested object of key:value pairs under the key `queryParams`, for example, this params object, with a path `/list/:type/`, would give a web URL `/list/products?search=cars&sort=price`, with all these params available in Web and Native:

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
