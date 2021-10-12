import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//local
import Screen from "./components/Screen";
import ImageInput from "./components/ImageInput";
import ImageListItem from "./components/ImageListItem";
import FormImagesPicker from "./components/forms/FormImagesPicker";

export default function App() {
  

  return (
    <Screen>
      <FormImagesPicker />
    </Screen>
  );
}
