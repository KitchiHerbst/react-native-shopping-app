import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AuthNavigator from "./navigation/AuthNavigator";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
