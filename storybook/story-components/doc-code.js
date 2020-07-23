import React from 'react';
import T from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { size, fontFamily } from './helpers/platform-styles';

/**
 * Presents a block of code in a story
 * Template literals can be used and will be trimmed to fit
 */
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

DocCode.propTypes = {
  code: T.string.isRequired
};

export default DocCode;
