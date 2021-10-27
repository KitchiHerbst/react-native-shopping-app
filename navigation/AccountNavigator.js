import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Account from "../screens/Account";
import Messages from "../screens/Messages";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={Account} />
    <Stack.Screen name={routes.MESSAGES} component={Messages} />
  </Stack.Navigator>
);

export default AccountNavigator;
