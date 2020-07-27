import React from 'react'
import { MemoryRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from 'services/i18n/'
import StoryPage, { DocItem } from 'storybook/story-components'
import { withKnobs, text } from '@storybook/addon-knobs'

import Link from '../'

export default {
  component: Link,
  title: 'Atoms/Link',
  decorators: [
    withKnobs,
    storyFn => (
      <StoryPage
        title="Link With Text"
        url="components/atoms/link"
        storyFn={storyFn}
      >
        Text Link description
      </StoryPage>
    )
  ]
}

export const linkWithText = () => (
  <DocItem
    example={{
      render: (
        <I18nextProvider i18n={i18n}>
          <MemoryRouter>
            <Link title={text('text', 'Text Link')} path={'/test'} />
          </MemoryRouter>
        </I18nextProvider>
      )
    }}
  />
)
