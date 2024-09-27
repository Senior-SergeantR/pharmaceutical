import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>BREEG</Text>
        <Text style={styles.subtitle}>
           Create an account
        </Text>
        <Text style={styles.description}>
          Enter your official license to sign up for this app
        </Text>
        
        

        <CustomButton
          title="Sign up"
          handlePress={() => router.push('/UserType')}
          containerStyles="w-full mt-7 mb-20"
        />

        <Text className="mt-20">
          By clicking Sign Up, you agree to our 
          <Text style={styles.externallink}> Terms of Service</Text>  and 
          <Text style={styles.externallink}> Privacy Policy</Text> 
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    minHeight: '85vh', // Minimum height of 85% of the screen height
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 220,
  },
  description: {
    fontSize: 20,
    textAlign: 'start',
  },

  subtitle:{
    fontSize: 30,
    textAlign: 'start',
    fontWeight: 'bold',
    
    
  },

  externallink:{
    fontWeight: 'bold',
    fontSize: 17
  }
});
