import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import colors from "../config/colors";

export default function ItemView() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <View style={styles.leftButton}></View>
        <View style={styles.rightButton}></View>
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  top: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    // marginTop: 20
  },
  leftButton: {
    width: 60,
    height: 60,
    backgroundColor: colors.primary,
    marginLeft: 20,
  },
  rightButton: {
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
    marginBottom: 100,
  },
});
