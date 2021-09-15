import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function Home() {
  return (
    <ImageBackground
      blurRadius="5"
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.top}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.slogan}>Sell what you don't need</Text>
      </View>
      <View style={styles.bottom}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
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
  slogan: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  bottom: {
    justifyContent: "flex-end",
    padding: 20,
  },
  signup: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
