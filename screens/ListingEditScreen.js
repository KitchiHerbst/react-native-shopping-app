import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField } from "../components/forms";
import Screen from "../components/Screen";

export default function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().max(250).label("Description"),
  });

  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" placeholder="Price" />
        
        <AppFormField name="description" placeholder="Description" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({ screen: { padding: 10 } });
