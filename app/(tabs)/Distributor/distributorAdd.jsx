import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { router } from 'expo-router';
import CustomButton from '../../../components/CustomButton';
import ProductCard from '../../../components/products/ProductCard'; // Ensure this path is correct

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24;
const orderWidth = (width - 64) / 3;

const DistributorAdd = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const products = [
    { image_url: null, name: 'Famiclav', price: 1000, dosage: '200mg Tablets\nBox of 100 Tablets' },
    { image_url: null, name: 'PM-Capsules', price: 1500, dosage: '20mg Capsules\nBottle of 90 Capsules' },
    { image_url: null, name: 'Product 3', price: 2000, dosage: 'Description for Product 3' },
    { image_url: null, name: 'Product 4', price: 2500, dosage: 'Description for Product 4' },
  ];

  const handleAddProduct = () => {
    router.push('/addproduct');
  };

  const renderProducts = () => (
    <>
      <ScrollView horizontal>
        {products.map((product, index) => (
          <ProductCard key={index} item={product} width={cardWidth} />
        ))}
      </ScrollView>
    </>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore Products</Text>
        </View>
        <View style={styles.horizontalLine} />

        <SegmentedControl
          values={['Products', 'Performing Products']}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          style={styles.segmentedControl}
          backgroundColor="#E0E0E0"
          tintColor={selectedIndex === 0 ? '#eb9f07' : '#eb9f07'}
          fontStyle={{ color: '#000' }}
          activeFontStyle={{ color: '#fff' }}
        />

        <CustomButton
          title="Add Product"
          handlePress={handleAddProduct}
          containerStyles={styles.addButton}
          textStyles={styles.addButtonText}
        />

        {renderProducts()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    marginBottom: 0,
  },
  segmentedControl: {
    margin: 16,
    backgroundColor: '#E0E0E0',
  },
  addButton: {
    backgroundColor: '#038B01',
    padding: 10,
    margin: 16,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DistributorAdd;