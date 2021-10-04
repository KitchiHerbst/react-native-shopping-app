import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

//local
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
