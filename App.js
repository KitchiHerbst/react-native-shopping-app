import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import ItemView from "./screens/ItemView";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetails from "./screens/ListingDetails";

export default function App() {
  return (
    <ListingDetails />
  );
}
