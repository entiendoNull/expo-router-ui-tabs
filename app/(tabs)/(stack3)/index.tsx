import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function StackThreeScreen() {
  console.log("Re-renders StackThreeScreen");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stack 3 Main Screen</Text>
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
