import React, { useEffect } from 'react';
import { SplashScreen } from 'expo';

export default function SplashScreenView() {
  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync();

    // Hide the splash screen after 2 seconds
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  // Your other app code goes here
  // ...

  return (
    <SafeAreaView className="bg-primary h-full">
    
   
    <View className="w-full justify-center items-center h-full px-4 ">
      <Text className="text-7xl font-bold text-white relative mt-50%"> 
        BREEG
      </Text>
      

    </View>
    

 </SafeAreaView>
  );
}


// import { StatusBar } from 'expo-status-bar';

// import { ScrollView, Text, View } from 'react-native';
// import { Link } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';


// export default function App() {
//   return (
    
//    <SafeAreaView className="bg-primary h-full">
    
   
//       <View className="w-full justify-center items-center h-full px-4 ">
//         <Text className="text-7xl font-bold text-white relative mt-50%"> 
//           BREEG
//         </Text>

//       </View>
      
    

//    </SafeAreaView>
//   );
// }



