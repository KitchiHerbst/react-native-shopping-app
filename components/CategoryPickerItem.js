import React from "react";

import Icon from "./Icon";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.color} size={item.size} name={item.icon} />
      <AppText style={styles.text} numberOfLines={2}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    fontWeight: "500",
    textAlign: "center",
  },
});
