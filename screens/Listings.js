import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//local
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    subtitle: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great Condition",
    subtitle: 1000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "A Chair",
    subtitle: 50,
    image: require("../assets/chair.jpg"),
  },
];

export default function Listings({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback style={styles.cardWrapper} onPress={() => navigation.navigate('ListingDetails', {listing: item})}>
            <Card
              title={item.title}
              subtitle={"$" + item.subtitle}
              image={item.image}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // padding: 10,
    backgroundColor: colors.light,
  },
  cardWrapper: {
    margin: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});
