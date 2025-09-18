// import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import ExpenseForm from '../../components/ExpenseForm';
// import { db } from '../firebase';

// export default function EditExpenseScreen({ route, navigation }) {
//   const { expense } = route.params;

//   const handleSubmit = async (expenseData) => {
//     try {
//       await updateDoc(doc(db, 'expenses', expense.id), expenseData);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error updating expense: ', error);
//       alert('Error updating expense. Please try again.');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteDoc(doc(db, 'expenses', expense.id));
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error deleting expense: ', error);
//       alert('Error deleting expense. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ExpenseForm 
//         onSubmit={handleSubmit} 
//         initialData={expense}
//         buttonText="Update Expense" 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
// });