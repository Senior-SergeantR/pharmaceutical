import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#168503",
      }}
    >
      <Tabs.Screen
        name="Distributor"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pharmacy"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="medical-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
)}

export default TabsLayout;