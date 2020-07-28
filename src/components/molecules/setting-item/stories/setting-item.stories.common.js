import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import StoryPage, {
  DocItem,
  DocSection,
  PropTable
} from 'storybook/story-components'
import PickerSheet from 'components/atoms/picker-sheet'

import SettingItem from '../'

storiesOf('Molecules/Setting Item', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Setting Item"
      url="components/molecules/setting-item"
      storyFn={storyFn}
    >
      Display a user setting
    </StoryPage>
  ))
  .add('Default', () => {
    const [selected, setSelected] = useState('option2')
    return (
      <DocSection>
        <PropTable
          propData={[
            {
              name: 'label',
              type: 'string',
              required: true
            },
            {
              name: 'value',
              type: 'node',
              required: true,
              description: 'The input component for editing a setting'
            }
          ]}
        />
        <DocItem
          example={{
            render: (
              <SettingItem
                label="A User Setting"
                value={
                  <PickerSheet
                    onValueChange={value => {
                      setSelected(value)
                    }}
                    currentOption={{ value: selected }}
                    options={[
                      { label: 'Option 1', value: 'option1' },
                      { label: 'Option 2', value: 'option2' },
                      { label: 'Option 3', value: 'option3' }
                    ]}
                  />
                }
              />
            ),
            code: `<SettingItem label="A User Setting" value={Component} />`
          }}
        />
      </DocSection>
    )
  })
