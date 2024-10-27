import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Link, router, useRouter, useLocalSearchParams } from "expo-router";
import CustomButton from "../../components/CustomButton1";
import { supabase } from "../../lib/supabase";

const SignUpScreen = () => {
  const { licenseId } = useLocalSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        Alert.alert("Sign Up Failed", authError.message);
        console.error("Auth Error:", authError);
        return;
      }

      // Insert additional user details into the "users" table with the auth user ID
      const { error: userError } = await supabase.from("users").insert([
        {
          id: authData.user.id, 
          email,
          license_id: licenseId,
          user_type: "pharmacy", 
        },
      ]);

      if (userError) {
        Alert.alert("Failed to save user details", userError.message);
        console.error("User Table Error:", userError);
      } else {
        Alert.alert("Sign Up Successful", "Welcome to BREEG!");
        console.log("User ID:", authData.user.id);
        router.push("/OTPpharmacy");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Alert.alert("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = () => {
    router.push("/OTPpharmacy");
    console.log("Google Sign Up");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Create an account (Pharmacy)</Text>
        <Text style={styles.text}>
          Sign up with your email address and password
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
          placeholder="*******"

          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
            Terms of Service
          </Link>
          and
          <Link href="/privacy" style={styles.link}>
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
