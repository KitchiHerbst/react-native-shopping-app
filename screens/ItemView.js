import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ItemView() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <MaterialCommunityIcons name="close" size="60" color={colors.white} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size="60"
          color={colors.white}
        />
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
  image: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
    marginBottom: 100,
  },
});
