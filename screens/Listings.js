import React from "react";
import { StyleSheet, FlatList } from "react-native";
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

export default function Listings() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.subtitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
});
