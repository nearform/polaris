import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontFamily } from './platform-styles';

const InlineCode = ({ code }) => <Text style={styles.code}>{code}</Text>;

const styles = StyleSheet.create({
  code: {
    fontFamily: fontFamily.mono
  }
});

export default InlineCode;
