import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { size, fontFamily } from './platform-styles';

const removeStartAndEndNewLines = str => str.replace(/^\s+|\s+$/g, '');

const DocCode = ({ code }) => <Text style={styles.code}>{removeStartAndEndNewLines(code)}</Text>;

const styles = StyleSheet.create({
  code: {
    fontFamily: fontFamily.mono,
    lineHeight: size.large,
    padding: size.small,
    marginTop: size.large,
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#eee'
  }
});

export default DocCode;
