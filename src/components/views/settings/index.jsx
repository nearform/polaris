import * as React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "../views.styles";
import SettingItem from "../../molecules/setting-item";
import LanguageSelector from "../../atoms/language-selector";

export const Settings = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <SettingItem
        label={t("settings:languageLabel")}
        value={<LanguageSelector />}
      />
    </View>
  );
};
