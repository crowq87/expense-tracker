import { db, FIREBASE_AUTH } from "@/FirebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Expense {
  id: string;
  description: string;
  amount: number;
  createdAt: any;
}

export default function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState("");

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "expenses"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Expense[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Expense[];
      setExpenses(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const openEditModal = (expense: Expense) => {
    setSelectedExpense(expense);
    setNewDescription(expense.description);
    setNewAmount(expense.amount.toString());
    setEditModalVisible(true);
  };

  const handleSaveEdit = async () => {
    if (!selectedExpense) return;
    try {
      const ref = doc(db, "expenses", selectedExpense.id);
      await updateDoc(ref, {
        description: newDescription,
        amount: parseFloat(newAmount),
      });
      setEditModalVisible(false);
      Alert.alert("✅ Success", "Expense updated!");
    } catch (error: any) {
      console.error(error);
      Alert.alert("❌ Error", error.message);
    }
  };

  const handleDelete = async (expenseId: string) => {
    Alert.alert("⚠️ Confirm Delete", "Are you sure you want to delete this expense?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteDoc(doc(db, "expenses", expenseId));
          } catch (error: any) {
            console.error(error);
            Alert.alert("Error", error.message);
          }
        },
      },
    ]);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  if (expenses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No expenses yet. Add one!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <View>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>₱{item.amount}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => openEditModal(item)}
                style={styles.iconButtonGold}
              >
                <Ionicons name="create-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={styles.iconButtonRed}
              >
                <Ionicons name="trash-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Edit Modal */}
      <Modal visible={editModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>✏️ Edit Expense</Text>
            <TextInput
              style={styles.input}
              value={newDescription}
              onChangeText={setNewDescription}
              placeholder="Description"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              value={newAmount}
              onChangeText={setNewAmount}
              placeholder="Amount"
              keyboardType="numeric"
              placeholderTextColor="#aaa"
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setEditModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSaveEdit}>
                <Text style={styles.modalBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d4af37", 
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  iconButtonGold: {
    backgroundColor: "#d4af37",
    padding: 8,
    borderRadius: 50,
  },
  iconButtonRed: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 50,
  },
  emptyContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d4af37",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d4af37",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: "#fff",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelBtn: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  saveBtn: {
    backgroundColor: "#d4af37",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  modalBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
