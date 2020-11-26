import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, {
  DocSection,
  DocCode,
  DocText,
  InlineCode,
  DocExternalLink,
  DocItem,
  StyleList,
  PropTable,
  ThemeSwitcher
} from 'storybook/story-components'
import { View } from 'react-native'

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<DocItem>"
      url="storybook/story-components/doc-item"
      storyFn={storyFn}
      screens={[{ name: '/doc-item' }]}
    >
      Utility for documenting a component
    </StoryPage>
  ))

  .add('<DocItem>', () => {
    return (
      <DocSection>
        <DocText>you can provide basic info, render, and code example</DocText>
        <PropTable
          propData={[
            { name: 'sectionTitle', type: 'string', required: false },
            { name: 'name', type: 'func', required: false },
            { name: 'description', type: 'string', required: false },
            { name: 'typeInfo', type: 'string', required: false },
            { name: 'example', type: '{ render,\n code }', required: false },
            { name: 'label', type: 'string', required: false },
            { name: 'required', type: 'string', required: false },
            { name: 'defaultValue', type: 'string', required: false }
          ]}
        />
        <DocCode
          code={`
<DocItem
sectionTitle="Section title"
name="propName"
description="The title to be used for the example"
typeInfo="string"
required
example={{
  render:<DocText>test</DocText>,
  code:
    '<DocText>test</DocText>'
  }}
/>
      `}
        />

        <DocSection title="Example:">
          <DocItem
            sectionTitle="Section title"
            name="propName"
            description="The title to be used for the example"
            typeInfo="string"
            required
            example={{
              render: <DocText>test</DocText>,
              code: '<DocText>test</DocText>'
            }}
          />
        </DocSection>
      </DocSection>
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<DocSection>"
      url="storybook/story-components/doc-section"
      storyFn={storyFn}
      screens={[{ name: '/doc-section' }]}
    >
      A Document section block.
    </StoryPage>
  ))
  .add('<DocSection>', () => {
    return (
      <DocItem
        name="title"
        typeInfo="string"
        required
        example={{
          render: (
            <DocSection title="Title">
              <DocText>Encapuslate story docs</DocText>
            </DocSection>
          ),
          code: `
<DocSection title="Title">
  <DocText>
    Encapuslate story docs
  </DocText>
</DocSection>
        `
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<DocText>"
      url="storybook/story-components/doc-text"
      storyFn={storyFn}
      screens={[{ name: '/doc-text' }]}
    >
      A document text block
    </StoryPage>
  ))
  .add('<DocText>', () => {
    return (
      <DocItem
        example={{
          render: <DocText>Some text</DocText>,
          code: `<DockText>Some text</DockText>`
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<DocCode>"
      url="storybook/story-components/doc-code"
      storyFn={storyFn}
      screens={[{ name: '/doc-code' }]}
    >
      A Document code block
    </StoryPage>
  ))
  .add('<DocCode>', () => {
    return (
      <DocSection>
        <DocItem
          name="code"
          description="Code sections can be included independently of DocItem"
          typeInfo="string"
          required
          example={{
            render: (
              <DocCode
                code={`
<Button
  title="A title for a button"
  onPress={someHandler}
  color="teal">`}
              />
            ),
            code: `
<DocCode
  code={${`
    <Button
      title="A title for a button"
      onPress={someHandler}
      color="teal">
    `}}
/>`
          }}
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
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<InlineCode>"
      url="storybook/story-components/inline-code"
      storyFn={storyFn}
      screens={[{ name: '/inline-code' }]}
    >
      Inline code block
    </StoryPage>
  ))
  .add('<InlineCode>', () => {
    return (
      <DocItem
        name="code"
        typeInfo="string"
        required
        example={{
          render: <InlineCode code={`inline-code example`} />,
          code: `<InlineCode code={'inline-code example'}/>`
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<DocExternalLink>"
      url="storybook/story-components/doc-external-link"
      storyFn={storyFn}
      screens={[{ name: '/inline-code' }]}
    >
      A link to an external resource
    </StoryPage>
  ))
  .add('<DocExternalLink>', () => {
    return (
      <DocItem
        sectionTitle="External link"
        name="href"
        description={`Note: @storybook/addon-links is incompatible with @storybook/react-native and so internal storybook links are not possible at present.`}
        typeInfo="string"
        required
        example={{
          render: (
            <DocExternalLink href="http://example.com">
              A link to an external resource
            </DocExternalLink>
          ),
          code: `<DocExternalLink href="http://example.com">A link to an external resource</DocExternalLink>`
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<PropTable>"
      url="storybook/story-components/prop-table"
      storyFn={storyFn}
      screens={[{ name: '/prop-table' }]}
    >
      Table to list component properties
    </StoryPage>
  ))
  .add('<PropTable>', () => {
    return (
      <DocItem
        sectionTitle="External link"
        name="propData"
        typeInfo="[{ name: 'propertyName', type: 'string', required: false }]"
        required
        example={{
          render: (
            <PropTable
              propData={[
                { name: 'propertyName', type: 'string', required: false }
              ]}
            />
          ),
          code: `
<PropTable
  propData={[
    { name: 'propertyName', type: 'string', required: false },
  ]}
/>
          `
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<StyleList>"
      url="storybook/story-components/style-list"
      storyFn={storyFn}
      screens={[{ name: '/style-list' }]}
    >
      An example external StyleList
    </StoryPage>
  ))
  .add('<StyleList>', () => {
    return (
      <DocItem
        sectionTitle="Style list"
        name="types"
        description="Use to display type information for classes/functions that are not React components"
        typeInfo="{ label: 'Item 1', name: 'Name 1', typeInfo: 'Some Type Info' }"
        required
        example={{
          render: (
            <StyleList
              types={[
                { label: 'Item 1', name: 'Name 1', typeInfo: 'Some Type Info' },
                { label: 'Item 2', name: 'Name 2', typeInfo: 'Some Type Info' },
                { label: 'Item 3', name: 'Name 3', typeInfo: 'Some Type Info' }
              ]}
            />
          ),
          code: `
<StyleList
  types={[
    { label: 'Item 1', name: 'Name 1', typeInfo: 'Some Type Info' },
    { label: 'Item 2', name: 'Name 2', typeInfo: 'Some Type Info' },
    { label: 'Item 3', name: 'Name 3', typeInfo: 'Some Type Info' }
  ]}
/>
          `
        }}
      />
    )
  })

storiesOf('Storybook Helpers/Components', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="<ThemeSwitcher>"
      url="storybook/story-components/theme-switcher"
      storyFn={storyFn}
      screens={[{ name: '/theme-switcher' }]}
    >
      Theme switcher
    </StoryPage>
  ))
  .add('<ThemeSwitcher>', () => {
    return (
      <DocSection>
        <DocItem
          sectionTitle="Theme switcher"
          description="Displays a toggle to switch the theme on/off"
          example={{
            render: <ThemeSwitcher />,
            code: '<ThemeSwitcher />'
          }}
        />
      </DocSection>
    )
  })
