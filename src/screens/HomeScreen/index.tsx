import React from "react";
// import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { gStyle } from "../../../styles/style";
import { styles } from "./style";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={gStyle.main}>
      <Text style={styles.text}>Just cheking how this work</Text>
      <Text style={styles.text2}>New style check</Text>
    </View>
  );
};
