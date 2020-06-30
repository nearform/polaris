import * as React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import SettingItem from "../molecules/setting-item";
import LanguageSelector from "../atoms/language-selector";

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SettingItem
        label={t("settings:languageLabel")}
        value={<LanguageSelector />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginBottom: 20,
  },
});

export default SettingsScreen;
