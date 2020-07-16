import React from 'react';
import { StyleSheet, Picker, Platform } from 'react-native';
import propTypes from './prop-types';

const PickerSheet = ({ onValueChange, styles = defaultStyles, currentOption, testID, options }) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <Picker
      selectedValue={currentOption?.value}
      style={styles.picker}
      onValueChange={onValueChange}
      testID={testID}
      accessibilityLabel={isAndroid ? testID : null}
    >
      {options.map(option => (
        <Picker.Item label={option.label || option.value} value={option.value} key={option.value} />
      ))}
    </Picker>
  );
};

PickerSheet.propTypes = propTypes;
export default PickerSheet;

const defaultStyles = StyleSheet.create({
  picker: {
    minWidth: 150
  }
});
