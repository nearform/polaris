import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemLabel: {
    marginRight: 10,
  },
});

export default SettingItem;
