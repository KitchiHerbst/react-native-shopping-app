import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import colors from "../config/colors";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.top}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.slogan}>Sell what you don't need</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.login}></View>
        <View style={styles.signup}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  slogan: {},
  bottom: {
    justifyContent: "flex-end",
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  signup: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
