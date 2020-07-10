import React from 'react';
import StoryPage, { DocItem } from 'storybook/story-components';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import Link from '../';

export default {
  component: Link,
  title: 'Link',
  decorators: [
    storyFn => (
      <StoryPage title="Link With Text" url="components/atoms/link">
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const linkWithText = () => (
  <DocItem
    example={{
      render: () => (
        <MemoryRouter>
          <Link onPress={action('Clicked Link')} title={'Link'} titleAsProp={'Link'} />
        </MemoryRouter>
      )
    }}
  />
);
