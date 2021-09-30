import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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

export default function App() {
  return <Listings />;
}
