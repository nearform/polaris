import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../';
import 'storybook/index.css';

import StoryPage, { DocText, Description, DocSection, DocItem } from 'storybook/story-components';

export default {
  component: Button,
  title: 'Button Test',
  decorators: [
    storyFn => (
      <StoryPage title="Button Test" url="components/atoms/button">
        <Description>
          <DocText>
            The badge component is displayed next to icons. For example, it can be used to display the amount of unread
            messages.
          </DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const textButton = () => (
  <DocSection title="Button">
    <DocItem
      name="label"
      typeInfo="?string"
      description="The label to be used for the buttons content"
      example={{
        render: () => <Button onPress={action('Clicked Button')} title={'A Textual Button'} />
      }}
    />
  </DocSection>
);
