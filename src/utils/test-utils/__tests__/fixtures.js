import React from 'react';
import { View, Text } from 'react-native';
import Link from 'components/atoms/link';

import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { usePlatformLocation, usePlatformNavigation } from 'utils/hooks';

export const SimpleView = () => (
  <View>
    <Text>Example text</Text>
  </View>
);

export const DeepNestedView = () => (
  <View>
    <View nativeID="outer">
      <View>
        <Text nativeID="childless">Example text</Text>
      </View>
      <View>
        <View>
          <View nativeID="inner">
            <Text>More example text</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export const ContextualView = () => {
  const theme = useTheme();
  const translation = useTranslation();

  if (!translation) throw new Error('Nothing returned from useTranslation');
  if (!theme || !theme.name) throw new Error(`${!theme ? 'No' : 'Empty'} theme returned from useTheme`);

  const { t, i18n } = translation;

  return (
    <View>
      <Text>{t('headingText')}</Text>
      <Text testID="lang-name">Current language is {i18n.language}</Text>
      <Text testID="theme-name">Current theme is {theme.name}</Text>
    </View>
  );
};

export const RouteView = ({ routes }) => {
  const nav = usePlatformNavigation();
  const location = usePlatformLocation();

  if (!nav) throw new Error('RouteView cannot access navigation via usePlatformNavigation');
  if (!location) throw new Error('RouteView cannot access location via usePlatformLocation');

  const { name, path } = location.currentRoute;

  return (
    <View>
      <Text>{name}</Text>
      <Text testID="path">{path}</Text>
      <Link path="/test-path" title="Test link" />
    </View>
  );
};
