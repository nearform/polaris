import React, { useState } from 'react';
import StoryPage, { DocItem } from 'storybook/story-components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { I18nextProvider } from 'react-i18next';
import i18n from 'services/i18n/';

import PickerSheet from '../';

const options = [
  { value: '1', label: 'Picker Item 1' },
  { value: '2', label: 'Picker Item 2' },
  { value: '3', label: 'Picker Item 3' },
  { value: '4', label: 'Picker Item 4' },
  { value: '5', label: 'Picker Item 5' },
  { value: '6', label: 'Picker Item 6' }
];

storiesOf('Atoms/Picker Sheet', module)
  .addDecorator(storyFn => (
    <StoryPage title="Picker Sheet" url="components/atoms/picker-sheet" storyFn={storyFn}>
      The component to pick values
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('With Items', () => {
    const [currentOption, setCurrentOption] = useState(options[0]);
    const handlePickerChange = value => {
      const selectedOption = options.find(option => option.value === value);
      setCurrentOption(selectedOption);
      action('onValueChange')(selectedOption.label);
    };
    return (
      <I18nextProvider i18n={i18n}>
        <DocItem
          example={{
            render: () => (
              <PickerSheet onValueChange={handlePickerChange} currentOption={currentOption} options={options} />
            )
          }}
        />
      </I18nextProvider>
    );
  });
