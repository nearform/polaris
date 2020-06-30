import React from "react";
import { StyleSheet, Picker } from "react-native";
import { useTranslation } from "react-i18next";
import { supportedLocales } from "../../services/i18n";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const languages = Object.keys(supportedLocales);
  const currentLanguage = i18n.language;

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <Picker
      selectedValue={currentLanguage}
      style={styles.picker}
      onValueChange={changeLanguage}
    >
      {languages.map((lang) => (
        <Picker.Item label={t(`language:${lang}`)} value={lang} key={lang} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    minWidth: 150,
  },
});

export default LanguageSelector;
