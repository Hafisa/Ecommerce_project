'use strict';

import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import { PostContext } from '../../database/PostContext';
export default (props) => {
  const [data, setData] = useState();
  const { setPostDetails } = useContext(PostContext)
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
    <TouchableOpacity
      onPress={() => {
        setPostDetails(item)
        props.navigation.navigate("View")
      }
      }
      style={styles.item} >
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
    </TouchableOpacity>
  );
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        scrollEnabled={true}
      />
    </ScrollView>
  );
};

