import React from "react";

import Icon from "./Icon";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function PickerItem({
  label,
  onPress,
  backgroundColor,
  size,
  iconName,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={iconName} size={size} backgroundColor={backgroundColor} />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    width: "30%",
    alignItems: "center",
  },
  text: {
    paddingTop: 5,
    paddingBottom: 20,
    fontWeight: "500",
  },
});
