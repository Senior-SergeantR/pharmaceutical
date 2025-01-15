import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import CustomButton from "../../../components/CustomButton1";
import { supabase } from "../../../lib/supabase";
import { FontAwesome } from "@expo/vector-icons";

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const inputRefs = useRef([]);

  // Load user profile data on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = supabase.auth.user();
      if (user) {
        const { data, error } = await supabase
          .from("users")
          .select("name, email, image")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching user profile:", error.message);
        } else {
          setProfile(data);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    setIsSubmitting(true);
    const enteredOtp = otp.join("");
    console.log("OTP entered:", enteredOtp);

    if (enteredOtp === "1234") {
      setTimeout(() => {
        setIsSubmitting(false);
        Alert.alert("Success", "OTP verified successfully!");
        router.push("/../../(tabs)/Pharmacy/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        Alert.alert("Invalid OTP", "Please enter the correct OTP.");
      }, 1000);
    }
  };

  const handleEditProfile = () => {
    setModalVisible(true);
  };

  const handleSaveProfile = async () => {
    setModalVisible(false);
    // Update the profile details in Supabase
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from("users")
        .update({
          name: profile.name,
          email: profile.email,
          image: profile.image, // Update image if it changes
        })
        .eq("id", user.id);

      if (error) {
        console.error("Error updating profile:", error.message);
        Alert.alert("Error", "Failed to update profile.");
      } else {
        setProfile(data);
        Alert.alert(
          "Profile Updated",
          "Your profile was successfully updated."
        );
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>BREEG</Text>

      <View style={styles.profileContainer}>
        <Image
          source={
            profile?.image
              ? { uri: profile.image }
              : require("../../../assets/images/user.png")
          }
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
          <FontAwesome name="pencil" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Enter OTP received for verification</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
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

      {/* Edit Profile Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={profile?.name || ""}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={profile?.email || ""}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
            />
            <CustomButton title="Save" handlePress={handleSaveProfile} />
            <CustomButton
              title="Cancel"
              handlePress={() => setModalVisible(false)}
              containerStyles={styles.cancelButton}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 50,
  },
  profileContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 70,
    height: 50,
    borderColor: "#828282",
    borderWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginTop: 80,
  },
  externalLink: {
    fontWeight: "bold",
    fontSize: 13,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  cancelButton: {
    backgroundColor: "red",
    marginTop: 10,
  },
});

export default OtpVerificationScreen;
