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
    

    <Stack.Screen
      name='SignUpDistributor'
      options={{
        headerShown: false,
      }}
      />
   

    <Stack.Screen
      name='SignUpPharmacy'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='login'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='OTPsentToEmail'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='SignUpDist2'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='SignUpPharm2'
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen
      name='CreatePassword'
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen
      name='OTPdistributor'
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen
      name='OTPpharmacy'
      options={{
        headerShown: false,
      }}
      />
    </Stack>

   </>
  )
}

export default AuthLayout

