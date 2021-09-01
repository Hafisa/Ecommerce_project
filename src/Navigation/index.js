'use strict';

import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../database/AuthProvider';
import AuthStack from '../Navigation/AuthStack'
import DrawerNavigator from '../Components/DrawerNavigator';
export default props => {
  const { user, setUser } = useContext(AuthContext);
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
      {user ?
        <DrawerNavigator /> :
        <AuthStack />
      }
    </NavigationContainer>
  );
};
const Stack = createStackNavigator();
