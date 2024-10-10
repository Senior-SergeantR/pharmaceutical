import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 
import {StatusBar } from 'react-native';

const AddProductScreen = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState({
    batchNumber: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You need to grant camera roll permissions to upload an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: result.assets[0],
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!product.batchNumber) newErrors.batchNumber = 'Batch number is required';
    if (!product.name) newErrors.name = 'Product name is required';
    if (!product.price) newErrors.price = 'Price is required';
    if (isNaN(parseFloat(product.price))) newErrors.price = 'Price must be a number';
    if (!product.quantity) newErrors.quantity = 'Quantity is required';
    if (isNaN(parseInt(product.quantity))) newErrors.quantity = 'Quantity must be a number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      
      console.log('Product data:', product);
      Alert.alert('Success', 'Product added successfully!');
      
      setProduct({
        batchNumber: '',
        name: '',
        price: '',
        quantity: '0',
        description: '',
        image: null,
      });
    } else {
      Alert.alert('Error', 'Please correct the errors in the form.');
    }
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"  
        backgroundColor="#fff"   
        translucent={false}
      />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#038B01" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Add Product</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
      
        <TouchableOpacity style={styles.imageUpload} onPress={handleImagePick}>
          {product.image ? (
            <Image source={{ uri: product.image.uri }} style={styles.imagePreview} />
          ) : (
            <Text>Tap to select an image</Text>
          )}
        </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter batch number"
        value={product.batchNumber}
        onChangeText={(text) => handleChange('batchNumber', text)}
      />
      {errors.batchNumber && <Text style={styles.errorText}>{errors.batchNumber}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={product.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="KSh Price"
            value={product.price}
            onChangeText={(text) => handleChange('price', text)}
            keyboardType="numeric"
          />
          {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={product.quantity}
            onChangeText={(text) => handleChange('quantity', text)}
            keyboardType="numeric"
          />
          {errors.quantity && <Text style={styles.errorText}>{errors.quantity}</Text>}
        </View>
      </View>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter additional information (e.g., ingredients)"
        value={product.description}
        onChangeText={(text) => handleChange('description', text)}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,

  },

  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUpload: {
    height: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#038B01',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
