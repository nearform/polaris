import * as React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { styles } from "../views.styles";

export const ViewThree = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("viewThree:message")}</Text>
    </View>
  );
};