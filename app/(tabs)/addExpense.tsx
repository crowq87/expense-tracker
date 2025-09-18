import { db, FIREBASE_AUTH } from '@/FirebaseConfig';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { Alert, SafeAreaView, StyleSheet } from "react-native";
import ExpenseForm from "../../components/ExpenseForm";

export default function AddExpense({ navigation }) {
  const handleSubmit = async (expenseData: { description: string; amount: number }) => {
    try {
      const user = FIREBASE_AUTH.currentUser;
      if (!user) throw new Error("User not authenticated");

      await addDoc(collection(db, "expenses"), {
        ...expenseData,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      Alert.alert("Expense added!");
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Failed to add expense", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseForm onSubmit={handleSubmit} buttonText="Add Expense" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
});
