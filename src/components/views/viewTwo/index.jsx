import * as React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from '../views.styles';

export const ViewTwo = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('viewTwo:message')}</Text>
    </View>
  );
};
