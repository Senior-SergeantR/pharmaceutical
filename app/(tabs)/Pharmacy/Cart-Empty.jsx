import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,  StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShoppingCartScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleBrowseItems = () => {
    navigation.navigate('BrowseItems');
  };

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/empty-cart.jpg')}
          style={styles.image}
        />
        <Text style={styles.message}>No items in your basket!!!</Text>
        <TouchableOpacity style={styles.button} onPress={handleBrowseItems}>
          <Text style={styles.buttonText}>Browse items</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    backgroundColor: '#038B01',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ShoppingCartScreen;
