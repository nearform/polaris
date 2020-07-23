import React from 'react';

import DocText from './doc-text';
import { StyleSheet, View, Text } from 'react-native';
import { size, fontFamily } from './platform-styles';

import { ThemeProvider } from 'store';

const Title = ({ children }) => (
  <DocText accessibilityRole="header" style={styles.title}>
    {children}
  </DocText>
);

const StoryPage = ({ children, url, title, storyFn, width }) => (
  <ThemeProvider>
    <View style={[styles.root, { width }]}>
      <Title>{title}</Title>
      <Text style={styles.url}>{url}</Text>
      <Text style={styles.description}>{children}</Text>
      {storyFn()}
    </View>
  </ThemeProvider>
);

const styles = StyleSheet.create({
  root: {
    padding: size.normal,
    flex: 1,
    flexBasis: 'auto'
  },
  title: {
    fontSize: size.xlarge
  },
  url: {
    fontSize: size.small,
    fontFamily: fontFamily.mono
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: size.large,
    marginTop: size.xsmall
  }
});

export default StoryPage;
