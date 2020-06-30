import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Home Screen</Text>
		<Button title="Go to View One" onPress={() => navigation.push('ViewOne')} />
		<Button title="Go to View Two" onPress={() => navigation.push('ViewTwo')} />
		<Button title="Go to View Three" onPress={() => navigation.push('ViewThree')} />
	</View>
);
