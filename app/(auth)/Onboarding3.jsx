import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/images/support.png')} style={styles.image} />
        <Text style={styles.title}>SUPPORT</Text>
        <Text style={styles.description}>
          Breeg bridges the gap between medical distributors and pharmacies,
          ensuring swift and efficient distribution of essential supplies.
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Back"
          handlePress={() => router.push('/Onboarding2')}
          containerStyles={styles.backButton}
          textStyles={styles.backButtonText}
        />
        <CustomButton
          title="Get Started"
          handlePress={() => router.push('/UserType')}
          containerStyles={styles.getStartedButton}
          textStyles={styles.getStartedButtonText}
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
    paddingHorizontal: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 15,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  getStartedButton: {
    backgroundColor: 'white',
  },
  getStartedButtonText: {
    color: '#034B02',
    fontWeight: 'bold',
  },
});
