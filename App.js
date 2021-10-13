import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//local
import Screen from "./components/Screen";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import ListingEditScreen from "./screens/ListingEditScreen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const onRemoveImage = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const onAddImage = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  return (
    // <Screen>
      
    //   {/* <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={onAddImage}
    //     onRemoveImage={onRemoveImage}
    //   /> */}
    // </Screen>
    <ListingEditScreen />
  );
}
