import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

export default function SmallListItem({ icon, title, color, style }) {
  return (
    <TouchableHighlight>
      <View style={[styles.container, style]}>
        <View style={[styles.circle, {backgroundColor: color}]}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={colors.white}
            
          />
        </View>
        <View style={styles.text}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  circle: {
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center'
  },
  text:{
      justifyContent: "center",
      paddingLeft: 15
  },
  title: {
      fontWeight: '500'
  }
});
