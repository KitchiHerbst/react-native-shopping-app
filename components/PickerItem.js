import React from "react";

import Icon from "./Icon";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function PickerItem({ label, onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {item && (
          <Icon
            backgroundColor={item.color}
            size={item.size}
            name={item.icon}
          />
        )}
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  text: {
    paddingTop: 5,
    paddingBottom: 20,
    fontWeight: "500",
  },
});
