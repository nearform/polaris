import * as React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const SettingItem = ({ label, value }) => (
  <View style={styles.item}>
    <View style={styles.itemLabel}>
      <Text>{label}</Text>
    </View>
    {value}
  </View>
);

const styles = StyleSheet.create({
  item: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: Platform.OS === "web" ? "center" : "space-between",
    alignItems: "center",
  },
  itemLabel: {
    marginRight: 10,
  },
});

export default SettingItem;
