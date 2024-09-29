import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton1';
import { Redirect, router } from 'expo-router';
import FormField from '../../components/FormField';
import { Link } from 'expo-router';


export default function App() {

  const [form, setForm] = useState({
    licenseID:'',
    // password:''
  })

  const [isSubmitting, setfirst] = useState (false)

  const submit = () => {
    console.log(form)
  }

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

        <FormField
          title="Enter License ID Here                                                                              "
          value={form.licenseID}
          handleChangeText={(e) => setForm({ ...form,
            licenseID: e
          })}
          otherStyles= "mt-7"
          keyboardType="license-ID"
          style={{
            width:'100%',
          }}
        />

        {/* <FormField
          title="password                                                                                "
          value={form.password}
          handleChangeText={(e) => setForm({ ...form,
            password: e
          })}
          otherStyles= "mt-7"
          keyboardType="license-ID"
          style={{
            width:'100%',
          }}
        /> */}
        
        

        <CustomButton
          title="Sign up"
          handlePress={submit}
          containerStyles="w-full mt-7 mb-20"
          isLoading={isSubmitting}
        />

        <Text className="mt-20">
          By clicking Sign Up, you agree to our 
          <Link href= "/terms" style={styles.externallink}> Terms of Service</Link>  and 
          <Link href= "/privacy"style={styles.externallink}> Privacy Policy</Link>
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
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 150,
  },
  description: {
    fontSize: 18,
    textAlign: 'start',
    marginBottom: 50,
  },

  subtitle:{
    fontSize: 25,
    textAlign: 'start',
    fontWeight: 'bold',
    
    
  },

  externallink:{
    fontWeight: 'bold',
    fontSize: 17
  }
});
