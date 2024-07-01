import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/images/capsule.png')} style={styles.image} />
        <Text style={styles.title}>CONNECT</Text>
        <Text style={styles.description}>
          Breeg bridges the gap between medical distributors and pharmacies,
          ensuring swift and efficient distribution of essential supplies.
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Skip"
          handlePress={() => router.push('/(auth)/UserType')}
          containerStyles={styles.skipButton}
          textStyles={styles.skipButtonText}
        />
        <CustomButton
          title="Next"
          handlePress={() => router.push('/(auth)/Onboarding2')}
          containerStyles={styles.nextButton}
          textStyles={styles.nextButtonText}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034B02',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  skipButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
  },
  skipButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nextButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'white',
  },
  nextButtonText: {
    color: '#034B02',
    fontWeight: 'bold',
  },
});
