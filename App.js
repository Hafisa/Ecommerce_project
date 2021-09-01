import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Navigation from './src/Navigation'
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import LoginScreen from './src/Screens/LoginScreen'; 
 import HomeScreen from './src/Screens/HomeScreen'
 import SignupScreen from './src/Screens/SignupScreen'
 import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/database/AuthProvider';
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <>
     <SafeAreaView style={[backgroundStyle,{flex:1}]}>
     <StatusBar barStyle={'light-content'} backgroundColor={'#141518'}/>
     <AuthProvider>
     <Navigation/>
     </AuthProvider>
    
     </SafeAreaView>
     </>
//      <SafeAreaView style={[backgroundStyle,{flex:1}]}>
//        <StatusBar barStyle={'light-content'} backgroundColor={'#141518'}/>
// {/*      
//        <NavigationContainer>
//        {/* <SignupScreen/> */}
//          {/* <LoginScreen/> */}
//        {/* <HomeScreen/> */}
//        <NavigationContainer> 
//      </SafeAreaView>
   );
 }; 
 export default App;