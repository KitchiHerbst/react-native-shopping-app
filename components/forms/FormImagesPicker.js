import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//local
import ImageInput from "../ImageInput";
import ImageListItem from "../ImageListItem";

export default function FormImagesPicker() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to allow access to use photos in listing");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("error reading image");
    }
  };

  return (
    <>
      {imageUri && (
        <ImageListItem source={imageUri} onPress={() => setImageUri()} />
      )}
      <ImageInput onPress={selectImage} />
    </>
  );
}
