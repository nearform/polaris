import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, { DocItem } from 'storybook/story-components'

import LanguageSelector from '../'

storiesOf('Molecules/Language Selector', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Language Selector"
      url="components/molecules/language-selector"
      storyFn={storyFn}
    >
      The component to enable the user to select a language
    </StoryPage>
  ))
  .add('Default', () => (
    <DocItem
      example={{
        render: <LanguageSelector />
      }}
    />
  ))
