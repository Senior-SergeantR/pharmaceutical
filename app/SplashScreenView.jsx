import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function SplashScreenView() {
  useEffect(() => {
    async function prepare() {
      try {
        // Prevent the splash screen from auto-hiding
        await SplashScreen.preventAutoHideAsync();

        // Simulate some loading or initialization
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'primary' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 72, fontWeight: 'bold', color: 'white', marginTop: '50%' }}>
          BREEG
        </Text>
      </View>
    </SafeAreaView>
  );
}
