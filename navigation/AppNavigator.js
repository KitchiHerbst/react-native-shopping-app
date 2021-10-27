import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import colors from "../config/colors";
import ListingButton from "./ListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
    }}
  >
    <Tab.Screen
      name={routes.LISTINGS}
      component={ListingsNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.LISTING_DETAILS}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <ListingButton
            onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
          />
        ),
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
});

export default AppNavigator;
