import React from 'react'
import { renderWithContext, fireEvent } from 'utils/test-utils'

import PickerSheet from '../index'

const mocks = {
  onValueChange: jest.fn(),
  options: ['a', 'b', 'c', 'd'].map(item => ({ value: item })),
  currentOption: { value: 'a' }
}

describe('Picker Sheet', () => {
  it('calls onValueChange function on value change', () => {
    const { onValueChange, options, currentOption } = mocks
    const { getByTestId } = renderWithContext(
      <PickerSheet
        onValueChange={onValueChange}
        options={options}
        currentOption={currentOption}
        testID="picker"
      />
    )

    const picker = getByTestId('picker')
    fireEvent.change(picker, 'change', options[1].value)
    expect(onValueChange).toBeCalled()
  })
})
