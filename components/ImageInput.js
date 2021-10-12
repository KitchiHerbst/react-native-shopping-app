import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function ImageInput({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="camera"
        size={50}
        color={defaultStyles.colors.medium}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 115,
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
