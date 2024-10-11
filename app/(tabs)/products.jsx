import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Famiclav 200mg",
    dosage: "100 Tablets",
    image: require("../../assets/images/default-pharm.jpg"),
  },
  {
    id: "2",
    name: "PM-O-Line 20mg",
    dosage: "Capsules",
    image: require("../../assets/images/default-pharm.jpg"),
  },
  {
    id: "3",
    name: "Another Product",
    dosage: "Details",
    image: require("../../assets/images/default-pharm.jpg"),
  },
  {
    id: "4",
    name: "Product Four",
    dosage: "50mg",
    image: require("../../assets/images/default-pharm.jpg"),
  },
  {
    id: "5",
    name: "Product Five",
    dosage: "25ml",
    image: require("../../assets/images/default-pharm.jpg"),
  },
  {
    id: "6",
    name: "Product Six",
    dosage: "10 Capsules",
    image: require("../../assets/images/default-pharm.jpg"),
  },
];

const ProductCard = ({ item, style }) => (
  <View style={[styles.card, style]}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDosage}>{item.dosage}</Text>
    </View>
  </View>
);

const ProductsFn = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleCartPress = () => {
    setCartItems((prevItems) => prevItems + 1);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Catalogue</Text>
            <TouchableOpacity onPress={handleCartPress}>
              <View style={styles.cartContainer}>
                <Text style={styles.icon}>🛒</Text>
                {cartItems > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{cartItems}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search products..."
            />
            <Text style={styles.searchIcon}>🔍</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Products</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products.slice(0, 3)}
            renderItem={({ item }) => (
              <ProductCard item={item} style={styles.horizontalCard} />
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>All Products</Text>
          <View style={styles.productGrid}>
            {products.map(
              (item, index) =>
                index % 2 === 0 && (
                  <View key={item.id} style={styles.productRow}>
                    <ProductCard item={item} style={styles.gridCard} />
                    {index + 1 < products.length && (
                      <ProductCard
                        item={products[index + 1]}
                        style={styles.gridCard}
                      />
                    )}
                  </View>
                )
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  cartContainer: {
    position: "relative",
  },
  icon: {
    fontSize: 24,
  },
  cartBadge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
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
    marginBottom: 0,
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
    borderRadius: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  horizontalCard: {
    width: 160,
    marginRight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  productGrid: {
    flexDirection: "column",
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gridCard: {
    width: "46%",
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDosage: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProductsFn;
