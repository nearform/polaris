import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { size, fontFamily } from './platform-styles';

const DocCode = ({ code }) => <Text style={styles.code}>{code.trim()}</Text>;

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
