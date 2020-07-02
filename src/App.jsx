import React from 'react';
import { YellowBox } from 'react-native';

import Layout from 'components/templates/layout';
import Route from 'components/templates/route';
import { UIProvider } from 'store/ui/context';

// Mute multiple known warnings to display on device. Those warning messages coming from React Native components and need to be fixed by RN team
YellowBox.ignoreWarnings(['Animated', 'Warning: componentWill', 'Possible Unhandled Promise']);

const App = () => (
  <UIProvider>
    <Route />
  </UIProvider>
);

export default App;
