import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text, View } from 'react-native'

// import TabBar from '../nav.native';

storiesOf('Tab Bar', module)
  .addDecorator(storyFn => (
    <View>
      {storyFn()}
      <View>
        <Text style={{ textAlign: 'center' }}>Tab Bar Navigation</Text>
      </View>
    </View>
  ))
  // .add('with 3 items', () => <TabBar />); fix me
  .add('with 3 items', () => <View />)
