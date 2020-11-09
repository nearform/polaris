# Storybook integration

Polaris uses [Storybook](https://storybook.js.org/) for developing UI components.

[Storybook](https://storybook.js.org/) is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

### Create stories for native and web platform

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

### Run storybook configuration and settings

Storybook's configuration and support files located inside `/storybook` folder in root of Polaris.

`/storybook/storybook-components` - Storybook **web** stories decorators files used to wrap stories components and present them with better visuals inside explorer UI.

`/storybook/.storybook-web` - Storybook react for **web** configuration and support files

`/storybook` - Storybook **native** configuration and support files

`/storybook/storybook-components-native` - Storybook **native** stories decorators files used to wrap stories components and present them inside explorer UI.

### Run storybook for native and web platform

In Polaris you can run Storybook' stories for components separately on its own platform Native (ios, android) and Web.

#### Storybook Web (Browser)

On Web, it runs the standard Storybook Explorer Interface with npm command:

```bash
$ npm run storybook:web
```

After it runs, browser will open storybook's url at `http://localhost:9001`

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
