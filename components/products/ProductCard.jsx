import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const ProductCard = ({ item, onPress, isRecent, onAddToCart }) => (
  <TouchableOpacity
    style={[styles.card, isRecent && styles.recentCard]}
    onPress={onPress}
  >
    <Image source={{ uri: item.image_url }} style={styles.productImage} />
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


export default ProductCard;