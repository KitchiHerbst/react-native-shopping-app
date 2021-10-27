import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Listings from "../screens/Listings";
import ListingDetails from "../screens/ListingDetails";

const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={Listings} />
    <Stack.Screen name="ListingDetails" component={ListingDetails} />
  </Stack.Navigator>
);

export default ListingsNavigator;
