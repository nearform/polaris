import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import StoryPage, { DocItem, InlineCode } from 'storybook/story-components'

import Button from '../'

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Native Button"
      url="components/atoms/button"
      storyFn={storyFn}
    >
      An example story in a <InlineCode code=".native.js" /> file. This story is
      only visible when exploring storybook on a native device
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('Native Only', () => (
    <DocItem
      sectionTitle="Native Only"
      name="title"
      description="The title to be used for the buttons content"
      typeInfo="string"
      required
      example={{
        render: (
          <Button
            onPress={action('Button Pressed')}
            title={text('text', 'Native Button')}
          />
        ),
        code: '<Button title="Native Button" onPress={handleButtonPress}>'
      }}
    />
  ))
