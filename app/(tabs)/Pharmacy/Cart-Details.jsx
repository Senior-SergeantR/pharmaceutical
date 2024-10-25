import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity.toString());

  const handleQuantityChange = (text) => {
    const newQuantity = parseInt(text);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity.toString());
      onUpdateQuantity(item.id, newQuantity);
    } else if (text === '') {
      setQuantity('');
    }
  };

  const handleBlur = () => {
    if (quantity === '' || parseInt(quantity) === 0) {
      setQuantity('1');
      onUpdateQuantity(item.id, 1);
    }
  };

  const incrementQuantity = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity.toString());
    onUpdateQuantity(item.id, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(1, parseInt(quantity) - 1);
    setQuantity(newQuantity.toString());
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>KSh {item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity}>
            <Ionicons name="remove-circle" size={24} color="#444444" />
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={quantity}
            onChangeText={handleQuantityChange}
            onBlur={handleBlur}
            keyboardType="number-pad"
            selectTextOnFocus
          />
          <TouchableOpacity onPress={incrementQuantity}>
            <Ionicons name="add-circle" size={24} color="#444444" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
        <Ionicons name="close-circle" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
};

const ShoppingCart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Doloxil (Tramadol) 50mg Capsules', price: 6250, image: require('../../../assets/images/cart-meds.jpg'), quantity: 1 },
    { id: 2, name: 'Algostop (Naproxen) 250mg Tablets', price: 250, image: require('../../../assets/images/cart-meds.jpg'), quantity: 1 },
    { id: 3, name: 'Novofen (Ibuprofen) 200mg Capsules', price: 6250, image: require('../../../assets/images/cart-meds.jpg'), quantity: 1 },
    { id: 4, name: 'Paracetamol 500mg Tablets', price: 150, image: require('../../../assets/images/cart-meds.jpg'), quantity: 1 },
    { id: 5, name: 'Amoxicillin 250mg Capsules', price: 450, image: require('../../../assets/images/cart-meds.jpg'), quantity: 1 },
  ]);
  if (cartItems.length === 0) {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
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
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('products')} 
            >
              <Text style={styles.buttonText}>Browse items</Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
      </>
    );
  }
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#444444" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#444444" />
        </TouchableOpacity>
      </View>
     
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemove={removeItem}
            onUpdateQuantity={updateQuantity}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.itemCount}>{totalItems} item{totalItems !== 1 ? 's' : ''} in cart</Text>
        }
      />
     
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>KSh {formatPrice(totalPrice.toFixed(2))}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          <Ionicons name="arrow-forward" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
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
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemCount: {
    fontSize: 14,
    color: '#8E8E93',
    marginVertical: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16b50b',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 40,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  removeButton: {
    alignSelf: 'center',
    marginLeft: 8,
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16b50b',
  },
  checkoutButton: {
    backgroundColor: '#16b50b',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default ShoppingCart;
