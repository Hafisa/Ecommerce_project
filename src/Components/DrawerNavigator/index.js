import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import Home from '../Home';
import CreateScreen from "../../Screens/CreateScreen"
const Drawer = createDrawerNavigator();
export default props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Product" component={CreateScreen} />
        <Drawer.Screen name="Logout" component={CreateScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}