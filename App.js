import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import ItemView from "./screens/ItemView";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetails from "./screens/ListingDetails";
import Messages from "./screens/Messages";
import Account from "./screens/Account";
import Listings from "./screens/Listings";
import Screen from "./components/Screen";
import AppTextInput from "./components/AppTextInput";

export default function App() {

  const [text, setText] = useState('')

  return (
    <Screen>
      <AppTextInput icon='email' placeholder='Email'/>
    </Screen>
  );
}
