import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton1';

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    
  };

  const handleVerify = () => {
    setIsSubmitting(true);
    const enteredOtp = otp.join('');
    console.log('OTP entered:', enteredOtp);

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to next screen after verification
      router.push('../(tabs)/Distributor/dashboard');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <Text style={styles.subtitle}>Enter OTP received for verification</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => inputRefs.current[index] = el}
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
        handlePress={handleVerify}
        containerStyles={styles.buttonContainer}
        isLoading={isSubmitting}
      />
      <Text style={styles.disclaimer}>
        By clicking Verify, you agree to our
        <Link href="/terms" style={styles.externalLink}> Terms of Service</Link> and
        <Link href="/privacy" style={styles.externalLink}> Privacy Policy</Link>
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
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 80,
  },
  externalLink: {
    fontWeight: 'bold',
    fontSize: 13,
  }
});

export default OtpVerificationScreen;
