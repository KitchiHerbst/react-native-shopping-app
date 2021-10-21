import React from "react";
// import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen from "./components/Screen";
import AppText from "./components/AppText";
import { Button } from "react-native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() =>
        navigation.navigate("TweetDetails", { id: 1, name: "bongo" })
      }
    />
  );
};

const Tweets = ({navigation}) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Link />
    {/* <Button title='click' onPress={() => navigation.navigate('TweetDetails', {id: 1})}/> */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <AppText>Tweet Details {route.params.id}</AppText>
  </Screen>
);

const Account = () => (
  <Screen>
    <AppText> Account </AppText>
  </Screen>
)

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route, navigation }) => ({ title: 'Tweet Details' })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Tweets}/>
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
