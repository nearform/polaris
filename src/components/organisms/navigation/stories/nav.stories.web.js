import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'services/i18n/';
import StoryPage, { DocText, Description, DocItem } from 'storybook/story-components';
import { MemoryRouter } from 'react-router';
import { UIProvider } from 'store/ui/context';

import Header from '../nav';

export default {
  component: Header,
  title: 'Organisms/Navigation Header',
  decorators: [
    storyFn => (
      <StoryPage title="Navigation Header" url="components/atoms/button" width={900}>
        <Description>
          <DocText>Navigation Header full description.</DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const header = () => (
  <DocItem
    example={{
      render: () => (
        <UIProvider>
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </I18nextProvider>
        </UIProvider>
      )
    }}
  />
);
