import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, {
  DocItem,
  DocSection,
  PropTable
} from 'storybook/story-components'
import { withKnobs, text } from '@storybook/addon-knobs'

import LinkButton from '../'

storiesOf('Molecules/Link Button', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Link Button"
      url="components/molecules/link-button"
      storyFn={storyFn}
      screens={[{ name: '/linked-screen' }]}
    >
      A link displayed as a button
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
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
              <LinkButton
                title={text('text', 'Text Link')}
                path={'/linked-screen'}
              />
            ),
            code: `<LinkButton title="Text Link" path="/linked-screen" />`
          }}
        />
      </DocSection>
    )
  })
