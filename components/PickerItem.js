import React from "react";

import Icon from "./Icon";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 5,
    fontWeight: "500",
  },
});
