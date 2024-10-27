import { Link, router } from "expo-router";
import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import CustomButton from "../../components/CustomButton1";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

const SignInScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = async () => {
    setIsSubmitting(true);

    const { email, password } = form;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Login successful", ToastAndroid.SHORT);
        router.push("/../../(tabs)/Pharmacy/dashboard");
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <Text style={styles.subtitle}>Login Account</Text>
      <Text style={styles.text1}>Enter your email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={form.password}
        onChangeText={(value) => handleChange("password", value)}
      />

      <CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles={styles.buttonContainer}
        isLoading={isSubmitting}
      />

      <Text style={styles.forgotPasswordText}>
        <Link href="/ForgotPassword" style={styles.externalLink}>
          Forgot password?
        </Link>
      </Text>
      <Text style={styles.prompt}>Create a new account?</Text>

      <CustomButton
        title="Sign Up"
        handlePress={() => {
          router.push("/(auth)/SignUpPharmacy");
        }}
        containerStyles={styles.signUpButtonContainer}
      />

      <Text style={styles.text3}>
        By signing in, you agree to our
        <Link href="/terms" style={styles.externalLink}>
          {" "}
          Terms of Service
        </Link>{" "}
        and
        <Link href="/privacy" style={styles.externalLink}>
          {" "}
          Privacy Policy
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", 
  },
  header: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#555",
  },
  text1: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: "#fff", 
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  signUpButtonContainer: {
    width: "100%",
    marginTop: 10,
  },
  prompt: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  forgotPasswordText: {
    marginTop: 15,
    color: "#007bff",
    fontWeight: "600",
  },
  text3: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
    fontSize: 12,
  },
  externalLink: {
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default SignInScreen;
