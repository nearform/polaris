# Polaris UI

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

## Storybook integration

Polaris uses [Storybook](https://storybook.js.org/) for developing UI components.

[Storybook](https://storybook.js.org/) is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

## Create stories for native and web platform

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

## Run storybook configuration and settings

Storybook's configuration and support files located inside `/storybook` folder in root of Polaris.

`/storybook/storybook-components` - Storybook **web** stories decorators files used to wrap stories components and present them with better visuals inside explorer UI.

`/storybook/.storybook-web` - Storybook react for **web** configuration and support files

`/storybook` - Storybook **native** configuration and support files

`/storybook/storybook-components-native` - Storybook **native** stories decorators files used to wrap stories components and present them inside explorer UI.

See the [Quick start guide](/quickstart/) for instructions on how to run Storybook.

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
