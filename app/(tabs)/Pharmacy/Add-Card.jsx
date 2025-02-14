import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Card, useTheme, Caption, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InvoicesScreen from "../Pharmacy/invoices"

const CardDetailsScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const theme = useTheme();

  const handleSubmit = () => {
    
    console.log('Card details submitted');
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={'#038B01'} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Add Card</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      
      <Text style={styles.subtitle}>Enter the card you want to use when placing an order with BREEG</Text>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.inputContainer}>
            <Icon name="credit-card" size={24} color={'#038B01'} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
              maxLength={16}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="account" size={24} color={'#038B01'}  style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Cardholder Name"
              value={cardHolder}
              onChangeText={setCardHolder}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, styles.halfWidth]}>
              <Icon name="calendar" size={24} color={'#038B01'}  style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                value={expiryDate}
                onChangeText={setExpiryDate}
                keyboardType="numeric"
                maxLength={5}
              />
            </View>

            <View style={[styles.inputContainer, styles.halfWidth]}>
              <Icon name="lock" size={24} color={'#038B01'} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
                maxLength={3}
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>

          <Caption style={styles.securePayment}>
            <Icon name="shield-check" size={18} color={'#038B01'} /> Secure payment with SSL encryption
          </Caption>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize:25,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#e0e0e0',
    height: 1,
    marginBottom: 16,
  },
  subtitle: {
    paddingTop: 100,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#ebeced',
    marginHorizontal: 16,
    elevation: 4,
    borderRadius: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  button: {
    backgroundColor: '#038B01',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  securePayment: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default CardDetailsScreen;
