import { addDecorator } from '@storybook/react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import '../story-components/index.css';

const styles = StyleSheet.create({
  root: {
    minHeight: '100vh',
    maxWidth: 1280,
    marginHorizontal: 'auto'
  }
});

const centered = renderStory => {
  return <View style={styles.root}>{renderStory()}</View>;
};

addDecorator(centered);
