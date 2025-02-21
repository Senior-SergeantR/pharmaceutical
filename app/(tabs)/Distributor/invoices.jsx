import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { batch: 'FIG-121', name: 'Doloxil (Tramadol) 50mg Caps...', status: 'Complete' },
  { batch: 'FIG-122', name: 'Analpro (Oxycodone) 5mg/...', status: 'Pending' },
  { batch: 'FIG-123', name: 'Algostop (Naproxen) 250m...', status: 'In Progress' },
  { batch: 'FIG-124', name: 'Novofen (Ibuprofen) 200mg...', status: 'Complete' },
  { batch: 'FIG-125', name: 'Painex (Acetaminophen) 50...', status: 'Complete' },
  { batch: 'FIG-126', name: 'Allergex (Cetirizine) 10mg T...', status: 'In Progress' },
  { batch: 'FIG-127', name: 'Histazin (Fexofenadine) 180...', status: 'In Progress' },
  { batch: 'FIG-128', name: 'Allercalm (Loratadine) 10mg...', status: 'Complete' },
  { batch: 'FIG-129', name: 'Antihist-X (Chlorpheniramin...', status: 'Complete' },
  { batch: 'FIG-130', name: 'Clearzine (Levocetirizine) 5...', status: 'Complete' },
  { batch: 'FIG-131', name: 'Serenity (Fluoxetine) 20mg...', status: 'Complete' },
  { batch: 'FIG-132', name: 'Moodlift (Sertraline) 100mg...', status: 'Complete' },
  { batch: 'FIG-133', name: 'Euthymix (Venlafaxine) 75m...', status: 'Complete' },
  { batch: 'FIG-134', name: 'Cardioguard (Atorvastatin) 40mg...', status: 'Pending' },
  { batch: 'FIG-135', name: 'Lipidlow (Simvastatin) 20mg...', status: 'In Progress' },
  { batch: 'FIG-136', name: 'Pressureease (Lisinopril) 10mg...', status: 'Complete' },
  { batch: 'FIG-137', name: 'Glucobalance (Metformin) 500mg...', status: 'Pending' },
  { batch: 'FIG-138', name: 'Thyrocare (Levothyroxine) 100mcg...', status: 'Complete' },
  { batch: 'FIG-139', name: 'Gastrorelief (Omeprazole) 20mg...', status: 'In Progress' },
  { batch: 'FIG-140', name: 'Bonedense (Alendronate) 70mg...', status: 'Complete' },
  { batch: 'FIG-141', name: 'Respiroclear (Montelukast) 10mg...', status: 'Pending' },
  { batch: 'FIG-142', name: 'Antibax (Amoxicillin) 500mg...', status: 'In Progress' },
  { batch: 'FIG-143', name: 'Dermaclear (Isotretinoin) 20mg...', status: 'Complete' },
  { batch: 'FIG-144', name: 'Sleepwell (Zolpidem) 10mg...', status: 'Pending' },
  { batch: 'FIG-145', name: 'Anxiolyte (Alprazolam) 0.5mg...', status: 'In Progress' },
  { batch: 'FIG-146', name: 'Focusmax (Methylphenidate) 10mg...', status: 'Complete' },
  { batch: 'FIG-147', name: 'Antivert (Meclizine) 25mg...', status: 'Pending' },
  { batch: 'FIG-148', name: 'Musclerelax (Cyclobenzaprine) 10mg...', status: 'In Progress' },
  { batch: 'FIG-149', name: 'Progestasert (Progesterone) 100mg...', status: 'Complete' },
  { batch: 'FIG-150', name: 'Estrobalance (Estradiol) 1mg...', status: 'Pending' },
];

const Invoices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredData = data.filter(
    (item) =>
      (item.batch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'All' || item.status === statusFilter)
  );

  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.batch}>{item.batch}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text
        style={[
          styles.status,
          item.status === 'Complete'
            ? styles.complete
            : item.status === 'Pending'
            ? styles.pending
            : styles.inProgress,
        ]}
      >
        {item.status}
      </Text>
    </View>
  ), []);

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, styles.headerBatch]}>Batch No.</Text>
      <Text style={[styles.headerText, styles.headerName]}>Product Name</Text>
      <Text style={[styles.headerText, styles.headerStatus]}>Status</Text>
    </View>
  );

  const handleBackPress = () => {
    setSearchQuery('');
    setStatusFilter('All');
  };

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
          {['All', 'Complete', 'Pending', 'In Progress'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.filterOption,
                currentFilter === status && styles.selectedFilter,
              ]}
              onPress={() => onFilterSelect(status)}
            >
              <Text style={styles.filterOptionText}>{status}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainerTitle}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Search Invoices</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by batch, name, or status"
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
        data={filteredData}
        keyExtractor={(item) => item.batch}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.listContentContainer}
      />
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        currentFilter={statusFilter}
        onFilterSelect={(status) => {
          setStatusFilter(status);
          setFilterModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  backButton: {
    padding: 5,
  },
  screenTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginRight: 30,
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
  headerContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: '#333',
    marginBottom: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  headerBatch: {
    flex: 2,
  },
  headerName: {
    flex: 4,
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
  batch: {
    flex: 2,
    fontSize: 14,
    color: '#333',
  },
  name: {
    flex: 4,
    fontSize: 14,
    color: '#333',
  },
  status: {
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  complete: {
    color: '#038B01',
  },
  pending: {
    color: 'red',
  },
  inProgress: {
    color: 'orange',
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