import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

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

