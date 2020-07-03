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
