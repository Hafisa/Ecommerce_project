import  React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import Home from '../Home';
import CreateScreen from "../../Screens/CreateScreen"
import UpdateList from '../../Screens/UpdateList'
import UpdateScreen from '../../Screens/UpdateScreen'
import Post from '../../database/PostContext'
const Drawer = createDrawerNavigator();
export default props => {
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