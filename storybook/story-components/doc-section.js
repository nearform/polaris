import React from 'react';
import { size } from './platform-styles';

import DocText from './doc-text';
import { StyleSheet, View } from 'react-native';

const SectionTitle = ({ children }) => (
  <DocText accessibilityRole="header" aria-level="2" style={styles.sectionTitle}>
    {children}
  </DocText>
);

const DocSection = ({ children, title }) => (
  <View style={styles.section}>
    {!!title && <SectionTitle>{title}</SectionTitle>}
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

export default DocSection;
