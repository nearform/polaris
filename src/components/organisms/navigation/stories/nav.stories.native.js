import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text, View } from 'react-native';
import { SafeView } from 'storybook/story-components-native';

// import TabBar from '../nav.native';

storiesOf('Tab Bar', module)
  .addDecorator(storyFn => (
    <SafeView>
      {storyFn()}
      <View>
        <Text style={{ textAlign: 'center' }}>Tab Bar Navigation</Text>
      </View>
    </SafeView>
  ))
  // .add('with 3 items', () => <TabBar />); fix me
  .add('with 3 items', () => <View />);
