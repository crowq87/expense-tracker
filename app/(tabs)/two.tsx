import { Text, View } from '@/components/Themed';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      setIsLoading(false);
      if (!user) {
        router.replace("/login");
      }
    });
    return unsubscribe;
  }, []);

  if (isLoading) return <Text style={{ paddingTop: 30, color: "#fff" }}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Account Settings</Text>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => FIREBASE_AUTH.currentUser?.delete()}
      >
        <Text style={[styles.buttonText, styles.deleteButtonText]}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d4af37", 
    marginBottom: 30,
  },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#d4af37",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    backgroundColor: "#d4af37",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#222", 
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  deleteButtonText: {
    color: "#d4af37", 
  },
});
