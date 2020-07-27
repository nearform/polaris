import React, { useState } from 'react'
import StoryPage, { DocItem } from 'storybook/story-components'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'

import PickerSheet from '../'

const options = [
  { value: '1', label: 'Picker Item 1' },
  { value: '2', label: 'Picker Item 2' },
  { value: '3', label: 'Picker Item 3' },
  { value: '4', label: 'Picker Item 4' },
  { value: '5', label: 'Picker Item 5' },
  { value: '6', label: 'Picker Item 6' }
]

storiesOf('Atoms/Picker Sheet', module)
  .addDecorator(storyFn => (
    <StoryPage
      title="Picker Sheet"
      url="components/atoms/picker-sheet"
      storyFn={storyFn}
    >
      The component to pick values
    </StoryPage>
  ))
  .add('With Items', () => {
    const [currentOption, setCurrentOption] = useState(options[0])
    const handlePickerChange = value => {
      const selectedOption = options.find(option => option.value === value)
      setCurrentOption(selectedOption)
      action('onValueChange')(selectedOption.label)
    }
    return (
      <DocItem
        example={{
          render: (
            <PickerSheet
              onValueChange={handlePickerChange}
              currentOption={currentOption}
              options={options}
            />
          )
        }}
      />
    )
  })
