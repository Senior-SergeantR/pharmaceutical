import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ProgressBarAndroid, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderHistoryScreen = () => {
  const [showCompleted, setShowCompleted] = useState(false);

  const orders = [
    { id: 'AB12345678', progress: 0.25, orderDate: '2023-10-01', origin: 'Nairobi', estArrival: '2023-10-05', destination: 'Thika', status: 'Pending' },
    { id: 'CD23456789', progress: 0.50, orderDate: '2023-09-25', origin: 'Mombasa', estArrival: '2023-09-30', destination: 'Nakuru', status: 'Packaged' },
    { id: 'EF34567890', progress: 0.75, orderDate: '2023-09-15', origin: 'Kisumu', estArrival: '2023-09-20', destination: 'Eldoret', status: 'On Transit' },
    { id: 'GH45678901', progress: 1.00, orderDate: '2023-09-01', origin: 'Nyeri', estArrival: '2023-09-05', destination: 'Nanyuki', status: 'Delivered' },
    { id: 'IJ56789012', progress: 0.25, orderDate: '2023-10-10', origin: 'Kericho', estArrival: '2023-10-15', destination: 'Narok', status: 'Pending' },
    { id: 'KL67890123', progress: 1.00, orderDate: '2023-09-20', origin: 'Eldoret', estArrival: '2023-09-25', destination: 'Nakuru', status: 'Delivered' },
    { id: 'MN78901234', progress: 1.00, orderDate: '2023-09-18', origin: 'Mombasa', estArrival: '2023-09-23', destination: 'Nairobi', status: 'Delivered' },
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
        <TouchableOpacity>
          <Text style={styles.link}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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
    </View>
  );
};


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
});

export default OrderHistoryScreen;
