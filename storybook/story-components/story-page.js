import React from 'react';

import DocText from './doc-text';
import insertBetween from './insert-between';
import { StyleSheet, View } from 'react-native';
import { size } from './platform-styles';

import { ThemeProvider } from 'store';

const Title = ({ children }) => (
  <DocText accessibilityRole="header" style={styles.title}>
    {children}
  </DocText>
);

export const Description = ({ children }) => (
  <DocText style={styles.description}>
    {insertBetween(
      () => (
        <Divider key={Math.random()} />
      ),
      React.Children.toArray(children)
    )}
  </DocText>
);

const Divider = () => <View style={styles.divider} />;

const StoryPage = ({ children, description, title, width }) => (
  <ThemeProvider>
    <View style={[styles.root, { width }]}>
      <Title>{title}</Title>
      {description}
      {children}
    </View>
  </ThemeProvider>
);

const styles = StyleSheet.create({
  root: {
    padding: size.normal,
    flex: 1,
    flexBasis: 'auto'
  },
  divider: {
    height: size.large
  },
  title: {
    fontSize: size.xlarge
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: size.large,
    marginTop: size.xsmall
  },
  link: {
    color: '#1B95E0',
    fontSize: size.normal,
    marginTop: size.xsmall,
    textDecorationLine: 'underline'
  }
});

export default StoryPage;
