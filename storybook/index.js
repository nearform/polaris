import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default || require('react-native').AsyncStorage || null
});

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

// The StatusBar renders in the same space as the storybook unless we account for it.
// SafeAreaView handles it for iOS. The custom style handles Android
const SafeStorybook = () => (
  <SafeAreaView style={styles.AndroidSafeArea}>
    <StorybookUIRoot />
  </SafeAreaView>
);

AppRegistry.registerComponent('%APP_NAME%', () => SafeStorybook);

export default SafeStorybook;
