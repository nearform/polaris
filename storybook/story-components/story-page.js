import React from 'react';
import T from 'prop-types';
import DocText from './doc-text';
import { StyleSheet, View, Text } from 'react-native';
import { size, fontFamily } from './helpers/platform-styles';

import { ThemeProvider } from 'store';

const Title = ({ children }) => (
  <DocText accessibilityRole="header" style={styles.title}>
    {children}
  </DocText>
);

/**
 * Wrapper for all stories in a story file.
 * Apply with .addDecorator when using storiesOf or include in the decorators array
 * if using CSF format.
 * The storyFn must be passed in from the decorators callback.
 */
const StoryPage = ({ title, storyFn, children, url, width }) => (
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

StoryPage.propTypes = {
  title: T.string.isRequired,
  storyFn: T.func.isRequired,
  children: T.node.isRequired,
  url: T.string.isRequired,
  width: T.string
};

export default StoryPage;
