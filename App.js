import React from "react";
// import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";

import Screen from "./components/Screen";
import AppText from "./components/AppText";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Listings from "./screens/Listings";
import ListingEditScreen from "./screens/ListingEditScreen";
import Account from "./screens/Account";
import ListingDetails from "./screens/ListingDetails";

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Click"
//       onPress={() =>
//         navigation.navigate("TweetDetails", { id: 1, name: "bongo" })
//       }
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <AppText>Tweets</AppText>
//     <Link />
//     {/* <Button title='click' onPress={() => navigation.navigate('TweetDetails', {id: 1})}/> */}
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <AppText>Tweet Details {route.params.id}</AppText>
//   </Screen>
// );

// const AppAccount = () => (
//   <Screen>
//     <AppText> AppAccount </AppText>
//   </Screen>
// );

const Stack = createNativeStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route, navigation }) => ({ title: "Tweet Details" })}
//     />
//   </Stack.Navigator>
// );

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Welcome' component={Home}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
  </Stack.Navigator>
)

const ListingsNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Listings' component={Listings}/>
    <Stack.Screen name='ListingDetails' component={ListingDetails}/>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

// const AppTabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveBackgroundColor: "tomato",
//       tabBarActiveTintColor: "white",
//       tabBarInactiveBackgroundColor: "#eee",
//       tabBarInactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={StackNavigator}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons color={color} name="home" size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen name="AppAccount" component={AppAccount} />
//   </Tab.Navigator>
// );

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name='Listings' component={ListingsNavigator}/>
    <Tab.Screen name='ListingEditScreen' component={ListingEditScreen}/>
    <Tab.Screen name='Account' component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
