import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';

import usePlatformLocation from 'utils/hooks/usePlatformLocation';

export const View404 = () => {
  const { t } = useTranslation();

  const currentRoute = usePlatformLocation();
  const path = currentRoute ? currentRoute.path : '';
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>{t('errors:404', { path: path ? `${path} ` : '' })}</Text>
    </View>
  );
};
