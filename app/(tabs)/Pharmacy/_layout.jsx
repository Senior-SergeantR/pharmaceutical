import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Home from "../Pharmacy/dashboard";
import ProductsFn from "../Pharmacy/products"
import ProfileScreen from "../Pharmacy/profile";
import Cart from "../Pharmacy/Cart-Details";


const isPharmacy = false;

const TabIcons = ({ icon, color, name, focused }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: 100,
      }}
    >
      <Ionicons name={icon} size={24} color={color} />
      <Text
        style={{
          fontSize: 12,
          fontWeight: focused ? "600" : "400",
          color: color,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const PharmacyLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#168503",
        tabBarInactiveTintColor: "#b0b0b0",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          height: 70,
          borderTopColor: "#fff",
          paddingBottom: 6,
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
              title: "Dashboard",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="home-outline"
                  color={color}
                  name="Dashboard"
                  focused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsFn}
            options={{
              title: "Products",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="cube-outline"
                  color={color}
                  name="Products"
                  focused={focused}
                />
              ),
            }}
          />
         <Tab.Screen
            name="CartDetails"
            component={Cart}
            options={{
              title: "Cart",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="cart-outline"
                  color={color}
                  name="Cart"
                  focused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="person-outline"
                  color={color}
                  name="Profile"
                  focused={focused}
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
              title: "Dashboard",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="home-outline"
                  color={color}
                  name="Home"
                  focused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="products"
            component={ProductsFn}
            options={{
              title: "products",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="cube-outline"
                  color={color}
                  name="Products"
                  focused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CartDetails"
            component={Cart}
            options={{
              title: "Cart",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="cart-outline"
                  color={color}
                  name="Cart"
                  focused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="person-outline"
                  color={color}
                  name="Profile"
                  focused={focused}
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
