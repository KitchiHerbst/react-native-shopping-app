import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
    }}
  >
    <Tab.Screen
      name="Listings"
      component={ListingsNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
    //   options={{
    //     tabBarButton: ({ size, color }) => (
    //       <TouchableOpacity style={styles.button}></TouchableOpacity>
    //     ),
    //   }}
    />
    <Tab.Screen
      name="Account"
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

export default TabNavigator;
