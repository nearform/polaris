import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import StoryPage, {
  DocText,
  DocSection,
  DocItem,
  DocCode,
  DocExternalLink,
  InlineCode,
  PropTable,
  StyleList,
  TextList,
  ThemeSwitcher
} from 'storybook/story-components'

import Button from '../'

const render = (
  <Button
    onPress={action('Button Pressed')}
    title={text('text', 'A button with a title')}
  />
)

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Button component"
      url="components/atoms/button"
      storyFn={storyFn}
    >
      An example story for a button
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('With title', () => (
    <DocItem
      sectionTitle="With title"
      name="title"
      description="The title to be used for the buttons content"
      typeInfo="string"
      required
      example={{
        render,
        code:
          '<Button title="A button with a title" onPress={handleButtonPress}>'
      }}
    />
  ))
  .add('With onPress', () => (
    <DocItem
      sectionTitle="With onPress"
      name="onPress"
      description="Callback for button press"
      typeInfo="func"
      required
      example={{
        render,
        code: '<Button title="A button" onPress={handleButtonPress}>'
      }}
    />
  ))
  .add('Themed Button', () => (
    <DocSection title="Themed Button">
      <ThemeSwitcher />
      <Button title="Themed button" onPress={action('Button Pressed')} />
    </DocSection>
  ))
  .add('An example external link', () => (
    <DocSection title="An example external link">
      <DocExternalLink href="http://example.com">
        A link to an external resource
      </DocExternalLink>
      <DocText>
        Note: @storybook/addon-links is incompatible with
        @storybook/react-native and so internal storybook links are not possible
        at present.
      </DocText>
    </DocSection>
  ))
  .add('An example StyleList', () => (
    <DocSection title="An example external StyleList">
      <DocText>
        Use to display type information for classes/functions that are not React
        components
      </DocText>
      <StyleList
        types={[
          { label: 'Item 1', name: 'Name 1', typeInfo: 'Some Type Info' },
          { label: 'Item 2', name: 'Name 2', typeInfo: 'Some Type Info' },
          { label: 'Item 3', name: 'Name 3', typeInfo: 'Some Type Info' }
        ]}
      ></StyleList>
    </DocSection>
  ))
  .add('An example ItemList', () => (
    <DocSection title="An example ItemList">
      <DocText>A plain text item list example</DocText>
      <TextList
        items={[
          'Item 1',
          'A multiline list item requires a lot of text in order for it to loop onto the following line',
          'Item 3'
        ]}
      ></TextList>
    </DocSection>
  ))
  .add('An example propTable', () => (
    <DocSection title="An example propTable">
      <DocText>
        Alternatively, a single story can include a prop table to cover all
        options at once
      </DocText>
      <PropTable
        propData={[
          { name: 'title', type: 'string', required: true },
          { name: 'onPress', type: 'func', required: true },
          { name: 'color', type: 'string', required: false }
        ]}
      />
      <DocItem
        example={{
          render,
          code: '<Button title="A red button" onPress={handleButtonPress}>'
        }}
      />
    </DocSection>
  ))
  .add('An example code section', () => (
    <DocSection>
      <DocText>Code sections can be included independently of DocItem</DocText>
      <DocCode
        code={`
<Button
  title="A title for a button"
  onPress={someHandler}
  color="teal">
       `}
      />
      <DocText>
        Note: new lines and spaces at the start and end are trimmed
      </DocText>
      <DocText>
        Inline code can be inserted with{' '}
        <InlineCode
          code={`<InlineCode code={\`<Button title="A title" />\`} />`}
        />
      </DocText>
    </DocSection>
  ))
