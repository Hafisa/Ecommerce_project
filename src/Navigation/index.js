'use strict';

import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';

import { AppConstants, AppResources, AppStrings } from '../config';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../database/AuthProvider';
import Login from '../Screens/LoginScreen';
import Home from '../Screens/HomeScreen';
import Signup from '../Components/Signup';
import AuthStack from '../Navigation/AuthStack'
import DrawerNavigator from '../Components/DrawerNavigator';

export default props => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false)
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  if (initializing) return null
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> :

        <AuthStack />
      }

      {/* <Stack.Navigator initialRouteName={AppConstants.scene.login}>
        <Stack.Screen
          name={AppConstants.scene.login}
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={AppConstants.scene.signup}
          component={Signup}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={AppConstants.scene.home}
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    */}
    </NavigationContainer>
  );
};
// export default function Navigation(props) {
//   const dispatch = useDispatch();

//     return mainStack(dispatch);
// }

const Stack = createStackNavigator();
