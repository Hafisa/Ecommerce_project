'use strict';

import React, { useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Posts from '../Posts';
import styles from './styles';
import { AppStyles, AppColors } from '../../themes';
import Logout from '../Logout';
import { AuthContext } from '../../database/AuthProvider';
export default props => {
  const { user } = useContext(AuthContext)
  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      
      <View style={AppStyles.mainContainer}>
        <View style={styles.signInInfoView}>
          <View style={styles.bannerContainer}>
            <Logout />
          </View>
        </View>
        <View>
        <Posts {...props} />
        </View>
      
      </View>
    </SafeAreaView>
  );
};
