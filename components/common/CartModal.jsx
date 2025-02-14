import React from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext'; // Ensure this path is correct

const CartModal = ({ visible, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems?.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('KSh', '').replace(',', ''));
    return sum + (isNaN(price) ? 0 : price); // Handle invalid prices
  }, 0);

  // Render empty cart state
  if (cartItems?.length === 0) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Shopping Cart</Text>
          </View>
          <View style={styles.emptyCartContainer}>
            <Image
              source={require('../../assets/images/empty-cart.jpg')} // Update path to your image
              style={styles.emptyCartImage}
            />
            <Text style={styles.emptyCartText}>No items in your basket!</Text>
            <TouchableOpacity style={styles.browseButton} onPress={onClose}>
              <Text style={styles.browseButtonText}>Browse items</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }

  // Render cart with items
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
        </View>

        <ScrollView style={styles.cartItemsContainer}>
          {cartItems?.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>KSh {totalPrice.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default CartModal;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  browseButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    padding: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  checkoutButton: {
    backgroundColor: '#4a90e2',
    padding: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});