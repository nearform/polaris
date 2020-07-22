import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native';
import StoryPage, {
  Description,
  DocText,
  DocSection,
  DocItem,
  DocCode,
  DocExternalLink,
  StyleList,
  TextList
} from 'storybook/story-components';

import Button from '../';

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <StoryPage title="Button component" url="components/atoms/button">
      <Description>
        <DocText>An example story for a button</DocText>
      </Description>
      {storyFn()}
    </StoryPage>
  ))
  .add('Button with title', () => (
    <DocSection title="Button">
      <DocItem
        name="title"
        typeInfo="string"
        description={
          <View>
            <DocText>The title to be used for the buttons content</DocText>
            <DocCode>&lt;Button title=&quot;A button with a title&quot;&gt;</DocCode>
          </View>
        }
        example={{
          render: () => <Button onPress={action('Button Pressed')} title="A button with a title" />
        }}
      />
      <DocItem
        name="onPress"
        typeInfo="function"
        description="Callback for button press"
        example={{
          render: () => <Button onPress={action('Button Pressed')} title="A red button" />
        }}
      />
      <DocItem
        name="color"
        typeInfo="string"
        description="The color of the button"
        example={{
          render: () => <Button onPress={action('Button Pressed')} color="red" title="A red button" />
        }}
      />
      <DocCode>Some codes</DocCode>
      <DocExternalLink href="http://example.com">A link to an external resource</DocExternalLink>
      <StyleList
        stylePropTypes={[
          { label: 'Item 1', name: 'Name 1', typeInfo: 'Some Type Info' },
          { label: 'Item 2', name: 'Name 2', typeInfo: 'Some Type Info' },
          { label: 'Item 3', name: 'Name 3', typeInfo: 'Some Type Info' }
        ]}
      ></StyleList>
      <TextList
        items={[
          'Item 1',
          'Item 2 Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo',
          'Item 3'
        ]}
      >
        An Item List
      </TextList>
    </DocSection>
  ));
