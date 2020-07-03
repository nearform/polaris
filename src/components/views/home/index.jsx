import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from '../views.styles';

export const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('home:title')}</Text>
      <Button title={t('home:viewOneButton')} onPress={() => navigation.push('ViewOne')} />
      <Button title={t('home:viewTwoButton')} onPress={() => navigation.push('ViewTwo')} />
      <Button title={t('home:viewThreeButton')} onPress={() => navigation.push('ViewThree')} />
      <Button title={t('home:settingsButton')} onPress={() => navigation.push('Settings')} />
      <Button title={t('home:cameraButton')} onPress={() => navigation.push('Camera')} />
    </View>
  );
};
