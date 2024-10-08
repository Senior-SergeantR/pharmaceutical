import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Image source={require('../../assets/images/capsule.png')} style={styles.image} />
        <Text style={styles.title}>Connect</Text>
        <Text style={styles.description}>
          Breeg bridges the gap between medical distributors and pharmacies,
          ensuring swift and efficient distribution of essential supplies.
        </Text>

        <View style={styles.buttonContainer}>
        <CustomButton
          title="Skip"
          handlePress={() => router.push('/(auth)/UserType')}
          containerStyles={{ width: '100%', marginTop: 20 }}
        />

        <CustomButton
          title="Next"
          handlePress={() => router.push('/(auth)/Onboarding2')}
          containerStyles={{ width: '100%', marginTop: 20 }}
        />

        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034B02', 
    minHeight: '85vh', 
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 56,
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'start'
  },
  description: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 7,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
