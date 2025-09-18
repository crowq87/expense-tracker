<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpenseList from '../../components/ExpenseList';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      <ExpenseList />
=======
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
=======
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
  },
});
