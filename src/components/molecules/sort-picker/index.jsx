import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export const SortPickerComponent = ({ onSortChange: handleSortChange, currentSort, items = [] }) => {
  return (
    <Picker onValueChange={handleSortChange} selectedValue={currentSort} style={styles.picker}>
      {items.map(({ label, value }) => (
        <Picker.Item label={label} value={value} key={value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 128,
    height: 48,
    backgroundColor: 'white'
  }
});
