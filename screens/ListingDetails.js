import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { ListItem } from "../components/lists";
import AppText from "../components/AppText";
import colors from "../config/colors";

const ListingDetails = ({ route }) => {
  const { image, title, subtitle } = route.params.listing;
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${subtitle}</AppText>
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
