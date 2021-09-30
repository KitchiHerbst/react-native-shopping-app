import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.light
  },
});
