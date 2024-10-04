import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Link } from 'expo-router';

const CheckEmailScreen = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BREEG</Text>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <Animated.Text style={[styles.icon, { transform: [{ rotate: rotateInterpolate }] }]}>✔️</Animated.Text>
          <Animated.View style={[styles.ring, { transform: [{ scale }] }]} />
        </View>
      </View>
      <Text style={styles.message}>
        Check your email, we have sent a verification link to reset your password.
      </Text>
      <Link href="/login" style={styles.link}>Back to Login</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 200,
    marginTop: -150,
  },
  iconContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: 50,
    
  },
  ring: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#038B01',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    color: '#828282',
  },
  link: {
    color: 'blue',
    fontSize: 16,
  },
});

export default CheckEmailScreen;
