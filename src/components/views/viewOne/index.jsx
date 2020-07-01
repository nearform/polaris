import * as React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from '../views.styles';

export const ViewOne = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('viewOne:message')}</Text>
    </View>
  );
};
