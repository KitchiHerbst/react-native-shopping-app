import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Account from "../screens/Account";
import Messages from "../screens/Messages";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
);

export default AccountNavigator;
