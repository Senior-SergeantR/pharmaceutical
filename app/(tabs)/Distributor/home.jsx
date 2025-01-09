import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const windowWidth = Dimensions.get('window').width;
const categories = [
    {
      name: "Analgesics",
      image: require('../../../assets/images/analgesics.png'),
      description: "Pain relieving medications"
    },
    {
      name: "Antibiotics", 
      image: require('../../../assets/images/antibiotic.jpg'),
      description: "Fight bacterial infections"
    },
    {
      name: "Antidepressants",
      image: require('../../../assets/images/antidepresants.webp'), 
      description: "Treat depression and mood disorders"
    },
    {
      name: "Antipsychotics",
      image: require('../../../assets/images/antipsychotic.jpg'),
      description: "Manage psychotic disorders"
    },
    {
      name: "Antivirals",
      image: require('../../../assets/images/antivirals.jpg'),
      description: "Combat viral infections"
    },
    {
      name: "Sedatives",
      image: require('../../../assets/images/sedatives.jpg'),
      description: "Promote calmness and sleep"
    },
    {
      name: "Stimulants",
      image: require('../../../assets/images/stimulants.jpg'),
      description: "Increase alertness and energy"
    },
    {
      name: "Antihistamines",
      image: require('../../../assets/images/antihistamines.jpg'),
      description: "Relieve allergy symptoms"
    },
    {
      name: "Antihypertensives",
      image: require('../../../assets/images/antihypertensives.webp'),
      description: "Lower blood pressure"
    },
    {
      name: "Antidiabetics",
      image: require('../../../assets/images/antidiabetic.jpg'),
      description: "Control blood sugar levels"
    },
    {
      name: "Anticoagulants",
      image: require('../../../assets/images/anticoagulants.webp'),
      description: "Prevent blood clots"
    },
    {
      name: "Diuretics",
      image: require('../../../assets/images/diuretics.jpg'),
      description: "Increase urine production"
    },
    {
      name: "Antifungals",
      image: require('../../../assets/images/antifungals.jpg'),
      description: "Treat fungal infections"
    },
    {
      name: "Antimalarials",
      image: require('../../../assets/images/antimalaria.png'),
      description: "Prevent and treat malaria"
    },
    {
      name: "Bronchodilators",
      image: require('../../../assets/images/Bronchodilators.jpg'),
      description: "Open up airways in lungs"
    },
    {
      name: "Antiemetics",
      image: require('../../../assets/images/antiemetics.jpg'),
      description: "Prevent nausea and vomiting"
    },
    {
      name: "Immunosuppressants",
      image: require('../../../assets/images/immunosuppressants.jpg'),
      description: "Reduce immune system activity"
    }
  ];
  

  const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
  
    const filteredCategories = categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleCategoryPress = (category) => {
      console.log(`Selected category: ${category.name}`);
    };
  
    return (
      <LinearGradient
        colors={['#f6f9fc', '#ffffff']}
        style={styles.gradient}
      >
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Pharmaceutical Categories</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search medications..."
                placeholderTextColor="#8895a7"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery !== '' && (
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => setSearchQuery('')}
                >
                  <Text style={styles.clearButtonText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
  
          <Text style={styles.categoriesHeader}>
            Categories ({filteredCategories.length})
          </Text>
  
          {loading ? (
            <ActivityIndicator size="large" color="#4a90e2" />
          ) : (
            <View style={styles.categoriesContainer}>
              {filteredCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.category}
                  onPress={() => handleCategoryPress(category)}
                  activeOpacity={0.7}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={category.image}
                      style={styles.categoryImage}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.categoryContent}>
                    <Text style={styles.categoryText}>{category.name}</Text>
                    <Text style={styles.categoryDescription}>
                      {category.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    );
  };

  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      padding: 20,
      paddingTop: 40,
      backgroundColor: 'transparent',
    },
    header: {
      fontSize: 28,
      fontWeight: '800',
      marginBottom: 20,
      color: '#1a2a3a',
      letterSpacing: 0.5,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    searchBar: {
      flex: 1,
      height: 50,
      borderColor: '#e1e8ed',
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
      fontSize: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 3,
    },
    clearButton: {
      position: 'absolute',
      right: 15,
      padding: 8,
      backgroundColor: '#f0f2f5',
      borderRadius: 15,
    },
    clearButtonText: {
      color: '#8895a7',
      fontSize: 14,
      fontWeight: '600',
    },
    categoriesHeader: {
      fontSize: 22,
      fontWeight: '700',
      marginVertical: 20,
      paddingHorizontal: 20,
      color: '#1a2a3a',
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 8,
      justifyContent: 'space-between',
    },
    category: {
      width: (windowWidth - 48) / 3, 
      marginBottom: 16,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      margin: 4, 
    },
    imageContainer: {
      width: '100%',
      height: 110,
      backgroundColor: '#f6f9fc',
      overflow: 'hidden',
    },
    categoryImage: {
      width: '100%',
      height: '100%',
    },
    categoryContent: {
      padding: 15,
    },
    categoryText: {
      fontSize: 14, 
      fontWeight: '700',
      color: '#1a2a3a',
      marginBottom: 4,
    },
    categoryDescription: {
      fontSize: 11, 
      color: '#8895a7',
      lineHeight: 14,
    },
  });
  
  export default App;
