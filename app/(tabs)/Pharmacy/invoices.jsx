import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Helper function to format currency
const formatCurrency = (amount) => {
  return `KSh ${amount.toLocaleString()}`;
};

// Mock data for invoices
const invoiceData = [
  { id: 'INV-001', customer: 'John Doe', amount: 15000, status: 'Paid' },
  { id: 'INV-002', customer: 'Jane Smith', amount: 20000, status: 'Pending' },
  { id: 'INV-003', customer: 'Alice Johnson', amount: 30000, status: 'Paid' },
  { id: 'INV-004', customer: 'Bob Brown', amount: 25000, status: 'Overdue' },
  { id: 'INV-005', customer: 'Charlie Davis', amount: 10000, status: 'Pending' },
  { id: 'INV-006', customer: 'Eve White', amount: 40000, status: 'Paid' },
  { id: 'INV-007', customer: 'Frank Green', amount: 50000, status: 'Overdue' },
  { id: 'INV-008', customer: 'Grace Black', amount: 35000, status: 'Pending' },
  { id: 'INV-009', customer: 'Hank Blue', amount: 45000, status: 'Paid' },
  { id: 'INV-010', customer: 'Ivy Yellow', amount: 60000, status: 'Overdue' },
];

const Invoices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter invoices based on search query and status
  const filteredInvoices = invoiceData.filter(invoice => 
    (invoice.customer.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === 'All' || invoice.status === statusFilter)
  );

  // Render each invoice item
  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.invoiceId}>{item.id}</Text>
      <Text style={styles.customer}>{item.customer}</Text>
      <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
      <Text
        style={[
          styles.status,
          item.status === 'Paid' ? styles.paid :
          item.status === 'Pending' ? styles.pending : styles.overdue
        ]}
      >
        {item.status}
      </Text>
    </View>
  ), []);

  // Header for the list
  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, styles.headerId]}>Invoice ID</Text>
      <Text style={[styles.headerText, styles.headerCustomer]}>Customer</Text>
      <Text style={[styles.headerText, styles.headerAmount]}>Amount</Text>
      <Text style={[styles.headerText, styles.headerStatus]}>Status</Text>
    </View>
  );

  // Filter modal component
  const FilterModal = ({ visible, onClose, currentFilter, onFilterSelect }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filter by Status</Text>
          {['All', 'Paid', 'Pending', 'Overdue'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[styles.filterOption, statusFilter === status && styles.selectedFilter]}
              onPress={() => {
                setStatusFilter(status);
                setFilterModalVisible(false);
              }}
            >
              <Text style={styles.filterOptionText}>{status}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setFilterModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainerTitle}>
        <Text style={styles.screenTitle}>Invoices</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by invoice ID or customer"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <Ionicons name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredInvoices}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.listContentContainer}
      />
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        currentFilter={statusFilter}
        onFilterSelect={setStatusFilter}
      />
    </SafeAreaView>
  );
};

// Styles (unchanged)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#333',
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  filterButton: {
    padding: 10,
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  headerId: {
    flex: 2,
  },
  headerCustomer: {
    flex: 3,
  },
  headerAmount: {
    flex: 2,
  },
  headerStatus: {
    flex: 2,
    textAlign: 'right',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  invoiceId: {
    flex: 2,
    fontSize: 14,
    color: '#333',
  },
  customer: {
    flex: 3,
    fontSize: 14,
    color: '#333',
  },
  amount: {
    flex: 2,
    fontSize: 14,
    color: '#333',
  },
  status: {
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  paid: {
    color: '#038B01',
  },
  pending: {
    color: 'orange',
  },
  overdue: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  filterOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedFilter: {
    backgroundColor: '#e6e6e6',
  },
  filterOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Invoices;