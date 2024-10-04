import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton1';
import React, { useState } from 'react';

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setfirst] = useState (false)

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const submit = () => {
    console.log(otp)
  }

  const handleVerify = () => {
    
    console.log('OTP entered:', otp.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <Text style={styles.subtitle}>Enter OTP received for verification</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <CustomButton
          title="Verify"
          handlePress={submit}
          containerStyles="w-full mt-7 mb-20"
          isLoading={isSubmitting}
        />
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
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginBottom: 20,
    
  },
  otpInput: {
    width: 70,
    height: 50,
    borderColor: '#828282',
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },

  text3:{
    marginTop: 80,
  },

  disclaimer: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },

  externallink:{
    fontWeight: 'bold',
    fontSize: 17
  }
});

export default OtpVerificationScreen;
