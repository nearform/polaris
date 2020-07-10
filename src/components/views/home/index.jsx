import * as React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from '../views.styles';

import LinkButton from 'components/molecules/link-button';

export const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('home:title')}</Text>
      <LinkButton title={t('home:viewOneButton')} path="/viewOne" />
      <LinkButton title={t('home:viewTwoButton')} path="/viewTwo" />
      <LinkButton title={t('home:viewThreeButton')} path="/viewThree" />
      <LinkButton title={t('home:listViewButton')} path="/listView" />
      <LinkButton title={t('home:pushNotificationsButton')} path="/pushNotifications" />
    </View>
  );
};
