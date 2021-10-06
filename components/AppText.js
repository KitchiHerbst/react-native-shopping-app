import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, numberOfLines = 1 }) {
  return (
    <Text style={[defaultStyles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
