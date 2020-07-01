import React from "react";
import { StatusBar, YellowBox } from "react-native";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  ViewOne,
  ViewTwo,
  ViewThree,
  Settings,
} from "components/views";
import Layout from "components/templates/layout";
import { UIProvider } from "store/ui/context";
import "services/i18n";

// Mute multiple known warnings to display on device. Those warning messages coming from React Native components and need to be fixed by RN team
YellowBox.ignoreWarnings([
  "Animated",
  "Warning: componentWill",
  "Possible Unhandled Promise",
]);

const Stack = createStackNavigator();

const App = () => {
  const { t } = useTranslation();

  return (
    <UIProvider>
      <Layout>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: t("home:title") }}
            />
            <Stack.Screen
              name="ViewOne"
              component={ViewOne}
              options={{ title: t("viewOne:title") }}
            />
            <Stack.Screen
              name="ViewTwo"
              component={ViewTwo}
              options={{ title: t("viewTwo:title") }}
            />
            <Stack.Screen
              name="ViewThree"
              component={ViewThree}
              options={{ title: t("viewThree:title") }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ title: t("settings:title") }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Layout>
    </UIProvider>
  );
};

export default App;
