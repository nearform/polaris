# ![logo]

# Quick Start Guide

```bash
$ git clone git@github.com:nearform/polaris.git
$ cd polaris
$ npm install
$ npm start
```

<!-- Images -->

[logo]: img/Polaris_logo.svg

SUGGESTION - be good to have a "create polaris app" script option that would allow developer to pick out which of the components that are used (such as "Do you want camera integration y/n?")

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
