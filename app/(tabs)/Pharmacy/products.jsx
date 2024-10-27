import React, { useState } from "react";
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
  Animated,
} from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


const { height } = Dimensions.get('window');


const products = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Amoxicillin is a penicillin antibiotic used to treat bacterial infections.",
    price: "KSh1000.00",
    itemNumber: "BN-252",
    ingredients: [
      "Amoxicillin trihydrate equivalent to Amoxicillin 500 mg",
      "Clavulanic acid as potassium clavulanate 125 mg",
      "Microcrystalline cellulose 100 mg",
      "Sodium starch glycolate 50 mg",
    ],
  },
  {
    id: "2",
    name: "Ibuprofen",
    dosage: "200mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation.",
    price: "KSh500.00",
    itemNumber: "BN-253",
    ingredients: [
      "Ibuprofen 200 mg",
      "Microcrystalline cellulose 50 mg",
      "Croscarmellose sodium 25 mg",
      "Magnesium stearate 10 mg",
    ],
  },
  {
    id: "3",
    name: "Paracetamol",
    dosage: "500mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Paracetamol is used to treat mild to moderate pain and reduce fever.",
    price: "KSh300.00",
    itemNumber: "BN-254",
    ingredients: [
      "Paracetamol 500 mg",
      "Povidone 30 mg",
      "Starch 20 mg",
      "Magnesium stearate 10 mg",
    ],
  },
  {
    id: "4",
    name: "Cetirizine",
    dosage: "10mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Cetirizine is an antihistamine used to relieve allergy symptoms.",
    price: "KSh200.00",
    itemNumber: "BN-255",
    ingredients: [
      "Cetirizine hydrochloride 10 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "5",
    name: "Metformin",
    dosage: "500mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Metformin is used to control high blood sugar in people with type 2 diabetes.",
    price: "KSh800.00",
    itemNumber: "BN-256",
    ingredients: [
      "Metformin hydrochloride 500 mg",
      "Povidone 40 mg",
      "Magnesium stearate 10 mg",
      "Hypromellose 20 mg",
    ],
  },
  {
    id: "6",
    name: "Aspirin",
    dosage: "100mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Aspirin is used to reduce pain, fever, or inflammation.",
    price: "KSh150.00",
    itemNumber: "BN-257",
    ingredients: [
      "Aspirin 100 mg",
      "Corn starch 30 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "7",
    name: "Loratadine",
    dosage: "10mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Loratadine is an antihistamine that reduces the effects of natural chemical histamine in the body.",
    price: "KSh250.00",
    itemNumber: "BN-258",
    ingredients: [
      "Loratadine 10 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "8",
    name: "Omeprazole",
    dosage: "20mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Omeprazole is used to treat gastroesophageal reflux disease (GERD) and other conditions caused by excess stomach acid.",
    price: "KSh600.00",
    itemNumber: "BN-259",
    ingredients: [
      "Omeprazole 20 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "9",
    name: "Simvastatin",
    dosage: "20mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Simvastatin is used to lower cholesterol and triglycerides in the blood.",
    price: "KSh700.00",
    itemNumber: "BN-260",
    ingredients: [
      "Simvastatin 20 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "10",
    name: "Amlodipine",
    dosage: "5mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Amlodipine is used to treat high blood pressure and chest pain (angina).",
    price: "KSh500.00",
    itemNumber: "BN-261",
    ingredients: [
      "Amlodipine besylate 5 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "11",
    name: "Atorvastatin",
    dosage: "10mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Atorvastatin is used to lower cholesterol and triglycerides in the blood.",
    price: "KSh800.00",
    itemNumber: "BN-262",
    ingredients: [
      "Atorvastatin calcium 10 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "12",
    name: "Ciprofloxacin",
    dosage: "500mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Ciprofloxacin is an antibiotic used to treat a variety of bacterial infections.",
    price: "KSh900.00",
    itemNumber: "BN-263",
    ingredients: [
      "Ciprofloxacin hydrochloride 500 mg",
      "Microcrystalline cellulose 50 mg",
      "Croscarmellose sodium 25 mg",
      "Magnesium stearate 10 mg",
    ],
  },
  {
    id: "13",
    name: "Doxycycline",
    dosage: "100mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Doxycycline is an antibiotic used to treat a wide variety of bacterial infections.",
    price: "KSh700.00",
    itemNumber: "BN-264",
    ingredients: [
      "Doxycycline hyclate 100 mg",
      "Microcrystalline cellulose 50 mg",
      "Croscarmellose sodium 25 mg",
      "Magnesium stearate 10 mg",
    ],
  },
  {
    id: "14",
    name: "Fluconazole",
    dosage: "150mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Fluconazole is an antifungal medication used to treat infections caused by fungus.",
    price: "KSh600.00",
    itemNumber: "BN-265",
    ingredients: [
      "Fluconazole 150 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  },
  {
    id: "15",
    name: "Hydrochlorothiazide",
    dosage: "25mg",
    image: require("../../../assets/images/amoxicillin.png"),
    description: "Hydrochlorothiazide is used to treat high blood pressure and fluid retention.",
    price: "KSh400.00",
    itemNumber: "BN-266",
    ingredients: [
      "Hydrochlorothiazide 25 mg",
      "Lactose monohydrate 50 mg",
      "Microcrystalline cellulose 20 mg",
      "Magnesium stearate 5 mg",
    ],
  }
];


const ProductCard = ({ item, onPress, isRecent, onAddToCart }) => (
  <TouchableOpacity style={[styles.card, isRecent && styles.recentCard]} onPress={onPress}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDosage}>{item.dosage}</Text>
      <View style={styles.priceCartContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={(e) => {
            e.stopPropagation();
            onAddToCart(item);
          }}
        >
          <MaterialIcons name="add-shopping-cart" size={24} color="#038B01" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);


const ProductsFn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
    setCartItems([...cartItems, product]);
  };

  const renderHeader = () => (
    <View style={styles.headerFixed}>
      <View style={styles.header}>
        <Text style={styles.title}>Catalogue</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => alert(`Cart Items: ${cartItems.length}`)}
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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>
    </View>
  );

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
                onPress={() => alert(`Cart Items: ${cartItems.length}`)}
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
  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Products</Text>
          </TouchableOpacity>
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
                  key={item.id}
                  item={item}
                  onPress={() => setSelectedProduct(item)}
                  onAddToCart={handleAddToCart}
                  isRecent={true}
                />
              ))}
            </ScrollView>
  
            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>All Products</Text>
            <View style={styles.productGrid}>
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onPress={() => setSelectedProduct(item)}
                  onAddToCart={handleAddToCart}
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
          <Ionicons name="close-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.menuContent}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="home-outline" size={24} color="#038B01" />
            <Text style={styles.menuText}>Home</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="calendar-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Reminders</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#666" />
        </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="cart-outline" size={24} color="#038B01" />
            <Text style={styles.menuText}>Orders</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="people-outline" size={24} color="#038B01" />
            <Text style={styles.menuText}>Customers</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="location-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Find Pharmacy</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="document-text-outline" size={24} color="#038B01" />
            <Text style={styles.menuText}>Health Articles</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#038B01" />
            <Text style={styles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#038B01" />
          <Text style={styles.menuText}>Help & Support</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#666" />
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
      </TouchableOpacity>
      </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerFixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
    paddingHorizontal: 16,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  scrollContainer: {
    flex: 1,
    marginTop: 180, 
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 35,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  headerIcon: {
    padding: 8,
    marginLeft: 15,
    position: 'relative',
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContent: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
   

  cartBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#ff3b30',
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

  priceCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 4,
  },

  cartButton: {
    padding: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#038B01",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "30%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: Dimensions.get('window').width / 2 - 24,
  },
  recentCard: {
    width: Dimensions.get('window').width * 0.4, 
    marginRight: 12,
  },
  recentProductsContainer: {
    paddingLeft: 5,
    paddingRight: Dimensions.get('window').width * 0.2,
  },

  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  productInfo: {
    alignItems: "flex-start",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  productDosage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#038B01",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginHorizontal: -8,
  },
  modalContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 0,
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    padding: 8,
  },
  titleUnderline: {
    height: 1,
    backgroundColor: '#a1a1a1',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  availabilityText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066cc',
  },
  itemNumber: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
    paddingLeft: 10,
  },
});

export default ProductsFn;