import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({ name, ...otherProps }) {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  const onRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((img) => img !== uri)
    );
  };

  const onAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  return (
    <>
      <ImageInputList
        {...otherProps}
        imageUris={values[name]}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
