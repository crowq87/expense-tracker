import { db, FIREBASE_AUTH } from "@/FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { Alert, SafeAreaView, StyleSheet } from "react-native";
import ExpenseForm from "../../components/ExpenseForm";

export default function AddExpense() {
  const navigation = useNavigation();

  const handleSubmit = async (expenseData: { description: string; amount: number }) => {
    try {
      const user = FIREBASE_AUTH.currentUser;
      if (!user) throw new Error("User not authenticated");

      await addDoc(collection(db, "expenses"), {
        ...expenseData,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      Alert.alert("✅ Expense added!");
      navigation.goBack();
    } catch (error: any) {
      console.error(error);
      Alert.alert("❌ Failed to add expense", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpenseForm onSubmit={handleSubmit} buttonText="Add Expense" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1c1c" },
});
