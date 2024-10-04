import { Link } from 'expo-router';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton1';
import React, { useState } from 'react';

const SignUpScreen = () => {

  const [isSubmitting, setfirst] = useState (false)

  const [form, setForm] = useState({
    licenseID:'',
    // password:''
  })
  const submit = () => {
    console.log(form)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <Text style={styles.subtitle}>Create an account</Text>
      <Text style={styles.text1}>Enter your email to sign up for this app</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        keyboardType="email-address"
      />
     

      <CustomButton
          title="Sign up with email"
          handlePress={submit}
          containerStyles="w-full mt-7 mb-20"
          isLoading={isSubmitting}
        />

        <Text style={styles.text2}>
          or continue with google
        </Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.text3}>
          By clicking Sign Up, you agree to our 
          <Link href= "/terms" style={styles.externallink}> Terms of Service</Link>  and 
          <Link href= "/privacy"style={styles.externallink}> Privacy Policy</Link>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight:"bold",
  },
  text1:{
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text2:{
    marginTop: 15,
    color: '#828282',
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#DB4437',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  disclaimer: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  text3:{
    
    marginTop: 20,
  },


externallink:{
  fontWeight: 'bold',
  fontSize: 17
}
});

export default SignUpScreen;
