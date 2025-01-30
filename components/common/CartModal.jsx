import React from 'react';
import { Modal, SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import styles from './styles';

const CartModal = ({ visible, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('KSh', '').replace(',', ''));
    return sum + price;
  }, 0);

  if (cartItems.length === 0) {
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
              //source={require('../../../assets/images/empty-cart.jpg')}
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

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Cart content implementation */}
    </Modal>
  );
};

export default CartModal;
