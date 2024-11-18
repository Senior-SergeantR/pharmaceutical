// get styles from a local file
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

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
      <Image source={{ uri: product.image_url }} style={styles.heroImage} />

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
            onPress={() => onAddToCart(product)} // Now this will work
          >
            <MaterialIcons name="shopping-cart" size={28} color="#038B01" />
          </TouchableOpacity>
        </View>

        <Text style={styles.itemNumber}>Item Number: {product.itemNumber}</Text>
        <Text style={styles.sectionTitle}>Active Ingredients:</Text>
        {product.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            - {ingredient}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
