import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

import Screen from "../components/Screen";

const pickerItems = [
  { value: 1, label: "Furniture" },
  { value: 2, label: "Clothing" },
  { value: 3, label: "Cameras" },
];

export default function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().max(250).label("Description"),
  });

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={250} name="title" placeholder="Title" />
        <AppFormField maxLength={8} name="price" placeholder="Price" width='30%'/>
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={pickerItems}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({ screen: { padding: 10 } });
