import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../../components/ExpenseList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      {/* ExpenseList will live-update from Firestore */}
      <ExpenseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FFD700",
  },
});
