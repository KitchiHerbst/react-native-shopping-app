import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { ListItem } from "../components/lists";
import AppText from "../components/AppText";
import colors from "../config/colors";

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
