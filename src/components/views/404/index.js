import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import usePlatformLocation from 'hooks/usePlatformLocation';

export const View404 = () => {
  const currentRoute = usePlatformLocation();
  const path = currentRoute ? currentRoute.path : '';
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>404: Page {path ? `"${path}" ` : ''}not found</Text>
    </View>
  );
};
