import React from 'react'
import { Platform, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import StoryPage, { DocItem } from 'storybook/story-components'

import Navigation from '../'

storiesOf('Organisms/Navigation Header', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Navigation Header"
      url="components/atoms/button"
      storyFn={storyFn}
      screens={[{ name: '/' }, { name: '/listView' }, { name: '/settings' }]}
      width={Platform.OS === 'web' ? 900 : 380}
    >
      Navigation Header full description.
    </StoryPage>
  ))
  .add('Default', () => (
    <DocItem
      example={{
        render: (
          <View style={{ height: Platform.OS === 'web' ? 100 : 60 }}>
            <Navigation />
          </View>
        )
      }}
    />
  ))
