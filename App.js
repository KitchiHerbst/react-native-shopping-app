import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
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
import AppPicker from "./components/AppPicker";

export default function App() {
  const [bool, setBool] = useState(false);
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  return (
    <Screen>
      <AppPicker items={categories} placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
