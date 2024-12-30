import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../../../lib/supabase";
import ProductCard from "../../../components/products/ProductCard";
import styles from "../../../components/products/styles";
import CartModal from "../../../components/cart/CartModal";
// import ProductDetails from "../../../components/products/ProductDetails";
import { useNavigation } from '@react-navigation/native';

const formatCurrency = (price) => {
  return `KSh ${price.toLocaleString()}`;
};

const ProductsFn = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      
      const formattedData = data.map(product => ({
        ...product,
        formattedPrice: formatCurrency(product.price)
      }));
      
      setProducts(formattedData);
      setFilteredProducts(formattedData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.dosage.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products]);

  const handleAddToCart = useCallback((product) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`,
      formattedPrice: formatCurrency(product.price)
    };
    setCartItems(prev => [...prev, cartItem]);
  }, []);

  const handleProductSelect = useCallback((item) => {
    setSelectedProduct(item);
  }, []);

  const handleRemoveFromCart = useCallback((itemToRemove) => {
    setCartItems(prev => prev.filter(item => item.cartId !== itemToRemove.cartId));
  }, []);

  const renderProductCard = useCallback(({ item, isRecent }) => (
    <ProductCard
      key={`${item.id}-${isRecent ? 'recent' : 'all'}`}
      item={item}
      onPress={() => handleProductSelect(item)}
      isRecent={isRecent}
      onAddToCart={() => handleAddToCart(item)}
    />
  ), [handleProductSelect, handleAddToCart]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerFixed}>
          <View style={styles.header}>
            <Text style={styles.title}>Catalogue</Text>
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

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search products..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Text style={styles.searchIcon}>🔍</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Recently Added</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentProductsContainer}
            >
              {filteredProducts.slice(0, 5).map((item, index) => (
                <View key={`recent-${item.id}-${index}`}>
                  {renderProductCard({ item, isRecent: true })}
                </View>
              ))}
            </ScrollView>

            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>All Products</Text>
            <View style={styles.productGrid}>
              {filteredProducts.map((item, index) => (
                <View key={`all-${item.id}-${index}`}>
                  {renderProductCard({ item, isRecent: false })}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={() => setIsMenuVisible(false)}
        >
          {/* Menu Modal content */}
        </Modal>

        <CartModal
          visible={isCartVisible}
          onClose={() => setIsCartVisible(false)}
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />

        <ProductDetails
          visible={selectedProduct !== null}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      </SafeAreaView>
    </>
  );
};

export default ProductsFn;
