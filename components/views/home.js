import * as React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { useTranslation } from "react-i18next";

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>{t("home:title")}</Text>
      <Button
        title={t("home:settingsButton")}
        onPress={() => navigation.push("Settings")}
      />
    </View>
  );
};

export default HomeScreen;
