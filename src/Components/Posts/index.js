'use strict';

import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../database/AuthProvider';
export default (props) => {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext)
  useEffect(() => {
    firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setData(allPost)
    })
  });
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require('../../images/Product.png')} style={styles.itemimage} />
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.subtext}>{item?.category}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.title2}>
            <Image source={require('../../images/calender.png')} style={styles.icon} />
            <Text style={styles.datatext}>  {item?.createdAt}
            </Text></Text>
          <Text style={styles.title2}>
            Price
            <Text style={styles.datatext}>  {item?.price}
            </Text></Text>
        </View>

      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        scrollEnabled={true}
      />
    </View>
  );
};

