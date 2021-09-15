import { blockStatement } from "@babel/types";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
