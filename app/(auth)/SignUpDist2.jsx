import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import CustomButton from "../../components/CustomButton1";
import { supabase } from "../../lib/supabase";

const SignUpScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { licenseID } = useLocalSearchParams();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Validate inputs
    if (!licenseID) {
      ToastAndroid.show("License ID is required", ToastAndroid.SHORT);
      setIsSubmitting(false);
      return;
    }
    if (!email || !password) {
      ToastAndroid.show("Email and password are required", ToastAndroid.SHORT);
      setIsSubmitting(false);
      return;
    }

    try {
      // Call Supabase to sign up the user
      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email,
          password,
        }
      );

      if (signUpError) {
        ToastAndroid.show(signUpError.message, ToastAndroid.SHORT);
        setIsSubmitting(false);
        return;
      }

      // Insert additional user details into the "users" table with the auth user ID
      const { error: userError } = await supabase.from("users").insert([
        {
          id: authData.user.id,
          email,
          license_id: licenseID,
          user_type: "distributor",
        },
      ]);

      if (userError) {
        ToastAndroid.show(userError.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Sign up successful", ToastAndroid.SHORT);
        // Navigate to the OTP screen after successful sign-up
        router.push("/OTPdistributor");
      }
    } catch (error) {
      console.error(error);
      ToastAndroid.show(
        "An error occurred, please try again",
        ToastAndroid.SHORT
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = () => {
    // For now, just navigate to the next screen
    router.push("/OTPdistributor");
    // In the future, implement Google Sign Up logic here
    console.log("Google Sign Up");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Create an account (Distributor)</Text>
        <Text style={styles.text}>
          Enter your email and password to sign up for this app
        </Text>
        <TextInput
          style={styles.input}
          placeholder="email@domain.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <CustomButton
          title="Sign up with email"
          handlePress={handleSubmit}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />
        <Text style={styles.orText}>or continue with</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignUp}
        >
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>
          By clicking Sign Up, you agree to our
          <Link href="/terms" style={styles.link}>
            {" "}
            Terms of Service
          </Link>{" "}
          and
          <Link href="/privacy" style={styles.link}>
            {" "}
            Privacy Policy
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 60,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 15,
    fontSize: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  orText: {
    marginVertical: 15,
    color: "#828282",
    fontWeight: "bold",
  },
  googleButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#DB4437",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disclaimer: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default SignUpScreen;
