import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, SubmitButton, AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <View style={styles.screen}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            textContentType="password"
            secureTextEntry
            name="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
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
