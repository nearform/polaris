import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, { DocItem } from 'storybook/story-components'
import { withKnobs, text } from '@storybook/addon-knobs'

import Link from '../'

storiesOf('Atoms/Link', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Link With Text"
      url="components/atoms/link"
      storyFn={storyFn}
      screens={[{ name: '/linked-screen' }]}
    >
      An internal link to another page/screen in the app
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('Plain Link', () => (
    <DocItem
      sectionTitle="Plain Link"
      example={{
        render: (
          <Link title={text('text', 'Text Link')} path={'/linked-screen'} />
        )
      }}
    />
  ))
