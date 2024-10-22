import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

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
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#038B01" />
          </TouchableOpacity>
          <Text style={styles.title}>Add Product</Text>
        </View>

        <Pressable style={styles.imageUpload} onPress={handleImagePick}>
          {product.image ? (
            <Image source={{ uri: product.image.uri }} style={styles.imagePreview} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Ionicons name="camera-outline" size={40} color="#ccc" />
              <Text style={styles.imagePlaceholderText}>Tap to select an image</Text>
            </View>
          )}
        </Pressable>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Batch Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter batch number"
            value={product.batchNumber}
            onChangeText={(text) => handleChange('batchNumber', text)}
          />
          {errors.batchNumber && <Text style={styles.errorText}>{errors.batchNumber}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter product name"
            value={product.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Price (KSh)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter price"
              value={product.price}
              onChangeText={(text) => handleChange('price', text)}
              keyboardType="numeric"
            />
            {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
          </View>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quantity"
              value={product.quantity}
              onChangeText={(text) => handleChange('quantity', text)}
              keyboardType="numeric"
            />
            {errors.quantity && <Text style={styles.errorText}>{errors.quantity}</Text>}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Additional Information</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter additional information (e.g., ingredients)"
            value={product.description}
            onChangeText={(text) => handleChange('description', text)}
            multiline
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  imageUpload: {
    height: 200,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  imagePlaceholder: {
    alignItems: 'center',
  },
  imagePlaceholderText: {
    marginTop: 10,
    color: '#888',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#038B01',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
