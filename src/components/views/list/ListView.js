import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/native';
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';
import usePlatformParams from 'utils/hooks/usePlatformParams';
import Container from 'components/atoms/container';
import PickerSheet from 'components/atoms/picker-sheet';
import LinkButton from 'components/molecules/link-button';
import content from './content';

export const ListView = () => {
  const { t, i18n } = useTranslation();
  const { setParams } = usePlatformNavigation();
  const params = usePlatformParams();
  const currentSort = params.queryParams?.sort || 'id';
  const sortedContent = [...content].sort((a, b) => a[currentSort] - b[currentSort]);
  const currentLang = i18n.language;

  const sortOptions = [
    { value: 'id', label: t('listView:id') },
    { value: 'score', label: t('listView:score') }
  ];
  const currentSortOption = sortOptions.find(({ value }) => value === currentSort);

  const handleSortChange = itemValue => {
    setParams({
      queryParams: {
        sort: itemValue
      }
    });
  };
  return (
    <Container>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{t('listView:sortBy')}</Text>
        <View style={{ borderColor: '#ccc', borderWidth: 1, marginLeft: 16 }}>
          <PickerSheet
            onValueChange={handleSortChange}
            currentOption={currentSortOption}
            style={css`
              width: 128;
              height: 48;
              background-color: 'white';
            `}
            options={sortOptions}
          />
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
    </Container>
  );
};
