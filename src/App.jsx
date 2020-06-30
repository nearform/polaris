import React, { Component } from 'react';
import { View, Text, StatusBar, Button, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ViewOne, ViewTwo, ViewThree } from './components/views';
import Layout from './components/templates/layout';

import { initialState, Provider, AppState } from './store';
import { UIProvider } from './store/ui/context';

// Mute multiple known warnings to display on device. Those warning messages coming from React Native components and need to be fixed by RN team
YellowBox.ignoreWarnings(['Animated', 'Warning: componentWill', 'Possible Unhandled Promise']);

const Stack = createStackNavigator();

const App = () => (
  <Layout>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewOne" component={ViewOne} />
        <Stack.Screen name="ViewTwo" component={ViewTwo} />
        <Stack.Screen name="ViewThree" component={ViewThree} />
      </Stack.Navigator>
    </NavigationContainer>
  </Layout>
);

export default App;
