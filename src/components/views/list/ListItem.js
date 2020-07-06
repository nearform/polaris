import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import usePlatformParams from 'utils/hooks/usePlatformParams';
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';

import contentList from './content';

export const ListItem = () => {
  const { i18n } = useTranslation();
  const { navigate } = usePlatformNavigation();
  const params = usePlatformParams();
  const contentItem = params && contentList.find(({ id }) => id === Number(params.id));
  const currentLang = i18n.language;

  if (!contentItem) {
    navigate('/listView');
    return '';
  }

  const { title, content } = contentItem.translations[currentLang];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};
