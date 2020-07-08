import React from 'react';

import DocText from './doc-text';
import insertBetween from './insert-between';
import { StyleSheet, View } from 'react-native';

const Title = ({ children }) => (
  <DocText accessibilityRole="heading" style={styles.title}>
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

const StoryPage = ({ children, description, title }) => (
  <View style={styles.root}>
    <Title>{title}</Title>
    {description}
    {children}
  </View>
);

const styles = StyleSheet.create({
  root: {
    padding: '1rem',
    flex: 1,
    flexBasis: 'auto'
  },
  divider: {
    height: '1.3125rem'
  },
  title: {
    fontSize: '2rem'
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    marginTop: 'calc(0.5 * 1.3125rem)',
    marginBottom: 'calc(1.5 * 1.3125rem)'
  },
  link: {
    color: '#1B95E0',
    fontSize: '1rem',
    marginTop: 'calc(0.5 * 1.3125rem)',
    textDecorationLine: 'underline'
  }
});

export default StoryPage;
