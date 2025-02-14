import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TabBarIcon } from './TabBarIcon'; // Import the TabBarIcon component

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;