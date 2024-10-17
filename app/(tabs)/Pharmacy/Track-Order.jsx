import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ProgressBarAndroid, Platform, StatusBar, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const OrderHistoryScreen = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { id: 'AB12345678', progress: 0.25, orderDate: '2023-10-01', origin: 'Nairobi', estArrival: '2023-10-05', destination: 'Thika', status: 'Pending', products: [
      { name: 'Aspirin', price: 599, quantity: 2, contents: 'Acetylsalicylic acid', grams: 500, packSize: 100 },
      { name: 'Ibuprofen', price: 799, quantity: 1, contents: 'Ibuprofen', grams: 400, packSize: 50 },
    ], total: 1997 },
    { id: 'CD23456789', progress: 0.50, orderDate: '2023-09-25', origin: 'Mombasa', estArrival: '2023-09-30', destination: 'Nakuru', status: 'Packaged', products: [
      { name: 'Paracetamol', price: 499, quantity: 3, contents: 'Acetaminophen', grams: 500, packSize: 100 },
    ], total: 1497 },
    { id: 'EF34567890', progress: 0.75, orderDate: '2023-09-15', origin: 'Kisumu', estArrival: '2023-09-20', destination: 'Eldoret', status: 'On Transit', products: [
      { name: 'Amoxicillin', price: 1299, quantity: 1, contents: 'Amoxicillin trihydrate', grams: 250, packSize: 20 },
      { name: 'Omeprazole', price: 899, quantity: 2, contents: 'Omeprazole', grams: 20, packSize: 30 },
    ], total: 3097 },
    { id: 'GH45678901', progress: 1.00, orderDate: '2023-09-01', origin: 'Nyeri', estArrival: '2023-09-05', destination: 'Nanyuki', status: 'Delivered', products: [
      { name: 'Metformin', price: 699, quantity: 1, contents: 'Metformin hydrochloride', grams: 500, packSize: 60 },
    ], total: 699 },
  
      {
        id: 'IJ12345678',
        progress: 0.25,
        orderDate: '2023-10-01',
        origin: 'Nairobi',
        estArrival: '2023-10-05',
        destination: 'Thika',
        status: 'Pending',
        products: [
          { name: 'Aspirin', price: 599, quantity: 2, contents: 'Acetylsalicylic acid', grams: 500, packSize: 100 },
          { name: 'Ibuprofen', price: 799, quantity: 1, contents: 'Ibuprofen', grams: 400, packSize: 50 },
          { name: 'Vitamin C', price: 450, quantity: 3, contents: 'Ascorbic acid', grams: 1000, packSize: 60 },
          { name: 'Zinc Supplements', price: 350, quantity: 2, contents: 'Zinc gluconate', grams: 50, packSize: 100 },
        ],
        total: 3597
      },
      {
        id: 'KL23456789',
        progress: 0.50,
        orderDate: '2023-09-25',
        origin: 'Mombasa',
        estArrival: '2023-09-30',
        destination: 'Nakuru',
        status: 'Packaged',
        products: [
          { name: 'Paracetamol', price: 499, quantity: 3, contents: 'Acetaminophen', grams: 500, packSize: 100 },
          { name: 'Amoxicillin', price: 1299, quantity: 1, contents: 'Amoxicillin trihydrate', grams: 250, packSize: 20 },
          { name: 'Multivitamin', price: 899, quantity: 2, contents: 'Various vitamins and minerals', grams: 100, packSize: 90 },
          { name: 'Omega-3 Fish Oil', price: 1200, quantity: 1, contents: 'EPA and DHA', grams: 1000, packSize: 120 },
        ],
        total: 5295
      },
  ];

  const filteredOrders = showCompleted
    ? orders.filter(order => order.status === 'Delivered')
    : orders.filter(order => order.status !== 'Delivered');

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return 'time-outline';
      case 'Packaged': return 'cube-outline';
      case 'On Transit': return 'car-outline';
      case 'Delivered': return 'checkmark-circle-outline';
      default: return 'help-circle-outline';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return '#eb0707';
      case 'Packaged': return '#FFA500';
      case 'On Transit': return '#1E90FF';
      case 'Delivered': return '#32CD32';
      default: return '#808080';
    }
  };

  const renderOrder = (order) => (
    <View key={order.id} style={styles.orderContainer}>
      <View style={styles.orderRow}>
        <Text style={styles.subtitle}>Tracking ID:</Text>
        <Text style={styles.trackingId}>{order.id}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={Math.min(order.progress, 1)}
          color={getStatusColor(order.status)}
          style={styles.progressBar}
        />
        <View style={[styles.iconContainer, { left: `${Math.min(order.progress, 1) * 100}%` }]}>
          <Ionicons name={getStatusIcon(order.status)} size={24} color={getStatusColor(order.status)} />
        </View>
      </View>
      <View style={styles.orderRow}>
        <Text style={styles.orderDetails}>Order Date: {order.orderDate}</Text>
        <Text style={styles.orderDetails}>Est. Arrival: {order.estArrival}</Text>
      </View>
      <View style={styles.orderRow}>
        <Text>Origin<Text style={styles.orderOrigin}>: {order.origin}</Text></Text>
        <Text>Destination: <Text style={styles.orderDestination}>{order.destination}</Text></Text>
      </View>
      <View style={styles.orderRow}>
        <Text style={styles.orderDetails}>Status: <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>{order.status}</Text></Text>
        <TouchableOpacity onPress={() => setSelectedOrder(order)}>
          <Text style={styles.link}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const OrderDetailsModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!order}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Order Details</Text>
            </View>

            <View style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order #{order.id}</Text>
                <Text style={[styles.orderStatus, { color: getStatusColor(order.status) }]}>{order.status}</Text>
              </View>

              <InfoContainer title="Tracking Information">
                <OrderRow label="Tracking ID" value={order.id} bold />
                <OrderRow label="Order Date" value={order.orderDate} />
                <OrderRow label="Est. Arrival" value={order.estArrival} />
                <OrderRow label="Origin" value={order.origin} />
                <OrderRow label="Destination" value={order.destination} />
              </InfoContainer>

              <View style={styles.progressContainer}>
                <Progress.Bar
                  progress={order.progress}
                  width={null}
                  height={10}
                  color={getStatusColor(order.status)}
                  unfilledColor="#E0E0E0"
                  borderWidth={0}
                />
                <View style={[styles.progressIcon, { left: `${order.progress * 100}%` }]}>
                  <Ionicons name={getStatusIcon(order.status)} size={24} color={getStatusColor(order.status)} />
                </View>
                <Text style={styles.progressText}>{`${Math.round(order.progress * 100)}%`}</Text>
              </View>

              <InfoContainer title="Order Details">
                {order.products.map((product, index) => (
                  <ProductItem key={index} {...product} />
                ))}
                <View style={styles.totalContainer}>
                  <Text style={styles.totalLabel}>Total:</Text>
                  <Text style={styles.totalPrice}>KSh {order.total.toLocaleString()}</Text>
                </View>
              </InfoContainer>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !showCompleted && styles.activeButton]}
          onPress={() => setShowCompleted(false)}
        >
          <Text style={styles.buttonText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, showCompleted && styles.activeButton]}
          onPress={() => setShowCompleted(true)}
        >
          <Text style={styles.buttonText}>Completed</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredOrders.map(renderOrder)}
      </ScrollView>
      <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </View>
  );
};

const OrderRow = ({ label, value, bold }) => (
  <View style={styles.orderRow}>
    <Text style={[styles.orderLabel, bold && styles.boldText]}>{label}:</Text>
    <Text style={[styles.orderValue, bold && styles.boldText]}>{value}</Text>
  </View>
);

const InfoContainer = ({ title, children }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ProductItem = ({ name, price, quantity, contents, grams, packSize }) => (
  <View style={styles.productItem}>
    <View style={styles.productDetails}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productContents}>{contents}</Text>
      <Text style={styles.productGrams}>{grams} grams</Text>
      <Text style={styles.productPackSize}>Pack of {packSize}</Text>
    </View>
    <Text style={styles.productQuantity}>x{quantity}</Text>
    <Text style={styles.productPrice}>KSh {price.toLocaleString()}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginRight: 24,
  },
  horizontalLine: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    flex: 1,
    padding: 15,
    backgroundColor: '#948f8f',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#038B01',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  orderContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  trackingId: {
    fontSize: 16,
    color: '#6200ee',
  },
  orderDetails: {
    fontSize: 14,
    color: '#555',
  },
  orderOrigin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  orderDestination: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  link: {
    color: '#6200ee',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginBottom: 10,
    height: 24,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    transform: [{ translateX: -12 }],
  },
  statusText: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  orderCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1E90FF',
  },
  orderLabel: {
    fontSize: 16,
    color: '#666',
  },
  orderValue: {
    fontSize: 16,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  progressIcon: {
    position: 'absolute',
    top: -7,
    transform: [{ translateX: -12 }],
  },
  progressText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 12,
  },
  productDetails: {
    flex: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productContents: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  productGrams: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  productPackSize: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  productQuantity: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  productPrice: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default OrderHistoryScreen;

