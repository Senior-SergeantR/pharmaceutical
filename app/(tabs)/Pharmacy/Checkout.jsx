import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Icon, CheckBox } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import InvoicesScreen from "../Pharmacy/invoices"

export default function CheckoutScreen({ navigation }) {
  const [email, setEmail] = useState('theagakhanunivertyhospital@gmail.com');
  const [phone, setPhone] = useState('+254720555777');
  const [selectedPayment, setSelectedPayment] = useState('mpesa');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [address, setAddress] = useState('The Agakhan University Hospital, 3rd Parkalnds avenue, Nairobi');
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#038B01', '#04A801']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" type="font-awesome" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Section title="Contact Information" icon="user">
          <EditableInfo
            icon="envelope"
            value={email}
            isEditing={isEditingEmail}
            onChangeText={setEmail}
            onToggleEdit={() => setIsEditingEmail(!isEditingEmail)}
            keyboardType="email-address"
          />
          <EditableInfo
            icon="phone"
            value={phone}
            isEditing={isEditingPhone}
            onChangeText={setPhone}
            onToggleEdit={() => setIsEditingPhone(!isEditingPhone)}
            keyboardType="phone-pad"
          />
        </Section>

        <Section title="Shipping Address" icon="map-marker">
          <EditableInfo
            icon="home"
            value={address}
            isEditing={isEditingAddress}
            onChangeText={setAddress}
            onToggleEdit={() => setIsEditingAddress(!isEditingAddress)}
          />
        </Section>

        <Section title="Payment Method" icon="credit-card">
          <PaymentMethod
            icon={require('../../../assets/images/mastercard-logo.png')}
            text="Master Card"
            lastDigits="4629"
            isSelected={selectedPayment === 'mastercard'}
            onSelect={() => setSelectedPayment('mastercard')}
          />
          <PaymentMethod
            icon={require('../../../assets/images/mpesa.png')}
            text="Mpesa"
            lastDigits="29"
            isSelected={selectedPayment === 'mpesa'}
            onSelect={() => setSelectedPayment('mpesa')}
          />
        </Section>

          <Section title="Order Summary" icon="shopping-cart">
            <SummaryRow title="Subtotal" value="KSHs 1,012,800" />
            <SummaryRow title="Shipping" value="KSHs 4,090" />
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>KSHs 1,016,890</Text>
            </View>
          </Section>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert('Payment Confirmed!')}
        >
          <LinearGradient
            colors={['#038B01', '#04A801']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Confirm Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Section = ({ title, icon, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Icon name={icon} type="font-awesome" size={20} color="#038B01" />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const EditableInfo = ({ icon, value, isEditing, onChangeText, onToggleEdit, keyboardType }) => (
  <View style={styles.infoRow}>
    <Icon name={icon} type="font-awesome" size={16} color="#038B01" />
    {isEditing ? (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={onToggleEdit}
        autoFocus
      />
    ) : (
      <Text style={styles.infoText}>{value}</Text>
    )}
    <TouchableOpacity onPress={onToggleEdit}>
      <Icon name="pencil" type="font-awesome" size={16} color="#038B01" />
    </TouchableOpacity>
  </View>
);

const PaymentMethod = ({ icon, text, lastDigits, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.paymentMethod} onPress={onSelect}>
    <View style={styles.paymentInfo}>
      <Image source={icon} style={styles.paymentIcon} />
      <View style={styles.paymentTextContainer}>
        <Text style={styles.paymentText}>{text}</Text>
        <Text style={styles.paymentDigits}>**** {lastDigits}</Text>
      </View>
    </View>
    <CheckBox
      checked={isSelected}
      onPress={onSelect}
      checkedColor="#038B01"
      containerStyle={styles.checkbox}
    />
  </TouchableOpacity>
);

const SummaryRow = ({ title, value }) => (
  <View style={styles.summaryRow}>
    <Text style={styles.summaryTitle}>{title}</Text>
    <Text style={styles.summaryValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#038B01',
    marginLeft: 10,
  },
  sectionContent: {
    marginLeft: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#038B01',
    paddingVertical: 5,
  },
  infoText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(3, 139, 1, 0.05)',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
  },
  paymentTextContainer: {
    marginLeft: 10,
  },
  checkbox: {
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  paymentDigits: {
    fontSize: 12,
    color: '#666',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryTitle: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#038B01',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#038B01',
  },
  buttonContainer: {
    marginTop: 20,
    overflow: 'hidden',
    borderRadius: 30,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
