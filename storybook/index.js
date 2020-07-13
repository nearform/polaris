import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default || require('react-native').AsyncStorage || null
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
