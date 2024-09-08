import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PharmLayout = () => {
  return (
   <>
    <Stack>
      <Stack.Screen
      name='Add-Address'
      options={{
        headerShown: false,
      }}
      />
    <Stack.Screen
      name='Add-Card'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='Cart-Details'
      options={{
        headerShown: false,
      }}
      />
    

    <Stack.Screen
      name='Cart-Empty'
      options={{
        headerShown: false,
      }}
      />
   

    <Stack.Screen
      name='Checkout'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='dashboard'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='products'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='profile'
      options={{
        headerShown: false,
      }}
      />

    <Stack.Screen
      name='Track-Order'
      options={{
        headerShown: false,
      }}
      />
      
    </Stack>
    
   </>
  )
}

export default PharmLayout
