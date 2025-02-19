import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const ProductDetail = ({ product }) => {
  // If product is null or undefined, show a loading indicator
  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading product details...</Text>
      </View>
    );
  }

  // If product.image is missing, use a placeholder image
  const imageSource = product.image
    ? { uri: product.image }
    : require('../../assets/images/lab.jpg'); // Add a local placeholder image

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{product.name || 'No product name available'}</Text>
      <Text style={styles.description}>
        {product.description || 'No product description available'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProductDetail;