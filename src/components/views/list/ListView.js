import React, { useMemo } from 'react';
import { Text, View, StatusBar, Picker } from 'react-native';
import { useTranslation } from 'react-i18next';

import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';
import usePlatformParams from 'utils/hooks/usePlatformParams';

import LinkButton from 'components/molecules/link-button';
import content from './content';

export const PickerComponent = ({ onSortChange: handleSortChange, currentSort, items = [] }) => {
  return (
    <Picker
      onValueChange={handleSortChange}
      selectedValue={currentSort}
      style={{
        width: 128,
        height: 48,
        backgroundColor: 'white'
      }}
    >
      {items.map(({ label, value }) => (
        <Picker.Item label={label} value={value} key={value} />
      ))}
    </Picker>
  );
};

export const ListView = () => {
  const { t, i18n } = useTranslation();
  const { setParams } = usePlatformNavigation();
  const params = usePlatformParams();
  const currentSort = params.queryParams?.sort || 'id';
  const sortedContent = [...content].sort((a, b) => a[currentSort] - b[currentSort]);
  const currentLang = i18n.language;

  const items = useMemo(
    () => [
      { label: t('listView:id'), value: 'id' },
      { label: t('listView:score'), value: 'score' }
    ],
    [t]
  );

  const handleSortChange = itemValue => {
    setParams({
      queryParams: {
        sort: itemValue
      }
    });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{t('listView:sortBy')}</Text>
        <View style={{ borderColor: '#ccc', borderWidth: 1, marginLeft: 16 }}>
          <PickerComponent onSortChange={handleSortChange} currentSort={currentSort} items={items} />
        </View>
      </View>
      <View style={{ justifyContent: 'space-around', alignSelf: 'stretch', alignItems: 'stretch' }}>
        {sortedContent.map(({ id, translations, score }) => (
          <View
            style={{ flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 32, paddingRight: 32 }}
            key={id}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>#{id}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>{translations[currentLang].title}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>{score} / 10</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <LinkButton path="/listItem/:id" params={{ id }} title={t('listView:viewButton', { id: id })} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
