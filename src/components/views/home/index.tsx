import * as React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "../views.styles";

export const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button title="Go to View One" onPress={() => navigation.push("ViewOne")} />
    <Button title="Go to View Two" onPress={() => navigation.push("ViewTwo")} />
    <Button
      title="Go to View Three"
      onPress={() => navigation.push("ViewThree")}
    />
    <Button
      title="Go to Settings"
      onPress={() => navigation.push("Settings")}
    />
  </View>
);
