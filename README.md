# Polaris

## Internationalisation support

Polaris uses [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/) packages to provide internationalisation support.

For every language supported, a JSON file containing all the translated labels is defined in the `lang/` folder:

```JSON
// lang/en.json
{
  "home": {
    "title": "Home Screen",
  },
  ...
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
    </View>
  );
};
```

The library provides support for date formatting and internationalisation using [date-fns](https://date-fns.org/) package. You can define date's format directly into the JSON file:

```JSON
// lang/en.json
{
  "home": {
    "today": "Today is {{date, do MMM yyyy}}"
  }
}
```

And pass the date object directly to the `t` function:

```JSX
...
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("home:today", { date: new Date() })}</Text>
    </View>
  );
};
```
