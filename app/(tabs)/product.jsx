import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { height } = Dimensions.get('window');

const ProductScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEdit = () => {
    navigation.navigate('EditProduct', { productId: 'BN-252' });
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Delete", 
          onPress: async () => {
            try {
              await deleteProduct('BN-252');
              console.log("Product deleted successfully");
              navigation.goBack();
            } catch (error) {
              console.error("Error deleting product:", error);
              Alert.alert("Error", "Failed to delete product. Please try again.");
            }
          }, 
          style: "destructive" 
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton}>
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
      <Image
        source={require('../../assets/images/amoxicillin.png')}
        style={styles.heroImage}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.availabilityContainer}>
          <MaterialIcons name="check-circle" size={24} color="green" />
          <Text style={styles.availabilityText}>Available</Text>
        </View>
        <Text style={styles.productName}>Amoxicillin</Text>
        <Text style={styles.price}>KSh1000.00</Text>
        <Text style={styles.itemNumber}>Item Number: BN-252</Text>
        <Text style={styles.sectionTitle}>Active Ingredients:</Text>
        <Text style={styles.ingredient}>- Amoxicillin trihydrate equivalent to Amoxicillin 500 mg</Text>
        <Text style={styles.ingredient}>- Clavulanic acid as potassium clavulanate 125 mg</Text>
        <Text style={styles.ingredient}>- Microcrystalline cellulose 100 mg</Text>
        <Text style={styles.ingredient}>- Sodium starch glycolate 50 mg</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },

  titleUnderline: {
    height: 1,
    backgroundColor: '#a1a1a1',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  
  heroImage: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover',
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
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
    paddingLeft: 10,
  },
});

export default ProductScreen;
