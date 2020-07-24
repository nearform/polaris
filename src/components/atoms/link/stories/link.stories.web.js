import React from 'react'
import { MemoryRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from 'services/i18n/'
import StoryPage, { DocItem } from 'storybook/story-components'

import Link from '../'

const render = () => (
  <I18nextProvider i18n={i18n}>
    <MemoryRouter>
      <Link title={'Text Link'} path={'/test'} />
    </MemoryRouter>
  </I18nextProvider>
)

export default {
  component: Link,
  title: 'Atoms/Link',
  decorators: [
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
      render
    }}
  />
)
