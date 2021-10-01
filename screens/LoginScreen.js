import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <View style={styles.screen}>
        <AppTextInput
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
        />
        <AppTextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <AppButton title="Login" onPress={() => console.log(email, password)} />
      </View>
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
  screen: {
    padding: 20,
  },
});
