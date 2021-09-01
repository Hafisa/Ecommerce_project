import  React, { useContext } from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import Home from '../Home';
import CreateScreen from "../../Screens/CreateScreen"
import { AuthContext } from '../../database/AuthProvider';
import Logout from "../Logout"
const Drawer = createDrawerNavigator();
export default props => {
  // const {user,logout}=useContext(AuthContext)
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Product" component={CreateScreen} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
  );
}