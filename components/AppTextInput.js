import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
