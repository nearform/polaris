import * as React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ViewOne, ViewTwo, ViewThree } from './components/views';
import Layout from './components/templates/layout';

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
