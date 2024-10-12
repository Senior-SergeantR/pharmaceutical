import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const cardWidth = width * 0.45;

const HomeScreen = () => {
  const StarRating = ({ rating }) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={16}
            color={star <= rating ? '#FFD700' : '#CCCCCC'}
          />
        ))}
      </View>
    );
  };

  const PromoCard = ({ image, name, price, discount, rating, stock }) => (
    <TouchableOpacity style={styles.promoCard}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.promoImage} resizeMode="cover" />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{name}</Text>
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
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
     
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.bannerContainer}>
  <ImageBackground 
    source={require('../../../assets/images/banner.jpg')}
    style={styles.banner}
    resizeMode="cover"
  >
    <View style={styles.bannerContent}>
      <Text style={styles.tagline}>Feel good, look good.</Text>
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Learn more</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
</View>


        <View style={styles.searchBarContainer}>
          <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search products"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.promosHeader}>
          <Text style={styles.promosTitle}>Promos</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.promosContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promos}
          >
            <PromoCard
              image={require('../../../assets/images/blue-pill.jpeg')}
              name="Pain Relief Extra Strength Tablets"
              price="KSh1000.00"
              discount="-25%"
              rating={4}
              stock={50}
            />
            <PromoCard
              image={require('../../../assets/images/blue-pill.jpeg')}
              name="Vitamin C Immune Support Supplements"
              price="KSh1500.00"
              discount="-30%"
              rating={5}
              stock={30}
            />
            <PromoCard
              image={require('../../../assets/images/blue-pill.jpeg')}
              name="Allergy Relief 24-Hour Syrup"
              price="KSh800.00"
              discount="-20%"
              rating={3}
              stock={75}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  navBar: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#038B01',
  },
  menuIcons: {
    flexDirection: 'row',
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
    flex: 1,
    justifyContent: 'center',
  },
  bannerContent: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    width: '30%',
  },
  tagline: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#038B01',
    marginBottom: 10,
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 29,
    backgroundColor: '#038B01',
    borderRadius: 10,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 25,
    margin: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  promosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#038B01',
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
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    height: 180,
    width: '100%',
  },
  promoImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff3b30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#038B01',
    fontWeight: '600',
    marginBottom: 5,
  },
  ratingStockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
  },
  stockText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;
