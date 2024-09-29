import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress,containerStyles,
  textStyles, isLoading}) => {

  return (
    
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-white rounded-md 
    justify-center 
    items-center p-4
    ${containerStyles}
    ${isLoading ? 'opacity-50' : ''}
    disabled={isLoading}
    
    `}>

      

      <Text className={`text-primary font-psemibold
      ${textStyles}` }>
      {title}
      </Text>
      
    </TouchableOpacity>
    
  )
}

export default CustomButton

const styles = StyleSheet.create({})