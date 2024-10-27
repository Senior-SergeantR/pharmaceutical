import React, { useState } from "react";
import { StatusBar, View, Text, StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton1";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";

export default function App() {
  const [form, setForm] = useState({
    licenseID: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkIfValidLicenseID = (licenseID) => {
    return licenseID === "123456"; // Simplified condition
  };

  const submit = () => {
    setIsSubmitting(true);
    if (checkIfValidLicenseID(form.licenseID)) {
      ToastAndroid.show("Login successful", ToastAndroid.SHORT);
      goToNextScreen();
    } else {
      ToastAndroid.show("Invalid license ID", ToastAndroid.SHORT);
    }
    setIsSubmitting(false);
  };

  const goToNextScreen = () => {
    router.push({
      pathname: "/SignUpPharm2",
      params: { licenseID: form.licenseID },
    });
  };

  const goToLoginScreen = () => {
    router.push("/(auth)/Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
          keyboardType="numeric"
          style={styles.formFieldInput}
        />

        <Text style={styles.termsText}>
          By clicking Sign Up, you agree to our
          <Link href="/terms" style={styles.externalLink}>
            Terms of Service
          </Link>
          and
          <Link href="/privacy" style={styles.externalLink}>
            Privacy Policy
          </Link>
        </Text>

        <CustomButton
          title="Sign up"
          handlePress={submit}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />

        <Text style={styles.loginPrompt}>Already have an account?</Text>
        <CustomButton
          title="Login"
          handlePress={goToLoginScreen}
          containerStyles={styles.loginButtonContainer}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light grey background for a modern feel
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Darker title color for better readability
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555", // Slightly lighter for subtitle
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#666", // Soft color for description
  },
  formField: {
    marginBottom: 20,
    width: "100%",
  },
  formFieldInput: {
    width: "100%",
    borderColor: "#ccc", // Light border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#fff", // White background for inputs
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    color: "#888", // Grey color for terms
    marginBottom: 10,
  },
  externalLink: {
    marginHorizontal: 5,
    fontWeight: "bold",
    color: "#007bff", // Bootstrap primary color for links
  },
  loginPrompt: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  loginButtonContainer: {
    width: "100%",
    marginTop: 10,
  },
});
