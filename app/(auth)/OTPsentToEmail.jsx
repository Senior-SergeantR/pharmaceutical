import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Link } from 'expo-router';

const CheckEmailScreen = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 1000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeIn, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(slideUp, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text 
        style={[
          styles.header,
          { opacity: fadeIn, transform: [{ translateY: slideUp }] }
        ]}
      >
        BREEG
      </Animated.Text>

      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <Animated.Text 
            style={[
              styles.icon, 
              { transform: [{ rotate: rotateInterpolate }, { scale }] }
            ]}
          >
            ✔️
          </Animated.Text>
          <Animated.View 
            style={[
              styles.ring, 
              { transform: [{ scale }] },
              styles.ringGlow
            ]} 
          />
        </View>
      </View>

      <Animated.Text 
        style={[
          styles.message,
          { opacity: fadeIn, transform: [{ translateY: slideUp }] }
        ]}
      >
        Check your email, we have sent a verification link to reset your password.
      </Animated.Text>

      <Animated.View 
        style={{ opacity: fadeIn, transform: [{ translateY: slideUp }] }}
      >
        <Link href="/login" style={styles.link}>
          Back to Login
        </Link>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 200,
    marginTop: -150,
    color: '#2d3436',
    letterSpacing: 2,
  },
  iconContainer: {
    marginBottom: 30,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    fontSize: 60,
  },
  ring: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#00b894',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ringGlow: {
    shadowColor: '#00b894',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
    color: '#636e72',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  link: {
    color: '#00b894',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    paddingVertical: 10,
  },
});

export default CheckEmailScreen;
