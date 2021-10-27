import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Listings from "../screens/Listings";
import ListingDetails from "../screens/ListingDetails";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: "modal" }}
  >
    <Stack.Screen name={routes.LISTINGS} component={Listings} />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetails} />
  </Stack.Navigator>
);

export default ListingsNavigator;
