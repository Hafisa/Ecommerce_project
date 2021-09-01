import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppConstants, AppResources, AppStrings } from '../config';
import Login from '../Screens/LoginScreen';
import Signup from '../Components/Signup';
const Stack = createStackNavigator();
const AuthStack=()=>{
return(
    <Stack.Navigator initialRouteName={AppConstants.scene.login}>
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
      </Stack.Navigator>
)
}
export default AuthStack;