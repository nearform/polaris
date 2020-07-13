import React from 'react';
import { StyleSheet, Picker } from 'react-native';

// React Native's own picker is deprecated, this is recommended and supported in expo SDK 38
// Import from @react-native-community/picker/js/Picker to avoid warnings due to
// https://github.com/react-native-community/react-native-picker/issues/109
// remove because storybook does not work with it
// https://github.com/react-native-community/react-native-picker/issues/45#issuecomment-633163973
// import { Picker } from '@react-native-community/picker';

import propTypes from './prop-types';

const PickerSheet = ({ onValueChange, styles = defaultStyles, currentOption, testID, options }) => (
  <Picker selectedValue={currentOption?.value} style={styles.picker} onValueChange={onValueChange} testID={testID}>
    {options.map(option => (
      <Picker.Item label={option.label || option.value} value={option.value} key={option.value} />
    ))}
  </Picker>
);

PickerSheet.propTypes = propTypes;
export default PickerSheet;

const defaultStyles = StyleSheet.create({
  picker: {
    minWidth: 150
  }
});
