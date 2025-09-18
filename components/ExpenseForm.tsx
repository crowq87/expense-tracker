import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

type ExpenseFormProps = {
  onSubmit: (data: { description: string; amount: number }) => void;
  buttonText: string;
};

export default function ExpenseForm({ onSubmit, buttonText }: ExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!description || !amount) {
      Alert.alert("Please fill out all fields.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert("Please enter a valid amount.");
      return;
    }

    onSubmit({ description, amount: parsedAmount });

    setDescription("");
    setAmount("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title={buttonText} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    fontSize: 18,
    paddingVertical: 8,
  },
});
