import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../products/styles";
const CartModal = ({
  visible,
  onClose,
  cartItems,
  onRemoveFromCart,
  navigation,
}) => {
  console.log("cartItems", cartItems);
  const totalPrice = cartItems.length !== 0
    ? cartItems.reduce((sum, item) => {
        const price = parseFloat(
          item.price.replace("KSh", "").replace(",", "")
        );
        return sum + price;
      }, 0)
    : 0;

  if (cartItems.length === 0) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.cartheader}>
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>Shopping Cart</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              source={require("../../assets/images/empty-cart.jpg")}
              style={styles.image}
            />
            <Text style={styles.message}>No items in your basket!!!</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Browse items</Text>
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
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Shopping Cart</Text>
          </View>
        </View>
        <ScrollView style={styles.cartItemsContainer}>
          {cartItems.map((item, index) => (
            <View key={`${item.id}-${index}`} style={styles.cartItem}>
              <Image source={item.image} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => onRemoveFromCart(item)}
                style={styles.removeButton}
              >
                <MaterialIcons name="delete" size={24} color="#ff3b30" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalAmount}>KSh {totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CartModal;
