import React from 'react';
import { MemoryRouter } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import i18n from 'services/i18n/';
import StoryPage, { DocText, Description, DocItem } from 'storybook/story-components';

import Link from '../';

export default {
  component: Link,
  title: 'Atoms/Link',
  decorators: [
    storyFn => (
      <StoryPage title="Link With Text" url="components/atoms/link">
        <Description>
          <DocText>Text Link description</DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const linkWithText = () => (
  <DocItem
    example={{
      render: () => (
        <I18nextProvider i18n={i18n}>
          <MemoryRouter>
            <Link title={'Text Link'} path={'/test'} />
          </MemoryRouter>
        </I18nextProvider>
      )
    }}
  />
);
