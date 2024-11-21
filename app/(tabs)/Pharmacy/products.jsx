import React, { useEffect, useState } from "react";
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
import ProductScreen from "../../../components/products/ProductScreen";
import styles from "../../../components/products/styles";
import CartModal from "../../../components/cart/CartModal";

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

  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      
      // Format prices before setting state
      const formattedData = data.map(product => ({
        ...product,
        formattedPrice: formatCurrency(product.price)
      }));
      
      setProducts(formattedData);
      setFilteredProducts(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.dosage.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`,
      formattedPrice: formatCurrency(product.price)
    };
    setCartItems([...cartItems, cartItem]);
  };

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
              {filteredProducts.slice(0, 5).map((item) => (
                <ProductCard
                  key={`recent-${item.product_id}`}
                  item={item}
                  onPress={() => setSelectedProduct(item)}
                  isRecent={true}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </ScrollView>

            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>All Products</Text>
            <View style={styles.productGrid}>
              {filteredProducts.map((item) => (
                <ProductCard
                  key={`all-${item.product_id}`}
                  item={item}
                  onPress={() => setSelectedProduct(item)}
                  onAddToCart={handleAddToCart}
                  isRecent={false}
                />
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
          <TouchableOpacity
            style={styles.menuOverlay}
            activeOpacity={1}
            onPress={() => setIsMenuVisible(false)}
          >
            <View style={styles.menuContainer}>
              <View style={styles.menuHeader}>
                <Text style={styles.menuHeaderTitle}>Menu</Text>
                <TouchableOpacity onPress={() => setIsMenuVisible(false)}>
                  <MaterialIcons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={styles.menuContent}>
                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="home" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Home</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="event" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Reminders</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="local-mall" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Orders</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="people-outline" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Customers</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="place" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Find Pharmacy</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="description" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Health Articles</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="settings" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Settings</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="help-outline" size={24} color="#038B01" />
                    <Text style={styles.menuText}>Help & Support</Text>
                    <MaterialIcons name="chevron-right" size={24} color="#777" />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>

        <CartModal
          visible={isCartVisible}
          onClose={() => setIsCartVisible(false)}
          cartItems={cartItems}
          onRemoveFromCart={(item) => {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
          }}
        />
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedProduct !== null}
        onRequestClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <ProductScreen
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </Modal>
    </>
  );
};

export default ProductsFn;
