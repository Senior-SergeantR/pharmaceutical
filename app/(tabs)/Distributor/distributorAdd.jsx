import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24;
const orderWidth = (width - 64) / 3;

const AddDistributorScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const products = [
    { title: 'Famiclav', description: '200mg Tablets\nBox of 100 Tablets', image: null },
    { title: 'PM-Capsules', description: '20mg Capsules\nBottle of 90 Capsules', image: null },
    { title: 'Product 3', description: 'Description for Product 3', image: null },
    { title: 'Product 4', description: 'Description for Product 4', image: null },
  ];

  const orders = [
    { name: 'Ipsum Chemist', image: null },
    { name: 'Good Life', image: null },
    { name: 'Soothe Pres', image: null },
    { name: 'Health Plus', image: null },
    { name: 'MediCare', image: null },
  ];

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

    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>Add Product</Text>
    </TouchableOpacity>

        {selectedIndex === 0 && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Products</Text>
              <Text style={styles.sectionDescription}>Offers of the week with 5% off</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productContainer}
              >
                {products.map((product, index) => (
                  <Card key={index} containerStyle={[styles.card, { width: cardWidth }]}>
                    <Image
                      source={product.image || require('../../../assets/images/default-meds.jpeg')}
                      style={styles.productImage}
                    />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Divider />
                    <Text>{product.description}</Text>
                  </Card>
                ))}
              </ScrollView>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Orders</Text>
              <Text style={styles.sectionDescription}>Orders in progress</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.orderContainer}
              >
                {orders.map((order, index) => (
                  <View key={index} style={[styles.iconWrapper, { width: orderWidth }]}>
                    <Image
                      source={order.image || require('../../../assets/images/default-pharm.jpg')}
                      style={styles.icon}
                    />
                    <Text style={styles.orderName}>{order.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </>
        )}

        {selectedIndex === 1 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Performing Products</Text>
            <View style={styles.performingProductsContainer}>
              {products.map((product, index) => (
                <View key={index} style={styles.performingProductItem}>
                  <Image
                    source={product.image || require('../../../assets/images/default-meds.jpeg')}
                    style={styles.performingProductImage}
                  />
                  <Text style={styles.performingProductTitle}>{product.title}</Text>
                  <Text style={styles.performingProductDescription}>{product.description}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
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
    marginTop: 10,
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
  section: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 8,
    color: '#828282',
    fontWeight: 'bold',
  },
  productContainer: {
    paddingLeft: 5,
  },
  orderContainer: {
    paddingRight: 32,
  },
  card: {
    marginRight: 16,
    marginLeft: 0,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 15,
  },
  iconWrapper: {
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 50,
  },
  orderName: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  performingProductsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  performingProductItem: {
    width: cardWidth,
    marginBottom: 16,
  },
  performingProductImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 8,
  },
  performingProductTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  performingProductDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default AddDistributorScreen;
