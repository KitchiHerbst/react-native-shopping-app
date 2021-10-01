import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {

  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <View style={styles.screen}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          { ({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
              />
              <AppTextInput
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                textContentType="password"
                secureTextEntry
                onChangeText={handleChange('password')}
              />
              <AppButton
                title="Login"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
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
