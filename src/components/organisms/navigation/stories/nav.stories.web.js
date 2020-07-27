import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'services/i18n/'
import StoryPage, { DocItem } from 'storybook/story-components'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from 'store'

import Header from '../nav'

export default {
  component: Header,
  title: 'Organisms/Navigation Header',
  decorators: [
    storyFn => (
      <StoryPage
        title="Navigation Header"
        url="components/atoms/button"
        storyFn={storyFn}
        width={900}
      >
        Navigation Header full description.
      </StoryPage>
    )
  ]
}

const render = () => (
  <ThemeProvider>
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </I18nextProvider>
  </ThemeProvider>
)

export const header = () => (
  <DocItem
    example={{
      render
    }}
  />
)
