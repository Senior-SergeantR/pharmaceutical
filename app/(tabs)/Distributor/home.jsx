import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');


  const categories = [
    { 
        id: '1', 
        title: 'Nila Pharmaceuticals', 
        image: require('../../../assets/images/Nila.png') 
    },
    { 
        id: '2', 
        title: 'Transchem Pharmaceuticals', 
        image: require('../../../assets/images/Nila.png') 
    },
    { 
        id: '3', 
        title: 'Omaera Pharamaceuticals', 
        image: require('../../../assets/images/Nila.png') 
    },
    { 
        id: '4', 
        title: 'Regal Pharmaceuticals', 
        image: require('../../../assets/images/Nila.png') 
    },
    { 
        id: '5', 
        title: 'Dawa Pharmaceuticals', 
        image: require('../../../assets/images/Nila.png') 
    },
    { 
        id: '6', 
        title: 'GoodMan Agencies Limited', 
        image: require('../../../assets/images/Nila.png') 
    }
];



const bannerImages = [
    { id: '1', image: 'https://link.to/banner1.png' },
    { id: '2', image: 'https://link.to/banner2.png' },
    { id: '3', image: 'https://link.to/banner3.png' }
];

const medicinalProducts = [
    {
        id: 'm1',
        name: 'Pain Relief Tablets',
        price: 'KSH 1,299',
        image: 'https://link.to/painrelief.png',
        rating: 4.5,
        reviews: 128,
        inStock: true,
        discount: 10
    },
    {
        id: 'm2',
        name: 'Vitamin C Complex',
        price: 'KSH 1,899',
        image: 'https://link.to/vitaminc.png',
        rating: 4.8,
        reviews: 256,
        inStock: true,
        discount: 10
    },
    {
        id: 'm3',
        name: 'First Aid Kit',
        price: 'KSH 3,299',
        image: 'https://link.to/firstaid.png',
        rating: 4.7,
        reviews: 89,
        inStock: true,
        discount: 10
    },
    {
        id: 'm4',
        name: 'Digital Thermometer',
        price: 'KSH 1,699',
        image: 'https://link.to/thermometer.png',
        rating: 4.6,
        reviews: 167,
        inStock: true,
        discount: 10
    },
    {
        id: 'm5',
        name: 'Blood Pressure Monitor',
        price: 'KSH 6,499',
        image: 'https://link.to/bpmonitor.png',
        rating: 4.9,
        reviews: 203,
        inStock: true,
        discount: 10
    },
    {
        id: 'm6',
        name: 'Immune Booster',
        price: 'KSH 2,599',
        image: 'https://link.to/immune.png',
        rating: 4.4,
        reviews: 145,
        inStock: true,
        discount: 10
    },
    {
        id: 'm7',
        name: 'Digestive Health',
        price: 'KSH 2,199',
        image: 'https://link.to/digestive.png',
        rating: 4.3,
        reviews: 178,
        inStock: true,
        discount: 10
    },
    {
        id: 'm8',
        name: 'Sleep Aid',
        price: 'KSH 1,599',
        image: 'https://link.to/sleep.png',
        rating: 4.6,
        reviews: 234,
        inStock: true,
        discount: 10
    },
    {
        id: 'm9',
        name: 'Joint Support',
        price: 'KSH 2899',
        image: 'https://link.to/joint.png',
        rating: 4.7,
        reviews: 156,
        inStock: true,
        discount: 10
    },
    {
        id: 'm10',
        name: 'Multivitamin Pack',
        price: 'KSH 3,899',
        image: 'https://link.to/multivitamin.png',
        rating: 4.8,
        reviews: 289,
        inStock: true,
        discount: 10
    }
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);


        // Memoized filtered products
    const filteredProducts = useMemo(() => {
          return medicinalProducts.filter(product =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
      }, [searchQuery]);

    const addToCart = useCallback((product) => {
      setCartItems(prev => [...prev, product]);
      // Add animation or toast notification here
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  }, []);

    const renderBannerDot = (index) => (
        <View
            key={index}
            style={[
                styles.dot,
                { backgroundColor: index === activeBannerIndex ? '#333' : '#ccc' }
            ]}
        />
    );

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveBannerIndex(index);
    };

    const renderItem = useCallback(({ item }) => (
      <TouchableOpacity 
          style={styles.item}
          onPress={() => navigation.navigate('CategoryDetails', { category: item })}
      >
          <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
          />
          <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
  ), []);

  const renderMedicinalProduct = useCallback(({ item }) => {
    const priceNumber = parseInt(item.price.replace('KSH ', '').replace(',', ''));
    const discountedPrice = item.discount
        ? `KSH ${Math.round(priceNumber * (1 - item.discount / 100)).toLocaleString()}`
        : item.price;

      return (
          <TouchableOpacity 
              style={styles.medicinalItem}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
              <View style={styles.imageContainer}>
                  <Image
                      source={{ uri: item.image }}
                      style={styles.medicinalImage}
                      resizeMode="cover"
                  />
                  {item.discount > 0 && (
                      <View style={styles.discountBadge}>
                          <Text style={styles.discountText}>{item.discount}% OFF</Text>
                      </View>
                  )}
              </View>
              


              <View style={styles.productInfo}>
                  <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
                  <View style={styles.priceContainer}>
                      <Text style={styles.productPrice}>${discountedPrice}</Text>
                      {item.discount > 0 && (
                          <Text style={styles.originalPrice}>${item.price}</Text>
                      )}
                  </View>

                  <View style={styles.ratingContainer}>
                      <Icon name="star" size={16} color="#FFD700" />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                      <Text style={styles.reviewsText}>({item.reviews})</Text>
                  </View>

                  {item.inStock ? (
                      <TouchableOpacity 
                          style={styles.addToCartButton}
                          onPress={() => addToCart(item)}
                      >
                          <Icon name="add-shopping-cart" size={20} color="#fff" />
                          <Text style={styles.addToCartText}>Add to Cart</Text>
                      </TouchableOpacity>
                  ) : (
                      <Text style={styles.outOfStock}>Out of Stock</Text>
                  )}
              </View>
          </TouchableOpacity>
      );
  }, [addToCart]);

    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      
      {/* Enhanced SearchBar */}
      <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={28} color="#333" />
          </TouchableOpacity>
          
          <View style={styles.searchInputContainer}>
              <Icon name="search" size={24} color="#666" />
              <TextInput
                  style={styles.searchInput}
                  placeholder="Search products, equipment and categories"
                  placeholderTextColor="#666"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                  <TouchableOpacity onPress={() => setSearchQuery('')}>
                      <Icon name="close" size={24} color="#666" />
                  </TouchableOpacity>
              )}
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon name="person" size={28} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.cartButton}
              onPress={() => navigation.navigate('Cart')}
          >
              <Icon name="shopping-cart" size={28} color="#333" />
              {cartItems.length > 0 && (
                  <View style={styles.cartBadge}>
                      <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
                  </View>
              )}
          </TouchableOpacity>
      </View>

      {/* Main Content */}
      <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={() => (
              <>
                  {/* Banner Section */}
                  <View style={styles.bannerContainer}>
                      <ScrollView
                          horizontal
                          pagingEnabled
                          showsHorizontalScrollIndicator={false}
                          onScroll={handleScroll}
                          scrollEventThrottle={16}
                      >
                          {bannerImages.map((banner) => (
                              <Image
                                  key={banner.id}
                                  source={{ uri: banner.image }}
                                  style={styles.bannerImage}
                                  resizeMode="cover"
                              />
                          ))}
                      </ScrollView>
                      <View style={styles.dotContainer}>
                          {bannerImages.map((_, index) => renderBannerDot(index))}
                      </View>
                  </View>
                  
                  {/* Medicinal Products Section */}
                  <View style={styles.medicinalSection}>
                      <Text style={styles.sectionTitle}>Medical Supplies</Text>
                      <FlatList
                          data={filteredProducts}
                          renderItem={renderMedicinalProduct}
                          keyExtractor={item => item.id}
                          numColumns={2}
                          scrollEnabled={false}
                      />
                  </View>
              </>
          )}
      />

      {loading && (
          <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#2ecc71" />
          </View>
      )}
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    searchInput: {
        flex: 1,
        height: 40,
        marginLeft: 8,
        fontSize: 16,
    },
    listContainer: {
        padding: 8,
    },
    item: {
        flex: 1,
        margin: 4,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 100,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 8,
        paddingHorizontal: 4,
        color: '#333',
    },
    bannerContainer: {
        marginVertical: 16,
    },
    bannerImage: {
        width: width,
        height: 200,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    medicinalSection: {
        padding: 12,
        backgroundColor: '#f8f8f8',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    medicinalItem: {
        flex: 1,
        margin: 6,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden',
    },
    medicinalImage: {
        width: '100%',
        height: 140,
        backgroundColor: '#f5f5f5',
    },
    productInfo: {
        padding: 12,
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginBottom: 6,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#666',
    },
    reviewsText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#888',
    },
    addToCartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ecc71',
        padding: 8,
        borderRadius: 6,
        marginTop: 4,
    },
    addToCartText: {
        color: '#fff',
        marginLeft: 6,
        fontWeight: '600',
    },
    imageContainer: {
      position: 'relative',
  },
  discountBadge: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: '#ff4757',
      padding: 4,
      borderRadius: 4,
  },
  discountText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
  },
  priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
  },
  originalPrice: {
      fontSize: 14,
      color: '#999',
      textDecorationLine: 'line-through',
  },
  cartButton: {
      position: 'relative',
  },
  cartBadge: {
      position: 'absolute',
      top: -8,
      right: -8,
      backgroundColor: '#ff4757',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  cartBadgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
  },
  loadingOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255,255,255,0.8)',
      justifyContent: 'center',
      alignItems: 'center',
  },
  outOfStock: {
      color: '#ff4757',
      textAlign: 'center',
      marginTop: 8,
      fontWeight: '600',
    },
});
