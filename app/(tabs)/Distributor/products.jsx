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
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

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


const ProductScreen = ({ product, onClose, onAddToCart }) => {
  return (
    <ScrollView contentContainerStyle={styles.modalContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onClose}>
          <MaterialIcons name="chevron-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Product</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="edit" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="delete" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleUnderline} />
      <Image source={product.image} style={styles.heroImage} />
      
      <View style={styles.detailsContainer}>
        <View style={styles.availabilityContainer}>
          <MaterialIcons name="check-circle" size={24} color="green" />
          <Text style={styles.availabilityText}>Available</Text>
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        
        <View style={styles.priceCartContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <TouchableOpacity
            style={styles.cartIconContainer}
            onPress={() => onAddToCart(product)}  // Now this will work
          >
            <MaterialIcons name="shopping-cart" size={28} color="#038B01" />
          </TouchableOpacity>
        </View>

        <Text style={styles.itemNumber}>Item Number: {product.itemNumber}</Text>
        <Text style={styles.sectionTitle}>Active Ingredients:</Text>
        {product.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>- {ingredient}</Text>
        ))}
      </View>


    </ScrollView>
  );
};


const ProductsFn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

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
      cartId: `${product.id}-${Date.now()}`
    };
    setCartItems([...cartItems, cartItem]);
  };
  
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header Section */}
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

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Products</Text>
        </TouchableOpacity> */}
      </View>

      {/* Scrollable Content */}
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
                isRecent={true}
                onAddToCart={handleAddToCart}  // Added here
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
                isRecent={true}
              />
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
              {/* Menu Items */}
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
            onAddToCart={handleAddToCart}  // Add this prop
      />
       )}
      </Modal>

    </>
  );
};

const CartModal = ({ visible, onClose, cartItems, onRemoveFromCart, navigation }) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('KSh', '').replace(',', ''));
    return sum + price;
  }, 0);

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
              source={require('../../../assets/images/empty-cart.jpg')}
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


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  container: {
    flex: 1,
    padding: 16,
   
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    maxHeight: '80%',
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  browseButton: {
    backgroundColor: '#038B01',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    maxHeight: '60%',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#038B01',
  },
  removeButton: {
    padding: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#038B01',
  },
  checkoutButton: {
    backgroundColor: '#038B01',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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

  scrollContainer: {
    flex: 1,
    marginTop: 130, 
  },
  
  contentContainer: {
    padding: 16,
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
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 8,
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
    color: "#777",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#038B01",
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
  
  cartIconContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  
  
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },

  modalContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingTop: 10,
    
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
  },
  iconButton: {
    marginLeft: 12,
    padding: 6,
  },
  titleUnderline: {
    height: 1,
    backgroundColor: '#a1a1a1',
    marginHorizontal: 20,
    marginBottom: 570,
  },
  heroImage: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover',
    marginTop: -400,
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
    color: '#777',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
    paddingLeft: 10,
  },
  
  cartheader: {
    
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    backgroundColor: '#038B01',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cartItemsContainer: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#038B01',
  },
  removeButton: {
    padding: 5,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#038B01',
  },
  checkoutButton: {
    backgroundColor: '#038B01',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductsFn;