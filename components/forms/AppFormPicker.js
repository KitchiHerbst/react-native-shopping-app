import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ name, ...otherProps }) {
  const { errors, values, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
