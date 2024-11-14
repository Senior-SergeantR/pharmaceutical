import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>CHOOSE</Text>
        <Text style={styles.description}>
          What Best Describes You ?
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Distributor"
          handlePress={() => router.push('/SignUpDistributor')}
          containerStyles={styles.button}
          textStyles={styles.buttonText}
        />
        <CustomButton
          title="Pharmacist"
          handlePress={() => router.push('../../(tabs)/Pharmacy/dashboard')}
          containerStyles={styles.button}
          textStyles={styles.buttonText}
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
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#034B02',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
