import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const menuItems = [
  { icon: 'home', title: 'Home', route: 'Home' },
  { icon: 'event', title: 'Reminders', route: 'Reminders' },
  { icon: 'local-mall', title: 'Orders', route: 'Orders' },
  // Add more menu items
];

const MenuModal = ({ visible, onClose, navigation }) => {
  const handleNavigation = (route) => {
    onClose();
    navigation.navigate(route);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.menuOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.menuContainer}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderTitle}>Menu</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.menuContent}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => handleNavigation(item.route)}
                >
                  <MaterialIcons name={item.icon} size={24} color="#038B01" />
                  <Text style={styles.menuText}>{item.title}</Text>
                  <MaterialIcons name="chevron-right" size={24} color="#777" />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MenuModal;
