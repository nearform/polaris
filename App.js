import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import HomeScreen from "./src/components/views/home";
import SettingsScreen from "./src/components/views/settings";
import "./services/i18n";

const Stack = createStackNavigator();

const App = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: t("home:title") }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: t("settings:title") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
