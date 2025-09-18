import { db, FIREBASE_AUTH } from '@/FirebaseConfig';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (!user) {
      setExpenses([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'expenses'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const exp = [];
        querySnapshot.forEach((doc) => {
          exp.push({ id: doc.id, ...doc.data() });
        });
        setExpenses(exp);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching expenses:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Loading expenses...</Text>;
  }

  if (expenses.length === 0) {
    return <Text style={styles.empty}>No expenses found.</Text>;
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.expenseItem}>
          <Text style={styles.expenseTitle}>{item.title || 'Untitled'}</Text>
          <Text style={styles.expenseAmount}>${item.amount?.toFixed(2) || '0.00'}</Text>
          <Text style={styles.expenseDate}>{item.createdAt?.toDate?.().toLocaleDateString() || ''}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    padding: 20,
    textAlign: 'center',
  },
  empty: {
    padding: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  list: {
    padding: 10,
  },
  expenseItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenseAmount: {
    fontSize: 14,
    marginTop: 4,
  },
  expenseDate: {
    fontSize: 12,
    marginTop: 2,
    color: '#666',
  },
});
