import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import StoryPage, { DocItem, InlineCode } from 'storybook/story-components'

import Button from '../'

const render = () => (
  <Button
    onPress={action('Button Pressed')}
    title={text('text', 'Web Button')}
  />
)

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [
    storyFn => (
      <StoryPage
        title="Web Button"
        url="components/atoms/button"
        storyFn={storyFn}
      >
        An example story in a <InlineCode code=".stories.web.js" /> file. This
        story is only visible when exploring storybook on a native device and is
        written in CSF format, yet it uses the same layout helpers from
        <InlineCode code="storybook/story-components" />.
      </StoryPage>
    ),
    withKnobs
  ]
}

export const webOnly = () => (
  <DocItem
    name="title"
    sectionTitle="webOnly"
    description="The title to be used for the buttons content"
    typeInfo="string"
    required
    example={{
      render,
      code: '<Button title="Web Button" onPress={handleButtonPress}>'
    }}
  />
)
