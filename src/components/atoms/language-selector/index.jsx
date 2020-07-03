import React from 'react';
import { StyleSheet, Picker } from 'react-native';
import { useTranslation } from 'react-i18next';
import { supportedLocales } from 'services/i18n';

export const LanguageSelector = ({ changeLanguage, languages, currentLanguage, nativeID }) => {
  const { t } = useTranslation();
  return (
    <Picker
      selectedValue={currentLanguage}
      style={styles.picker}
      onValueChange={changeLanguage}
      nativeID={nativeID}
      testID="language-selector"
    >
      {languages.map(lang => (
        <Picker.Item label={t(`language:${lang}`)} value={lang} key={lang} />
      ))}
    </Picker>
  );
};

export default function LanguageSelectorComponent({ nativeID }) {
  const { i18n } = useTranslation();
  const languages = Object.keys(supportedLocales);
  const currentLanguage = i18n.language;

  const changeLanguage = lang => i18n.changeLanguage(lang);
  return LanguageSelector({ changeLanguage, languages, currentLanguage, nativeID });
}

const styles = StyleSheet.create({
  picker: {
    minWidth: 150
  }
});
