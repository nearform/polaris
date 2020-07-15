import React from 'react';

import DocText from './doc-text';
import { StyleSheet, View } from 'react-native';

const SectionTitle = ({ children }) => (
  <DocText accessibilityRole="heading" aria-level="2" style={styles.sectionTitle}>
    {children}
  </DocText>
);

const DocSection = ({ children, title }) => (
  <View>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </View>
);

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: '1.3125rem',
    marginBottom: '1.3125rem',
    fontWeight: 'bold'
  }
});

export default DocSection;
