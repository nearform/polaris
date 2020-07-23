import React from 'react';
import T from 'prop-types';
import DocText from './doc-text';
import { StyleSheet, View } from 'react-native';
import { size } from './helpers/platform-styles';

const SectionTitle = ({ children }) => (
  <DocText accessibilityRole="header" aria-level="2" style={styles.sectionTitle}>
    {children}
  </DocText>
);

/**
 * A top level container for wrapping sections of stories
 */
const DocSection = ({ children, title }) => (
  <View style={styles.section}>
    {title !== undefined && <SectionTitle>{title}</SectionTitle>}
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginTop: size.small
  },
  sectionTitle: {
    fontSize: size.large,
    marginBottom: size.xsmall,
    fontWeight: 'bold'
  }
});

DocSection.propTypes = {
  children: T.node.isRequired,
  title: T.string
};

export default DocSection;
