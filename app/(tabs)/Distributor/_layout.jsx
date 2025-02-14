import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Platform } from "react-native";

function TabIcon({ icon, color, name, focused }) {
  return (
    <View style={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      width: 100,
      paddingTop: 14,
    }}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={{
        fontSize: 12,
        fontWeight: focused ? "700" : "500",
        color: color,
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
      }}>
        {name}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#168503",
        tabBarInactiveTintColor: "#b0b0b0",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 85 : 70,
          borderTopColor: "#f0f0f0",
          paddingBottom: Platform.OS === 'ios' ? 20 : 6,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="home-outline" color={color} name="Dashboard" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="cube-outline" color={color} name="Products" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="invoices"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="document-text-outline" color={color} name="Invoices" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="person-outline" color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}