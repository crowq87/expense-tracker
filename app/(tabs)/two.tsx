import { Text, View } from '@/components/Themed';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, StyleSheet } from 'react-native';


export default function TabTwoScreen() {

const [isLoading, setIsLoading] = React.useState(true);

  getAuth().onAuthStateChanged((user) => {
    setIsLoading(false);
    if (!user) {
      router.replace("/login");
    }
  });

 if (isLoading) return <Text style={{ paddingTop: 30 }}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
      <View style={{ height: 20 }} />
      <Button title="Delete Account" onPress={() => FIREBASE_AUTH.currentUser?.delete()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});