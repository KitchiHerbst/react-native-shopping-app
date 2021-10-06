import React from "react";

import Icon from "./Icon";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function PickerItem({
  label,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 5,
    paddingBottom: 20,
    fontWeight: "500",
  },
});
