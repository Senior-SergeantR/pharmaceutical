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
      //using supabase
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        throw error;
      }
      console.log(data);
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
    navigation.navigate("products", { product });
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

  const MenuOverlay = () => (
    <TouchableOpacity
      style={styles.menuOverlay}
      activeOpacity={1}
      onPress={() => setIsMenuVisible(false)}
    >
      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="medical-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Prescriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="cart-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="calendar-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="location-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Find Pharmacy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-text-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Health Articles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

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
      onPress={navigateToProduct(product_id)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  navBar: {
    marginTop: 30,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#038B01",
  },
  menuIcons: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 5,
    marginLeft: 15,
  },
  bannerContainer: {
    height: height * 0.35,
    marginBottom: -40,
  },
  banner: {
    height: "100%",
  },
  bannerContent: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    width: "30%",
  },
  paginationDots: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  tagline: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#038B01",
    marginBottom: 10,
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 29,
    backgroundColor: "#038B01",
    borderRadius: 10,
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 25,
    margin: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
  },
  promosHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  promosTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    color: "#038B01",
    fontSize: 16,
  },
  promosContainer: {
    height: 300,
  },
  promos: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  promoCard: {
    width: cardWidth,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    height: 180,
    width: "100%",
  },
  promoImage: {
    width: "100%",
    height: "100%",
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff3b30",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#038B01",
    fontWeight: "600",
    marginBottom: 5,
  },
  ratingStockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
  },
  stockText: {
    fontSize: 12,
    color: "#777",
  },
  menuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  menuContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
    maxHeight: "80%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
});

export default HomeScreen;
