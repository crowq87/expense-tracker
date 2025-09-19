import { View } from "@/components/Themed";
import { db, FIREBASE_AUTH } from "@/FirebaseConfig";
import { StatusBar } from "expo-status-bar";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text } from "react-native";

export default function ModalScreen() {
  const [todayTotal, setTodayTotal] = useState(0);
  const [monthTotal, setMonthTotal] = useState(0);
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "expenses"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let todaySum = 0;
      let monthSum = 0;

      const now = new Date();
      const todayStr = now.toDateString();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (!data.createdAt) return;

        const date = data.createdAt.toDate();
        const amount = parseFloat(data.amount) || 0;

        // today’s expenses
        if (date.toDateString() === todayStr) {
          todaySum += amount;
        }

        // this month’s expenses
        if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
          monthSum += amount;
        }
      });

      setTransactions(snapshot.size);
      setTodayTotal(todaySum);
      setMonthTotal(monthSum);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Expense Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Today</Text>
        <Text style={styles.value}>₱{todayTotal.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>This Month</Text>
        <Text style={styles.value}>₱{monthTotal.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions}</Text>
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#FFD700",
  },
  card: {
    backgroundColor: "#2c2c2c",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
  },
});
