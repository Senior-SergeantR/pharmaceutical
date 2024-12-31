import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Platform } from "react-native";

// Screen imports
import Home from "../Distributor/dashboard";
import ProductsFn from "../Distributor/products";
import InvoiceSearch from "../Distributor/searchInvoices";
import ProfileScreen from "../Distributor/profile";
import AddDistributorScreen from "../Distributor/distributorAdd";

const Tab = createBottomTabNavigator();

// Tab configuration data
const TAB_CONFIG = {
  DISTRIBUTOR: [
    {
      name: "Dashboard",
      component: Home,
      icon: "home-outline",
    },
    {
      name: "Products",
      component: ProductsFn,
      icon: "cube-outline",
    },
    {
      name: "Invoices",
      component: InvoiceSearch,
      icon: "document-text-outline",
    },
    {
      name: "Profile",
      component: ProfileScreen,
      icon: "person-outline",
    },
  ],
  REGULAR: [
    {
      name: "Dashboard",
      component: Home,
      icon: "home-outline",
    },
    {
      name: "Products",
      component: ProductsFn,
      icon: "cube-outline",
    },
    {
      name: "Add",
      component: AddDistributorScreen,
      icon: "add-circle-outline",
    },
    {
      name: "Profile",
      component: ProfileScreen,
      icon: "person-outline",
    },
  ],
};

const TabIcon = ({ icon, color, name, focused }) => (
  <View
    style={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      width: 100,
      paddingTop: 14,
    }}
  >
    <Ionicons name={icon} size={24} color={color} />
    <Text
      style={{
        fontSize: 12,
        fontWeight: focused ? "700" : "500",
        color: color,
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
      }}
    >
      {name}
    </Text>
  </View>
);

const TabsLayout = () => {
  // You can manage this through authentication context/redux
  const userRole = "REGULAR"; // or "DISTRIBUTOR"
  const isDistributor = userRole === "DISTRIBUTOR";

  const tabConfig = isDistributor ? TAB_CONFIG.DISTRIBUTOR : TAB_CONFIG.REGULAR;

  return (
    <Tab.Navigator
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
      {tabConfig.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                color={color}
                name={tab.name}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsLayout;
