import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
   <>
    <Stack>
      <Stack.Screen
      name='Onboarding2'
      options={{
        headerShown: false,
      }}
      />
    <Stack.Screen
      name='Onboarding3'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='UserType'
      options={{
        headerShown: false,
      }}
      />
    </Stack>

      
    
   </>
  )
}

export default AuthLayout

//const styles = StyleSheet.create({})