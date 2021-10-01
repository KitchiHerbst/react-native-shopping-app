import React from "react";
import { StyleSheet } from "react-native";

import AppTextInput from "../components/AppTextInput";

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("./assets/logo-red.png")} style={styles.logo} />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
