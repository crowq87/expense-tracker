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
          <Text style={styles.btnDarkText}>Sign In</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
   
    padding: 28,
    gap: 20,
  },
  btnDark: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    width: '80%',
    height: 50, 
    borderRadius: 12,
  },
  btnIcon: {
    marginRight: 8, 
  },
  btnDarkText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default BottomLoginSheet
