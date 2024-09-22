import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const TabIcons = ({icon, color, name, focused }) => {
  return (
    <View className="flex-col items-center justify-center gap-1">
        <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        />
        <Text className={`text-xs ${focused ? 'font-psemibold' : 
        'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
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
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon:  ({color, focused}) =>(
              <TabIcons
                icon={icons.home}
                color={color}
                name="home"
                focused={focused}
                />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: 'products',
            headerShown: false,
            tabBarIcon:  ({color, focused}) =>(
              <TabIcons
                icon={icons.upload}
                color={color}
                name="products"
                focused={focused}
                />
            ),
          }}
        />
        <Tabs.Screen
          name="distributorAdd"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon:  ({color, focused}) =>(
              <TabIcons
                icon={icons.plus}
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
            tabBarIcon:  ({color, focused}) =>(
              <TabIcons
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
                />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;


// const styles = StyleSheet.create({})