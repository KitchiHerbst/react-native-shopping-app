import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
