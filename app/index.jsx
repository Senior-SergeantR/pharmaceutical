import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';


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
        title= "skip"
        handlePress={() => {}}
        containerStyles="w-full mt-7"/>

        <CustomButton
        title= "skip"
        handlePress={() => {}}
        containerStyles="w-full mt-7"/>

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034B02', // Set your desired background color
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
