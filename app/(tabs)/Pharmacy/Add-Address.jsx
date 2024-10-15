import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const counties = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Nyeri', 'Meru', 'Machakos', 'Nanyuki', 'Naivasha', 'Embu', 'Kericho', 'Narok', 'Kakamega', 'Kitale'
];

const subcounties = {
  Nairobi: ['Westlands', 'Langata', 'Dagoretti', 'Embakasi', 'Kasarani'],
  Mombasa: ['Mvita', 'Changamwe', 'Kisauni', 'Nyali', 'Likoni'],
  // Add other counties and their subcounties here
};
const AddAddressScreen = ({ navigation }) => {
  const [selectedCounty, setSelectedCounty] = useState(counties[0]);
  const [selectedSubCounty, setSelectedSubCounty] = useState(subcounties[counties[0]][0]);
  const [addressType, setAddressType] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#038B01" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Address</Text>
        </View>
        <View style={styles.horizontalLine} />

        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#888" />
          <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#888" />
          <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" placeholderTextColor="#888" />

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select County</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedCounty}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setSelectedCounty(itemValue);
                  setSelectedSubCounty(subcounties[itemValue][0]);
                }}
              >
                {counties.map((county) => (
                  <Picker.Item label={county} value={county} key={county} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select SubCounty</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedSubCounty}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedSubCounty(itemValue)}
              >
                {subcounties[selectedCounty].map((subcounty) => (
                  <Picker.Item label={subcounty} value={subcounty} key={subcounty} />
                ))}
              </Picker>
            </View>
          </View>

          <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#888" />

          <Text style={styles.pickerLabel}>Address Type</Text>
          <View style={styles.buttonContainer}>
            {['Home', 'Work', 'Other'].map((type) => (
              <TouchableOpacity
                key={type}
                style={[styles.button, addressType === type && styles.selectedButton]}
                onPress={() => setAddressType(type)}
              >
                <Text style={[styles.buttonText, addressType === type && styles.selectedButtonText]}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <LinearGradient
              colors={['#038B01', '#04A801']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.saveButtonText}>Save Address</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'relative',
  },
  backButton: {
    marginTop: 50,
   position: 'absolute',
    left: 16,
  },
  headerTitle: {
    
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  horizontalLine: {
    
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  formContainer: {
    marginTop: 20,
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },
  pickerWrapper: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  picker: {
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  button: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedButton: {
    backgroundColor: '#038B01',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedButtonText: {
    color: '#fff',
  },
  saveButton: {
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  gradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddAddressScreen;
