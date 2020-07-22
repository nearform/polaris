import React from 'react';
import { Picker } from 'react-native';
import { css } from '@emotion/native';

// React Native's own picker is deprecated, this is recommended and supported in expo SDK 38
// Import from @react-native-community/picker/js/Picker to avoid warnings due to
// https://github.com/react-native-community/react-native-picker/issues/109
// remove because storybook does not transpile the ES6 on import
// https://github.com/react-native-community/react-native-picker/issues/45#issuecomment-633163973
// import { Picker } from '@react-native-community/picker';

import propTypes from './prop-types';

const defaultStyle = css`
  min-width: 150;
`;

const PickerSheet = ({ onValueChange, style = defaultStyle, currentOption, testID, options }) => (
  <Picker selectedValue={currentOption?.value} style={style} onValueChange={onValueChange} testID={testID}>
    {options.map(option => (
      <Picker.Item label={option.label || option.value} value={option.value} key={option.value} />
    ))}
  </Picker>
);

PickerSheet.propTypes = propTypes;
export default PickerSheet;
