import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const cardWidth = width * 0.42;

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

const ProductCard = ({ item, navigation, isRecent, onAddToCart }) => {
  const handlePress = useCallback(() => {
    navigation.navigate('ProductDetails', { product: item });
  }, [navigation, item]);

  const handleAddToCart = useCallback(() => {
    onAddToCart(item);
  }, [onAddToCart, item]);

  return (
    <TouchableOpacity
      style={[
        styles.promoCard,
        isRecent ? { width: 180, marginRight: 12 } : { width: cardWidth }
      ]}
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.promoImage}
          resizeMode="cover"
        />
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        )}
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        
        {item.dosage && (
          <Text style={styles.dosageText}>{item.dosage}</Text>
        )}

        <Text style={styles.productPrice}>
          KSh {Number(item.price).toLocaleString()}
        </Text>

        <View style={styles.ratingStockContainer}>
          <StarRating rating={item.rating || 5} />
          <Text style={styles.stockText}>
            {item.stock || 'In Stock'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Ionicons name="cart-outline" size={16} color="#fff" style={{ marginRight: 5 }} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  promoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 4,
  },
  imageContainer: {
    height: 140,
    width: "100%",
    position: "relative",
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
    padding: 8,
  },
  productName: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  dosageText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#038B01",
    fontWeight: "600",
    marginBottom: 4,
  },
  ratingStockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: "row",
  },
  stockText: {
    fontSize: 12,
    color: "#777",
  },
  addToCartButton: {
    backgroundColor: "#038B01",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  }
});

export default ProductCard;
