import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomLoginSheet = () => {
  return (
    
    <View style={styles.container}>
      <Link
        href={{
          pathname: '/login',
          params: { type: 'register' },
        }}
        asChild
      >
        <TouchableOpacity style={styles.btnDark}>
          <Ionicons name="mail" size={20} color="#fff" style={styles.btnIcon} />
          <Text style={styles.btnDarkText}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/login',
          params: { type: 'login' },
        }}
        asChild
      >
        <TouchableOpacity style={styles.btnDark}>
          <Text style={styles.btnDarkText}>Log in</Text>
        </TouchableOpacity>
      </Link>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
   
    padding: 28,
    gap: 20, // space between buttons
  },
  btnDark: {
    flexDirection: 'row', // ✅ icon + text side by side
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    width: '80%',
    height: 50, // ✅ same height
    borderRadius: 12,
  },
  btnIcon: {
    marginRight: 8, // spacing between icon and text
  },
  btnDarkText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default BottomLoginSheet
