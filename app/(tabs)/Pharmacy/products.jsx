import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { supabase } from "../../../lib/supabase";
import ProductCard from "../../../components/products/ProductCard";
import CartModal from "../../../components/cart/CartModal";
import ProductDetails from "../../../components/products/ProductDetail";
import styles from "../../../components/products/styles";

const formatCurrency = (price) => {
  return `KSh ${price.toLocaleString()}`;
};

const ProductsFn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Fetch products from Supabase
  const getProducts = useCallback(async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;

      const formattedData = data.map((product) => ({
        ...product,
        formattedPrice: formatCurrency(product.price),
      }));

      setProducts(formattedData);
      setFilteredProducts(formattedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // Handle search functionality
  const handleSearch = useCallback(
    (query) => {
      setSearchQuery(query);
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.dosage.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    },
    [products]
  );

  // Add product to cart
  const handleAddToCart = useCallback((product) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`,
      formattedPrice: formatCurrency(product.price),
    };
    setCartItems((prev) => [...prev, cartItem]);
  }, []);

  // Remove product from cart
  const handleRemoveFromCart = useCallback((itemToRemove) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartId !== itemToRemove.cartId)
    );
  }, []);

  // Render product card
  const renderProductCard = useCallback(
    ({ item, isRecent }) => (
      <ProductCard
        key={`${item.id}-${isRecent ? "recent" : "all"}`}
        item={item}
        onPress={() => setSelectedProduct(item)}
        isRecent={isRecent}
        onAddToCart={() => handleAddToCart(item)}
      />
    ),
    [handleAddToCart]
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
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

          {/* Search Bar */}
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

        {/* Product List */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            {/* Recently Added Products */}
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

            {/* All Products */}
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

        {/* Menu Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={() => setIsMenuVisible(false)}
        >
          {/* Add menu content here */}
        </Modal>

        {/* Cart Modal */}
        <CartModal
          visible={isCartVisible}
          onClose={() => setIsCartVisible(false)}
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />

        {/* Product Details Modal */}
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