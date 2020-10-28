# Internationalisation support

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
