import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, {
  DocItem,
  DocSection,
  PropTable
} from 'storybook/story-components'
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
  .add('Default', () => (
    <DocSection>
      <PropTable
        propData={[
          {
            name: 'title',
            type: 'string',
            required: true,
            description: 'The link text'
          },
          {
            name: 'path',
            type: 'string',
            required: true,
            description: 'The linked path/screen'
          }
        ]}
      />
      <DocItem
        example={{
          render: (
            <Link title={text('text', 'Text Link')} path={'/linked-screen'} />
          ),
          code: `<Link title="Text Link" path="/linked-screen" />`
        }}
      />
    </DocSection>
  ))
