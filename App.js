import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//local
import Screen from "./components/Screen";
import ImageInput from "./components/ImageInput";

export default function App() {
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
    <Screen>
      {imageUri && (
        <TouchableWithoutFeedback onPress={() => setImageUri()}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 111, height: 111 }}
          />
        </TouchableWithoutFeedback>
      )}
      <ImageInput onPress={selectImage} />
    </Screen>
  );
}
