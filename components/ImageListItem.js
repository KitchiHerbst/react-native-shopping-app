import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ImageListItem({ source, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <Image source={{ uri: source }} style={styles.image}/>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 115,
    height: 115,
    borderRadius: 20,
  },
});
