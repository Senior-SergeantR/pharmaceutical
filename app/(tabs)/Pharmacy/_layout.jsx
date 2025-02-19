import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './dashboard'; 
import ProductsFn from './products'; 
import Invoices from './invoices'; 
import Cart from './Cart-Details'; 
import ProfileScreen from './profile'; 



const Tab = createBottomTabNavigator();

const PharmacyLayout = () => {
  const isPharmacy = false; // Set this based on your logic

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#168503', // Color for the active tab
        tabBarInactiveTintColor: '#b0b0b0', // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#fff', // Background color of the tab bar
          borderTopWidth: 1, // Add a border at the top of the tab bar
          height: 70, // Height of the tab bar
          borderTopColor: '#fff', // Color of the top border
          paddingBottom: 6, // Padding at the bottom of the tab bar
        },
      }}
    >
      {isPharmacy ? (
        <>
          {/* Pharmacy Tabs */}
          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={{
              title: 'Dashboard',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="products"
            component={ProductsFn}
            options={{
              title: 'Products',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'cube' : 'cube-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="invoices"
            component={Invoices}
            options={{
              title: 'Invoices',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'document' : 'document-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CartDetails"
            component={Cart}
            options={{
              title: 'Cart',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'cart' : 'cart-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </>
      ) : (
        <>
          {/* Regular User Tabs */}
          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={{
              title: 'Dashboard',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="products"
            component={ProductsFn}
            options={{
              title: 'Products',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'cube' : 'cube-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="invoices"
            component={Invoices}
            options={{
              title: 'Invoices',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'document' : 'document-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CartDetails"
            component={Cart}
            options={{
              title: 'Cart',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'cart' : 'cart-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default PharmacyLayout;