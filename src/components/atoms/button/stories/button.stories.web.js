import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../';

import StoryPage, { DocText, Description, DocSection, DocItem } from 'storybook/story-components';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [
    storyFn => (
      <StoryPage title="Full Width Button" url="components/atoms/button">
        <Description>
          <DocText>Full width button description</DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const fullWidth = () => (
  <DocSection title="Button">
    <DocItem
      name="title"
      typeInfo="string"
      description="The title to be used for the buttons content"
      example={{
        render: () => <Button onPress={action('Clicked Button')} title={'Full Width Button Example'} />
      }}
    />
  </DocSection>
);
