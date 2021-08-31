'use strict';

import React from 'react';
import { Image, View, Text } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {useSelector, useDispatch} from 'react-redux';

import { AppConstants, AppResources, AppStrings } from '../config';

import Login from '../Screens/LoginScreen';
import Home from '../Screens/HomeScreen';



const mainStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppConstants.scene.login}>
        <Stack.Screen
          name={AppConstants.scene.login}
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={AppConstants.scene.home}
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function RootNavigation(props) {
  const dispatch = useDispatch();

    return mainStack(dispatch);
}

const Stack = createStackNavigator();
