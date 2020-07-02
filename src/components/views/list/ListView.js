import * as React from 'react';
import { Text, View, StatusBar, Picker } from 'react-native';
import usePlatformNavigation from 'hooks/usePlatformNavigation';
import usePlatformParams from 'hooks/usePlatformParams';
import LinkButton from 'components/atoms/link-button';

import content from './content';

export const ListView = () => {
  const { setParams } = usePlatformNavigation();
  const params = usePlatformParams();
  const currentSort = params.queryParams?.sort || 'id';
  const sortedContent = [...content].sort((a, b) => a[currentSort] - b[currentSort]);

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
      <Text>Sort by:</Text>
      <Picker
        onValueChange={handleSortChange}
        selectedValue={currentSort}
        style={{
          width: 128,
          height: 48,
          backgroundColor: 'white'
        }}
      >
        <Picker.Item label="ID" value="id" />
        <Picker.Item label="Score" value="score" />
      </Picker>
      <View style={{ justifyContent: 'space-around', alignSelf: 'stretch', alignItems: 'stretch' }}>
        {sortedContent.map(({ id, title, score }) => (
          <View
            style={{ flexDirection: 'row', alignItems: 'center', height: 48, paddingLeft: 32, paddingRight: 32 }}
            key={id}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>#{id}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>{title}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <Text>{score} / 10</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 48 }}>
              <LinkButton path="/listItem/:id" params={{ id }} title={`View ${id}`} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
