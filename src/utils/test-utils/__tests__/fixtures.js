import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Link from 'components/atoms/link';

import { UISettingsContext } from 'store';
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
  const settings = useContext(UISettingsContext);
  const translation = useTranslation();

  if (!translation) throw new Error('No t function available from useTranslation');
  if (!settings) throw new Error('No settings available from UISettingsContext');

  const { t } = translation;
  const settingsString = Object.values(settings).join(', ');

  return (
    <View>
      <Text>{t('headingText')}</Text>
      <Text testID="settings">{settingsString}</Text>
    </View>
  );
};

export const RouteView = ({ routes }) => {
  const nav = usePlatformNavigation();
  const location = usePlatformLocation(routes);

  if (!nav) throw new Error('RouteView cannot access navigation via usePlatformNavigation');
  if (!location) throw new Error('RouteView cannot access location via usePlatformLocation');

  const { name, path } = location.currentRoute;

  return (
    <View>
      <Text>{name}</Text>
      <Text testID="path">{path}</Text>
      <Link path="/tst-path" title="Test link" />
    </View>
  );
};
