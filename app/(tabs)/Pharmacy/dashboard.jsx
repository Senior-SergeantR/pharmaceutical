import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../../../lib/supabase";
import { useNavigation } from "expo-router";
import InvoicesScreen from "../Pharmacy/invoices";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.45;

const bannerImages = [
  require("../../../assets/images/banner.jpg"),
  require("../../../assets/images/banner2.jpg"),
  require("../../../assets/images/banner3.jpg"),
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const bannerScrollRef = useRef(null);
  const navigation = useNavigation();

  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        throw error;
      }
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextIndex = (currentBannerIndex + 1) % bannerImages.length;
      setCurrentBannerIndex(nextIndex);
      bannerScrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [currentBannerIndex]);

  const navigateToProduct = (product) => {
    navigation.navigate("productsScreen", { productsScreen }); // Use the correct route name
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const StarRating = ({ rating }) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? "star" : "star-outline"}
            size={16}
            color={star <= rating ? "#FFD700" : "#CCCCCC"}
          />
        ))}
      </View>
    );
  };

  const PromoCard = ({
    image_url,
    name,
    price,
    discount,
    rating,
    stock,
    product_id,
  }) => (
    <TouchableOpacity
      style={styles.promoCard}
      onPress={() => navigateToProduct(product_id)} // Fix: Wrap in arrow function
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image_url }}
          style={styles.promoImage}
          resizeMode="cover"
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.productPrice}>{price}</Text>
        <View style={styles.ratingStockContainer}>
          <StarRating rating={rating} />
          <Text style={styles.stockText}>{stock} in stock</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.navBar}>
        <Text style={styles.logo}>BREEG </Text>
        <View style={styles.menuIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setIsMenuVisible(true)}
          >
            <Ionicons name="menu-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.bannerContainer}>
            <ScrollView
              ref={bannerScrollRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                const newIndex = Math.round(
                  event.nativeEvent.contentOffset.x / width
                );
                setCurrentBannerIndex(newIndex);
              }}
            >
              {bannerImages.map((image, index) => (
                <ImageBackground
                  key={index}
                  source={image}
                  style={[styles.banner, { width }]}
                  resizeMode="cover"
                >
                  <View style={styles.bannerContent}>
                    <Text style={styles.tagline}>Feel good, look good.</Text>
                    <TouchableOpacity style={styles.ctaButton}>
                      <Text style={styles.ctaText}>Learn more</Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              ))}
            </ScrollView>
            <View style={styles.paginationDots}>
              {bannerImages.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        currentBannerIndex === index ? "#038B01" : "#ccc",
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={styles.searchBarContainer}>
            <Ionicons
              name="search-outline"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search products"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          <View style={styles.promosHeader}>
            <Text style={styles.promosTitle}>Promos</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promosContainer}>
            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => <PromoCard {...item} key={item.id} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.promos}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {isMenuVisible && <MenuOverlay />}
    </SafeAreaView>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  // ... (your existing styles)
});

export default HomeScreen;