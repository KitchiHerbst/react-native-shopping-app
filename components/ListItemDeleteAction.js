import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItemDeleteAction = () => {
  return <View style={styles.container} />;
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
