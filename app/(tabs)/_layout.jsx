import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabIcons = ({icon, color, name, focused }) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4}}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={{
        fontSize: 12, 
        fontWeight: focused ? '600' : '400',
        color: color
      }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#168503',
        tabBarInactiveTintColor: '#b0b0b0',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          height: 70,
          borderTopColor: '#fff',
          paddingBottom: 6,
        }
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcons
              icon="home-outline"
              color={color}
              name="Dashboard"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcons
              icon="cube-outline"
              color={color}
              name="Products"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="distributorAdd"
        options={{
          title: 'Add',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcons
              icon="add-circle-outline"
              color={color}
              name="Add"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcons
              icon="person-outline"
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout;
