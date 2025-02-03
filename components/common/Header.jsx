import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import MenuModal from './MenuModal';
import styles from './styles';

const Header = ({ title, navigation }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => setIsCartVisible(true)}
          >
            <MaterialIcons name="shopping-cart" size={24} color="#333" />
            {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => setIsMenuVisible(true)}
          >
            <MaterialIcons name="menu" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <CartModal
        visible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
      />
      
      <MenuModal
        visible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
        navigation={navigation}
      />
    </>
  );
};

export default Header;
