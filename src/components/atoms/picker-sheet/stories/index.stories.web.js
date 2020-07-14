import React, { useState } from 'react';
import StoryPage, { DocText, Description, DocItem } from 'storybook/story-components';
import { action } from '@storybook/addon-actions';

import PickerSheet from '../';

const options = [
  { value: '1', label: 'Picker Item 1' },
  { value: '2', label: 'Picker Item 2' },
  { value: '3', label: 'Picker Item 3' },
  { value: '4', label: 'Picker Item 4' },
  { value: '5', label: 'Picker Item 5' },
  { value: '6', label: 'Picker Item 6' }
];

export default {
  component: PickerSheet,
  title: 'Atoms/Picker Sheet',
  decorators: [
    storyFn => (
      <StoryPage title="Picker Sheet" url="components/atoms/picker-sheet">
        <Description>
          <DocText>The component to pick values</DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const WithItems = () => {
  const [currentOption, setCurrentOption] = useState(options[0]);
  const handlePickerChange = value => {
    const selectedOption = options.find(option => option.value === value);
    setCurrentOption(selectedOption);
    action('onValueChange')(selectedOption.label);
  };

  return (
    <DocItem
      example={{
        render: () => <PickerSheet onValueChange={handlePickerChange} currentOption={currentOption} options={options} />
      }}
    />
  );
};
