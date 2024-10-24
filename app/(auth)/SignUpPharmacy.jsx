import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton1';
import FormField from '../../components/FormField';
import { Link, router } from 'expo-router';


export default function App() {
  const [form, setForm] = useState({
    licenseID: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    console.log(form);
   
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000); 
  };

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <View style={styles.centeredView}>
        <Text style={styles.title}>BREEG</Text>
        <Text style={styles.subtitle}>Create an account</Text>
        <Text style={styles.description}>
          Enter your official license to sign up for this app
        </Text>

        <FormField
          title="Enter License ID Here"
          value={form.licenseID}
          handleChangeText={(text) => setForm({ ...form, licenseID: text })}
          otherStyles={styles.formField}
          keyboardType="default"
          style={styles.formFieldInput}
        />

        <CustomButton
          title="Sign up"
          handlePress={submit}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />
{/* temporary button to access other screens without authentication */}
        <CustomButton
          title="Next Screen"
          handlePress={() => router.push('/SignUpPharm2')}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />

        <Text style={styles.termsText}>
          By clicking Sign Up, you agree to our
          <Link href="/terms" style={styles.externalLink}> Terms of Service</Link> and
          <Link href="/privacy" style={styles.externalLink}> Privacy Policy</Link>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
  },
  formField: {
    marginTop: 20,
    width: '100%',
  },
  formFieldInput: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 20,
  },
  termsText: {
    marginTop: 20,
    textAlign: 'center',
  },
  externalLink: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
