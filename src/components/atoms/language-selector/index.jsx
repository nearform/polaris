import React from 'react';
import { StyleSheet, Picker } from 'react-native';
import { useTranslation } from 'react-i18next';
import { supportedLocales } from '../../../services/i18n';

const LanguageSelector = ({ nativeID }) => {
  const { i18n } = useTranslation();
  const languages = Object.keys(supportedLocales).map(langCode => ({
    code: langCode,
    name: supportedLocales[langCode].name
  }));

  const currentLanguage = i18n.language;

  const changeLanguage = lang => i18n.changeLanguage(lang);

  return (
    <Picker selectedValue={currentLanguage} style={styles.picker} onValueChange={changeLanguage} nativeID={nativeID}>
      {languages.map(lang => (
        <Picker.Item label={lang.name} value={lang.code} key={lang.code} />
      ))}
    </Picker>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  picker: {
    minWidth: 150
  }
});
