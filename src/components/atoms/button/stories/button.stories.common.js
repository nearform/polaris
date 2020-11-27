import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import StoryPage, { DocItem, ThemeSwitcher } from 'storybook/story-components'

import Button from '../'

const render = (
  <Button
    onPress={action('Button Pressed')}
    title={text('text', 'A button with a title')}
  />
)

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Button component"
      url="components/atoms/button"
      storyFn={storyFn}
    >
      An example story for a button
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('With title', () => (
    <>
      <DocItem
        sectionTitle="With title"
        name="title"
        description="The title to be used for the buttons content"
        typeInfo="string"
        required
        example={{
          render,
          code:
            '<Button title="A button with a title" onPress={handleButtonPress}>'
        }}
      />
      <ThemeSwitcher />
    </>
  ))
