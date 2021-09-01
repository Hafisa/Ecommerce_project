import  React, { useContext } from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import Home from '../Home';
import CreateScreen from "../../Screens/CreateScreen"
import { AuthContext } from '../../database/AuthProvider';
import UpdateList from '../../Screens/UpdateList'
import UpdateScreen from '../../Screens/UpdateScreen'
import Post from '../../database/PostContext'
const Drawer = createDrawerNavigator();
export default props => {
  // const {user,logout}=useContext(AuthContext)
  return (
    <Post>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Add Product" component={CreateScreen} />
        <Drawer.Screen name="Update Product List" component={UpdateList} />
        <Drawer.Screen name="Update" component={UpdateScreen} />
      </Drawer.Navigator>
      </Post>
  );
}