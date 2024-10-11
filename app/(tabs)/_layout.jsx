import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Home from "./dashboard";
import ProductsFn from "./products"
import App from "./searchInvoices";
import ProfileScreen from "./profile";
import AddProductScreen from "./addproduct";
import AddDistributorScreen from "./distributorAdd"
const isDistributor = false; // Dynamically set this based on the logged-in user role

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

const TabsLayout = () => {
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
      {isDistributor ? (
        <>
          {/* Distributor Tabs */}
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
            name="SearchInvoices"
            component={App}
            options={{
              title: "Invoices",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="document-text-outline"
                  color={color}
                  name="Invoices"
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
                  name="Dashboard"
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
            name="DistributorAdd"
            component={AddDistributorScreen}
            options={{
              title: "Add",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon="add-circle-outline"
                  color={color}
                  name="Add"
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

export default TabsLayout;
