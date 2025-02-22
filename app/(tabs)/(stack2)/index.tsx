import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function StackTwoScreen() {
  console.log("Re-renders StackTwoScreen");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stack 2 Main Screen</Text>
      <Text style={styles.text}>{Date.now()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "red"
  },
  text: {
    fontSize: 24
  }
});
