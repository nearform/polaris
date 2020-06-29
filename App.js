import * as React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import "./services/i18n";

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>{t("home:title")}</Text>
      <Button
        title={t("home:button")}
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
};
const DetailsScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>{t("details:title")}</Text>
    </View>
  );
};

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
          name="Details"
          component={DetailsScreen}
          options={{ title: t("details:title") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
