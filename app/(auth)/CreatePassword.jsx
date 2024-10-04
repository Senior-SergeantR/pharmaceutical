import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton1';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [form, setForm] = useState({
    writePassword: '',
    reWritePassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <Text style={styles.subtitle}>Create Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Write password"
        secureTextEntry
        value={form.writePassword}
        onChangeText={(value) => handleChange('writePassword', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Rewrite password"
        secureTextEntry
        value={form.reWritePassword}
        onChangeText={(value) => handleChange('reWritePassword', value)}
      />

      <CustomButton
        title="Sign up"
        handlePress={submit}
        containerStyles="w-full mt-7 mb-20"
        isLoading={isSubmitting}
      />

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
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text3: {
    textAlign: 'center',
    marginTop: 40,
  },


  externallink:{
    fontWeight: 'bold',
    fontSize: 17
  }
});

export default LoginScreen;
