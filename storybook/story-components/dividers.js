import React from 'react';
import { StyleSheet, View } from 'react-native';

const DividerHorizontal = () => <View style={styles.horizontalDivider} />;
const DividerVertical = () => <View style={styles.verticalDivider} />;

const styles = StyleSheet.create({
  horizontalDivider: {
    width: 0.6
  },
  verticalDivider: {
    height: 1.3
  }
});

export { DividerHorizontal, DividerVertical };
