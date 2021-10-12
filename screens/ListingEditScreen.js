import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import FormImagesPicker from "../components/forms/FormImagesPicker";
import Icon from "../components/Icon";

import Screen from "../components/Screen";
import colors from "../config/colors";

const pickerItems = [
  {
    value: 1,
    label: "Furniture",
    color: "#fc5c65",
    size: 75,
    icon: "floor-lamp",
  },
  {
    value: 2,
    label: "Clothing",
    color: "#2bcbba",
    size: 75,
    icon: "shoe-heel",
  },
  {
    value: 3,
    label: "Books",
    color: "#CBC3E3",
    size: 75,
    icon: "book-open-variant",
  },
  { value: 4, label: "Cameras", color: "#fed330", size: 75, icon: "camera" },
  { value: 5, label: "Cars", color: "#fd9644", size: 75, icon: "car" },
  { value: 6, label: "Games", color: "#26de81", size: 75, icon: "cards" },
  { value: 7, label: "Sports", color: "#45aaf2", size: 75, icon: "basketball" },
  {
    value: 8,
    label: "Movies & Music",
    color: "#4b7bec",
    size: 75,
    icon: "headphones",
  },
  {
    value: 9,
    label: "Other",
    color: colors.medium,
    size: 75,
    icon: "window-maximize",
  },
];

const images = []

export default function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().max(250).label("Description"),
    // images: Yup.array().required().min(1).label("Images"),
  });

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* <FormImagesPicker name="images" images={images} /> */}
        <AppFormField maxLength={250} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          width="30%"
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={pickerItems}
          width="50%"
          iconSize={50}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
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
