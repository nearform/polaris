import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

export const ViewTwo = () => (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<StatusBar style="auto" />
		<Text>View Two Screen</Text>
	</View>
);
