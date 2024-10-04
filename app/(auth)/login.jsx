import { Link } from 'expo-router';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton1';
import React, { useState } from 'react';

const SignInScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    password: ''
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const submit = () => {
    setIsSubmitting(true);
    console.log(form);
    
    setIsSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <Text style={styles.subtitle}>Login account</Text>
      <Text style={styles.text1}>Enter your email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={form.password}
        onChangeText={(value) => handleChange('password', value)}
      />

      <CustomButton
        title="Sign in"
        handlePress={submit}
        containerStyles="w-full mt-7 mb-20"
        isLoading={isSubmitting}
      />

      <Text style={styles.text2}>
        <Link href="/privacy" style={styles.externallink}>Forgot password?</Link>
      </Text>

      <Text style={styles.text3}>
        By clicking Sign Up, you agree to our 
        <Link href="/terms" style={styles.externallink}> Terms of Service</Link> and 
        <Link href="/privacy" style={styles.externallink}> Privacy Policy</Link>
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
    marginBottom: 100,
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

  text3:{
    marginTop: 20,
  },

externallink:{
  fontWeight: 'bold',
  fontSize: 17
}
});

export default SignInScreen;
