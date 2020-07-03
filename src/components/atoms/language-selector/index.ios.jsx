import React from 'react';
import { ActionSheetIOS, Button, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { supportedLocales } from 'services/i18n';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = () => {
    const languages = Object.keys(supportedLocales);
    const langLabels = languages.map(l => t(`language:${l}`));

    return ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [t('cancel'), ...langLabels],
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex > 0) {
          i18n.changeLanguage(languages[buttonIndex - 1]);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button onPress={changeLanguage} title={t(`language:${currentLanguage}`)} />
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
