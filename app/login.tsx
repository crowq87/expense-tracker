import { router, useLocalSearchParams } from 'expo-router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {
  ActivityIndicator, Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native'
import { defaultStyles } from '../constants/Styles'
import { FIREBASE_AUTH } from '../FirebaseConfig'

const Page = () => {
  const { type } = useLocalSearchParams<{type: string}>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)')
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
    setLoading(false)
  }

  const signUp = async () => {
    setLoading(true)
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)')
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? 'padding' : 'height'}
      style={styles.wrapper}
      keyboardVerticalOffset={1}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size='large' color='#fff'/>
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png' }} 
            style={styles.logo}
          />
          <Text style={styles.title}>
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </Text>
          <Text style={styles.subtitle}>
            {type === 'login' 
              ? 'Sign in to keep track of your expenses' 
              : 'Join us and start tracking your expenses'}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            autoCapitalize='none'
            placeholder='Email'
            placeholderTextColor="#A0AEC0"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            autoCapitalize='none'
            placeholder='Password'
            placeholderTextColor="#A0AEC0"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {type === 'login' ? (
          <TouchableOpacity onPress={signIn} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={signUp} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Create Account</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0F2B3C', 
  },
  container: {
    backgroundColor: '#132F40',
    borderRadius: 16,
    padding: 24,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    width: '90%',
    maxWidth: 400,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 16,
    tintColor: '#FFD700',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0AEC0',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#1A3B52',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D4F6B',
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default Page;
