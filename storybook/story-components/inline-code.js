import React from 'react';
import T from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { fontFamily } from './helpers/platform-styles';

/**
 * Display an inline code snippet
 */
const InlineCode = ({ code }) => <Text style={styles.code}>{code}</Text>;

const styles = StyleSheet.create({
  code: {
    fontFamily: fontFamily.mono
  }
});

InlineCode.propTypes = {
  code: T.string.isRequired
};

export default InlineCode;
