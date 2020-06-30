import React from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { supportedLocales } from "../../../services/i18n";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const languages = Object.keys(supportedLocales);
  const currentLanguage = i18n.language;

  const changeLanguage = () => {
    const languages = Object.keys(supportedLocales);

    return ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [t("cancel"), ...languages.map((l) => t(`language:${l}`))],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        console.log(`buttonIndex`, buttonIndex);
        if (buttonIndex > 0) {
          i18n.changeLanguage(languages[buttonIndex - 1]);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={changeLanguage}
        title={t(`language:${currentLanguage}`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default LanguageSelector;
