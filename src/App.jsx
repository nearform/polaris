import React from "react";
import { StatusBar, YellowBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  ViewOne,
  ViewTwo,
  ViewThree,
  Settings,
} from "./components/views";
import Layout from "./components/templates/layout";
import { UIProvider } from "./store/ui/context";
import "./services/i18n";

// Mute multiple known warnings to display on device. Those warning messages coming from React Native components and need to be fixed by RN team
YellowBox.ignoreWarnings([
  "Animated",
  "Warning: componentWill",
  "Possible Unhandled Promise",
]);

const Stack = createStackNavigator();

const App = () => (
  <UIProvider>
    <Layout>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ViewOne" component={ViewOne} />
          <Stack.Screen name="ViewTwo" component={ViewTwo} />
          <Stack.Screen name="ViewThree" component={ViewThree} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  </UIProvider>
);

export default App;
