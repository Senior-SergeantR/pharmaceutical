import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyles,
        isLoading ? { opacity: 0.5 } : null,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#038B01',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    boxShadow: '0px 5px 4px 0px rgba(0, 128, 0, 1)',
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
