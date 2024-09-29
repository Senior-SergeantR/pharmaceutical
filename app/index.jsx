import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>CONNECT</Text>
        <Text style={styles.description}>
          Breeg bridges the gap between medical distributors and pharmacies,
          ensuring swift and efficient distribution of essential supplies.
        </Text>

        <CustomButton
          title="Skip"
          handlePress={() => router.push('/(auth)/UserType')}
          containerStyles="w-full mt-7"
        />

        <CustomButton
          title="Next"
          handlePress={() => router.push('/(auth)/Onboarding2')}
          containerStyles="w-full mt-7"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034B02', 
    minHeight: '85vh', // Minimum height of 85% of the screen height
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 56,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: 'white',
    textAlign: 'start',
  },
});