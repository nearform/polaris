import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'

// Explictly target .web until https://github.com/nearform/polaris/issues/42 is done
import PickerSheet from '../index'

const mocks = {
  onValueChange: jest.fn(),
  options: ['a', 'b', 'c', 'd'].map(item => ({ value: item })),
  currentOption: { value: 'a' }
}

describe('Picker Sheet', () => {
  it('calls onValueChange function on value change', () => {
    const { onValueChange, options, currentOption } = mocks
    const { getByTestId } = render(
      <PickerSheet
        onValueChange={onValueChange}
        options={options}
        currentOption={currentOption}
        testID="picker"
      />
    )

    const picker = getByTestId('picker')
    fireEvent(picker, 'valueChange', options[1].value)
    expect(onValueChange).toBeCalled()
  })
})
