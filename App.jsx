import React, { Component } from 'react';
import { initialState, Provider, AppState } from './src/store';
import { YellowBox } from 'react-native';

import { UIProvider } from './src/store/ui/context';
import App from './src';

// Mute multiple known warnings to display on device. Those warning messages coming from React Native components and need to be fixed by RN team
YellowBox.ignoreWarnings(['Animated', 'Warning: componentWill', 'Possible Unhandled Promise']);

const Main = () => {
	return (
		<UIProvider>
			<App />
		</UIProvider>
	);
};

export default Main;
